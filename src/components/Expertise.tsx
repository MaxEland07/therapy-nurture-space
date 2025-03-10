
import { useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const expertiseAreas = [
  {
    id: "anxiety",
    title: "Anxiety & Stress",
    description: "Learn effective strategies to manage anxiety and reduce stress in your daily life. From generalized anxiety to specific phobias, I offer specialized techniques tailored to your unique situation.",
    bulletPoints: [
      "Panic attack management",
      "Social anxiety support",
      "Worry reduction techniques",
      "Stress management strategies"
    ]
  },
  {
    id: "depression",
    title: "Depression",
    description: "Discover paths to overcome depression and rediscover joy and purpose. I use evidence-based approaches to help you navigate through depressive episodes and build resilience.",
    bulletPoints: [
      "Mood enhancement strategies",
      "Negative thought pattern restructuring",
      "Behavioral activation techniques",
      "Relapse prevention"
    ]
  },
  {
    id: "trauma",
    title: "Trauma & PTSD",
    description: "Process traumatic experiences in a safe, supportive environment. Using proven trauma-focused therapies, I help you work through difficult memories and emotions at your own pace.",
    bulletPoints: [
      "Trauma-focused CBT",
      "EMDR therapy",
      "Emotion regulation skills",
      "Safe memory processing"
    ]
  },
  {
    id: "relationships",
    title: "Relationship Issues",
    description: "Improve your connections with others through better communication and understanding. Whether it's romantic, family, or friendship challenges, we'll work on healthier relationship patterns.",
    bulletPoints: [
      "Communication skill building",
      "Boundary setting practice",
      "Conflict resolution techniques",
      "Attachment pattern awareness"
    ]
  }
];

const Expertise = () => {
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
    <section ref={sectionRef} className="section bg-therapy-light-blue/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-therapy-blue/30 text-primary rounded-full font-medium mb-4 text-sm animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            Areas of Expertise
          </span>
          
          <h2 className="text-3xl md:text-4xl font-serif mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Specialized Therapeutic Approaches
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            I provide evidence-based therapy for a wide range of mental health challenges. 
            My approach is tailored to your unique needs and circumstances.
          </p>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <Tabs defaultValue="anxiety" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8 bg-transparent">
              {expertiseAreas.map((area) => (
                <TabsTrigger 
                  key={area.id} 
                  value={area.id}
                  className="data-[state=active]:bg-white data-[state=active]:text-primary px-6 py-3 rounded-md transition-all"
                >
                  {area.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {expertiseAreas.map((area) => (
              <TabsContent 
                key={area.id} 
                value={area.id}
                className="bg-white rounded-2xl p-8 shadow-sm animate-fade-in"
              >
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-serif mb-4">{area.title}</h3>
                    <p className="text-muted-foreground mb-6">{area.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-3">How I Can Help:</h4>
                      <ul className="space-y-2">
                        {area.bulletPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="bg-therapy-light-blue/40 rounded-xl p-6 h-full flex flex-col justify-center">
                      <h4 className="font-medium mb-4 text-center">Ready to Take the First Step?</h4>
                      <p className="text-center mb-6">
                        I offer a free initial consultation to discuss your needs and how we might work together.
                      </p>
                      <div className="text-center">
                        <a href="#contact" className="btn-primary inline-block">
                          Schedule a Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
