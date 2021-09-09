import { Container } from './styles'
import Home from '../../assets/Home.svg'
import Search from '../../assets/Search.svg'
import Config from '../../assets/Config.svg'
import Logout from '../../assets/Logout.svg'

export function NavigationBar() {
  return (
    <Container>
      <div className='nav-container'>
        <img className='profile-img' src='http://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg' alt='' />
        <div>
          <img src={Home} alt='Icone home' />
          <img src={Search} alt='Icone de procura' />
          <img src={Config} alt='Icone de configuração' />
        </div>
      </div>
      <img src={Logout} alt='Icone de logout' />
    </Container>
  )
}
