import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import img1 from "../../../assets/Images/Gallery/img1.png";
import img2 from "../../../assets/Images/Gallery/img2.png";
import img3 from "../../../assets/Images/Gallery/img3.png";
import gif from "../../../assets/Videos/landing_page.mp4";

const GalleryCarousel = () => {
  const carouselRef = useRef(null);

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
    <div className="carousel-container">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="background-video"
        style={{ position: "absolute", zIndex: -1, width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={gif} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
