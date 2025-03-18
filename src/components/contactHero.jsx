import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-between px-6 md:px-20">
      {/* Left Side - Text and Social Media Icons */}
      <div className="w-full md:w-1/2 text-black flex flex-col items-start justify-center ">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Let’s Get in Touch
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Have a project in mind, or simply want to say hello? I’d love to hear from you!
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-8 text-5xl mt-6">
          {/* Instagram Icon */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E4405F]" // Instagram original color
          >
            <FaInstagram />
          </a>
          
          {/* LinkedIn Icon */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#0077B5]" // LinkedIn original color
          >
            <FaLinkedin />
          </a>
          
          {/* Twitter Icon */}
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#1DA1F2]" // Twitter original color
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Right Side - Background Image */}
      <div
        className="w-1/2 h-full bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }} // Replace with your image URL
      ></div>
    </section>
  );
};

export default ContactHero;
