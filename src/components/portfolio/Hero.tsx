import heroBg from "@/assets/hero-bg.jpg";

const services = [
  "Generative AI",
  "AI Agent Architect",
  "Blockchain Interoperability",
  "Agentic Workflows",
  "LLM Fine-Tuning",
  "RAG Systems",
  "ML Engineering",
  "Smart Contracts",
];

const Hero = () => {
  const ticker = [...services, ...services];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col section-dark overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-dark-bg/60" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-6 md:px-12 pt-28 pb-12 max-w-7xl mx-auto w-full">
        {/* Top Row: Name + Avatar Card */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Giant Heading */}
          <div className="flex-1">
            <h1 className="text-display text-[12vw] md:text-[10vw] lg:text-[8vw] text-white leading-none select-none">
              Saurabh<sup className="text-[3vw] md:text-[2vw] font-light align-super ml-1 text-white/60">®</sup>
            </h1>
            <p className="text-white/50 text-xl md:text-2xl font-light mt-4 tracking-widest uppercase">
              ML Engineer & AI Agent Architect
            </p>
          </div>

          {/* Avatar Card */}
          <div className="md:mt-8 flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center max-w-[200px]">
              <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">
                SM
              </div>
              <p className="text-white text-sm font-semibold">Saurabh Magdum</p>
              <p className="text-white/60 text-xs mt-1 mb-4">ML Engineer</p>
              <a
                href="#contact"
                className="inline-block bg-white text-dark-bg text-xs font-bold px-4 py-2 rounded-full hover:bg-white/90 transition-all"
              >
                Let's talk →
              </a>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-auto max-w-2xl">
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed italic mb-6">
            "No generic solutions. No empty promises. Just intelligent systems that make your ideas work."
          </p>
          <p className="text-white/80 text-base md:text-lg font-light leading-relaxed">
            I am a <strong className="font-semibold text-white">Machine Learning Engineer</strong> specializing in the intersection of <strong className="font-semibold text-white">Generative AI, Agentic Workflows, and Blockchain technology</strong>. I focus on creating autonomous systems that bridge the gap between Web2 and Web3.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <p className="text-white/60 text-sm font-medium border-l-2 border-white/20 pl-3">
              <span className="text-white">AI Agent Development Intern</span> @ <span className="text-white">Decloud Labs</span> <span className="text-white/50">(Dec 2024 - Present)</span>
            </p>
          </div>
          <p className="text-white/30 text-sm mt-8">© 2025 Saurabh Magdum</p>
        </div>
      </div>

      {/* Services Ticker */}
      <div className="relative z-10 border-t border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm py-4">
        <div className="flex gap-6 animate-scroll-left whitespace-nowrap w-max">
          {ticker.map((service, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-white/70 text-sm font-medium px-4 py-1.5 border border-white/20 rounded-full flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 inline-block" />
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
