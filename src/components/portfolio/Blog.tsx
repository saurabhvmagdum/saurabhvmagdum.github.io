const posts = [
  {
    date: "Jan 2025",
    title: "Building Agentic AI Workflows in 2025",
    excerpt: "How multi-agent orchestration frameworks like AutoGen and LangGraph are changing the way we build autonomous AI systems — and what you need to know to architect them at scale.",
    tag: "AI Agents",
    readTime: "8 min read",
    emoji: "🤖",
    color: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-100",
  },
  {
    date: "Nov 2024",
    title: "Blockchain Interoperability: A Deep Dive",
    excerpt: "Cross-chain communication is the unsolved problem of Web3. I explore the architectures behind the leading bridges, their security models, and the emerging standards that could unify fragmented ecosystems.",
    tag: "Blockchain",
    readTime: "12 min read",
    emoji: "⛓️",
    color: "from-purple-50 to-violet-50",
    borderColor: "border-purple-100",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section-light py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
          <h2 className="text-5xl md:text-6xl font-black text-foreground tracking-tight">
            Insights<span className="text-muted-foreground">.</span>
          </h2>
          <a
            href="#"
            className="text-sm font-semibold text-foreground border-b border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors hidden md:block"
          >
            View all posts →
          </a>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className={`group border ${post.borderColor} rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-br ${post.color}`}
            >
              {/* Image area */}
              <div className="h-48 flex items-center justify-center border-b border-inherit">
                <span className="text-8xl opacity-30 group-hover:opacity-50 transition-opacity">
                  {post.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-foreground mb-3 leading-tight group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center text-foreground text-sm font-semibold group-hover:gap-3 gap-2 transition-all">
                  Read more <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
