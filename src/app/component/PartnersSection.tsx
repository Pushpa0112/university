"use client";

import React from 'react';
import Image from 'next/image';

interface Logo {
  id: number;
  name: string;
  src: string;
}

const logos: Logo[] = [
  { id: 1, name: 'London Metropolitan University', src: '/London_Metropolitan_University_Logo.jpg' },
  { id: 2, name: 'VGU Jaipur', src: '/images (1).png' },
  { id: 3, name: 'MATS University', src: '/MATS-logo-440x168-1.png' },
  { id: 4, name: 'Victoria University', src: '/images.png' },
  { id: 5, name: 'Noida International University', src: '/niulogo.jpg' },
];

const PartnersSection = () => {
  // Triple array for seamless loop
  const scrollLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-[#006666] text-3xl md:text-4xl font-bold tracking-tight">
          Our Clients – Strategic Partnerships
        </h2>
        <p className="text-black text-xl mt-2 font-medium">
          National /International
        </p>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div className="relative flex w-full overflow-hidden">
        
        {/* Is div mein humne inline animation logic dal diya hai */}
        <div 
          className="flex whitespace-nowrap items-center py-4"
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'scroll-infinite 10s linear infinite'
          }}
        >
          {/* Keyframes inject karne ke liye chota sa hack */}
          <style>{`
            @keyframes scroll-infinite {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.33%); }
            }
          `}</style>

          {scrollLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="flex-shrink-0 mx-6 w-[280px] h-[150px] flex items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
              <div className="relative w-4/5 h-3/5">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="280px"
                />
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PartnersSection;