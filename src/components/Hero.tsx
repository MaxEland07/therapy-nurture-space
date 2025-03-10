
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
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
    <div className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background image with better contrast overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1498673394965-85cb14905c89?auto=format&fit=crop&w=2000&q=80)', 
          filter: 'brightness(0.85)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-therapy-sage/90 to-therapy-blue/60" />
      </div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-6 py-16 md:py-20 relative z-10 transition-all duration-1000 transform opacity-0 translate-y-10 mt-12"
      >
        <div className="max-w-3xl">
          <span className="inline-block py-1.5 px-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium mb-6 text-sm animate-fade-in uppercase tracking-wide">
            Qualified and Accredited CBT Therapist
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-white leading-tight mb-8 drop-shadow-md">
            Take Back Control of Your Mental Health
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-light">
            Effective Mental Health Solutions in Bristol and Online
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-white text-therapy-sage hover:bg-therapy-cream text-base font-medium px-6 py-6">
              <Link to="/contact">Start Today with a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 text-base font-medium px-6 py-6">
              <Link to="/expertise">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-12 py-2.5 px-5 bg-white/20 backdrop-blur-sm inline-block rounded-lg">
            <p className="text-white font-medium">A Better Tomorrow Awaits</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-therapy-sage/30 to-transparent z-10" />
      
      {/* Mobile-friendly decorative elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-therapy-blue/20 rounded-full -mr-32 hidden md:block" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-therapy-light-blue/20 rounded-full hidden md:block" aria-hidden="true" />
    </div>
  );
};

export default Hero;
