import Table from "../../assets/Table.svg";
import { Container, Station } from "./styles";

let chairs = ["A", "B", "C", "D", "E", "F", "G", "H"];
let stationChairs = [];
let stationChairs2 = [];

chairs.forEach((chair, index) => {
  if (index < 4) {
    stationChairs.push(
      <div v id={index + chair} key={index + chair} className="circle up">
        {index + chair} 
      </div>
    );
  } else {
    stationChairs2.push(
      <div id={index + chair} key={index + chair} className="circle up">
        {index + chair} 
      </div>
    );
  }
});

const tableStation = (id) => {
  return (
    <Station id={id}>
      <div className="chairs">{stationChairs}</div>
      <img src={Table} alt="Mesa de trabalho" />
      <div className="chairs">{stationChairs2}</div>
    </Station>
  );
}

export function WorkStation() {
  return (
    <Container>
      <div className="content">
        {tableStation(1)}
        {tableStation(2)}
      </div>
      <div className="content">
        {tableStation(3)}
        {tableStation(4)}
      </div>
    </Container>
  );
}
