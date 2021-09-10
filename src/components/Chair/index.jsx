import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Chair(props) {
  const { scheduling, setNewScheduling  } = useContext(AuthContext);

  const chairIdentification = props.chairNumber;
  const chairStatus = props.seatColor ? props.seatColor : "chair-grey";

  const chairClickHandler = (event, chairIdentification) => {
    event.stopPropagation()
    const chairColor = document.querySelector(`.seat-${chairIdentification}`).classList
    console.log(chairColor)
    if (scheduling.workstation !== chairIdentification) {
      console.log("oi")
        const choosedChair = chairIdentification;

        // chairColor.remove("seat-black")
        // chairColor.add("seat-grey")
        setNewScheduling({...scheduling, workstation: choosedChair})
    } else {
      console.log("olá")
      // chairColor.remove("seat-grey")
      // chairColor.add("seat-black")
      return;
    }
}

  return (
    <div className={`circle up seat-${chairIdentification} ${chairStatus}`} onClick={(event) => chairClickHandler(event,props.chairNumber)}>
      {props.chairNumber}
    </div>
  );
}
