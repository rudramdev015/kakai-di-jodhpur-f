import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  // Function to open Google Maps
  const openMaps = () => {
    window.open("https://maps.app.goo.gl/9h7kVa2tkDWa3ay69", "_blank");
  };

  // Function to open WhatsApp Booking
  const openWhatsApp = () => {
    const whatsappNumber = "918952951000";
    const message = encodeURIComponent("Hello Kake di Hatti! I would like to book a table.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        
        <div className="app__wrapper-content">
          <p className="p__opensans">1st Floor, 580/C, 9th C Rd, Sardarpura, Jodhpur, Rajasthan 342001</p>
          
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          
          <p className="p__opensans">Mon - Fri: 08:00 am - 12:00 am</p>
          <p className="p__opensans">Sat - Sun: 07:00 am - 11:00 pm</p>
          
          <p className="p__opensans" style={{ marginTop: '1.5rem', fontWeight: 'bold', color: '#DCCA87' }}>
            Call: +91 94621 37273
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            type="button" 
            className="custom__button" 
            style={{ marginTop: '2rem' }}
            onClick={openMaps}
          >
            Visit Us
          </button>

          <button 
            type="button" 
            className="custom__button" 
            style={{ marginTop: '2rem', background: '#25D366', color: '#fff', border: 'none' }}
            onClick={openWhatsApp}
          >
            Book Table (WhatsApp)
          </button>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus_img" />
      </div>
    </div>
  );
};

export default FindUs;