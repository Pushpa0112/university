import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Left Section: Logo and Tagline */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          {/* Replace with your actual logo path */}
          <div className="relative w-32 h-10">
            <span className="text-xl font-bold text-gray-800">EduKyu</span>
          </div>
        </Link>
        
        {/* Vertical Divider & Hashtag */}
        <div className="hidden md:flex items-center border-l border-gray-300 pl-4 h-8">
          <p className="text-sm font-semibold">
            <span className="text-gray-900">#Kyuki</span>
            <span className="text-[#007a83]">badhnajarurihai</span>
          </p>
        </div>
      </div>

      {/* Right Section: Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-8">
        <Link href="/" className="text-gray-600 hover:text-black font-medium transition">Home</Link>
        <Link href="/about" className="text-gray-600 hover:text-black font-medium transition">About Us</Link>
        <Link href="/compare" className="text-gray-600 hover:text-black font-medium transition">Compare Colleges</Link>
        <Link href="/blogs" className="text-gray-600 hover:text-black font-medium transition">Blogs</Link>
        <Link href="/contact" className="text-gray-600 hover:text-black font-medium transition">Contact Us</Link>
        
        {/* Apply Now Button */}
        <Link 
          href="/apply" 
          className="bg-[#024B53] text-white px-6 py-2 rounded-md font-semibold transition-all shadow-md"
        >
          Apply Now
        </Link>
      </nav>

      {/* Mobile Toggle (Visible only on small screens) */}
      <div className="lg:hidden">
        <button className="p-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;