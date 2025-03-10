import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TherapyIntro = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto transition-all duration-1000 transform opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 leading-tight mb-8 tracking-wide">
                Tired of been held back by bad mental health?
              </h2>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                Do you find yourself constantly stressed and overwhelmed? Does the weight of daily challenges
                and anxieties impact your sleep and well-being? Life's pressures—whether from work, studies, or
                daily responsibilities—can feel relentless.
              </p>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                CBT therapy offers practical tools to help you manage stress, break free from negative thought
                patterns, and regain a sense of control. Imagine feeling more grounded, sleeping better, and
                handling life's challenges with confidence.
              </p>
              
              <p className="text-slate-700 mb-8 leading-relaxed">
                You don't have to do this on your own. Whether you're tackling work stress, academic pressures,
                we've got a solution for you:
              </p>
              
              <Link 
                to="/cbt-therapy" 
                className="inline-block bg-slate-700 text-white hover:bg-slate-800 transition-colors py-3 px-8 rounded-md font-normal shadow-sm uppercase tracking-wider text-sm"
              >
                Discover how CBT can help you
              </Link>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-slate-100 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Therapy session" 
                  className="relative z-10 rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-slate-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyIntro; 