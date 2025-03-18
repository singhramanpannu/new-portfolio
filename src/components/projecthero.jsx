import React from "react";
import { motion } from "framer-motion";
import "@fontsource/playfair-display"; // Import Playfair Display font
import projectsImage from '../assets/images/mountains.jpg'; // Replace with actual image

export default function ProjectsHero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-10 lg:px-32 py-20 bg-gradient-to-b from-gray-100 to-white">
      {/* Left Side - Text Content */}
      <motion.div
        className="md:w-1/2 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="text-7xl md:text-8xl font-extrabold text-black mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          projects.
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          A collection of <span className="font-semibold text-black">UI/UX designs</span> and{" "}
          <span className="font-semibold text-black">frontend projects</span> that blend creativity
          with functionality.
        </p>
        <p className="text-lg text-gray-600 italic">
          Each project tells a story of innovation and problem-solving. Have a look!
        </p>
      </motion.div>

      {/* Right Side - Image Placeholder */}
      <motion.div
        className="w-[70%] h-[500px] flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <img
          src={projectsImage}
          alt="Projects Showcase"
          className="w-[500px] h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}
