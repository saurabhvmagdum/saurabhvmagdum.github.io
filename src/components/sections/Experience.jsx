import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import { SectionTitle, Badge } from '../ui';

/**
 * Experience Section - Timeline view of work experience
 */
const Experience = ({ experience }) => {
    return (
        <section
            id="experience"
            className="py-24 lg:py-32 relative overflow-hidden"
        >
            {/* Background accent */}
            <div className="absolute left-0 top-1/3 w-1/4 h-1/3 bg-linear-to-r from-accent-purple/5 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 lg:ml-80">
                <SectionTitle subtitle="My professional journey">
                    Experience
                </SectionTitle>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-linear-to-b from-primary-400 via-dark-600 to-transparent" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experience?.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="relative pl-8 md:pl-16"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    className="
                    absolute left-0 md:left-6 top-0
                    w-3 h-3 -translate-x-1/2
                    bg-primary-400 rounded-full
                    ring-4 ring-dark-900 ring-offset-0
                  "
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                                />

                                {/* Content Card */}
                                <motion.div
                                    className="
                    p-6 rounded-2xl
                    bg-linear-to-br from-dark-800/80 to-dark-800/40
                    border border-dark-700/50
                    hover:border-primary-400/30
                    transition-all duration-300
                  "
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-xl font-bold text-dark-50">
                                                    {exp.role}
                                                </h3>
                                                {exp.type && (
                                                    <Badge variant="primary" size="sm">
                                                        {exp.type}
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Briefcase size={16} className="text-dark-500" />
                                                {exp.companyUrl ? (
                                                    <a
                                                        href={exp.companyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1 transition-colors"
                                                    >
                                                        {exp.company}
                                                        <ExternalLink size={14} />
                                                    </a>
                                                ) : (
                                                    <span className="text-primary-400 font-medium">
                                                        {exp.company}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Duration & Location */}
                                        <div className="flex flex-col items-end text-sm text-dark-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                <span>{exp.duration}</span>
                                            </div>
                                            {exp.location && (
                                                <div className="flex items-center gap-2 mt-1">
                                                    <MapPin size={14} />
                                                    <span>{exp.location}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    {exp.description && (
                                        <p className="text-dark-400 mb-4">
                                            {exp.description}
                                        </p>
                                    )}

                                    {/* Responsibilities */}
                                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                                        <ul className="space-y-2 mb-4">
                                            {exp.responsibilities.map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="flex items-start gap-3 text-dark-300"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                                >
                                                    <span className="text-primary-400 mt-1.5">•</span>
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Technologies */}
                                    {exp.technologies && exp.technologies.length > 0 && (
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/50">
                                            {exp.technologies.map((tech, idx) => (
                                                <Badge key={idx} variant="secondary" size="sm">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {(!experience || experience.length === 0) && (
                        <motion.div
                            className="text-center py-12 text-dark-400"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Briefcase size={48} className="mx-auto mb-4 opacity-50" />
                            <p>Experience data will appear here from info.md</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
