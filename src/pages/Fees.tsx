
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Fees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="Session Fees" 
        description="Investing in your mental health and emotional wellbeing."
        pageName="Fees"
      />
      
      <main className="flex-grow">
        <section className="section bg-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              
              {/* Fee Structure */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {/* Initial Consultation */}
                <div className="border border-therapy-blue/20 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-4 font-serif">Initial 15 Minute Consultation</h3>
                  <p className="text-3xl font-bold mb-2 text-therapy-sage">Free</p>
                  <p className="text-slate-600 mb-6">15 minute call</p>
                  <p className="mb-6">Before we embark on your journey of recovery, it's useful to make sure you feel I'm the right therapist for you, and that your issues are something I'm able to work with. This call allows us to get to know each other, discuss your concerns, and explore if therapy is the right fit for you. We can also answer any questions you may have about the process. Let's take the first step towards your well-being!</p>
                  <Button className="w-full flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                </div>
                
                {/* Treatment Sessions */}
                <div className="border border-therapy-blue/20 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-4 font-serif">Treatment Sessions</h3>
                  <p className="text-3xl font-bold mb-2 text-therapy-sage">£110</p>
                  <p className="text-slate-600 mb-6">per hour session</p>
                  <p className="mb-6">Embark on a Transformative Journey of Recovery with Personalized CBT Therapy: Each step of your therapy journey will be carefully guided and supported, ensuring you have the tools and resources to overcome your challenges and reclaim your well-being. CBT Therapy usually lasts somewhere between 6-15 sessions, but this very much depends on the individual and may vary.</p>
                  <Button className="w-full flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Session
                  </Button>
                </div>
                
                {/* Aftercare */}
                <div className="border border-therapy-blue/20 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-4 font-serif">Preventing relapse and Aftercare</h3>
                  <p className="text-3xl font-bold mb-2 text-therapy-sage">Priceless</p>
                  <p className="text-slate-600 mb-6">Included in your therapy</p>
                  <p className="mb-6">Your final session(s) will be spent on develop a robust, personalised, Relapse Prevention plan which helps ensure you maintain your recovery well beyond the therapy sessions and into your career, relationships and life.</p>
                  <Button className="w-full flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Button>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-therapy-light-blue/10 p-8 rounded-lg mb-16">
                <blockquote className="italic text-lg text-slate-700 mb-6">
                  "Tom is hands down the best therapist I have ever worked with. He really understood where I was coming from and I shared with him things that I have told absolutely no one, and Truly feel this is testament to his skill and rapport. Thank you Tom for all your support and keeping me floating during this pivotal time in my life. I appreciate all you have taught me and will take the techniques forward with me in my life."
                </blockquote>
                <p className="text-right font-medium text-therapy-sage">— Client</p>
              </div>
              
              {/* Why Invest */}
              <div className="mb-16">
                <h2 className="text-2xl font-serif mb-6 text-center">Investing in Your Mental Well-being</h2>
                <h3 className="text-xl font-serif mb-4">Why This Investment in Therapy Matters</h3>
                <p className="mb-6">I understand that therapy is a significant investment, and I am committed to ensuring that every session delivers real value. My fees reflect:</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                    <span>Expertise & Ongoing Training – Continuous professional development to offer the most effective, evidence-based therapy.</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tailored, Results-Driven Support – Sessions designed to create lasting change, not just short-term relief.</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                    <span>Confidential & Professional Service – Secure, ethical, and high-quality care.</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                    <span>Flexible & Individualized Approach – Support that adapts to your unique needs and goals.</span>
                  </div>
                </div>
              </div>
              
              {/* Insurance Partners */}
              <div className="mb-16">
                <h3 className="text-xl font-serif mb-6 text-center">Health Insurance Partners</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-9 gap-4 text-center">
                  <div className="p-2 bg-gray-50 rounded-md">think cbt</div>
                  <div className="p-2 bg-gray-50 rounded-md">nuffield</div>
                  <div className="p-2 bg-gray-50 rounded-md">healix</div>
                  <div className="p-2 bg-gray-50 rounded-md">counselling directory</div>
                  <div className="p-2 bg-gray-50 rounded-md">vitality</div>
                  <div className="p-2 bg-gray-50 rounded-md">bupa</div>
                  <div className="p-2 bg-gray-50 rounded-md">axa</div>
                  <div className="p-2 bg-gray-50 rounded-md">aetna</div>
                  <div className="p-2 bg-gray-50 rounded-md">psych today</div>
                </div>
              </div>
              
              {/* Overcome Fear */}
              <div className="text-center mb-20">
                <h2 className="text-2xl font-serif mb-4">Overcome fear and realise your potential</h2>
                <p className="mb-6 max-w-2xl mx-auto">I help you find your value and worth, so that you can start living the life you've always wished for. Book your first consultation with me and take your first step towards personal growth today.</p>
                <Button size="lg" className="px-8">Schedule Your Consultation</Button>
              </div>
              
              {/* My Process */}
              <div className="mb-16">
                <h2 className="text-2xl font-serif mb-10 text-center">How My Process Works</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-therapy-light-blue/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-serif font-bold text-lg">01.</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Book Your Online Consultation Today</h3>
                    <p>We'll use a 60 minute slot to discuss what has brought you to therapy, a thorough exploration of your symptoms, your therapy goals, and design a bespoke treatment plan for you.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-therapy-light-blue/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-serif font-bold text-lg">02.</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Online or In-Person Sessions</h3>
                    <p>We'll use weekly remote sessions to to help eliminate costly room bookings, increase accessibility, and allow you to access therapy from wherever you choose. We will discuss and apply practical CBT strategies to help you overcome your problems and move towards your goals.</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-therapy-light-blue/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-serif font-bold text-lg">03.</span>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Success Beyond the Therapy Sessions</h3>
                    <p>As your journey towards success and growth develops, we will devise a robust relapse prevention plan designed to ensure your progress continues well beyond the therapy sessions.</p>
                  </div>
                </div>
              </div>
              
              {/* Start Your Narrative */}
              <div className="bg-therapy-light-blue/10 p-8 rounded-lg text-center mb-16">
                <h2 className="text-2xl font-serif mb-4">Start Your New Narrative Today</h2>
                <Button size="lg" className="mb-2">Schedule a Meeting</Button>
              </div>
              
              {/* More Process Details */}
              <div className="mb-16">
                <h2 className="text-2xl font-serif mb-8 text-center">How My Process Works</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Schedule an Initial Consultation</h3>
                    <p>This will take place over the telephone. We will use this time to discuss your problems in detail. We will consider available treatment options and decide on a plan for tackling your issues.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Book Sessions</h3>
                    <p>These last 60 minutes. Sessions are held either remotely or in-person, to suit your needs. You will be provided with the knowledge and tools to equip you for dealing with your issues.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Engage with your Potential</h3>
                    <p>Experience your growth by overcoming your challenges and difficulties.</p>
                  </div>
                </div>
              </div>
              
              {/* Ready to Embark */}
              <div className="bg-therapy-light-blue/10 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-serif mb-4">Ready to Embark on Your Journey to Recovery?</h2>
                <p className="mb-6">If you're tired of struggling with Depression, Anxiety, and Low Self-Esteem, it's time to take action. I invite you to schedule a consultation today to discuss how CBT Therapy can help you overcome these challenges and reclaim your wellbeing.</p>
                <p className="mb-6">Schedule your consultation today and take your first step towards a brighter and more fulfilling future.</p>
                <Link to="/contact">
                  <Button size="lg" className="px-8">Schedule a Call</Button>
                </Link>
              </div>
              
              {/* Additional Info */}
              <div className="mt-12 space-y-8">
                <div className="bg-white p-6 rounded-lg border border-therapy-blue/10">
                  <h3 className="text-xl font-serif mb-4">Payment Methods</h3>
                  <p>Payment is accepted via bank transfer, credit/debit card, or health insurance. Payment details will be provided after booking.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-therapy-blue/10">
                  <h3 className="text-xl font-serif mb-4">Cancellations and non-attendance</h3>
                  <p>I require 48 hours' notice for cancellations. Late cancellations or missed appointments may be charged the full session fee, except in cases of emergency.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-therapy-blue/10">
                  <h3 className="text-xl font-serif mb-4">Confidentiality</h3>
                  <p>All sessions are completely confidential. Your privacy is paramount, and information is only shared in exceptional circumstances where there is risk of harm.</p>
                </div>
              </div>
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
