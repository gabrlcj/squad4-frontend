import { useState } from 'react'
import { Header } from '../Header'

import { Container } from './styles'
import { toast } from 'react-toastify'

export function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [office, setOffice] = useState('')
  const [vaccine, setVaccine] = useState(false)

  function handleUserRegister(event) {
    event.preventDefault()

    const data = {
      name,
      email,
      password,
      office,
      vaccine,
    }

    console.log(data)
  }

  function validateInputs() {
    if (name === '' || email === '' || password === '') {
      return toast.error('Ops, algo deu errado')
    } else {
      return toast.success('Registro feito com sucesso!')
    }
  }

  return (
    <>
      <Header />
      <Container onSubmit={handleUserRegister}>
        <h2>Cadastro</h2>
        <label htmlFor='nome'>
          Nome:
          <input
            name='nome'
            type='text'
            required
            placeholder='Digite seu nome'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label htmlFor='email'>
          Email:
          <input
            name='email'
            type='email'
            required
            placeholder='Digite seu email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor='senha'>
          Senha:
          <input
            name='senha'
            type='password'
            required
            placeholder='Digite sua senha'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label htmlFor='filial'>
          Filial de preferência:
          <input name='filial' type='radio' value='São Paulo - SP' onClick={() => setOffice('São Paulo')} /> São Paulo
          <input name='filial' type='radio' value='Santos - SP' onClick={() => setOffice('Santos')} /> Santos
        </label>
        <label htmlFor='vacina'>
          Situação da vacina contra COVID:
          <input name='vacina' type='radio' value='Vacinado' onClick={() => setVaccine(true)} /> Vacinado
          <input name='vacina' type='radio' value='Não vacinado' onClick={() => setVaccine(false)} /> Não vacinado
        </label>
        <button type='submit' onClick={validateInputs}>
          Fazer Cadastro
        </button>
      </Container>
    </>
  )
}
