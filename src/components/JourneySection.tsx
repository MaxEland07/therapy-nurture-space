
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const JourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate the section title
          const title = sectionRef.current?.querySelector('.section-title');
          title?.classList.add('opacity-100');
          title?.classList.remove('opacity-0', 'translate-y-8');
          
          // Animate steps with staggered delay
          if (sectionRef.current) {
            const steps = sectionRef.current.querySelectorAll('.journey-step');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('opacity-100');
                step.classList.remove('opacity-0');
                
                // Animate the line growing
                const line = step.querySelector('.step-line');
                if (line) {
                  line.classList.add('h-full');
                  line.classList.remove('h-0');
                }
                
                // Animate the content
                const content = step.querySelector('.step-content');
                if (content) {
                  content.classList.add('opacity-100', 'translate-x-0');
                  content.classList.remove('opacity-0', 'translate-x-12');
                }
                
                // Animate the number
                const number = step.querySelector('.step-number');
                if (number) {
                  number.classList.add('scale-100');
                  number.classList.remove('scale-0');
                }
              }, 400 + index * 800); // Longer delay between steps for more dramatic effect
            });
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const journeySteps = [
    {
      number: "01",
      title: "Free 20 Minute Consultation",
      description: "Start off with a free consultation, where we'll discuss your difficulties, questions, and concerns. Empower yourself to take the first step towards healing and build a path to lasting change through personalized CBT therapy."
    },
    {
      number: "02",
      title: "Treatment Journey",
      description: "During our weekly 60-minute sessions, we'll: Discuss your experiences from the previous week, providing a safe space to share challenges and successes. Work collaboratively to identify and address unhelpful thinking patterns using proven CBT techniques. Practice and reinforce these techniques through exercises and personalized strategies."
    },
    {
      number: "03",
      title: "Bespoke Relapse Prevention",
      description: "As your journey towards success and growth develops, we will devise a robust relapse prevention plan designed to ensure your progress continues well beyond the therapy sessions and into your life."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-therapy-light-blue/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-10 w-60 h-60 bg-therapy-sand/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-therapy-sage/10 rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with animation */}
        <div className="text-center mb-20">
          <h2 className="section-title text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-wide opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            Your Path to Wellbeing
          </h2>
          <div className="w-16 h-0.5 bg-therapy-sage mx-auto transition-all duration-1000 delay-500"></div>
        </div>
        
        {/* Timeline container */}
        <div className="max-w-5xl mx-auto relative pt-10">
          {/* Central timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-100"></div>
          
          {journeySteps.map((step, index) => (
            <div 
              key={index} 
              className={`journey-step relative opacity-0 transition-opacity duration-700 mb-24 ${
                index % 2 === 0 ? 'text-right' : 'text-left'
              }`}
            >
              {/* Timeline marker with number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="step-number transform scale-0 transition-transform duration-1000 ease-out">
                  <div className="w-20 h-20 rounded-full bg-white border border-teal-600 flex items-center justify-center shadow-lg">
                    <span className="text-xl font-light text-teal-600">{step.number}</span>
                  </div>
                  
                  {/* Growing line from circle */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-0.5 bg-teal-600 step-line h-0 transition-all duration-2000 ease-out"></div>
                  )}
                </div>
              </div>
              
              {/* Content box */}
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 
                    ? 'md:text-right' 
                    : 'md:text-left md:grid-flow-col-dense'
                }`}
              >
                <div 
                  className={`step-content opacity-0 translate-x-12 transition-all duration-1000 ease-out ${
                    index % 2 === 0 
                      ? 'md:col-start-1' 
                      : 'md:col-start-2'
                  }`}
                >
                  <div className={`bg-white p-6 md:p-8 shadow-lg border border-slate-100 ${
                    index % 2 === 0 ? 'ml-auto mr-10' : 'mr-auto ml-10'
                  }`}>
                    <h3 className="text-xl md:text-2xl font-light text-slate-800 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'}>
                  {/* Empty space to balance layout */}
                </div>
              </div>
            </div>
          ))}
          
          {/* Final CTA */}
          <div className="text-center mt-12 pt-10 opacity-0 translate-y-10 transition-all duration-1000 delay-2000">
            <h3 className="text-2xl font-light text-slate-800 mb-6">
              Start Your New Narrative Today
            </h3>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Take the first step toward a healthier mind and a more fulfilling life.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-block bg-therapy-sage text-white hover:bg-therapy-sage/90 transition-colors py-3 px-8 font-medium uppercase tracking-wider text-sm shadow-md hover:shadow-lg"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
