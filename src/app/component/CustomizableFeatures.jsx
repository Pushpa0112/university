"use client"

import React from 'react';
import Image from 'next/image';

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
    <section className="bg-white py-16 px-4  font-sans ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">
        
        {/* Left Side: Image */}
        <div className="">
          <img 
            src="/istockphoto-1323167372-612x612.jpg" 
            alt="Person using laptop" 
            className="rounded-xl shadow-lg w-[650px] object-cover h-[380px]"
          />
        </div>

        {/* Right Side: Content */}
        <div>
          <h2 className="text-[#005f63] text-[36px] font-semibold mb-4 ">
            Customizable Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`bg-gray-100 p-6 rounded-xl border border-gray-50 shadow-sm 
                ${index === 2 ? 'md:col-span-2' : ''}`}
              >
                <h3 className="text-black text-[19px] font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[15px]">
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