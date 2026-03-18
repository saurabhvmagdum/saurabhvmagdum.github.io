import { motion } from 'framer-motion';

/**
 * Section Title component with animated underline
 */
const SectionTitle = ({
    children,
    subtitle,
    align = 'left',
    className = ''
}) => {
    const alignments = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
    };

    return (
        <motion.div
            className={`mb-12 ${alignments[align]} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4 font-display">
                {children}
            </h2>

            {/* Animated underline */}
            <motion.div
                className={`h-1 bg-linear-to-r from-primary-400 to-accent-cyan rounded-full ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
                    }`}
                initial={{ width: 0 }}
                whileInView={{ width: '4rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />

            {subtitle && (
                <motion.p
                    className="mt-4 text-lg text-dark-400 max-w-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionTitle;
