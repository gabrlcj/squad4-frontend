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

  function setMaxDate(date) {

    const d = date.getDate()
    const m = date.getMonth()
    const y = date.getFullYear()

    if (date.getDay() === 5) {
      const lastDay = d + 7;
      return new Date(y, m, lastDay)
    } else {
      const lastDay = date.getDate() + (5 - date.getDay())
      return new Date(y, m, lastDay)
    }
  }


  const formatToday =
    formatDateWithZero(today.getDate()) + '/' + formatDateWithZero(today.getMonth() + 1) + '/' + today.getFullYear()

  return (
    <Container>
      <h3>Hoje é dia {formatToday}</h3>
      <Calendar
        className='calendario'
        tileClassName='day'
        onClickDay={setDay}
        value={day}
        showNavigation={false}
        showFixedNumberOfWeeks={true}
        minDate={new Date()}
        maxDate={setMaxDate(new Date())}
        tileDisabled={({ date }) => date.getDay() === 6 || date.getDay() === 0}
      />
    </Container>
  )
}
