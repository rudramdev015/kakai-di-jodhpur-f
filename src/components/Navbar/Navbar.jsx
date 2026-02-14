import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import logo from './Kake Di Hatti.svg'; 
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "918952951000";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Namaste! I'd like to book a table.`;

  return (
    <nav className={`app__navbar ${scrolled ? 'navbar-glass-active' : ''}`}>
      
      {/* BRANDING */}
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={logo} alt="Kake Di Hatti Jodhpur" className="heritage-logo-svg" />
        </a>
      </div>

      {/* DESKTOP LINKS */}
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

      {/* ACTION BUTTONS (Hidden on small mobile, shown on tablet/desktop) */}
      <div className="app__navbar-actions">
        <a href={`tel:+${phoneNumber}`} className="nav-action-call">
          <FiPhoneCall className="icon-pulse" />
          <span className="hide-on-tablet">Call Us</span>
        </a>
        <div className="vertical-divider hide-on-tablet" />
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="premium-whatsapp-btn">
          <FaWhatsapp className="whatsapp-icon" />
          <span>Book Table</span>
        </a>
      </div>

      {/* MOBILE INTERFACE */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#D2CA87" className="hamburger-icon" onClick={() => setToggleMenu(true)} />
        
        {toggleMenu && (
          <div className="app__navbar-mobile-overlay scale-in-center">
            <MdOutlineRestaurantMenu fontSize={35} className="overlay__close" onClick={() => setToggleMenu(false)} />
            
            <div className="mobile-menu-content">
                <img src={logo} alt="Logo" className="mobile-overlay-logo" />
                <ul className="app__navbar-mobile-links">
                    <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                    <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
                    <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                </ul>

                <div className="mobile-cta-container">
                    <a href={`tel:+${phoneNumber}`} className="mobile-btn call-outline"><FiPhoneCall /> Call Now</a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mobile-btn wa-solid"><FaWhatsapp /> WhatsApp Booking</a>
                </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;