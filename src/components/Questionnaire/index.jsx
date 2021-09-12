import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'


export function QuestionnairePage() {
  const [vaccine_status, setVaccine] = useState(false)
  const [pwd, setPWD] = useState(false)

  return (
    <>
      <Container>
        <div className="window">
          <h1 className="title">Olá!<br />Sua primeira vez por aqui, né?</h1>
          <p className="title">Antes de começar, responda essas perguntas para a gente te conhecer melhor!</p>

          <form className="box">
            <div className="left">

              <h3 className="question">Você está vacinado contra a COVID-19?</h3>
              <div className="box-question">
                <div>
                  <input id="vaccine_true" name='vaccine' type='radio' value={vaccine_status} onClick={() => setVaccine(true)} />
                  <label htmlFor="vaccine_true">Sim</label>
                </div>

                <div>
                  <input id="vaccine_false" name='vaccine' type='radio' value={vaccine_status} onClick={() => setVaccine(false)} />
                  <label htmlFor="vaccine_false">Não</label>
                </div>

                <div>
                  <input id="vaccine_maybe" name='vaccine' type='radio' value={vaccine_status} onClick={() => setVaccine(false)} />
                  <label htmlFor="vaccine_maybe">Prefiro não responder</label>
                </div>
              </div>

              <h3 className="question">MODELO DE PERGUNTA</h3>
              <div className="box-question">
                <div>
                  <input name='leftExample' type='radio' value="leftExample1" id="leftExample1" />
                  <label htmlFor="leftExample1">Sim</label>
                </div>

                <div>
                  <input name='leftExample' type='radio' value="leftExample2" id="leftExample2" />
                  <label htmlFor="leftExample2">Não</label>
                </div>

                <div>
                  <input name='leftExample' type='radio' value="leftExample3" id="leftExample3" />
                  <label htmlFor="leftExample3">Prefiro não responder</label>
                </div>
              </div>

            </div>

            <div className="right">

              <h3 className="question">Para que a gente possa te receber melhor, você faz uso de cadeira de rodas?</h3>

              <div className="box-question">
                <div>
                  <input id="wheelchair_true" name='wheelchair' type='radio' value={pwd} onClick={() => setPWD(true)} />
                  <label htmlFor="wheelchair_true">Sim</label>
                </div>

                <div>
                  <input id="wheelchair_false" name='wheelchair' type='radio' value={pwd} onClick={() => setPWD(false)} />
                  <label htmlFor="wheelchair_false">Não</label>
                </div>

                <div>
                  <input id="wheelchair_maybe" name='wheelchair' type='radio' value={pwd} onClick={() => setPWD(false)} />
                  <label htmlFor="wheelchair_maybe">Prefiro não responder</label>
                </div>
              </div>

              <h3 className="question">MODELO DE PERGUNTA</h3>
              <div className="box-question">
                <div>
                  <input name='rightExample' type='radio' value="rightExample1" id="rightExample1" />
                  <label htmlFor="rightExample1">Sim</label>
                </div>

                <div>
                  <input name='rightExample' type='radio' value="rightExample2" id="rightExample2" />
                  <label htmlFor="rightExample2">Não</label>
                </div>

                <div>
                  <input name='rightExample' type='radio' value="rightExample3" id="rightExample3" />
                  <label htmlFor="rightExample3">Prefiro não responder</label>
                </div>
              </div>
            </div>
          </form>

          <Link to='/dashboard'>
            <button type='submit'>
              PROSSEGUIR
            </button>
          </Link>

        </div>
      </Container>
    </>
  )
}