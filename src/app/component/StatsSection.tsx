"use client"

import React, { useState, useEffect } from 'react';

const CountUpNumber = ({ target }: { target: string }) => {

  const [count, setCount] = useState(0);
  // Extracting the number from strings like "197+" or "20k+"
  const numericTarget = parseInt(target.replace(/\D/g, ''));
  const suffix = target.replace(/[0-9]/g, '');

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 2 seconds animation
    const increment = numericTarget / (duration / 16); // 60fps approx

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericTarget]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { number: "197+", label: "Courses" },
    { number: "20k+", label: "Alumni" },
    { number: "12+", label: "Prominent Universities" },
    { number: "9+", label: "Years of Proficiency" },
  ];

  return (
    <section className="relative w-full py-16 bg-gradient-to-r from-[#003d3d] via-[#005252] to-[#006666]">
      {/* Hexagonal Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='86.6' viewBox='0 0 50 86.6'%3E%3Cpath fill='%23ffffff' d='M25 0L50 14.4v28.9L25 57.7L0 43.3V14.4L25 0zM25 86.6L0 72.2v-28.9l25 14.4l25-14.4v28.9L25 86.6z'/%3E%3C/svg%3E")`,
          backgroundSize: '60px'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 items-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center text-white">
              <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2 drop-shadow-md">
                <CountUpNumber target={item.number} />
              </span>
              <span className="text-[14px] md:text-[16px] font-bold tracking-wide uppercase opacity-90">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;