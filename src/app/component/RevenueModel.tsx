  "use client";

  import React from 'react';

  const RevenueModel = () => {
    return (
      <section className="bg-white py-12 px-6 md:px-12  font-sans">
        <div className="max-w-5xl px-8 py-12 md:px-16">
          {/* Main Heading - Size decreased for professional look */}
          <h2 className="text-[#2d5a61] text-[28px] md:text-[34px] font-bold mb-10 tracking-tight">
            Revenue Model & Partnership Proposal
          </h2>

          {/* Introduction Text - More compact */}
          <p className="text-[#334155] text-[16px] md:text-[17px] mb-8 leading-relaxed">
            <span className="font-bold text-[#2d5a61]">EduKyu</span> proposes a strategic revenue-sharing partnership designed for long-term sustainability and mutual growth:
          </p>

          {/* Partnership Contribution Cards */}
          <div className="space-y-8 mb-10">
            {/* University Contribution Card - Padding and min-height reduced */}
            <div className="bg-[#f8fafb] rounded-[10px] py-6 px-8 border-l-[5px] border-[#2d5a61] shadow-sm flex flex-col justify-center min-h-[100px] transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-[8px] h-[8px] rounded-full bg-[#2d5a61]"></div>
                <h3 className="text-[#1e293b] text-[18px] md:text-[19px] font-bold">University Contribution:</h3>
              </div>
              <p className="text-[#64748b] text-[15px] md:text-[16px] ml-5 font-medium leading-relaxed">
                Academic content, faculty resources, regulatory compliance, and degree awarding.
              </p>
            </div>

            {/* EduKyu Contribution Card */}
            <div className="bg-[#f8fafb] rounded-[10px] py-6 px-8 border-l-[5px] border-[#fcd34d] shadow-sm flex flex-col justify-center min-h-[100px] transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-[8px] h-[8px] rounded-full bg-[#fcd34d]"></div>
                <h3 className="text-[#1e293b] text-[18px] md:text-[19px] font-bold">EduKyu Contribution:</h3>
              </div>
              <p className="text-[#64748b] text-[15px] md:text-[16px] ml-5 font-medium leading-relaxed">
                Technology infrastructure, digital marketing, admissions CRM, student support operations, and learning management.
              </p>
            </div>
          </div>

          {/* Bottom Summary Box - More subtle size */}
          <div className="bg-[#f1f5f9]/40 border border-[#e2e8f0] rounded-[10px] py-6 px-8">
            <p className="text-[#475569] text-[15px] md:text-[16px] font-semibold leading-relaxed">
              Financial model ensures cost transparency, continuous growth monitoring, and reinvestment in innovation
            </p>
          </div>
        </div>
      </section>
    );
  };

  export default RevenueModel;