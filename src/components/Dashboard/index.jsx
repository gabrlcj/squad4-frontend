import { Calendario } from '../Calendar/index.jsx'
import { Header } from '../Header/index.jsx'
import { Container } from './styles.js'

export function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <h1>Interface gráfica aqui</h1>
        <Calendario />
      </Container>
    </>
  )
}
