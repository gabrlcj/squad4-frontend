import {
  Container,
  TimeBlock,
  RoomBlock,
  TimeContainer,
  Display,
  RoomContainer,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";
import { toast } from "react-toastify";

export function Meeting() {
  const {
    roomScheduling,
    setRoomScheduling,
    roomSchedulings,
    setRoomSchedulings,
    user,
    day,
  } = useContext(AuthContext);
  const [occupiedDatetime, setOccupiedDatetime] = useState([]);
  const [occupiedRooms, setOccupiedRooms] = useState([]);
  console.log(occupiedRooms)

  function formatDateWithZero(date) {
    if (date <= 9) return "0" + date;
    else return date;
  }

  const formatToday =
    formatDateWithZero(day.getFullYear()) +
    "-" +
    formatDateWithZero(day.getMonth() + 1) +
    "-" +
    day.getDate();

  useEffect(() => {
    try {
      api({
        method: "get",
        url: `reunioes/data/${formatToday}`,
      }).then((res) => {
        setRoomSchedulings(res.data.rows);
      });
    } catch (error) {
      toast.error(error.response?.data.mensagem);
    }
  }, [formatToday, setRoomSchedulings]);

  useEffect(() => {
    setOccupiedDatetime(
      roomSchedulings?.map((dayscheduling) => dayscheduling.time_zone)
    );
    setOccupiedRooms(
      roomSchedulings?.map((dayscheduling) => dayscheduling.room)
    );
  }, [roomSchedulings]);

  const timeClickHandler = (event) => {
    event.stopPropagation();
    document.querySelectorAll(".occupied").forEach((item) => {
      if (!occupiedDatetime.includes(item.id)) {
        item.classList.remove("occupied");
      }
    });
    event.target.classList.add("occupied");

    document.querySelectorAll(".hidden").forEach((item) => {
      item.classList.remove("hidden");
    });
    document.querySelectorAll(".overlay").forEach((item) => {
      item.classList.remove("overlay");
    });

    if (roomScheduling.time_zone !== event.target.id) {
      setRoomScheduling({
        ...roomScheduling,
        time_zone: event.target.id,
        user_id: user?.id,
      });
    } else {
      return;
    }
  };

  const roomClickHandler = (event) => {
    event.stopPropagation();

    document.querySelectorAll(".occupied").forEach((item) => {
      if (!occupiedRooms.includes(item.id)) {
        item.classList.remove("occupied");
      }
    });
    event.target.classList.add("occupied");
    if (roomScheduling.room !== event.target.id) {
      setRoomScheduling({
        ...roomScheduling,
        room: event.target.id,
        user_id: user?.id,
      });
    } else {
      return;
    }
  };

  const handleAppointment = async (event) => {
    // event.preventDefault();
    // try {
    //   await api({
    //     method: "post",
    //     url: "agendamentos",
    //     data: scheduling,
    //   });
    //   toast.success("Agendamento feito com sucesso!");
    //   setScheduling({ ...scheduling, date: new Date() });
    // } catch (error) {
    //   toast.error(error.response?.data.mensagem);
    // }
  };

  const horariosId = ["1", "2", "3", "4", "5"];
  const horarios = [
    "08h às 09h",
    "09h às 10h",
    "10h às 11h",
    "11h às 12h",
    "12h às 13h",
  ];
  const horarios2Id = ["6", "7", "8", "9", "10"];
  const horarios2 = [
    "13h às 14h",
    "14h às 15h",
    "15h às 16h",
    "16h às 17h",
    "17h às 18h",
  ];

  const rooms = ["Sala 1", "Sala 2", "Sala 3", "Sala 4"];
  const roomsId = ["1", "2", "3", "4", "5"];

  const timeDisplays = (horarios, horariosId) => {
    return (
      <>
        {horarios.map((horario, index) => {
          return (
            <Display
              className={`${
                occupiedDatetime?.includes(horariosId[index].toString())
                  ? "occupied"
                  : ""
              }`}
              id={horariosId[index]}
              onClick={(event) => timeClickHandler(event)}
            >
              {horario}
            </Display>
          );
        })}
      </>
    );
  };

  const roomDisplays = (rooms, roomsId) => {
    return (
      <>
        {rooms.map((room, index) => {
          return (
            <Display
              marginBottom={"1rem"}
              padding={"0.5rem 1rem"}
              className={`${
                occupiedRooms?.includes(roomsId[index].toString())
                  ? "occupied"
                  : ""
              }`}
              id={roomsId[index]}
              onClick={(event) => roomClickHandler(event)}
            >
              {room}
            </Display>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Container onSubmit={handleAppointment}>
        <TimeBlock>
          <h3 className="overlay">HORÁRIO</h3>
          <TimeContainer className="overlay">
            <div>{timeDisplays(horarios, horariosId)}</div>
            <div>{timeDisplays(horarios2, horarios2Id)}</div>
          </TimeContainer>
        </TimeBlock>
        <RoomBlock>
          <h3 className="hidden">SALAS</h3>

          <RoomContainer className="hidden">
            <div>{roomDisplays(rooms, roomsId)}</div>
          </RoomContainer>
        </RoomBlock>
      </Container>
    </>
  );
}