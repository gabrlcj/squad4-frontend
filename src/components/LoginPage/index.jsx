import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'
import api from '../../api'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { token, setToken, user, setUser } = useContext(AuthContext)

  async function login(email, password) {
    const response = await api.post(`/login`, {
      email,
      password,
    });

    const { token } = response.data;
    localStorage.setItem("token", token);
    setToken(token);
  }

  async function handleLoginForm(event) {
    event.preventDefault()
    try {
      await login(email, password)
    } catch (e) {
      console.log(e)
      toast.error("Email ou senha inválidos.")
    }
  }

  function validateInputs() {
    if (email === '' || password === '') {
      return toast.error('Email ou senha em branco.')
    }
  }

  return (
    <>
      <Container>
        <div className='left'></div>
        <div className='right'>
          <div className='loginbox'>
            <h1 className='title'>ACESSAR PORTAL</h1>

            <form onSubmit={handleLoginForm}>
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
            </form>

            <div className='text-box'>
              <div className='basetext'>
                Não é cadastrado?{' '}
                <Link to='/register' className='underline'>
                  Cadastre-se
                </Link>
              </div>
              <div className='basetext underline'>Esqueci a senha</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
