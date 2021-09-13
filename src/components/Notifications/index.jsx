import { Container } from './styles'

export function Notifications() {
  return (
    <Container>
      <h5>Notificações</h5>
      <div className='notification-container'>
        <div>Ei, não vai esquecer do feriado</div>
        <div>Veja as instruções para reabertura</div>
        <div>Prevenções contra a COVID-19</div>
      </div>
    </Container>
  )
}
