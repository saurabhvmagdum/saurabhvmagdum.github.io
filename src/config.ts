// Site Configuration
// Saurabh Magdum - AI Researcher & ML Engineer Portfolio

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Saurabh Magdum | AI Researcher & Engineer",
  siteDescription: "AI Researcher and ML Engineer specializing in Federated Learning, Privacy-Preserving AI, Quantum Computing, and Blockchain Interoperability. Published IEEE researcher.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "AI RESEARCHER",
  heroImage: "/hero-portrait.png",
  heroImageAlt: "Saurabh Magdum - AI Researcher & ML Engineer",
  overlayText: "Researching Intelligent & Privacy-Preserving Systems",
  brandName: "Saurabh Magdum",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "AI Researcher &",
  titleLine2: "ML Engineer",
  description: "I am an AI Researcher and ML Engineer with a passion for building privacy-preserving intelligent systems. Currently serving as an Assistant Professor at PCCOE and an AI Agent Development Intern at Decloud Labs, I research at the intersection of Federated Learning, Blockchain, and Quantum Computing. Published IEEE researcher with hands-on experience building privacy-first AI systems for healthcare, security, and decentralized ecosystems.",
  portfolioImages: [
    { src: "/grid-1.jpg", alt: "AI Research Workspace" },
    { src: "/grid-2.jpg", alt: "ML Performance Dashboard" },
    { src: "/grid-3.jpg", alt: "Human-AI Collaboration" },
    { src: "/grid-4.jpg", alt: "Decentralized Network" },
    { src: "/grid-5.jpg", alt: "Quantum Computing" },
  ],
  accentText: "AI Research - 2025",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Featured Work",
  titleRegular: "Selected",
  titleItalic: "Projects",
  viewAllText: "View All Projects",
  viewAllHref: "https://github.com/saurabhvmagdum",
  viewProjectText: "View Project",
  projects: [
    {
      id: 1,
      title: "Q-GUARD: Quantum-Optimized SOC Decision Engine",
      category: "Quantum Computing · AI Security",
      year: "2025 — Ongoing",
      image: "/project-ai-ml.jpg",
      description: "A quantum-optimized decision engine transforming SOC alert triage into a QUBO problem, solved using QAOA on Fujitsu's 40-qubit quantum simulator. Finalist at Fujitsu Quantum Computing Challenge 2026.",
    },
    {
      id: 2,
      title: "Multi-Domain RAG System for ISRO",
      category: "RAG · LLM · Enterprise AI",
      year: "2025 — Ongoing",
      image: "/project-healthcare.jpg",
      description: "On-premise Retrieval-Augmented Generation system integrating multiple data domains for accurate, context-aware query answering in restricted environments. Stack: Python, FAISS, Elasticsearch, LangChain, Docker, FastAPI, PostgreSQL.",
    },
    {
      id: 3,
      title: "Privacy-Preserving Mental Health Rec. System",
      category: "Federated Learning · Blockchain",
      year: "2024",
      image: "/project-healthcare.jpg",
      description: "Framework combining Federated Learning and Blockchain for secure, AI-powered mental health recommendations without compromising user privacy. Integrates speech/text analysis from wearables with decentralized IPFS storage. Built with PyTorch, Flower, and Solidity.",
    },
    {
      id: 4,
      title: "DFIAN — Decentralized Fraudulent Identity Alert Network",
      category: "Blockchain · Security",
      year: "2024",
      image: "/project-blockchain.jpg",
      description: "Blockchain-based fraud detection and alert system enabling banks to share fraudulent identity information in real time while preserving privacy. Features cross-bank communication, regulator oversight, and reputation scoring. Stack: Solidity, React.js, Web3.js, Ethereum/Polygon.",
    },
    {
      id: 5,
      title: "CredenceAI — Multi-Agent Misinformation Verification",
      category: "Multi-Agent AI · Computer Vision",
      year: "2025",
      image: "/project-ai-ml.jpg",
      description: "Cloud-native multi-agent AI system for real-time multimodal misinformation verification (text, image, audio, video) using Azure-based microservices architecture. Employs parallel verification pipelines and CNN-based detection.",
    },
    {
      id: 6,
      title: "ConvLSTM-Based Video Anomaly Detection",
      category: "Computer Vision · Deep Learning",
      year: "2024",
      image: "/project-ai-ml.jpg",
      description: "Lightweight ConvLSTM neural network detecting anomalies in surveillance videos using the CUHK Avenue Dataset. Implements efficient preprocessing, sequence generation, and adaptive thresholding for real-time anomaly detection.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What I Offer",
  titleLine1: "Research &",
  titleLine2Italic: "Technical Expertise",
  description: "I specialize in AI research and engineering at the intersection of Federated Learning, Privacy-Preserving AI, Blockchain, and Quantum Computing — building systems that are intelligent, secure, and ethically grounded.",
  services: [
    {
      iconName: "Sparkles",
      title: "AI & Machine Learning Research",
      description: "Deep expertise in PyTorch, TensorFlow, Federated Learning (Flower/TFF), NLP (BERT, HuggingFace Transformers), and Computer Vision for rigorous AI research and real-world deployment.",
    },
    {
      iconName: "Diamond",
      title: "Blockchain & Decentralized Systems",
      description: "Solidity, Ethereum, Polygon, IPFS, Web3.js, and Truffle for building decentralized applications, smart contracts, and privacy-preserving blockchain protocols.",
    },
    {
      iconName: "Users",
      title: "Quantum Computing",
      description: "Applying Quantum Approximate Optimization Algorithm (QAOA) and post-quantum cryptography (Kyber, Dilithium) to real-world optimization and security problems.",
    },
    {
      iconName: "Camera",
      title: "Full Stack & AI Deployment",
      description: "React.js, Node.js, FastAPI, Docker, PostgreSQL, and LangChain for building and deploying end-to-end AI-powered full-stack applications at scale.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "Why Work With Me",
  titleRegular: "Research-Driven",
  titleItalic: "Engineering",
  statsLabel: "By The Numbers",
  stats: [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 8, suffix: "+", label: "Projects Completed" },
    { value: 1, suffix: "", label: "IEEE Publication" },
    { value: 100, suffix: "%", label: "Commitment to Quality" },
  ],
  featureCards: [
    {
      image: "/feature-1.jpg",
      imageAlt: "Privacy-Preserving AI",
      title: "Privacy-Preserving AI",
      description: "Implementing Federated Learning and Differential Privacy solutions that protect user data while delivering powerful AI capabilities.",
    },
    {
      image: "/feature-2.jpg",
      imageAlt: "Quantum & Security Research",
      title: "Quantum & Security Research",
      description: "Applying quantum optimization and post-quantum cryptography to next-generation security and decision-making systems.",
    },
  ],
  wideImage: "/wide-tech.jpg",
  wideImageAlt: "AI Research and Blockchain",
  wideTitle: "Research with Real-World Impact",
  wideDescription: "From IEEE-published Federated Learning research to Fujitsu Quantum Challenge finals — combining rigorous academic research with practical engineering.",
};

// Testimonials / Experience Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Professional Experience",
  titleRegular: "Work",
  titleItalic: "Experience",
  testimonials: [
    {
      id: 1,
      name: "PCCOE — Pimpri Chinchwad College of Engineering",
      role: "Assistant Professor · July 2026 – Present",
      image: "/grid-1.jpg",
      quote: "Delivering lectures, tutorials, and practical sessions for undergraduate students with a focus on Computer Engineering and emerging technologies. Guiding students in academic assignments, technical projects, research activities, and problem-solving. Designing course materials, evaluating student performance, and contributing to departmental academic activities.",
    },
    {
      id: 2,
      name: "PCCOE — Pimpri Chinchwad College of Engineering",
      role: "Teaching Assistant · Sept 2025 – May 2026",
      image: "/grid-2.jpg",
      quote: "Assisted faculty in delivering lectures, tutorials, and practical sessions for undergraduate students. Provided academic support by explaining concepts, resolving doubts, and guiding students in assignments. Evaluated assignments, quizzes, and exams. Mentored students on academic projects and research work.",
    },
    {
      id: 3,
      name: "Decloud Labs",
      role: "AI Agent Development Intern · Dec 2024 – Dec 2025",
      image: "/grid-3.jpg",
      quote: "Architected autonomous AI agents using Skynet tools and APIs. Integrated Web2 and Web3 resources to expand agent capabilities and improve operational efficiency. Contributed to the enhancement of Skynet's core platform, optimizing features and elevating the overall user experience.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently",
  titleItalic: "Asked",
  ctaText: "Still have questions? Let's connect!",
  ctaButtonText: "Get in Touch",
  ctaHref: "mailto:saurabhvmagdum@gmail.com",
  faqs: [
    {
      id: "1",
      question: "What is your primary area of research?",
      answer: "My research focuses on Privacy-Preserving AI, specifically Federated Learning, Blockchain-based data governance, and Quantum Computing applications in cybersecurity. My IEEE-published paper covers Bibliometric Analysis of Blockchain-based Federated Learning for Privacy-Preserving AI Models (ICBDS 2025).",
    },
    {
      id: "2",
      question: "What technologies do you work with?",
      answer: "For AI/ML research: Python, PyTorch, TensorFlow, Flower (Federated Learning), HuggingFace Transformers, OpenCV, Scikit-learn. For blockchain: Solidity, Ethereum, Polygon, IPFS, Web3.js, Truffle. For full-stack deployment: React.js, Node.js, FastAPI, Docker, PostgreSQL, LangChain.",
    },
    {
      id: "3",
      question: "Do you have published research?",
      answer: "Yes! I have a published paper titled 'Bibliometric Analysis of Literature Based on Blockchain-Based Federated Learning for Privacy-Preserving AI Models' at the 2025 IEEE International Conference on Blockchain and Distributed Systems Security (ICBDS). DOI: 10.1109/icbds67396.2025.11376888. Co-authored with Dr. Sonali Patil and Dr. Deepali Naik.",
    },
    {
      id: "4",
      question: "What are your academic qualifications?",
      answer: "I hold an M.Tech. (CGPA: 8.88) from Pimpri Chinchwad College of Engineering (PCCOE) and a B.E. (69.40%) from Dr. J. J. Magdum College of Engineering, Jaysingpur (Shivaji University). I am currently an Assistant Professor at PCCOE.",
    },
    {
      id: "5",
      question: "Are you open to collaboration or research opportunities?",
      answer: "Absolutely! I'm always excited to collaborate on AI research, privacy-preserving systems, quantum computing applications, or blockchain projects. Whether it's joint research, industry projects, or academic collaborations — feel free to reach out.",
    },
    {
      id: "6",
      question: "How can I contact you?",
      answer: "You can reach me via email at saurabhvmagdum@gmail.com, connect with me on LinkedIn, check my research profile on ORCID, or view my projects on GitHub. I'm always happy to discuss new research ideas and opportunities!",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "SAURABH",
  contactLabel: "Get in Touch",
  email: "saurabhvmagdum@gmail.com",
  locationText: "Dhanori, Pune, Maharashtra, India",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  socialLabel: "Connect With Me",
  socialLinks: [
    { iconName: "Github", href: "https://github.com/saurabhvmagdum", label: "GitHub" },
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/saurabh-magdum-940223221", label: "LinkedIn" },
    { iconName: "Mail", href: "mailto:saurabhvmagdum@gmail.com", label: "Email" },
  ],
  tagline: "Researching the future with AI, Blockchain & Quantum Computing\nLet's build something meaningful together",
  copyright: "© 2025 Saurabh Magdum. All rights reserved.",
  bottomLinks: [
    { label: "GitHub", href: "https://github.com/saurabhvmagdum" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saurabh-magdum-940223221" },
    { label: "Resume", href: "#" },
  ],
};
