import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set isLoaded after a short delay to ensure smooth animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
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
      clearTimeout(timer);
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
      {/* Background image with architectural calm - using picture for responsive optimization */}
      <picture className="absolute inset-0 z-0">
        <source 
          srcSet="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp" 
          type="image/webp" 
        />
        <img 
          src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Person finding peace and perspective" 
          className="w-full h-full object-cover object-center opacity-65"
          loading="eager"
        />
      </picture>
      
      {/* Enhanced gradient overlay with more depth */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-slate-900/40 via-slate-800/30 to-slate-800/20"></div>
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div 
          ref={heroRef} 
          className={`max-w-xl transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } relative`}
        >
          {/* Upper mini-navigation path like in the inspiration */}
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 mb-6 font-light text-sm">
            <span>Qualified and Accredited CBT Therapist</span>
          </div>
          
          {/* Main headline - enhanced with text shadow and letter spacing */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-8 tracking-wide" 
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Take Back Control<br />
            of Your Mental Health
          </h1>
          
          {/* Subheading - enhanced with text shadow */}
          <h2 
            className="text-xl md:text-2xl text-white/90 mb-10 font-normal max-w-lg" 
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.2)' }}
          >
            Effective Mental Health Solutions in Bristol and Online
          </h2>
          
          {/* Description with improved contrast and interaction */}
          <div className="bg-white/15 backdrop-blur-md p-6 rounded-lg max-w-md mb-10 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300">
            <p className="text-white/95 text-base leading-relaxed">
              Start Today with a Free Consultation – A Better Tomorrow Awaits
            </p>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="inline-block bg-white text-slate-800 hover:bg-white/90 transition-all duration-300 py-4 px-8 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
            >
              Begin Your Journey
            </Link>
            <Link 
              to="/about" 
              className="inline-block bg-transparent border-2 border-white/80 text-white hover:bg-white/10 transition-all duration-300 py-4 px-8 rounded-full font-medium shadow-md hover:shadow-lg text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Path/Journey element - improved wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg width="100%" height="200" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,160 C320,220 420,100 720,160 C1020,220 1320,140 1440,160 L1440,200 L0,200 Z" fill="white" />
        </svg>
      </div>
      
      {/* Journey markers - enhanced with pulsing animation */}
      <div className="absolute bottom-36 left-1/4 z-20 w-6 h-6 rounded-full bg-white shadow-lg animate-pulse"></div>
      <div className="absolute bottom-24 right-1/3 z-20 w-4 h-4 rounded-full bg-white shadow-lg"></div>
    </section>
  );
};

export default Hero;