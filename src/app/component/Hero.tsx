import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    // Increased min-height for a bigger look
    <section className="flex flex-col md:flex-row items-stretch w-full min-h-[700px] bg-white">
      
      {/* Left Content Side */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 bg-[#f8fafb]">
        <h1 className="text-[#005f6b] text-4xl md:text-5xl lg:text-6xl font-serif font-bold  mb-6">
          Revolutionizing <br /> University <br /> Solutions
        </h1>
        
        <p className="text-[#005f6b] text-[16px] font-medium  max-w-xl mb-8">
          We Deliver End-to-End Solutions for Universities. Our innovative software 
          enhances learning, streamlines operations, and empowers educators to 
          shape brighter futures. From lead and learning management to alumni 
          engagement and proctored examinations — we simplify every step of the 
          academic journey.
        </p>

        <div>
          <Link 
            href="/about" 
            className="inline-block bg-[#005f6b] text-white px-10 py-3 rounded-md font-semibold text-md hover:bg-[#004a54] transition-colors shadow-md"
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
            // object-center ensures the image is centered horizontally and vertically
            className="object-cover object-center" 
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;