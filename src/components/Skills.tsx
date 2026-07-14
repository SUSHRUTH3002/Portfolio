import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  SiPython, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiVictoriametrics,
  SiHtml5, SiCss, SiMarkdown,
  SiScikitlearn, SiPytorch, SiTensorflow, SiHuggingface,
  SiPandas, SiNumpy, SiPlotly,
  SiFastapi, SiFlask, SiDocker,
  SiPrometheus, SiGrafana,
  SiGit, SiGithub,
  SiGooglecloud, SiGooglecolab,
  SiMysql, SiNeo4J, 
  SiKubernetes, SiHelm,
  SiPycharm, SiPostman,
  SiJupyter, SiSwagger, SiLinux,
  SiApacheairflow, SiApachespark, SiApachekafka, SiApachepulsar,
  SiDatabricks, SiLanggraph, SiOllama, SiSqlalchemy, SiCloudsmith, SiPydantic, SiMlflow, SiSpacy,
} from "react-icons/si";
import {
  Database, Target, Circle, Tag, MessageCircle, Scissors, Layers,
  TrendingUp, Zap, BookOpen, Shield, FileText, Search, BarChart2, Server,
  Terminal, HardDrive, Radio, GitBranch, Cpu, Eye, RefreshCw, Bot,
  Activity, LineChart, Cloud, Code, BarChart, Network,
} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconType = React.ComponentType<any>;

const SKILL_ICONS: Record<string, IconType> = {
  // Programming Languages
  "Python": SiPython,

  // Database Languages
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "Redis": SiRedis,
  "Neo4j": SiNeo4J,
  "VictoriaMetrics": SiVictoriametrics,

  // Query Languages
  "SQL": Database,
  "GraphQL": SiGraphql,
  "Cypher": SiNeo4J,
  "LogQL": Search,

  // Markup
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "Markdown": SiMarkdown,

  // Classical ML
  "Regression": TrendingUp,
  "Classification": Target,
  "Clustering": Circle,

  // Deep Learning
  "Neural Networks": Cpu,
  "CNNs": Eye,
  "RNNs": RefreshCw,
  "Transformers": Bot,

  // NLP
  "NER": Tag,
  "Sentiment Analysis": MessageCircle,
  "Tokenization": Scissors,
  "Embeddings": Layers,

  // ML Libraries
  "Scikit-Learn": SiScikitlearn,
  "XGBoost": TrendingUp,
  "LightGBM": Zap,

  // Deep Learning Frameworks
  "PyTorch": SiPytorch,
  "TensorFlow": SiTensorflow,

  // NLP Frameworks
  "HuggingFace": SiHuggingface,
  "spaCy": SiSpacy,
  "NLTK": BookOpen,
  "SentenceTransformers": Layers,
  "GLiNER": Tag,

  // Data Processing
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "Dask": Server,
  "Pydantic": Shield,

  // RAG & LLM
  "Agentic AI": Bot,
  "RAG": Search,
  "LangChain": GitBranch,
  "LangGraph": SiLanggraph,
  "LlamaIndex": BookOpen,
  "LiteLLM": Bot,
  "Ollama": SiOllama,
  "A2A": Radio,
  "MCP": Server,
  "AG-UI": Code,
  "Prompt Engineering": FileText,
  "Pydantic AI": SiPydantic,
  "Instructor": FileText,
  "Embedding Models": Layers,
  "Retrieval Pipelines": Search,
  "Chunking & Indexing": Scissors,

  // Vector Search
  "ChromaDB": Database,
  "FAISS": Search,
  "Annoy": Search,
  "ScaNN": Search,

  // Visualization Libraries
  "Matplotlib": BarChart2,
  "Seaborn": LineChart,
  "Plotly": SiPlotly,

  // Data Pipelines
  "Airflow": SiApacheairflow,
  "PySpark": SiApachespark,
  "Databricks": SiDatabricks,
  "Apache Kafka": SiApachekafka,
  "Apache Pulsar": SiApachepulsar,
  "ETL Pipelines": GitBranch,
  "Batch Processing": Cpu,
  "Data Pipeline Development": Layers,

  // Model Deployment
  "FastAPI": SiFastapi,
  "Flask": SiFlask,
  "Docker Models": SiDocker,
  "REST APIs": Server,
  "Microservices": Network,
  "Async Processing": RefreshCw,
  "SQLAlchemy": SiSqlalchemy,

  // Experiment Tracking
  "MLflow": SiMlflow,
  "Weights & Biases": Activity,
  "Langsmith": SiCloudsmith,
  "Langfuse": Activity,
  "Ragas": BarChart,

  // Monitoring
  "Prometheus": SiPrometheus,
  "Grafana": SiGrafana,
  "VictoriaLogs": FileText,

  // Version Control
  "Git": SiGit,
  "GitHub": SiGithub,

  // Cloud Platforms
  "AWS": Cloud,
  "GCP": SiGooglecloud,
  "Azure": Cloud,

  // Databases (Cloud)
  "MySQL": SiMysql,
  "DynamoDB": Database,
  "Pinecone": Database,
  "Milvus": Database,
  "Weaviate": Database,

  // Containers
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Helm": SiHelm,

  // CI/CD
  "GitHub Actions": SiGithub,
  "ArgoCD": GitBranch,

  // Storage
  "S3": HardDrive,
  "GCS": HardDrive,
  "MinIO": HardDrive,
  "Cloud Functions": Zap,

  // Visualization Tools
  "Power BI": BarChart,
  "Tableau": BarChart2,

  // Dev Tools
  "VSCode": Code,
  "PyCharm": SiPycharm,
  "Postman": SiPostman,

  // Notebooks
  "Google Colab": SiGooglecolab,
  "Jupyter": SiJupyter,

  // Utilities
  "Swagger": SiSwagger,
  "cURL": Terminal,
  "Linux CLI": SiLinux,
};

// Use original vendor logos for skills that don't have reliable react-icons mappings.
const SKILL_IMAGE_ICONS: Record<string, string> = {
  "MCP": "https://cdn.simpleicons.org/modelcontextprotocol",
  "Langsmith": "https://www.google.com/s2/favicons?domain=langsmith.com&sz=64",
  "Langfuse": "https://www.google.com/s2/favicons?domain=langfuse.com&sz=64",
  "Power BI": "https://www.google.com/s2/favicons?domain=powerbi.microsoft.com&sz=64",
  "A2A": "https://www.google.com/s2/favicons?domain=google.com&sz=64",
  "AWS": "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=64",
  "Azure": "https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=64",
  "LiteLLM": "https://www.google.com/s2/favicons?domain=litellm.ai&sz=64",
  "FAISS": "https://www.google.com/s2/favicons?domain=meta.com&sz=64",
};

interface Skill {
  name: string;
  level?: number;
  description: string;
  logo?: string;
  color: string;
}

const SkillBadge = ({ skill }: { skill: Skill }) => {
  const Icon = SKILL_ICONS[skill.name];
  const imageIcon = SKILL_IMAGE_ICONS[skill.name];
  const [imageError, setImageError] = useState(false);
  const showImage = Boolean(imageIcon) && !imageError;
  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div>
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all"
          >
            {showImage ? (
              <img
                src={imageIcon}
                alt={`${skill.name} logo`}
                className="mr-2 h-4 w-4 object-contain"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : Icon ? (
              <Icon size={16} className={`mr-2 ${skill.color}`} />
            ) : (
              <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
            )}
            {skill.name}
          </Badge>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 card-glass" side="top">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {showImage ? (
              <img
                src={imageIcon}
                alt={`${skill.name} logo`}
                className="h-10 w-10 object-contain"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            ) : Icon ? (
              <Icon size={40} className={skill.color} />
            ) : (
              <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
            )}
            <h4 className="font-bold text-xl">{skill.name}</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const SkillSection = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = {
    core: {
      languages: [
        { name: "Python", level: 95, description: "Primary language for AI and backend systems.", color: "text-blue-500" },
        { name: "SQL", level: 90, description: "Advanced querying and data modeling for production workloads.", color: "text-orange-500" },
        { name: "Cypher", level: 80, description: "Graph query language for Neo4j-based relationship intelligence.", color: "text-blue-500" },
      ],
      backendData: [
        { name: "FastAPI", description: "High-performance Python APIs for AI services.", color: "text-green-500" },
        { name: "REST APIs", description: "API-first service design for platform and model integrations.", color: "text-blue-500" },
        { name: "SQLAlchemy", description: "Reliable ORM and SQL toolkit for Python services.", color: "text-orange-600" },
        { name: "PostgreSQL", description: "Primary relational database for transactional and analytical use.", color: "text-blue-800" },
        { name: "Neo4j", description: "Graph database for relationship-driven intelligence.", color: "text-blue-500" },
      ],
    },
    aiMl: {
      llmSystems: [
        { name: "RAG", description: "Retrieval-Augmented Generation for grounded answers.", color: "text-cyan-500" },
        { name: "LlamaIndex", description: "Data indexing and retrieval framework for LLM apps.", color: "text-purple-500" },
        { name: "LiteLLM", description: "Routing layer across multiple LLM providers/models.", color: "text-amber-500" },
        { name: "Ollama", description: "Local LLM serving for private model workflows.", color: "text-slate-500" },
      ],
      agenticAi: [
        { name: "Agentic AI", description: "Autonomous, tool-using AI systems with planning and execution loops.", color: "text-violet-500" },
        { name: "LangChain", description: "Composable framework for LLM application workflows.", color: "text-green-500" },
        { name: "LangGraph", description: "Stateful orchestration for agentic systems.", color: "text-blue-500" },
        { name: "MCP", description: "Model Context Protocol for standard tool and data integrations.", color: "text-sky-500" },
        { name: "A2A", description: "Agent-to-agent collaboration patterns for distributed AI workflows.", color: "text-fuchsia-500" },
        { name: "Pydantic AI", description: "Typed agent and tool interfaces for robust LLM applications.", color: "text-pink-500" },
      ],
      mlNlp: [
        { name: "Transformers", description: "Modern deep learning architecture for NLP and sequence tasks.", color: "text-yellow-500" },
        { name: "Embeddings", description: "Vector representations for semantic search and retrieval.", color: "text-purple-600" },
        { name: "NER", description: "Named Entity Recognition for extracting structured information from text.", color: "text-orange-500" },
      ],
      vectorGraph: [
        { name: "ChromaDB", description: "Vector database for embedding-centric applications.", color: "text-emerald-500" },
        { name: "FAISS", description: "Efficient similarity search for large embedding collections.", color: "text-blue-600" },
      ],
    },
    libraries: {
      aiMlLibraries: [
        { name: "HuggingFace", description: "Model ecosystem and tooling for NLP/LLM applications.", color: "text-yellow-500" },
        { name: "SentenceTransformers", description: "Sentence embedding models for similarity and retrieval.", color: "text-indigo-500" },
        { name: "Scikit-Learn", description: "Core ML toolkit for classical models and preprocessing.", color: "text-orange-500" },
        { name: "Pydantic AI", description: "Typed agent and tool interfaces for robust LLM applications.", color: "text-pink-500" },
      ],
      nlpLibraries: [
        { name: "spaCy", description: "Industrial NLP pipelines for tokenization, parsing, and NER.", color: "text-blue-500" },
        { name: "NLTK", description: "Foundational NLP library for linguistic preprocessing and analysis.", color: "text-green-600" },
        { name: "GLiNER", description: "Efficient transformer-based NER for domain-specific entities.", color: "text-emerald-500" },
      ],
      dataProcessingLibraries: [
        { name: "Pandas", description: "DataFrames and tabular data wrangling for analytics and ML.", color: "text-blue-600" },
        { name: "NumPy", description: "Numerical array operations and vectorized computing.", color: "text-blue-500" },
        { name: "Matplotlib", description: "Core plotting library for model diagnostics and reporting.", color: "text-blue-500" },
        { name: "Seaborn", description: "Statistical visualization built on top of Matplotlib.", color: "text-teal-500" },
      ],
    },
    dataPlatform: {
      pipelines: [
        { name: "Airflow", description: "Scheduling and orchestration of production data workflows.", color: "text-blue-500" },
        { name: "ETL Pipelines", description: "Extraction, transformation, and loading workflows for reliable data movement.", color: "text-teal-500" },
        { name: "PySpark", description: "Distributed data processing with Spark using Python APIs.", color: "text-orange-500" },
        { name: "Databricks", description: "Unified Spark-based platform for engineering and analytics.", color: "text-red-500" },
      ],
      streaming: [
        { name: "Apache Kafka", description: "Event streaming backbone for real-time pipelines.", color: "text-gray-700" },
        { name: "Apache Pulsar", description: "Cloud-native messaging and streaming for event-driven systems.", color: "text-blue-600" },
      ],
      mlOpsObs: [
        { name: "MLflow", description: "Experiment tracking and model lifecycle management.", color: "text-blue-600" },
        { name: "Langsmith", description: "Tracing and debugging for LLM chains and agent workflows.", color: "text-cyan-500" },
        { name: "Langfuse", description: "LLM observability, prompt analytics, and production monitoring.", color: "text-violet-500" },
        { name: "Prometheus", description: "Metrics collection and monitoring for services and pipelines.", color: "text-orange-500" },
        { name: "Grafana", description: "Dashboards and observability for operational visibility.", color: "text-orange-600" },
        { name: "VictoriaMetrics", description: "High-performance time-series data store for observability.", color: "text-green-500" },
      ],
    },
    cloudDevOps: {
      cloudInfra: [
        { name: "AWS", description: "Primary cloud platform for scalable deployments.", color: "text-orange-500" },
        { name: "GCP", description: "Cloud services for analytics and AI workloads.", color: "text-blue-500" },
        { name: "Azure", description: "Enterprise cloud services and integrations.", color: "text-blue-600" },
        { name: "Docker", description: "Containerization for consistent build and runtime environments.", color: "text-blue-500" },
        { name: "Kubernetes", description: "Container orchestration for resilient production systems.", color: "text-blue-600" },
      ],
      tooling: [
        { name: "Git", description: "Version control for collaborative software delivery.", color: "text-red-500" },
        { name: "GitHub", description: "Repository management, collaboration, and CI workflows.", color: "text-gray-700" },
        { name: "GitHub Actions", description: "Automated CI/CD pipelines.", color: "text-gray-700" },
        { name: "Postman", description: "API testing and development workflow support.", color: "text-orange-500" },
        { name: "Power BI", description: "Business intelligence dashboards and executive-friendly analytics reporting.", color: "text-yellow-500" },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("core");

  return (
    <section id="skills" className="py-24 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I work with
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 w-full mb-12 bg-card/50 p-1 gap-1">
            <TabsTrigger 
              value="core"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              Core
            </TabsTrigger>
            <TabsTrigger 
              value="aiMl"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              AI & ML
            </TabsTrigger>
            <TabsTrigger 
              value="libraries"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              Libraries
            </TabsTrigger>
            <TabsTrigger 
              value="dataPlatform"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              Data Platform
            </TabsTrigger>
            <TabsTrigger 
              value="cloudDevOps"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              Cloud & DevOps
            </TabsTrigger>
          </TabsList>

          {/* Core Tab */}
          <TabsContent value="core" className="space-y-8 animate-fade-in">
            <SkillSection title="Core Languages" skills={skillCategories.core.languages} />
            <SkillSection title="Backend & Data Foundations" skills={skillCategories.core.backendData} />
          </TabsContent>

          {/* ML & AI Tab */}
          <TabsContent value="aiMl" className="space-y-8 animate-fade-in">
            <SkillSection title="LLM Systems" skills={skillCategories.aiMl.llmSystems} />
            <SkillSection title="Agentic AI Systems" skills={skillCategories.aiMl.agenticAi} />
            <SkillSection title="ML & NLP Stack" skills={skillCategories.aiMl.mlNlp} />
            <SkillSection title="Vector & Retrieval" skills={skillCategories.aiMl.vectorGraph} />
          </TabsContent>

          {/* Libraries Tab */}
          <TabsContent value="libraries" className="space-y-8 animate-fade-in">
            <SkillSection title="AI/ML Libraries" skills={skillCategories.libraries.aiMlLibraries} />
            <SkillSection title="NLP Libraries" skills={skillCategories.libraries.nlpLibraries} />
            <SkillSection title="Data Processing Libraries" skills={skillCategories.libraries.dataProcessingLibraries} />
          </TabsContent>

          {/* Data Platform Tab */}
          <TabsContent value="dataPlatform" className="space-y-8 animate-fade-in">
            <SkillSection title="Pipelines" skills={skillCategories.dataPlatform.pipelines} />
            <SkillSection title="Streaming" skills={skillCategories.dataPlatform.streaming} />
            <SkillSection title="MLOps & Observability" skills={skillCategories.dataPlatform.mlOpsObs} />
          </TabsContent>

          {/* Cloud & DevOps Tab */}
          <TabsContent value="cloudDevOps" className="space-y-8 animate-fade-in">
            <SkillSection title="Cloud & Infrastructure" skills={skillCategories.cloudDevOps.cloudInfra} />
            <SkillSection title="Engineering Tooling" skills={skillCategories.cloudDevOps.tooling} />
          </TabsContent>
          {/* Other tabs - remove old rendering logic */}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
