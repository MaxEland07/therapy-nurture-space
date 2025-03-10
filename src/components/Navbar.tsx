
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExpertiseDropdownOpen, setIsExpertiseDropdownOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const expertiseDropdownRef = useRef<HTMLDivElement>(null);
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
      
      if (isExpertiseDropdownOpen && 
          expertiseDropdownRef.current && 
          !expertiseDropdownRef.current.contains(event.target as Node)) {
        setIsExpertiseDropdownOpen(false);
      }
    };

    if (isMobileMenuOpen || isExpertiseDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, isExpertiseDropdownOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle expertise dropdown
  const toggleExpertiseDropdown = () => {
    setIsExpertiseDropdownOpen(!isExpertiseDropdownOpen);
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
              {/* About & FAQs */}
              <Link 
                to="/about" 
                className={`text-slate-700 hover:text-slate-900 text-sm transition-colors relative ${
                  location.pathname === '/about' ? 'text-slate-900 font-medium' : 'font-normal'
                }`}
              >
                About & FAQs
                {location.pathname === '/about' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-800"></span>
                )}
              </Link>

              {/* Expertise Dropdown */}
              <div className="relative" ref={expertiseDropdownRef}>
                <button
                  onClick={toggleExpertiseDropdown}
                  className={`flex items-center text-slate-700 hover:text-slate-900 text-sm transition-colors ${
                    location.pathname === '/expertise' ? 'text-slate-900 font-medium' : 'font-normal'
                  }`}
                >
                  Expertise
                  {isExpertiseDropdownOpen ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </button>
                
                {/* Expertise dropdown menu */}
                {isExpertiseDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg z-50 py-2">
                    <Link 
                      to="/expertise" 
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      All Expertise
                    </Link>
                    {[
                      'Low Self Esteem',
                      'Lack of Confidence',
                      'Social Anxiety',
                      'Generalised Anxiety Disorder',
                      'Health Anxiety',
                      'Depression',
                      'OCD'
                    ].map((item) => (
                      <Link 
                        key={item}
                        to={`/expertise#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
                
                {location.pathname === '/expertise' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-800"></span>
                )}
              </div>

              {/* Fees */}
              <Link 
                to="/fees" 
                className={`text-slate-700 hover:text-slate-900 text-sm transition-colors relative ${
                  location.pathname === '/fees' ? 'text-slate-900 font-medium' : 'font-normal'
                }`}
              >
                Fees
                {location.pathname === '/fees' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-800"></span>
                )}
              </Link>

              {/* Blog */}
              <Link 
                to="/blog" 
                className={`text-slate-700 hover:text-slate-900 text-sm transition-colors relative ${
                  location.pathname === '/blog' ? 'text-slate-900 font-medium' : 'font-normal'
                }`}
              >
                Blog
                {location.pathname === '/blog' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-slate-800"></span>
                )}
              </Link>
            </div>

            {/* CTA button with improved styling */}
            <div className="hidden md:block">
              <Link 
                to="/contact" 
                className={`bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/contact' ? 'bg-slate-700' : ''
                }`}
              >
                Contact
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
            {/* About & FAQs */}
            <Link 
              to="/about" 
              className={`py-3 border-b border-slate-100 flex justify-between items-center ${
                location.pathname === '/about' 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>About & FAQs</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Expertise with accordion */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => toggleExpertiseDropdown()}
                className={`w-full py-3 flex justify-between items-center ${
                  location.pathname === '/expertise' 
                    ? 'text-slate-900 font-medium' 
                    : 'text-slate-600'
                }`}
              >
                <span>Expertise</span>
                {isExpertiseDropdownOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              
              {isExpertiseDropdownOpen && (
                <div className="pl-4 pb-2">
                  <Link 
                    to="/expertise" 
                    className="block py-2 text-sm text-slate-600 hover:text-slate-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Expertise
                  </Link>
                  {[
                    'Low Self Esteem',
                    'Lack of Confidence',
                    'Social Anxiety',
                    'Generalised Anxiety Disorder',
                    'Health Anxiety',
                    'Depression',
                    'OCD'
                  ].map((item) => (
                    <Link 
                      key={item}
                      to={`/expertise#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="block py-2 text-sm text-slate-600 hover:text-slate-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Fees */}
            <Link 
              to="/fees" 
              className={`py-3 border-b border-slate-100 flex justify-between items-center ${
                location.pathname === '/fees' 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Fees</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Blog */}
            <Link 
              to="/blog" 
              className={`py-3 border-b border-slate-100 flex justify-between items-center ${
                location.pathname === '/blog' 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Blog</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="block w-full bg-slate-800 hover:bg-slate-700 text-white text-center px-6 py-3 rounded-md transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
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
