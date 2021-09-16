import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import api from '../../api'

import { Container } from './styles'
import { toast } from 'react-toastify'
import CloseModalButton from '../../assets/CloseModalScheduling.svg'
import { LoadingComponent } from '../LoadingComponent'

export function CancelScheduling({ showModal, setShowModal, handleModal }) {
  const { roomScheduling } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  function dataAtualFormatada(day) {
    let data = day,
      dia = (data.getDate() + 1).toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear()
    return dia + '/' + mes + '/' + ano
  }

  const handleCancelScheduling = async (event) => {
    event.preventDefault()
    setLoading(true)

    try {
      await api({
        method: 'post',
        url: 'reunioes',
        data: {
          date: roomScheduling.date,
          office: roomScheduling.office,
          room: roomScheduling.room,
          time_zone: roomScheduling.time_zone,
          user_id: roomScheduling.user_id,
        },
      })
      setLoading(false)
      toast.success('Agendamento feito com sucesso!')
      handleModal()
    } catch (error) {
      setLoading(false)
      toast.error(error.response?.data.mensagem)
    }
  }

  return (
    <Container
      onSubmit={handleCancelScheduling}
      showModal={showModal}
      setShowModal={setShowModal}
      handleModal={handleModal}
    >
      {!loading ? (
        <>
          <img src={CloseModalButton} alt='Fechar' onClick={handleModal} className='closeModalIcon' />
          <div className='confirmMeetingModal'>
            <h2>
              {roomScheduling?.room}, {dataAtualFormatada(new Date(roomScheduling?.date))} em {roomScheduling?.office} -
              SP
            </h2>
            <h3>Tudo bem, imprevistos acontecem!</h3>
            <p>Ei, esperamos que esteja tudo bem com você e que seja apenas um imprevisto! Caso contrário, fale conosco, nos preocupamos com sua saúde e seu bem estar.</p>
            <button type='submit'>CANCELAR AGENDAMENTO</button>
          </div>
        </>
      ) : (
        <LoadingComponent dimensions={'25rem'} />
      )}
    </Container>
  )
}
