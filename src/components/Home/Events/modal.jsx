import React, { useState } from "react";
import "./modal.css"; // You can create your own styles here
import EventBox from './eventBox.jsx'
const EventModal = ({ title, modal_text, setIsOpen }) => {


  const closeModal = () => {
    setIsOpen(false);
  };

  const handleRedirect = (link) => {
    window.open(link, '_blank')
  }


  return (
    <div className="main-modal">

      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content-nav">
            <h1>{title}</h1>
            <button onClick={closeModal}><span>X</span></button>
          </div>
          <div className="modal-content-boxes">
            {title === "Pro Night" && (<>
              <EventBox image={'/'} title={"Day 1"} />
              <EventBox image={'/'} title={"Day 2"} />
              <EventBox image={'/'} title={"Day 3"} />
            </>)
            }

            {title === "Sports" && (<>
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/67a34a5692a3a_football.webp?d=700x400'} title={"Football"} handleClick={() => handleRedirect("https://unstop.com/events/futsal-technovate-60-iiit-naya-raipur-1355365")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/67821ffe3b725_volleyball.webp?d=700x400'} title={"Vollyball"} handleClick={() => handleRedirect("https://unstop.com/events/volleyball-technovate-60-iiit-naya-raipur-1355364")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/678f5f49452f0_chess.webp?d=700x400'} title={"Chess Tournament"} handleClick={() => handleRedirect("https://unstop.com/events/chess-tournament-technovate-60-iiit-naya-raipur-1355347")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/67822666b757b_table-tennis.webp?d=700x400'} title={"Table Tennis"} handleClick={() => handleRedirect("https://unstop.com/events/table-tennis-technovate-60-iiit-naya-raipur-1355401")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/67822454811ad_badminton.webp?d=700x400'} title={"Badminton"} handleClick={() => handleRedirect("https://unstop.com/events/badminton-technovate-60-iiit-naya-raipur-1355367")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6781feb10b3dd_basketball.webp?d=700x400'} title={"BasketBall"} handleClick={() => handleRedirect("https://unstop.com/competitions/basketball-technovate-60-international-institute-of-information-technology-iiit-naya-raipur-1355068")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6781fbf6e93b6_cricket.webp?d=700x400'} title={"Cricket Tournament"} handleClick={() => handleRedirect("https://unstop.com/events/cricket-tournament-technovate-60-iiit-naya-raipur-1355001")} />

            </>
            )}

            {title === "Technical" && (<>
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/677ed0d3d3dd4_hack-o-harbour.webp?d=700x400'} title={"Hack-o-Harbor"} handleClick={() => handleRedirect("https://unstop.com/hackathons/hack-o-harbour-technovate-60-iiit-naya-raipur-1350191")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/679a9c36a379a_robolution-30.webp?d=700x400'} title={"Robolution 3.0"} handleClick={() => handleRedirect("https://unstop.com/competitions/robolution-30-technovate-60-iiit-naya-raipur-1379689")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/67801dcf1f976_unlock-the-technoverse-capture-the-flag.webp?d=700x400'} title={"CTF"} handleClick={() => handleRedirect("https://unstop.com/hackathons/unlock-the-technoverse-capture-the-flag-technovate-60-iiit-naya-raipur-1352031")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6780125fcfbc4_clash-of-campus.webp?d=700x400'} title={"Quiz Runner 2.0"} handleClick={() => handleRedirect("https://unstop.com/quiz/quiz-runner-technovate-60-iiit-naya-raipur-1352006")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/67a225b6381bd_market-royale.webp?d=700x400'} title={"Market Royale"} handleClick={() => handleRedirect("https://unstop.com/competitions/market-royale-technovate-60-iiit-naya-raipur-1389402")} /> </>)}

            {title === "Cultural" && (
              <>

                <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6780c561860c6_street-dancer.webp?d=700x400'} title={"Street Dance"} handleClick={() => handleRedirect("https://unstop.com/events/street-dancer-technovate-60-iiit-nagpur-1353272")} />
                <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6780bfabf0e0b_open-mic.webp?d=700x400'} title={"Open mic"} handleClick={() => handleRedirect("https://unstop.com/events/open-mic-technovate-60-international-institute-of-information-technology-iiit-naya-raipur-1353095")} />
                <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/677fdb173e051_fashion-show.webp?d=700x400'} title={"Fashion Show"} handleClick={() => handleRedirect("https://unstop.com/events/fashion-show-technovate-60-iiit-naya-raipur-1351855")} />
                <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/677fd69ed0fba_nukkad-natak.webp?d=700x400'} title={"Nukkad Natak"} handleClick={() => handleRedirect("https://unstop.com/events/nukkad-natak-technovate-60-international-institute-of-information-technology-iiit-naya-raipur-1351737")} />
                <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/677fb599c0d58_dance-battle-group.webp?d=700x400'} title={"Group Dance"} handleClick={() => handleRedirect("https://unstop.com/events/dance-battle-group-technovate-60-iiit-naya-raipur-1351675")} />
                <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/677fa75c51e5d_dance-battle.webp?d=700x400'} title={"Solo Dance"} handleClick={() => handleRedirect("https://unstop.com/events/dance-battle-technovate-60-international-institute-of-information-technology-iiit-naya-raipur-1351626")} />
                <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/677f9fd764ba4_singing-solo.webp?d=700x400'} title={"Singing"} handleClick={() => handleRedirect("https://unstop.com/events/singing-solo-technovate-60-international-institute-of-information-technology-iiit-naya-raipur-1351606")} />
                <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/677f97e88ef93_photography.webp?d=700x400'} title={"Photography"} handleClick={() => handleRedirect("https://unstop.com/events/photography-technovate-60-iiit-naya-raipur-1351579")} />
              </>)}
            {title === "e-Sports" && (<>
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/67821e42a0d78_bgmi.webp?d=700x400'} title={"BGMI"} handleClick={() => handleRedirect("https://unstop.com/events/bgmi-technovate-60-iiit-naya-raipur-1355361")} />
              <EventBox image={'https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/678216d634712_valorant.webp?d=700x400'} title={"Valorant"} handleClick={() => handleRedirect("https://unstop.com/competitions/valorant-technovate-60-international-institute-of-information-technology-iiit-naya-raipur-1355110")} />
            </>
            )}




          </div>



        </div>
      </div>

    </div>
  );
};

export default EventModal;
