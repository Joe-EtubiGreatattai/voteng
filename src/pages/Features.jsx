import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

const Features = () => {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="features" style={{ padding: '150px 48px 100px' }}>
      <div className="features">
        <div className="section-label reveal">Platform features</div>
        <h2 className="reveal">Built for trust,<br />designed for scale</h2>
        <div className="feature-grid reveal">
          <div className="feature-card featured">
            <div>
              <div className="tag">Core</div>
              <div className="feat-icon">🛡️</div>
              <h3>Multi-layer verification</h3>
              <p>Every result requires photo evidence (Form EC8A), GPS-verified location, and a second independent upload
                before appearing in confirmed totals. Anomalies are algorithmically flagged and routed for human review.
              </p>
            </div>
            <div>
              <div className="feat-icon">📍</div>
              <h3>Polling unit granularity</h3>
              <p>Data structured at the polling unit level — the smallest official unit — meaning aggregations at ward,
                LGA, state, and national level are computed from verifiable source data, not estimates.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feat-icon">⚡</div>
            <h3>Offline-first uploads</h3>
            <p>Works on 2G. Observers in low-connectivity areas queue uploads locally; they sync automatically when signal
              returns.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">🌍</div>
            <h3>Public audit trail</h3>
            <p>Every submission — including disputed and rejected ones — is permanently logged and publicly queryable.
              Full transparency, no black box.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">📰</div>
            <h3>Media & researcher API</h3>
            <p>Licensed journalists and academic partners get API access for real-time data export, enabling independent
              reporting from the same data source.</p>
          </div>
          <div className="feature-card">
            <div className="feat-icon">🔔</div>
            <h3>Anomaly alerts</h3>
            <p>Automatic flags when a polling unit's numbers deviate statistically from ward-level trends, or when
              conflicting uploads arrive for the same unit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
