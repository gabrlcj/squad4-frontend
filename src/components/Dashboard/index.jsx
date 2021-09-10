// import { useEffect } from 'react'
// import api from '../../api'
import { Calendario } from '../Calendar/index.jsx'
import { Main } from '../Main/index.jsx'
import { NavigationBar } from '../NavigationBar/index.jsx'
import { Container } from './styles.js'

export function Dashboard() {
  const today = new Date()

  // useEffect(() => {
  //   api.get('/agendamentos').then((response) => console.log(response))
  // })

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
        <Main formatDay={formatToday} />
        <Calendario formatDay={formatToday} />
      </Container>
    </>
  )
}
