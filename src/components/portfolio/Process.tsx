const steps = [
  {
    num: "01",
    title: "Deep Dive Into Requirements",
    desc: "Thorough discovery sessions to understand your domain, data landscape, constraints, and success metrics before writing a single line of code.",
  },
  {
    num: "02",
    title: "Design System Architecture",
    desc: "Craft a scalable, production-ready architecture — from data pipelines and model selection to deployment topology and monitoring strategy.",
  },
  {
    num: "03",
    title: "Iterative Development & Testing",
    desc: "Rapid prototyping with continuous evaluation loops. Every model, agent, and API endpoint is rigorously tested before moving forward.",
  },
  {
    num: "04",
    title: "Deploy, Monitor, Optimize",
    desc: "Production deployment with observability baked in — drift detection, performance dashboards, and continuous optimization cycles.",
  },
];

const Process = () => {
  return (
    <section className="section-dark py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            How I Work<span className="text-white/30">.</span>
          </h2>
          <p className="text-white/40 text-sm font-medium hidden md:block">
            The process
          </p>
        </div>

        {/* Steps */}
        <div className="divide-y divide-white/10">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group flex flex-col md:flex-row md:items-start gap-6 py-10 hover:pl-4 transition-all duration-300"
            >
              <span className="text-white/20 font-mono text-sm font-bold flex-shrink-0 md:w-16 mt-1">{step.num}</span>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-2xl">{step.desc}</p>
              </div>
              <span className="text-white/20 group-hover:text-white/60 text-2xl transition-colors self-center">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
