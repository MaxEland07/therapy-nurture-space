import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactComponent from "../components/Contact";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block py-1 px-3 bg-therapy-blue/20 text-primary rounded-full font-medium mb-3 text-sm">
                Contact
              </span>
              
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Get in Touch
              </h1>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reach out to schedule a consultation or ask any questions you may have.
              </p>
            </div>
          </div>
        </section>
        
        <ContactComponent />
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

export default Contact;
