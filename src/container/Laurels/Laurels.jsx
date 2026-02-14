import React from 'react';
import { SubHeading } from '../../components';
import './Laurels.css';
// Importing your specific image from the folder
import kakeImg from './kake .png'; 

// Data specific to Kake Di Hatti Heritage
const heritageData = [
  {
    title: 'Established 1942',
    subtitle: 'A timeless symbol of rich North Indian culinary heritage for over 80 years.',
  },
  {
    title: 'Traditional Tandoor',
    subtitle: 'Iconic oversized naans freshly baked to perfection in authentic clay ovens.',
  },
  {
    title: 'Hand-Ground Spices',
    subtitle: 'Slow-cooked curries crafted with secret family recipes and premium spices.',
  },
  {
    title: 'Bulk & Events',
    subtitle: 'Expert catering for corporate gatherings and grand family celebrations.',
  },
];

const HeritageCard = ({ title, subtitle }) => (
  <div className="app__laurels_awards-card">
    <div className="card_icon_circle">
        <div className="inner_dot" />
    </div>
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant gold-text">{title}</p>
      <p className="p__opensans card-subtext">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info slide-in-left">
      <SubHeading title="Savor The Legacy" />
      <h1 className="headtext__cormorant">The Kake Di Hatti Story</h1>

      <div className="legacy_description">
        <p className="p__opensans">
            Since 1942, we have been a symbol of authentic Punjabi delicacies. 
            Every dish reflects passion, authenticity, and a commitment to quality that goes beyond dining 
            — it’s a celebration of tradition and togetherness.
        </p>
      </div>

      <div className="app__laurels_awards">
        {heritageData.map((item, index) => (
          <HeritageCard key={index} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img scale-up-center">
      <div className="laurels_img_container">
        <img src={kakeImg} alt="Kake Di Hatti Heritage" className="main-heritage-img" />
        <div className="img_backdrop_glow" />
      </div>
    </div>
  </div>
);

export default Laurels;