import React, { useState } from "react";
import "./events.css";
import EventCard from "./eventcard";
import image1 from "../../../assets/Images/Gallery/img3.png";
import event_image from "../../../assets/Images/Bg/eventsText.png";
import EventModal from "./modal.jsx";

export default function Events() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  // Open modal with the event title
  const openModal = (title) => {
    console.log(`Opening modal for: ${title}`); // Debugging log
    setModalTitle(title);
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
          {!isOpen &&<EventCard image_link={image1} title_text="Technical" onClick={() => openModal("Technical")} />}
        </div>
        <div className="second-row">
          {!isOpen &&<EventCard image_link={image1} title_text="Sports" onClick={() => openModal("Sports")} />}
          {!isOpen &&<EventCard image_link={image1} title_text="Cultural" onClick={() => openModal("Cultural")} />}
        </div>
      </div>
      <img src={event_image} id="event_text" alt="Event Text" />

    
      {isOpen && (
        <EventModal title={modalTitle} onClose={closeModal} />
      )}
    </div>
  );
}
