import { useEffect, useState } from 'react'
import { Header } from '../Header'
import api from '../../api'

import { Container } from './styles'
import { toast } from 'react-toastify'

export function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [origin_office, setOffice] = useState('')
  const [role, setRole] = useState('')
  const [squad, setSquad] = useState('')
  const [first_access, SetFirstAccess] = useState('')

  function handleUserRegister(event) {
    event.preventDefault()

    const data = {
      name,
      email,
      password,
      origin_office,
      role,
      squad,
      first_access
    }

    api({
      method: "POST",
      url: "/colaboradores",
      data
    }).then((res) => toast.success("Registro feito com sucesso!"))
      .catch(error => toast.error("Algo não saiu como o planejado."))
  }

  function validateInputs() {

    SetFirstAccess(true)

    if (name === '' || email === '' || password === '') {
      return toast.error('Ops, algo deu errado')
    }
    if (validLength === false || hasNumber === false || upperCase === false || lowerCase === false || specialChar === false ) {
      return toast.error('Senha inválida!')
    }
    else if (confirmPassword !== password) {
      return toast.error('Senhas diferentes!')
    }
  }

  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  // const [match, setMatch] = useState(null);

  useEffect(() => {
    setValidLength(password.length > 7 ? true : false);
    setHasNumber(/\d/.test(password) ? true : false);
    setUpperCase(/[A-Z]/.test(password) ? true : false);
    setLowerCase(/[a-z]/.test(password) ? true : false);
    setSpecialChar((/[^A-Z a-z0-9]/).test(password) ? true : false);
  }, [password])

  return (
    <>
      <Header />
      <Container onSubmit={handleUserRegister}>
        <div className="regbox">
          <h2>Cadastro</h2>
          <div className="row">
            <label htmlFor='nome' className="column">
              <input
                name='nome'
                type='text'
                className='textbox-input namebox'
                style={{ marginRight: '1vw' }}
                required
                placeholder='Digite seu nome'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label htmlFor="role">
              <input type="text" value={role} className='textbox-input rolebox' placeholder="Digite seu cargo" onChange={(event) => setRole(event.target.value)} />
            </label>
          </div>
            <label htmlFor='email' className="column">
              <input
                name='email'
                type='email'
                className='row textbox-input emailbox'
                required
                placeholder='Digite seu email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          <div className="row">
            <label htmlFor='senha'>
              <input
                name='senha'
                type='password'
                className='textbox-input passwordbox'
                style={{ marginRight: '1vw' }}
                required
                placeholder='Digite sua senha'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <label htmlFor='confirmSenha'>
              <input
                id='cp'
                name='confirmSenha'
                type='password'
                className='textbox-input passwordbox'
                required
                placeholder='Confirme sua senha'
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </label>
          </div>
          <label>
            <div className={validLength === true ? 'basetext green' : ' basetext '}  style={{ marginTop: '5px' }} >Senha com 8 ou mais dígitos</div>
            <div className={upperCase ? 'basetext green' : ' basetext '}>Possui letra maiúscula</div>
            <div className={lowerCase ? 'basetext green' : ' basetext '} >Possui letra minúscula</div>
            <div className={hasNumber ? 'basetext green' : ' basetext '}>Possui números</div>
            <div className={specialChar ? 'basetext green' : ' basetext '} >Possui caractéres especiais</div>
          </label>

          <div className='column'>
          <button type='submit' onClick={validateInputs}>
            Fazer Cadastro
          </button>
          </div>
        </div>
      </Container>
    </>
  )
}
