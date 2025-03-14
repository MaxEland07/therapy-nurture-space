import { useEffect } from "react";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";

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
      
      <Footer />
    </div>
  );
};

export default Blog;
