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
    else if (confirmPassword !== password) {
      return toast.error('Senha inválida!')
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
        <h2>Cadastro</h2>
        <div className="row">
          <label htmlFor='nome' className="column">
            Nome:
            <input
              name='nome'
              type='text'
              required
              placeholder='Digite seu nome'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label htmlFor='email' className="column">
            Email:
            <input
              name='email'
              type='email'
              required
              placeholder='Digite seu email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>
        <label htmlFor='senha'>
          Senha:
          <input
            name='senha'
            type='password'
            required
            placeholder='Digite sua senha'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label htmlFor='confirmSenha'>
          Confirme sua senha:
          <input
            id='cp'
            name='confirmSenha'
            type='password'
            required
            placeholder='Confirme sua senha'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <label>
          <div className={validLength === true ? 'green' : null}>Senha com 8 ou mais dígitos</div>
          <div className={upperCase ? 'green' : null}>Possui letra maiúscula</div>
          <div className={lowerCase ? 'green' : null} >Possui letra minúscula</div>
          <div className={hasNumber ? 'green' : null}>Possui números</div>
          <div className={specialChar ? 'green' : null} >Possui caractéres especiais</div>
        </label>
        <label htmlFor='filial'>
          Filial de preferência:
          <input name='filial' type='radio' value='São Paulo - SP' onClick={() => setOffice('São Paulo')} /> São Paulo
          <input name='filial' type='radio' value='Santos - SP' onClick={() => setOffice('Santos')} /> Santos
        </label>

        <label htmlFor="role">
          Qual seu cargo?
          <input type="text" value={role} placeholder="Digite seu cargo" onChange={(event) => setRole(event.target.value)} />
        </label>

        <label htmlFor="squad">
          Qual seu squad?
          <input type="text" value={squad} placeholder="Qual seu squad?" onChange={(event) => setSquad(event.target.value)} />
        </label>

        <button type='submit' onClick={validateInputs}>
          Fazer Cadastro
        </button>
      </Container>
    </>
  )
}
