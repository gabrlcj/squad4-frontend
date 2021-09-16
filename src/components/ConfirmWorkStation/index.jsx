import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Container } from './styles'
import CloseModalButton from '../../assets/CloseModalScheduling.svg'

export function ConfirmWorkStation({ handleAppointment, handleModal }) {
  const { scheduling } = useContext(AuthContext)

  function dataToCalendar(day) {
    var data = day,
      dia = (data.getDate() + 1).toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0')
    return dia + '/' + mes
  }

  return (
    <Container className='modal' onSubmit={handleAppointment}>
      <img src={CloseModalButton} alt='Fechar' onClick={handleModal} className='closeModalIcon' />
      <div className='confirm-workstation'>
        <h2>
          Estação {scheduling.workstation}, {dataToCalendar(new Date(scheduling.date))} em {scheduling.office} - SP
        </h2>
        <h3>Ei, antes de confirmar o agendamento se liga nas orientações!</h3>
        <ul>
          <li>Use máscara o tempo todo, posicione-a corretamente sobre o nariz e a boca.</li>
          <li>Higienize as mãos com frequência, disponibilizaremos álcool em gel por toda a FC.</li>
          <li>Evite o compartilhamento de objetos, como canetas, celulares, copos, dentre outros.</li>
          <li>Sabemos que a saudade é grande, mas mantenha o distanciamento social mínimo de 1 metro. </li>
          <li>
            Em caso de qualquer <strong>sintoma de COVID-19</strong>, cancele seu agendamento!
          </li>
        </ul>
        <button type='submit'>CONFIRMAR</button>
      </div>
    </Container>
  )
}
