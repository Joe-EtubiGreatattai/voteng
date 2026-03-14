import { useEffect } from 'react';

// Custom hook for the intersection observer "reveal" animation
export const useScrollReveal = () => {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    
    revealEls.forEach(el => observer.observe(el));

    return () => {
      revealEls.forEach(el => observer.unobserve(el));
    };
  }, []);
};
