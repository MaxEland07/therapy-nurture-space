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
      {/* Left content side */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-10 bg-gradient-to-r from-slate-50 to-slate-100/90">
        <div className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10">
          <div 
            ref={heroRef} 
            className="max-w-2xl transition-all duration-1000 transform opacity-0 translate-y-4"
          >
            {/* Credential badge */}
            <div className="mb-10 md:mb-12">
              <span className="uppercase text-slate-700 tracking-wider text-sm md:text-base font-medium">
                Qualified and Accredited CBT Therapist
              </span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-800 font-medium leading-tight">
              <div className="mb-2">Take Back</div>
              <div className="mb-2">Control of Your</div>
              <div>Mental Health</div>
            </h1>
            
            {/* Subheading with better spacing */}
            <div className="mt-8 md:mt-10">
              <h2 className="text-xl md:text-2xl text-slate-700 font-normal">
                Effective Mental Health Solutions in Bristol and Online
              </h2>
            </div>
            
            {/* Free consultation text */}
            <div className="mt-8 md:mt-10 mb-8">
              <p className="text-lg text-slate-700">
                Start Today with a <span className="font-semibold text-slate-800">Free Consultation</span> – A Better Tomorrow Awaits
              </p>
            </div>
            
            {/* CTA button with better styling */}
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="inline-block bg-white border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition-colors duration-300 px-10 py-3 uppercase font-semibold tracking-wider text-base shadow-sm"
              >
                Let's Do This!
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right image side - full height with proper overlay */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
        <div className="relative h-full w-full">
          {/* Main image - same as navbar example */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
            role="img"
            aria-label="Person overlooking ocean, representing mental health journey"
          />
          
          {/* Better overlay gradient for improved contrast */}
          <div className="absolute inset-0 bg-gradient-to-l from-slate-900/20 via-slate-800/30 to-slate-700/40 lg:block hidden"></div>
          
          {/* Mobile overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-slate-900/10 lg:hidden"></div>
        </div>
      </div>
      
      {/* Mobile content overlay */}
      <div className="relative lg:hidden z-20 h-full flex flex-col justify-end pb-12 px-6">
        <div className="text-white mb-8">
          <h1 className="text-4xl font-medium leading-tight mb-4">
            <div>Take Back Control</div>
            <div>of Your Mental Health</div>
          </h1>
          
          <h2 className="text-lg text-white/90 mb-6">
            Effective Mental Health Solutions in Bristol and Online
          </h2>
          
          <p className="text-white/90">
            Start Today with a <span className="font-semibold">Free Consultation</span>
          </p>
        </div>
        
        <Link 
          to="/contact" 
          className="inline-block bg-white text-slate-800 px-10 py-3 uppercase font-semibold tracking-wider text-sm shadow-md w-full text-center"
        >
          Let's Do This!
        </Link>
      </div>
    </section>
  );
};

export default Hero;