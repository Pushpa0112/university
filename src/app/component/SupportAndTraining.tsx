"use client";

import React from 'react';

const SupportAndTraining = () => {
  const supportItems = [
    {
      id: 1,
      title: "Training Programs",
      desc: "Comprehensive training programs available."
    },
    {
      id: 2,
      title: "Ongoing Support",
      desc: "We provide dedicated support."
    },
    {
      id: 3,
      title: "Expert Assistance",
      desc: "Our experts are here to help."
    }
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left Side: Decreased Image size to match the reference screenshot */}
        <div className="w-full lg:w-[45%]">
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <img 
              src="/Calender-Photo.webp" 
              alt="Support and Training Session" 
              className="w-full h-auto max-h-[420px] object-cover" 
            />
          </div>
        </div>

        {/* Right Side: Content with Grid Layout matching the image */}
        <div className="w-full lg:w-[55%]">
          <h2 className="text-[#005f63] text-[32px] font-bold mb-10 tracking-tight leading-tight">
            Dedicated Support and Training
          </h2>

          {/* Grid: Item 1 & 2 in one row, Item 3 below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {supportItems.map((item) => (
              <div 
                key={item.id} 
                className={`group flex items-start gap-5 p-4 rounded-2xl transition-all duration-300 cursor-pointer  border border-transparent hover:bg-[#005f63] hover:shadow-xl ${
                  item.id === 3 ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Number Box - Default: White | Hover: Yellow */}
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 group-hover:bg-[#fcc419] border border-gray-50">
                  <span className="text-gray-700 text-[24px] font-bold group-hover:text-[#005f63]">
                    {item.id}
                  </span>
                </div>

                {/* Text Content - Default: Dark | Hover: White */}
                <div className="flex flex-col">
                  <h3 className="text-[#1a1a1a] text-[19px] font-bold leading-tight transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] mt-2 leading-relaxed transition-colors duration-300 group-hover:text-gray-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SupportAndTraining;