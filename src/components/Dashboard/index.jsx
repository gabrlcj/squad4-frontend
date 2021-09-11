// import { useEffect } from 'react'
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import { Calendario } from "../Calendar/index.jsx";
import { Main } from "../Main/index.jsx";
import { NavigationBar } from "../NavigationBar/index.jsx";
import { Container } from "./styles.js";
import api from '../../api';

export function Dashboard() {
  const today = new Date();
  const { scheduling, setScheduling, schedulings, setSchedulings, user } = useContext(AuthContext);
 

  useEffect(() => {
    api.get(`/agendamentos`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])

  function formatDateWithZero(date) {
    if (date <= 9) return "0" + date;
    else return date;
  }

  const formatToday =
    formatDateWithZero(today.getDate()) +
    "/" +
    formatDateWithZero(today.getMonth() + 1) +
    "/" +
    today.getFullYear();

  return (
    <>
      <Container>
        <NavigationBar />
        <Main formatDay={formatToday} />
        <Calendario formatDay={formatToday} />
      </Container>
    </>
  );
}
