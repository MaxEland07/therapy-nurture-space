
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-4');
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
      className="relative h-screen overflow-hidden bg-white"
    >
      {/* Background image - full width for all devices */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          }}
          role="img"
          aria-label="Person overlooking ocean, representing mental health journey"
        />
        
        {/* Stronger gradient overlay for better text contrast - especially for mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/75 to-slate-700/60"></div>
      </div>
      
      {/* Content container - simplified and improved for better responsiveness */}
      <div className="relative h-full z-10">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center">
          <div 
            ref={heroRef} 
            className="max-w-xl backdrop-blur-[2px] bg-black/10 p-6 sm:p-8 rounded-lg sm:backdrop-blur-none sm:bg-transparent transition-all duration-1000 transform opacity-0 translate-y-4"
          >
            {/* Credential badge */}
            <div className="mb-4 md:mb-6">
              <span className="uppercase text-white/90 tracking-wider text-xs md:text-sm font-medium">
                Qualified and Accredited CBT Therapist
              </span>
            </div>
            
            {/* Main headline - smaller on mobile */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight">
              <span className="block mb-1">Take Back</span>
              <span className="block mb-1">Control of Your</span>
              <span className="block">Mental Health</span>
            </h1>
            
            {/* Subheading with better spacing */}
            <div className="mt-4 md:mt-6">
              <h2 className="text-base md:text-lg lg:text-xl text-white/90 font-normal">
                Effective Mental Health Solutions in Bristol and Online
              </h2>
            </div>
            
            {/* Free consultation text */}
            <div className="mt-4 md:mt-6 mb-4 md:mb-6">
              <p className="text-sm lg:text-base text-white/90">
                Start Today with a <span className="font-semibold text-white">Free Consultation</span> – A Better Tomorrow Awaits
              </p>
            </div>
            
            {/* CTA button with better styling */}
            <div className="mt-2">
              <Link 
                to="/contact" 
                className="inline-block bg-white border-2 border-white text-slate-800 hover:bg-transparent hover:text-white transition-colors duration-300 px-6 py-2 sm:px-8 sm:py-3 uppercase font-semibold tracking-wider text-sm sm:text-base shadow-sm"
              >
                Let's Do This!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
