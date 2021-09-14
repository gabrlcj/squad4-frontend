import { Container, TimeBlock, RoomBlock, TimeContainer, Display, RoomContainer } from './styles'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import api from '../../api'
import { toast } from 'react-toastify'

export function Meeting() {
  const { roomScheduling, setRoomScheduling, roomSchedulings, setRoomSchedulings, user, day } = useContext(AuthContext)
  const [occupiedDatetime, setOccupiedDatetime] = useState([])

  function formatDateWithZero(date) {
    if (date <= 9) return '0' + date
    else return date
  }

  const formatToday =
    formatDateWithZero(day.getFullYear()) + '-' + formatDateWithZero(day.getMonth() + 1) + '-' + day.getDate()

  useEffect(() => {
    try {
      api({
        method: 'get',
        url: `reunioes/data/${formatToday}`,
      }).then((res) => {
        setRoomSchedulings(res.data.rows)
      })
    } catch (error) {
      toast.error(error.response?.data.mensagem)
    }
  }, [formatToday, setRoomSchedulings])

  useEffect(() => {
    setOccupiedDatetime(roomSchedulings?.map((dayscheduling) => dayscheduling.time_zone))
  }, [roomSchedulings])

  const timeClickHandler = (event) => {
    event.stopPropagation()
    event.target.classList.toggle('red')
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
    event.target.classList.toggle('red')
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
  }

  return (
    <>
      <Container onSubmit={handleAppointment}>
        <TimeBlock>
          <h3>HORÁRIO</h3>
          <TimeContainer>
            <div>
              <Display classname='displayTime' id='1' onClick={(event) => timeClickHandler(event)}>
                8h às 9h
              </Display>
              <Display classname='displayTime' id='2' onClick={(event) => timeClickHandler(event)}>
                9h às 10h
              </Display>
              <Display classname='displayTime' id='3' onClick={(event) => timeClickHandler(event)}>
                10h às 11h
              </Display>
              <Display classname='displayTime' id='4' onClick={(event) => timeClickHandler(event)}>
                11h às 12h
              </Display>
              <Display classname='displayTime' id='5' onClick={(event) => timeClickHandler(event)}>
                12h às 13h
              </Display>
            </div>
            <div>
              <Display classname='displayTime' id='6' onClick={(event) => timeClickHandler(event)}>
                13h às 14h
              </Display>
              <Display classname='displayTime' id='7' onClick={(event) => timeClickHandler(event)}>
                14h às 15h
              </Display>
              <Display classname='displayTime' id='8' onClick={(event) => timeClickHandler(event)}>
                15h às 16h
              </Display>
              <Display classname='displayTime' id='9' onClick={(event) => timeClickHandler(event)}>
                16h às 17h
              </Display>
              <Display classname='displayTime' id='10' onClick={(event) => timeClickHandler(event)}>
                17h às 18h
              </Display>
            </div>
          </TimeContainer>
        </TimeBlock>
        <RoomBlock>
          <h3>SALAS</h3>

          <RoomContainer>
            <div>
              <Display
                id='1'
                marginBottom={'1rem'}
                padding={'0.5rem 1rem'}
                onClick={(event) => roomClickHandler(event)}
              >
                SALA 1
              </Display>
              <Display
                id='2'
                marginBottom={'1rem'}
                padding={'0.5rem 1rem'}
                onClick={(event) => roomClickHandler(event)}
              >
                SALA 2
              </Display>
              <Display
                id='3'
                marginBottom={'1rem'}
                padding={'0.5rem 1rem'}
                onClick={(event) => roomClickHandler(event)}
              >
                SALA 3
              </Display>
              <Display
                id='4'
                marginBottom={'1rem'}
                padding={'0.5rem 1rem'}
                onClick={(event) => roomClickHandler(event)}
              >
                SALA 4
              </Display>
            </div>
          </RoomContainer>
        </RoomBlock>
      </Container>
    </>
  )
}
