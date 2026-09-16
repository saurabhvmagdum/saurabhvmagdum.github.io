// Site Configuration
// Saurabh Magdum - AI & ML Engineer Portfolio

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Saurabh Magdum | AI & ML Engineer",
  siteDescription: "Machine Learning Engineer and AI Agent Architect specializing in Generative AI, Agentic Workflows, and Blockchain Interoperability.",
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
  backgroundText: "AI ENGINEER",
  heroImage: "/hero-portrait.png",
  heroImageAlt: "Saurabh Magdum - AI & ML Engineer",
  overlayText: "Building Intelligent Autonomous Systems",
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
  titleLine1: "Machine Learning",
  titleLine2: "Engineer & AI Architect",
  description: "I am a Machine Learning Engineer and AI Agent Architect with a passion for bridging the gap between Web2 and Web3. Currently serving as an AI Agent Development Intern at Decloud Labs, I build autonomous systems that can execute complex workflows on-chain and off-chain. My expertise lies in Federated Learning, Privacy-Preserving AI, and creating scalable decentralized architectures.",
  portfolioImages: [
    { src: "/grid-1.jpg", alt: "AI Development Workspace" },
    { src: "/grid-2.jpg", alt: "ML Performance Dashboard" },
    { src: "/grid-3.jpg", alt: "Human-AI Collaboration" },
    { src: "/grid-4.jpg", alt: "Decentralized Network" },
    { src: "/grid-5.jpg", alt: "Smart Contract Development" },
  ],
  accentText: "AI & Blockchain - 2024",
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
      title: "ConvLSTM Video Anomaly Detection",
      category: "Computer Vision",
      year: "2024",
      image: "/project-ai-ml.jpg",
      description: "A lightweight neural network for detecting anomalies in real-time surveillance videos using Spatio-Temporal features. Built with Python, TensorFlow, and OpenCV.",
    },
    {
      id: 2,
      title: "DFIAN - Decentralized Fraud Alert",
      category: "Blockchain",
      year: "2024",
      image: "/project-blockchain.jpg",
      description: "Blockchain-based system for secure, real-time information sharing among banks to prevent identity fraud. Powered by Solidity, React, Polygon, and Web3.js.",
    },
    {
      id: 3,
      title: "Mental Health Rec. System",
      category: "Federated Learning",
      year: "2024",
      image: "/project-healthcare.jpg",
      description: "Privacy-preserving framework combining Federated Learning and Blockchain for secure AI health recommendations. Built with PyTorch, Flower, and IPFS.",
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
  titleLine1: "Technical",
  titleLine2Italic: "Expertise",
  description: "I specialize in building intelligent systems that combine cutting-edge AI with decentralized technologies. From autonomous AI agents to privacy-preserving machine learning solutions.",
  services: [
    {
      iconName: "Sparkles",
      title: "AI & Machine Learning",
      description: "Expertise in Python, TensorFlow, PyTorch, OpenCV, Pandas, and NumPy for building robust ML models and computer vision solutions.",
    },
    {
      iconName: "Diamond",
      title: "Web3 & Blockchain",
      description: "Solidity, Ethereum, Polygon, IPFS, and Web3.js for creating decentralized applications and smart contracts.",
    },
    {
      iconName: "Users",
      title: "Full Stack Development",
      description: "React, Node.js, PostgreSQL, Docker, and Git for building scalable full-stack applications with modern DevOps practices.",
    },
    {
      iconName: "Camera",
      title: "AI Agent Architecture",
      description: "Designing and implementing autonomous AI agents using Skynet tools and APIs for complex on-chain and off-chain workflows.",
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
  titleRegular: "Bridging",
  titleItalic: "Web2 & Web3",
  statsLabel: "By The Numbers",
  stats: [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 10, suffix: "+", label: "Projects Completed" },
    { value: 5, suffix: "+", label: "Tech Stack Areas" },
    { value: 100, suffix: "%", label: "Commitment to Quality" },
  ],
  featureCards: [
    {
      image: "/feature-1.jpg",
      imageAlt: "AI Automation",
      title: "AI Agent Development",
      description: "Building autonomous systems that can execute complex workflows using cutting-edge AI technologies.",
    },
    {
      image: "/feature-2.jpg",
      imageAlt: "ML Model Training",
      title: "Privacy-Preserving ML",
      description: "Implementing Federated Learning solutions that protect user data while delivering powerful AI capabilities.",
    },
  ],
  wideImage: "/wide-tech.jpg",
  wideImageAlt: "Future of AI and Blockchain",
  wideTitle: "The Future is Autonomous",
  wideDescription: "Combining AI and blockchain to build the next generation of intelligent decentralized applications.",
};

// Testimonials Section
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
      name: "Decloud Labs",
      role: "AI Agent Development Intern",
      image: "/grid-3.jpg",
      quote: "Dec 2024 - Present: Architecting autonomous AI agents using Skynet tools and APIs. Integrating Web2 and Web3 resources to expand agent capabilities. Optimizing platform core features for better user experience.",
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
      question: "What is your primary area of expertise?",
      answer: "I specialize in AI Agent Architecture, combining Generative AI with blockchain technologies. My core strengths include Federated Learning, Privacy-Preserving AI, and building autonomous systems that bridge Web2 and Web3.",
    },
    {
      id: "2",
      question: "What technologies do you work with?",
      answer: "I work with Python, TensorFlow, PyTorch for AI/ML; Solidity, Ethereum, Polygon for blockchain; and React, Node.js, Docker for full-stack development. I'm also experienced with IPFS and Web3.js for decentralized applications.",
    },
    {
      id: "3",
      question: "Are you open to collaboration or job opportunities?",
      answer: "Absolutely! I'm always excited to work on innovative projects at the intersection of AI and blockchain. Whether it's freelance work, full-time positions, or collaborative projects, feel free to reach out.",
    },
    {
      id: "4",
      question: "How can I contact you?",
      answer: "You can reach me via email at saurabhvmagdum@gmail.com, connect with me on LinkedIn, or check out my projects on GitHub. I'm always happy to discuss new opportunities and ideas!",
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
  locationText: "India",
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
  tagline: "Building the future with AI & Blockchain\nLet's create something amazing together",
  copyright: "© 2024 Saurabh Magdum. All rights reserved.",
  bottomLinks: [
    { label: "GitHub", href: "https://github.com/saurabhvmagdum" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saurabh-magdum-940223221" },
    { label: "Resume", href: "#" },
  ],
};
