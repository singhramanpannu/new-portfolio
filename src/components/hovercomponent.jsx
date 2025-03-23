import React, { useState } from 'react';
import '../css/resp.css';

export default function HoverComponent() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-gray-900 h-[100vh] w-full flex border overflow-hidden shadow-2xl papa">
      {/* Designer Section */}
      <div
        className={`transition-all duration-1000 ease-in-out ${hovered === 'one' ? 'w-[70%]' : 'w-[50%]'} 
        flex flex-col items-center justify-center cursor-pointer 
        bg-gradient-to-r from-yellow-400 to-orange-500 
        text-white text-4xl font-extrabold tracking-wider 
        shadow-2xl hover:shadow-yellow-500/50 relative`}
        onMouseEnter={() => setHovered('one')}
        onMouseLeave={() => setHovered(null)}
      >
        <span
          className={`transition-transform duration-700 ease-out 
          ${hovered === 'one' ? 'scale-110 translate-y-[-15px]' : 'scale-100 translate-y-0'}`}
        >
          DESIGNER
        </span>

        <p
          className={`text-lg font-light opacity-0 transition-opacity duration-1000 ease-in-out mt-2 
          ${hovered === 'one' ? 'opacity-100' : ''}`}
        >
          "Design is intelligence made visible."
        </p>

        {/* Animated Skill List */}
        <div className={`mt-4 transition-opacity duration-1000 ${hovered === 'one' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 text-sm text-gray-800">
            <span className="bg-white px-3 py-1 rounded-full shadow-md hover:scale-110 transition">Figma</span>
            <span className="bg-white px-3 py-1 rounded-full shadow-md hover:scale-110 transition">UI/UX</span>
            <span className="bg-white px-3 py-1 rounded-full shadow-md hover:scale-110 transition">Wireframes</span>
          </div>
        </div>
      </div>

      {/* Coder Section */}
      <div
        className={`transition-all duration-1000 ease-in-out ${hovered === 'two' ? 'w-[70%]' : 'w-[50%]'} 
        flex flex-col items-center justify-center cursor-pointer 
        bg-gradient-to-r from-blue-400 to-indigo-500 
        text-white text-4xl font-extrabold tracking-wider 
        shadow-2xl hover:shadow-indigo-500/50 relative`}
        onMouseEnter={() => setHovered('two')}
        onMouseLeave={() => setHovered(null)}
      >
        <span
          className={`transition-transform duration-700 ease-out 
          ${hovered === 'two' ? 'scale-110 translate-y-[-15px]' : 'scale-100 translate-y-0'}`}
        >
          CODER
        </span>

        <p
          className={`text-lg font-light opacity-0 transition-opacity duration-1000 ease-in-out mt-2 
          ${hovered === 'two' ? 'opacity-100' : ''}`}
        >
          "Code is like humor. When you have to explain it, it’s bad."
        </p>

        {/* Animated Skill List */}
        <div className={`mt-4 transition-opacity duration-1000 ${hovered === 'two' ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4 text-sm text-gray-800">
            <span className="bg-white px-3 py-1 rounded-full shadow-md hover:scale-110 transition">React.js</span>
            <span className="bg-white px-3 py-1 rounded-full shadow-md hover:scale-110 transition">JavaScript</span>
            <span className="bg-white px-3 py-1 rounded-full shadow-md hover:scale-110 transition">AEM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
