import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-slate-700/90 backdrop-blur-sm py-3 shadow-lg" 
          : "bg-transparent py-5"
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo with subtle enhancement */}
            <Link to="/" className="font-display text-white text-xl relative group">
              <span className="font-light">Holland-</span>
              <span className="font-medium">Pearse</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-therapy-sage group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Center navigation - enhanced with active state */}
            <div className="hidden md:flex items-center space-x-10">
              {[
                { path: '/specialties', label: 'Specialties' },
                { path: '/about', label: 'About & FAQs' },
                { path: '/expertise', label: 'Expertise' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`text-white/90 hover:text-white text-sm font-light transition-colors relative ${
                    location.pathname === item.path ? 'text-white' : ''
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-therapy-sage"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Right side actions - enhanced with hover effects */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="mailto:info@holland-pearse.com" 
                className="text-white/90 hover:text-white text-sm transition-colors hover:translate-y-[-1px] inline-block"
              >
                info@holland-pearse.com
              </a>
              <span className="text-white/30 mx-2">|</span>
              <Link 
                to="/contact"
                className="bg-white/20 hover:bg-white/30 text-white py-1.5 px-6 rounded-full text-sm transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 shadow-sm hover:shadow-md hover:translate-y-[-1px]"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button - now functional */}
            <button 
              className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Animated */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 right-0 z-40 bg-slate-800/95 backdrop-blur-md shadow-xl transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen 
            ? 'translate-y-0 pt-20 pb-6' 
            : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            {/* Mobile Navigation Links */}
            <Link 
              to="/specialties" 
              className="text-white py-3 border-b border-white/10 flex justify-between items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Specialties</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link 
              to="/about" 
              className="text-white py-3 border-b border-white/10 flex justify-between items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>About & FAQs</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link 
              to="/expertise" 
              className="text-white py-3 border-b border-white/10 flex justify-between items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Expertise</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            {/* Contact Information */}
            <div className="pt-4">
              <h3 className="text-white/50 text-xs uppercase tracking-wider mb-3">Contact Me</h3>
              <a 
                href="mailto:info@holland-pearse.com" 
                className="text-white flex items-center space-x-2 py-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@holland-pearse.com</span>
              </a>
              
              <a 
                href="tel:+441234567890" 
                className="text-white flex items-center space-x-2 py-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0117 123 4567</span>
              </a>
            </div>
            
            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="mt-4 bg-therapy-sage text-white py-3 px-4 rounded-md flex justify-center items-center space-x-2 shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Schedule Free Consultation</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay for when mobile menu is open */}
      <div 
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;
