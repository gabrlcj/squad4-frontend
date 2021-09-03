import { Link } from 'react-router-dom'
import { Header } from '../Header'
import { Container } from './styles'

export function LoginPage() {
  function handleLoginForm(e) {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <Container onSubmit={handleLoginForm}>
        <h2>Login</h2>
        <label htmlFor='identificador'>
          Nome ou E-mail:
          <input name='identificador' type='text' placeholder='Digite seu nome ou email' />
        </label>
        <label htmlFor='senha'>
          Senha:
          <input name='senha' type='password' placeholder='Digite sua senha' />
        </label>
        <button type='submit'>Fazer Login</button>
        <button type='submit'>
          <Link to='/register'>Fazer Cadastro</Link>
        </button>
      </Container>
    </>
  )
}
