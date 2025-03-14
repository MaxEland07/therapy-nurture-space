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
                  content.classList.remove('opacity-0', 'translate-x-12', 'translate-y-12');
                }
                
                // Animate the number
                const number = step.querySelector('.step-number');
                if (number) {
                  number.classList.add('scale-100');
                  number.classList.remove('scale-0');
                }
              }, 400 + index * 600); // Reduced delay between steps
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
    <section ref={sectionRef} className="py-8 md:py-16 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section header with animation */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 mb-3 tracking-wide opacity-0 translate-y-8 transition-all duration-1000 delay-300">
            Your Path to Wellbeing
          </h2>
          <div className="w-12 md:w-16 h-0.5 bg-therapy-sage mx-auto transition-all duration-1000 delay-500"></div>
        </div>
        
        {/* Timeline container */}
        <div className="max-w-5xl mx-auto relative pt-5">
          {/* Central timeline - hidden on mobile, visible on md screens */}
          <div className="absolute hidden md:block md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-100"></div>
          
          {/* Mobile timeline - visible on mobile only */}
          <div className="absolute md:hidden left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-slate-100"></div>
          
          {journeySteps.map((step, index) => (
            <div 
              key={index} 
              className="journey-step relative opacity-0 transition-opacity duration-700 mb-10 md:mb-14 text-left"
            >
              {/* Timeline marker with number - different positioning for mobile/desktop */}
              <div className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className="step-number transform scale-0 transition-transform duration-1000 ease-out">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white border border-therapy-navy flex items-center justify-center shadow-lg">
                    <span className="text-base md:text-lg font-light text-therapy-navy">{step.number}</span>
                  </div>
                  
                  {/* Growing line from circle */}
                  {index < journeySteps.length  && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-0.5 bg-therapy-navy step-line h-0 transition-all duration-2000 ease-out"></div>
                  )}
                </div>
              </div>
              
              {/* Content box - mobile layout stacks everything vertically */}
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <div 
                  className={`step-content pl-16 sm:pl-20 md:pl-0 opacity-0 transition-all duration-1000 ease-out ${
                    // Apply different transformations based on odd/even
                    index % 2 === 0 
                      ? 'md:-translate-x-12 md:col-start-1' 
                      : 'md:translate-x-12 md:col-start-2'
                  } ${
                    // On mobile, apply vertical translation instead
                    'translate-y-12 md:translate-y-0'
                  }`}
                >
                  <div className={`bg-white p-4 md:p-6 shadow-lg border border-slate-100 ${
                    index % 2 === 0 
                      ? 'md:ml-auto md:mr-10' 
                      : 'md:mr-auto md:ml-10'
                  }`}>
                    <h3 className="text-lg sm:text-xl font-light text-slate-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} hidden md:block`}>
                  {/* Empty space to balance layout on desktop */}
                </div>
              </div>
            </div>
          ))}
          
          {/* Final CTA */}
          <div className="text-center mt-8 pt-4 opacity-0 translate-y-10 transition-all duration-1000 delay-2000">
            <h3 className="text-xl font-light text-slate-800 mb-4">
              Start Your New Narrative Today
            </h3>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto px-4 md:px-0">
              Take the first step toward a healthier mind and a more fulfilling life.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-block bg-therapy-sage text-white hover:bg-therapy-sage/90 transition-colors py-2 px-6 font-medium uppercase tracking-wider text-sm shadow-md hover:shadow-lg"
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
