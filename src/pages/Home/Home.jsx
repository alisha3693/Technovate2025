import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll"; // For smooth scrolling
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import AboutSection from "../../components/Home/About/About";
import VideoSection from "../../components/Home/VideoSection/VideoSection";
import Gallery from "../../components/Home/Gallery/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";
import LastSection from "../../components/Home/LastSection/LastSection";
import Glimpse from "../../components/Home/Glimpse/Glimpse";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import Events from "../../components/Home/Events/events";
import EventText from '../../components/Home/Events/event_text'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home">
      {/* Custom Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          backgroundColor: "white",
          zIndex: 9999,
          transition: "width 0.2s ease",
          width: `${scrollProgress}%`,
        }}
      />
      
      {/* Your other sections */}
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <Events/>
      {/* <EventText/> */}
      <Gallery />
      <Glimpse />
      <LastSection />
      <ContactUs />
    </div>
  );
}


