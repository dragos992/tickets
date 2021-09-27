import React from "react";
import ReactDOM from "react-dom";
import Event from "../img/event.jpg";
import "./even.css"
import { useState } from 'react';
import Modal from "./modal";
import Backdrop from "./backdrop";

function Even(props){
const [modalIsOpen, setModalIsOpen] = useState(false);

    function buyTick(){
        setModalIsOpen(true);
    }


    return (
      <div className="eventcard">
        <img className="event" src={Event} />
        <br />
        <button className="vreau" onClick={buyTick}>
          Buy tickets
        </button>

        {modalIsOpen && <Modal />}
        {modalIsOpen && <Backdrop />}
      </div>
    );
}

export default Even;