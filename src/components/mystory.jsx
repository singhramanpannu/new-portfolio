import React from "react";
import { motion } from "framer-motion";
import MountainImage from "../assets/images/mountains.jpg";

export default function MyStory() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left: Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            My <span className="text-yellow-500">Story</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6">
            From a curious mind to a frontend designer, my journey has been
            all about pixels, creativity, and a cup of tea. Every line of
            code I write tells a story.
          </p>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="inline-block mt-4 text-yellow-600 font-semibold text-base sm:text-lg hover:underline transition"
          >
            Know more →
          </motion.a>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        >
          <motion.img
            src={MountainImage}
            alt="Mountain Scenery"
            className="w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
