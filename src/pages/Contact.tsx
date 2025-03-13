import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactComponent from "../components/Contact";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Contact Me" 
          description="I'm here to help you overcome anxiety, low self-esteem, and depression. If you have any questions or would like to book an appointment, please get in touch using the form below."
          pageName="Contact" 
        />
        
        <ContactComponent />
      </main>
      
      <footer className="bg-white py-12 border-t border-tom-light-blue/10">
        <div className="container mx-auto px-6">
          <div className="mt-12 pt-6 border-t border-tom-light-blue/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Tom Holland Pierce. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <Link to="/privacy" className="text-muted-foreground hover:text-tom-navy text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-tom-navy text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
