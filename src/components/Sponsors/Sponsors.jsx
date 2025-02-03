import React from 'react';
import SponsorText from '../../assets/Images/Bg/our sponsers text.png';
import Bee from "../../assets/Images/Characters/Bee image.png";
import backgroundVideo from "../../assets/Videos/Sponsors_Background.mp4";
import ContactUs from '../ContactUs/ContactUs';
import Navbar from '../Navbar/Navbar';
import './Sponsors.css';

export default function Sponsors() {
    // SponsorsDetail as an array with additional fields
    const SponsorsDetail = [
        { 
            name: "ABC", 
            image: "src/assets/Images/Characters/spiderman.png", 
            title: "Exclusive Partner", 
            level: "Gold" 
        },
        { 
            name: "ABCD", 
            image: "src/assets/Images/Bg/gta6bg.png", 
            title: "Premium Sponsor", 
            level: "Silver" 
        },
        { 
            name: "ABCDE", 
            image: "src/assets/Images/Characters/Bee image.png", 
            title: "Supporting Partner", 
            level: "Bronze" 
        },
        { 
            name: "ABCDEF", 
            image: "src/assets/Images/Bg/Bluesky_.png", 
            title: "Main Sponsor", 
            level: "Platinum" 
        }
    ];

    return (
        <div className="sponsors">
            <div className="Heading" style={{ display: 'flex', flexDirection: 'column', gap: '6rem'}}>
                <Navbar />
                <div className="head">
                    <img src={SponsorText} className="Text" alt="Our Sponsors"></img>
                    <img src={Bee} className="Bee" alt="Bee"></img>
                </div>
            </div>
            <div className="Sponsor-Container">
                <video autoPlay muted loop className="background-video">
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="scrollable-sponsors">
                    {SponsorsDetail.map((sponsor, index) => (
                        <div key={index} className="sponsor-item">
                            <img className="sponsor-image" src={sponsor.image} alt={sponsor.name} />
                            <div className="sponsor-details">
                                <h2>{sponsor.name} - {sponsor.title}</h2>
                                <p>Sponsorship Level: {sponsor.level}</p>
                                <p>Thank you, {sponsor.name}, for your valuable support!</p>
                                <p>Contact: 123-456-7890</p>
                                <p>Email: {sponsor.name.toLowerCase()}@example.com</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sponsor-contact-us-container">
                <ContactUs />
            </div>
        </div>
    );
}
