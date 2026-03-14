"use client";

import React from 'react';

const SeamlessIntegration = () => {
  const steps = [
    {
      id: 1,
      title: "Easy Setup",
      desc: "Quick and easy setup."
    },
    {
      id: 2,
      title: "Plug-and-Play",
      desc: "Seamless integration."
    },
    {
      id: 3,
      title: "No Downtime",
      desc: "Minimize disruptions."
    }
  ];

  return (
    <section className="bg-white font-sans overflow-hidden py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 gap-12">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-[#025E68] text-[36px] md:text-[44px] font-bold mb-12 tracking-tight">
            Seamless Integration
          </h2>

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="group flex items-center gap-8 p-4 rounded-xl transition-all duration-300 hover:-translate-x-2 cursor-pointer"
              >
                {/* Number Box - Default White, Hover Dark Teal */}
                <div className="flex-shrink-0 w-18 h-18 bg-gray-200 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center justify-center transition-all duration-300 group-hover:bg-[#2d5a61] group-hover:scale-105">
                  <span className="text-[#025E68] text-2xl font-bold transition-colors duration-300 group-hover:text-[#ffd666]">
                    {step.id}
                  </span>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-[#025E68] text-[24px] font-bold leading-tight transition-colors duration-300 group-hover:text-[#005f63]">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image - Sized to match content height */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[4/5] lg:aspect-[1/1.3]">
            <img 
              src="/photo-1522071820081-009f0129c71c.jpg" 
              alt="Team working on integration" 
              className="w-full h-full object-cover rounded-[10px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegration;