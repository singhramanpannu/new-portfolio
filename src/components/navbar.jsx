import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import '../css/resp.css';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white flex items-center justify-between px-10 py-5 shadow-xl backdrop-blur-md bg-opacity-90 border-b border-gray-800">
        
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide text-white-400 cursor-pointer transition-all duration-500 transform hover:scale-110 hover:rotate-2">
          Hey guys!!
        </div>

        {/* Hamburger Menu (Visible on small screens) */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-10 text-lg font-semibold">
          <Link to="/" className="relative group transition duration-300">
            home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="relative group transition duration-300">
            about
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/projects" className="relative group transition duration-300">
            projects
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="relative group transition duration-300">
            contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Social Media Icons (Only on large screens) */}
        <div className="hidden md:flex gap-6 text-3xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition transform hover:scale-125 hover:-rotate-6 duration-300">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition transform hover:scale-125 hover:rotate-6 duration-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition transform hover:scale-125 hover:-rotate-6 duration-300">
            <FaTwitter />
          </a>
        </div>
      </nav>

      {/* Overlay Effect (Blurs background when sidebar is open) */}
      {sidebarOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-40 transition-opacity duration-300" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar for Mobile Navigation (Now on Right Side) */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-black transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 shadow-lg z-50`}>
        
        {/* Close Button and Sidebar Title */}
        <div className="flex justify-between items-center p-5 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-yellow-400">Explore</h2> {/* Updated title */}
          <button className="text-3xl text-white" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex flex-col gap-5 p-5 text-lg font-semibold text-white">
          <Link to="/" className="hover:text-yellow-400 transition" onClick={() => setSidebarOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition" onClick={() => setSidebarOpen(false)}>About</Link>
          <Link to="/projects" className="hover:text-yellow-400 transition" onClick={() => setSidebarOpen(false)}>Projects</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition" onClick={() => setSidebarOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}
