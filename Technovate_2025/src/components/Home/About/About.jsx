import React from "react";
import "./About.css";
import Spiderman from "../../../assets/Images/Characters/spiderman.png"

export default function AboutSection() {
    return (
        <div className="home-about">
            <div className="home-about-background"></div>
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
