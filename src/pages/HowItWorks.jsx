import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

const HowItWorks = () => {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="how" style={{ padding: '150px 48px 100px' }}>
      <div className="how">
        <div className="section-label reveal">HOW IT WORKS</div>
        <h2 className="reveal">Three quick steps.</h2>
        <div className="steps reveal">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-icon">📋</div>
            <h3>Registration</h3>
            <p>By Party agent, Accredited observer or Patriotic electorate.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-icon">📸</div>
            <h3>Upload result sheet</h3>
            <p>Observers upload official Form EC8A results directly from polling units.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-icon">✅</div>
            <h3>Live public dashboard</h3>
            <p>Powered by algorithmic cross-validation engine for real-time parallel tally.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
