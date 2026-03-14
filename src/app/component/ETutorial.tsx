import React from 'react';
import { Puzzle, UserRound, PlayCircle } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ETutorial: React.FC = () => {
  const quadrant1Features: Feature[] = [
    {
      title: "Interactive Modules",
      description: "Engaging modules for interactive learning. Animations and simulations are included.",
      icon: <Puzzle size={24} strokeWidth={2.5} />, 
    },
    {
      title: "Self-Paced Learning",
      description: "Learn at your own speed. Review material as needed.",
      icon: <UserRound size={24} strokeWidth={2.5} />, 
    },
    {
      title: "Multimedia Resources",
      description: "Access videos, audio, and interactive simulations.",
      icon: <PlayCircle size={24} strokeWidth={2.5} />, 
    }
  ];

  const quadrant3Features = [
    { id: 1, title: "Collaborative Platform", desc: "Engage in peer-to-peer discussions." },
    { id: 2, title: "Ask Questions", desc: "Get answers from instructors and classmates." },
    { id: 3, title: "Share Ideas", desc: "Contribute to a community of learners." },
  ];

  return (
    <div className="w-full bg-gray-50 pt-20 pb-25 px-4 md:px-20 font-sans ">
      
      {/* --- SECTION 1: QUADRANT I --- */}
      <section className="max-w-7xl mx-auto mb-40">
        <h2 className="text-[#025E68] text-4xl font-bold mb-14 tracking-tight">
          Quadrant-I: e-Tutorial
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quadrant1Features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start p-8 rounded-2xl transition-all duration-500 hover:bg-[#005f6b] hover:shadow-xl hover:-translate-y-2 cursor-pointer "
            >
              <div className="bg-[#005f6b] group-hover:bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 mb-6 group-hover:text-[#FFDB58]">
                {feature.icon}
              </div>
              
              <h3 className="text-[#005f6b] group-hover:text-white text-[20px] font-bold mb-3 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/90 text-[15px] leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: QUADRANT III --- */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[10px] overflow-hidden ">
              <img 
                src="/gettyimages-1430078498-612x612.jpg" 
                alt="Discussion Forum" 
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Right Side: List items */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#025E68] text-4xl font-bold mb-12 tracking-tight">
              Quadrant-III: Discussion Forum
            </h2>
            
            <div className="space-y-8">
              {quadrant3Features.map((item) => (
                <div key={item.id} className="flex items-center gap-6 group cursor-pointer p-4 rounded-2xl transition-all group hover:bg-[#f0f2f5] ">
                  
                  {/* Updated Number Box: Rounded Square */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-200 text-[#005f6b] 
                                flex items-center justify-center rounded-[10px] 
                                font-bold text-2xl transition-all duration-300 
                                group-hover:bg-[#005f6b] group-hover:text-[#FFDB58] group-hover:scale-105">
                    {item.id}
                  </div>
                  
                  <div className="flex flex-col">
                    <h4 className="text-[#025E68] font-bold text-[20px] mb-1 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ETutorial;