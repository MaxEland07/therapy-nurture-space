import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutMeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          
          // Animate list items with delay
          if (sectionRef.current) {
            const items = sectionRef.current.querySelectorAll('.benefit-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-x-0');
                item.classList.remove('opacity-0', 'translate-x-4');
              }, 400 + index * 150);
            });
          }

          // Animate logos with delay
          if (logosRef.current) {
            const logos = logosRef.current.querySelectorAll('.accreditation-logo');
            logos.forEach((logo, index) => {
              setTimeout(() => {
                logo.classList.add('opacity-100', 'scale-100');
                logo.classList.remove('opacity-0', 'scale-95');
              }, 800 + index * 200);
            });
          }
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

  // Accreditation logos data
  const accreditationLogos = [
    {
      src: "https://holland-pearse.com/wp-content/uploads/2024/03/psych-today.png",
      alt: "Psychology Today Verified"
    },
    {
      src: "https://holland-pearse.com/wp-content/uploads/2024/03/PSA-logo.png",
      alt: "PSA Accreditation"
    },
    {
      src: "https://holland-pearse.com/wp-content/uploads/2024/03/babcp.jpeg",
      alt: "BABCP Accreditation"
    },
    {
      src: "https://holland-pearse.com/wp-content/uploads/2024/03/ACBS-logo_0_0.png",
      alt: "ACBS Member"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-therapy-light-blue/15 blur-xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto transition-all duration-1000 transform opacity-0 translate-y-10"
        >
          {/* Section header */}
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full mb-4">ABOUT ME</span>
            <div className="w-12 h-0.5 bg-therapy-sage mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image with decorative elements */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-therapy-sage/10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-therapy-light-blue/15"></div>
              
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://holland-pearse.com/wp-content/uploads/elementor/thumbs/GENERIC-BLANK-TEMPLATE-1-qcsd6k89a4jqs8lk5l572f8xbyels1yh68pdlyf0ls.png"
                  alt="Tom, CBT Therapist"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-white/30 blur-lg"></div>
            </div>
            
            {/* Right side - Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-slate-800 leading-tight mb-6 tracking-wide">
                Hi, I'm Tom, a qualified and accredited CBT Therapist and Founder of Holland-Pearse Psychotherapy.
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                Everyone deserves to feel empowered and supported. That's why I'm here to guide individuals through therapy, a safe and confidential space to explore concerns, develop coping mechanisms, and achieve your goals.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="benefit-item opacity-0 translate-x-4 transition-all duration-500 flex items-start">
                  <div className="text-therapy-sage mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Develop Unshakeable Confidence</span>
                </div>
                
                <div className="benefit-item opacity-0 translate-x-4 transition-all duration-500 flex items-start">
                  <div className="text-therapy-sage mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Form Long-Lasting Relationships</span>
                </div>
                
                <div className="benefit-item opacity-0 translate-x-4 transition-all duration-500 flex items-start">
                  <div className="text-therapy-sage mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Express Emotions Authentically</span>
                </div>
                
                <div className="benefit-item opacity-0 translate-x-4 transition-all duration-500 flex items-start">
                  <div className="text-therapy-sage mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Embrace Personal Growth</span>
                </div>
                
                <div className="benefit-item opacity-0 translate-x-4 transition-all duration-500 flex items-start">
                  <div className="text-therapy-sage mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Live a Life with Purpose and Meaning</span>
                </div>
                
                <div className="benefit-item opacity-0 translate-x-4 transition-all duration-500 flex items-start">
                  <div className="text-therapy-sage mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Thrive in Your Career</span>
                </div>
                
                <div className="benefit-item opacity-0 translate-x-4 transition-all duration-500 flex items-start">
                  <div className="text-therapy-sage mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Prioritise Self Care and Wellness</span>
                </div>
                
                <div className="benefit-item opacity-0 translate-x-4 transition-all duration-500 flex items-start">
                  <div className="text-therapy-sage mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Break Out of Unhelpful Patterns</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link 
                  to="/expertise" 
                  className="inline-block bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors py-3 px-6 rounded-md text-sm font-medium tracking-wide shadow-sm"
                >
                  VIEW MY EXPERTISE
                </Link>
                
                <Link 
                  to="/contact" 
                  className="inline-block bg-slate-700 text-white hover:bg-slate-800 transition-colors py-3 px-6 rounded-md text-sm font-medium tracking-wide shadow-sm"
                >
                  SCHEDULE YOUR FREE CONSULTATION
                </Link>
              </div>
            </div>
          </div>
          
          {/* Accreditation Logos Section - New Addition */}
          <div className="mt-16 pt-10 border-t border-slate-100">
            <h3 className="text-center text-slate-500 text-sm uppercase tracking-wider mb-8">Professional Accreditations</h3>
            
            <div 
              ref={logosRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center"
            >
              {accreditationLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className="accreditation-logo opacity-0 scale-95 transition-all duration-700 hover:scale-105 filter grayscale hover:grayscale-0 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 w-full h-full flex items-center justify-center"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-h-16 md:max-h-20 w-auto object-contain"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;