import React from 'react';
import { FiFacebook, FiInstagram, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp, FaRegClock } from 'react-icons/fa';

import logo from './Clients Logos (3).png';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    
    <div className="app__footer-links">
      {/* 1. CONTACT SECTION */}
      <div className="app__footer-links_contact">
        <h1 className="footer__headtext">Visit Us</h1>
        <div className="footer__contact-item">
          <FiMapPin className="footer__icon" />
          <p className="p__opensans">Sardarpura, Jodhpur, Rajasthan</p>
        </div>
        <div className="footer__contact-item">
          <FiPhoneCall className="footer__icon" />
          <p className="p__opensans" style={{ color: '#DCCA87', fontWeight: '600' }}>+91 89529 51000</p>
        </div>
      </div>

      {/* 2. CENTER LOGO & SOCIAL (THE STAR) */}
      <div className="app__footer-links_logo">
        <div className="footer-logo-container">
          <div className="logo-aura"></div>
          <img src={logo} alt="Kake Di Hatti Jodhpur" />
        </div>
        <p className="p__opensans logo__quote">
          &quot;The King of Naan & Rich Flavours Since 1942.&quot;
        </p>
        <img src={images.spoon} className="spoon__img" alt="spoon" />
        
        <div className="app__footer-social_icons">
          <a href="https://www.instagram.com/kakedihattijodhpur/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FiFacebook />
          </a>
          <a href="https://wa.me/918952951000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* 3. DINING HOURS SECTION */}
      <div className="app__footer-links_work">
        <h1 className="footer__headtext">Dining Hours</h1>
        <div className="footer__contact-item">
          <FaRegClock className="footer__icon" />
          <div>
            <p className="p__opensans">Mon - Fri: <span style={{ color: '#DCCA87' }}>11AM - 11PM</span></p>
            <p className="p__opensans">Sat - Sun: <span style={{ color: '#DCCA87' }}>11AM - 12AM</span></p>
          </div>
        </div>
      </div>
    </div>

    {/* CINEMATIC MAP SECTION */}
    <div className="app__footer-map-container">
      <div className="map__header">
        <div className="line" />
        <p className="p__cormorant">Locate The Legacy</p>
        <div className="line" />
      </div>
      <div className="map-wrapper">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.55719459245!2d73.0062375!3d26.2760311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d5698b8bf1d%3A0x25f54f833ad3b5d0!2sKake%20di%20Hatti%20%7C%20Family%20Restaurant%20%7C%20Jodhpur!5e0!3m2!1sen!2sin!4v1770986812512!5m2!1sen!2sin" 
          width="100%" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          title="Kake Di Hatti Map"
        ></iframe>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2026 KAKE DI HATTI JODHPUR. ALL RIGHTS RESERVED.</p>
    </div>
  </div>
);

export default Footer;