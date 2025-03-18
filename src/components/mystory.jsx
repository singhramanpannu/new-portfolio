import React from "react";
import { motion } from "framer-motion";
import MountainImage from "../assets/images/mountains.jpg"; // Import image

export default function MyStory() {
  return (
    <div className="w-full bg-white py-24 lg:px-32 flex flex-col md:flex-row items-center ">
      {/* Left: Story Content */}
      <motion.div
        className="w-[100%]  md:w-2/3 flex flex-col justify-center text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
          My Story
        </h2>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed">
          From a curious mind to a frontend designer, my journey has been all
          about pixels, creativity, and a cup of tea.  
          Every line of code I write tells a story.
        </p>

        {/* Know More Link */}
        <motion.a
          href="/about"
          className="mt-6 text-yellow-600 font-semibold text-base inline-block relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Know more →
        </motion.a>
      </motion.div>

      {/* Right: Animated Mountain Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      >
        <motion.img
          src={MountainImage}
          alt="Mountain Scenery"
          className="w-[80%] md:w-[80%] h-auto object-cover rounded-xl shadow-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
}
