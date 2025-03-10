
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Specialties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specialties = [
    {
      title: "Anxiety Disorders",
      description: "I provide specialized treatment for various anxiety disorders, including generalized anxiety, social anxiety, panic disorder, and specific phobias. Using evidence-based approaches, I help clients understand their anxiety patterns, develop effective coping strategies, and gradually face feared situations to reduce anxiety's impact on daily life.",
      image: "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Depression",
      description: "Depression treatment focuses on identifying and challenging negative thought patterns, increasing engagement in meaningful activities, and developing skills to manage difficult emotions. I provide a supportive environment where clients can explore underlying issues contributing to their depression while learning practical strategies for improving mood and regaining vitality.",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Low Self-Esteem",
      description: "My approach to treating low self-esteem involves helping clients identify and challenge self-critical thoughts, recognize their strengths and achievements, and develop a more balanced self-perspective. Through compassion-focused techniques, clients learn to develop a healthier relationship with themselves and build confidence in their abilities and worth.",
      image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Trauma and PTSD",
      description: "Using trauma-focused approaches, I help clients process traumatic experiences in a safe and controlled manner. Treatment involves understanding how trauma impacts the mind and body, developing skills to manage trauma responses, and gradually processing difficult memories to reduce their emotional impact and facilitate healing.",
      image: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section bg-slate-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 bg-therapy-blue/20 text-primary rounded-full font-medium mb-4 text-sm">
                Specialties
              </span>
              
              <h1 className="text-4xl md:text-5xl font-serif mb-6">
                My Clinical Focus Areas
              </h1>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I specialize in evidence-based treatment for these mental health challenges, with extensive training and experience in each area.
              </p>
            </div>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="space-y-16">
              {specialties.map((specialty, index) => (
                <div key={index} className={`grid md:grid-cols-2 gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`order-2 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="bg-slate-100 h-64 rounded-xl overflow-hidden">
                      <img 
                        src={specialty.image} 
                        alt={specialty.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className={`order-1 ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'} flex flex-col justify-center`}>
                    <h2 className="text-2xl md:text-3xl font-serif mb-4">{specialty.title}</h2>
                    <p className="text-muted-foreground mb-6">{specialty.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="section bg-therapy-sage/10">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">
                Ready to Start Your Journey?
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                Taking the first step can be the hardest part. I'm here to make that step easier. Schedule a free 15-minute consultation to discuss how I can support you.
              </p>
              
              <Link to="/contact">
                <Button className="bg-slate-800 hover:bg-slate-700 px-8 py-6 h-auto text-base inline-flex items-center gap-2">
                  Schedule Your Free Consultation <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-12 border-t border-therapy-blue/10">
        <div className="container mx-auto px-6">
          <div className="mt-12 pt-6 border-t border-therapy-blue/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Tom Holland Pierce. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Specialties;
