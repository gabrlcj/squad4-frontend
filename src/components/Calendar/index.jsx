import { useState } from 'react'
import Calendar from 'react-calendar'
import { Container } from './styles'

export function Calendario({ formatDay }) {
  const [day, setDay] = useState(new Date())

  return (
    <Container>
      <h5>Hoje é dia {formatDay}</h5>
      <Calendar
        className='calendario'
        tileClassName='day'
        onChange={setDay}
        value={day}
        showNavigation={false}
        showFixedNumberOfWeeks={true}
        minDate={new Date()}
        tileDisabled={({ date }) => date.getDay() === 6 || date.getDay() === 0}
      />
      <h5>Meus agendamentos</h5>
      <div className='appointments'>
        <div>11/09</div>
        <div>16/09</div>
        <div>20/09</div>
      </div>
    </Container>
  )
}
