"use client";

import React from 'react';

const RevenueModel = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-8">
        {/* Main Heading */}
        <h2 className="text-[#005f63] text-[34px] font-bold mb-10 tracking-tight">
          Revenue Model & Partnership Proposal
        </h2>

        {/* Introduction Text */}
        <p className="text-gray-700 text-[18px] mb-12">
          <span className="font-bold text-[#005f63]">EduKyu</span> proposes a strategic revenue-sharing partnership designed for long-term sustainability and mutual growth:
        </p>

        {/* Partnership Contribution Cards */}
        <div className="space-y-6 mb-12">
          {/* University Contribution Card */}
          <div className="bg-[#f8fcfc] rounded-xl p-8 border-l-4 border-[#005f63] shadow-sm flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#005f63]"></div>
              <h3 className="text-[#1a1a1a] text-[20px] font-bold">University Contribution:</h3>
            </div>
            <p className="text-gray-600 text-[16px] ml-5 font-normal">
              Academic content, faculty resources, regulatory compliance, and degree awarding.
            </p>
          </div>

          {/* EduKyu Contribution Card */}
          <div className="bg-[#fdfbf4] rounded-xl p-8 border-l-4 border-[#fcc419] shadow-sm flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#fcc419]"></div>
              <h3 className="text-[#1a1a1a] text-[20px] font-bold">EduKyu Contribution:</h3>
            </div>
            <p className="text-gray-600 text-[16px] ml-5 font-normal">
              Technology infrastructure, digital marketing, admissions CRM, student support operations, and learning management.
            </p>
          </div>
        </div>

        {/* Bottom Summary Box */}
        <div className="bg-gray-100 border border-blue-100 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
            Financial model ensures cost transparency, continuous growth monitoring, and reinvestment in innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevenueModel;