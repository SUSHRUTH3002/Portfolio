import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const Connect = () => {
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: Github, 
      url: "https://github.com/SUSHRUTH3002/", 
      description: "Check out my code"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/sushruth-m-s-32559a262", 
      description: "Let's connect professionally"
    },
    { 
      name: "Email", 
      icon: Mail, 
      url: "https://mail.google.com/mail/?view=cm&to=msushruthmsetty29@gmail.com&su=Let's Connect&body=Hi Sushruth,", 
      description: "Drop me a message"
    },
  ];

  const handleGetInTouch = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&to=msushruthmsetty29@gmail.com&su=Let's Connect&body=Hi Sushruth,",
      "_blank"
    );
  };

  return (
    <section id="connect" className="py-20 relative bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Open to collaborations, projects, and opportunities
            </p>
          </div>

          {/* Social Links */}
          <div className="card-glass p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-bold mb-6 text-center">Connect With Me</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-smooth group"
                >
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform">
                    <social.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-foreground block">{social.name}</span>
                    <span className="text-xs text-muted-foreground">{social.description}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Get In Touch Button */}
          <div className="text-center">
            <Button 
              size="lg"
              onClick={handleGetInTouch}
              className="bg-primary hover:bg-primary/90 glow-cyan group px-8"
            >
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
