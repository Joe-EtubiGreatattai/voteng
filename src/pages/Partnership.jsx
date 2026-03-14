import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

const Partnership = () => {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="partnership" id="partnership" style={{ paddingTop: '150px' }}>
      <div className="partnership-inner reveal">
        <div className="section-label">Partnership model</div>
        <h2>This platform needs you to work</h2>
        <p>Technology alone cannot guarantee election integrity. VoteWatch is designed as a partnership — between a
          capable tech team and organisations with on-the-ground presence, legal standing, and public trust.</p>
        <div className="partner-roles">
          <div className="role-pill">
            <span className="role-pill-icon">⚖️</span>
            <div className="role-pill-title">Legal & regulatory</div>
            <div className="role-pill-desc">Navigate electoral law, media law, and INEC accreditation requirements</div>
          </div>
          <div className="role-pill">
            <span className="role-pill-icon">🤝</span>
            <div className="role-pill-title">Observer network</div>
            <div className="role-pill-desc">Pre-vetted, trained uploaders at polling units across all 36 states</div>
          </div>
          <div className="role-pill">
            <span className="role-pill-icon">📣</span>
            <div className="role-pill-title">Public communications</div>
            <div className="role-pill-desc">Trusted voice to frame the platform as non-partisan civic infrastructure</div>
          </div>
          <div className="role-pill">
            <span className="role-pill-icon">💻</span>
            <div className="role-pill-title">Technical build</div>
            <div className="role-pill-desc">Platform architecture, mobile app, real-time infrastructure, security</div>
          </div>
        </div>
        <Link className="btn-primary" to="/contact" style={{ display: 'inline-block', textDecoration: 'none' }}>Start the conversation →</Link>
      </div>
    </section>
  );
};

export default Partnership;
