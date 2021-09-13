import { useContext, useEffect } from 'react'
import Calendar from 'react-calendar'
import { AuthContext } from '../../context/AuthContext'
import { Container } from './styles'
import Slider from 'react-slick'

export function SimpleSlider({ children }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{children}</Slider>
}

export function Calendario({ formatDay, userScheduling }) {
  const { day, setDay, scheduling, setScheduling } = useContext(AuthContext)

  useEffect(() => {
    setScheduling({ ...scheduling, date: dataToDatabase(day) })
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
        <SimpleSlider className='carrousel'>
          <div style={{ background: 'lightgrey' }}>11/09</div>
          <div style={{ background: 'lightgrey' }}>11/09</div>
          <div style={{ background: 'lightgrey' }}>11/09</div>
          <div style={{ background: 'lightgrey' }}>11/09</div>
          <div style={{ background: 'lightgrey' }}>11/09</div>
          <div style={{ background: 'lightgrey' }}>11/09</div>
        </SimpleSlider>
        {userScheduling?.map((scheduling, index) => (
          <div key={index}>{dataToCalendar(new Date(scheduling.date))}</div>
        ))}
      </div>
    </Container>
  )
}
