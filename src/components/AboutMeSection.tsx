
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const AboutMeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-therapy-cream/50 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-therapy-sand/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-therapy-light-blue/30 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div
          ref={contentRef}
          className="max-w-6xl mx-auto transition-all duration-1000 transform opacity-0 translate-y-10"
        >
          {/* About Me Heading */}
          <div className="mb-10 md:mb-16">
            <span className="inline-block py-1 px-4 bg-therapy-sage/10 text-therapy-sage rounded-full text-sm font-medium mb-4">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-800 font-display font-medium leading-tight">
              Hi, I'm Tom, a qualified and accredited CBT<br />
              Therapist and Founder of Holland-Pearse<br />
              Psychotherapy.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left column: Image with decorative elements */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full bg-therapy-sage/10"></div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 rounded-full bg-therapy-blue/10"></div>
              
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/5aa8793c-d566-49f9-9009-fe0018bc0efb.png"
                  alt="Tom Holland Pierce, Therapist"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md py-3 px-6 rounded-full shadow-lg">
                <Link 
                  to="/contact" 
                  className="font-display text-sm md:text-base text-slate-800 font-medium hover:text-therapy-sage transition-colors"
                >
                  SCHEDULE YOUR FREE CONSULTATION
                </Link>
              </div>
            </div>
            
            {/* Right column: Content */}
            <div className="order-1 lg:order-2">
              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                Everyone deserves to feel empowered and supported. That's
                why I'm here to guide individuals through therapy, a safe and
                confidential space to explore concerns, develop coping
                mechanisms, and achieve your goals.
              </p>
              
              <div className="space-y-3 mb-10">
                <BenefitItem text="Develop Unshakeable Confidence" />
                <BenefitItem text="Form Long-Lasting Relationships" />
                <BenefitItem text="Express Emotions Authentically" />
                <BenefitItem text="Embrace Personal Growth" />
                <BenefitItem text="Live a Life with Purpose and Meaning" />
                <BenefitItem text="Thrive in Your Career" />
                <BenefitItem text="Prioritise Self Care and Wellness" />
                <BenefitItem text="Break Out of Unhelpful Patterns" />
              </div>
              
              <Link 
                to="/expertise" 
                className="inline-flex items-center py-3 px-6 bg-therapy-sage text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                VIEW MY EXPERTISE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for the benefit items with checkmark
const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 mt-1">
      <Check className="h-5 w-5 text-therapy-sage" />
    </div>
    <p className="text-slate-700">{text}</p>
  </div>
);

export default AboutMeSection;
