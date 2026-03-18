import { motion } from 'framer-motion';

/**
 * Reusable Card component with glassmorphism effect
 */
const Card = ({
    children,
    className = '',
    hover = true,
    glow = false,
    padding = 'md',
    ...props
}) => {
    const paddings = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    return (
        <motion.div
            className={`
        relative rounded-2xl
        bg-linear-to-br from-dark-800/80 to-dark-800/40
        backdrop-blur-sm border border-dark-700/50
        ${hover ? 'hover:border-primary-400/30 hover:shadow-lg hover:shadow-primary-500/10' : ''}
        ${glow ? 'animate-glow' : ''}
        ${paddings[padding]}
        transition-all duration-300 ease-out
        ${className}
      `}
            whileHover={hover ? { y: -5 } : {}}
            {...props}
        >
            {children}
        </motion.div>
    );
};

/**
 * Card Header component
 */
export const CardHeader = ({ children, className = '' }) => (
    <div className={`mb-4 ${className}`}>
        {children}
    </div>
);

/**
 * Card Title component
 */
export const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-xl font-bold text-dark-50 ${className}`}>
        {children}
    </h3>
);

/**
 * Card Description component
 */
export const CardDescription = ({ children, className = '' }) => (
    <p className={`text-dark-400 leading-relaxed ${className}`}>
        {children}
    </p>
);

/**
 * Card Content component
 */
export const CardContent = ({ children, className = '' }) => (
    <div className={className}>
        {children}
    </div>
);

/**
 * Card Footer component
 */
export const CardFooter = ({ children, className = '' }) => (
    <div className={`mt-4 pt-4 border-t border-dark-700/50 ${className}`}>
        {children}
    </div>
);

export default Card;
