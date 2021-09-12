import { Calendario } from '../Calendar/index.jsx'
// import { Header } from '../Header/index.jsx'
import { NavigationBar } from '../NavigationBar/index.jsx'
import { Container } from './styles.js'

export function Dashboard() {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <NavigationBar />
        <Calendario />
      </Container>
    </>
  )
}