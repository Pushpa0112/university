import React from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
}

const AssessmentComponent: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: "Online Quizzes",
      description: "Test your knowledge with quizzes.",
    },
    {
      id: 2,
      title: "Assignments",
      description: "Submit assignments electronically.",
    },
    {
      id: 3,
      title: "Exams",
      description: "Take proctored exams online.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full bg-white mx-auto min-h-[650px] overflow-hidden">
      
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-[#005a64] mb-14 tracking-tight">
          Quadrant-IV: Assessment
        </h2>

        <div className="relative">
          {/* Vertical Connector Line */}
          <div 
            className="absolute left-[24px] top-8 bottom-8 w-[1.5px] bg-gray-200 z-0" 
            aria-hidden="true"
          />

          <div className="space-y-14">
            {steps.map((step) => (
              <div key={step.id} className="relative flex items-start z-10 group cursor-pointer">
                
                {/* Number Box - Hover: Background fills teal, text turns white */}
                <div className="flex-shrink-0 w-12 h-12 bg-white border-[2px] border-gray-300 rounded-xl flex items-center justify-center shadow-sm 
                                transition-all duration-300 ease-in-out
                                group-hover:bg-[#005a64] group-hover:border-yellow-400 group-hover:scale-110">
                  <span className="text-xl font-bold text-gray-700 transition-colors duration-300 group-hover:text-white">
                    {step.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="ml-8 pt-1">
                  <div className="flex flex-col">
                    {/* Horizontal Line - Hover: Width increases and color changes */}
                    <div className="w-12 h-[2px] bg-gray-300 mb-4 transition-all duration-300 group-hover:w-20 group-hover:bg-yellow-400" />
                    
                    {/* Title - Hover: Text shifts right slightly */}
                    <h3 className="text-xl font-extrabold text-gray-900  mb-3 transition-transform duration-300
                     group-hover:translate-x-2 group-hover:text-[#005a64]">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-500 text-base font-medium ">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section - High Aspect & Thick White Border */}
      <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12 flex items-center justify-center">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-full max-h-[750px] group">
          
          {/* Framed Image */}
          <div className="w-full h-full  rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 ">
            <img 
              src="/photo-1434030216411-0b793f4b4173.jpg" 
              alt="Assessment focus"
              className="w-full h-full object-cover"
            />
          </div>

          
        </div>
      </div>

    </div>
  );
};

export default AssessmentComponent;