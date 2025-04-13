import React from 'react';

export default function BookRecommendation() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
        
        {/* Text Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Book That <span className="text-yellow-500">I Read</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            Never thought tiny changes could make a big difference, but <strong>Atomic Habits</strong> by James Clear proved me wrong.
            If you're trying to build good habits or break bad ones, this book is a must-read.
          </p>
          <a
            href="https://www.amazon.com/dp/0735211299"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-yellow-600 font-semibold text-base hover:underline transition"
          >
            Wanna read?
          </a>
        </div>

        {/* Book Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg"
            alt="Atomic Habits"
            className="w-40 sm:w-56 md:w-60 rounded-xl shadow-xl object-cover transition duration-300 ease-in-out hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
