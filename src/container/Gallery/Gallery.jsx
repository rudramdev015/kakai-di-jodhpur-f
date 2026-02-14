import React, { useEffect, useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  // The 4 Specific Video Links from your request
  const instaLinks = [
    "https://www.instagram.com/reel/DNsKwh-5DQk/",
    "https://www.instagram.com/reel/DLnBIfgyL_I/",
    "https://www.instagram.com/reel/DLHzCI-SkTS/",
    "https://www.instagram.com/reel/DUsD9dgkTFz/"
  ];

  useEffect(() => {
    // Force Instagram to load the videos
    const loadInstagram = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);
        script.onload = () => {
          if (window.instgrm) window.instgrm.Embeds.process();
        };
      }
    };

    loadInstagram();
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 350;
    } else {
      current.scrollLeft += 350;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Discover our latest culinary stories and guest experiences. Follow us for a taste of Jodhpur's finest.
        </p>
        <button type="button" className="custom__button" onClick={() => window.open('https://www.instagram.com/kakedihattijodhpur/')}>
            View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {instaLinks.map((link, index) => (
            <div className="app__gallery-video_card" key={`insta-${index}`}>
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink={link}
                data-instgrm-version="14"
                style={{ background: '#000', border: '0', borderRadius: '8px', margin: '1px', width: '100%' }}
              >
                <div style={{ padding: '16px' }}>
                  <a href={link} style={{ color: '#DCCA87', textDecoration: 'none' }} target="_blank" rel="noreferrer">
                    Loading Video...
                  </a>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;