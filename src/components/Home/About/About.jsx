import React from "react";
import "./About.css";
import Spiderman from "../../../assets/Images/Characters/spiderman.png"
import FOGS from "vanta/dist/vanta.fog.min"
import * as THREE from "three"

export default function AboutSection() {
    const [vantaEffect, setVantaEffect] = React.useState(null)
    const vantaRef = React.useRef(null)

    // React.useEffect(() => {
    //   if (!vantaEffect) {
    //     setVantaEffect(
    //       FOGS({
    //         el: "#homevant",
    //         THREE: THREE,
    //         mouseControls: true,
    //         touchControls: true,
    //         gyroControls: false,
    //         minHeight: 200.0,
    //         minWidth: 200.0,
    //         scale: 1.0,
    //         scaleMobile: 1.0,
    //         color: 0x0d0d3d, // Dark blue base color
    //         highlightColor: 0xff007f, // Neon pink highlight
    //         midtoneColor: 0x6a0dad, // Violet midtone
    //         backgroundColor: 0x00001a, // Very dark blue background
    //         speed: 1.2, // Slightly increased speed for a dynamic feel
    //       })
    //     );
    //   }
  
    //   return () => {
    //     if (vantaEffect) vantaEffect.destroy();
    //   };
    // }, [vantaEffect]);
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
            Ah 💥, here we go again!" Technovate 6.0 is back, bigger and bolder than ever! As the annual techno-cultural fest of IIIT-Naya Raipur, Technovate has evolved into a grand spectacle, and this 6th edition is set to be nothing short of legendary. With an expected footfall of over 7,000 enthusiastic attendees, the fest brings together four electrifying tracks—Technical, Cultural, Sports, and the show-stopping Pro Night! But wait, there’s more—step into the vibrant world of ComicExpo, feast on various delicious food stalls, and immerse yourself in a festival where innovation meets celebration. “It’s time to stop being losers and get with the winners!” Get ready to experience the thrill, the energy, and the madness of Technovate 6.0! 🚀🎉
            </div>
        </div>
    );
}
