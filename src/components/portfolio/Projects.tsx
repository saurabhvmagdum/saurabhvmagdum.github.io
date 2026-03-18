import { useState, useEffect } from "react";

const featuredProjects = [
  {
    id: "01",
    name: "Advanced Multi-Agent Systems",
    year: "2024",
    tags: ["Agentic AI", "Skynet", "Decloud Labs"],
    description: "Built specialized agents for automated data analysis and smart-contract auditing using Skynet's decentralized compute.",
    color: "from-blue-900 to-dark-bg",
    html_url: "#"
  },
  {
    id: "02",
    name: "ConvLSTM Video Anomaly Detection",
    year: "2023",
    tags: ["Python", "TensorFlow", "OpenCV"],
    description: "Implementation of a lightweight ConvLSTM neural network for real-time surveillance monitoring.",
    color: "from-purple-900 to-dark-bg",
    html_url: "#"
  },
  {
    id: "03",
    name: "DFIAN – Decentral Fraud Alert Network",
    year: "2023",
    tags: ["Solidity", "React.js", "PostgreSQL", "Polygon"],
    description: "A high-security blockchain system for inter-bank fraud detection and real-time identity verification.",
    color: "from-emerald-900 to-dark-bg",
    html_url: "#"
  },
  {
    id: "04",
    name: "Privacy-Preserving Mental Health AI",
    year: "2024",
    tags: ["PyTorch", "Flower", "IPFS", "Web3.js"],
    description: "Combined Federated Learning with Blockchain to provide AI recommendations without compromising user data privacy.",
    color: "from-orange-900 to-dark-bg",
    html_url: "#"
  },
];

const colors = [
  "from-blue-900 to-dark-bg",
  "from-purple-900 to-dark-bg",
  "from-emerald-900 to-dark-bg",
  "from-orange-900 to-dark-bg",
  "from-indigo-900 to-dark-bg",
  "from-rose-900 to-dark-bg"
];

interface Project {
  id: string;
  name: string;
  year: string;
  tags: string[];
  description: string;
  color: string;
  html_url: string;
}

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>(featuredProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/saurabhvmagdum/repos?sort=updated");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        
        const validRepos = data
          .filter((repo: any) => !repo.fork && repo.description && repo.description.length > 5)
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 2);

        if (validRepos.length > 0) {
          const formattedRepos = validRepos.map((repo: any, index: number) => ({
            id: `0${5 + index}`,
            name: repo.name.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, (m: string) => m.toUpperCase()),
            year: new Date(repo.created_at).getFullYear().toString(),
            tags: [repo.language || "Code", "GitHub Repo"],
            description: repo.description,
            color: colors[(4 + index) % colors.length],
            html_url: repo.html_url
          }));
          
          setProjects([...featuredProjects, ...formattedRepos]);
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="section-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-border pb-6">
          <h2 className="text-6xl md:text-7xl font-black text-foreground tracking-tight">
            Projects<span className="text-muted-foreground">.</span>
          </h2>
          <p className="text-muted-foreground text-sm font-medium hidden md:block">
            {loading ? "Loading dynamic updates..." : "Selected work — 2023–2025"}
          </p>
        </div>

        {/* Project List */}
        <div className="divide-y divide-border">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.html_url !== "#" ? project.html_url : undefined}
              target={project.html_url !== "#" ? "_blank" : undefined}
              rel={project.html_url !== "#" ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col md:flex-row md:items-center py-8 gap-6 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Number */}
              <span className="text-muted-foreground/40 text-sm font-mono font-bold w-8 flex-shrink-0">
                {project.id}
              </span>

              {/* Name */}
              <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-foreground/80 transition-colors flex-1 tracking-tight">
                {project.name}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:w-72">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 border border-border rounded-full text-muted-foreground group-hover:border-foreground/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Year */}
              <span className="text-muted-foreground text-sm font-mono md:w-16 text-right">
                {project.year}
              </span>

              {/* Arrow */}
              <span className="text-foreground text-xl opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0">
                →
              </span>

              {/* Hover Preview Card */}
              {hoveredId === project.id && (
                <div
                  className={`hidden md:flex absolute right-20 top-1/2 -translate-y-1/2 w-56 h-36 rounded-xl bg-gradient-to-br ${project.color} items-end p-4 shadow-2xl pointer-events-none z-10 transition-all`}
                >
                  <div>
                    <p className="text-white/90 text-xs font-semibold leading-tight">{project.description}</p>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
