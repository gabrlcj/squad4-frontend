import { useState } from 'react'
import Calendar from 'react-calendar'
import { Container } from './styles'

export function Calendario() {
  const [day, setDay] = useState(new Date())
  const today = new Date()

  function formatDateWithZero(date) {
    if (date <= 9) return '0' + date
    else return date
  }

  const formatToday =
    formatDateWithZero(today.getDate()) + '/' + formatDateWithZero(today.getMonth() + 1) + '/' + today.getFullYear()

  return (
    <Container>
      <h3>Hoje é dia {formatToday}</h3>
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
    </Container>
  )
}
