import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-light py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-6">
              Let's collaborate
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-foreground tracking-tight leading-none mb-8">
              Start a project<span className="text-muted-foreground">.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm">
              Have an AI, ML, or blockchain project in mind? Let's talk about how intelligent systems can make your ideas real.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:saurabh.magdum@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
              >
                <span className="text-sm font-mono border border-border rounded px-2 py-1">@</span>
                <span className="text-sm font-medium">saurabh.magdum@gmail.com</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
            <div className="mt-12 p-6 border border-border rounded-2xl flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-foreground font-semibold text-sm">Available for new projects</p>
                <p className="text-muted-foreground text-xs mt-0.5">Typically responds within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div className="h-full flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-black text-foreground mb-2">Message sent!</h3>
                  <p className="text-muted-foreground text-sm">I'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full border border-border bg-light-surface rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full border border-border bg-light-surface rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full border border-border bg-light-surface rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-dark-bg text-white font-bold py-4 rounded-xl hover:bg-dark-bg/90 transition-all duration-200 text-sm tracking-wide"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
