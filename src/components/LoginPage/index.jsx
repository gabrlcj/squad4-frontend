import { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Container } from './styles'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'
import api from '../../api'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setToken, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function login(email, password) {
    setLoading(true);
    const response = await api.post(`/login`, {
      email,
      password
    });
    const { token } = response.data;
    const { user } = response.data;
    localStorage.setItem("token", token);
    setToken(token);
    setUser(user);
    setLoading(false);
    history.push('/firstaccess');
  }

  async function handleLoginForm(event) {
    event.preventDefault()
    try {
      await login(email, password)
    } catch (e) {
      toast.error("Email ou senha inválidos.")
    }
  }

  function validateInputs() {
    if (email === '' || password === '') {
      return toast.error('Email ou senha em branco.')
    }
  }


  if (loading) {
    return <h1>Carregando...</h1>
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
