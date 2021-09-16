import Table from '../../assets/WorkstationTable.svg'
import UnavailableChair from '../../assets/UnavailableChair.svg'
import { Container, Station } from './styles'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import api from '../../api'
import { toast } from 'react-toastify'
import Carousel from 'react-elastic-carousel'

export function WorkStation() {
  const { scheduling, setScheduling, user, schedulings, setSchedulings, day } = useContext(AuthContext)
  const [occupiedWorkstations, setOccupiedWorkstations] = useState([])

  function formatDateWithZero(date) {
    if (date <= 9) return '0' + date
    else return date
  }

  useEffect(() => {
    setOccupiedWorkstations(schedulings?.map((dayscheduling) => dayscheduling.workstation))
  }, [schedulings])

  const formatToday =
    formatDateWithZero(day.getFullYear()) + '-' + formatDateWithZero(day.getMonth() + 1) + '-' + day.getDate()

  useEffect(() => {
    try {
      api({
        method: 'get',
        url: `agendamentos/data/${formatToday}`,
      }).then((res) => {
        setSchedulings(res.data.rows)
      })
    } catch (error) {
      toast.error(error.response?.data.mensagem)
    }
  }, [formatToday, setSchedulings])

  const chairClickHandler = (event, chairNumber) => {
    event.stopPropagation()

    document.querySelectorAll(".busy").forEach((item) => {
      if (!occupiedWorkstations.includes(chairNumber)) {
        item.classList.remove("occupied");
        item.classList.remove("busy");
        item.classList.add("unoccupied");
      }
    });
           
    if ((scheduling.workstation !== chairNumber) && (!occupiedWorkstations.includes(chairNumber.toString()))) {
      event.target.classList.remove("unoccupied");
      event.target.classList.add("occupied");      
      event.target.classList.add("busy");
      event.target.classList.add("occupiedChair");
      setScheduling({ ...scheduling, workstation: chairNumber.toString(), user_id: user?.id })
    } else {
      return
    }
  }

  const handleAppointment = async (event) => {
    event.preventDefault()
    try {
      await api({
        method: 'post',
        url: 'agendamentos',
        data: scheduling,
      })

      toast.success('Agendamento feito com sucesso!')
      setScheduling({ ...scheduling, date: new Date() })
    } catch (error) {
      toast.error(error.response?.data.mensagem)
    }
  }

  const unavailableSeat = () => {
    return (
      <div className='circle unavailable'>
        <img src={UnavailableChair} alt='Marcação de cadeira indisponivel' />
      </div>
    )
  }

  function isOdd(num) {
    return num % 2 === 1
  }

  function isEven(num) {
    return num % 2 === 0
  }

  const GenerateUpChairs = (chairNumbers) => {
    return (
      <>
        {chairNumbers.map((chairNumber) => {
          return (
            <div
              className={`circle up ${
                occupiedWorkstations.includes(chairNumber.toString()) ? 'occupied' : 'unoccupied'
              }`}
              key={chairNumber}
              onClick={(event) => chairClickHandler(event, chairNumber)}
            >
              {isEven(chairNumber) ? unavailableSeat() : ''}
            </div>
          )
        })}
      </>
    )
  }

  const GenerateDownChairs = (chairNumbers) => {
    return (
      <>
        {chairNumbers.map((chairNumber) => {
          return (
            <div
              className={`circle down ${
                occupiedWorkstations.includes(chairNumber.toString()) ? 'occupied' : 'unoccupied'
              }`}
              key={chairNumber}
              onClick={(event) => chairClickHandler(event, chairNumber)}
            >
              {isOdd(chairNumber) ? unavailableSeat() : ''}
            </div>
          )
        })}
      </>
    )
  }

  const tableStation = (id, chairs, chairs2) => {
    return (
      <Station id={id}>
        <div className='chairs'>{GenerateUpChairs(chairs)}</div>
        <img className='table' src={Table} alt='Mesa de trabalho' />
        <div className='chairs'>{GenerateDownChairs(chairs2)}</div>
      </Station>
    )
  }

  return (
    <>
      <form className='modal' onSubmit={handleAppointment}>
        <strong style={{ marginRight: '1rem' }}>Escolha o dia e a cadeira e clique no botão confirmar</strong>
        <button type='submit'>Confirmar</button>
      </form>
      {scheduling.office === 'São Paulo' ? (
        <Container>
          <Carousel itemsToShow={2} className='carousel'>
            <div className='content'>
              {tableStation(1, [1, 2, 3, 4], [5, 6, 7, 8])}
              {tableStation(2, [9, 10, 11, 12], [13, 14, 15, 16])}
            </div>
            <div className='content'>
              {tableStation(3, [17, 18, 19, 20], [21, 22, 23, 24])}
              {tableStation(4, [25, 26, 27, 28], [29, 30, 31, 32])}
            </div>
            <div className='content'>
              {tableStation(5, [33, 34, 35, 36], [37, 38, 39, 40])}
              {tableStation(6, [41, 42, 43, 44], [45, 46, 47, 48])}
            </div>
            <div className='content'>
              {tableStation(7, [49, 50, 51, 52], [53, 54, 55, 56])}
              {tableStation(8, [57, 58, 59, 60], [61, 62, 63, 64])}
            </div>
          </Carousel>
        </Container>
      ) : (
        <Container>
          <Carousel itemsToShow={2}>
            <div className='content'>
              {tableStation(1, [1, 2, 3, 4], [5, 6, 7, 8])}
              {tableStation(2, [9, 10, 11, 12], [13, 14, 15, 16])}
            </div>
            <div className='content'>
              {tableStation(3, [17, 18, 19, 20], [21, 22, 23, 24])}
              {tableStation(4, [25, 26, 27, 28], [29, 30, 31, 32])}
            </div>
            <div className='content'>
              {tableStation(5, [33, 34, 35, 36], [37, 38, 39, 40])}
              {tableStation(6, [41, 42, 43, 44], [45, 46, 47, 48])}
            </div>
            <div className='content'>
              {tableStation(7, [49, 50, 51, 52], [53, 54, 55, 56])}
              {tableStation(8, [57, 58, 59, 60], [61, 62, 63, 64])}
            </div>
          </Carousel>
        </Container>
      )}
    </>
  )
}
