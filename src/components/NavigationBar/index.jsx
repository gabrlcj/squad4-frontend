import { Container } from './styles'

export function NavigationBar() {
  return (
    <Container>
      <img src='http://barcarena.pa.gov.br/portal/img/perfil/padrao.jpg' alt='' />
      <div>
        <strong>Icone home</strong>
        <strong>Icone de procura</strong>
        <strong>Icone de config.</strong>
      </div>
      <strong>Icone de sair</strong>
    </Container>
  )
}
