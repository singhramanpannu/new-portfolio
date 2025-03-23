import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-white text-black overflow-hidden">
      
      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-7xl font-extrabold mb-6 text-center"
      >
        Let's <span className="text-yellow-400">Connect</span>
      </motion.h1>

      {/* Subheading with Slide-In Animation */}
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-xl md:text-2xl text-gray-700 mb-8 text-center"
      >
        Have a project in mind? I’d love to collaborate with you.
      </motion.p>

      {/* Social Media Icons with Animation */}
      <div className="flex gap-8 mt-4">
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-4xl text-pink-500 hover:text-yellow-400 transition"
        >
          <FaInstagram />
        </motion.a>

        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-4xl text-blue-600 hover:text-yellow-400 transition"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-4xl text-blue-400 hover:text-yellow-400 transition"
        >
          <FaTwitter />
        </motion.a>
      </div>

    </section>
  );
};

export default ContactHero;
