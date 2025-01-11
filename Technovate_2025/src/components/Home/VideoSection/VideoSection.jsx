import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arcadegif from "../../../assets/gif/Arcade.gif";
import "./VideoSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const videoSectionRef = useRef(null);
  const gifRef = useRef(null);

  useEffect(() => {
    const section = videoSectionRef.current;
    const gif = gifRef.current;

    if (section && gif) {
      // GSAP ScrollTrigger for zoom effect
      gsap.to(gif, {
        scale: 2,
        duration: 10,
        ease: "power1.out",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <div className="video-section-home" ref={videoSectionRef}>
      <div className="arcade-gif-container">
        <img 
          ref={gifRef}
          src={Arcadegif}
          className="arcade-gif"
          alt="Arcade Background"
        />
      </div>
    </div>
  );
}

