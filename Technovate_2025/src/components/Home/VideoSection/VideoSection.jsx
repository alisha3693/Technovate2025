import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Arcadegif from "../../../assets/gif/Arcade.gif";
import "./VideoSection.css";
import FOGS from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const videoSectionRef = useRef(null);
  const gifRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  // Vanta.js effect setup
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

  // GSAP animation setup
  useEffect(() => {
    const section = videoSectionRef.current;
    const gif = gifRef.current;

    if (section && gif) {
      // GSAP ScrollTrigger animation for full-page scaling
      gsap.to(gif, {
        scale: 2, // Scale the GIF to 3x its original size
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: section,
          start: "top top", // Start when the section hits the top
          end: "bottom top", // End when the section leaves the top
          scrub: true, // Smoothly interpolate the animation as the user scrolls
          pin: true, // Pin the section in place during the animation
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
