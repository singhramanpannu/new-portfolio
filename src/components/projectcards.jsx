import React from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "Portfolio Website", description: "A sleek, modern portfolio showcasing my work." },
  { name: "E-Commerce UI", description: "A clean and intuitive UI for an e-commerce store." },
  { name: "Dashboard UI", description: "A powerful and user-friendly dashboard interface." },
  { name: "AI Chatbot", description: "An AI-powered chatbot with smooth UX and great features." },
];

export default function ProjectsGrid() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gray-100 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white text-gray-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-yellow-500 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">{project.description}</p>
            <a
              href="#"
              className="inline-block mt-4 text-yellow-500 text-sm font-semibold transition-colors group-hover:underline"
            >
              Know More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
