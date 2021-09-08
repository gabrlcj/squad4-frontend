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
      {/* <Header /> */}
      <Container onSubmit={handleLoginForm}>
        <div className="left">
      
        </div>
        <div className="right">
          <div className="loginbox">
            <h1 className="title">ACESSAR PORTAL</h1>
            <label htmlFor='email'>
              <input
                name='email'
                type='email'
                required
                placeholder='Digite seu email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label htmlFor='password'>
              <input
                name='password'
                type='password'
                required
                placeholder='Digite sua senha'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>

            <button type='submit' onClick={validateInputs}>
              ACESSAR
            </button>
            
              <div className="text-box">
                <div className="basetext">
                  Não é cadastrado? <Link to='/register' className="underline">Cadastre-se</Link>
                </div>
                <div className="basetext underline">
                  Esqueci a senha
                </div>

              </div>
          </div>
        </div>
      </Container>
    </>
  )
}
