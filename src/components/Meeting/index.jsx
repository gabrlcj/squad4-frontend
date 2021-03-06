import { Container, TimeBlock, RoomBlock, TimeContainer, Display, RoomContainer } from './styles'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import api from '../../api'
import { toast } from 'react-toastify'

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

  function formatDateWithZero(date) {
    if (date <= 9) return '0' + date
    else return date
  }

  const formatToday =
    formatDateWithZero(day.getFullYear()) + '-' + formatDateWithZero(day.getMonth() + 1) + '-' + day.getDate()

  useEffect(() => {
    if (roomScheduling) {
      try {
        api({
          method: 'get',
          url: `reunioes/${formatToday}/${roomScheduling.time_zone}`,
        }).then((res) => {
          setRoomSchedulings(res.data.rows)
        })
      } catch (error) {
        toast.error(error.response?.data.mensagem)
      }
    }
  }, [formatToday, setRoomSchedulings, roomScheduling])

  useEffect(() => {
    setOccupiedDatetime(roomSchedulings?.map((dayscheduling) => dayscheduling.time_zone))
    setOccupiedRooms(roomSchedulings?.map((dayscheduling) => dayscheduling.room))
  }, [roomSchedulings])

  const timeClickHandler = (event) => {
    event.stopPropagation();

    document.querySelectorAll(".occupied").forEach((item) => {
      if (!occupiedDatetime?.includes(item.id.toString())) {
        item.classList.remove("occupied");
      }
    });
  
    event.target.classList.add("occupied");

    document.querySelectorAll('.hidden').forEach((item) => {
      item.classList.remove('hidden')
    })
    document.querySelectorAll('.overlay').forEach((item) => {
      item.classList.remove('overlay')
    })

    if (roomScheduling.time_zone !== event.target.id) {
      setRoomScheduling({
        ...roomScheduling,
        time_zone: event.target.id,
        user_id: user?.id,
      })
    } else {
      return
    }
  }

  const roomClickHandler = (event) => {
    event.stopPropagation()

    document.querySelectorAll(".occupiedRoom").forEach((item) => {
      if(!occupiedRooms.includes(item.id.toString())) {
        item.classList.remove("occupiedRoom");
        item.classList.remove("specificOccupied");
      }});

    event.target.classList.add("occupiedRoom");    
    event.target.classList.add("specificOccupied");

    if (roomScheduling.room !== event.target.id) {
      setRoomScheduling({
        ...roomScheduling,
        room: event.target.id,
        user_id: user?.id,
      })
    } else {
      return
    }
  }

  const horariosId = ['1', '2', '3', '4', '5']
  const horarios = ['08h ??s 09h', '09h ??s 10h', '10h ??s 11h', '11h ??s 12h', '12h ??s 13h']
  const horarios2Id = ['6', '7', '8', '9', '10']
  const horarios2 = ['13h ??s 14h', '14h ??s 15h', '15h ??s 16h', '16h ??s 17h', '17h ??s 18h']

  const rooms = ['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4']
  const roomsId = ['1', '2', '3', '4', '5']

  const timeDisplays = (horarios, horariosId) => {
    return (
      <>
        {horarios.map((horario, index) => {
          return (
            <Display
              key={horariosId[index]}
              className={`${occupiedDatetime?.includes(horario) ? 'occupied' : ''}`}
              id={horario}
              onClick={(event) => timeClickHandler(event)}
            >
              {horario}
            </Display>
          )
        })}
      </>
    )
  }

  const roomDisplays = (rooms, roomsId) => {
    return (
      <>
        {rooms.map((room, index) => {
          return (
            <Display
              key={roomsId[index]}
              marginBottom={"1rem"}
              padding={"0.5rem 1rem"}
              className={`${
                occupiedRooms?.includes(room)
                  ? "occupiedRoom"
                  : ""
              }`}
              id={room}
              onClick={(event) => roomClickHandler(event)}
            >
              {room}
            </Display>
          )
        })}
      </>
    )
  }

  return (
    <>
      <Container>
        <TimeBlock>
          <h3 className='overlay'>HOR??RIO</h3>
          <TimeContainer className='overlay'>
            <div>{timeDisplays(horarios, horariosId)}</div>
            <div>{timeDisplays(horarios2, horarios2Id)}</div>
          </TimeContainer>
        </TimeBlock>
        <RoomBlock>
          <h3 className='hidden'>SALAS</h3>
          <RoomContainer className='hidden'>
            <div>{roomDisplays(rooms, roomsId)}</div>
          </RoomContainer>
        </RoomBlock>
      </Container>
    </>
  )
}
