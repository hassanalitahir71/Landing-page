import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-14 minw-full px-6 md:px-45 ">
      {/* Logo */}
      <img src="images/logo.png" alt="Logo" className="h-full" />

      {/* Desktop Nav */}
      <nav className="hidden md:flex text-White1 text-lg gap-8 mr-15 font-lexend font-normal">
        <a href="#">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">FEATURES</a>
        <a href="#">PORTFOLIO</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACT</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-White1 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="absolute top-14 left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#">HOME</a>
          <a href="#">SERVICES</a>
          <a href="#">FEATURES</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
