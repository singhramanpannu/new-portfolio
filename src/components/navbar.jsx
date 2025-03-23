import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/resp.css';

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Navigation links with home mapped to `/`
  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-black text-white flex items-center justify-between px-10 py-6 shadow-lg backdrop-blur-md bg-opacity-90 border-b border-gray-800 z-50 relative">

        {/* Logo (Static) */}
        <div className="text-4xl font-extrabold tracking-wider text-yellow-400 cursor-pointer">
          Hey guys!!
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-10 text-lg font-semibold">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`relative group transition duration-300 ${location.pathname === link.path ? 'text-yellow-400' : ''}`}
            >
              {link.name}
              <motion.span
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 bottom-0 h-[2px] bg-yellow-400"
              />
            </Link>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex gap-6 text-2xl">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: -5 }}
            transition={{ duration: 0.3 }}
            className="text-white hover:text-yellow-400 transition"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="text-white hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: -5 }}
            transition={{ duration: 0.3 }}
            className="text-white hover:text-yellow-400 transition"
          >
            <FaTwitter />
          </motion.a>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed top-0 right-0 w-64 h-full bg-black shadow-lg z-50"
          >
            {/* Sidebar Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold text-yellow-400">Explore</h2>
              <button className="text-3xl text-white" onClick={() => setSidebarOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col gap-6 p-6 text-lg font-semibold text-white">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`hover:text-yellow-400 transition ${location.pathname === link.path ? 'text-yellow-400' : ''}`}
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
