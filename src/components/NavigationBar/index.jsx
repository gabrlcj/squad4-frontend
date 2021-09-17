import { Container } from './styles'
import Home from '../../assets/Home.svg'
import Search from '../../assets/Search.svg'
import Settings from '../../assets/Settings.svg'
import Logout from '../../assets/Logout.svg'
import History from '../../assets/History.svg'
import Device from '../../assets/Device.svg'

export function NavigationBar() {
  return (
    <Container>
      <div className='nav-container'>
        <img
          className='profile-img'
          src='http://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg'
          alt='Imagem de perfil'
        />
        <div>
          <img src={Home} alt='Icone home' />
          <img src={Search} alt='Icone de procura' />
          <img src={History} alt='Icone de historico' />
          <img src={Device} alt='Icone de dispositivo' />
          <img src={Settings} alt='Icone de configuração' />
        </div>
      </div>
      <img src={Logout} alt='Icone de logout' />
    </Container>
  )
}
