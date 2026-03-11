"use client"

import React from 'react';
import Image from 'next/image';
import { Landmark, Users2, UserCog } from 'lucide-react';

const LMSSoftware = () => {
  const features = [
    {
      title: "For Students",
      description: "Access course materials. Submit assignments. Engage with peers.",
      icon: <Landmark className="w-10 h-10 transition-colors duration-300 group-hover:text-[#ffcc00]" />,
    },
    {
      title: "For Teachers",
      description: "Create and manage courses. Grade assignments. Track student progress.",
      icon: <Users2 className="w-10 h-10 transition-colors duration-300 group-hover:text-[#ffcc00]" />,
    },
    {
      title: "For Admins",
      description: "Oversee the entire learning environment. Generate reports. Manage user accounts.",
      icon: <UserCog className="w-10 h-10 transition-colors duration-300 group-hover:text-[#ffcc00]" />,
    },
  ];

  return (
    <section className="w-full bg-[#f8fbfc] pb-16 md:pb-24">
      {/* Top Banner Image Section */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-10">
        <div className="relative w-full h-[250px] rounded-3xl overflow-hidden ">
          <Image
            src="/photo-1517048676732-d65bc937f952.jpg" 
            alt="LMS Overview"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading Section - Added hover:text-[#ffcc00] */}
        <div className="text-center mt-12 mb-16 group/header cursor-default">
          <h2 className="text-[#005f6b] text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Learning Management Software
            <span className="block w-24 h-[3.5px] bg-[#005f6b] mx-auto mt-2 rounded-full "></span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-[2rem] shadow-[0_15px_50px_rgba(0,0,0,0.03)] border-2 border-transparent flex flex-col items-center text-center transition-all duration-500 ease-out hover:-translate-y-4 hover:border-[#ffcc00] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] group cursor-pointer"
            >
              {/* Icon Container - Icon turns yellow on card hover */}
              <div className="w-24 h-24 bg-[#e6f4f5] rounded-full flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                <div className="text-[#005f6b]">
                   {feature.icon}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="text-[#1a1a1a] text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-[#ffcc00]">
                {feature.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-gray-500  text-[16px] ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LMSSoftware;