import React from 'react';
import { SubHeading } from '../../components';
import naanImg from './Naan.png'; // Importing the image from your Findus folder

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
      {/* CSS Styles Embedded in the component */}
      <style>{`
        .findus-content-container {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .address-text {
            font-family: var(--font-alt);
            color: var(--color-grey);
            font-size: 20px;
            line-height: 1.5;
            letter-spacing: 0.04em;
        }

        .contact-highlight {
            border-left: 2px solid #DCCA87;
            padding-left: 1.5rem;
            margin: 2rem 0;
        }

        .contact-label {
            color: #DCCA87;
            font-family: var(--font-base);
            font-size: 32px;
            margin-bottom: 0.5rem;
            text-transform: capitalize;
        }

        .phone-number {
            font-family: var(--font-alt);
            color: #fff;
            font-size: 24px;
            font-weight: 700;
        }

        .findus-buttons {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
            margin-top: 1rem;
        }

        /* WhatsApp Button Custom Styling */
        .btn-whatsapp {
            background-color: #25D366 !important;
            color: #fff !important;
            border: 1px solid #25D366 !important;
        }

        .btn-whatsapp:hover {
            background-color: transparent !important;
            color: #25D366 !important;
        }

        /* Stunning Image Treatment */
        .findus-naan-img {
            width: 100%;
            max-width: 550px;
            height: auto;
            filter: drop-shadow(0px 10px 40px rgba(220, 202, 135, 0.35));
            animation: floatingNaan 6s ease-in-out infinite;
        }

        @keyframes floatingNaan {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(3deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }

        @media screen and (max-width: 650px) {
            .contact-highlight {
                border-left: none;
                padding-left: 0;
                text-align: center;
            }
            .findus-buttons {
                justify-content: center;
            }
            .address-text {
                text-align: center;
            }
        }
      `}</style>

      {/* Info Section */}
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        
        <div className="findus-content-container">
          <p className="address-text">
            1st Floor, 580/C, 9th C Rd, <br />
            Sardarpura, Jodhpur, <br />
            Rajasthan 342001
          </p>
          
          <div className="contact-highlight">
            <p className="contact-label">Reservations</p>
            <p className="phone-number">+91 94621 37273</p>
          </div>
        </div>

        <div className="findus-buttons">
          <button 
            type="button" 
            className="custom__button" 
            onClick={openMaps}
          >
            Visit Us
          </button>

          <button 
            type="button" 
            className="custom__button btn-whatsapp" 
            onClick={openWhatsApp}
          >
            Book Table (WhatsApp)
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="app__wrapper_img">
        <img 
            src={naanImg} 
            alt="Signature Naan" 
            className="findus-naan-img" 
        />
      </div>
    </div>
  );
};

export default FindUs;