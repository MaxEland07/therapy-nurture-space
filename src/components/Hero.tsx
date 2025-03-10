
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        
        // Add staggered text reveal animation for headline
        if (headlineRef.current) {
          const words = headlineRef.current.querySelectorAll('.animate-word');
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add('opacity-100', 'translate-y-0');
              word.classList.remove('opacity-0', 'translate-y-3');
            }, 300 + (index * 150));
          });
        }
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1543357480-c60d40007a3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          opacity: 0.65
        }} 
        role="img"
        aria-label="Person finding peace in nature"
      />
      
      {/* Enhanced gradient overlay with stronger opacity for better text contrast */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-700/40"></div>
      
      {/* Content container with improved spacing */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        <div 
          ref={heroRef} 
          className="max-w-xl transition-all duration-1000 transform opacity-0 translate-y-10 relative"
        >
          {/* Enhanced qualification badge with improved visibility */}
          <div className="inline-block bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full text-white mb-4 text-xs sm:text-sm 
            border border-white/20 shadow-lg transform hover:scale-102 transition-transform">
            <span className="tracking-wider">✓ Qualified and Accredited CBT Therapist</span>
          </div>
          
          {/* Decorative line with WARM color */}
          <div className="w-12 h-1 bg-amber-300 mb-4 sm:mb-6 rounded-full"></div>
          
          {/* Content container with backdrop blur for improved text readability */}
          <div className="bg-black/10 backdrop-blur-sm p-4 rounded-lg sm:bg-transparent sm:backdrop-blur-0 sm:p-0">
            {/* Enhanced main headline with staggered word animation */}
            <h1 
              ref={headlineRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-display leading-tight mb-3 sm:mb-6 tracking-wide"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            >
              <span className="inline-block">
                <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block font-light">Take</span>
                {" "}
                <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block font-light">Back</span>
              </span>
              {" "}
              <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block font-medium relative">
                Control
              </span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block font-light">of</span>
              {" "}
              <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block font-light">Your</span>
              {" "}
              <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block">
                <span className="font-medium text-amber-300">Mental</span>
              </span>
              {" "}
              <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block">
                <span className="font-medium text-amber-300">Health</span>
              </span>
            </h1>
            
            {/* Simplified subheading with better spacing and contrast */}
            <div className="border-l-2 border-orange-300/70 pl-3 mb-5 sm:mb-8">
              <h2 className="text-md sm:text-xl text-white font-light leading-relaxed tracking-wide">
                <span className="font-medium">Effective</span> Mental Health Solutions in Bristol and Online
              </h2>
            </div>
          </div>
          
          {/* Clean and compact CTA section with improved spacing */}
          <div className="space-y-4 sm:space-y-6 mt-2 sm:mt-4">
            {/* Simplified offer box */}
            <div className="inline-block bg-white/20 backdrop-blur-md py-2 px-4 rounded-md text-white text-sm sm:text-base">
              Start Today with a <span className="font-medium text-amber-300">Free Consultation</span>
            </div>
            
            {/* CTA buttons with improved spacing */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                to="/contact" 
                className="bg-white/90 text-slate-800 hover:bg-white py-3 px-6 rounded-full text-base font-medium 
                          transition-all duration-300 shadow-lg hover:shadow-xl flex justify-center items-center gap-2
                          hover:-translate-y-0.5"
              >
                Schedule a Call
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <Link 
                to="/about" 
                className="text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors py-3 px-6 rounded-full text-base
                          flex items-center justify-center gap-1"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Path/Journey element - maintained but simplified */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg width="100%" height="100" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C320,100 420,30 720,60 C1020,90 1320,40 1440,60 L1440,100 L0,100 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
