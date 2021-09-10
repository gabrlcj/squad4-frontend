import { useState } from 'react'
import { Container } from './styles'


export function QuestionnairePage() {
  const [vaccine_status, setVaccine] = useState(false)
  const [pwd, setPWD] = useState(false)

  return (
    <>
      <Container>
        <h1>Olá, é sua primeira viagem, né?!</h1>
        <h3>Antes de começar, responda essas perguntas para a gente te conhecer melhor!</h3>

        <form>

          <label htmlFor="vaccine">
            Você está vacinado contra a COVID-19?
            <input name='vaccine' type='radio' value={vaccine_status} onClick={() => setVaccine(true)} /> Sim
            <input name='vaccine' type='radio' value={vaccine_status} onClick={() => setVaccine(false)} /> Não
            <input name='vaccine' type='radio' value={vaccine_status} onClick={() => setVaccine(false)} /> Prefiro não responder
          </label>

          <label htmlFor="pwd">
            Você é PCD?
            <input name='pwd' type='radio' value={pwd} onClick={() => setPWD(true)} /> Sim
            <input name='pwd' type='radio' value={pwd} onClick={() => setPWD(false)} /> Não
          </label>

          <button type='submit'>
            PROSSEGUIR
          </button>

        </form>
      </Container>
    </>
  )
}