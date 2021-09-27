import { useRef} from 'react';
import { useState } from "react";
import Backdrop from "./backdrop";

function Modal(props) {
  const [modal2IsOpen, setModalIsOpen] = useState(false);
  const [nrbilete, setNrbilete] = useState("");
const [nume, setNume] = useState("");

  function buyTicks() {
    setModalIsOpen(true);
  }

  const valuare = 2;

  return (
    <div className="modal">
      <div className="inputuri">
        <input type="text" placeholder="e-mail"  onChange={(event) => setNume(event.target.value)}></input>
        <input type="password" placeholder="password"></input>
        <input
          type="text"
          placeholder="number of tickets"
          onChange={(event) => setNrbilete(event.target.value)}
        ></input>
      </div>
      <button className="vreau2" onClick={buyTicks}>
        Buy now
      </button>

      {modal2IsOpen && <Modal2 />}
      {modal2IsOpen && <Backdrop />}
    </div>
  );

  function Modal2(props) {
    const numar = 100 - nrbilete
    const yes = numar >= 0
    const no = nrbilete - 100
    const afis =
      `Thank you ${nume} for your purchase. Remaining tickets: ${numar}`;
      const afis2 = `You ${nume} exceeded the number of available tickets (100) by ${no}!`;
    return (
      <div className="modal2">
        {yes && afis}
        {!yes && afis2}
      </div>
    );
  }
}




export default Modal;
