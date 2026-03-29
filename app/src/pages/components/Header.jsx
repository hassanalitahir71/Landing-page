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
        <a href="#" className="hover:text-LigntGray1">
          HOME
        </a>
        <a href="#" className="hover:text-LigntGray1">
          SERVICES
        </a>
        <a href="#" className="hover:text-LigntGray1">
          FEATURES
        </a>
        <a href="#" className="hover:text-LigntGray1">
          PORTFOLIO
        </a>
        <a href="#" className="hover:text-LigntGray1">
          BLOG
        </a>
        <a href="#" className="hover:text-LigntGray1">
          CONTACT
        </a>
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
          <a href="#" className="hover:text-LigntGray1">
            HOME
          </a>
          <a href="#" className="hover:text-LigntGray1">
            SERVICES
          </a>
          <a href="#" className="hover:text-LigntGray1">
            FEATURES
          </a>
          <a href="#" className="hover:text-LigntGray1">
            PORTFOLIO
          </a>
          <a href="#" className="hover:text-LigntGray1">
            BLOG
          </a>
          <a href="#" className="hover:text-LigntGray1">
            CONTACT
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
