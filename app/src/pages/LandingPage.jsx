import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import AboutSection from "./components/AboutSection";
import ClientAbout from "./components/ClientAbout";
import NewArticle from "./components/NewArticle";
import FooterSection from "./components/FooterSection";

const LandingPage = () => {
  return (
    <div className="bg-Bleck1 m-auto">
      <Header />
      <HeroSection />
      <OurServices />

      <AboutSection />
      <ClientAbout />
      <NewArticle />

      <FooterSection />
    </div>
  );
};

export default LandingPage;
