import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
  
    <section className="flex flex-col md:flex-row items-stretch font-Outfit  w-full min-h-[700px] bg-white">
      
      
      <div className="flex-1 flex flex-col justify-center px-8 py-12 md:px-16  bg-[#f8fafb]">
        <h1 className="text-[#024B53] text-4xl md:text-5xl lg:text-6xl font-Outfit font-bold mb-6">
          Revolutionizing <br/> University <br/> Solutions
        </h1>
        
        <p className="text-[#025E68] text-[18px] font-medium  max-w-xl mb-8">
          We Deliver End-to-End Solutions for Universities. Our innovative software 
          enhances learning, streamlines operations, and empowers educators to 
          shape brighter futures. From lead and learning management to alumni 
          engagement and proctored examinations — we simplify every step of the 
          academic journey.
        </p>

        <div>
          <Link 
            href="/about" 
            className="inline-block bg-[#024B53] text-white px-8 py-2 rounded-[12px]  border border-white font-20px text-16px"
          >
            Know more
          </Link>
        </div>
      </div>

      {/* Right Image Side - Updated for centering and top spacing */}
      <div className="flex-1 bg-[#f8fafb] flex items-center justify-center p-6 md:p-12">
        <div className="relative w-full min-w-[450px] h-full min-h-[450px] overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/photo-1427504494785-3a9ca7044f45.jpg"
            alt="Student walking through library bookshelves"
            fill
            
            
            className="object-cover object-center" 
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;