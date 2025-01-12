import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../../components/Home/HeroSection/HeroSection"
import AboutSection from "../../components/Home/About/About"
import VideoSection from "../../components/Home/VideoSection/VideoSection"
import Gallery from "../../components/Home/Gallery/Gallery"
import ContactUs from "../../components/ContactUs/ContactUs"
import LastSection from "../../components/Home/LastSection/LastSection"
import FOGS from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import Glimpse from "../../components/Home/Glimpse/Glimpse";


export default function Home(){    
    return(
        <div id="home">
        <HeroSection/>
        <VideoSection/>
        <AboutSection/>
        <Gallery/>
        <Glimpse/>
        <LastSection/>
        <ContactUs/>
        </div>
    )
}