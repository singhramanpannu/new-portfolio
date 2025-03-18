import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/resp.css';

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    { name: 'Project 1' },
    { name: 'Project 2' },
    { name: 'Project 3' },
    { name: 'Project 4' },
    { name: 'Project 5' },
    { name: 'Project 6' },
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <div className="mx-auto bg-gray-50 py-16 px-6 lg:px-32 flex flex-col items-center justify-center transition-all duration-300">
      
      {/* Heading with Underline */}
      <h2 className="text-5xl font-bold text-gray-900 text-center mb-6 relative">
        My Recent Works
      </h2>
      <hr className="w-40 border-t-4 border-yellow-500 mb-8" />

      {/* Project Grid with Animation */}
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-white/80 backdrop-blur-lg shadow-lg p-6 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-600">
                A short description about the project, showcasing the cool features and tech used.
              </p>
              <button className="mt-4 text-yellow-500 hover:text-yellow-600 font-semibold transition">
                View Details →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Show More / Show Less Button with Animation */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3 }} 
        className="text-center mt-8"
      >
        <button
          onClick={() => setShowMore(!showMore)}
          className={`py-3 px-10 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out
            ${showMore 
              ? 'bg-gray-800 text-white hover:bg-gray-600'
              : 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-white hover:from-yellow-600 hover:to-yellow-400'
            }`}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </motion.div>
    </div>
  );
};

export default MyWork;
