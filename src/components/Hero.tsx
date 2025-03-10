import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    }, {
      threshold: 0.1
    });
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      aria-label="Mental Health Therapy Services" 
      className="relative h-screen overflow-hidden bg-slate-700"
    >
      {/* Background image with architectural calm */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1484627147104-f5197bcd6651?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          opacity: 0.65
        }} 
        role="img"
        aria-label="Person finding peace in nature"
      />
      
      {/* Subtle gradient overlay - matching navbar slate-700 base */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-slate-800/40 to-slate-700/30"></div>
      
      {/* Content container - added px-4 sm:px-6 for better mobile spacing */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        <div 
          ref={heroRef} 
          className="max-w-xl transition-all duration-1000 transform opacity-0 translate-y-10 relative"
        >
          {/* Qualification badge - responsive sizing */}
          <div className="inline-block bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 rounded-full text-white/90 mb-3 sm:mb-4 font-light text-xs sm:text-sm">
            <span>Qualified and Accredited CBT Therapist</span>
          </div>
          
          {/* Main headline - improved mobile sizing */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-4 sm:mb-8 tracking-wide"
          >
            <span className="font-light">Take Back</span> Control<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>of Your Mental Health
          </h1>
          
          {/* Subheading - improved for mobile */}
          <h2 className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-10 font-light max-w-lg">
            Effective Mental Health Solutions in Bristol and Online
          </h2>
          
          {/* Description box - made more mobile-friendly */}
          <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-5 rounded-lg max-w-md mb-6 sm:mb-10">
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
              Start Today with a Free Consultation – A Better Tomorrow Awaits
            </p>
          </div>
          
          {/* CTA - vertical on mobile, horizontal on larger screens */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* More prominent primary CTA button */}
            <Link 
              to="/contact" 
              className="bg-white text-slate-800 hover:bg-white/90 py-3 sm:py-3.5 px-6 sm:px-8 rounded-full text-base font-medium transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-lg flex justify-center items-center hover:-translate-y-0.5"
            >
              Schedule a Call
            </Link>
            <Link 
              to="/about" 
              className="text-white/90 hover:text-white transition-colors py-3.5 px-4 text-sm text-center sm:text-left"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Path/Journey element - maintained */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg width="100%" height="150" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,160 C320,220 420,100 720,160 C1020,220 1320,140 1440,160 L1440,200 L0,200 Z" fill="white" />
        </svg>
      </div>
      
      {/* Journey marker - maintained */}
      <div className="absolute bottom-36 left-1/4 z-20 w-3 h-3 rounded-full bg-white/30 shadow-lg"></div>
    </section>
  );
};

export default Hero;