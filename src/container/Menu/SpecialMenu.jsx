import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';
import menuPdf from './Kake Menu.pdf'; // This links your uploaded PDF

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Authentic Flavors from Sardarpura" />
      <h1 className="headtext__cormorant">Signature Specialties</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_lassi flex__center">
        <p className="app__specialMenu-menu_heading">Lassi & Shakes</p>
        <div className="app__specialMenu_menu_items">
          {data.lassis.map((lassi, index) => (
            <MenuItem key={lassi.title + index} title={lassi.title} price={lassi.price} tags={lassi.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_mains flex__center">
        <p className="app__specialMenu-menu_heading">Legendary Mains</p>
        <div className="app__specialMenu_menu_items">
          {data.mainCourse.map((dish, index) => (
            <MenuItem key={dish.title + index} title={dish.title} price={dish.price} tags={dish.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 25 }}>
      <a href={menuPdf} target="_blank" rel="noreferrer">
        <button type="button" className="custom__button">View Full Menu (PDF)</button>
      </a>
    </div>
  </div>
);

export default SpecialMenu;