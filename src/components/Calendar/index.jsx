import { useState } from 'react'
import Calendar from 'react-calendar'
import { Container } from './styles'

export function Calendario() {
  const [day, setDay] = useState(new Date())
  console.log(day)

  return (
    <Container>
      <Calendar className='calendario' onChange={setDay} value={day} />
    </Container>
  )
}
