import { useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Holland-Pearse transformed my approach to anxiety. The tools I've gained are invaluable for my daily life.",
      author: "Sarah M.",
      location: "Bristol"
    },
    {
      quote: "After struggling with depression for years, I finally found a therapist who truly understood my experience. I'm deeply grateful.",
      author: "James K.",
      location: "Online Client"
    },
    {
      quote: "The therapy sessions helped me process trauma I'd been carrying for decades. I feel lighter and more present than ever before.",
      author: "Melissa R.",
      location: "Bath"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Flowing curved elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-100 rounded-full opacity-30 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-sm rounded-full mb-4">Client Stories</span>
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">Transformative Experiences</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 relative">
            {/* Decorative quotes icon */}
            <div className="absolute top-6 left-6 text-slate-100 text-6xl font-serif">"</div>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                } p-8 md:p-12`}
              >
                <blockquote>
                  <p className="text-xl md:text-2xl font-light text-slate-700 mb-8 relative z-10">
                    {testimonial.quote}
                  </p>
                  <footer>
                    <div className="font-medium text-slate-800">{testimonial.author}</div>
                    <div className="text-slate-500 text-sm">{testimonial.location}</div>
                  </footer>
                </blockquote>
              </div>
            ))}
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-slate-700" : "bg-slate-200"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 