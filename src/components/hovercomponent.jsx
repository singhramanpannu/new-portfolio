import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 md:px-20">
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Crafting <span className="text-yellow-400">Elegant</span> <br /> Experiences
          </h1>

          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            Bridging the gap between **design and code** with creativity, simplicity, and functionality.
          </p>

          <div className="mt-8 flex gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-md text-lg font-semibold shadow-lg transition hover:bg-gray-900"
            >
              Explore Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-md text-lg font-semibold transition hover:bg-gray-100"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-full max-w-[400px] h-[400px] md:h-[450px] bg-gray-100 rounded-3xl shadow-lg overflow-hidden relative">
            
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gray-50"
            />

            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-bold text-gray-900"
              >
                Clean & Sleek
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 mt-4"
              >
                Simplicity, elegance, and performance.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
