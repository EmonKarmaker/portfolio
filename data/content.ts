export const profile = {
  name: "Emon Karmoker",
  roles: ["AI / ML Engineer", "Software Engineer", "Agentic AI Systems"],
  tagline:
    "I build LLM powered applications, autonomous agents, and deep learning systems, from RAG pipelines and LangGraph state machines to medical imaging models published with IEEE.",
  location: "Dhaka, Bangladesh",
  email: "emonkarmaker101@gmail.com",
  stats: [
    { value: "2x", label: "IEEE / Springer publications" },
    { value: "5", label: "live demos you can try" },
    { value: "16+", label: "shipped AI and full stack projects" },
  ],
  links: {
    github: "https://github.com/EmonKarmaker",
    linkedin: "https://www.linkedin.com/in/emon-karmoker-9308431b4/",
    scholar: "https://scholar.google.com/citations?user=l8znEFoAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Emon-Karmoker",
    kaggle: "https://www.kaggle.com/constantine101",
    huggingface: "https://huggingface.co/EdwardConstantine",
    facebook: "https://www.facebook.com/emon.karmaker.1",
    instagram: "https://www.instagram.com/edward_cons1an7ine/",
    youtube: "https://www.youtube.com/channel/UC_FFz7HrnOVrd1_mrw7eFtg",
    discord: "https://discord.gg/867FWAch",
    twitch: "https://www.twitch.tv/edward_cons1an7ine",
    email: "mailto:emonkarmaker101@gmail.com",
  },
};

export const about = {
  intro:
    "I'm a Computer Science graduate with strong footing in machine learning, deep learning, and agentic AI, all built around Python. I build LLM powered applications and AI agents with FastAPI, LangGraph, LangChain, and automation tools like n8n, and I'm comfortable training models in TensorFlow, Keras, PyTorch, and Scikit learn.",
  detail:
    "I deploy scalable systems with Docker and cloud platforms, and lean on SQL and Power BI when the work turns to data. Right now I'm a Software Engineer at Roaming Bangladesh, after a stint as an AI Backend Developer at Beuptech Agency. Alongside the day job, two of my research papers are published with IEEE and Springer.",
  // what I actually reach for, grouped the way I think about it
  skills: [
    { group: "ML, DL & LLM", items: ["PyTorch", "TensorFlow", "Keras", "Scikit learn", "OpenCV", "Transformers", "LangChain", "LangGraph", "RAG"] },
    { group: "Backend & APIs", items: ["FastAPI", "Flask", "async SQLAlchemy", "Gradio", "n8n"] },
    { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
    { group: "Data & Vector", items: ["PostgreSQL", "pgvector", "Pinecone", "ChromaDB", "Power BI", "SQL", "Selenium"] },
    { group: "Cloud & Tools", items: ["Docker", "AWS", "Render", "Vercel", "Supabase", "Hugging Face", "Git", "Jupyter", "Colab"] },
    { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "C++"] },
  ],
  // proficiency for the dashboard bar chart (0 to 100)
  proficiency: [
    { name: "Python", level: 95 },
    { name: "LLM / RAG / LangGraph", level: 92 },
    { name: "FastAPI / Backend", level: 90 },
    { name: "Deep Learning (TF / PyTorch)", level: 88 },
    { name: "PostgreSQL / pgvector", level: 84 },
    { name: "Next.js / TypeScript", level: 80 },
    { name: "Power BI / Data", level: 72 },
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    org: "Roaming Bangladesh Limited",
    period: "Jun 2026 to Present",
    status: "active",
    desc: "Full stack work on a B2B travel tech platform: pixel accurate Figma to Next.js frontends, FastAPI REST APIs, semantic search on PostgreSQL with pgvector, and AI features built on LangGraph and RAG pipelines.",
  },
  {
    role: "AI Backend Developer",
    org: "Beuptech Agency, a concern of Betopia Group",
    period: "Jan 2026 to Apr 2026",
    status: "done",
    desc: "Built LLM powered backend services and AI agents for production use.",
  },
  {
    role: "Grader, Fundamental Calculus",
    org: "United International University",
    period: "Mar 2023 to Jun 2023",
    status: "done",
    desc: "Supported academic assessment and guided students through foundational mathematics.",
  },
  {
    role: "Deputy of Public Relations",
    org: "UIU Computer Club",
    period: "May 2022 to Jun 2023",
    status: "done",
    desc: "Managed collaborations, promoted technical events, and led communications initiatives.",
  },
  {
    role: "Campus Ambassador",
    org: "Youth Opportunities",
    period: "Jan 2023 to Dec 2023",
    status: "done",
    desc: "Represented platform activities, built engagement strategies, and supported youth empowerment programs.",
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
  category: string;
  award?: string;
  metric?: string; // headline number shown on the card
};

export const projects: Project[] = [
  // Award / Featured research builds
  {
    title: "sCMGC, Single Cell RNA Seq Clustering",
    blurb:
      "A unified deep learning framework for marker gene based clustering of single cell RNA seq data. Advanced clustering accuracy by roughly 40% over traditional methods.",
    tags: ["Python", "TensorFlow", "Deep Learning", "Bioinformatics"],
    repo: "https://github.com/EmonKarmaker/Final-Year-Design-Project",
    featured: true,
    award: "1st Runner Up, UIU Project Show",
    metric: "+40% accuracy",
    category: "Featured",
  },
  {
    title: "Teaching Assistant Recruitment System",
    blurb:
      "A database backed decision system for TA selection that streamlined recruitment for 112+ students.",
    tags: ["Web App", "Database Design", "Decision Systems"],
    repo: "https://github.com/EmonKarmaker/TA-DBMS-LAB",
    featured: true,
    award: "2nd Runner Up, UIU Project Show",
    metric: "112+ students",
    category: "Featured",
  },

  // Agentic AI
  {
    title: "AI Reservation SaaS",
    blurb:
      "A multi tenant AI receptionist for service businesses such as dental, HVAC, and law, handling chat and voice bookings. Runs on a 23 node LangGraph state machine, a 17 table schema, a 7 layer booking verification pipeline, and 65+ endpoints.",
    tags: ["FastAPI", "LangGraph", "pgvector", "Stripe", "Next.js", "Supabase"],
    repo: "https://github.com/EmonKarmaker/AI_reservation",
    metric: "65+ endpoints",
    category: "Agentic AI",
  },
  {
    title: "Autonomous AI Agent",
    blurb: "A web research and task execution agent built on FastAPI and LangGraph.",
    tags: ["LangGraph", "FastAPI", "Agentic AI"],
    repo: "https://github.com/EmonKarmaker/AI-agent",
    live: "https://ai-agent-1-53gg.onrender.com/",
    category: "Agentic AI",
  },

  // LLM Applications
  {
    title: "AI Powered Medical Chatbot",
    blurb:
      "A RAG pipeline over 500+ medical documents using LangChain and Llama 3.3 70B. A dockerized Flask app with a Pinecone vector database, tuned for free tier hosting with a 60% memory reduction.",
    tags: ["RAG", "LangChain", "Llama 3.3", "Pinecone", "Flask"],
    repo: "https://github.com/EmonKarmaker/medical-chatbot-2.0",
    live: "https://medical-chatbot-2-0-xz3n.onrender.com/",
    metric: "500+ docs",
    category: "LLM Apps",
  },
  {
    title: "Semantic Book Recommender",
    blurb:
      "Semantic search with Sentence Transformers and ChromaDB plus emotion based filtering across 10k+ books. Deployed on Hugging Face Spaces with a response under 2 seconds.",
    tags: ["Sentence Transformers", "ChromaDB", "Gradio"],
    repo: "https://github.com/EmonKarmaker/book_reccomender-2.0",
    live: "https://huggingface.co/spaces/EdwardConstantine/book-recommender",
    metric: "10k+ books",
    category: "LLM Apps",
  },
  {
    title: "AI Study Engine",
    blurb:
      "A Streamlit and Groq study platform with flashcards, quizzes, summarization, answer evaluation, PDF and TXT upload, auth, and SQLite. Dockerized on Render.",
    tags: ["Streamlit", "Groq", "LLaMA", "SQLite"],
    repo: "https://github.com/EmonKarmaker/ai-study-engine",
    live: "https://ai-study-engine.onrender.com/",
    category: "LLM Apps",
  },
  {
    title: "AI Customer Support System",
    blurb: "A RAG based customer support service on FastAPI with Groq, Pinecone, and Hugging Face.",
    tags: ["RAG", "FastAPI", "Groq", "Pinecone"],
    repo: "https://github.com/EmonKarmaker/ai-support-system",
    category: "LLM Apps",
  },
  {
    title: "Chatbot",
    blurb: "An NLP conversational chatbot built in Python.",
    tags: ["NLP", "Python"],
    repo: "https://github.com/EmonKarmaker/chatbot",
    category: "LLM Apps",
  },

  // Automation
  {
    title: "n8n AI Email Response System",
    blurb: "Automated email handling with a Slack human in the loop approval step.",
    tags: ["n8n", "LLM", "Slack", "Automation"],
    repo: "https://github.com/EmonKarmaker/n8n-ai-email-response-system",
    category: "Automation",
  },

  // Speech & Language
  {
    title: "Bilingual Bangla English ASR",
    blurb: "A speech recognition system fine tuned on Whisper small for Bangla and English.",
    tags: ["Whisper", "ASR", "Fine tuning"],
    repo: "https://github.com/EmonKarmaker/bangla-english-asr",
    category: "Speech & Language",
  },
  {
    title: "Quran Recitation Evaluation",
    blurb: "A real time recitation evaluator built on FastAPI and Whisper, streaming feedback to the browser over WebSocket.",
    tags: ["FastAPI", "Whisper", "WebSocket"],
    repo: "https://github.com/EmonKarmaker",
    category: "Speech & Language",
  },
  {
    title: "LLaMA 3.1 8B Bengali Fine Tune",
    blurb: "LLaMA 3.1 8B fine tuned on Bengali empathetic conversations using LoRA, 4 bit, on a Kaggle T4.",
    tags: ["LLaMA", "LoRA", "4 bit", "Fine tuning"],
    live: "https://huggingface.co/EdwardConstantine/bengali-empathy-llama",
    category: "Speech & Language",
  },

  // Full Stack
  {
    title: "HomieGhor",
    blurb: "A production household expense tracker used daily by flatmates. FastAPI and Next.js, deployed on Render and Vercel.",
    tags: ["FastAPI", "Next.js", "Neon Postgres"],
    repo: "https://github.com/EmonKarmaker/backend-household-expenses-",
    live: "https://homieghor.vercel.app/",
    metric: "in production",
    category: "Full Stack",
  },
  {
    title: "Pharmacy Management System",
    blurb: "A Laravel web application for managing pharmacy inventory and operations.",
    tags: ["Laravel", "PHP", "Web App"],
    repo: "https://github.com/EmonKarmaker/Pharmacy-Management-System-1",
    category: "Full Stack",
  },

  // Computer Vision
  {
    title: "Posture Detection",
    blurb: "Real time posture estimation built on PoseNet.",
    tags: ["PoseNet", "Computer Vision", "TensorFlow"],
    repo: "https://github.com/EmonKarmaker/Posture_detection_using_PoseNet",
    category: "Computer Vision",
  },
  {
    title: "Face Mask Detector",
    blurb: "A mask detection model built with OpenCV and deep learning.",
    tags: ["OpenCV", "Deep Learning"],
    repo: "https://github.com/EmonKarmaker/face_mask_detector",
    category: "Computer Vision",
  },

  // Machine Learning & Analytics
  {
    title: "Car Price Prediction",
    blurb: "A regression model that predicts used car prices.",
    tags: ["Scikit learn", "Regression"],
    repo: "https://github.com/EmonKarmaker/car_price_prediction",
    category: "Machine Learning",
  },
  {
    title: "Movie Recommendation System",
    blurb: "A content based movie recommender built with pandas.",
    tags: ["Pandas", "Recommendation"],
    repo: "https://github.com/EmonKarmaker/Movie_recommendation_system_project_ML",
    category: "Machine Learning",
  },
  {
    title: "WhatsApp Chat Analytics",
    blurb: "A data visualization tool that analyzes exported WhatsApp chats.",
    tags: ["Pandas", "Data Viz", "Plotly"],
    repo: "https://github.com/EmonKarmaker/whatsapp_chat_analysis",
    category: "Machine Learning",
  },
];

export const publications = [
  {
    title: "A Deep Learning Based Approach to Identify Colon Cancer from Endoscopic Images",
    venue: "4th IEEE BECITHCON 2025",
    desc: "Benchmarked GoogLeNet, ResNet, and YOLOv8 on Kvasir SEG with uniform preprocessing. YOLOv8 reached 97.5% accuracy, the best of the three for colorectal polyp detection.",
    link: "https://ieeexplore.ieee.org/abstract/document/11504178",
    linkLabel: "IEEE Xplore",
  },
  {
    title: "Deep Learning Enhanced OCT Image Analysis Pipeline",
    venue: "ICDSAIA 2025 (Springer)",
    desc: "An OCT pipeline with denoising, LAB based fuzzy contrast enhancement, and ESRGAN super resolution. The CNN reached 99% B scan and 92% volume accuracy, 32% faster than baselines.",
    link: "https://link.springer.com/10.1007/978-3-032-11335-1_19",
    linkLabel: "SpringerLink",
  },
];

export const awards = [
  { title: "1st Runner Up, sCMGC Single Cell RNA Seq Clustering", venue: "UIU Project Show" },
  { title: "2nd Runner Up, TA Recruitment System", venue: "UIU Project Show" },
];

export const education = {
  degree: "B.Sc Computer Science & Engineering",
  school: "United International University",
  period: "2020 to 2025",
  location: "Dhaka, Bangladesh",
};

export const certifications = [
  {
    title: "Data Engineer with Python & Machine Learning",
    org: "Center For Development of IT Professionals (CDIP), UIU",
    period: "2024 to 2025",
  },
  {
    title: "Introduction to Python and Big Data Analysis",
    org: "Center For Development of IT Professionals (CDIP), UIU",
    period: "2023 to 2024",
  },
  {
    title: "Graphics Design (CTG 106)",
    org: "CodersTrust",
    period: "2020",
  },
  {
    title: "Computer Basic and ICT Application Course",
    org: "Youth Development",
    period: "2020",
  },
];
