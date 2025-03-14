import { useEffect } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ExpertiseComponent from "../components/Expertise";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Expertise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Areas of Specialisation" 
          description="I specialise in helping individuals overcome anxiety, low self-esteem, and depression. Through evidence-based therapy, we'll work together to develop practical strategies for managing these challenges and improving your overall wellbeing."
          pageName="Expertise"
        />
        
        <ExpertiseComponent />
        
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">My Therapeutic Approach</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  I primarily use <strong>Cognitive Behavioural Therapy (CBT)</strong>, which is widely recognised as an 
                  effective treatment for anxiety, depression, and low self-esteem. CBT helps you identify and challenge 
                  unhelpful thought patterns and behaviours that contribute to emotional distress.
                </p>
                
                <p className="mb-4">
                  My approach to therapy is <strong>collaborative and person-centred</strong>. I believe that you are the 
                  expert on your own experiences, and my role is to work alongside you, providing guidance, support, 
                  and evidence-based techniques to help you achieve your goals.
                </p>
                
                <p className="mb-8">
                  Throughout our sessions, we'll work together to develop practical strategies and skills that you can 
                  apply in your daily life. My goal is not only to help you address current challenges but also to 
                  equip you with tools for maintaining positive mental health in the long term.
                </p>
                
                <div className="bg-therapy-light-blue/30 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-medium mb-3">What to Expect in Therapy</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                      <span>A safe, non-judgmental space to explore your thoughts and feelings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                      <span>Personalised treatment tailored to your specific needs and goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                      <span>Practical techniques and strategies you can apply in your daily life</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                      <span>Regular review of progress and adjustment of our approach as needed</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  Book Your Free Consultation <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Expertise;
