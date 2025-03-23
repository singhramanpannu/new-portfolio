import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-200"
    >
      {/* Image Placeholder */}
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400 text-lg">{project.image || "Project Image"}</span>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h3>
        <p className="text-gray-600">{project.description}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-6">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
            >
              View Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
