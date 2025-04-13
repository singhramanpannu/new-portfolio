import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 py-20">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-start justify-center text-left">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
        >
          Crafting <span className="text-yellow-400">Elegant</span> <br className="hidden sm:block" />
          Digital Experiences
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 max-w-2xl leading-relaxed"
        >
          Bridging the gap between <strong>design and code</strong> with creativity,
          simplicity, and performance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 sm:px-8 py-3 text-sm sm:text-base rounded-md font-semibold shadow-md hover:bg-gray-900 transition"
          >
            Explore Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-900 text-gray-900 px-6 sm:px-8 py-3 text-sm sm:text-base rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
