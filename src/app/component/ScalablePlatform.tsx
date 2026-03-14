"use client";

import React from 'react';

const ScalablePlatform = () => {
  const platformFeatures = [
    {
      title: "Scalability",
      description: "Our platform scales as your needs grow."
    },
    {
      title: "Security",
      description: "Your data is safe and secure."
    }
  ];

  return (
    
    <section className="bg-[#f8f9fa]  py-16 px-4 md:px-8 font-sans">
      <div className="max-w-5xl px-6 md:px-16  ">
        
        {/* Section Heading - Exact text and teal color from image */}
        <h2 className="text-[#025E68] text-[34px] mb-20 font-bold tracking-tight">
          Scalable and Secure Platform
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
          {platformFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-start transition-shadow hover:shadow-md"
            >
              {/* Feature Title */}
              <h3 className="text-[#025E68] text-[24px] font-bold mb-2 tracking-tight">
                {feature.title}
              </h3>
              
              {/* Feature Description */}
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalablePlatform;