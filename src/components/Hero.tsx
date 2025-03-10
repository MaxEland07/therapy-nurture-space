
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
        
        {/* Gradient overlay for better text contrast - visible on all devices */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-700/30"></div>
      </div>
      
      {/* Content container - simplified for better responsiveness */}
      <div className="relative h-full z-10">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center">
          <div 
            ref={heroRef} 
            className="max-w-xl transition-all duration-1000 transform opacity-0 translate-y-4"
          >
            {/* Credential badge */}
            <div className="mb-6 md:mb-10">
              <span className="uppercase text-white/90 tracking-wider text-sm md:text-base font-medium">
                Qualified and Accredited CBT Therapist
              </span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight">
              <div className="mb-2">Take Back</div>
              <div className="mb-2">Control of Your</div>
              <div>Mental Health</div>
            </h1>
            
            {/* Subheading with better spacing */}
            <div className="mt-6 md:mt-8">
              <h2 className="text-lg md:text-xl lg:text-2xl text-white/90 font-normal">
                Effective Mental Health Solutions in Bristol and Online
              </h2>
            </div>
            
            {/* Free consultation text */}
            <div className="mt-6 md:mt-8 mb-6 md:mb-8">
              <p className="text-base lg:text-lg text-white/90">
                Start Today with a <span className="font-semibold text-white">Free Consultation</span> – A Better Tomorrow Awaits
              </p>
            </div>
            
            {/* CTA button with better styling */}
            <div className="mt-4">
              <Link 
                to="/contact" 
                className="inline-block bg-white border-2 border-white text-slate-800 hover:bg-transparent hover:text-white transition-colors duration-300 px-8 py-3 uppercase font-semibold tracking-wider text-base shadow-sm"
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
