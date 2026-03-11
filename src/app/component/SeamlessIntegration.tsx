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
    <section className="bg-white font-sans overflow-hidden ">
      <div className="max-w-[1440px]  flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 py-16 px-6 md:px-12 lg:pl-24 lg:pr-12 flex flex-col justify-center">
          <h2 className="text-[#005f63] text-[36px] font-bold mb-12 tracking-tight">
            Seamless Integration
          </h2>

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="group flex items-center gap-8 p-4 rounded-xl transition-all duration-300 hover:translate-x-4 cursor-pointer"
              >
                {/* Number Box - Image ke mutabik Dark Teal background */}
                <div className="flex-shrink-0 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center transition-transform group-hover:bg-[#005f63] group-hover:scale-110">
                  <span className="text-gray-600 text-[42px] font-bold group-hover:text-yellow-400">
                    {step.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="transition-colors">
                  <h3 className="text-black text-[22px] font-bold leading-tight group-hover:text-[#005f63]">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[18px] mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image - Fixed Height as per Screenshot */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center lg:pl-30 relative">
          <div className="w-full h-full lg:w-[88%] min-h-[200px] lg:min-h-0">
            <img 
              src="/photo-1522071820081-009f0129c71c.jpg" 
              alt="Team working on integration" 
              className="w-full h-full object-cover rounded-xl  shadow-sm"
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegration;