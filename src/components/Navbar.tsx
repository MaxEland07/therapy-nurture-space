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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
          isScrolled 
            ? "bg-white shadow-sm py-2" 
            : "bg-white py-3"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo area with psychotherapy text below */}
            <Link to="/" className="flex items-center py-1">
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-xl font-medium text-slate-800">Holland</span>
                  <span className="text-xl font-light text-slate-800">-Pearse</span>
                </div>
                <span className="text-xs text-slate-600 -mt-0.5 tracking-wide">Psychotherapy</span>
              </div>
            </Link>

            {/* Desktop navigation with improved spacing */}
            <div className="hidden md:flex items-center space-x-10">
              {[
                { path: '/specialties', label: 'Specialties' },
                { path: '/about', label: 'About & FAQs' },
                { path: '/expertise', label: 'Expertise' },
                { path: '/resources', label: 'Resources' }
              ].map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`text-slate-700 hover:text-slate-900 text-sm transition-colors relative ${
                    location.pathname === item.path ? 'text-slate-900 font-medium' : 'font-normal'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-800"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA button with improved styling */}
            <div className="hidden md:block">
              <Link 
                to="/contact" 
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Schedule a Call
              </Link>
            </div>

            {/* Mobile menu button with improved styling */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-1.5 rounded-md focus:outline-none text-slate-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay with improved styling */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen 
            ? 'translate-y-0 pt-16 pb-6' 
            : '-translate-y-full'
        }`}
      >
        <div className="w-full px-6 py-4">
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
                className={`py-3 border-b border-slate-100 flex justify-between items-center ${
                  location.pathname === item.path 
                    ? 'text-slate-900 font-medium' 
                    : 'text-slate-600'
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
                className="block w-full bg-slate-800 hover:bg-slate-700 text-white text-center px-6 py-3 rounded-md transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Adjusted spacer to eliminate gap */}
      <div className={`h-14 ${isScrolled ? 'h-14' : 'h-16'}`}></div>
    </>
  );
};

export default Navbar;
