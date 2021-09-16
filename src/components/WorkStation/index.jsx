import Table from "../../assets/WorkstationTable.svg";
import UnavailableChair from "../../assets/UnavailableChair.svg";
import { Container, Station } from "./styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";
import { toast } from "react-toastify";
import Carousel from "react-elastic-carousel";
import { LoadingComponent } from "../LoadingComponent";

export function WorkStation({ handleModal }) {
  const { scheduling, setScheduling, user, schedulings, setSchedulings, day } =
    useContext(AuthContext);
  const [occupiedWorkstations, setOccupiedWorkstations] = useState([]);
  const [loading, setLoading] = useState(false);

  function formatDateWithZero(date) {
    if (date <= 9) return "0" + date;
    else return date;
  }

  useEffect(() => {
    setOccupiedWorkstations(
      schedulings?.map((dayscheduling) => dayscheduling.workstation)
    );
  }, [schedulings]);

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
        url: `agendamentos/data/${formatToday}`,
      }).then((res) => {
        setSchedulings(res.data.rows);
      });
    } catch (error) {
      toast.error(error.response?.data.mensagem);
    }
  }, [formatToday, setSchedulings]);

  const chairClickHandler = (event, chairNumber) => {
    event.stopPropagation();

    document.querySelectorAll(".busy").forEach((item) => {
      if (!occupiedWorkstations.includes(chairNumber)) {
        item.classList.remove("occupied");
        item.classList.remove("busy");
        item.classList.add("unoccupied");
      }
    });

    if (
      scheduling.workstation !== chairNumber &&
      !occupiedWorkstations.includes(chairNumber.toString())
    ) {
      event.target.classList.remove("unoccupied");
      event.target.classList.add("occupied");
      event.target.classList.add("busy");
      event.target.classList.add("occupiedChair");
      setScheduling({
        ...scheduling,
        workstation: chairNumber.toString(),
        user_id: user?.id,
      });
    } else {
      return;
    }
  };

  const handleAppointment = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await api({
        method: "post",
        url: "agendamentos",
        data: scheduling,
      });

      toast.success("Agendamento feito com sucesso!");
      setScheduling({ ...scheduling, date: new Date() });
      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data.mensagem);
      setLoading(false);
    }
  };

  const unavailableSeat = () => {
    return (
      <div className="circle unavailable">
        <img src={UnavailableChair} alt="Marcação de cadeira indisponivel" />
      </div>
    );
  };

  function isOdd(num) {
    return num % 2 === 1;
  }

  function isEven(num) {
    return num % 2 === 0;
  }

  const GenerateUpChairs = (chairNumbers) => {
    return (
      <>
        {chairNumbers.map((chairNumber) => {
          return (
            <div
              className={`circle up ${
                occupiedWorkstations.includes(chairNumber.toString())
                  ? "occupied"
                  : "unoccupied"
              }`}
              key={chairNumber}
              onClick={(event) => {
                chairClickHandler(event, chairNumber);
                handleModal();
              }}
            >
              {isEven(chairNumber) ? unavailableSeat() : ""}
            </div>
          );
        })}
      </>
    );
  };

  const GenerateDownChairs = (chairNumbers) => {
    return (
      <>
        {chairNumbers.map((chairNumber) => {
          return (
            <div
              className={`circle down ${
                occupiedWorkstations.includes(chairNumber.toString())
                  ? "occupied"
                  : "unoccupied"
              }`}
              key={chairNumber}
              onClick={(event) => {
                chairClickHandler(event, chairNumber);
                handleModal();
              }}
            >
              {isOdd(chairNumber) ? unavailableSeat() : ""}
            </div>
          );
        })}
      </>
    );
  };

  const tableStation = (id, chairs, chairs2) => {
    return (
      <Station id={id}>
        <div className="chairs">{GenerateUpChairs(chairs)}</div>
        <img className="table" src={Table} alt="Mesa de trabalho" />
        <div className="chairs">{GenerateDownChairs(chairs2)}</div>
      </Station>
    );
  };

  let chairNumber = 640;
  const allChairs = Array.apply(null, { length: chairNumber }).map(
    Number.call,
    Number
  );

  function simpleArray(chair) {
    return [chair, chair + 16];
  }

  const creatingWorkstations = (allStations, allChairs) => {
    return (
      <>
        {allStations.map((station, index) => (
          <div className="content">
            {tableStation(
              allStations[index],
              [
                allChairs[station],
                allChairs[station + 1],
                allChairs[station + 2],
                allChairs[station + 3],
              ],
              [
                allChairs[station + 4],
                allChairs[station + 5],
                allChairs[station + 6],
                allChairs[station + 7],
              ]
            )}
            {tableStation(
              allStations[index + 1],
              [
                allChairs[station + 8],
                allChairs[station + 9],
                allChairs[station + 10],
                allChairs[station + 11],
              ],
              [
                allChairs[station + 12],
                allChairs[station + 13],
                allChairs[station + 14],
                allChairs[station + 15],
              ]
            )}
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {scheduling.office === "São Paulo" ? (
        <Container>
          <Carousel itemsToShow={1} className="carousel">
            {creatingWorkstations(simpleArray(1), allChairs)}
            {creatingWorkstations(simpleArray(18), allChairs)}
            {creatingWorkstations(simpleArray(33), allChairs)}
            {creatingWorkstations(simpleArray(50), allChairs)}
            {creatingWorkstations(simpleArray(67), allChairs)}
            {creatingWorkstations(simpleArray(84), allChairs)}
            {creatingWorkstations(simpleArray(101), allChairs)}
            {creatingWorkstations(simpleArray(118), allChairs)}
            {creatingWorkstations(simpleArray(133), allChairs)}
            {creatingWorkstations(simpleArray(150), allChairs)}
            {creatingWorkstations(simpleArray(167), allChairs)}
            {creatingWorkstations(simpleArray(184), allChairs)}
            {creatingWorkstations(simpleArray(201), allChairs)}
            {creatingWorkstations(simpleArray(218), allChairs)}
            {creatingWorkstations(simpleArray(233), allChairs)}
            {creatingWorkstations(simpleArray(250), allChairs)}
            {creatingWorkstations(simpleArray(267), allChairs)}
            {creatingWorkstations(simpleArray(284), allChairs)}
            {creatingWorkstations(simpleArray(301), allChairs)}
            {creatingWorkstations(simpleArray(318), allChairs)}
            {creatingWorkstations(simpleArray(233), allChairs)}
            {creatingWorkstations(simpleArray(250), allChairs)}
            {creatingWorkstations(simpleArray(267), allChairs)}
            {creatingWorkstations(simpleArray(284), allChairs)}
            {creatingWorkstations(simpleArray(301), allChairs)}
            {creatingWorkstations(simpleArray(318), allChairs)}
            {creatingWorkstations(simpleArray(333), allChairs)}
            {creatingWorkstations(simpleArray(350), allChairs)}
            {creatingWorkstations(simpleArray(367), allChairs)}
            {creatingWorkstations(simpleArray(384), allChairs)}
            {creatingWorkstations(simpleArray(401), allChairs)}
            {creatingWorkstations(simpleArray(418), allChairs)}
            {creatingWorkstations(simpleArray(433), allChairs)}
            {creatingWorkstations(simpleArray(450), allChairs)}
            {creatingWorkstations(simpleArray(467), allChairs)}
            {creatingWorkstations(simpleArray(484), allChairs)}
            {creatingWorkstations(simpleArray(501), allChairs)}
            {creatingWorkstations(simpleArray(518), allChairs)}
            {creatingWorkstations(simpleArray(533), allChairs)}
            {creatingWorkstations(simpleArray(550), allChairs)}''
            {creatingWorkstations(simpleArray(567), allChairs)}
            {creatingWorkstations(simpleArray(584), allChairs)}
            {creatingWorkstations(simpleArray(601), allChairs)}
          </Carousel>
        </Container>
      ) : (
        <Container>
          <Carousel itemsToShow={1}>
            {creatingWorkstations(simpleArray(1), allChairs)}
            {creatingWorkstations(simpleArray(18), allChairs)}
            {creatingWorkstations(simpleArray(33), allChairs)}
            {creatingWorkstations(simpleArray(50), allChairs)}
            {creatingWorkstations(simpleArray(67), allChairs)}
            {creatingWorkstations(simpleArray(84), allChairs)}
            {creatingWorkstations(simpleArray(101), allChairs)}
            {creatingWorkstations(simpleArray(118), allChairs)}
            {creatingWorkstations(simpleArray(133), allChairs)}
            {creatingWorkstations(simpleArray(150), allChairs)}
            {creatingWorkstations(simpleArray(167), allChairs)}
            {creatingWorkstations(simpleArray(184), allChairs)}
            {creatingWorkstations(simpleArray(201), allChairs)}
            {creatingWorkstations(simpleArray(218), allChairs)}
            {creatingWorkstations(simpleArray(233), allChairs)}
          </Carousel>
        </Container>
      )}
    </>
  );
}
