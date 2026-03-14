"use client"

import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section suppressHydrationWarning={true} className="w-full py-16 md:py-24 font-outfit bg-white overflow-hidden">
      {/* Adjusted padding: lg:pl-20 pulls content to the left, lg:pr-32 gives space on the right */}
      <div suppressHydrationWarning={true} className="w-full px-6 md:px-16  lg:pr-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Content - Aligned further left */}
        <div suppressHydrationWarning={true} className="flex-[1.2] space-y-10">
          <div  suppressHydrationWarning={true} className="max-w-2xl mr-auto">
            <h2 suppressHydrationWarning={true} className="text-[#005f6b] text-4xl font-bold mb-6">About Us</h2>
            <p suppressHydrationWarning={true} className="text-gray-600 leading-relaxed text-[17px] lg:text-[18px] mb-10">
              <span suppressHydrationWarning={true} className="text-[#005f6b] font-bold">EduKyu Pvt Ltd</span> builds bridges 
              between <span suppressHydrationWarning={true} className="text-[#005f6b] font-semibold">Colleges and Students</span>. 
              Our platform specializes in higher education and career development solutions 
              for students and professionals. We bring together innovation, technology, 
              and partnerships with prestigious universities to accelerate career growth.
            </p>

            {/* Vision & Mission Cards */}
            <div suppressHydrationWarning={true} className="flex flex-col gap-6">
              {/* Vision Card */}
              <div suppressHydrationWarning={true}  className="w-full bg-white p-6 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-2 transition-all hover:shadow-md">
                <div suppressHydrationWarning={true} className="flex items-center gap-3">
                  <span suppressHydrationWarning={true} className="text-2xl">🎯</span>
                  <h3 suppressHydrationWarning={true} className="text-[#005f6b] text-xl font-bold">Vision</h3>
                </div>
                <p suppressHydrationWarning={true} className="text-gray-500 text-[15px]">
                  Empowering learners to make informed career choices.
                </p>
              </div>

              {/* Mission Card */}
              <div suppressHydrationWarning={true} className="w-full bg-white p-6 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-2 transition-all hover:shadow-md">
                <div suppressHydrationWarning={true} className="flex items-center gap-3">
                  <span suppressHydrationWarning={true} className="text-2xl">🚀</span>
                  <h3 suppressHydrationWarning={true} className="text-[#005f6b] text-xl font-bold">Mission</h3>
                </div>
                <p suppressHydrationWarning={true} className="text-gray-500 text-[15px]">
                  We aim to be a strong support pillar for individuals, elevating their learning 
                  curve and contributing to the nation's development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Illustration Container */}
        <div suppressHydrationWarning={true} className="flex-1 w-full flex items-center justify-center lg:justify-end">
          <div suppressHydrationWarning={true} className="relative w-full max-w-[800px] h-[400px] md:h-[500px] bg-[#e0f7f7] rounded-[30px] flex items-center justify-center  overflow-hidden shadow-sm">
            
            {/* Background Glows */}
            <div suppressHydrationWarning={true} className="absolute top-0 right-0 w-80 h-80 bg-[#b2ebeb] blur-[100px] -mr-32 -mt-32 opacity-60"></div>
            
            {/* Smooth Floating Animation */}
            <div suppressHydrationWarning={true} className="relative w-[300px] h-[300px] animate-float">
              <Image 
                src="/906175.png" 
                alt="EduKyu Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;