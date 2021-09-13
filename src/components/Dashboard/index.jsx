import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import api from '../../api/index.js';
import { AuthContext } from '../../context/AuthContext.js';
import { Calendario } from '../Calendar/index.jsx'
import { Main } from '../Main/index.jsx'
import { NavigationBar } from '../NavigationBar/index.jsx'
import { Container } from './styles.js'

export function Dashboard() {
  const today = new Date();
  const { id } = useParams();
  const [userScheduling, setUserScheduling] = useState([]);
  const { scheduling } = useContext(AuthContext);
 
  useEffect(() => {
    api({
      method: 'get',
      url: `/agendamentos/colaboradores/${id}`
    })
    .then(res => {
      setUserScheduling(res.data);
    })
    .catch(error => toast.error(error.response?.data.mensagem))
  }, [id, scheduling]);

  function formatDateWithZero(date) {
    if (date <= 9) return '0' + date
    else return date
  }

  const formatToday =
    formatDateWithZero(today.getDate()) + '/' + formatDateWithZero(today.getMonth() + 1) + '/' + today.getFullYear()

  return (
    <>
      <Container>
        <NavigationBar />
        <Main formatDay={formatToday} />
        <Calendario userScheduling={userScheduling} setUserScheduling={setUserScheduling} formatDay={formatToday} />
      </Container>
    </>
  )
}
