import { motion } from 'framer-motion';

/**
 * Technology/Skill Badge component
 */
const Badge = ({
    children,
    variant = 'default',
    size = 'md',
    className = ''
}) => {
    const variants = {
        default: 'bg-dark-800 text-primary-400 border-dark-700',
        primary: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
        secondary: 'bg-dark-700 text-dark-300 border-dark-600',
        accent: 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
        success: 'bg-accent-emerald/20 text-accent-emerald border-accent-emerald/30',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
    };

    return (
        <motion.span
            className={`
        inline-flex items-center rounded-full border font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.span>
    );
};

export default Badge;
