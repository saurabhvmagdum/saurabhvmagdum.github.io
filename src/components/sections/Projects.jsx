import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder, Star } from 'lucide-react';
import { SectionTitle, Badge, Button } from '../ui';

/**
 * Projects Section - Featured projects with filtering
 */
const Projects = ({ projects }) => {
    const [filter, setFilter] = useState('all');

    // Get unique categories
    const categories = ['all', ...new Set(projects?.map(p => p.category).filter(Boolean))];

    // Filter projects
    const filteredProjects = filter === 'all'
        ? projects
        : projects?.filter(p => p.category === filter);

    return (
        <section
            id="projects"
            className="py-24 lg:py-32 relative overflow-hidden bg-dark-900/50"
        >
            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 lg:ml-80 relative">
                <SectionTitle
                    subtitle="Some of my notable works"
                    align="center"
                >
                    Featured Projects
                </SectionTitle>

                {/* Category Filter */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`
                px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${filter === category
                                    ? 'bg-primary-500 text-dark-900'
                                    : 'bg-dark-800/50 text-dark-400 border border-dark-700/50 hover:border-primary-400/30 hover:text-dark-200'
                                }
              `}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects?.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {(!filteredProjects || filteredProjects.length === 0) && (
                    <motion.div
                        className="text-center py-12 text-dark-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Folder size={48} className="mx-auto mb-4 opacity-50" />
                        <p>No projects found in this category</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

/**
 * Individual Project Card Component
 */
const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="
        group relative h-full
        rounded-2xl overflow-hidden
        bg-linear-to-br from-dark-800/80 to-dark-800/40
        border border-dark-700/50
        hover:border-primary-400/30
        transition-all duration-300
      "
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -10 }}
        >
            {/* Project Image / Placeholder */}
            <div className="relative h-48 overflow-hidden bg-dark-700/50">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                        }}
                    />
                ) : null}

                {/* Placeholder when no image */}
                <div
                    className={`
            absolute inset-0 flex items-center justify-center
            bg-linear-to-br from-dark-700 to-dark-800
            ${project.image ? 'hidden' : 'flex'}
          `}
                >
                    <Folder size={48} className="text-dark-500" />
                </div>

                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-4 left-4">
                        <Badge variant="primary" size="sm">
                            <Star size={12} className="mr-1" fill="currentColor" />
                            Featured
                        </Badge>
                    </div>
                )}

                {/* Hover Overlay */}
                <motion.div
                    className="
            absolute inset-0 flex items-center justify-center gap-4
            bg-dark-900/80 backdrop-blur-sm
          "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                p-3 rounded-xl bg-dark-700/80 text-dark-100
                hover:bg-primary-500 hover:text-dark-900
                transition-colors duration-300
              "
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={24} />
                        </motion.a>
                    )}
                    {project.demo && (
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                p-3 rounded-xl bg-dark-700/80 text-dark-100
                hover:bg-primary-500 hover:text-dark-900
                transition-colors duration-300
              "
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ExternalLink size={24} />
                        </motion.a>
                    )}
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Category */}
                {project.category && (
                    <p className="text-xs text-primary-400 font-medium uppercase tracking-wider mb-2">
                        {project.category}
                    </p>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-50 mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-dark-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 4).map((tech, idx) => (
                        <Badge key={idx} variant="secondary" size="sm">
                            {tech}
                        </Badge>
                    ))}
                    {project.technologies?.length > 4 && (
                        <Badge variant="secondary" size="sm">
                            +{project.technologies.length - 4}
                        </Badge>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
