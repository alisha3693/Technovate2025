import React from "react"
import HeroSection from "../../components/Home/HeroSection/HeroSection"
import AboutSection from "../../components/Home/About/About"
import VideoSection from "../../components/Home/VideoSection/VideoSection"
import Gallery from "../../components/Home/Gallery/Gallery"
import ContactUs from "../../components/ContactUs/ContactUs"
import LastSection from "../../components/Home/LastSection/LastSection"


export default function Home(){

    return(
        <div>
        <HeroSection/>
        <VideoSection/>
        <AboutSection/>
        <Gallery/>
        <LastSection/>
        <ContactUs/>
        </div>
    )
}