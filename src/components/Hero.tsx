import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const roles = [
  "AI/ML Engineer",
  "Data Scientist",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(currentRole.slice(0, displayedText.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  useEffect(() => {
    const checkScroll = () => {
      const hasScroll = document.documentElement.scrollHeight > window.innerHeight;
      setShowScrollIndicator(hasScroll);
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Hi I'm Sushruth M S</span>
          </h1>
          
          {/* Dynamic Role */}
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-4xl text-muted-foreground">
              <span className="text-primary">{displayedText}</span>
              <span className="animate-glow-pulse text-primary">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent solutions through machine learning, data science, 
            and innovative applications. Transforming complex problems into elegant code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan transition-smooth group"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 transition-smooth"
              onClick={() => scrollToSection("connect")}
            >
              Collaborate
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary/50 text-secondary hover:bg-secondary/10 transition-smooth"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <button 
          onClick={scrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none p-2 hover:scale-110 transition-transform"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      )}
    </section>
  );
};

export default Hero;
