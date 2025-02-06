import React, { useState } from "react";
import "./Modal.css"; // You can create your own styles here

const EventModal = ({title , modal_text, setIsOpen}) => {


  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <div>
     
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-content-nav">
              <h1>{title}</h1>
            <button onClick={closeModal}><span>X</span></button>
            </div>
          
            <p>{modal_text}</p>
            
          </div>
        </div>
      
    </div>
  );
};

export default EventModal;
