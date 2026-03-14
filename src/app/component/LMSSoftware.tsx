"use client"

import React from 'react';
import Image from 'next/image';
import { Landmark, Users2, UserCog } from 'lucide-react';

const LMSSoftware = () => {
  const features = [
    {
      title: "For Students",
      description: "Access course materials. Submit assignments. Engage with peers.",
      
      icon: <Landmark className="w-6 h-6 transition-colors duration-300" />,
    },
    {
      title: "For Teachers",
      description: "Create and manage courses. Grade assignments. Track student progress.",
      icon: <Users2 className="w-6 h-6 transition-colors duration-300" />,
    },
    {
      title: "For Admins",
      description: "Oversee the entire learning environment. Generate reports. Manage user accounts.",
      icon: <UserCog className="w-6 h-6 transition-colors duration-300" />,
    },
  ];

  return (
    <section className="w-full bg-[#f8fbfc] pb-16 md:pb-24 font-sans">
      {/* Top Banner Image Section */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-sm">
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
        
        {/* Heading Section */}
        <div className="text-center mt-20 mb-16 cursor-default">
          <h2 className="text-[#024B53] text-4xl  font-bold mb-4 relative inline-block">
            Learning Management Software
            <span className="block w-20 h-[3px] bg-[#005f6b] mx-auto mt-2 rounded-full "></span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-xl group cursor-pointer"
            >
              {/* Icon Container - Size decreased from w-24 to w-16 */}
              <div className="w-16 h-16 bg-[#e6f4f5] rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#005f6b]">
                <div className="text-[#005f6b] group-hover:text-[#FFDB58]">
                   {feature.icon}
                </div>
              </div>

              {/* Card Title */}
              <h3 className="text-[#1a1a1a] text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#005f6b]">
                {feature.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed">
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