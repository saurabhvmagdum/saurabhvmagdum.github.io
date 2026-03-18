import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 1500, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (target === 0) {
      setCount(0);
      return;
    }
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

const StatItem = ({ stat, active }: { stat: { value: number; suffix: string; label: string }; active: boolean }) => {
  const count = useCountUp(stat.value, 1500, active);
  return (
    <div className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
      <div className="text-5xl md:text-6xl font-black text-white leading-none mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-white/50 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
    </div>
  );
};

const Stats = () => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const [stats, setStats] = useState([
    { value: 0, suffix: "", label: "GitHub Repositories" },
    { value: 0, suffix: "", label: "Total Stars" },
    { value: 0, suffix: "", label: "Followers" },
    { value: 1, suffix: "+", label: "Years Experience" },
  ]);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userRes = await fetch("https://api.github.com/users/saurabhvmagdum");
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();

        const reposRes = await fetch("https://api.github.com/users/saurabhvmagdum/repos?per_page=100");
        let totalStars = 0;
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        }

        setStats([
          { value: userData.public_repos || 0, suffix: "", label: "GitHub Repositories" },
          { value: totalStars, suffix: "", label: "Total Stars" },
          { value: userData.followers || 0, suffix: "", label: "Followers" },
          { value: 1, suffix: "+", label: "Years Experience" },
        ]);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    fetchGitHubStats();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-dark py-24 px-6 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar / Photo */}
          <div className="relative">
            <div className="w-full aspect-[3/4] max-w-sm mx-auto md:mx-0 rounded-2xl bg-dark-surface border border-white/10 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="text-center relative z-10">
                <div className="w-32 h-32 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center mx-auto mb-6 text-4xl font-black text-white">
                  SM
                </div>
                <p className="text-white font-bold text-xl">Saurabh Magdum</p>
                <p className="text-white/50 text-sm mt-1">ML Engineer & AI Architect</p>
                <div className="mt-4 flex gap-2 justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8">By the numbers</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12 leading-tight">
              Real-time GitHub Stats.<br />
              <span className="text-white/50">Directly from the source.</span>
            </h2>
            <div className="space-y-8">
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} active={active} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
