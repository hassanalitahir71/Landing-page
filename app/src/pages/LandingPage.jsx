import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import OurServices from './components/OurServices';
import AboutSection from './components/AboutSection';

const LandingPage = () => {
  return (
    
      <div className="bg-Bleck1 m-auto">
        <Header />
        <HeroSection/>
        <OurServices/>
        
        <AboutSection/>
      </div>
    
  );
}

export default LandingPage
