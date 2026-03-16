import React from 'react';
import Image from 'next/image';

interface PartnerLogo {
  id: number;
  src: string;
  alt: string;
}

const partnerLogos: PartnerLogo[] = [
  { id: 1, src: '/logo.webp', alt: 'Maharishi Markandeshwar University' },
  { id: 2, src: '/jecrc-2-1.png', alt: 'JECRC University' },
  { id: 3, src: '/noida-international-university-logo-png_seeklogo-505931.png', alt: 'Noida International University' },
  { id: 4, src: '/lbs_logo.png', alt: 'Lloyd Business School' },
];

const CampusPartnersSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-[32px] font-bold text-center text-[#00684a] mb-12">
          Our Clients – Campus Training Partnerships
        </h2>

        {/* - overflow-x-auto + whitespace-nowrap: Handles mobile scrolling
           - md:flex-wrap + md:justify-center: Handles desktop alignment
        */}
        <div className="flex overflow-x-auto pb-8 md:pb-0 no-scrollbar md:flex-wrap md:justify-center items-center gap-4 md:gap-6">
          {partnerLogos.map((logo) => (
            <div
              key={logo.id}
              className="group relative flex-shrink-0 flex items-center justify-center 
                         /* Exact Dimensions from your SS */
                         w-[240px] h-[120px] 
                         md:w-[280px] md:h-[140px] 
                         bg-white border border-gray-100 rounded-xl
                         transition-all duration-300 ease-in-out
                         hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                         hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-[85%] h-[70%] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain px-4"
                  sizes="(max-width: 768px) 240px, 280px"
                  priority={logo.id <= 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind inline-style for hiding scrollbars without extra plugins */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default CampusPartnersSection;