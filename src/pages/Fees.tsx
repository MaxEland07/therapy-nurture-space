
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Fees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const feesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      
      <PageHeader 
        title="Session Fees" 
        description="Investing in your mental health and emotional wellbeing."
        pageName="Fees"
      />
      
      <main className="flex-grow" ref={feesRef}>
        <section className="py-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-therapy-light-blue/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-therapy-light-blue/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              
              {/* Fee Structure */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {/* Initial Consultation */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-medium mb-4 font-serif text-slate-800">Initial 15 Minute Consultation</h3>
                  <p className="text-3xl font-bold mb-2 text-therapy-blue">Free</p>
                  <p className="text-slate-600 mb-6">15 minute call</p>
                  <p className="mb-6 text-slate-700">Before we embark on your journey of recovery, it's useful to make sure you feel I'm the right therapist for you, and that your issues are something I'm able to work with. This call allows us to get to know each other, discuss your concerns, and explore if therapy is the right fit for you. We can also answer any questions you may have about the process. Let's take the first step towards your well-being!</p>
                  <Button className="w-full flex items-center justify-center bg-therapy-blue hover:bg-therapy-blue/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                </motion.div>
                
                {/* Treatment Sessions */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-medium mb-4 font-serif text-slate-800">Treatment Sessions</h3>
                  <p className="text-3xl font-bold mb-2 text-therapy-blue">£110</p>
                  <p className="text-slate-600 mb-6">per hour session</p>
                  <p className="mb-6 text-slate-700">Embark on a Transformative Journey of Recovery with Personalized CBT Therapy: Each step of your therapy journey will be carefully guided and supported, ensuring you have the tools and resources to overcome your challenges and reclaim your well-being. CBT Therapy usually lasts somewhere between 6-15 sessions, but this very much depends on the individual and may vary.</p>
                  <Button className="w-full flex items-center justify-center bg-therapy-blue hover:bg-therapy-blue/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Session
                  </Button>
                </motion.div>
                
                {/* Aftercare */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-medium mb-4 font-serif text-slate-800">Preventing relapse and Aftercare</h3>
                  <p className="text-3xl font-bold mb-2 text-therapy-blue">Priceless</p>
                  <p className="text-slate-600 mb-6">Included in your therapy</p>
                  <p className="mb-6 text-slate-700">Your final session(s) will be spent on develop a robust, personalised, Relapse Prevention plan which helps ensure you maintain your recovery well beyond the therapy sessions and into your career, relationships and life.</p>
                  <Button className="w-full flex items-center justify-center bg-therapy-blue hover:bg-therapy-blue/90">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                </motion.div>
              </div>
              
              {/* Testimonial */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-therapy-light-blue/20 p-8 rounded-lg mb-16 shadow-sm relative overflow-hidden animate-pulse-subtle"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-lg"></div>
                <blockquote className="italic text-lg text-slate-700 mb-6 relative z-10">
                  "Tom is hands down the best therapist I have ever worked with. He really understood where I was coming from and I shared with him things that I have told absolutely no one, and Truly feel this is testament to his skill and rapport. Thank you Tom for all your support and keeping me floating during this pivotal time in my life. I appreciate all you have taught me and will take the techniques forward with me in my life."
                </blockquote>
                <p className="text-right font-medium text-slate-700">— Client</p>
              </motion.div>
              
              {/* Why Invest */}
              <div className="mb-16 reveal opacity-0">
                <motion.h2 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-serif mb-6 text-center text-slate-800"
                >
                  Investing in Your Mental Well-being
                </motion.h2>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl font-serif mb-4 text-slate-700"
                >
                  Why This Investment in Therapy Matters
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6 text-slate-600"
                >
                  I understand that therapy is a significant investment, and I am committed to ensuring that every session delivers real value. My fees reflect:
                </motion.p>
                
                <div className="space-y-3 mb-8">
                  {[
                    "Expertise & Ongoing Training – Continuous professional development to offer the most effective, evidence-based therapy.",
                    "Tailored, Results-Driven Support – Sessions designed to create lasting change, not just short-term relief.",
                    "Confidential & Professional Service – Secure, ethical, and high-quality care.",
                    "Flexible & Individualized Approach – Support that adapts to your unique needs and goals."
                  ].map((point, index) => (
                    <motion.div 
                      key={index}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUpVariants}
                      className="flex items-start"
                    >
                      <Check className="h-5 w-5 text-therapy-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Insurance Partners */}
              <div className="mb-16 reveal opacity-0">
                <h3 className="text-xl font-serif mb-6 text-center text-slate-800">Health Insurance Partners</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-9 gap-4">
                  {[
                    "think cbt", "nuffield", "healix", "counselling directory", "vitality", 
                    "bupa", "axa", "aetna", "psych today"
                  ].map((partner, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      className="p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 text-center text-slate-700 font-medium flex items-center justify-center border border-slate-100"
                    >
                      {partner}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Overcome Fear */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-20 reveal opacity-0"
              >
                <h2 className="text-2xl font-serif mb-4 text-slate-800">Overcome fear and realise your potential</h2>
                <p className="mb-6 max-w-2xl mx-auto text-slate-600">I help you find your value and worth, so that you can start living the life you've always wished for. Book your first consultation with me and take your first step towards personal growth today.</p>
                <Button size="lg" className="px-8 bg-therapy-blue hover:bg-therapy-blue/90 animate-float">Schedule Your Consultation</Button>
              </motion.div>
              
              {/* My Process */}
              <div className="mb-16 reveal opacity-0">
                <h2 className="text-2xl font-serif mb-10 text-center text-slate-800">How My Process Works</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      step: "01",
                      title: "Book Your Online Consultation Today",
                      description: "We'll use a 60 minute slot to discuss what has brought you to therapy, a thorough exploration of your symptoms, your therapy goals, and design a bespoke treatment plan for you."
                    },
                    {
                      step: "02",
                      title: "Online or In-Person Sessions",
                      description: "We'll use weekly remote sessions to to help eliminate costly room bookings, increase accessibility, and allow you to access therapy from wherever you choose. We will discuss and apply practical CBT strategies to help you overcome your problems and move towards your goals."
                    },
                    {
                      step: "03",
                      title: "Success Beyond the Therapy Sessions",
                      description: "As your journey towards success and growth develops, we will devise a robust relapse prevention plan designed to ensure your progress continues well beyond the therapy sessions."
                    }
                  ].map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="bg-therapy-light-blue/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-serif font-bold text-lg text-slate-700">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-slate-700">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Start Your Narrative */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-therapy-blue/10 to-therapy-light-blue/30 p-8 rounded-lg text-center mb-16 shadow-md"
              >
                <h2 className="text-2xl font-serif mb-4 text-slate-800">Start Your New Narrative Today</h2>
                <Button size="lg" className="mb-2 bg-white text-therapy-blue hover:bg-slate-50 border border-therapy-blue/30 transition-all duration-300 transform hover:-translate-y-1">
                  Schedule a Meeting <ChevronRight className="ml-1" />
                </Button>
              </motion.div>
              
              {/* More Process Details */}
              <div className="mb-16 reveal opacity-0">
                <h2 className="text-2xl font-serif mb-8 text-center text-slate-800">How My Process Works</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      title: "Schedule an Initial Consultation",
                      description: "This will take place over the telephone. We will use this time to discuss your problems in detail. We will consider available treatment options and decide on a plan for tackling your issues."
                    },
                    {
                      title: "Book Sessions",
                      description: "These last 60 minutes. Sessions are held either remotely or in-person, to suit your needs. You will be provided with the knowledge and tools to equip you for dealing with your issues."
                    },
                    {
                      title: "Engage with your Potential",
                      description: "Experience your growth by overcoming your challenges and difficulties."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <h3 className="text-lg font-medium mb-2 text-slate-700 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-therapy-blue/10 text-therapy-blue flex items-center justify-center mr-3 text-sm">{index + 1}</span>
                        {item.title}
                      </h3>
                      <p className="text-slate-600 ml-9">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Ready to Embark */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-br from-therapy-light-blue/30 to-therapy-blue/10 p-8 rounded-lg text-center shadow-lg"
              >
                <h2 className="text-2xl font-serif mb-4 text-slate-800">Ready to Embark on Your Journey to Recovery?</h2>
                <p className="mb-6 text-slate-700">If you're tired of struggling with Depression, Anxiety, and Low Self-Esteem, it's time to take action. I invite you to schedule a consultation today to discuss how CBT Therapy can help you overcome these challenges and reclaim your wellbeing.</p>
                <p className="mb-6 text-slate-700">Schedule your consultation today and take your first step towards a brighter and more fulfilling future.</p>
                <Link to="/contact">
                  <Button size="lg" className="px-8 bg-slate-700 hover:bg-slate-800 transform transition-transform hover:-translate-y-1">
                    Schedule a Call <ChevronRight className="ml-1" />
                  </Button>
                </Link>
              </motion.div>
              
              {/* Additional Info */}
              <div className="mt-12 space-y-8 reveal opacity-0">
                {[
                  {
                    title: "Payment Methods",
                    description: "Payment is accepted via bank transfer, credit/debit card, or health insurance. Payment details will be provided after booking."
                  },
                  {
                    title: "Cancellations and non-attendance",
                    description: "I require 48 hours' notice for cancellations. Late cancellations or missed appointments may be charged the full session fee, except in cases of emergency."
                  },
                  {
                    title: "Confidentiality",
                    description: "All sessions are completely confidential. Your privacy is paramount, and information is only shared in exceptional circumstances where there is risk of harm."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-serif mb-4 text-slate-800">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
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

export default Fees;
