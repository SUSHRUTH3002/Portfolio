import { Heart } from "lucide-react";

const EnrichmentActivities = () => {
  const hobbies = [
    {
      title: "Cricket",
      caption: "Chasing Boundaries, On & Off the Field",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
      description: "Cricket isn't just a sport for me—it's a masterclass in strategy, teamwork, and patience. Whether batting under pressure or fielding with precision, every match teaches me about calculated risks and split-second decisions.",
      values: ["Strategy", "Teamwork", "Focus", "Resilience"]
    },
    {
      title: "Badminton",
      caption: "Fast Reflexes, Faster Decisions",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop",
      description: "The fast-paced nature of badminton mirrors the agility needed in tech problem-solving. Every smash and drop shot requires quick thinking, adaptability, and staying two steps ahead of your opponent.",
      values: ["Agility", "Quick Thinking", "Precision", "Endurance"]
    },
    {
      title: "Travelling",
      caption: "Collecting Experiences, Not Just Destinations",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      description: "Exploring new places expands my perspective and fuels creativity. From navigating unfamiliar cities to immersing in diverse cultures, travel teaches me adaptability, curiosity, and the value of stepping outside my comfort zone.",
      values: ["Adventure", "Curiosity", "Adaptability", "Open-mindedness"]
    },
    {
      title: "Coding & Learning",
      caption: "Forever a Student, Always Evolving",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      description: "Technology never stops evolving, and neither do I. From experimenting with cutting-edge frameworks to diving deep into new programming paradigms, I'm constantly pushing my boundaries and staying ahead of the curve.",
      values: ["Curiosity", "Innovation", "Growth Mindset", "Adaptability"]
    },
    {
      title: "Restaurant Explorer",
      caption: "Good Food, Great Stories",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      description: "There's something magical about discovering hidden culinary gems and exploring diverse cuisines. Every restaurant visit is an adventure—a chance to experience new flavors, cultures, and connect with people over shared meals.",
      values: ["Adventure", "Social Connection", "Cultural Appreciation", "Enjoyment"]
    },
    {
      title: "Movie & Series Enthusiast",
      caption: "Binge-Watching with Purpose",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
      description: "A self-proclaimed movie and series freak, I find inspiration in compelling storytelling and character arcs. From sci-fi thrillers to thought-provoking dramas, every story offers lessons in creativity, problem-solving, and human psychology.",
      values: ["Storytelling", "Creativity", "Analysis", "Entertainment"]
    }
  ];

  return (
    <section id="enrichment" className="py-20 relative bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enrichment <span className="gradient-text">Activities</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Beyond professional work, these activities fuel my creativity and growth
            </p>
          </div>

          <div className="card-glass p-8 rounded-xl">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">What Drives Me</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={hobby.image} 
                      alt={hobby.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-2xl font-bold text-foreground drop-shadow-lg">
                        {hobby.title}
                      </h4>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-card/50 backdrop-blur-sm">
                    {hobby.caption && (
                      <h5 className="text-lg font-semibold text-primary mb-3 italic">
                        {hobby.caption}
                      </h5>
                    )}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {hobby.description}
                    </p>

                    {/* Values Learned */}
                    <div className="flex flex-wrap gap-2">
                      {hobby.values.map((value, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrichmentActivities;
