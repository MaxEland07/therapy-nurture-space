
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

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
      {/* Background image with gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80)', 
          filter: 'brightness(0.8)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-6 py-20 relative z-10 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium mb-6 text-sm animate-fade-in">
            Qualified and Accredited CBT Therapist
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight mb-6">
            Take Back Control of Your Mental Health
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Effective Mental Health Solutions in Bristol and Online
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary bg-white text-primary hover:bg-white/90 text-base">
              Start Today with a Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base">
              Learn More
            </Button>
          </div>
          
          <div className="mt-10 py-2 px-4 bg-white/10 backdrop-blur-sm inline-block rounded-lg">
            <p className="text-white/90">A Better Tomorrow Awaits</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-therapy-cream to-transparent z-10" />
    </div>
  );
};

export default Hero;
