import React from 'react';

export default function BookRecommendation() {
  return (
    <div className="w-full bg-gray-50 py-16 px-6 lg:px-32 flex flex-col md:flex-row items-center gap-12">
      {/* Left: Book Image (Slightly Bigger) */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src="https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg"
          alt="Atomic Habits"
          className="w-[60%] md:w-[60%] h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right: Personal Review */}
      <div className="w-full md:w-2/3 flex flex-col justify-center text-left">
        <h2 className="text-4xl font-bold text-gray-900">Book That I Read</h2>
        <p className="text-gray-700 mt-4 text-base leading-relaxed">
          Never thought tiny changes could make a big difference, but <strong>Atomic Habits</strong> by James Clear proved me wrong.  
          If you're trying to build good habits or break bad ones, this book is a must-read.
        </p>

        {/* Subtle Link */}
        <a
          href="https://www.amazon.com/dp/0735211299"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-yellow-600 font-medium text-sm hover:underline"
        >
          Wanna read?
        </a>
      </div>
    </div>
  );
}
