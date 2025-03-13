import { useEffect } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Insights for Mental Wellbeing" 
          description="Explore articles, tips, and resources for improving your mental health."
          pageName="Blog & Resources"
        />
        
        <section className="section">
          <div className="container mx-auto">
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
      
      <footer className="bg-tom-white py-12 border-t border-tom-light-blue/10">
        <div className="container mx-auto px-6">
          <div className="mt-12 pt-6 border-t border-tom-light-blue/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Tom Holland Pierce. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <a href="/privacy" className="text-muted-foreground hover:text-tom-navy text-sm">Privacy Policy</a>
              <a href="/terms" className="text-muted-foreground hover:text-tom-navy text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
