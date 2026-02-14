import React from 'react';
import { SubHeading } from '../../components';
import './Header.css';
// Importing the specific image from your folder
import headerImg from './11.png'; 

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info slide-in-bottom">
        <SubHeading title="Authentic Flavours of Old Delhi" />
        <h1 className="app__header-h1">The King of Naan <br /> & Rich Flavours</h1>
        <p className="p__opensans header__text">
          Experience the legendary taste of Kake di Hatti in the heart of Jodhpur. 
          Known for our signature giant Naans and traditional recipes passed down through generations, 
          we bring you an unforgettable journey of authentic North Indian spices.
        </p>
        <div className="header__btns">
          <button type="button" className="custom__button" onClick={scrollToMenu}>
            Explore Menu
          </button>
        </div>
      </div>

      <div className="app__wrapper_img scale-up-center">
        <div className="img__container">
           {/* Decorative background glow */}
          <div className="img__glow" /> 
          <img src={headerImg} alt="Kake di Hatti Signature Dish" className="floating-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;