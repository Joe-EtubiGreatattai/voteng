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
        <div className="section-label reveal">How it works</div>
        <h2 className="reveal">Four steps. Real accountability.</h2>
        <div className="steps reveal">
          <div className="step">
            <div className="step-num">01</div>
            <div className="step-icon">📋</div>
            <h3>Observer registers</h3>
            <p>Users verify with phone number and NIN. Accredited observers get elevated trust status through our partner
              CSO network.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div className="step-icon">📸</div>
            <h3>Upload EC8A result sheet</h3>
            <p>After counting, the observer photographs the official INEC Form EC8A and uploads scores tied to their
              GPS-verified polling unit.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div className="step-icon">✅</div>
            <h3>Cross-validation engine</h3>
            <p>Scores are matched against other uploads from the same polling unit. Anomalies are flagged. Confirmed
              results feed the live tally.</p>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <div className="step-icon">📊</div>
            <h3>Public live dashboard</h3>
            <p>Anyone can view rolling totals by polling unit, ward, LGA, state, and nationally — with full data export
              for journalists and researchers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
