import { motion } from 'framer-motion';
import { SectionTitle } from '../ui';
import { markdownToHtml } from '../../utils/markdownParser';

/**
 * About Section - Personal introduction with highlights
 */
const About = ({ about, personal }) => {
    return (
        <section
            id="about"
            className="py-24 lg:py-32 relative overflow-hidden"
        >
            {/* Subtle background accent */}
            <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-linear-to-l from-primary-500/5 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 lg:ml-80">
                <SectionTitle subtitle="Get to know me better">
                    About Me
                </SectionTitle>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {about?.paragraphs?.map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    className="text-lg text-dark-300 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    dangerouslySetInnerHTML={{ __html: markdownToHtml(paragraph) }}
                                />
                            ))}
                        </motion.div>

                        {/* Quick Facts / Stats */}
                        {about?.highlights && about.highlights.length > 0 && (
                            <motion.div
                                className="grid grid-cols-3 gap-4 mt-10"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                {about.highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        className="
                      text-center p-4 rounded-xl
                      bg-linear-to-br from-dark-800/80 to-dark-800/40
                      border border-dark-700/50
                      hover:border-primary-400/30 transition-all duration-300
                    "
                                        whileHover={{ y: -5 }}
                                    >
                                        <p className="text-2xl font-bold text-primary-400 mb-1">
                                            {highlight.value}
                                        </p>
                                        <p className="text-sm text-dark-400">
                                            {highlight.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Profile Card */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="
              sticky top-24 p-6 rounded-2xl
              bg-linear-to-br from-dark-800/80 to-dark-800/40
              border border-dark-700/50
            ">
                            {/* Profile Image */}
                            <div className="relative mb-6">
                                <div className="aspect-square rounded-xl overflow-hidden">
                                    <img
                                        src={personal?.profileImage || '/images/placeholder.jpg'}
                                        alt={personal?.name || 'Profile'}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personal?.name || 'User')}&background=38bdf8&color=0f172a&size=256`;
                                        }}
                                    />
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-400 rounded-full opacity-50 blur-sm" />
                                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent-purple rounded-full opacity-50 blur-sm" />
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-bold text-dark-50 mb-1">
                                {personal?.name || 'Your Name'}
                            </h3>
                            <p className="text-primary-400 font-medium mb-4">
                                {personal?.title || 'Your Title'}
                            </p>

                            <div className="space-y-2 text-sm text-dark-400">
                                {personal?.location && (
                                    <p className="flex items-center gap-2">
                                        <span className="text-dark-500">📍</span>
                                        {personal.location}
                                    </p>
                                )}
                                {personal?.email && (
                                    <p className="flex items-center gap-2">
                                        <span className="text-dark-500">✉️</span>
                                        <a
                                            href={`mailto:${personal.email}`}
                                            className="hover:text-primary-400 transition-colors truncate"
                                        >
                                            {personal.email}
                                        </a>
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
