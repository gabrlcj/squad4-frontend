import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { toast } from 'react-toastify'
import api from '../../api/index.js'
import { AuthContext } from '../../context/AuthContext.js'
import { Appointments } from '../Appointments/index.jsx'
import { Main } from '../Main/index.jsx'
import { NavigationBar } from '../NavigationBar/index.jsx'
import { Notifications } from '../Notifications/index.jsx'
import { Container } from './styles.js'

export function Dashboard({ showModal, setShowModal, handleModal }) {
  const today = new Date()
  const { id } = useParams()
  const [userScheduling, setUserScheduling] = useState([])
  const { scheduling } = useContext(AuthContext)


  useEffect(() => {
    api({
      method: 'get',
      url: `/agendamentos/colaboradores/${id}`,
    })
      .then((res) => {
        setUserScheduling(res.data)
      })
      .catch((error) => toast.error(error.response?.data.mensagem))
  }, [id, scheduling])

  function formatDateWithZero(date) {
    if (date <= 9) return '0' + date
    else return date
  }

  const formatToday =
    formatDateWithZero(today.getDate()) + '/' + formatDateWithZero(today.getMonth() + 1) + '/' + today.getFullYear()

  return (
    <>
      <Container>
        <NavigationBar />
        <Main formatDay={formatToday} showModal={showModal} setShowModal={setShowModal} handleModal={handleModal} />
        <div className='background-appointments'>
          <Appointments userScheduling={userScheduling} setUserScheduling={setUserScheduling} formatDay={formatToday} handleModal={handleModal} />
        </div>
        <div className='background-notification'>
          <Notifications />
        </div>
      </Container>
    </>
  )
}
