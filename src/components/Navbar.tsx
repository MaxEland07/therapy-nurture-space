
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-700/90 backdrop-blur-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-display text-white text-xl">
            <span className="font-light">Holland-</span>
            <span className="font-medium">Pearse</span>
          </Link>

          {/* Center navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-white/90 hover:text-white text-sm font-light transition-colors">
              Specialties
            </Link>
            <Link to="/about" className="text-white/90 hover:text-white text-sm font-light transition-colors">
              About & FAQs
            </Link>
            <Link to="/expertise" className="text-white/90 hover:text-white text-sm font-light transition-colors">
              Expertise
            </Link>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:info@holland-pearse.com" className="text-white/90 hover:text-white text-sm transition-colors">
              info@holland-pearse.com
            </a>
            <span className="text-white/30 mx-2">|</span>
            <button className="bg-white/20 hover:bg-white/30 text-white py-1.5 px-6 rounded-full text-sm transition-colors backdrop-blur-sm">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
