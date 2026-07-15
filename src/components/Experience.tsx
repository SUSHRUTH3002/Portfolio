import { useState } from "react";
import { Briefcase, GraduationCap, ArrowRight, MapPin, Award, ChevronDown } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const workData = [
  {
    company: "Manifest IT",
    badge: "Sequoia Capital Startup",
    roles: [
      { title: "Junior Data Scientist", period: "July 2025 – Present",  current: true  },
      { title: "Data Science Intern",   period: "Nov 2024 – June 2025", current: false },
    ],
    summary:
      "Progressed from intern to full-time, owning end-to-end design, development, and deployment of production AI systems for SRE and DevOps teams across multi-cloud environments. Implemented multi-LLM routing (LiteLLM) balancing internal hosted models and external APIs for cost, latency, and reliability.",
    projects: [
      {
        name: "AI-Powered Incident Root Cause Analysis System",
        points: [
          "Built automated RCA system correlating alerts, metrics, logs, and changelogs across 100+ services — reduced triage time from 30+ mins to near-zero.",
          "Designed LangGraph orchestration pipeline with 25+ nodes for conditional routing, multi-step LLM calls, and structured extraction; supported event-driven (Apache Pulsar) and API-based workflows.",
          "Developed hybrid data layer (PostgreSQL + Neo4j + VictoriaMetrics) enabling cross-source correlation at the business-service level.",
        ],
      },
      {
        name: "Change Traceability System (Approved & Unapproved)",
        points: [
          "Built event-driven system linking change logs from 20+ providers to service requests via LLM entity extraction and multi-axis confidence scoring — eliminated manual audits and auto-detected unauthorized changes.",
          "Engineered multi-step ETL pipeline with Pydantic + Instructor structured outputs, model fallback strategies, multi-stage linking algorithm, and GLiNER NER for entity profiling from unstructured text.",
          "Integrated knowledge graphs and observability systems for unified cross-source traceability.",
        ],
      },
      {
        name: "LLM-Powered Cloud Remediation Workflow Generator",
        points: [
          "Built AI microservice converting security policy violations into executable Kestra YAML workflows for AWS, GCP, and Azure — cut remediation time from hours to minutes across 100+ security rules.",
          "Designed dual-stage LLM pipeline producing parameterized CLI commands and production-ready workflows with pre-check, execution, and post-check steps.",
          "Developed async FastAPI service with secure auth and secret handling for production deployment.",
        ],
      },
    ],
  },
];

const educationData = [
  {
    degree: "B.E (Honours) — Artificial Intelligence & Machine Learning",
    institution: "New Horizon College of Engineering",
    location: "Bengaluru, India",
    period: "2021 – 2025",
    cgpa: "9.49 / 10",
  },
];

// ─── WorkExperience sub-component ────────────────────────────────────────────

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="card-glass p-8 rounded-xl mb-12">
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="w-8 h-8 text-secondary" />
        <h3 className="text-3xl font-bold">Work Experience</h3>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

        <div className="space-y-8">
          {workData.map((item, index) => (
            <div key={index} className="relative pl-14">
              {/* Timeline dot */}
              <div className="absolute left-0 top-4 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center glow-cyan z-10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              {/* Clickable company card */}
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full text-left card-glass p-5 rounded-xl border border-primary/20 hover:border-primary/50 transition-smooth group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {/* Company + badge */}
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h4 className="text-xl font-bold text-foreground">{item.company}</h4>
                      <span className="text-xs bg-primary/10 text-primary border border-primary/25 rounded-full px-2.5 py-0.5 font-medium">
                        {item.badge}
                      </span>
                    </div>

                    {/* Role progression */}
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      {item.roles.map((role, i) => (
                        <div key={i} className="flex items-center gap-2">
                          {i > 0 && <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />}
                          <span className={`text-sm font-semibold ${role.current ? "text-primary" : "text-muted-foreground"}`}>
                            {role.title}
                          </span>
                          {role.current && (
                            <span className="text-xs bg-green-500/15 text-green-400 border border-green-500/25 rounded-full px-1.5 py-0.5 leading-none">
                              Current
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground">· {role.period}</span>
                        </div>
                      ))}
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                  </div>

                  {/* Expand chevron */}
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-300 group-hover:text-primary ${
                      expanded === index ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expandable project details */}
              {expanded === index && (
                <div className="mt-3 ml-2 pl-4 border-l-2 border-primary/30 space-y-3 animate-fade-in">
                  {item.projects.map((project, pIdx) => (
                    <div key={pIdx} className="card-glass p-5 rounded-xl hover:border-primary/40 transition-smooth">
                      <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {project.name}
                      </h5>
                      <ul className="space-y-2">
                        {project.points.map((point, ptIdx) => (
                          <li key={ptIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-secondary shrink-0 mt-0.5">▸</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Education sub-component ──────────────────────────────────────────────────

const Education = () => (
  <div className="card-glass p-8 rounded-xl">
    <div className="flex items-center gap-3 mb-8">
      <GraduationCap className="w-8 h-8 text-accent" />
      <h3 className="text-3xl font-bold">Education</h3>
    </div>

    {educationData.map((item, index) => (
      <div
        key={index}
        className="card-glass p-6 rounded-xl border border-accent/20 flex flex-col sm:flex-row sm:items-center gap-6"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-card border-2 border-accent flex items-center justify-center shrink-0">
          <GraduationCap className="w-7 h-7 text-accent" />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-foreground leading-snug">{item.degree}</h4>
          <p className="text-accent font-semibold mt-1">{item.institution}</p>
          <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            {item.location}
          </div>
        </div>

        {/* Period + CGPA */}
        <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-1 shrink-0">
          <span className="text-sm text-muted-foreground">{item.period}</span>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-2xl font-bold text-primary">{item.cgpa}</span>
          </div>
          <span className="text-xs text-muted-foreground">CGPA</span>
        </div>
      </div>
    ))}
  </div>
);

// ─── Main section ─────────────────────────────────────────────────────────────

const Experience = () => (
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

        <WorkExperience />
        <Education />
      </div>
    </div>
  </section>
);

export default Experience;
