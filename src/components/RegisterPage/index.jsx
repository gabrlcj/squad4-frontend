import { useState } from 'react'
import { Header } from '../Header'
import api from '../../api'

import { Container } from './styles'
import { toast } from 'react-toastify'

export function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [origin_office, setOffice] = useState('')
  const [vaccine_status, setVaccine] = useState(false)
  const [role, setRole] = useState('')
  const [squad, setSquad] = useState('')
  const [pwd, setPWD] = useState(false)

  function handleUserRegister(event) {
    event.preventDefault()

    const data = {
      name,
      email,
      password,
      origin_office,
      vaccine_status,
      role,
      squad,
      pwd
    }

    api({
      method:"POST",
      url: "/colaboradores",
      data
    }).then((res) => toast.success("Registro feito com sucesso!"))
    .catch(error => toast.error("Algo não saiu como o planejado."))
  }

  function validateInputs() {

    if (name === '' || email === '' || password === '') {
      return toast.error('Ops, algo deu errado')
    }
    else if (confirmPassword !== password) {
        return toast.error('Senha inválida!')
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
        <label htmlFor='confirmSenha'>
          Confirme sua senha:
          <input
            id='cp'
            name='confirmSenha'
            type='password'
            required
            placeholder='Confirme sua senha'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <label htmlFor='filial'>
          Filial de preferência:
          <input name='filial' type='radio' value='São Paulo - SP' onClick={() => setOffice('São Paulo')} /> São Paulo
          <input name='filial' type='radio' value='Santos - SP' onClick={() => setOffice('Santos')} /> Santos

          {/* <select name="filial">
            <option value="SP" onClick={() => setOffice('São Paulo')}>São Paulo</option>
            <option value="Santos" onClick={() => setOffice('Santos')}>Santos</option>
          </select> */}
        </label>

        
        <label htmlFor='vacina'>
          Situação da vacina contra COVID:
          <input name='vacina' type='radio' value='Vacinado' onClick={() => setVaccine(true)} /> Vacinado
          <input name='vacina' type='radio' value='Não vacinado' onClick={() => setVaccine(false)} /> Não vacinado
        </label>

        <label htmlFor="role">
          Qual seu cargo?
          <input type="text" value={role} placeholder="Digite seu cargo" onChange={(event) => setRole(event.target.value)}/>
        </label>

        <label htmlFor="squad">
          Qual seu squad?
            <input type="text" value={squad} placeholder="Qual seu squad?" onChange={(event) => setSquad(event.target.value)}/>
        </label>

        <label htmlFor="pwd">
          Você é PCD?
          <input type="checkbox" value={pwd} onChange={() => setPWD(!pwd)}/>
        </label>

        <button type='submit' onClick={validateInputs}>
          Fazer Cadastro
        </button>
      </Container>
    </>
  )
}
