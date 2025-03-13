import React, { useState } from "react";
import "./events.css";
import EventCard from "./eventcard";
import image1 from "../../../assets/Images/Gallery/img3.png";
import event_image from "../../../assets/Images/Bg/eventsText.png";
import EventModal from "./modal.jsx";
import ContactUs from "../../ContactUs/ContactUs.jsx";
export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");

  // Open modal with the event title
  const openModal = (title, modal_text) => {

    setModalTitle(title);
    setModalText(modal_text);
    setIsOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsOpen(false);
  };

  return (

    <div className="top-main">
      <div className="main-center">
        <div className="first-row">
          {!isOpen && <EventCard image_link={image1} title_text="Pro Night" onClick={() => openModal("Pro Night")} />}
          {!isOpen && <EventCard image_link="https://i.pinimg.com/736x/e1/4e/bd/e14ebd1396c089ca5d97d0e53a6cd3c5.jpg" title_text="Technical" onClick={() => openModal("Technical")} />}
        </div>
        <div className="second-row">
          {!isOpen && <EventCard image_link="https://i.pinimg.com/736x/f3/3c/40/f33c40bc2645d97343b917a18ef6cd23.jpg" title_text="Sports" onClick={() => openModal("Sports")} />}
          {!isOpen && <EventCard image_link="https://i.pinimg.com/736x/74/60/af/7460af72951271b3a468e4995a152b14.jpg" title_text="Cultural" onClick={() => openModal("Cultural")} />}
          {!isOpen && <EventCard image_link="https://i.pinimg.com/736x/5a/d8/fd/5ad8fd61c365b622e02983f20c0aed67.jpg" title_text="e-Sports" onClick={() => openModal("e-Sports")} />}
        </div>
      </div>
      <img src={event_image} id="event_text" alt="Event Text" />


      {isOpen && (
        <EventModal title={modalTitle} modal_text={modalText} setIsOpen={setIsOpen} />
      )};

    </div>



  );
}
