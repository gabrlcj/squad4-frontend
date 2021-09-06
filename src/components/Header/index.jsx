import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <h1>Header aqui</h1>
      <nav>
        <Link to='/'>Página de Login</Link>
        <Link to='/register'>Página de Cadastro</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </nav>
    </Container>
  )
}
