
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const Fees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="Fees & Services" 
        description="Investment in your mental health and emotional wellbeing."
        pageName="Fees"
      />
      
      <main className="flex-grow">
        <section className="section bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <p className="text-lg mb-8 text-slate-700">
                Therapy is an investment in your mental health and emotional wellbeing. I provide transparent pricing
                and flexible options to make therapy accessible for your needs.
              </p>
              
              <div className="bg-therapy-light-blue/20 p-6 rounded-lg mb-10">
                <h3 className="text-xl font-serif mb-4 text-slate-800">Health Insurance</h3>
                <p className="mb-2">I am registered with most major health insurance providers. If you have health insurance
                that covers therapy sessions, please contact your provider to confirm your coverage before booking.</p>
                <p className="font-medium">Insurance providers I work with include: Axa, Aviva, Bupa, Cigna, Vitality, and WPA.</p>
              </div>
              
              <Tabs defaultValue="individual" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="individual" className="text-base">Individual Therapy</TabsTrigger>
                  <TabsTrigger value="couples" className="text-base">Couples Therapy</TabsTrigger>
                </TabsList>
                
                <TabsContent value="individual" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-therapy-blue/20 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-medium mb-4 font-serif">Initial Consultation</h3>
                      <p className="text-3xl font-bold mb-2 text-therapy-sage">£75</p>
                      <p className="text-slate-600 mb-6">50 minute session</p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Discuss your therapy goals</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Explore your current challenges</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Determine if we're a good fit</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Plan your therapy journey</span>
                        </li>
                      </ul>
                      <Button className="w-full">Book Consultation</Button>
                    </div>
                    
                    <div className="border border-therapy-blue/20 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-medium mb-4 font-serif">Ongoing Sessions</h3>
                      <p className="text-3xl font-bold mb-2 text-therapy-sage">£90</p>
                      <p className="text-slate-600 mb-6">50 minute session</p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Regular weekly or fortnightly sessions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>In-person or online options</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Tailored therapeutic approach</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Flexible scheduling</span>
                        </li>
                      </ul>
                      <Button className="w-full">Book Session</Button>
                    </div>
                  </div>
                  
                  <div className="bg-therapy-light-blue/10 p-6 rounded-lg">
                    <h3 className="text-xl font-serif mb-4">Package Options</h3>
                    <p className="mb-4">Save 10% when you book a block of 6 sessions in advance (£486 total, £81 per session).</p>
                    <Button variant="outline" className="border-therapy-sage text-therapy-sage hover:bg-therapy-sage hover:text-white">
                      Book Package
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="couples" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-therapy-blue/20 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-medium mb-4 font-serif">Initial Consultation</h3>
                      <p className="text-3xl font-bold mb-2 text-therapy-sage">£95</p>
                      <p className="text-slate-600 mb-6">60 minute session</p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Meet both partners together</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Discuss relationship goals</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Explore current challenges</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Create a treatment plan</span>
                        </li>
                      </ul>
                      <Button className="w-full">Book Consultation</Button>
                    </div>
                    
                    <div className="border border-therapy-blue/20 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-medium mb-4 font-serif">Ongoing Sessions</h3>
                      <p className="text-3xl font-bold mb-2 text-therapy-sage">£120</p>
                      <p className="text-slate-600 mb-6">60 minute session</p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Regular weekly or fortnightly sessions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>In-person or online options</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Tailored couples therapy approach</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-therapy-sage mr-2 mt-0.5 flex-shrink-0" />
                          <span>Communication skills development</span>
                        </li>
                      </ul>
                      <Button className="w-full">Book Session</Button>
                    </div>
                  </div>
                  
                  <div className="bg-therapy-light-blue/10 p-6 rounded-lg">
                    <h3 className="text-xl font-serif mb-4">Package Options</h3>
                    <p className="mb-4">Save 10% when you book a block of 6 sessions in advance (£648 total, £108 per session).</p>
                    <Button variant="outline" className="border-therapy-sage text-therapy-sage hover:bg-therapy-sage hover:text-white">
                      Book Package
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-12 space-y-8">
                <div className="bg-white p-6 rounded-lg border border-therapy-blue/10">
                  <h3 className="text-xl font-serif mb-4">Cancellation Policy</h3>
                  <p className="mb-2">I require 48 hours' notice for cancellations.</p>
                  <p>Late cancellations or missed appointments will be charged the full session fee, except in cases of emergency.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-therapy-blue/10">
                  <h3 className="text-xl font-serif mb-4">Payment Options</h3>
                  <p className="mb-2">Payment is accepted via bank transfer, credit/debit card, or cash (for in-person sessions).</p>
                  <p>Payment is due at the time of service unless other arrangements have been made.</p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-serif mb-6">Ready to begin your journey?</h3>
                <Button size="lg" className="btn-primary">Schedule a Consultation</Button>
                <p className="mt-4 text-slate-600">
                  If you have any questions about fees or services, please don't hesitate to <a href="/contact" className="text-therapy-sage hover:underline">contact me</a>.
                </p>
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
