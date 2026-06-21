import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Neural Image Classifier",
      description: "Deep learning model for multi-class image classification achieving 98% accuracy. Deployed as REST API serving 10k+ requests/day.",
      tech: ["PyTorch", "FastAPI", "Docker", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Computer Vision",
    },
    {
      title: "NLP Sentiment Analyzer",
      description: "Real-time sentiment analysis system processing social media streams. Uses transformer models for multi-lingual support.",
      tech: ["TensorFlow", "BERT", "Kafka", "GCP"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "NLP",
    },
    {
      title: "ML Pipeline Orchestrator",
      description: "Automated ML pipeline for model training, validation, and deployment. Reduced deployment time by 70%.",
      tech: ["MLflow", "Airflow", "Kubernetes", "Python"],
      github: "https://github.com",
      category: "MLOps",
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering system for e-commerce product recommendations. Increased conversion rates by 25%.",
      tech: ["Scikit-learn", "Redis", "PostgreSQL", "FastAPI"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Data Science",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Showcasing innovation through code and data
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="card-glass p-6 rounded-xl hover:border-primary/50 transition-smooth group"
              >
                <div className="space-y-4">
                  {/* Category Badge */}
                  <Badge variant="outline" className="border-secondary/50 text-secondary">
                    {project.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-muted/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/50 hover:bg-primary/10 group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button 
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 group/btn"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Play className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/SUSHRUTH3002?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
