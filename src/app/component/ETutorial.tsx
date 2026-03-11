import React from 'react';
import { Puzzle, UserRound, PlayCircle, Users, MessageCircle, Lightbulb } from 'lucide-react';

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
      icon: <Puzzle size={22} strokeWidth={2.5} />, 
    },
    {
      title: "Self-Paced Learning",
      description: "Learn at your own speed. Review material as needed.",
      icon: <UserRound size={22} strokeWidth={2.5} />, 
    },
    {
      title: "Multimedia Resources",
      description: "Access videos, audio, and interactive simulations.",
      icon: <PlayCircle size={22} strokeWidth={2.5} />, 
    }
  ];

  const quadrant3Features = [
    { id: 1, title: "Collaborative Platform", desc: "Engage in peer-to-peer discussions." },
    { id: 2, title: "Ask Questions", desc: "Get answers from instructors and classmates." },
    { id: 3, title: "Share Ideas", desc: "Contribute to a community of learners." },
  ];

  return (
    // Added pt-32 to push content down from the top
    <div className="w-full bg-gray-100 pt-32 pb-16 px-4 md:px-20 font-sans -mt-32">
      
      {/* --- SECTION 1: QUADRANT I --- */}
      <section className="max-w-7xl mx-auto mb-32">
        <h2 className="text-[#005f6b] text-[32px] font-bold mb-14 tracking-tight -mt-10">
          Quadrant-I: e-Tutorial
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {quadrant1Features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start text-start p-8 rounded-xl transition-all duration-500 hover:bg-[#005f6b] hover:shadow-2xl hover:-translate-y-2 cursor-pointer "
            >
              <div className="bg-[#005f6b] group-hover:bg-white/20 w-11 h-11 rounded-lg flex items-center justify-center text-white transition-all duration-300 mb-6 group-hover:text-yellow-400">
                {feature.icon}
              </div>
              
              <h3 className="text-[#005f6b] group-hover:text-white text-[20px] font-bold mb-3 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-white/90 text-[15px] leading-[1.6] max-w-[300px] transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: QUADRANT III --- */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          
          {/* Left Side: Image (Reduced width slightly to pull it toward the center) */}
          <div className="w-full lg:w-[45%]">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="/gettyimages-1430078498-612x612.jpg" 
                alt="Discussion Forum" 
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Right Side: List items (Brought closer to the image with gap-8) */}
          <div className="w-full lg:w-1/2 lg:pl-4">
            <h2 className="text-[#005f6b] text-[32px] font-bold mb-12 tracking-tight">
              Quadrant-III: Discussion Forum
            </h2>
            
            <div className="space-y-10">
              {quadrant3Features.map((item) => (
                <div key={item.id} className="flex items-start gap-6 group cursor-pointer">
                  
                  {/* Hexagon Badge */}
                  <div className="relative flex-shrink-0 w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <div 
                      className="absolute inset-0 bg-gray-300 group-hover:bg-[#005f6b] transition-all duration-500"
                      style={{ 
                        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" 
                      }}
                    ></div>
                    <span className="relative text-[#005f6b] group-hover:text-yellow-300 font-bold text-xl transition-colors duration-300">
                      {item.id}
                    </span>
                  </div>
                  
                  <div className="pt-1">
                    <h4 className="text-[#005f6b] font-bold text-[19px]  transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-[14px]  max-w-sm">
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