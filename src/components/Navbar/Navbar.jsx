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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "918952951000";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Namaste! I'd like to book a table.`;

  return (
    <nav className={`app__navbar ${scrolled ? 'navbar__active' : ''}`}>
      <div className="app__navbar-container">
        
        {/* LOGO SECTION */}
        <div className="app__navbar-logo">
          <a href="#home">
            <img src={logo} alt="Kake Di Hatti" className="nav__logo-img" />
          </a>
        </div>

        {/* DESKTOP NAVIGATION */}
        <ul className="app__navbar-links">
          <li><a href="#home" className="nav__link">Home</a></li>
          <li><a href="#about" className="nav__link">About</a></li>
          <li><a href="#menu" className="nav__link">Menu</a></li>
          <li><a href="#contact" className="nav__link">Contact</a></li>
        </ul>

        {/* ACTION BUTTONS */}
        <div className="app__navbar-actions">
          <a href={`tel:+${phoneNumber}`} className="nav__action-phone">
            <FiPhoneCall className="phone-icon" />
            <span className="hide-mobile">Call Now</span>
          </a>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav__action-book">
            <FaWhatsapp className="wa-icon" />
            <span>BOOK TABLE</span>
          </a>

          {/* MOBILE TOGGLE ICON */}
          <div className="app__navbar-menu-toggle">
            <GiHamburgerMenu onClick={() => setToggleMenu(true)} />
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {toggleMenu && (
        <div className="app__navbar-overlay slide-bottom">
          <MdOutlineRestaurantMenu 
            className="overlay__close" 
            onClick={() => setToggleMenu(false)} 
          />
          
          <div className="overlay__content">
            <img src={logo} alt="Logo" className="overlay__logo" />
            <ul className="overlay__links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
            
            <div className="overlay__btns">
               <a href={`tel:+${phoneNumber}`} className="overlay__btn-call">Call Us</a>
               <a href={whatsappUrl} className="overlay__btn-wa">WhatsApp Booking</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;