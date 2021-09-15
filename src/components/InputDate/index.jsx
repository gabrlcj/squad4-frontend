import DatePicker from 'react-datepicker'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Container } from './styles'

export function InputDate() {
  const { day, setDay, scheduling, setScheduling } = useContext(AuthContext)

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

  return (
    <Container>
      <DatePicker className='input-data' value={day} onChange={setDay} minDate={new Date()} />
    </Container>
  )
}
