import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Message sent successfully!');
  };

  return (
    <section className="relative bg-gray-100 py-20 px-4 md:px-16">

      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f4f4f4" d="M0,288L1440,128L1440,320L0,320Z"></path>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 bg-white shadow-2xl rounded-3xl p-10 max-w-4xl mx-auto"
      >

        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center mb-10 text-gray-900 leading-tight">
          Let’s <span className="text-yellow-500">Connect</span>
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Have a project in mind? Fill out the form and I'll get back to you as soon as possible!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition duration-300"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-yellow-500"
            >
              Full Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition duration-300"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-yellow-500"
            >
              Email Address
            </label>
          </div>

          {/* Message Field */}
          <div className="md:col-span-2 relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="peer w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition duration-300 resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-yellow-500"
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-10 py-4 rounded-lg shadow-lg transition-all hover:bg-yellow-500 hover:text-black font-bold"
            >
              Send Message
            </motion.button>
          </div>
        </form>

      </motion.div>
    </section>
  );
};

export default ContactForm;
