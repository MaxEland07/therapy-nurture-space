import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const JourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (sectionRef.current) {
            const steps = sectionRef.current.querySelectorAll('.journey-step');
            steps.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add('opacity-100', 'translate-y-0');
                step.classList.remove('opacity-0', 'translate-y-10');
              }, index * 200);
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
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-600 to-slate-700"></div>
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 lg:col-span-3">
            <div className="flex flex-col space-y-12 md:space-y-16 relative">
              {/* Connecting line between steps */}
              <div className="absolute top-0 bottom-0 left-[40px] md:left-[60px] w-0.5 bg-white/20 hidden md:block"></div>
              
              {journeySteps.map((step, index) => (
                <div 
                  key={index} 
                  className="journey-step flex flex-col md:flex-row md:items-start gap-6 md:gap-8 opacity-0 translate-y-10 transition-all duration-700"
                >
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg">
                        <span className="text-2xl md:text-4xl font-light text-white">{step.number}</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-teal-400 shadow-lg"></div>
                    </div>
                  </div>
                  
                  <div className="md:pt-6">
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-4">{step.title}</h3>
                    <p className="text-white/90 leading-relaxed max-w-2xl">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-span-1 mt-12 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-xl h-full flex flex-col justify-center">
              <div className="mb-8">
                <div className="w-12 h-1 bg-teal-400 mb-6"></div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-6">Start Your New Narrative Today</h3>
                <p className="text-white/80 mb-8">Take the first step toward a healthier mind and a more fulfilling life.</p>
              </div>
              
              <Link 
                to="/contact" 
                className="block w-full bg-white text-teal-700 hover:bg-teal-50 transition-colors py-3 px-6 rounded-lg font-medium text-center shadow-lg hover:shadow-xl uppercase tracking-wider text-sm"
              >
                Schedule a Meeting
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-slate-700/20 blur-3xl"></div>
    </section>
  );
};

export default JourneySection; 