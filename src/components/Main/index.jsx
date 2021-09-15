import { useState, useContext } from 'react'
import { Container } from './styles'
import { WorkStation } from '../WorkStation'
import { AuthContext } from '../../context/AuthContext'
import LogoImage from '../../assets/Logo.svg'
import BrandName from '../../assets/BrandName.svg'
import { InputDate } from '../InputDate'
import { Meeting } from '../Meeting'
import { Modal } from "../Modal/Modal";
import { ConfirmMeeting } from "../ConfirmMeeting";

export function Main({ showModal, setShowModal, handleModal }) {
  const [station, setStation] = useState('Estação de trabalho')
  const [activeButton, setActiveButton] = useState(0)
  const { day, scheduling, setScheduling, user } = useContext(AuthContext)

  function dataAtualFormatada(day) {
    var data = day,
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear()
    return dia + '/' + mes + '/' + ano
  }

  const buttons = ['1° ANDAR', '2° ANDAR', '3° ANDAR']

  return (
    <>
      {
        showModal ? (
          <Modal showModal={showModal} setShowModal={setShowModal} handleModal={handleModal} >
            <ConfirmMeeting showModal={showModal} setShowModal={setShowModal} handleModal={handleModal} />
          </Modal>
        ) : null
      }

      <Container>
        <div className='brand-container'>
          <img src={LogoImage} alt='Logo da aplicação' />
          <img src={BrandName} alt='Nome da aplicação' />
        </div>
        <div className='selection-bar'>
          <select
            name='filial'
            onChange={(event) => setScheduling({ ...scheduling, office: event.target.value, user_id: user.id })}
          >
            <option name='filial' value='São Paulo'>
              SÃO PAULO - SP
            </option>
            <option name='filial' value='Santos'>
              SANTOS
            </option>
          </select>
          <select name='estação' onChange={(event) => setStation(event.target.value)}>
            <option name='estação' value='Estação de trabalho'>
              ESTAÇÃO DE TRABALHO
            </option>
            <option name='estação' value='Reunião'>
              REUNIÃO
            </option>
          </select>
          <InputDate />
        </div>
        <section>
          {station === 'Estação de trabalho' ? <h2>ESTAÇÕES DISPONÍVEIS PARA {dataAtualFormatada(day)}</h2> : <h2>HORÁRIOS E SALAS DISPONÍVEIS PARA {dataAtualFormatada(day)}</h2>}
          {station === 'Estação de trabalho' ? <WorkStation /> : <Meeting />}
          <div className='legenda'>
            <strong>
              <div className='circle ocupado'></div>Ocupado
            </strong>
            <strong>
              <div className='circle livre'></div>Livre
            </strong>
          </div>
          {scheduling.office === 'São Paulo' && station === 'Estação de trabalho' ? (
            <div className='buttons-container'>
              {buttons.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveButton(index)}
                  className={activeButton === index ? 'selected' : ''}
                >
                  {item}
                </button>
              ))}
            </div>
          ) : (station === 'Estação de trabalho' ?
            <div className='buttons-container'>
              <button className='selected'>1° ANDAR</button>
            </div> :
            <div className='buttons-container room'>
              <button className='selectedRoom legenda' onClick={handleModal}>CADASTRAR REUNIÃO</button>
            </div>
          )}
        </section>
      </Container>
    </>
  )
}
