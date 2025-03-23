import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './projectcard';

const projects = [
  {
    name: "E-Commerce Platform",
    description: "A full-fledged e-commerce store with React and Tailwind.",
    tech: ["React", "Tailwind", "Firebase"],
    demo: "https://ecommerce-demo.com",
    github: "https://github.com/ecommerce",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio built with AEM and Tailwind.",
    tech: ["AEM", "Tailwind", "JavaScript"],
    demo: "https://portfolio-demo.com",
    github: "https://github.com/portfolio",
  },
  {
    name: "Admin Dashboard",
    description: "Interactive admin dashboard with charts and tables.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    demo: "https://admin-demo.com",
    github: "https://github.com/admin-dashboard",
  },
  {
    name: "Blog CMS",
    description: "Content management system for blogging with AEM.",
    tech: ["AEM", "React", "SCSS"],
    demo: "https://blog-demo.com",
    github: "https://github.com/blog-cms",
  }
];

const ProjectSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.tech.includes(filter));

  const categories = ["All", "React", "Tailwind", "AEM", "Next.js"];

  return (
    <div className="bg-white py-16 px-6 lg:px-32 transition-all duration-300">
      <h2 className="text-5xl font-bold text-gray-900 text-center mb-6">My Recent Works</h2>
      <hr className="w-40 border-t-4 border-yellow-500 mb-8 mx-auto" />

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === cat
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-yellow-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectSection;
