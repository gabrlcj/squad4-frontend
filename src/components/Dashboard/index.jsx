import { Calendario } from '../Calendar/index.jsx'
// import { Header } from '../Header/index.jsx'
import { NavigationBar } from '../NavigationBar/index.jsx'
import { Container } from './styles.js'

export function Dashboard() {
  const today = new Date()

  function formatDateWithZero(date) {
    if (date <= 9) return '0' + date
    else return date
  }

  const formatToday =
    formatDateWithZero(today.getDate()) + '/' + formatDateWithZero(today.getMonth() + 1) + '/' + today.getFullYear()

  return (
    <>
      {/* <Header /> */}
      <Container>
        <NavigationBar />
        <Calendario formatDay={formatToday} />
      </Container>
    </>
  )
}
