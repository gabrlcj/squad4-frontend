import { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'
import api from '../../api'

import { Modal } from '../Modal/Modal'
import { RegisterPage } from '../RegisterPage/index'

import AstronautCalendar from '../../assets/AstronautCalendar.svg'
import GrupoFCamara from '../../assets/GrupoFCamara.svg'
import BrandName from '../../assets/BrandName.svg'
import Logo from '../../assets/Logo.svg'

export function LoginPage({ showModal, setShowModal, handleModal }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setToken, setUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function login(email, password) {
    setLoading(true)
    const response = await api.post(`/login`, {
      email,
      password,
    })
    const { token } = response.data
    const {
      returningUser: { first_access },
    } = response.data
    const { returningUser } = response.data
    localStorage.setItem('token', token)
    setToken(token)
    setUser(returningUser)
    setLoading(false)

    if (first_access) {
      history.push('/firstaccess')
    } else {
      history.push(`/dashboard/${returningUser.id}`)
    }
  }

  async function handleLoginForm(event) {
    event.preventDefault()
    try {
      await login(email, password)
    } catch (e) {
      toast.error('Email ou senha inválidos.')
      setLoading(false)
    }
  }

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} handleModal={handleModal}>
          <RegisterPage showModal={showModal} setShowModal={setShowModal} handleModal={handleModal} />
        </Modal>
      ) : null}
      <Container>
        <div className='left'>
          <img style={{ marginBottom: '2rem' }} src={GrupoFCamara} alt='Logo da FCamara' />
          <img src={AstronautCalendar} alt='Astonauta com Calendário' />
        </div>

        <div className='right'>
          <div className='loginbox'>
            <div className='row'>
              <img src={Logo} alt='Logo do App' style={{ marginRight: '1vw' }} />
              <img src={BrandName} alt='Orange Space' />
            </div>
            <h1 className='title'>ACESSAR PORTAL</h1>

            <form onSubmit={handleLoginForm}>
              <label htmlFor='email'>
                <input
                  name='email'
                  type='email'
                  className='textbox-input'
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
                  className='textbox-input'
                  required
                  placeholder='Digite sua senha'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              <button type='submit'>
                ACESSAR
              </button>
            </form>

            <div className='text-container'>
              <div className='basetext'>
                <p>Não é cadastrado?</p>
                <div onClick={handleModal} className='underline' style={{ cursor: 'pointer' }}>
                  Cadastre-se
                </div>
              </div>
              <div className='basetext underline'>Esqueci a senha</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
