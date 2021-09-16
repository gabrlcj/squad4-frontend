import Carousel from 'react-elastic-carousel'
import { Container } from './styles'

export function Appointments({ formatDay, userScheduling }) {
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
        <Carousel itemsToShow={1}>
          {userScheduling?.map((scheduling, index) => (
            <div className='appointment-date' key={index}>
              {dataToCalendar(new Date(scheduling.date))}
              <strong>{scheduling.office}</strong>
              <strong>{scheduling.workstation}</strong>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  )
}
