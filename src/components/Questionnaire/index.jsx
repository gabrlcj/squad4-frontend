import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Question } from './styles'
import api from '../../api'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'


export function QuestionnairePage() {
  const [vaccine_status, setVaccine] = useState()
  const [pwd, setPWD] = useState()
  const [first_access, setFirstAccess] = useState()
  const history = useHistory()

  const { user } = useContext(AuthContext)
  
  function handleQuestionnaire(event) {
    event.preventDefault()

    const data = {
      ...user,
      vaccine_status,
      pwd,
      first_access
    };

    api({
      method: "PUT",
      url: `/login/firstaccess/${user.id}`,
      data
    }).then((res) => {
      history.push(`/dashboard/${user.id}`)
    }).catch(error => toast.error("Algo não saiu como o planejado."))
  };

  return (
    <>
      <Container>
        <div className="window">
          <h1 className="title">Olá!<br />Sua primeira vez por aqui, né?</h1>
          <p className="title">Antes de começar, responda essas perguntas para a gente te conhecer melhor!</p>

          <form className="box" onSubmit={handleQuestionnaire}>
            <div className="left">
              <div className="box-question">
                <Question padding="2.125rem 1rem">Você está vacinado contra a COVID-19?</Question>
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

              <div className="box-question">
                <Question padding="2.125rem 1rem">Você se adaptou bem ao Home Office?</Question>
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

              <div className="box-question">
                <Question>Para que a gente possa te receber melhor, você possui alguma dificuldade de mobilidade?</Question>
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

              <div className="box-question">
                <Question padding="1.563rem 1rem">Você acredita que sua produtividade aumenta trabalhando no escritório?</Question>
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
              <div>
              </div>
              <button type='submit' onClick={() => setFirstAccess(false)}>
                PROSSEGUIR
              </button>
            </div>

          </form>



        </div>
      </Container>
    </>
  )
}