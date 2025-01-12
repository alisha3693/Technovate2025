import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import img1 from "../../../assets/Images/Gallery/img1.png";
import img2 from "../../../assets/Images/Gallery/img2.png";
import img3 from "../../../assets/Images/Gallery/img3.png";
import gif from "../../../assets/Videos/landing_page.mp4";
import FOGS from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

const GalleryCarousel = () => {
  const carouselRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOGS({
          el: "#gallery",
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00d4ff, // Bright cyan (electric and eye-catching)
          highlightColor: 0xff5733, // Vibrant orange-red for contrast
          midtoneColor: 0x9b59b6, // Bold amethyst purple for depth
          backgroundColor: 0x0a0a23, // Deep midnight blue for a modern, sleek backdrop
          speed: 1.2, // Dynamic movement speed          
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const slides = [
    { id: 1, image: img1},
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img1 },
    { id: 5, image: img2 },
    { id: 6, image: img2 },
    { id: 7, image: img2 },
    { id: 8, image: img2 },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    let angle = 0;

    const rotateCarousel = () => {
      angle += 360 / slides.length;
      carousel.style.transform = `rotateY(${angle}deg)`;
    };

    const intervalId = setInterval(rotateCarousel, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="carousel-container" id="gallery">
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        className="background-video"
        style={{ position: "absolute", zIndex: -1, width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={gif} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* 3D Carousel */}
      <div className="carousel" ref={carouselRef}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="carousel-slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <span className="alt-text">{slide.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCarousel;
