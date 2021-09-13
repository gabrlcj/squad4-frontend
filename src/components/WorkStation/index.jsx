import Table from '../../assets/WorkstationTable.svg'
import { Container, Station } from './styles'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import api from '../../api'
import { toast } from 'react-toastify'

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

    if (scheduling.workstation !== chairNumber) {
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

  const GenerateUpChairs = (chairNumbers) => {
    return (
      <>
        {chairNumbers.map((chairNumber) => {
          return (
            <div
              className={`circle up ${occupiedWorkstations.includes(chairNumber.toString()) ? 'red' : 'green'}`}
              key={chairNumber}
              onClick={(event) => chairClickHandler(event, chairNumber)}
            >
              {chairNumber}
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
              className={`circle down ${occupiedWorkstations.includes(chairNumber.toString()) ? 'red' : 'green'}`}
              key={chairNumber}
              onClick={(event) => chairClickHandler(event, chairNumber)}
            >
              {chairNumber}
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
        <img src={Table} alt='Mesa de trabalho' />
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
      <Container>
        <div className='content'>
          {tableStation(1, [1, 2, 3, 4], [5, 6, 7, 8])}
          {tableStation(2, [9, 10, 11, 12], [13, 14, 15, 16])}
        </div>
        <div className='content'>
          {tableStation(3, [17, 18, 19, 20], [21, 22, 23, 24])}
          {tableStation(4, [25, 26, 27, 28], [29, 30, 31, 32])}
        </div>
      </Container>
    </>
  )
}
