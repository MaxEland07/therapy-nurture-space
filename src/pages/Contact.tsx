import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactComponent from "../components/Contact";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

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
      
      <Footer />
    </div>
  );
};

export default Contact;
