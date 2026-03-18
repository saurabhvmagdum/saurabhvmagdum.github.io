const techs = [
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "PyTorch", icon: "🔥" },
  { name: "HuggingFace", icon: "🤗" },
  { name: "LangChain", icon: "🔗" },
  { name: "React", icon: "⚛️" },
  { name: "Solidity", icon: "💎" },
  { name: "Ethereum", icon: "⟠" },
  { name: "Polygon", icon: "🟣" },
  { name: "IPFS", icon: "📦" },
  { name: "Node.js", icon: "🟢" },
  { name: "AWS", icon: "☁️" },
];

const TechStack = () => {
  const doubled = [...techs, ...techs];

  return (
    <section className="section-light border-y border-border py-8 overflow-hidden">
      <div className="flex gap-12 animate-scroll-left whitespace-nowrap w-max">
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors flex-shrink-0 group"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="text-sm font-semibold tracking-wide uppercase">{tech.name}</span>
            {i < doubled.length - 1 && (
              <span className="ml-6 text-border">·</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
