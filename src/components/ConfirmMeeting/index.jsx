// import { useEffect, useState } from 'react'
// import api from '../../api'

import { Container } from './styles'
// import { toast } from 'react-toastify'
// import CloseModalButton from '../../assets/CloseModal.svg'

export function ConfirmMeeting({ showModal, setShowModal, handleModal }) {

  function handleConfirmMeeting(event) {
    event.preventDefault()

    // const data = {

    // }

    //   api({
    //     method: 'POST',
    //     url: '/colaboradores',
    //     data,
    //   })
    //     .then((res) => toast.success('Registro feito com sucesso!'))
    //     .catch((error) => toast.error(error.response.data.message))
  }

  return (
    <>
      <Container
        onSubmit={handleConfirmMeeting}
        showModal={showModal}
        setShowModal={setShowModal}
        handleModal={handleModal}
      >
        <div className="confirmMeetingModal">
          <h2>INFORMAÇÕES</h2>
          <h3>Ei, antes de confirmar o agendamento se liga nas orientações!</h3>
          <ul>
            <li>Use máscara o tempo todo, posicione-a corretamente sobre o nariz e a boca.</li>
            <li>Higienize as mãos com frequência, disponibilizaremos álcool em gel por toda a FC.</li>
            <li>Evite o compartilhamento de objetos, como canetas, celulares, copos, dentre outros.</li>
            <li>Sabemos que a saudade é grande, mas mantenha o distanciamento social mínimo de 1 metro. </li>
            <li>Em caso de qualquer <strong>sintoma de COVID-19</strong>, cancele seu agendamento!</li>
          </ul>
          <button type='submit'>
            CONFIRMAR
          </button>
        </div>
      </Container>
    </>
  )
}
