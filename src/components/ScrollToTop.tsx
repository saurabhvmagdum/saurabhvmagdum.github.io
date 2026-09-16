import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUp } from 'lucide-react';
import type Lenis from 'lenis';

interface ScrollToTopProps {
  lenisRef: React.RefObject<Lenis | null>;
}

export function ScrollToTop({ lenisRef }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate in/out with GSAP
  useEffect(() => {
    if (!btnRef.current) return;
    if (visible) {
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 16, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to(btnRef.current, {
        opacity: 0,
        y: 16,
        scale: 0.85,
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [visible]);

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.6, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      ref={btnRef}
      id="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-8 right-8 z-50
        w-12 h-12
        flex items-center justify-center
        bg-forest-dark text-white
        rounded-full
        shadow-[0_4px_24px_rgba(0,0,0,0.35)]
        border border-white/10
        opacity-0
        transition-colors duration-300
        hover:bg-white hover:text-forest-dark hover:border-forest-dark/10
        group
      "
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      <ArrowUp
        className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        strokeWidth={2.5}
      />
    </button>
  );
}
