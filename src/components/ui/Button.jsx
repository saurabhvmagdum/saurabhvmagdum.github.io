import { motion } from 'framer-motion';

/**
 * Reusable Button component with multiple variants
 */
const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    icon,
    download,
    ...props
}) => {
    const baseStyles = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-primary-400 to-primary-500
      text-dark-900 hover:from-primary-300 hover:to-primary-400
      focus:ring-primary-400 shadow-lg shadow-primary-500/25
      hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5
    `,
        secondary: `
      bg-dark-700/50 text-dark-100 border border-dark-600
      hover:bg-dark-600/50 hover:border-primary-400/50
      focus:ring-dark-500
    `,
        ghost: `
      text-dark-300 hover:text-primary-400 hover:bg-dark-800/50
      focus:ring-primary-400
    `,
        outline: `
      border-2 border-primary-400/50 text-primary-400
      hover:bg-primary-400/10 hover:border-primary-400
      focus:ring-primary-400
    `,
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {icon && <span className="text-lg">{icon}</span>}
            {children}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                download={download}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={combinedStyles}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={combinedStyles}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {content}
        </motion.button>
    );
};

export default Button;
