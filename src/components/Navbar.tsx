import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white shadow-md py-3" 
            : "bg-white/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-medium text-gray-800">Holland<span className="font-light">-Pearse</span></span>
              <span className="text-sm text-gray-500 ml-2">Psychotherapy</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { path: '/specialties', label: 'Specialties' },
                { path: '/about', label: 'About & FAQs' },
                { path: '/expertise', label: 'Expertise' },
                { path: '/resources', label: 'Resources' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors relative ${
                    location.pathname === item.path ? 'text-gray-900' : ''
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-800"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden md:block">
              <Link 
                to="/contact" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm transition-colors"
              >
                Schedule a Call
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden bg-gray-100 p-2 rounded-full focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-800" />
              ) : (
                <Menu className="h-5 w-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-xl transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen 
            ? 'translate-y-0 pt-20 pb-6' 
            : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-1">
            {/* Mobile Navigation Links */}
            {[
              { path: '/specialties', label: 'Specialties' },
              { path: '/about', label: 'About & FAQs' },
              { path: '/expertise', label: 'Expertise' },
              { path: '/resources', label: 'Resources' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`py-3 border-b border-gray-100 flex justify-between items-center ${
                  location.pathname === item.path 
                    ? 'text-gray-900 font-medium' 
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="block w-full bg-gray-900 hover:bg-gray-800 text-white text-center px-6 py-3 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden under the navbar */}
      <div className={`h-16 ${isScrolled ? 'md:h-16' : 'md:h-20'}`}></div>
    </>
  );
};

export default Navbar;
