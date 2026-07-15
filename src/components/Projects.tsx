import { ExternalLink, Github, Play, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Distributed AI Trip Planner",
      description:
        "Multi-agent system with 4 specialised agents coordinated by a central orchestrator via AG-UI, A2A, and MCP protocols. Features a Next.js streaming frontend with real-time chat and human-in-the-loop workflows, backed by a FastAPI service with sub-second response times.",
      tech: ["LangGraph", "A2A", "MCP", "AG-UI", "FastAPI", "Next.js", "Python"],
      github: "https://github.com/SUSHRUTH3002/MCP/tree/a2a-agui-poc",
      category: "Multi-Agent AI",
    },
    {
      title: "Graph RAG",
      description:
        "Graph RAG system combining FAISS vector search, Neo4j graph traversal, and intent-based adaptive query routing for intelligent Q&A with citations over structured and unstructured data. Includes multi-format ingestion, context-aware chunking, and knowledge graph construction.",
      tech: ["FAISS", "Neo4j", "LangChain", "RAG", "Python"],
      github: "https://github.com/SUSHRUTH3002/Graph-RAG",
      category: "RAG / Knowledge Graph",
    },
    {
      title: "Aspect-Based Sentiment Analysis",
      description:
        "Hybrid NLP sentiment classifier using dependency parsing, aspect identification, and polarity scoring — achieving >87% accuracy. Published findings as a conference paper.",
      tech: ["Python", "spaCy", "NLTK", "NLP", "FastAPI"],
      github: "https://github.com/SUSHRUTH3002/Aspect-based-Sentimental-Analysis",
      demo: "https://aspect-based-sentiment-analyser.streamlit.app/",
      paper: "https://ieeexplore.ieee.org/document/11390224",
      category: "NLP",
    },
    {
      title: "Virtual Drawing Using Machine Learning",
      description:
        "Built a computer vision application using OpenCV and MediaPipe for real-time hand tracking and gesture-based drawing with multiple tools.",
      tech: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/SUSHRUTH3002/Virtual-Drawing-using-Machine-Learning",
      category: "Computer Vision",
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
                    {project.paper && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-secondary/50 text-secondary hover:bg-secondary/10 group/btn"
                        asChild
                      >
                        <a href={project.paper} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4 group-hover/btn:translate-y-[-2px] transition-transform" />
                          Paper
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
