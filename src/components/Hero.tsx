import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger animation immediately after component mounts
  useEffect(() => {
    // Small timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      aria-label="Mental Health Therapy Services" 
      className="relative h-screen overflow-hidden"
    >
      {/* Desktop Layout - Hidden on mobile/tablet */}
      <div className="hidden lg:block h-full w-full">
        {/* Left content side */}
        <div className="absolute inset-y-0 left-0 w-1/2 z-10 bg-gradient-to-r from-slate-50 to-slate-100/90">
          <div className="h-full flex flex-col justify-center px-16 py-10">
            <div 
              className={`max-w-2xl transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
            >
              {/* Credential badge */}
              <div className="mb-12">
                <span className="uppercase text-slate-700 tracking-wider text-base font-medium">
                  Qualified and Accredited CBT Therapist
                </span>
              </div>
              
              {/* Main headline */}
              <h1 className="text-5xl md:text-6xl text-slate-800 font-medium leading-tight">
                <div className="mb-2">Take Back</div>
                <div className="mb-2">Control of Your</div>
                <div>Mental Health</div>
              </h1>
              
              {/* Subheading with better spacing */}
              <div className="mt-10">
                <h2 className="text-2xl text-slate-700 font-normal">
                  Effective Mental Health Solutions in Bristol and Online
                </h2>
              </div>
              
              {/* Free consultation text */}
              <div className="mt-10 mb-8">
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
        
        {/* Right image side - desktop only */}
        <div className="absolute inset-y-0 right-0 w-1/2">
          <div className="relative h-full w-full">
            {/* Main image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3)',
              }}
              role="img"
              aria-label="Person overlooking ocean, representing mental health journey"
            />
            
            {/* Overlay gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-l from-slate-900/20 via-slate-800/30 to-slate-700/40"></div>
          </div>
        </div>
      </div>
      
      {/* Mobile & Tablet Layout - Hidden on desktop */}
      <div className="lg:hidden h-full w-full">
        {/* Full-screen background image - optimized for mobile */}
        <div className="absolute inset-0 bg-cover bg-center" 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3)',
          }}
          role="img"
          aria-label="Person overlooking ocean, representing mental health journey"
        />
        
        {/* Dark overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/60 to-slate-900/30"></div>
        
        {/* Mobile content area */}
        <div 
          className={`relative z-10 h-full flex flex-col justify-end pb-12 px-6 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Credential badge for mobile */}
          <div className="mb-auto pt-12">
            <span className="uppercase text-white/90 tracking-wider text-sm font-medium">
              Qualified and Accredited CBT Therapist
            </span>
          </div>
          
          <div className="text-white mb-8">
            <h1 className="text-4xl sm:text-5xl font-medium leading-tight mb-4">
              <div>Take Back Control</div>
              <div>of Your Mental Health</div>
            </h1>
            
            <h2 className="text-lg sm:text-xl text-white/90 mb-6">
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
      </div>
    </section>
  );
};

export default Hero;