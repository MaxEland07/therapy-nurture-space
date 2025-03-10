
import { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="section bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80" 
                  alt="Tom Holland Pierce" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-therapy-blue rounded-full z-[-1]" />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <span className="inline-block py-1 px-3 bg-therapy-light-blue text-primary rounded-full font-medium mb-6 text-sm animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl font-serif mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              Experienced Therapist Dedicated to Your Wellbeing
            </h2>
            
            <p className="text-muted-foreground mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              As a qualified and accredited CBT therapist, I bring over 10 years of experience helping individuals overcome anxiety, depression, trauma, and other mental health challenges.
            </p>
            
            <p className="text-muted-foreground mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              My approach is warm, non-judgmental, and tailored to your unique needs. I combine evidence-based techniques with compassionate care to create a safe space where healing can begin.
            </p>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
              <Button className="btn-primary">Learn More About Me</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
