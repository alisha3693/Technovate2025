import React from "react";
import "./About.css";
import Spiderman from "../../../assets/Images/Characters/spiderman.png"
import FOGS from "vanta/dist/vanta.fog.min"
import * as THREE from "three"

export default function AboutSection() {
    const [vantaEffect, setVantaEffect] = React.useState(null)
    const vantaRef = React.useRef(null)

    React.useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          FOGS({
            el: "#homevant",
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
    return (
        <div className="home-about" id="homevant">
            <div className="home-about-background" ></div>
            <div className="home-about-title">
                ABOUT
                TECHNOVATE
            </div>
            <span className="home-about-spiderman">
                <img src={Spiderman}/>
            </span>
            <div className="home-about-text">
            Technovate at IIIT-NR is an annual convergence of technology and culture, encompassing coding competitions, hacking contests, battle of bands, and keynote sessions by innovation experts. Spanning three dynamic days, it provides a platform for inventive thinking, spotlighting ingenious ideas and cultural talents. Attendees can engage in collaborative learning, network with like-minded individuals, and explore cutting-edge technologies. 

Technovate continues to evolve as a significant platform where technology and culture converge harmoniously.
            </div>
        </div>
    );
}
