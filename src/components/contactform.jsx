import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add functionality to send the form data
    console.log(formData);
  };

  return (
    <div className="w-full flex items-center justify-center px-6 py-16 bg-[#f4f4f4]">
      <form onSubmit={handleSubmit} className="w-full max-w-5xl flex flex-wrap gap-8 ">
      
        {/* Left side: Name and Email */}
        <div className="w-full md:w-1/2 flex flex-col gap-6  justify-center">   
        {/* Heading */}
    <h2 className="text-4xl font-semibold text-gray-900  font-poppins text-center md:text-left">
    Get in Touch
  </h2>

          {/* Name Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 text-lg rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition duration-300 ease-in-out"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-lg rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Right side: Message and Submit Button */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Message Field */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="6"
              className="w-full px-4 py-3 text-lg rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition duration-300 ease-in-out"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
