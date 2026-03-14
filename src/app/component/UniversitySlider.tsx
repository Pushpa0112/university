import React from 'react';
import Image from 'next/image';

interface University {
  src: string;
  alt: string;
}

const universities: University[] = [
  { src: '/Uttaranchal-University-Logo.webp', alt: 'Uttaranchal University' },
  { src: '/nmims-logo.webp', alt: 'NMIMS' },
  { src: '/niulogo.jpg', alt: 'Noida International University' },
  { src: '/Manipal-University.webp', alt: 'Manipal University Jaipur' },
  { src: '/Lovely-Professional-University-logo.webp', alt: 'LPU' },
  { src: '/DY-Patil-University-logo.webp', alt: 'DY Patil University' },
  { src: '/Amity-University-Logo.webp', alt: 'Amity University' },
  { src: '/sikkim-manipal-university.jpg', alt: 'Sikkim Manipal University' },
  { src: '/shoolini-logo.webp', alt: 'Shoolini University' },
];

const UniversitySlider: React.FC = () => {
  // Animation keyframes ko string mein define kiya gaya hai
  const scrollKeyframes = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <section className="py-16 bg-white overflow-hidden w-full">
      {/* CSS ko head mein inject karne ka safe tarika */}
      <style dangerouslySetInnerHTML={{ __html: scrollKeyframes }} />

      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2D6A6A]">
          Our Clients – Channel Partnerships
        </h2>
      </div>

      <div className="relative flex items-center overflow-hidden w-full">
        {/* Sides mein smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div 
          className="flex whitespace-nowrap py-4 hover:[animation-play-state:paused]"
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'scroll 30s linear infinite', // Speed yahan se control karein
          }}
        >
          {/* Logos ko 2 baar map kiya hai seamless loop ke liye */}
          {[...universities, ...universities, ...universities].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[240px] h-[130px] mx-6 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="240px"
                  priority={index < 5}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitySlider;