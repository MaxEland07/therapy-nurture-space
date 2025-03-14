import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Highly recommend Tom. Professional, kind & empathetic. Thank you Tom for all you have done. I couldn't imagine being empowered with the knowledge I have gained over these sessions when we started. It really does feel like I've come so far and for that I am eternally grateful.",
      author: "CLIENT"
    },
    {
      quote: "Tom has really helped me overcome my anxiety over the last couple of months. He works with a very informal approach which instantly made me feel comfortable and safe. I have learnt vital skills and overall feel much happier and confident that I know how to tackle any anxiety when it comes my way. I couldn't recommend Tom enough!",
      author: "CLIENT"
    },
    {
      quote: "Tom is a highly skilled CBT therapist I had a pleasure to work with over the past few months. He is excellent at listening, and he has a calm and kind manner. His informal and friendly approach put me at ease and made me feel very comfortable opening up and sharing my anxiety with him. We had eight sessions together and provided me with tools and techniques to recognise and challenge unhelpful thoughts and helped to deal with my anxiety. I would highly recommend Tom and his therapy to anyone.",
      author: "CLIENT"
    },
    {
      quote: "Tom has been brilliant. He gives clear explanations of theoretical concepts which have really helped me to 'look under the hood' and gain a better understanding of where some of my challenges arise from. He has helped me identify key areas to address and given me the tools to do so. He is a great listener and is non-judgmental, which puts me at ease and allows me to open up. Thank you Tom!",
      author: "CLIENT"
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

  // Navigation functions for carousel
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const resetTimer = () => {
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

  // Truncate long quotes for mobile view
  const truncateQuote = (quote: string, maxLength: number = 150) => {
    if (quote.length <= maxLength) return quote;
    return quote.substring(0, maxLength) + '...';
  };
  
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-10 md:mb-16"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-800 mb-3">Testimonials</h2>
          </motion.div>
          
          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl p-6 shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-100 min-h-[250px] flex flex-col relative overflow-hidden"
                >
                  {/* Quote mark decorative element */}
                  <div className="absolute -top-2 -left-2 text-therapy-sage/10 text-[100px] leading-none font-serif">"</div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <p className="text-gray-700 mb-4 flex-grow font-light leading-relaxed text-sm">
                      {testimonials[activeIndex].quote}
                    </p>
                    <div className="text-sm font-medium text-gray-500 mt-auto border-t border-gray-100 pt-3">
                      {testimonials[activeIndex].author}
                    </div>
                  </div>
                  
                  {/* Decorative accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-therapy-sage/5 rounded-tl-full"></div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <button 
                onClick={prevTestimonial}
                className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-20 text-slate-600 hover:text-slate-800"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center z-20 text-slate-600 hover:text-slate-800"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "bg-therapy-sage w-6" : "bg-gray-300"
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Desktop View - Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.1 
                    } 
                  }
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" 
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-gray-100 h-full flex flex-col relative overflow-hidden transform transition-all duration-300"
              >
                {/* Quote mark decorative element */}
                <div className="absolute -top-2 -left-2 text-therapy-navy/10 text-[120px] leading-none font-serif">"</div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-therapy-blue text-3xl mb-4"></div>
                  <p className="text-gray-700 mb-6 flex-grow font-light leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="text-sm font-medium text-gray-500 mt-auto border-t border-gray-100 pt-4">
                    {testimonial.author}
                  </div>
                </div>
                
                {/* Decorative accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-therapy-sage/5 rounded-tl-full"></div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <button className="px-6 py-2.5 md:px-8 md:py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-700/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-xs md:text-sm font-medium tracking-wide">
              VIEW ALL TESTIMONIALS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
