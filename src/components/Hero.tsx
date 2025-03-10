import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

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
    <div className="relative h-screen overflow-hidden bg-slate-700">
      {/* Background image with architectural calm */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)', 
          opacity: 0.7
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div 
          ref={heroRef}
          className="max-w-xl transition-all duration-1000 transform opacity-0 translate-y-10 relative"
        >
          {/* Upper mini-navigation path like in the inspiration */}
          <div className="flex items-center space-x-1 text-white/60 mb-4 font-light text-sm">
            <span>Home</span>
            <span>/</span>
            <span>Therapy</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
            Take Back Control<br />
            of Your Mental Health
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-white/80 mb-10 font-light max-w-lg">
            Effective Mental Health Solutions in Bristol and Online
          </p>
          
          {/* Description with icon */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg max-w-md mb-10">
            <p className="text-white/90 text-sm font-light leading-relaxed">
              Therapy is a transformative journey. Together, we explore challenges, 
              develop insights, and create positive change.
            </p>
          </div>
          
          {/* CTA button */}
          <Link 
            to="/contact" 
            className="inline-block bg-white text-slate-800 hover:bg-white/90 transition-colors py-3 px-8 rounded-full font-light"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>
      
      {/* Path/Journey element - similar to the flowing line in the inspiration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg width="100%" height="200" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,160 C320,220 420,100 720,160 C1020,220 1320,140 1440,160 L1440,200 L0,200 Z" fill="white"/>
        </svg>
      </div>
      
      {/* Journey markers - circles on the path */}
      <div className="absolute bottom-36 left-1/4 z-20 w-6 h-6 rounded-full bg-white shadow-lg animate-pulse"></div>
      <div className="absolute bottom-24 right-1/3 z-20 w-4 h-4 rounded-full bg-white shadow-lg"></div>
    </div>
  );
};

export default Hero;
