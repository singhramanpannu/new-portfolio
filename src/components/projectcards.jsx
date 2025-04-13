import React from "react";
import { motion } from "framer-motion";


const Projects = [
  { name: "Portfolio Website", description: "A sleek, modern portfolio showcasing my work." },
  { name: "E-Commerce UI", description: "A clean and intuitive UI for an e-commerce store." },
  { name: "Dashboard UI", description: "A powerful and user-friendly dashboard interface." },
  { name: "AI Chatbot", description: "An AI-powered chatbot with smooth UX and great features." },
];

export default function ProjectsGrid() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-16">
          <span className="text-yellow-500">Stuff</span> I've Built
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 sm:p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-yellow-500 transition">
                {project.name}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-yellow-500 text-sm font-semibold hover:underline transition"
              >
                Know More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}