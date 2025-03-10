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
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-slate-900/30 to-slate-800/20"></div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div 
          ref={heroRef} 
          className="max-w-xl transition-all duration-1000 transform opacity-0 translate-y-10 relative"
        >
          {/* Qualification badge */}
          <div className="text-white/80 mb-4 font-light text-sm">
            <span>Qualified and Accredited CBT Therapist</span>
          </div>
          
          {/* Main headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 tracking-wide"
          >
            Take Back Control<br />
            of Your Mental Health
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl text-white/90 mb-10 font-normal max-w-lg">
            Effective Mental Health Solutions in Bristol and Online
          </h2>
          
          {/* Description box */}
          <div className="bg-white/15 backdrop-blur-md p-5 rounded-lg max-w-md mb-10 border border-white/10 shadow-lg">
            <p className="text-white/95 text-sm leading-relaxed">
              Start Today with a Free Consultation – A Better Tomorrow Awaits
            </p>
          </div>
          
          {/* CTAs - with minimal styling */}
          <div className="flex gap-4">
            <Link 
              to="/contact" 
              className="inline-block bg-white text-slate-800 hover:bg-white/90 transition-colors py-3 px-8 rounded-full font-normal shadow-md hover:shadow-lg"
            >
              Begin Your Journey
            </Link>
            <Link 
              to="/about" 
              className="inline-block text-white hover:text-white/90 transition-colors py-3 px-8 font-normal"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Path/Journey element - wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg width="100%" height="200" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,160 C320,220 420,100 720,160 C1020,220 1320,140 1440,160 L1440,200 L0,200 Z" fill="white" />
        </svg>
      </div>
      
      {/* Just one subtle journey marker */}
      <div className="absolute bottom-36 left-1/4 z-20 w-3 h-3 rounded-full bg-white shadow-lg animate-pulse"></div>
    </section>
  );
};

export default Hero;