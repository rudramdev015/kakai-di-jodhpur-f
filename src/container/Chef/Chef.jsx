import React, { useEffect } from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
  // This ensures the Instagram script loads to show the reel properly
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="app__bg app__wrapper section__padding">
      {/* Left Side: The Instagram Reel (Eye-catching & Interactive) */}
      <div className="app__wrapper_img app__wrapper_img-reverse app__chef-reel_container">
        <blockquote 
          className="instagram-media" 
          data-instgrm-permalink="https://www.instagram.com/reel/DMP13qEShLo/" 
          data-instgrm-version="14"
          style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: '99.375%' }}
        >
        </blockquote>
      </div>

      {/* Right Side: The Legacy Info */}
      <div className="app__wrapper_info">
        <SubHeading title="The King of Naan" />
        <h1 className="headtext__cormorant">The Legacy Since 1942</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p__opensans">From the narrow lanes of Old Delhi to the heart of Sardarpura, Jodhpur.</p>
          </div>
          <p className="p__opensans"> 
            Kake Di Hatti indubitably has the largest variety of stuffed Naan Breads. 
            It is gripping to know that we are called the "King of Naan" considering 
            the massive sizes and authentic preparation. Never have we compromised 
            on our traditional modes of preparation, maintaining a legacy that 
            started over 80 years ago.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Kake Di Hatti</p>
          <p className="p__opensans">Jodhpur's Pride</p>
          <div className="app__chef-badges">
            <span className="badge">Authentic</span>
            <span className="badge">Pure Veg</span>
            <span className="badge">Traditional</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;