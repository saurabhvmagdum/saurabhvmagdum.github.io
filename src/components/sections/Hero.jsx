import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Hero Section - Main landing section with animated text and social links
 */
const Hero = ({ hero, personal, socials }) => {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient orbs */}
                <motion.div
                    className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center lg:ml-72">
                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
                        👋 Welcome to my portfolio
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="text-dark-50">{hero?.title || 'Building Intelligent'}</span>
                    <br />
                    <span className="bg-linear-to-r from-primary-400 via-accent-cyan to-primary-400 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                        {hero?.highlight || 'Autonomous Systems'}
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-xl md:text-2xl text-dark-400 max-w-2xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {hero?.description || 'Specializing in cutting-edge technology solutions.'}
                </motion.p>

                {/* Social Links */}
                <motion.div
                    className="flex items-center justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {Object.entries(socials || {}).map(([platform, url]) => {
                        if (!url) return null;
                        const Icon = socialIcons[platform];
                        if (!Icon) return null;

                        return (
                            <motion.a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                  p-4 rounded-2xl bg-dark-800/50 backdrop-blur-sm
                  border border-dark-700/50 text-dark-400
                  hover:text-primary-400 hover:border-primary-400/30
                  hover:bg-dark-700/50 transition-all duration-300
                "
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon size={24} />
                            </motion.a>
                        );
                    })}

                    {personal?.email && (
                        <motion.a
                            href={`mailto:${personal.email}`}
                            className="
                p-4 rounded-2xl bg-dark-800/50 backdrop-blur-sm
                border border-dark-700/50 text-dark-400
                hover:text-primary-400 hover:border-primary-400/30
                hover:bg-dark-700/50 transition-all duration-300
              "
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={24} />
                        </motion.a>
                    )}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button
                        href="#projects"
                        variant="primary"
                        size="lg"
                    >
                        View My Work
                    </Button>
                    <Button
                        href="#contact"
                        variant="outline"
                        size="lg"
                    >
                        Get In Touch
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:translate-x-20 text-dark-400 hover:text-primary-400 transition-colors"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                aria-label="Scroll down"
            >
                <ChevronDown size={32} />
            </motion.button>
        </section>
    );
};

export default Hero;
