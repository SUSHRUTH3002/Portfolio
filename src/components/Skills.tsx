import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Skills = () => {
  const skillCategories = {
    languages: {
      programming: [
        { 
          name: "Python", 
          level: 95, 
          description: "Primary language for AI/ML, data science, and backend development. Expertise in async programming, type hints, and performance optimization.",
          logo: "🐍",
          color: "text-blue-500"
        },
        { 
          name: "JavaScript", 
          level: 85, 
          description: "Full-stack development with modern ES6+ features, React, Node.js, and TypeScript.",
          logo: "JS",
          color: "text-yellow-500"
        },
        { 
          name: "TypeScript", 
          level: 85, 
          description: "Strongly-typed JavaScript for scalable applications with advanced type system knowledge.",
          logo: "TS",
          color: "text-blue-600"
        },
        { 
          name: "Go", 
          level: 75, 
          description: "Building efficient, concurrent systems and microservices with goroutines and channels.",
          logo: "Go",
          color: "text-cyan-500"
        },
        { 
          name: "R", 
          level: 80, 
          description: "Statistical computing, data analysis, and visualization with tidyverse ecosystem.",
          logo: "R",
          color: "text-blue-700"
        },
        { 
          name: "Java", 
          level: 78, 
          description: "Enterprise applications, Spring framework, and Android development.",
          logo: "☕",
          color: "text-red-600"
        },
      ],
      database: [
        { 
          name: "SQL", 
          level: 90, 
          description: "Advanced querying, optimization, stored procedures, and database design for PostgreSQL, MySQL, and SQL Server.",
          logo: "🗄️",
          color: "text-orange-500"
        },
        { 
          name: "MongoDB", 
          level: 85, 
          description: "NoSQL document database design, aggregation pipelines, and performance tuning.",
          logo: "🍃",
          color: "text-green-600"
        },
        { 
          name: "PostgreSQL", 
          level: 88, 
          description: "Advanced features including JSONB, full-text search, and custom extensions.",
          logo: "🐘",
          color: "text-blue-800"
        },
        { 
          name: "Redis", 
          level: 82, 
          description: "In-memory caching, pub/sub messaging, and session management.",
          logo: "⚡",
          color: "text-red-500"
        },
      ],
      query: [
        { 
          name: "GraphQL", 
          level: 80, 
          description: "API design, schema definition, resolvers, and client-side integration with Apollo.",
          logo: "◈",
          color: "text-pink-500"
        },
        { 
          name: "Cypher", 
          level: 75, 
          description: "Neo4j graph database queries for relationship-based data analysis.",
          logo: "🔗",
          color: "text-blue-500"
        },
        { 
          name: "SPARQL", 
          level: 70, 
          description: "Semantic web queries for RDF data and knowledge graphs.",
          logo: "🕸️",
          color: "text-purple-600"
        },
      ],
      markup: [
        { 
          name: "HTML5", 
          level: 92, 
          description: "Semantic markup, accessibility, and modern web standards.",
          logo: "H5",
          color: "text-orange-600"
        },
        { 
          name: "CSS3", 
          level: 88, 
          description: "Responsive design, animations, Grid, Flexbox, and modern CSS features.",
          logo: "C3",
          color: "text-blue-500"
        },
        { 
          name: "Markdown", 
          level: 95, 
          description: "Documentation, README files, and content writing.",
          logo: "⬇️",
          color: "text-gray-600"
        },
      ],
    },
    mlai: {
      classicalML: [
        { name: "Regression", description: "Linear, Logistic, Ridge, Lasso regression models for predictive analytics.", logo: "📈", color: "text-blue-500" },
        { name: "Classification", description: "Decision Trees, Random Forests, SVM for categorical predictions.", logo: "🎯", color: "text-green-500" },
        { name: "Clustering", description: "DBSCAN, KMeans, Hierarchical clustering for data segmentation.", logo: "🔵", color: "text-purple-500" },
      ],
      deepLearning: [
        { name: "Neural Networks", description: "Multi-layer perceptrons, backpropagation, activation functions.", logo: "🧠", color: "text-pink-500" },
        { name: "CNNs", description: "Convolutional Neural Networks for computer vision tasks.", logo: "🖼️", color: "text-blue-600" },
        { name: "RNNs", description: "Recurrent Neural Networks, LSTM, GRU for sequence modeling.", logo: "🔄", color: "text-indigo-500" },
        { name: "Transformers", description: "Attention mechanisms, BERT, GPT architectures for NLP.", logo: "🤖", color: "text-yellow-500" },
      ],
      nlp: [
        { name: "NER", description: "Named Entity Recognition for extracting structured information.", logo: "🏷️", color: "text-orange-500" },
        { name: "Sentiment Analysis", description: "Text classification for emotion and opinion mining.", logo: "�", color: "text-green-600" },
        { name: "Tokenization", description: "Text preprocessing, BPE, WordPiece, SentencePiece.", logo: "✂️", color: "text-blue-500" },
        { name: "Embeddings", description: "Word2Vec, GloVe, FastText, contextual embeddings.", logo: "🔤", color: "text-purple-600" },
      ],
    },
    frameworks: {
      mlLibraries: [
        { name: "Scikit-Learn", description: "Comprehensive ML library for classical algorithms and preprocessing.", logo: "SK", color: "text-orange-500" },
        { name: "XGBoost", description: "Gradient boosting framework for high-performance ML.", logo: "XG", color: "text-blue-600" },
        { name: "LightGBM", description: "Fast gradient boosting with efficient memory usage.", logo: "💡", color: "text-green-500" },
      ],
      deepLearningFrameworks: [
        { name: "PyTorch", description: "Dynamic computational graphs, research-friendly deep learning.", logo: "🔥", color: "text-red-500" },
        { name: "TensorFlow", description: "Production-ready deep learning with extensive ecosystem.", logo: "TF", color: "text-orange-600" },
      ],
      nlpFrameworks: [
        { name: "HuggingFace", description: "Transformers library for state-of-the-art NLP models.", logo: "🤗", color: "text-yellow-500" },
        { name: "spaCy", description: "Industrial-strength NLP with pre-trained pipelines.", logo: "SP", color: "text-blue-500" },
        { name: "NLTK", description: "Natural Language Toolkit for text processing fundamentals.", logo: "📚", color: "text-green-600" },
      ],
      dataProcessing: [
        { name: "Pandas", description: "DataFrames and data manipulation for structured data.", logo: "🐼", color: "text-blue-600" },
        { name: "NumPy", description: "Numerical computing with multi-dimensional arrays.", logo: "NP", color: "text-blue-500" },
        { name: "Dask", description: "Parallel computing for larger-than-memory datasets.", logo: "DS", color: "text-orange-500" },
        { name: "Pydantic", description: "Data validation and structured modeling with Python type hints.", logo: "PD", color: "text-pink-500" },
      ],
      ragLLM: [
        { name: "LangChain", description: "Framework for building LLM applications with chains and agents.", logo: "🦜", color: "text-green-500" },
        { name: "LlamaIndex", description: "Data framework for LLM applications with indexing.", logo: "🦙", color: "text-purple-500" },
        { name: "Instructor", description: "Typed LLM outputs with structured data extraction.", logo: "IN", color: "text-purple-600" },
        { name: "Embedding Models", description: "Dense retrieval, semantic search with vector representations.", logo: "🎯", color: "text-blue-500" },
        { name: "Retrieval Pipelines", description: "RAG workflows, hybrid search, re-ranking strategies.", logo: "🔍", color: "text-indigo-500" },
        { name: "Chunking & Indexing", description: "Text splitting, document parsing, metadata extraction.", logo: "📄", color: "text-cyan-500" },
      ],
      vectorSearch: [
        { name: "FAISS", description: "Facebook's library for efficient similarity search.", logo: "FB", color: "text-blue-600" },
        { name: "Annoy", description: "Approximate nearest neighbors for large datasets.", logo: "🎯", color: "text-green-500" },
        { name: "ScaNN", description: "Google's scalable approximate nearest neighbor search.", logo: "SC", color: "text-red-500" },
      ],
      visualization: [
        { name: "Matplotlib", description: "Comprehensive plotting library for static visualizations.", logo: "📊", color: "text-blue-500" },
        { name: "Seaborn", description: "Statistical data visualization with beautiful defaults.", logo: "🌊", color: "text-teal-500" },
        { name: "Plotly", description: "Interactive, publication-quality graphs and dashboards.", logo: "PL", color: "text-purple-500" },
      ],
    },
    dataEngMLOps: {
      pipelines: [
        { name: "Airflow", description: "Workflow orchestration for complex data pipelines.", logo: "🌬️", color: "text-blue-500" },
        { name: "Apache Spark", description: "Distributed data processing at scale.", logo: "⚡", color: "text-orange-500" },
        { name: "Kafka", description: "Real-time streaming data pipelines and event processing.", logo: "KF", color: "text-gray-700" },
        { name: "Pulsar", description: "Cloud-native distributed messaging and streaming.", logo: "PS", color: "text-blue-600" },
      ],
      deployment: [
        { name: "FastAPI", description: "Modern, fast web framework for building APIs with Python.", logo: "⚡", color: "text-green-500" },
        { name: "Flask", description: "Lightweight WSGI web application framework.", logo: "FL", color: "text-gray-600" },
        { name: "Docker Models", description: "Containerized ML models for consistent deployment.", logo: "🐳", color: "text-blue-500" },
      ],
      tracking: [
        { name: "MLflow", description: "Experiment tracking, model registry, and deployment.", logo: "📊", color: "text-blue-600" },
        { name: "Weights & Biases", description: "ML experiment tracking and visualization platform.", logo: "WB", color: "text-yellow-500" },
      ],
      monitoring: [
        { name: "Prometheus", description: "Monitoring system with time-series database.", logo: "📈", color: "text-orange-500" },
        { name: "Grafana", description: "Analytics and interactive visualization platform.", logo: "GF", color: "text-orange-600" },
        { name: "VictoriaLogs", description: "Log management and analysis system.", logo: "📝", color: "text-blue-500" },
      ],
      versionControl: [
        { name: "Git", description: "Distributed version control system for code management.", logo: "🔀", color: "text-red-500" },
        { name: "GitHub", description: "Code hosting, collaboration, and CI/CD platform.", logo: "GH", color: "text-gray-700" },
      ],
    },
    cloudInfra: {
      cloudPlatforms: [
        { name: "AWS", description: "EC2, S3, Lambda, EKS - comprehensive cloud services.", logo: "☁️", color: "text-orange-500" },
        { name: "GCP", description: "Google Cloud Platform for ML and data services.", logo: "☁️", color: "text-blue-500" },
        { name: "Azure", description: "Microsoft cloud platform with enterprise integration.", logo: "☁️", color: "text-blue-600" },
      ],
      databases: [
        { name: "PostgreSQL", description: "Advanced open-source relational database.", logo: "🐘", color: "text-blue-700" },
        { name: "MySQL", description: "Popular relational database management system.", logo: "🐬", color: "text-blue-500" },
        { name: "MongoDB", description: "Document-oriented NoSQL database.", logo: "🍃", color: "text-green-600" },
        { name: "DynamoDB", description: "AWS managed NoSQL database service.", logo: "DB", color: "text-orange-500" },
        { name: "Neo4j", description: "Graph database for connected data.", logo: "N4", color: "text-blue-500" },
        { name: "Pinecone", description: "Managed vector database for ML applications.", logo: "🌲", color: "text-green-500" },
        { name: "Milvus", description: "Open-source vector database for AI.", logo: "MV", color: "text-blue-600" },
        { name: "Weaviate", description: "Vector search engine with ML models.", logo: "WV", color: "text-green-600" },
      ],
      containers: [
        { name: "Docker", description: "Containerization platform for consistent deployments.", logo: "🐳", color: "text-blue-500" },
        { name: "Kubernetes", description: "Container orchestration for automated deployment.", logo: "K8", color: "text-blue-600" },
        { name: "Helm", description: "Package manager for Kubernetes applications.", logo: "⚓", color: "text-blue-700" },
      ],
      cicd: [
        { name: "GitHub Actions", description: "CI/CD automation directly in GitHub.", logo: "⚙️", color: "text-gray-700" },
        { name: "ArgoCD", description: "GitOps continuous delivery for Kubernetes.", logo: "AR", color: "text-orange-500" },
      ],
      storage: [
        { name: "S3", description: "AWS object storage for scalable data storage.", logo: "📦", color: "text-orange-500" },
        { name: "GCS", description: "Google Cloud Storage for unified object storage.", logo: "📦", color: "text-blue-500" },
        { name: "MinIO", description: "S3-compatible object storage for on-premise and cloud.", logo: "MO", color: "text-red-500" },
        { name: "Cloud Functions", description: "Serverless compute for event-driven workloads.", logo: "λ", color: "text-yellow-500" },
      ],
    },
    tools: {
      visualization: [
        { name: "Power BI", description: "Microsoft's business analytics and visualization tool.", logo: "PB", color: "text-yellow-500" },
        { name: "Tableau", description: "Interactive data visualization and BI platform.", logo: "TB", color: "text-blue-600" },
      ],
      development: [
        { name: "VSCode", description: "Extensible code editor with rich ecosystem.", logo: "VS", color: "text-blue-500" },
        { name: "PyCharm", description: "Python IDE with intelligent code assistance.", logo: "PC", color: "text-green-600" },
        { name: "Postman", description: "API development and testing platform.", logo: "PM", color: "text-orange-500" },
      ],
      aiNotebook: [
        { name: "Google Colab", description: "Cloud-based Jupyter notebooks with GPU support.", logo: "GC", color: "text-orange-500" },
        { name: "Jupyter", description: "Interactive computing and notebook environment.", logo: "JP", color: "text-orange-600" },
      ],
      utilities: [
        { name: "Swagger", description: "API documentation and design tools.", logo: "SW", color: "text-green-500" },
        { name: "cURL", description: "Command-line tool for data transfer.", logo: "cU", color: "text-gray-600" },
        { name: "Linux CLI", description: "Command-line interface for system administration.", logo: "�", color: "text-black" },
      ],
    },
  };

  const [activeTab, setActiveTab] = useState("languages");

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
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full mb-12 bg-card/50 p-1 gap-1">
            <TabsTrigger 
              value="languages"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              Languages
            </TabsTrigger>
            <TabsTrigger 
              value="mlai"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              ML & AI
            </TabsTrigger>
            <TabsTrigger 
              value="frameworks"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              Frameworks
            </TabsTrigger>
            <TabsTrigger 
              value="dataEngMLOps"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              MLOps
            </TabsTrigger>
            <TabsTrigger 
              value="cloudInfra"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              Cloud & DB
            </TabsTrigger>
            <TabsTrigger 
              value="tools"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs md:text-sm"
            >
              Tools
            </TabsTrigger>
          </TabsList>

          {/* Languages Tab with Subcategories */}
          <TabsContent value="languages" className="space-y-8 animate-fade-in">
            {/* Programming Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.languages.programming.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge 
                          variant="outline"
                          className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all"
                        >
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            {/* Database Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Database Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.languages.database.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge 
                          variant="outline"
                          className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all"
                        >
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            {/* Query Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Query Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.languages.query.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge 
                          variant="outline"
                          className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all"
                        >
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            {/* Markup Languages */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Markup & Styling</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.languages.markup.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge 
                          variant="outline"
                          className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all"
                        >
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* ML & AI Tab */}
          <TabsContent value="mlai" className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Classical ML</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.mlai.classicalML.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Deep Learning</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.mlai.deepLearning.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">NLP</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.mlai.nlp.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Frameworks & Libraries Tab */}
          <TabsContent value="frameworks" className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">ML Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.frameworks.mlLibraries.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Deep Learning</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.frameworks.deepLearningFrameworks.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">NLP</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.frameworks.nlpFrameworks.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Data Processing</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.frameworks.dataProcessing.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">RAG & LLM Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.frameworks.ragLLM.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Vector Search Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.frameworks.vectorSearch.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Visualization Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.frameworks.visualization.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Data Engineering & MLOps Tab */}
          <TabsContent value="dataEngMLOps" className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Data Pipelines / ETL</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.dataEngMLOps.pipelines.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Model Deployment</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.dataEngMLOps.deployment.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Experiment Tracking</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.dataEngMLOps.tracking.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Monitoring & Observability</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.dataEngMLOps.monitoring.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Version Control</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.dataEngMLOps.versionControl.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Cloud, Databases & Infrastructure Tab */}
          <TabsContent value="cloudInfra" className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.cloudInfra.cloudPlatforms.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Databases</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.cloudInfra.databases.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Containerization & Orchestration</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.cloudInfra.containers.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">CI/CD</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.cloudInfra.cicd.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Cloud Storage & Compute</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.cloudInfra.storage.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Visualization Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.tools.visualization.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Development Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.tools.development.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">AI & Notebook Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.tools.aiNotebook.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Other Utilities</h3>
              <div className="flex flex-wrap gap-3">
                {skillCategories.tools.utilities.map((skill) => (
                  <HoverCard key={skill.name} openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <div>
                        <Badge variant="outline" className="px-4 py-2 text-sm cursor-pointer hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all">
                          <span className={`mr-2 ${skill.color}`}>{skill.logo}</span>
                          {skill.name}
                        </Badge>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 card-glass" side="top">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className={`text-4xl ${skill.color}`}>{skill.logo}</span>
                          <h4 className="font-bold text-xl">{skill.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Other tabs - remove old rendering logic */}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
