import Table from "../../assets/Table.svg";
import { Container, Station } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function WorkStation() {
  const { scheduling, setNewScheduling  } = useContext(AuthContext);

  console.log(scheduling)

  const chairClickHandler = (event, chairNumber) => {
    event.stopPropagation()
    
    if (scheduling.workstation !== chairNumber) {
      console.log("oi")
        const choosedChair = chairNumber;
        setNewScheduling({...scheduling, workstation: choosedChair})
    } else {
      console.log("olá")
      return;
    }
}

  const GenerateUpChairs = (chairNumbers) => {
    return (
      <>
        {chairNumbers.map((chairNumber) => {
          return (
            <div
              className="circle up"
              key={chairNumber}
              onClick={(event) => chairClickHandler(event, chairNumber)}
            >
              {chairNumber}
            </div>
          );
        })}
      </>
    );
  };

  const GenerateDownChairs = (chairNumbers) => {
    return (
      <>
        {chairNumbers.map((chairNumber) => {
          return (
            <div
              className="circle down"
              key={chairNumber}
              onClick={(event) => chairClickHandler(event, chairNumber)}
            >
              {chairNumber}
            </div>
          );
        })}
      </>
    );
  };

  const tableStation = (id, chairs, chairs2) => {
    return (
      <Station id={id}>
        <div className="chairs">{GenerateUpChairs(chairs)}</div>
        <img src={Table} alt="Mesa de trabalho" />
        <div className="chairs">{GenerateDownChairs(chairs2)}</div>
      </Station>
    );
  };

  return (
    <Container>
      <div className="content">
        {tableStation(1, [1, 2, 3, 4], [5, 6, 7, 8])}
        {tableStation(2, [9, 10, 11, 12], [13, 14, 15, 16])}
      </div>
      <div className="content">
        {tableStation(3, [17, 18, 19, 20], [21, 22, 23, 24])}
        {tableStation(4, [25, 26, 27, 28], [29, 30, 31, 32])}
      </div>
    </Container>
  );
}
