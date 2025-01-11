import React, { useState,useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arcadegif from "../../../assets/gif/Arcade.gif";
import "./VideoSection.css";
import FOGS from "vanta/dist/vanta.fog.min"
import * as THREE from "three"



gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const videoSectionRef = useRef(null);
  const gifRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null)
    const vantaRef = useRef(null)

    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          FOGS({
            el: "#vant",
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x0d0d3d, // Dark blue base color
            highlightColor: 0xff007f, // Neon pink highlight
            midtoneColor: 0x6a0dad, // Violet midtone
            backgroundColor: 0x00001a, // Very dark blue background
            speed: 1.2, // Slightly increased speed for a dynamic feel
          })
        );
      }
  
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);


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
    <div className="video-section-home" ref={videoSectionRef} id="vant">
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

