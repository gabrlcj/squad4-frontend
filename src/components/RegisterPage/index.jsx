import { Header } from '../Header'
import { Container } from './styles'

export function RegisterPage() {
  return (
    <>
      <Header />
      <Container>
        <h2>Cadastro</h2>
        <label htmlFor='nome'>
          Nome:
          <input name='nome' type='text' placeholder='Digite seu nome' />
        </label>
        <label htmlFor='email'>
          Email:
          <input name='email' type='email' placeholder='Digite seu email' />
        </label>
        <label htmlFor='senha'>
          Senha:
          <input name='senha' type='password' placeholder='Digite sua senha' />
        </label>
        <label htmlFor='filial'>
          Filial de preferência:
          <input name='filial' type='radio' value='São Paulo - SP' />
          <input name='filial' type='radio' value='Santos - SP' />
        </label>
        <label htmlFor='filial'>
          Situação da vacina contra COVID:
          <input name='filial' type='radio' />
          <input name='filial' type='radio' />
        </label>
        <button type='submit'>Fazer Cadastro</button>
      </Container>
    </>
  )
}
