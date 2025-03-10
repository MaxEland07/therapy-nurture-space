
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Holland-Pearse transformed my approach to anxiety. The tools I've gained are invaluable for my daily life.",
      author: "Sarah M.",
      location: "Bristol",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "After struggling with depression for years, I finally found a therapist who truly understood my experience. I'm deeply grateful.",
      author: "James K.",
      location: "Online Client",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The therapy sessions helped me process trauma I'd been carrying for decades. I feel lighter and more present than ever before.",
      author: "Melissa R.",
      location: "Bath",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [testimonials.length]);
  
  // Reset timer when user manually changes testimonial
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      }, 8000);
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3 
      } 
    }
  };
  
  return (
    <section className="py-12 bg-gradient-to-br from-therapy-light-blue via-white to-therapy-sand/20 relative overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-therapy-blue/5 rounded-full blur-xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-therapy-sage/5 rounded-full blur-xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-therapy-sand/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-therapy-light-blue/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <span className="inline-block px-3 py-1 bg-therapy-light-blue text-therapy-blue text-sm rounded-full mb-3">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-2 tracking-wide">Transformative Experiences</h2>
            <div className="wavy-line mx-auto my-4 opacity-70"></div>
          </motion.div>
          
          <div className="relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === activeIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8 relative overflow-hidden"
                  >
                    {/* Decorative accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-therapy-light-blue/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-therapy-sage/5 rounded-tr-full"></div>
                    
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      {/* Avatar */}
                      <div className="md:w-1/4 flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-therapy-sage/20 rounded-full blur-md transform -translate-x-2 translate-y-2"></div>
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-md relative z-10 border-2 border-white"
                          />
                        </div>
                      </div>
                      
                      {/* Quote */}
                      <div className="md:w-3/4 relative">
                        <div className="absolute -top-2 -left-4 text-therapy-light-blue text-5xl font-serif opacity-40">"</div>
                        <blockquote className="relative z-10">
                          <p className="text-lg md:text-xl font-light text-slate-700 mb-4">
                            {testimonial.quote}
                          </p>
                          <footer className="flex items-center">
                            <div>
                              <div className="font-medium text-slate-800">{testimonial.author}</div>
                              <div className="text-slate-500 text-sm">{testimonial.location}</div>
                            </div>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          {/* Navigation dots with animated indicator */}
          <div className="flex justify-center space-x-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="relative w-8 h-3 rounded-full bg-slate-200 transition-colors hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-therapy-sage focus:ring-offset-2"
                aria-label={`View testimonial ${index + 1}`}
              >
                {index === activeIndex && (
                  <motion.div
                    className="absolute inset-0 bg-therapy-sage rounded-full"
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
