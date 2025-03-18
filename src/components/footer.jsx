import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid'; // Updated import for Heroicons v2
import '../css/resp.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black h-[100px] py-3 relative flex flex-col justify-center items-center footer-rsp">
      
      {/* Center: Arrow Up */}
      <button
        onClick={scrollToTop}
        className="bg-black p-3 border absolute bottom-[50px] rounded-full text-white footer-btn"
      >
        <ChevronUpIcon className="h-16 w-16 footer-arrow" />
      </button>

      {/* Footer Content */}
      <div className="container p-6 mx-auto flex justify-between items-center text-white w-full">
        {/* Left Side: Copyright */}
        <div className="text-sm text-center w-full md:w-auto">
          &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
        </div>

        {/* Right Side: Navbar options (Hidden on small screens) */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#home" className="hover:text-gray-400 transition">Home</a>
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
