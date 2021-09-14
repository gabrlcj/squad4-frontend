import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Calendar from 'react-calendar'
import Carousel from 'react-elastic-carousel'

import { Container } from './styles'

export function Calendario({ formatDay, userScheduling }) {
  const { day, setDay, scheduling, setScheduling, setRoomScheduling } = useContext(AuthContext)

  useEffect(() => {
    setScheduling({ ...scheduling, date: dataToDatabase(day) });
    setRoomScheduling({...scheduling, date: dataToDatabase(day)})
  }, [day])

  function dataToDatabase(day) {
    var data = day,
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear()
    return ano + '-' + mes + '-' + dia
  }

  function dataToCalendar(day) {
    var data = day,
      dia = (data.getDate() + 1).toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0')
    return dia + '/' + mes
  }

  return (
    <Container>
      <h5>Hoje é dia {formatDay}</h5>
      <h4>{new Date().toLocaleString('pt-BR', { month: 'long' }).toLocaleUpperCase()}</h4>
      <Calendar
        className='calendario'
        tileClassName='day'
        // onChange={() => setScheduling({ ...scheduling, date: dataToDatabase(day) })}
        onClickDay={setDay}
        value={day}
        showNavigation={false}
        showFixedNumberOfWeeks={true}
        minDate={new Date()}
        // maxDate={setMaxDate(new Date())}
        tileDisabled={({ date }) => date.getDay() === 6 || date.getDay() === 0}
      />
      <h5>Meus agendamentos</h5>
      <div className='appointments'>
        <Carousel itemsToShow={3}>
          {userScheduling?.map((scheduling, index) => (
            <div className='appointment-date' key={index}>
              {dataToCalendar(new Date(scheduling.date))}
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  )
}
