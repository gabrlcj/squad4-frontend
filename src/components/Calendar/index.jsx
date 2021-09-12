import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { AuthContext } from "../../context/AuthContext";
import { Container } from "./styles";
import api from '../../api';
import { useParams } from "react-router-dom";

export function Calendario({ formatDay }) {
  const { id } = useParams();
  const { day, setDay, scheduling, setScheduling, user } = useContext(AuthContext);
  const [userScheduling, setUserScheduling] = useState([]);
  console.log(user)

  useEffect(() => {
    api({
      method: 'get',
      url: `/agendamentos/colaboradores/${id}`
    })
    .then(res => setUserScheduling(res.data))
    .catch(error => console.log(error.response.data.mensagem))
  }, [id]);

  useEffect(() => {
    setScheduling({ ...scheduling, date: dataToDatabase(day) });
  }, [day]);

  function dataToDatabase(day) {
    var data = day,
      dia = data.getDate().toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"),
      ano = data.getFullYear();
    return ano + "-" + mes + "-" + dia;
  }

  function dataToCalendar(day) {
    var data = day,
      dia = (data.getDate() + 1).toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0");
    return dia + "/" + mes;
  }


  // function setMaxDate(date) {
  //   const d = date.getDate()
  //   const m = date.getMonth()
  //   const y = date.getFullYear()

  //   if (date.getDay() === 5) {
  //     const lastDay = d + 7
  //     return new Date(y, m, lastDay)
  //   } else {
  //     const lastDay = date.getDate() + (5 - date.getDay())
  //     return new Date(y, m, lastDay)
  //   }
  // }

  return (
    <Container>
      <h5>Hoje é dia {formatDay}</h5>
      <Calendar
        className="calendario"
        tileClassName="day"

        // onChange={() => setScheduling({ ...scheduling, date: dataToDatabase(day) })}
        onClickDay={setDay}
        value={day}
        showNavigation={false}
        showFixedNumberOfWeeks={true}
        minDate={new Date()}
        // maxDate={setMaxDate(new Date())}
        tileDisabled={({ date }) => date.getDay() === 6 || date.getDay() === 0}
      />
      <h5>Meus agendamentos</h5>
      <div className="appointments">
        {userScheduling?.map((scheduling, index) => (
          <div key={index}>{dataToCalendar((new Date(scheduling.date)))}</div>
        ))}
      </div>
    </Container>
  );
}
