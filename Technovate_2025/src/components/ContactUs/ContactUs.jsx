import React from 'react';
import './ContactUs.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link, useLocation } from 'react-router-dom';
const ContactUs = () => {
  const location = useLocation();
  return (
    <div className="contact-us-container" id="ContactUs">
      <h1>Contact Us</h1>
      <div className="socials">
          <a href="https://www.instagram.com/rootvestors/"><InstagramIcon fontSize='large' style={{ color: 'rgb(187, 0, 255)' }}/></a>
          <a href="https://www.linkedin.com/company/rootvestors/posts/?feedView=all"><LinkedInIcon fontSize='large' style={{ color: 'rgb(187, 0, 255)' }}/></a>
          <a href="https://twitter.com"><FacebookIcon fontSize='large' style={{ color: 'rgb(187, 0, 255)' }}/></a>
          <a href="https://facebook.com"><XIcon fontSize='large' style={{ color: 'rgb(187, 0, 255)' }}/></a>
      </div>
      <div className="contact-us-flex">
        <div className="contact-us-item">
          <h2>Email</h2>
          <a href="mailto:rootvestors@gmail.com"><p className='mail-contact-us'><MailOutlineIcon/>&nbsp;rootvestors@gmail.com</p></a>
          {/* <h2>Phone</h2>
          <p><img src={phone} alt="" /> +91 12345 67890</p>
          <p><img src={phone} alt="" /> +91 12345 67890</p> */}
          <br></br>
          <h2>Quick Links</h2>
          <Link to="/"><p className='quick-links'>Home</p></Link>
          <Link to="/courses"><p className='quick-links'>Courses</p></Link>
          {location.pathname==="/" && <a href="#FAQ"><p className='quick-links'>FAQs</p></a>}
          <Link to="/newsletter"><p className='quick-links'>Newsletter</p></Link>
        </div>
        {/* <div className="contact-us-item">
          <h2>Social Handles</h2>
          <a href="https://instagram.com"><InstagramIcon fontSize='large'/></a>
          <a href="https://linkedin.com"><LinkedInIcon fontSize='large'/></a>
          <a href="https://twitter.com"><FacebookIcon fontSize='large'/></a>
          <a href="https://facebook.com"><XIcon fontSize='large'/></a>
        </div> */}
        <div className="contact-us-item">
          <h2>Address</h2>
          <p>IIIT–Naya Raipur</p>
          <p>Plot No. 7, Sector 24,</p>
          <p>Near Purkhooti Muktangan,</p>
          <p>Atal Nagar – 493661</p>
          <p>Chhattisgarh</p>
        </div>
        <div className="contact-us-item map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.6009597368534!2d81.76359047497839!3d21.12846938434703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c434ac2ae871%3A0x4e3568497a7e1d7e!2sInternational%20Institute%20of%20Information%20Technology%2C%20Naya%20Raipur!5e0!3m2!1sen!2sin!4v1721214197357!5m2!1sen!2sin"
            style={{border:1}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <footer>
        <p>Copyright © 2024 All Rights Reserved By Technovate.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
