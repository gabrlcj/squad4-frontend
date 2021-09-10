import { useState } from 'react'
import { Container } from './styles'
import { WorkStation } from '../WorkStation'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../../context/AuthContext'

export function Main() {
  const [filial, setFilial] = useState('São Paulo')
  const [station, setStation] = useState('Estação de trabalho')
  const { day } = useContext(AuthContext)

  function dataAtualFormatada(day) {
    var data = day,
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear()
    return dia + '/' + mes + '/' + ano
  }

  return (
    <Container>
      <h1>Logo aqui</h1>
      <div className='selection-bar'>
        <select name='filial' onChange={(event) => setFilial(event.target.value)}>
          <option name='filial' value='São Paulo'>
            SÃO PAULO
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
      </div>
      <section>
        <h2>ESTAÇÕES DISPONÍVEIS PARA {dataAtualFormatada(day)}</h2>
        {filial === 'São Paulo' && station === 'Estação de trabalho' ? <WorkStation /> : <h3>Exemplo 2</h3>}
        <div className='legenda'>
          <strong>
            <div className='circle ocupado'></div>Ocupado
          </strong>
          <strong>
            <div className='circle livre'></div>Livre
          </strong>
        </div>
        <div className='buttons-container'>
          <button>1° ANDAR</button>
          <button>2° ANDAR</button>
          <button>3° ANDAR</button>
        </div>
      </section>
    </Container>
  )
}
