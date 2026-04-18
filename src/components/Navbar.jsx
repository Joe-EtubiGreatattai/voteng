import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu if scrolling occurs or window resizes
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const closeMenuAndScrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/" onClick={closeMenuAndScrollToTop} style={{ textDecoration: 'none', color: 'inherit' }}>
          Vote<span>Watch</span> NG
        </Link>
      </div>

      <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a className="nav-link-btn" href={import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5174'} target="_blank" rel="noopener noreferrer">Live dashboard</a>
        <Link className="nav-link-btn" to="/how" onClick={closeMenuAndScrollToTop}>How it works</Link>
        <Link className="nav-link-btn" to="/features" onClick={closeMenuAndScrollToTop}>Features</Link>
        <Link className="nav-link-btn" to="/partnership" onClick={closeMenuAndScrollToTop}>Partnership</Link>
        <Link className="nav-cta" to="/contact" onClick={closeMenuAndScrollToTop}>Get involved</Link>
      </div>
    </nav>
  );
};

export default Navbar;
