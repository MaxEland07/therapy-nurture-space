
import { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section bg-white">
      <div className="container mx-auto">
        
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input 
                    id="first-name" 
                    placeholder="Your first name" 
                    className="border-therapy-blue/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input 
                    id="last-name" 
                    placeholder="Your last name" 
                    className="border-therapy-blue/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email address" 
                  className="border-therapy-blue/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone (Optional)
                </label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Your phone number" 
                  className="border-therapy-blue/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="How can I help you?" 
                  className="min-h-[120px] border-therapy-blue/20 focus:border-primary"
                />
              </div>
              
              <Button className="btn-primary w-full">Send Message</Button>
              
              <p className="text-sm text-muted-foreground text-center">
                I'll respond to your message within 24 hours.
              </p>
            </form>
          </div>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <div className="bg-therapy-light-blue/30 p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-serif mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">+44 (0) 117 123 4567</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday to Friday, 9am to 6pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@tomhollandpierce.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      I'll respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">Bristol Therapy Centre</p>
                    <p className="text-muted-foreground">123 Clifton Avenue</p>
                    <p className="text-muted-foreground">Bristol, BS8 1AB</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      In-person & online sessions available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
