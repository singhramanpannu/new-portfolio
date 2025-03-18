import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Designer", value: 40, color: "#FACC15" }, // Yellow
  { name: "Coder", value: 60, color: "#1E3A8A" }, // Blue
];

export default function SkillsHero() {
  return (
    <section className="bg-white text-black border-t-2 flex flex-col md:flex-row items-center justify-center min-h-screen p-10 gap-16">
      {/* Left - Designer Section */}
      <div className="text-center md:text-right w-full md:w-1/3">
        <h2 className="text-4xl md:text-6xl font-bold">I am part Designer</h2>
        <ul className="mt-4 text-lg text-gray-600">
          <li>✨ UI/UX Enthusiast</li>
          <li>🖌️ Figma & Adobe XD</li>
          <li>📊 User Research & Prototyping</li>
        </ul>
      </div>

      {/* Center - Pie Chart */}
      <div className="w-full md:w-1/3 flex justify-center">
        <ResponsiveContainer width={350} height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={160}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Right - Coder Section */}
      <div className="text-center md:text-left w-full md:w-1/3">
        <h2 className="text-4xl md:text-6xl font-bold">I am part Coder</h2>
        <ul className="mt-4 text-lg text-gray-600">
          <li>💻 Frontend Dev</li>
          <li>🔍 React.js, Tailwind CSS</li>
          <li>🌐 Web Animations & Performance</li>
        </ul>
      </div>
    </section>
  );
}
