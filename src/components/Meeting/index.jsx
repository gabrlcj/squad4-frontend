import { Container, TimeBlock, RoomBlock } from './styles'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import api from '../../api'
import { toast } from 'react-toastify'

export function Meeting() {
  const { scheduling, setScheduling, user, schedulings, setSchedulings, day } = useContext(AuthContext)
  
  function formatDateWithZero(date) {
    if (date <= 9) return '0' + date
    else return date
  }

  const formatToday =
    formatDateWithZero(day.getFullYear()) + '-' + formatDateWithZero(day.getMonth() + 1) + '-' + day.getDate();

    
  function dataAtualFormatada(day) {
    var data = day,
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear()
    return dia + '/' + mes + '/' + ano
  }



  const handleAppointment = async (event) => {
    event.preventDefault()
    try {
      await api({
        method: 'post',
        url: 'agendamentos',
        data: scheduling,
      })

      toast.success('Agendamento feito com sucesso!')
      setScheduling({ ...scheduling, date: new Date() })
    } catch (error) {
      toast.error(error.response?.data.mensagem)
    }
  }


  return (
    <>
     <Container onSubmit={handleAppointment}>
      <TimeBlock>
        <h3>HORÁRIO</h3>
      </TimeBlock>
      <RoomBlock>

      <h3>SALAS</h3>
      </RoomBlock>
      </Container>
    </>
  )
}
