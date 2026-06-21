import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AIBackground from "./components/AIBackground";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Papers from "./components/Papers";
import EnrichmentActivities from "./components/EnrichmentActivities";
import Connect from "./components/Connect";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-background relative">
          {/* AI Animated Background */}
          <AIBackground />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <div className="relative z-10">
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Papers />
            <EnrichmentActivities />
            <Connect />
          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <Button
              onClick={scrollToTop}
              size="icon"
              className="fixed bottom-8 right-8 rounded-full bg-primary hover:bg-primary/90 glow-cyan z-50 animate-fade-in"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
