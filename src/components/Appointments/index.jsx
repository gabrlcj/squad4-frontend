/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { Container } from './styles'
import Cancel from '../../assets/Cancel.svg'
import api from '../../api'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'

export function Appointments({ formatDay, userScheduling, setUserScheduling }) {
  const [cancel, setCancel] = useState(false)
  const { id } = useParams()
  const { scheduling } = useContext(AuthContext)
  const [userRoomSchedule, setUserRoomSchedule] = useState()

  useEffect(() => {
    api({
      method: 'get',
      url: `/agendamentos/colaboradores/${id}`,
    })
      .then((res) => {
        setUserScheduling(res.data)
      })
      .catch((error) => toast.error(error.response?.data.mensagem))
  }, [id, scheduling, userScheduling])

  useEffect(() => {
    api({
      method: 'get',
      url: `/reunioes/colaboradores/${id}`,
    })
      .then((res) => {
        setUserRoomSchedule(res.data)
      })
      .catch((error) => toast.error(error.response?.data.mensagem))
  }, [id, scheduling, setUserRoomSchedule])

  function handleCancel() {
    setCancel(!cancel)
  }

  async function deleteAppointment(id) {
    await api.delete(`/agendamentos/${id}`)
    toast.success('Seu agendamento foi cancelado com sucesso.')
  }

  function dataToCalendar(day) {
    var data = day,
      dia = (data.getDate() + 1).toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0')
    return dia + '/' + mes
  }

  return (
    <Container>
      <h4>Hoje é dia {formatDay}</h4>
      <h5>Meus agendamentos</h5>
      <div className='appointments'>
        {userScheduling?.map((scheduling) => (
          <div
            className={`appointment-date ${cancel ? 'cancel-button' : ''}`}
            key={scheduling.id}
            onClick={handleCancel}
          >
            {dataToCalendar(new Date(scheduling.date))}{' '}
            <img onClick={() => deleteAppointment(scheduling.id)} className='cancel' src={Cancel} alt='Cancelar' />
            <strong>{scheduling.office}</strong>
            <strong>{scheduling.workstation}</strong>
          </div>
        ))}
        {userRoomSchedule?.map((scheduling) => (
          <div
            className={`appointment-date meeting ${cancel ? 'cancel-button' : ''}`}
            key={scheduling.id}
            onClick={handleCancel}
          >
            {dataToCalendar(new Date(scheduling.date))}{' '}
            <img onClick={() => deleteAppointment(scheduling.id)} className='cancel' src={Cancel} alt='Cancelar' />
            <strong>{scheduling.office}</strong>
            <strong>{scheduling.room}</strong>
          </div>
        ))}
      </div>

      <div className='appointments'>

      </div>
    </Container>
  )
}
