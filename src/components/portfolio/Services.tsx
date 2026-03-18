const services = [
  {
    num: "001",
    title: "Machine Learning Engineering",
    desc: "End-to-end ML pipeline design, model training, fine-tuning, and production deployment with MLOps best practices.",
    tags: ["PyTorch", "TensorFlow", "MLflow", "Kubernetes"],
  },
  {
    num: "002",
    title: "AI Agent Architecture",
    desc: "Multi-agent orchestration systems using LangChain, AutoGen and agentic frameworks for autonomous task execution.",
    tags: ["LangChain", "AutoGen", "CrewAI", "OpenAI"],
  },
  {
    num: "003",
    title: "Generative AI",
    desc: "Large language model fine-tuning, RAG system design, prompt engineering, and custom LLM applications at enterprise scale.",
    tags: ["GPT-4", "Llama", "RAG", "Vector DBs"],
  },
  {
    num: "004",
    title: "Blockchain Development",
    desc: "Smart contract development, cross-chain interoperability protocols, DeFi applications, and Web3 backend infrastructure.",
    tags: ["Solidity", "Ethereum", "Polkadot", "Web3.js"],
  },
];

const Services = () => {
  return (
    <section id="skills" className="section-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
          <h2 className="text-6xl md:text-7xl font-black text-foreground tracking-tight">
            Services<span className="text-muted-foreground">.</span>
          </h2>
          <p className="text-muted-foreground text-sm font-medium hidden md:block">
            Core expertise areas
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-light-bg p-8 md:p-10 group hover:bg-dark-bg transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-muted-foreground group-hover:text-white/40 text-xs font-mono font-bold tracking-widest transition-colors">
                  {service.num}
                </span>
                <span className="text-foreground group-hover:text-white text-xl transition-colors">→</span>
              </div>
              <h3 className="text-2xl font-black text-foreground group-hover:text-white mb-4 transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/60 text-sm leading-relaxed mb-6 transition-colors">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 border border-border group-hover:border-white/20 rounded-full text-muted-foreground group-hover:text-white/60 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
