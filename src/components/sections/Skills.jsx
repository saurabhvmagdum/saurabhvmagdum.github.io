import { motion } from 'framer-motion';
import {
    Brain, Blocks, Code2, Database, Cloud, Smartphone,
    FileCode, Server, GitBranch, Container
} from 'lucide-react';
import { SectionTitle } from '../ui';

// Icon mapping for skill categories
const categoryIcons = {
    brain: Brain,
    blocks: Blocks,
    code: Code2,
    database: Database,
    cloud: Cloud,
    mobile: Smartphone,
};

// Tech icon colors (simulating devicon colors)
const techColors = {
    python: '#3776AB',
    tensorflow: '#FF6F00',
    pytorch: '#EE4C2C',
    opencv: '#5C3EE8',
    pandas: '#150458',
    numpy: '#013243',
    solidity: '#363636',
    polygon: '#8247E5',
    ethereum: '#3C3C3D',
    cube: '#65C2CB',
    javascript: '#F7DF1E',
    react: '#61DAFB',
    nodejs: '#339933',
    postgresql: '#4169E1',
    docker: '#2496ED',
    git: '#F05032',
};

/**
 * Skills Section - Categorized skill display with progress indicators
 */
const Skills = ({ skills }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="skills"
            className="py-24 lg:py-32 relative overflow-hidden bg-dark-900/50"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.3) 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:ml-80 relative">
                <SectionTitle
                    subtitle="Technologies and tools I work with"
                    align="center"
                >
                    Tech Stack
                </SectionTitle>

                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {skills?.map((category, categoryIndex) => {
                        const CategoryIcon = categoryIcons[category.icon] || Code2;

                        return (
                            <motion.div
                                key={categoryIndex}
                                variants={itemVariants}
                                className="relative"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400">
                                        <CategoryIcon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-dark-100">
                                        {category.category}
                                    </h3>
                                    <div className="flex-1 h-px bg-linear-to-r from-dark-700 to-transparent" />
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    {category.items?.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            className="
                        group relative p-4 rounded-xl text-center
                        bg-linear-to-br from-dark-800/80 to-dark-800/40
                        border border-dark-700/50
                        hover:border-primary-400/30 hover:shadow-lg hover:shadow-primary-500/10
                        transition-all duration-300 cursor-default
                      "
                                            whileHover={{ y: -8, scale: 1.02 }}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                        >
                                            {/* Skill Icon */}
                                            <div
                                                className="
                          w-16 h-16 mx-auto mb-3 rounded-xl
                          flex items-center justify-center
                          bg-dark-700/50 group-hover:bg-dark-600/50
                          transition-colors duration-300
                        "
                                            >
                                                <span
                                                    className="text-3xl font-bold"
                                                    style={{ color: techColors[skill.icon] || '#38bdf8' }}
                                                >
                                                    {skill.name.charAt(0)}
                                                </span>
                                            </div>

                                            {/* Skill Name */}
                                            <p className="text-dark-200 font-medium mb-2 text-sm">
                                                {skill.name}
                                            </p>

                                            {/* Skill Level Bar */}
                                            {skill.level > 0 && (
                                                <div className="w-full h-1.5 bg-dark-700 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-linear-to-r from-primary-400 to-accent-cyan rounded-full"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: 0.5 }}
                                                    />
                                                </div>
                                            )}

                                            {/* Hover tooltip */}
                                            <div className="
                        absolute -top-10 left-1/2 -translate-x-1/2
                        px-3 py-1 rounded-lg bg-dark-700 text-dark-100 text-xs
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        pointer-events-none whitespace-nowrap z-10
                      ">
                                                {skill.level}% proficiency
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* GitHub Stats placeholder */}
                <motion.div
                    className="mt-16 p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-dark-400 mb-4">GitHub Contribution Graph</p>
                    <a
                        href="https://github.com/saurabhvmagdum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <img
                            src="https://ghchart.rshah.org/38bdf8/saurabhvmagdum"
                            alt="GitHub Contributions"
                            className="mx-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                            style={{ maxWidth: '100%' }}
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
