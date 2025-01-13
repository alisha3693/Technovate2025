import React from "react";
import "./Glimpse.css";
import gtaimg from "../../../assets/Images/Characters/gta.png";
import video from "../../../assets/Videos/technovate2k23video.mp4";

export default function Glimpse() {
  return (
    <div className="glimpse">
      <div className="glimpse-box">
        <div className="gta-character">
          <img src={gtaimg} className="watermark" alt="GTA Character" />
          <h1 className="glimpse-text">GLIMPSES OF TECHNOVATE</h1>
        </div>
        <div className="video-box">
          <div className="video">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="background-video"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      </div>
    </div>
  );
}
