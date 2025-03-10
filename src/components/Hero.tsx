
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
            }, 300 + index * 150);
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
    <section aria-label="Mental Health Therapy Services" className="relative h-screen overflow-hidden bg-slate-700">
      {/* Background image with architectural calm */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1543357480-c60d40007a3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          opacity: 0.65
        }} 
        role="img" 
        aria-label="Person finding peace in nature" 
      />
      
      {/* Enhanced gradient overlay for better text contrast */}
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-700/50"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 z-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5"></div>
      
      {/* Content container with improved spacing and mobile adjustments */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        <div ref={heroRef} className="max-w-xl transition-all duration-1000 transform opacity-0 translate-y-10 relative">
          {/* Enhanced qualification badge */}
          <div className="inline-block bg-white/30 backdrop-blur-md px-3 sm:px-4 py-1.5 rounded-full text-white mb-4 sm:mb-5 font-light text-xs sm:text-sm 
            border border-white/20 shadow-md">
            <span className="tracking-wider">✓ Qualified and Accredited CBT Therapist</span>
          </div>
          
          {/* Decorative line */}
          <div className="w-14 h-1 bg-amber-300 mb-5 sm:mb-6 rounded-full"></div>
          
          {/* Mobile-optimized headline */}
          <h1 
            ref={headlineRef} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-6 tracking-wide font-light"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            <span className="inline-block">
              <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block">Take</span>
              {" "}
              <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block">Back</span>
            </span>
            {" "}
            <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block font-medium relative">
              Control
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block">of</span>
            {" "}
            <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block">Your</span>
            {" "}
            <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block">
              <span className="font-medium text-amber-300">Mental</span>
            </span>
            {" "}
            <span className="animate-word opacity-0 translate-y-3 transition-all duration-500 inline-block">
              <span className="font-medium text-amber-300">Health</span>
            </span>
          </h1>
          
          {/* Enhanced subheading with better mobile legibility */}
          <h2 className="relative text-base sm:text-lg text-white/95 mb-5 sm:mb-7 max-w-lg leading-relaxed 
                         tracking-wide border-l-2 border-amber-300/70 pl-4 backdrop-blur-sm py-2 bg-slate-900/30 rounded-r-lg">
            <span className="font-medium">Effective</span> Mental Health Solutions in Bristol and Online
          </h2>
          
          {/* Enhanced description box */}
          <div className="bg-white/20 backdrop-blur-md p-4 sm:p-5 rounded-lg max-w-md mb-6 sm:mb-8 
                          border border-white/20 shadow-lg">
            <p className="text-white/95 text-sm leading-relaxed tracking-wide">
              Start Today with a <span className="font-medium text-amber-300">Free Consultation</span> – A Better Tomorrow Awaits
            </p>
          </div>
          
          {/* Improved CTA section for mobile */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative">
            {/* Primary CTA using shadcn Button component */}
            <Button 
              asChild
              className="bg-white hover:bg-white/90 text-slate-800 py-3 px-6 rounded-full text-base font-medium 
                        transition-all duration-300 shadow-md hover:shadow-lg 
                        hover:-translate-y-0.5 border-none"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Schedule a Call
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </Button>
            
            {/* Secondary link */}
            <Button 
              asChild
              variant="ghost" 
              className="text-white hover:bg-white/10 hover:text-white border border-white/20"
            >
              <Link to="/about" className="flex items-center gap-1">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Path/Journey wave shape */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg width="100%" height="150" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,160 C320,220 420,100 720,160 C1020,220 1320,140 1440,160 L1440,200 L0,200 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
