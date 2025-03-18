import React, { useState } from 'react';
import '../css/resp.css';

export default function HoverComponent() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-white h-[100vh] w-[100%] flex border overflow-hidden shadow-2xl papa">
      {/* Designer Div */}
      <div
        className={`transition-all duration-1000 ease-in-out ${hovered === 'one' ? 'w-[80%]' : 'w-[50%]'} flex flex-col items-center justify-center cursor-pointer bg-yellow-400 text-white text-4xl font-extrabold tracking-wider shadow-xl`}
        onMouseEnter={() => setHovered('one')}
        onMouseLeave={() => setHovered(null)}
      >
        <span
          className={`transition-transform duration-700 ease-out ${hovered === 'one' ? 'scale-110 translate-y-[-15px]' : 'scale-100 translate-y-0'}`}
        >
          DESIGNER
        </span>
        <p
          className={`text-lg font-light opacity-0 transition-opacity duration-1000 ease-in-out mt-2 ${hovered === 'one' ? 'opacity-100' : ''}`}
        >
          "Design is intelligence made visible."
        </p>
        <p
          className={`text-sm font-medium opacity-0 transition-opacity duration-1000 ease-in-out mt-1 ${hovered === 'one' ? 'opacity-100' : ''}`}
        >
          "Creativity is nothing but a mind set free."
        </p>
      </div>

      {/* Coder Div */}
      <div
        className={`transition-all duration-1000 ease-in-out ${hovered === 'two' ? 'w-[80%]' : 'w-[50%]'} flex flex-col items-center justify-center cursor-pointer bg-white text-black text-4xl font-extrabold tracking-wider shadow-xl`}
        onMouseEnter={() => setHovered('two')}
        onMouseLeave={() => setHovered(null)}
      >
        <span
          className={` transition-transform duration-700 ease-out ${hovered === 'two' ? 'scale-110 translate-y-[-15px]' : 'scale-100 translate-y-0'}`}
        >
          CODER
        </span>
        <p
          className={` text-lg font-light opacity-0 transition-opacity duration-1500 ease-in-out mt-2 ${hovered === 'two' ? 'opacity-100' : ''}`}
        >
          "Code is like humor. When you have to explain it, it’s bad."
        </p>
        
      </div>
    </div>
  );
}
