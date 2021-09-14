import {
  Container,
  TimeBlock,
  RoomBlock,
  TimeContainer,
  TimeDisplay,
  RoomContainer,
  RoomDisplay,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";
import { toast } from "react-toastify";

export function Meeting() {
  const { scheduling, setScheduling, user, schedulings, setSchedulings, day } =
    useContext(AuthContext);

  function formatDateWithZero(date) {
    if (date <= 9) return "0" + date;
    else return date;
  }

  const formatToday =
    formatDateWithZero(day.getFullYear()) +
    "-" +
    formatDateWithZero(day.getMonth() + 1) +
    "-" +
    day.getDate();

  function dataAtualFormatada(day) {
    var data = day,
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"),
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  const handleAppointment = async (event) => {
    event.preventDefault();
    try {
      await api({
        method: "post",
        url: "agendamentos",
        data: scheduling,
      });

      toast.success("Agendamento feito com sucesso!");
      setScheduling({ ...scheduling, date: new Date() });
    } catch (error) {
      toast.error(error.response?.data.mensagem);
    }
  };

  return (
    <>
      <Container onSubmit={handleAppointment}>
        <TimeBlock>
          <h3>HORÁRIO</h3>
          <TimeContainer>
            <div>
              <TimeDisplay>8h às 9h</TimeDisplay>
              <TimeDisplay>9h às 10h</TimeDisplay>
              <TimeDisplay>10h às 11h</TimeDisplay>
              <TimeDisplay>11h às 12h</TimeDisplay>
              <TimeDisplay>12h às 13h</TimeDisplay>
            </div>
            <div>
              <TimeDisplay>13h às 14h</TimeDisplay>
              <TimeDisplay>14h às 15h</TimeDisplay>
              <TimeDisplay>15h às 16h</TimeDisplay>
              <TimeDisplay>16h às 17h</TimeDisplay>
              <TimeDisplay>17h às 18h</TimeDisplay>
            </div>
          </TimeContainer>
        </TimeBlock>
        <RoomBlock>
          <h3>SALAS</h3>

          <RoomContainer>
            <div>
              <RoomDisplay>SALA 1</RoomDisplay>
              <RoomDisplay>SALA 2</RoomDisplay>
              <RoomDisplay>SALA 3</RoomDisplay>
              <RoomDisplay>SALA 4</RoomDisplay>
            </div>
          </RoomContainer>
        </RoomBlock>
      </Container>
    </>
  );
}
