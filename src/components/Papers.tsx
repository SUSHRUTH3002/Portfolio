import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Papers = () => {
  const papers = [
    {
      title: "Towards a Nuanced Sentiment Analysis: A Novel Hybrid Approach to Aspect-Based Insights",
      conference: "UPWIECON 2025",
      description: "Traditional sentiment analysis often misses why customers feel a certain way. In this research, I proposed a hybrid Aspect-Based Sentiment Analysis framework that identifies specific aspects being discussed and determines the sentiment associated with each one. Using dependency parsing, POS tagging, and sentiment models, the system delivers richer and more actionable insights for applications such as product reviews, social media monitoring, and customer experience analytics.",
      tags: ["NLP", "Sentimental Analysis", "Transformers"],
      link: "https://ieeexplore.ieee.org/document/11390224",
    },
    {
      title: "Optimizing Urban Mobility a Comprehensive PublicTransport Monitoring System",
      conference: "MEEMS-CISC 2024",
      description: "Urban transportation often suffers from fragmented services and inefficient connectivity. In this research, I proposed an Integrated Transport System (ITS) that brings together multiple transit services through a unified digital platform. By combining real-time monitoring, data analytics, and intelligent infrastructure, the system enhances commuter experience, reduces wait times, and lays the foundation for AI and IoT-driven smart transportation networks.",
      tags: ["Urban Mobility", "Distributed Systems", "Real-Time Data"],
      link: "https://www.atlantis-press.com/proceedings/meems-cisc-24/126012375",
    },
    {
      title: "Enhancing Neural Network with Quantum Computing",
      conference: "ComSIA 2025",
      description: "As modern AI systems become increasingly complex, traditional neural networks face challenges in scalability and computational efficiency. In this research, I investigated Quantum Neural Networks (QNNs), combining the strengths of quantum computing and deep learning. By exploring hybrid quantum-classical architectures and quantum algorithms such as Quantum Fourier Transform and Grover's Search, this work highlights how quantum computing could unlock faster, more efficient, and highly scalable AI systems for the future.",
      tags: ["Deep Learning", "Quantum Computing", "Neural Networks"],
      link: "https://link.springer.com/chapter/10.1007/978-981-96-8350-5_11",
    },
  ];

  return (
    <section id="papers" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Published <span className="gradient-text">Papers</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Research contributions to the AI/ML community
            </p>
          </div>

          {/* Papers Grid */}
          <div className="space-y-6">
            {papers.map((paper, index) => (
              <div 
                key={index}
                className="card-glass p-6 rounded-xl hover:border-primary/50 transition-smooth group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {paper.title}
                      </h3>
                      <Badge variant="outline" className="border-secondary/50 text-secondary w-fit">
                        {paper.conference}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {paper.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 flex-1">
                        {paper.tags.map((tag) => (
                          <Badge 
                            key={tag}
                            variant="secondary"
                            className="bg-muted/50 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* View Paper Button */}
                      <Button 
                        size="sm"
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10 group/btn"
                        asChild
                      >
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                          View Paper
                          <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Papers;
