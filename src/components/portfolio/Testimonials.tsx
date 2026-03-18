const testimonials = [
  {
    name: "Arjun Mehta",
    company: "TechVentures India",
    role: "CTO",
    quote: "Saurabh built our entire AI agent pipeline in record time. The system handles thousands of tasks daily with near-zero errors. Exceptional engineering.",
    initials: "AM",
  },
  {
    name: "Sarah Chen",
    company: "BlockBridge Labs",
    role: "Head of Engineering",
    quote: "The cross-chain bridge Saurabh architected is one of the most robust solutions I've seen. Deep expertise in both blockchain and systems design.",
    initials: "SC",
  },
  {
    name: "Marcus Williams",
    company: "NeuralScale AI",
    role: "Founder",
    quote: "Our RAG platform went from concept to production in 8 weeks. Saurabh's LLM expertise and pragmatic approach made the impossible, possible.",
    initials: "MW",
  },
];

const counterStats = [
  { value: "50+", label: "Projects Launched" },
  { value: "1.2k", label: "GitHub Stars" },
  { value: "30+", label: "Happy Clients" },
];

const Testimonials = () => {
  return (
    <section className="section-light py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
          <h2 className="text-5xl md:text-6xl font-black text-foreground tracking-tight">
            What Clients Say<span className="text-muted-foreground">.</span>
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>
            <span className="text-sm font-bold text-foreground ml-1">4.9/5</span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-light-surface border border-border rounded-2xl p-8 flex flex-col gap-6 hover:border-foreground/20 transition-colors group"
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-yellow-500 text-sm">★</span>
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center text-white text-xs font-black flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Row */}
        <div className="grid grid-cols-3 divide-x divide-border border border-border rounded-2xl overflow-hidden">
          {counterStats.map((s) => (
            <div key={s.label} className="py-8 text-center">
              <div className="text-3xl md:text-4xl font-black text-foreground">{s.value}</div>
              <div className="text-muted-foreground text-xs font-medium uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
