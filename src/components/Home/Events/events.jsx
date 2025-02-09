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
          {!isOpen && <EventCard image_link={image1} title_text="Pro Night" onClick={() => openModal("Pro Night" , `Pro Night at Technovate is the ultimate showstopper, where music, lights, and energy take over the stage. It’s the most awaited segment of the fest, featuring electrifying DJ nights and live performances by renowned national and international artists. Over the years, Pro Night has hosted incredible talents like Nikhil D’Souza, Ash King, and DJ Pablo, creating unforgettable musical experiences. Whether it’s singing along to soulful melodies or dancing to high-energy beats, Pro Night promises a night of pure entertainment and excitement, making it the perfect grand finale to Technovate! 🎶✨`)} />}
          {!isOpen &&<EventCard image_link={image1} title_text="Technical" onClick={() => openModal("Technical" , `The Technical Track at Technovate is where innovation meets competition! It brings together tech enthusiasts, coders, and problem-solvers to showcase their skills and creativity. With events like Hack-O-Harbour, a thrilling hackathon, Coding Quest, a challenge for programming wizards, Clash of Campus, an inter-college battle of intellect, and Stock Simulation, a test of market strategy, this track offers something for every tech-savvy mind. Whether you're coding, strategizing, or innovating, the Technical Track is the perfect platform to push your limits and compete with the best! 🚀💻`)} />}
        </div>
        <div className="second-row">
          {!isOpen &&<EventCard image_link={image1} title_text="Sports" onClick={() => openModal("Sports" , `The Sports Track at Technovate is where passion, skill, and competition take the spotlight! Whether on the field, the court, or the virtual arena, this track brings together athletes and gamers for intense battles. Cricket, Futsal, Badminton, and Volleyball test teamwork and endurance, while esports enthusiasts can showcase their reflexes in BGMI, Valorant, and Marvel Rivals. With inter-college matches and high-stakes showdowns, the Sports Track promises non-stop action and thrilling moments for players and spectators alike! ⚽🏸🎮🔥`)} />}
          {!isOpen &&<EventCard image_link={image1} title_text="Cultural" onClick={() => openModal("Cultural" , `The Cultural Track at Technovate is where talent, creativity, and expression come alive! From the dazzling Fiducia Fashion Show, where style takes center stage, to the soulful performances at Open Mic, this track celebrates all forms of art. Dance enthusiasts can shine in the Groovify Solo Dance Competition and the high-energy Street Dancing Competition, while photography lovers can capture the magic in the Shutter Flutter Photography Contest. With many more exciting events, the Cultural Track is the heart of Technovate, bringing together performers, artists, and dreamers for a celebration like no other! 🎭🎤📸`)} />}
        </div>
      </div>
      <img src={event_image} id="event_text" alt="Event Text" />

    
      {isOpen && (
        <EventModal title={modalTitle} modal_text={modalText} setIsOpen={setIsOpen} />
      )};
      
    </div>

  

  );
}
