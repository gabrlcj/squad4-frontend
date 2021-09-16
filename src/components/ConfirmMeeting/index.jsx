import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api";

import { Container } from "./styles";
import { toast } from "react-toastify";
import CloseModalButton from "../../assets/CloseModalScheduling.svg";
import { LoadingComponent } from "../LoadingComponent";

export function ConfirmMeeting({ showModal, setShowModal, handleModal }) {
  const { roomScheduling, setRoomScheduling } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  function dataAtualFormatada(day) {
    let data = day,
      dia = (data.getDate() + 1).toString().padStart(2, "0"),
      mes = (data.getMonth() + 1).toString().padStart(2, "0"),
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  const handleConfirmMeeting = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await api({
        method: "post",
        url: "reunioes",
        data: {
          date: roomScheduling.date,
          office: roomScheduling.office,
          room: roomScheduling.room,
          time_zone: roomScheduling.time_zone,
          user_id: roomScheduling.user_id,
        },
      });
      toast.success("Agendamento feito com sucesso!");

      setLoading(false);
      handleModal();
    } catch (error) {
      toast.error(error.response?.data.mensagem);
      setLoading(false);
    }
  };

  return (
    <Container
      onSubmit={handleConfirmMeeting}
      showModal={showModal}
      setShowModal={setShowModal}
      handleModal={handleModal}
    >
      {!loading ? (
        <>
          <img
            src={CloseModalButton}
            alt="Fechar"
            onClick={handleModal}
            className="closeModalIcon"
          />
          <div className="confirmMeetingModal">
            <h2>
              {roomScheduling?.room},{" "}
              {dataAtualFormatada(new Date(roomScheduling?.date))} em{" "}
              {roomScheduling?.office} - SP
            </h2>
            <h3>
              Ei, antes de confirmar o agendamento se liga nas orientações!
            </h3>
            <ul>
              <li>
                Use máscara o tempo todo, posicione-a corretamente sobre o nariz
                e a boca.
              </li>
              <li>
                Higienize as mãos com frequência, disponibilizaremos álcool em
                gel por toda a FC.
              </li>
              <li>
                Evite o compartilhamento de objetos, como canetas, celulares,
                copos, dentre outros.
              </li>
              <li>
                Sabemos que a saudade é grande, mas mantenha o distanciamento
                social mínimo de 1 metro.{" "}
              </li>
              <li>
                Em caso de qualquer <strong>sintoma de COVID-19</strong>,
                cancele seu agendamento!
              </li>
            </ul>
            <button type="submit">CONFIRMAR</button>
          </div>
        </>
      ) : (
        <LoadingComponent dimensions={"25rem"} />
      )}
    </Container>
  );
}
