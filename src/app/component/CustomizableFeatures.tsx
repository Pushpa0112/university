"use client"

import React from 'react';

const CustomizableFeatures = () => {
  const features = [
    {
      title: "Tailored Solutions",
      desc: "Solutions tailored to your unique needs."
    },
    {
      title: "Modular Design",
      desc: "Mix and match features."
    },
    {
      title: "Scalable Options",
      desc: "Grow as you need."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      {/* Max-width ko thoda bada kiya hai image aur cards ko fit karne ke liye */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Image - Match the aspect ratio in screenshot */}
        <div className="w-full">
          <img 
            src="/istockphoto-1323167372-612x612.jpg" 
            alt="Person using laptop" 
            className="rounded-[20px] shadow-2xl w-full h-[400px] md:h-[450px] object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full">
          <h2 className="text-[#025E68] text-[4xl] md:text-[38px] font-bold mb-8 tracking-tight">
            Customizable Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((item, index) => (
              <div 
                key={index} 
                // Index 2 (Scalable Options) ko full width kiya hai
                className={`bg-[#f1f3f5] p-8 rounded-[15px] border border-white shadow-sm transition-all hover:shadow-md
                ${index === 2 ? 'md:col-span-2' : ''}`}
              >
                <h3 className="text-[#1a1a1a] text-[20px] font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#5f6368] text-[16px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizableFeatures;