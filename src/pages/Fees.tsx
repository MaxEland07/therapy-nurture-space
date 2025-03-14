import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Fees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const feesRef = useRef<HTMLDivElement>(null);
  
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
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
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-therapy-navy/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-therapy-navy/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              
              {/* Fee Structure */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              >
                {/* Initial Consultation */}
                <motion.div 
                  variants={itemVariants}
                  className="rounded-lg p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-therapy-navy/10 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-medium mb-4 font-serif text-therapy-navy">Initial 15 Minute Consultation</h3>
                  <p className="text-3xl font-bold mb-2 text-therapy-navy">Free</p>
                  <p className="text-slate-600 mb-6">15 minute call</p>
                  <p className="text-slate-700">Before we embark on your journey of recovery, it's useful to make sure you feel I'm the right therapist for you, and that your issues are something I'm able to work with. This call allows us to get to know each other, discuss your concerns, and explore if therapy is the right fit for you.</p>
                </motion.div>
                
                {/* Treatment Sessions */}
                <motion.div 
                  variants={itemVariants}
                  className="rounded-lg p-6 bg-therapy-navy text-white shadow-md hover:shadow-xl transition-all duration-300 border border-therapy-navy transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-medium mb-4 font-serif">Treatment Sessions</h3>
                  <p className="text-3xl font-bold mb-2">£110</p>
                  <p className="text-white/80 mb-6">per hour session</p>
                  <p className="text-white/90">Embark on a Transformative Journey of Recovery with Personalized CBT Therapy: Each step of your therapy journey will be carefully guided and supported, ensuring you have the tools and resources to overcome your challenges and reclaim your well-being.</p>
                </motion.div>
                
                {/* Aftercare */}
                <motion.div 
                  variants={itemVariants}
                  className="rounded-lg p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-therapy-navy/10 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-medium mb-4 font-serif text-therapy-navy">Preventing Relapse and Aftercare</h3>
                  <p className="text-3xl font-bold mb-2 text-therapy-navy">Priceless</p>
                  <p className="text-slate-600 mb-6">Included in your therapy</p>
                  <p className="text-slate-700">Your final session(s) will be spent on developing a robust, personalised Relapse Prevention plan which helps ensure you maintain your recovery well beyond the therapy sessions and into your career, relationships and life.</p>
                </motion.div>
              </motion.div>
              
              {/* Single Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-16"
              >
                <Button size="lg" className="px-8 py-6 bg-therapy-navy hover:bg-therapy-navy/90 text-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <Calendar className="mr-2 h-5 w-5" />
                  Begin Your Therapy Journey
                </Button>
                <p className="mt-4 text-slate-600 max-w-lg mx-auto">
                  Start with a free consultation and discover how we can work together to achieve your mental health goals.
                </p>
              </motion.div>
              
              {/* Testimonial */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-gradient-to-r from-therapy-navy/10 to-therapy-navy/5 p-8 rounded-lg mb-16 shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-lg"></div>
                <blockquote className="italic text-lg text-slate-700 mb-6 relative z-10">
                  "Tom is hands down the best therapist I have ever worked with. He really understood where I was coming from and I shared with him things that I have told absolutely no one, and Truly feel this is testament to his skill and rapport. Thank you Tom for all your support and keeping me floating during this pivotal time in my life."
                </blockquote>
                <p className="text-right font-medium text-therapy-navy">— Client</p>
              </motion.div>
              
              {/* Why Invest */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-serif mb-6 text-center text-therapy-navy">
                  Investing in Your Mental Well-being
                </h2>
                <h3 className="text-xl font-serif mb-4 text-therapy-navy">
                  Why This Investment in Therapy Matters
                </h3>
                <p className="mb-6 text-slate-600">
                  I understand that therapy is a significant investment, and I am committed to ensuring that every session delivers real value. My fees reflect:
                </p>
                
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
                      <Check className="h-5 w-5 text-therapy-navy mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Insurance Partners */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h3 className="text-xl font-serif mb-6 text-center text-therapy-navy">Health Insurance Partners</h3>
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
                      className="p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 text-center text-therapy-navy font-medium flex items-center justify-center border border-therapy-navy/10"
                    >
                      {partner}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Overcome Fear */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-20"
              >
                <h2 className="text-2xl font-serif mb-4 text-therapy-navy">Overcome fear and realise your potential</h2>
                <p className="mb-6 max-w-2xl mx-auto text-slate-600">I help you find your value and worth, so that you can start living the life you've always wished for. Book your first consultation with me and take your first step towards personal growth today.</p>
                <Button size="lg" className="px-8 bg-therapy-navy hover:bg-therapy-navy/90">Schedule Your Consultation</Button>
              </motion.div>
              
              {/* My Process */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-serif mb-10 text-center text-therapy-navy">How My Process Works</h2>
                
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
                      description: "We'll use weekly remote sessions to help eliminate costly room bookings, increase accessibility, and allow you to access therapy from wherever you choose. We will apply practical CBT strategies to help you overcome your problems."
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
                      className="text-center bg-white p-6 rounded-lg shadow-md border border-therapy-navy/10"
                    >
                      <div className="bg-therapy-navy/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-serif font-bold text-lg text-therapy-navy">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-therapy-navy">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Start Your Narrative */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-therapy-navy p-8 rounded-lg text-center mb-16 shadow-md text-white"
              >
                <h2 className="text-2xl font-serif mb-4">Start Your New Narrative Today</h2>
                <Button size="lg" className="mb-2 bg-white text-therapy-navy hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1">
                  Schedule a Meeting <ChevronRight className="ml-1" />
                </Button>
              </motion.div>
              
              {/* Payment and Additional Info */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-12 space-y-8 mb-16"
              >
                <h2 className="text-2xl font-serif mb-6 text-center text-therapy-navy">Additional Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Payment Methods",
                      description: "Payment is accepted via bank transfer, credit/debit card, or health insurance. Payment details will be provided after booking."
                    },
                    {
                      title: "Cancellations",
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
                      className="bg-white p-6 rounded-lg shadow-md border border-therapy-navy/10 hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="text-xl font-serif mb-4 text-therapy-navy">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Ready to Embark */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-br from-therapy-navy/20 to-therapy-navy/5 p-8 rounded-lg text-center shadow-lg mb-16"
              >
                <h2 className="text-2xl font-serif mb-4 text-therapy-navy">Ready to Embark on Your Journey to Recovery?</h2>
                <p className="mb-6 text-slate-700">If you're tired of struggling with Depression, Anxiety, and Low Self-Esteem, it's time to take action. I invite you to schedule a consultation today to discuss how CBT Therapy can help you overcome these challenges and reclaim your wellbeing.</p>
                <Link to="/contact">
                  <Button size="lg" className="px-8 bg-therapy-navy hover:bg-therapy-navy/90 transform transition-transform hover:-translate-y-1">
                    Schedule a Call <ChevronRight className="ml-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Fees;
