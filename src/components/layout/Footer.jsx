import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

/**
 * Footer Component with social links and scroll-to-top
 */
const Footer = ({ personal, socials }) => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: Github,
            url: socials?.github,
            color: 'hover:text-dark-100'
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: socials?.linkedin,
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: Mail,
            url: personal?.email ? `mailto:${personal.email}` : null,
            color: 'hover:text-primary-400'
        },
    ].filter(link => link.url);

    return (
        <footer className="relative bg-dark-900 border-t border-dark-700/50">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-dark-950 to-transparent pointer-events-none" />

            <div className="relative lg:ml-72">
                <div className="max-w-5xl mx-auto px-6 py-12">
                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center gap-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target={link.name !== 'Email' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className={`
                    p-3 rounded-xl bg-dark-800/50 text-dark-400
                    border border-dark-700/50
                    transition-all duration-300
                    ${link.color}
                    hover:border-primary-400/30 hover:bg-dark-700/50
                    hover:-translate-y-1
                  `}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={link.name}
                                >
                                    <Icon size={22} />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Divider */}
                    <div className="w-24 h-px bg-linear-to-r from-transparent via-dark-600 to-transparent mx-auto mb-8" />

                    {/* Copyright */}
                    <motion.div
                        className="text-center text-dark-400 text-sm"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="flex items-center justify-center gap-1 mb-2">
                            Crafted with <Heart size={14} className="text-red-500 animate-pulse" /> by{' '}
                            <span className="text-dark-200 font-medium">
                                {personal?.name || 'Developer'}
                            </span>
                        </p>
                        <p className="text-dark-500">
                            © {currentYear} All rights reserved.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll to top button */}
                <motion.button
                    onClick={scrollToTop}
                    className="
            absolute right-6 -top-6 p-3 rounded-xl
            bg-dark-800 border border-dark-700/50
            text-dark-400 hover:text-primary-400
            hover:border-primary-400/30 hover:bg-dark-700/50
            transition-all duration-300
            hover:-translate-y-1
          "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </motion.button>
            </div>
        </footer>
    );
};

export default Footer;
