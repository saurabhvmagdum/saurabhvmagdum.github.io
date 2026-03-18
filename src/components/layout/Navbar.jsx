import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home, User, Code2, Briefcase, FolderKanban, Mail, Download, Menu, X
} from 'lucide-react';
import { useActiveSection } from '../../hooks/usePortfolioData';
import Button from '../ui/Button';

const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderKanban },
    { id: 'contact', label: 'Contact', icon: Mail },
];

/**
 * Main Navigation Component - Sidebar on desktop, mobile drawer on small screens
 */
const Navbar = ({ personal }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useActiveSection(navItems.map(item => item.id));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <motion.nav
                className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-dark-800/95 backdrop-blur-lg border-r border-dark-700/50 flex-col z-50"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Profile Section */}
                <div className="p-6 text-center border-b border-dark-700/50">
                    <motion.div
                        className="relative inline-block mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src={personal?.profileImage || '/images/placeholder.jpg'}
                            alt={personal?.name || 'Profile'}
                            className="w-28 h-28 rounded-full object-cover border-4 border-primary-400/50 shadow-xl shadow-primary-500/20"
                            onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personal?.name || 'User')}&background=38bdf8&color=0f172a&size=128`;
                            }}
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent-emerald rounded-full border-4 border-dark-800 animate-pulse" />
                    </motion.div>

                    <h1 className="text-xl font-bold text-dark-50 mb-1">
                        {personal?.name || 'Your Name'}
                    </h1>
                    <p className="text-primary-400 font-medium text-sm mb-1">
                        {personal?.title || 'Your Title'}
                    </p>
                    <p className="text-dark-400 text-xs">
                        {personal?.subtitle || 'Your Subtitle'}
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-6 px-4 overflow-y-auto">
                    <ul className="space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <li key={item.id}>
                                    <motion.button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left
                      transition-all duration-300
                      ${isActive
                                                ? 'bg-primary-500/20 text-primary-400 border-l-4 border-primary-400'
                                                : 'text-dark-400 hover:text-dark-100 hover:bg-dark-700/50'
                                            }
                    `}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Icon size={20} />
                                        <span className="font-medium">{item.label}</span>
                                    </motion.button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Resume Button */}
                <div className="p-4 border-t border-dark-700/50">
                    <Button
                        href={personal?.resumeLink || '#'}
                        download
                        variant="primary"
                        className="w-full"
                        icon={<Download size={18} />}
                    >
                        Download Resume
                    </Button>
                </div>
            </motion.nav>

            {/* Mobile Header */}
            <motion.header
                className={`
          lg:hidden fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled
                        ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg border-b border-dark-700/50'
                        : 'bg-transparent'
                    }
        `}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={personal?.profileImage || '/images/placeholder.jpg'}
                            alt={personal?.name || 'Profile'}
                            className="w-10 h-10 rounded-full object-cover border-2 border-primary-400/50"
                            onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personal?.name || 'User')}&background=38bdf8&color=0f172a&size=40`;
                            }}
                        />
                        <div>
                            <h1 className="text-sm font-bold text-dark-50">
                                {personal?.name || 'Your Name'}
                            </h1>
                            <p className="text-xs text-primary-400">
                                {personal?.title || 'Your Title'}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-xl bg-dark-800/50 text-dark-100 hover:bg-dark-700"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="lg:hidden fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="lg:hidden fixed top-0 right-0 h-full w-72 bg-dark-800/98 backdrop-blur-lg border-l border-dark-700/50 z-50 p-6"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 rounded-xl text-dark-400 hover:text-dark-100 hover:bg-dark-700/50"
                            >
                                <X size={24} />
                            </button>

                            <div className="mt-12">
                                <ul className="space-y-2">
                                    {navItems.map((item) => {
                                        const Icon = item.icon;
                                        const isActive = activeSection === item.id;

                                        return (
                                            <li key={item.id}>
                                                <button
                                                    onClick={() => scrollToSection(item.id)}
                                                    className={`
                            w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left
                            transition-all duration-300
                            ${isActive
                                                            ? 'bg-primary-500/20 text-primary-400'
                                                            : 'text-dark-400 hover:text-dark-100 hover:bg-dark-700/50'
                                                        }
                          `}
                                                >
                                                    <Icon size={20} />
                                                    <span className="font-medium">{item.label}</span>
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="mt-8">
                                    <Button
                                        href={personal?.resumeLink || '#'}
                                        download
                                        variant="primary"
                                        className="w-full"
                                        icon={<Download size={18} />}
                                    >
                                        Download Resume
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
