
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import Contact from "../components/Contact";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
        
        {/* Testimonials Section - Mobile Friendly */}
        <section className="section bg-white py-16 md:py-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block py-1 px-3 bg-therapy-blue/30 text-primary rounded-full font-medium mb-4 text-sm">
                Client Experiences
              </span>
              
              <h2 className="text-3xl md:text-4xl font-serif mb-4 md:mb-6">
                Transformative Journeys
              </h2>
              
              <p className="text-muted-foreground max-w-2xl mx-auto px-4">
                Read about how therapy has helped others overcome challenges and improve their wellbeing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-therapy-cream p-5 md:p-6 rounded-xl shadow-sm border border-therapy-blue/10 transition-transform hover:transform hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-therapy-blue/20 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <span className="font-serif text-lg md:text-xl">{String.fromCharCode(64 + i)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Client {String.fromCharCode(64 + i)}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">Anxiety & Depression</p>
                    </div>
                  </div>
                  
                  <p className="italic text-muted-foreground mb-4 text-sm md:text-base">
                    "Working with Tom has been transformative. His compassionate approach and practical 
                    techniques helped me manage my anxiety in ways I never thought possible."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 md:mt-12">
              <Button asChild className="btn-primary">
                <Link to="/blog">Read More Testimonials</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <Contact />
        
        {/* CTA Section - Mobile Friendly */}
        <section className="py-16 md:py-20 bg-therapy-blue/5 overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6 px-4">
                Begin Your Journey to Better Mental Health Today
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Take the first step towards a healthier mind. Whether you're dealing with anxiety, 
                depression, or other challenges, I'm here to support you.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Book Your Free Consultation</Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative elements - hidden on mobile */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 rounded-full bg-therapy-blue/10 -ml-32 hidden md:block" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-therapy-light-blue/30 -mr-20 -mb-20 hidden md:block" aria-hidden="true" />
        </section>
      </main>
      
      {/* Mobile-friendly footer */}
      <footer className="bg-white py-10 md:py-12 border-t border-therapy-blue/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-serif text-lg md:text-xl mb-3 md:mb-4">Tom Holland Pierce</h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                Qualified and Accredited CBT Therapist providing effective mental health 
                solutions in Bristol and online.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-1 md:space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary text-xs md:text-sm">Home</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary text-xs md:text-sm">About & FAQ</Link></li>
                <li><Link to="/expertise" className="text-muted-foreground hover:text-primary text-xs md:text-sm">Expertise</Link></li>
                <li><Link to="/fees" className="text-muted-foreground hover:text-primary text-xs md:text-sm">Fees</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-sm md:text-base">Services</h4>
              <ul className="space-y-1 md:space-y-2">
                <li><Link to="/expertise" className="text-muted-foreground hover:text-primary text-xs md:text-sm">Anxiety & Stress</Link></li>
                <li><Link to="/expertise" className="text-muted-foreground hover:text-primary text-xs md:text-sm">Depression</Link></li>
                <li><Link to="/expertise" className="text-muted-foreground hover:text-primary text-xs md:text-sm">Trauma & PTSD</Link></li>
                <li><Link to="/expertise" className="text-muted-foreground hover:text-primary text-xs md:text-sm">Relationship Issues</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium mb-3 text-sm md:text-base">Contact</h4>
              <ul className="space-y-1 md:space-y-2">
                <li className="text-muted-foreground text-xs md:text-sm">Bristol Therapy Centre</li>
                <li className="text-muted-foreground text-xs md:text-sm">123 Clifton Avenue</li>
                <li className="text-muted-foreground text-xs md:text-sm">Bristol, BS8 1AB</li>
                <li className="text-muted-foreground text-xs md:text-sm">contact@tomhollandpierce.com</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-therapy-blue/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Tom Holland Pierce. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-xs md:text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-xs md:text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
