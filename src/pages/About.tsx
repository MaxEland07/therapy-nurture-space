
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pb-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block py-1 px-3 bg-therapy-blue/20 text-primary rounded-full font-medium mb-4 text-sm">
                About Me & FAQ
              </span>
              
              <h1 className="text-3xl md:text-5xl font-serif mb-6 text-slate-800">
                Welcome to Holland-Pearse Psychotherapy
              </h1>
              
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                My mission is to provide empathetic and effective psychological therapy that helps people overcome challenges and live more fulfilling lives.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Me Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-therapy-blue/10 -z-10"></div>
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="https://holland-pearse.com/wp-content/uploads/elementor/thumbs/GENERIC-BLANK-TEMPLATE-1-qcsd6k89a4jqs8lk5l572f8xbyels1yh68pdlyf0ls.png" 
                    alt="Tom Holland Pierce"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-therapy-sage/20 -z-10"></div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-6 text-slate-800">
                  My Therapeutic Approach
                </h2>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  I'm Tom, a qualified and accredited CBT Therapist specializing in anxiety, depression, and trauma. I founded Holland-Pearse Psychotherapy to provide evidence-based therapy in a compassionate and non-judgmental environment.
                </p>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  My approach combines Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), and compassion-focused methods to help you develop the skills and insights needed for lasting change.
                </p>
                
                <div className="space-y-3 mb-8">
                  {['BABCP Accredited CBT Therapist', 'MSc in Cognitive Behavioural Therapy', 'BSc in Psychology', 'Specialist training in Trauma-Focused therapies'].map((credential, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-therapy-sage mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{credential}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/expertise">
                    <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
                      View My Expertise
                    </Button>
                  </Link>
                  
                  <Link to="/contact">
                    <Button className="bg-slate-800 hover:bg-slate-700">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block py-1 px-3 bg-therapy-sage/20 text-therapy-sage rounded-full font-medium mb-4 text-sm">
                MY PHILOSOPHY
              </span>
              
              <h2 className="text-2xl md:text-4xl font-serif mb-6 text-slate-800">
                What Guides My Practice
              </h2>
              
              <p className="text-slate-600 leading-relaxed">
                I believe everyone deserves to feel empowered and supported on their journey towards better mental health. My therapeutic approach is built on these core principles:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Compassion-Focused",
                  description: "I create a warm, accepting space where you can explore difficulties without judgment, fostering self-compassion and understanding."
                },
                {
                  title: "Evidence-Based",
                  description: "I use therapeutic approaches backed by scientific research, tailored to your unique needs and circumstances."
                },
                {
                  title: "Collaborative",
                  description: "We work together as a team. Your insights, feedback, and active participation are essential to the therapeutic process."
                }
              ].map((philosophy, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-therapy-blue/10 rounded-full flex items-center justify-center mb-6 text-therapy-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-3 text-slate-800">{philosophy.title}</h3>
                  <p className="text-slate-600">{philosophy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block py-1 px-3 bg-therapy-blue/20 text-primary rounded-full font-medium mb-4 text-sm">
                QUESTIONS & ANSWERS
              </span>
              
              <h2 className="text-2xl md:text-4xl font-serif mb-6 text-slate-800">
                Frequently Asked Questions
              </h2>
              
              <p className="text-slate-600 leading-relaxed">
                Here are answers to some common questions about therapy and my practice. If you have other questions, please don't hesitate to contact me.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="therapy" className="w-full">
                <TabsList className="grid grid-cols-2 mb-8">
                  <TabsTrigger value="therapy" className="text-sm">About Therapy</TabsTrigger>
                  <TabsTrigger value="sessions" className="text-sm">Sessions & Booking</TabsTrigger>
                </TabsList>
                
                <TabsContent value="therapy" className="space-y-6">
                  {[
                    {
                      question: "What is CBT and how does it work?",
                      answer: "Cognitive Behavioural Therapy (CBT) is a practical, evidence-based approach that helps identify and change negative thought patterns and behaviors that contribute to difficulties. It focuses on the connection between thoughts, feelings, and behaviors, empowering you to develop more helpful ways of thinking and acting."
                    },
                    {
                      question: "How do I know if therapy is right for me?",
                      answer: "Therapy can be beneficial for anyone experiencing emotional distress, relationship issues, or wanting personal growth. If you're feeling stuck, overwhelmed, or dealing with specific mental health concerns, therapy provides a supportive space to explore these challenges. We can discuss your specific situation during a free consultation call."
                    },
                    {
                      question: "How long will therapy take?",
                      answer: "The duration of therapy varies depending on your needs and goals. For some specific issues, significant progress can be made in 8-12 sessions. For more complex or long-standing issues, therapy might continue for several months. We'll regularly review progress and adjust as needed."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-slate-200 pb-6">
                      <h3 className="text-lg font-medium mb-3 text-slate-800">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="sessions" className="space-y-6">
                  {[
                    {
                      question: "How do sessions work?",
                      answer: "Sessions are typically 50 minutes long and held weekly, either online via secure video platform or in-person at my London office. We'll work collaboratively, with a structured yet flexible approach tailored to your needs and therapeutic goals."
                    },
                    {
                      question: "Is everything I share confidential?",
                      answer: "Confidentiality is a cornerstone of therapy. Everything discussed remains private, with few exceptions related to risk of harm to yourself or others, as required by law and professional ethics. I'll explain these limitations in detail before beginning therapy."
                    },
                    {
                      question: "How do I book an appointment?",
                      answer: "Starting is simple. You can schedule a free 15-minute consultation through my online booking system or by contacting me directly. This initial call helps us determine if we're a good fit and discuss your needs before committing to therapy."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-slate-200 pb-6">
                      <h3 className="text-lg font-medium mb-3 text-slate-800">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-therapy-sage/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif mb-6 text-slate-800">
                Ready to Begin Your Journey?
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed">
                Taking the first step can be the hardest part. I'm here to make that step easier. Schedule a free 15-minute consultation to discuss how I can support you.
              </p>
              
              <Link to="/contact">
                <Button className="bg-slate-800 hover:bg-slate-700 px-8 py-6 h-auto text-base">
                  Schedule Your Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
