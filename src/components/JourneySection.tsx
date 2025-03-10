import React from "react";
import { Link } from "react-router-dom";

const JourneySection = () => {
  const journeySteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "A safe space to discuss your concerns and establish therapeutic goals.",
      icon: "👋"
    },
    {
      number: "02",
      title: "Personalized Therapy",
      description: "Evidence-based approaches tailored to your specific needs and challenges.",
      icon: "🧠"
    },
    {
      number: "03",
      title: "Continued Growth",
      description: "Develop lasting tools and insights to maintain positive mental health.",
      icon: "🌱"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Curved path element */}
      <div className="absolute top-0 left-0 right-0 z-0">
        <svg width="100%" height="300" viewBox="0 0 1440 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C320,80 720,160 1440,30 L1440,300 L0,300 Z" fill="#f8fafc" opacity="0.5"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">Your Therapeutic Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The path to better mental health is unique for each person. We'll walk alongside 
            you every step of the way on your journey to healing and growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line between steps */}
          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-slate-100 hidden md:block"></div>
          
          {journeySteps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-100 relative z-10">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 text-2xl">
                {step.icon}
              </div>
              <div className="text-slate-400 font-light mb-2">{step.number}</div>
              <h3 className="text-xl font-medium text-slate-800 mb-4">{step.title}</h3>
              <p className="text-slate-600 mb-6">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Journey continuation with flowing line */}
        <div className="mt-20 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 transform -translate-y-1/2"></div>
          <div className="relative z-10 flex justify-center">
            <Link 
              to="/about" 
              className="bg-slate-700 text-white px-8 py-3 rounded-full hover:bg-slate-600 transition-colors"
            >
              Learn About Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection; 