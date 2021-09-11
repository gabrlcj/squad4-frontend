import { useContext, useEffect } from 'react'
import Calendar from 'react-calendar'
import { AuthContext } from '../../context/AuthContext'
import { Container } from './styles'

export function Calendario({ formatDay }) {
  const { day, setDay, scheduling, setScheduling } = useContext(AuthContext)

  useEffect(() => {
    setScheduling({...scheduling, date: dataToDatabase(day)})
  }, [day]);

  
  function dataToDatabase(day) {
    var data = day,
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear()
    return ano + '-' + mes + '-' + dia
  }

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
        <div>14/09</div>
        <div>16/09</div>
        <div>20/09</div>
      </div>
    </Container>
  )
}
