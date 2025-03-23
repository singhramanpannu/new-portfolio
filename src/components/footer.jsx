import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import '../css/resp.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-10 px-6 lg:px-32 relative">
      
      {/* Scroll-to-Top Button with Black Border */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-white text-black p-4 rounded-full shadow-xl transition hover:shadow-2xl z-50 
        border-2 border-black"
      >
        <ChevronUpIcon className="h-8 w-8" />
      </motion.button>

      {/* Footer Content */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Left Side: Copyright */}
        <div className="text-center lg:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex space-x-6">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a href="mailto:youremail@example.com" className="text-white hover:text-yellow-500 transition">
            <i className="fas fa-envelope text-2xl"></i>
          </a>
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex space-x-6 text-sm">
          <a href="#home" className="hover:text-yellow-500 transition">Home</a>
          <a href="#about" className="hover:text-yellow-500 transition">About</a>
          <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </nav>
      </div>

      {/* Gradient Bottom Border */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300"></div>
    </footer>
  );
};

export default Footer;
