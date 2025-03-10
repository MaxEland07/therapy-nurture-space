
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-therapy-cream px-6">
      <div className="text-center max-w-xl animate-fade-in-up">
        <h1 className="text-6xl font-serif font-medium mb-6">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="btn-primary" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-therapy-light-blue/20 to-transparent z-[-1]" />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 rounded-full bg-therapy-blue/10 -ml-32 z-[-1]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-therapy-light-blue/30 -mr-20 -mb-20 z-[-1]" />
    </div>
  );
};

export default NotFound;
