import { useState, useEffect } from 'react';
import { fetchPortfolioData } from '../utils/markdownParser';

/**
 * Custom hook to fetch and manage portfolio data from info.md
 * @returns {Object} Portfolio data, loading state, and error state
 */
export const usePortfolioData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const result = await fetchPortfolioData();

                if (result.success) {
                    setData(result.data);
                    setError(null);
                } else {
                    setError(result.error);
                    setData(null);
                }
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { data, loading, error };
};

/**
 * Hook for intersection observer animations
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isVisible]
 */
export const useInView = (options = {}) => {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(ref);
            }
        }, {
            threshold: 0.1,
            ...options
        });

        observer.observe(ref);

        return () => {
            if (ref) observer.unobserve(ref);
        };
    }, [ref, options]);

    return [setRef, isVisible];
};

/**
 * Hook for active section tracking (scroll spy)
 * @param {Array} sectionIds - Array of section IDs to track
 * @returns {string} Currently active section ID
 */
export const useActiveSection = (sectionIds = []) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds]);

    return activeSection;
};
