import { useContext, useEffect } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ptBR from 'date-fns/locale/pt-BR'
import { AuthContext } from '../../context/AuthContext'
import { Container } from './styles'

export function InputDate() {
  const { day, setDay, scheduling, setScheduling } = useContext(AuthContext)
  registerLocale('pt-BR', ptBR)

  useEffect(() => {
    setScheduling({ ...scheduling, date: dataToDatabase(day) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day])

  function dataToDatabase(day) {
    var data = day,
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear()
    return ano + '-' + mes + '-' + dia
  }

  const isWeekday = (day) => {
    const weekDays = day.getDay(day)
    return weekDays !== 0 && weekDays !== 6
  }

  function setMaxDate(date) {
    const d = date.getDate()
    const m = date.getMonth()
    const y = date.getFullYear()

    if (date.getDay() < 5) {
      const lastDay = date.getDate() + (5 - date.getDay())
      return new Date(y, m, lastDay)
    } else {
      const lastDay = d + 7
      return new Date(y, m, lastDay)
    }
  }

  return (
    <Container>
      <DatePicker
        className='input-data'
        selected={day}
        value={day}
        onChange={setDay}
        minDate={new Date()}
        maxDate={setMaxDate(new Date())}
        dateFormat='dd/MM'
        filterDate={isWeekday}
        showPopperArrow={false}
        placeholderText='DATA'
        locale='pt-BR'
      />
    </Container>
  )
}
