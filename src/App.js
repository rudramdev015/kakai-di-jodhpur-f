import React from 'react';
import './App.css';

// 1. Import Navbar from the components folder
import { Navbar } from './components'; 

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from './container';

const App = () => {
  return (
    <div>
      {/* 2. Add the Navbar component here */}
      <Navbar /> 
      
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;