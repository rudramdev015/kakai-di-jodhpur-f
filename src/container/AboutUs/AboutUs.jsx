import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    {/* Heritage Watermark Overlay */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="Heritage Overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      {/* LEFT SIDE: THE LEGACY */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Our Legacy</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Since 1942, Kake Di Hatti has been a timeless symbol of rich North Indian culinary heritage. 
          Built on a foundation of tradition and heartfelt hospitality, we serve iconic Punjabi cuisine 
          that brings families together over unforgettable meals. It is more than a restaurant—it is a 
          heritage passed down through generations.
        </p>
        <button type="button" className="custom__button">Explore Story</button>
      </div>

      {/* CENTER PIECE: THE ICONIC KNIFE */}
      <div className="app__navbar-logo-overlap app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      {/* RIGHT SIDE: THE CRAFT */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">The Craft</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Every plate reflects our commitment to authenticity. From slow-cooked curries prepared with 
          hand-ground spices to our iconic oversized stuffed naans—freshly baked in a traditional tandoor 
          to achieve that perfect crisp texture. We preserve the true taste of North India with 
          passion and respect for our culinary roots.
        </p>
        <button type="button" className="custom__button">View Heritage</button>
      </div>
    </div>
  </div>
);

export default AboutUs;