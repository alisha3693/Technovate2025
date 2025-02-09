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
  const [modalText , setModalText] = useState("");

  // Open modal with the event title
  const openModal = (title , modal_text) => {
    console.log(`Opening modal for: ${title}`); // Debugging log
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
          {!isOpen && <EventCard image_link={image1} title_text="Pro Night" onClick={() => openModal("Pro Night" , `Pro Night is an electrifying event that brings together talented artists for an unforgettable night of live performances. Featuring top EDM acts, DJs, and more, Pro Night promises an immersive experience with pulsating beats and high-energy vibes. Whether you're a fan of electronic music or simply looking for an exciting night out, Pro Night delivers an exceptional atmosphere you won’t want to miss!`)} />}
          {!isOpen &&<EventCard image_link={image1} title_text="Technical" onClick={() => openModal("Technical" , `Technical events are a series of exciting technical events designed to challenge and inspire innovators. From high-stakes hackathons to thrilling Capture the Flag competitions and fast-paced coding speedruns, Tech Pro offers a platform for developers, coders, and tech enthusiasts to showcase their skills. Whether you're solving complex problems, racing against time, or collaborating with peers, these events provide a dynamic environment for learning, growth, and hands-on experience in the tech world.`)} />}
        </div>
        <div className="second-row">
          {!isOpen &&<EventCard image_link={image1} title_text="Sports" onClick={() => openModal("Sports" , `Sport Fest is an action-packed series of sporting events that bring together athletes and sports enthusiasts for an exciting and competitive experience. From team sports to individual challenges, including tournaments, races, and fun activities, Sport Fest offers something for everyone. Whether you're a seasoned competitor or just looking to have fun, these events provide a thrilling atmosphere to showcase talent, build teamwork, and stay active!`)} />}
          {!isOpen &&<EventCard image_link={image1} title_text="Cultural" onClick={() => openModal("Cultural" , `CultureFest is a vibrant celebration of art, tradition, and creativity. This series of cultural events features performances, workshops, and exhibitions that highlight diverse forms of expression, from music and dance to theater and visual arts. CultureFest brings together artists, performers, and audiences to celebrate heritage, creativity, and cultural exchange in an engaging and inspiring environment.`)} />}
        </div>
      </div>
      <img src={event_image} id="event_text" alt="Event Text" />

    
      {isOpen && (
        <EventModal title={modalTitle} modal_text={modalText} setIsOpen={setIsOpen} />
      )};
      
    </div>

  

  );
}
