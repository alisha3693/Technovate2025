import React, { useState } from "react";
import "./events.css";
import EventCard from "./eventcard";
import image1 from "../../../assets/Images/Gallery/img3.png";
import image2 from "../../../assets/Images/Gallery/img2.png";
import image3 from "../../../assets/Images/Gallery/img4.png";
import image4 from "../../../assets/Images/Gallery/img5.png";
import image5 from "../../../assets/Images/Gallery/img6.png";
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
          {!isOpen && <EventCard image_link={image2} title_text="Technical" onClick={() => openModal("Technical")} />}
        </div>
        <div className="second-row">
          {!isOpen && <EventCard image_link={image3} title_text="Sports" onClick={() => openModal("Sports")} />}
          {!isOpen && <EventCard image_link={image4} title_text="Cultural" onClick={() => openModal("Cultural")} />}
          {!isOpen && <EventCard image_link={image5} title_text="e-Sports" onClick={() => openModal("e-Sports")} />}
        </div>
      </div>
      <img src={event_image} id="event_text" alt="Event Text" />


      {isOpen && (
        <EventModal title={modalTitle} modal_text={modalText} setIsOpen={setIsOpen} />
      )};

    </div>



  );
}
