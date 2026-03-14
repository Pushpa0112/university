import React from 'react';

const SalesSupport = () => {
  const cards = [
    {
      id: 1,
      title: "Increased Revenue",
    },
    {
      id: 2,
      title: "Improved Customer Relationships",
    },
    {
      id: 3,
      title: "Enhanced Sales Efficiency",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Clean & Professional */}
        <h2 className="text-[#025E68] text-4xl font-bold mb-16 tracking-tight ">
          Sales Support
        </h2>

        {/* Cards Grid - Adjusted for Image heights */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className={`
                group bg-white rounded-[12px] p-8 flex flex-col items-center justify-center text-center 
                transition-all duration-300 border border-gray-100
                shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                w-full md:w-1/3
                ${card.id === 2 
                  ? 'h-[220px] ' // Middle card taller as per image
                  : 'h-[180px] '          // Side cards shorter
                }
              `}
            >
              {/* Number: Bold and Large */}
              <span className="text-[#2d5a61] text-[40px] font-bold mb-4 leading-none">
                {card.id}
              </span>
              
              {/* Title: Matching the line height and font weight of the image */}
              <p className="text-[#2d5a61] text-[18px] font-bold leading-[1.2] max-w-[200px]">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="max-w-5xl text-left">
          <p className="text-[#5f6368] text-[17px] leading-relaxed font-normal opacity-90">
            Our sales support increases revenue, improves relationships, and enhances efficiency. 
            We provide B2C and B2B sales support to optimize performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalesSupport;