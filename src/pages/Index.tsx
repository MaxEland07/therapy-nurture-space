import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JourneySection from "../components/JourneySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import TherapyIntro from "../components/TherapyIntro";
import AboutMeSection from "../components/AboutMeSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TherapyIntro />
        <JourneySection />
        <AboutMeSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
