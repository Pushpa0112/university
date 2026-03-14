import Image from 'next/image';
import { 
  MonitorPlay, 
  FileText, 
  MessageSquare, 
  ClipboardCheck 
} from 'lucide-react'; // Using Lucide for clean icons

const features = [
  { 
    id: 1, 
    title: 'Quadrant-I: e-Tutorial', 
    desc: 'Interactive tutorials for self-paced learning.',
    icon: <MonitorPlay className="w-8 h-8" />
  },
  { 
    id: 2, 
    title: 'Quadrant-II: e-Content', 
    desc: 'Comprehensive digital resources for in-depth study.',
    icon: <FileText className="w-8 h-8" />
  },
  { 
    id: 3, 
    title: 'Quadrant-III: Discussion Forum', 
    desc: 'Collaborative platform for peer-to-peer interaction.',
    icon: <MessageSquare className="w-8 h-8" />
  },
  { 
    id: 4, 
    title: 'Quadrant-IV: Assessment', 
    desc: 'Robust assessment tools for measuring learning outcomes.',
    icon: <ClipboardCheck className="w-8 h-8" />
  },
];

export default function FeatureSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center py-20 bg-white overflow-hidden">
      
      {/* Background Image Layer (Subtle Overlay) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/background-pattern.jpg" // Your background image path
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Large Visual with Shadow */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/photo-1522661067900-ab829854a57f.jpg" 
                alt="Learning Session"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content & Icon Grid */}
          <div className="w-full lg:w-1/2">
            {/* Title Section with Shadow effect you requested */}
            <div className="mb-12 inline-block">
              <h2 className="text-4xl  font-bold text-[#025E68] leading-tight drop-shadow-sm">
                Support for the <br /> 
                <span className="text-[#005a6e]">Four-Quadrant Approach</span>
              </h2>
              <div className="h-1.5 w-24 bg-yellow-400 mt-4 rounded-full"></div>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((item) => (
                <div 
                  key={item.id} 
                  className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Icon Box */}
                  <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-[#f0f7f9] text-[#003d4d] group-hover:bg-[#003d4d] group-hover:text-yellow-400 transition-colors duration-300">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#003d4d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}