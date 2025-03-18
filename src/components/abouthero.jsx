import React from "react";
import { motion, px } from "framer-motion";
import "@fontsource/playfair-display"; // Import Playfair Display font
import profileImage from '../assets/images/profile.png';

export default function AboutHero() {
  return (
    <section className="bg-white border-6 min-h-screen flex flex-col md:flex-row items-center justify-between px-10 lg:px-32 py-20">
      {/* Left Side - Text Content */}
      <motion.div
        className="md:w-1/2 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="text-7xl md:text-8xl font-extrabold text-black mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }} // Custom font applied
        >
          about.
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          Hi, I’m <span className="font-semibold text-black">Raman</span>, a passionate{" "}
          <span className="font-semibold text-black">UI/UX Designer</span> and{" "}
          <span className="font-semibold text-black">Frontend Developer</span> from India.
        </p>
        <p className="text-lg text-gray-600 italic">
          When I’m not designing or coding, you’ll probably find me{" "}
          <span className="font-semibold text-black">sipping chai ☕</span> and daydreaming about
          new ideas.  
        </p>
      </motion.div>

      {/* Right Side - Image Placeholder */}
      <motion.div
        className="w-[70%] h-[500px] flex items-center justify-center "
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <span className="text-gray-500 text-xl">
        <img src={profileImage}
         width='500em'
        ></img>
        </span>
      </motion.div>
    </section>
  );
}
