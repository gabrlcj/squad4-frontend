import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../Header'

import { Container } from './styles'
import { toast } from 'react-toastify'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLoginForm(event) {
    event.preventDefault()
  }

  function validateInputs() {
    if (email === '' || password === '') {
      return toast.error('Email ou senha inválidos')
    } else {
      return toast.success('Login feito com sucesso!')
    }
  }

  return (
    <>
      <Header />
      <Container onSubmit={handleLoginForm}>
        <h2>Login</h2>
        <label htmlFor='identificador'>
          E-mail:
          <input
            name='identificador'
            type='text'
            required
            placeholder='Digite seu email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
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
        <button type='submit' onClick={validateInputs}>
          Fazer Login
        </button>
        <button type='button'>
          <Link to='/register'>Fazer Cadastro</Link>
        </button>
      </Container>
    </>
  )
}
