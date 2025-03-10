
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 bg-therapy-blue/30 text-primary rounded-full font-medium mb-4 text-sm">
                Blog & Resources
              </span>
              
              <h1 className="text-4xl md:text-5xl font-serif mb-6">
                Insights for Mental Wellbeing
              </h1>
              
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore articles, tips, and resources for improving your mental health.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-4xl mx-auto">
              <p>
                Blog content coming soon. This page will feature articles, resources, and insights about
                mental health, therapy techniques, and wellbeing practices.
              </p>
              
              <div className="text-center mt-12">
                <Button className="btn-primary">Subscribe to Updates</Button>
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

export default Blog;
