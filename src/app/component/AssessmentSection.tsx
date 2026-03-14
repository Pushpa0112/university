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
    <div className="flex flex-col lg:flex-row bg-white min-h-[650px] overflow-hidden">
      
      {/* Left Content Section - Adjusted for left alignment */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-8 md:p-16 lg:pl-32 lg:pr-10">
        
        {/* Heading - Left Aligned */}
        <h2 className="text-4xl font-bold text-[#025E68] mb-16 tracking-tight text-left">
          Quadrant-IV: Assessment
        </h2>

        <div className="relative max-w-md w-full">
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.id} className="relative flex items-center  group cursor-pointer p-4 rounded-2xl  group hover:bg-[#f0f2f5]" >
                
                {/* Number Box */}
                <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-[10px] flex items-center justify-center shadow-sm 
                                transition-all duration-300 ease-in-out
                                group-hover:bg-[#025E68] ">
                  <span className="text-2xl font-bold text-[#025E68] transition-colors duration-300 group-hover:text-[#FFDB58] group hover:bg-[#f0f2f5]">
                    {step.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="ml-8">
                  <div className="flex flex-col">
                     
                    
                    <h3 className="text-[22px] font-bold text-[#025E68] mb-1 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-20 flex items-center justify-center">
        <div className="relative w-full h-[450px] md:h-[500px] lg:h-[650px]">
          <div className="w-full h-full rounded-[10px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
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