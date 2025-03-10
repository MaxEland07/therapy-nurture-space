
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Expertise />
        
        {/* Testimonials Section */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 bg-therapy-blue/30 text-primary rounded-full font-medium mb-4 text-sm">
                Client Experiences
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Transformative Journeys
              </h2>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Read about how therapy has helped others overcome challenges and improve their wellbeing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-therapy-cream p-6 rounded-xl shadow-sm border border-therapy-blue/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-therapy-blue/20 rounded-full flex items-center justify-center mr-4">
                      <span className="font-serif text-xl">{String.fromCharCode(64 + i)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Client {String.fromCharCode(64 + i)}</h4>
                      <p className="text-sm text-muted-foreground">Anxiety & Depression</p>
                    </div>
                  </div>
                  
                  <p className="italic text-muted-foreground mb-4">
                    "Working with Tom has been transformative. His compassionate approach and practical 
                    techniques helped me manage my anxiety in ways I never thought possible."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="btn-primary">Read More Testimonials</Button>
            </div>
          </div>
        </section>
        
        <Contact />
        
        {/* CTA Section */}
        <section className="py-20 bg-therapy-blue/10 overflow-hidden relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Begin Your Journey to Better Mental Health Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Take the first step towards a healthier mind. Whether you're dealing with anxiety, 
                depression, or other challenges, I'm here to support you.
              </p>
              <Button className="btn-primary">Book Your Free Consultation</Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 rounded-full bg-therapy-blue/20 -ml-32" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-therapy-light-blue/50 -mr-20 -mb-20" />
        </section>
      </main>
      
      <footer className="bg-white py-12 border-t border-therapy-blue/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Tom Holland Pierce</h3>
              <p className="text-muted-foreground text-sm">
                Qualified and Accredited CBT Therapist providing effective mental health 
                solutions in Bristol and online.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-muted-foreground hover:text-primary text-sm">Home</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-primary text-sm">About & FAQ</a></li>
                <li><a href="/expertise" className="text-muted-foreground hover:text-primary text-sm">Expertise</a></li>
                <li><a href="/fees" className="text-muted-foreground hover:text-primary text-sm">Fees</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/expertise" className="text-muted-foreground hover:text-primary text-sm">Anxiety & Stress</a></li>
                <li><a href="/expertise" className="text-muted-foreground hover:text-primary text-sm">Depression</a></li>
                <li><a href="/expertise" className="text-muted-foreground hover:text-primary text-sm">Trauma & PTSD</a></li>
                <li><a href="/expertise" className="text-muted-foreground hover:text-primary text-sm">Relationship Issues</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground text-sm">Bristol Therapy Centre</li>
                <li className="text-muted-foreground text-sm">123 Clifton Avenue</li>
                <li className="text-muted-foreground text-sm">Bristol, BS8 1AB</li>
                <li className="text-muted-foreground text-sm">contact@tomhollandpierce.com</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-therapy-blue/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Tom Holland Pierce. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a href="/privacy" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</a>
              <a href="/terms" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
