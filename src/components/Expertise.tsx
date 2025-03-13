import { useRef, useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const expertiseAreas = [
  {
    id: "low-self-esteem",
    title: "Low Self-Esteem",
    description: "Low self-esteem is characterized by chronic negative self-perception and a lack of self-confidence. It can manifest in self-doubt, harsh self-criticism, perfectionism, and feeling unworthy or undeserving of happiness and success.",
    bulletPoints: [
      "Persistent negative self-talk and self-criticism",
      "Difficulty accepting compliments or praise",
      "Feeling undeserving of happiness or success",
      "Comparing yourself unfavorably to others"
    ]
  },
  {
    id: "confidence",
    title: "Lack of Confidence",
    description: "Lacking confidence can affect every area of your life, from personal relationships to career progress. It often manifests as avoiding challenges, difficulty making decisions, and persistent feelings of insecurity that hold you back from pursuing goals.",
    bulletPoints: [
      "Difficulty speaking up in social or professional settings",
      "Avoiding challenges or new opportunities",
      "Seeking excessive reassurance from others",
      "Struggling to believe in your abilities"
    ]
  },
  {
    id: "social-anxiety",
    title: "Social Anxiety",
    description: "Social anxiety involves intense fear of social situations and being judged by others. It can lead to avoidance of social events, physical symptoms like blushing or trembling, and significant distress when facing social interactions.",
    bulletPoints: [
      "Intense fear of embarrassment or judgment in social situations",
      "Physical symptoms in social settings (blushing, sweating, trembling)",
      "Avoiding social events or interactions",
      "Overthinking social encounters before and after they occur"
    ]
  },
  {
    id: "gad",
    title: "Generalised Anxiety Disorder",
    description: "Generalised Anxiety Disorder (GAD) is characterized by persistent, excessive worry about various aspects of life. This worry is difficult to control and is often accompanied by physical symptoms such as restlessness, fatigue, and muscle tension.",
    bulletPoints: [
      "Persistent and excessive worry about multiple areas of life",
      "Difficulty controlling worry and racing thoughts",
      "Physical symptoms like restlessness, fatigue, and muscle tension",
      "Sleep difficulties due to anxiety"
    ]
  },
  {
    id: "health-anxiety",
    title: "Health Anxiety",
    description: "Health anxiety involves excessive worry about having or developing a serious medical condition, despite medical reassurance. It can lead to frequent checking of symptoms, seeking medical attention repeatedly, and significant distress.",
    bulletPoints: [
      "Excessive worrying about health and potential illness",
      "Frequently checking for physical symptoms",
      "Seeking repeated medical tests or reassurance",
      "Catastrophic interpretation of minor physical sensations"
    ]
  },
  {
    id: "depression",
    title: "Depression",
    description: "Depression is more than just feeling sad; it's a persistent low mood that affects how you think, feel, and function. It can manifest as loss of interest in activities, changes in appetite and sleep, fatigue, feelings of worthlessness, and thoughts of death or suicide.",
    bulletPoints: [
      "Persistent feelings of sadness, emptiness, or hopelessness",
      "Loss of interest in previously enjoyed activities",
      "Changes in appetite, weight, or sleep patterns",
      "Feelings of worthlessness or inappropriate guilt"
    ]
  },
  {
    id: "ocd",
    title: "OCD",
    description: "Obsessive-Compulsive Disorder (OCD) involves unwanted, intrusive thoughts (obsessions) that cause anxiety, and repetitive behaviors or mental acts (compulsions) performed to reduce this anxiety. These obsessions and compulsions can significantly interfere with daily life.",
    bulletPoints: [
      "Intrusive, unwanted thoughts, images, or urges",
      "Repetitive behaviors or mental acts performed to reduce anxiety",
      "Time-consuming rituals that interfere with daily activities",
      "Recognition that these thoughts/behaviors are excessive"
    ]
  }
];

const Expertise = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <section ref={sectionRef} className="py-12">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <Tabs defaultValue="low-self-esteem" className="w-full">
            {isMobile ? (
              <div className="mb-6 relative">
                <div className="overflow-x-auto pb-4 -mx-4 px-4 flex no-scrollbar">
                  <TabsList className="inline-flex bg-transparent space-x-2 min-w-max">
                    {expertiseAreas.map((area) => (
                      <TabsTrigger 
                        key={area.id} 
                        value={area.id}
                        className="data-[state=active]:bg-slate-700 data-[state=active]:text-white px-4 py-2 rounded-md transition-all whitespace-nowrap text-sm border border-slate-700/20"
                      >
                        {area.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                {/* Fade indicators to show scrollability */}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              </div>
            ) : (
              <div className="mb-8">
                <TabsList className="w-full flex flex-wrap bg-transparent gap-2 justify-center">
                  {expertiseAreas.map((area) => (
                    <TabsTrigger 
                      key={area.id} 
                      value={area.id}
                      className="data-[state=active]:bg-slate-700 data-[state=active]:text-white px-4 py-2 rounded-md transition-all whitespace-nowrap text-sm border border-slate-700/20"
                    >
                      {area.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            )}
            
            {expertiseAreas.map((area) => (
              <TabsContent 
                key={area.id} 
                value={area.id}
                className="bg-white rounded-2xl p-5 md:p-8 shadow-sm animate-fade-in mt-4 border border-therapy-sage/10"
              >
                <div className="grid md:grid-cols-5 gap-6 md:gap-8">
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-serif mb-4">{area.title}</h3>
                    <p className="text-muted-foreground mb-6">{area.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-3">Common Signs & Symptoms:</h4>
                      <ul className="space-y-2">
                        {area.bulletPoints.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-therapy-sage mt-2 mr-3"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="bg-therapy-light-blue/30 rounded-xl p-6 h-full flex flex-col justify-center">
                      <h4 className="font-medium mb-4 text-center">How I Can Help</h4>
                      <p className="text-center mb-6">
                        I use evidence-based therapeutic approaches to help you overcome these challenges and improve your wellbeing.
                      </p>
                      <div className="text-center">
                        <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                          Book a Free Consultation <ChevronRight size={16} />
                        </Link>
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
