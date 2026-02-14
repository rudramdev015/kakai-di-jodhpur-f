import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

// Import your circular logo
import logo from './Clients Logos (3).png';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    
    <div className="app__footer-links">
      {/* COLUMN 1: CONTACT */}
      <div className="app__footer-links_contact">
        <h1 className="footer__headtext">Contact Us</h1>
        <p className="p__opensans">Kake Di Hatti, Jodhpur Branch</p>
        <p className="p__opensans">Rajasthan, India</p>
        <p className="p__opensans" style={{ color: '#D2CA87', fontWeight: 'bold', marginTop: '10px' }}>
          +91 89529 51000
        </p>
      </div>

      {/* COLUMN 2: PREMIUM LOGO & SOCIAL */}
      <div className="app__footer-links_logo">
        <div className="footer-logo-premium-glow">
          <img src={logo} alt="Kake Di Hatti Jodhpur" />
        </div>
        <p className="p__opensans" style={{ fontStyle: 'italic' }}>
          &quot;The King of Naan & Rich Flavours since 1942.&quot;
        </p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon" />
        
        <div className="app__footer-links_icons">
          <a href="https://www.instagram.com/kakedihattijodhpur/?hl=en" target="_blank" rel="noreferrer">
            <FiInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
          <a href="https://wa.me/918952951000" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* COLUMN 3: WORKING HOURS */}
      <div className="app__footer-links_work">
        <h1 className="footer__headtext">Dining Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">11:00 AM - 11:00 PM</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">11:00 AM - 12:00 AM</p>
      </div>
    </div>

    {/* CINEMATIC GOOGLE MAP SECTION */}
    <div className="app__footer-map-container">
      <h2 className="p__cormorant" style={{ color: '#D2CA87', marginBottom: '1rem', textAlign: 'center' }}>Locate The Legacy</h2>
      <div className="map-wrapper">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.55719459245!2d73.0062375!3d26.2760311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d5698b8bf1d%3A0x25f54f833ad3b5d0!2sKake%20di%20Hatti%20%7C%20Family%20Restaurant%20%7C%20Jodhpur!5e0!3m2!1sen!2sin!4v1770986812512!5m2!1sen!2sin" 
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Kake Di Hatti Jodhpur Office"
        ></iframe>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2026 KAKE DI HATTI JODHPUR. ALL RIGHTS RESERVED.</p>
    </div>
  </div>
);

export default Footer;