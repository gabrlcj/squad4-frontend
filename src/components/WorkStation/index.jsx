import Table from "../../assets/Table.svg";
import { Container, Station } from "./styles";
import { Chair } from '../Chair';

const GenerateChairs = (chairNumbers) => {

	return (
		<>
			{
				chairNumbers.map((chairNumber) => {
					return  <Chair chairNumber={chairNumber} key={chairNumber} className="circle up">{chairNumber}</Chair>
				})
			}
		</>
	)
}

const tableStation = (id, chairs, chairs2) => {
  return (
    <Station id={id}>
      <div className="chairs">{GenerateChairs(chairs)}</div>
      <img src={Table} alt="Mesa de trabalho" />
      <div className="chairs">{GenerateChairs(chairs2)}</div>
    </Station>
  );
}

export function WorkStation() {


  return (
    <Container>
      <div className="content">
        {tableStation(1,[1,2,3,4],[5,6,7,8])}
        {tableStation(2, [9,10,11,12], [13,14,15,16])}
      </div>
      <div className="content">
        {tableStation(3, [17,18,19,20], [21,22,23,24] )}
        {tableStation(4, [25,26,27,28], [29,30,31,32])}
      </div>
    </Container>
  );
}
