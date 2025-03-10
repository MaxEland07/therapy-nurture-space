
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Book, ExternalLink, Download } from "lucide-react";

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resourceCategories = [
    {
      title: "Self-Help Guides",
      icon: <FileText className="h-6 w-6 text-primary" />,
      resources: [
        {
          title: "Understanding Anxiety",
          description: "A comprehensive guide to understanding and managing anxiety symptoms",
          link: "#"
        },
        {
          title: "Depression Self-Care",
          description: "Practical strategies for managing depression and improving mood",
          link: "#"
        },
        {
          title: "Building Self-Esteem",
          description: "Exercises and techniques to develop healthier self-perception",
          link: "#"
        }
      ]
    },
    {
      title: "Recommended Reading",
      icon: <Book className="h-6 w-6 text-primary" />,
      resources: [
        {
          title: "Feeling Good: The New Mood Therapy",
          description: "By David D. Burns",
          link: "#"
        },
        {
          title: "The Happiness Trap",
          description: "By Russ Harris",
          link: "#"
        },
        {
          title: "The Compassionate Mind",
          description: "By Paul Gilbert",
          link: "#"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section bg-slate-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 bg-therapy-blue/20 text-primary rounded-full font-medium mb-4 text-sm">
                Resources
              </span>
              
              <h1 className="text-4xl md:text-5xl font-serif mb-6">
                Helpful Resources
              </h1>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore these resources to support your mental health journey between therapy sessions.
              </p>
            </div>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {resourceCategories.map((category, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h2 className="text-2xl font-serif">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {category.resources.map((resource, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-medium mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground mb-4">{resource.description}</p>
                        <a href={resource.link} className="text-primary font-medium inline-flex items-center gap-2">
                          View Resource <ExternalLink size={16} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="section bg-slate-50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">
                Worksheets & Exercises
              </h2>
              
              <p className="text-muted-foreground mb-8">
                These downloadable worksheets can help you practice skills between therapy sessions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {["Thought Record", "Values Clarification", "Goal Setting", "Relaxation Techniques"].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium mb-4">{item} Worksheet</h3>
                    <Button variant="outline" className="inline-flex items-center gap-2">
                      <Download size={16} /> Download PDF
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-therapy-light-blue/30 rounded-xl">
                <h3 className="text-xl font-medium mb-3">Need Personalized Resources?</h3>
                <p className="mb-6">
                  I can provide tailored resources specific to your needs during our sessions.
                </p>
                <Link to="/contact">
                  <Button className="bg-slate-800 hover:bg-slate-700">
                    Contact Me
                  </Button>
                </Link>
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
              <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resources;
