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
    <section className="bg-gray-100 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-[#005f63] text-[34px] font-bold mb-10 -ml-6 tracking-tight">
          Sales Support
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-10">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className={`
                group bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center 
                transition-colors duration-300 border border-gray-50
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                hover:bg-[#f3cc4d]
                ${card.id === 2 ? 'h-[220px]' : 'h-[180px]'}
              `}
            >
              {/* Number: Exact match to image size/weight */}
              <span className="text-[#005f63] text-[50px] font-bold mb-4 transition-colors leading-none">
                {card.id}
              </span>
              
              {/* Title: Size and line height adjustment */}
              <p className="text-[#005f63]  text-[22px] font-semibold leading-[1.1] transition-colors  ">
                {card.title}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="max-w-4xl -ml-4">
          <p className="text-black text-[18px] leading-relaxed font-normal opacity-90">
            Our sales support increases revenue, improves relationships, and enhances efficiency. 
            We provide B2C and B2B sales support to optimize performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalesSupport;