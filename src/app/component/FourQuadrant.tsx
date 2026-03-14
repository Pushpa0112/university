import Image from 'next/image';

const quadrants = [
  { id: 1, title: 'Quadrant-I: e-Tutorial', desc: 'Interactive tutorials for self-paced learning.' },
  { id: 2, title: 'Quadrant-II: e-Content', desc: 'Comprehensive digital resources for in-depth study.' },
  { id: 3, title: 'Quadrant-III: Discussion Forum', desc: 'Collaborative platform for peer-to-peer interaction.' },
  { id: 4, title: 'Quadrant-IV: Assessment', desc: 'Robust assessment tools for measuring learning outcomes.' },
];

export default function FourQuadrant() {
  return (
    <section className="bg-white w-full py-20 font-sans">   
      <div className="max-w-7xl px-8 py-12 md:px-16 flex flex-col md:flex-row items-stretch gap-16">
        
        {/* Left Side: Taller Image */}
        <div className="w-full md:w-1/2">
          <div className="relative h-[500px] md:h-[650px] w-full rounded-3xl overflow-hidden shadow-sm">
            <Image 
              src="/photo-1522661067900-ab829854a57f.jpg" 
              alt="E-Learning Approach"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center ">
          <h2 className="text-4xl font-bold text-[#025e68] leading-tight mb-12">
            Support for the Four-Quadrant Approach
          </h2> 

          <div className="space-y-4">
            {quadrants.map((item) => (
              <div 
                key={item.id} 
                className="flex items-center p-5 rounded-xl transition-all duration-300 cursor-pointer group hover:bg-[#f0f2f5]"
              >
                {/* Number Box with Hover State (Original colors kept) */}
                <div className="flex-shrink-0 w-16 h-16 bg-[#f0f7f9] text-[#003d4d] 
                                flex items-center justify-center rounded-[10px] 
                                font-bold text-[24px] mr-6 
                                transition-all duration-300 ease-in-out
                                group-hover:bg-[#003d4d] group-hover:text-[#FFDB58] group-hover:shadow-lg">
                  {item.id}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-bold text-[#024B53] transition-colors duration-300 group-hover:text-[#003d4d]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}