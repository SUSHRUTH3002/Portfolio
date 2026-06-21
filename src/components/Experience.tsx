import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      icon: Briefcase,
      title: "Senior AI/ML Engineer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Leading AI initiatives and developing scalable machine learning solutions.",
      achievements: [
        "Developed neural network models achieving 95% accuracy",
        "Optimized model performance reducing inference time by 40%",
        "Led team of 5 engineers on ML pipeline architecture"
      ]
    },
    {
      icon: Briefcase,
      title: "Data Scientist",
      company: "Analytics Firm",
      period: "2021 - 2023",
      description: "Built predictive models and data pipelines for business intelligence.",
      achievements: [
        "Implemented recommendation system serving 1M+ users",
        "Created ETL pipelines processing 10TB+ data daily",
        "Improved model accuracy by 25% through feature engineering"
      ]
    },
  ];

  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Engineering (Honours)",
      institution: "New Horizon College of Engineering, Bangalore",
      period: "2021 - 2025",
      specialization: "Artificial Intelligence & Machine Learning",
      achievements: [
        "Research focus: Deep Learning for Natural Language Processing",
        "Published 3 papers in top-tier AI conferences",
        "GPA: 3.9/4.0 - Dean's List all semesters",
        "Teaching Assistant for Machine Learning course"
      ]
    },
    {
      icon: GraduationCap,
      degree: "Bachelor's in Computer Engineering",
      institution: "MIT",
      period: "2015 - 2019",
      specialization: "Data Science & Analytics",
      achievements: [
        "Graduated with Honors - Top 5% of class",
        "Senior Thesis: Neural Architecture Search for Computer Vision",
        "President of AI/ML Student Club",
        "Won 3 hackathons focused on AI solutions"
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience, education, and what drives me
            </p>
          </div>

          {/* Work Experience Timeline */}
          <div className="card-glass p-8 rounded-xl mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-secondary" />
              <h3 className="text-3xl font-bold">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

              {workExperience.map((item, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center glow-cyan">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-24">
                    <div className="card-glass p-6 rounded-xl hover:border-primary/50 transition-smooth">
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-1">
                            {item.title}
                          </h4>
                          <p className="text-primary font-semibold">{item.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-secondary mr-2">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="card-glass p-8 rounded-xl mb-12">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-bold">Education & Certifications</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-secondary"></div>

              {education.map((item, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-accent flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-24">
                    <div className="card-glass p-6 rounded-xl hover:border-accent/50 transition-smooth">
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-1">
                            {item.degree}
                          </h4>
                          <p className="text-accent font-semibold">{item.institution}</p>
                          <p className="text-sm text-muted-foreground mt-1">{item.specialization}</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-accent mr-2">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
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

export default Experience;
