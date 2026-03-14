import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect } from 'react';

const Home = () => {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="hero-eyebrow">Nigeria 2027 General Elections</div>
        <h1>Every vote counted. <br /><span className="underline-green">By the people.</span></h1>
        <p className="hero-sub">A real-time, crowd-sourced election monitoring platform. Citizens and accredited observers
          upload polling unit results as they happen — giving Nigeria a transparent parallel tally.</p>
        <div className="hero-actions">
          <Link className="btn-primary" to="/partnership" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Partner with us</Link>
          <Link className="btn-ghost" to="/how" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>See how it works</Link>
        </div>
      </section>

      {/* STAT BAR */}
      <div className="stat-bar">
        <div className="stat-item">
          <div className="stat-num">176K+</div>
          <div className="stat-label">Polling units in Nigeria</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">2027</div>
          <div className="stat-label">Target election cycle</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">Real-time</div>
          <div className="stat-label">Result aggregation</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">100%</div>
          <div className="stat-label">Publicly auditable</div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="problem" id="problem">
        <div className="problem-inner">
          <div className="reveal">
            <div className="section-label">The problem</div>
            <h2>Election transparency has always depended on who controls the count</h2>
            <p>Nigeria's 2023 elections were marked by allegations of result manipulation, delayed official tallies, and a
              public left without a credible way to independently verify what happened at the polling unit level.</p>
            <p>Accredited observers exist — but their data stays siloed. The public only sees what INEC eventually
              publishes. VoteWatch changes that.</p>
          </div>
          <ul className="issue-list reveal">
            <li className="issue-item">
              <span className="issue-icon">🕐</span>
              <div>
                <div className="issue-title">Delayed official results</div>
                <div className="issue-desc">INEC's collation process takes days, leaving a vacuum that rumour fills</div>
              </div>
            </li>
            <li className="issue-item">
              <span className="issue-icon">🔒</span>
              <div>
                <div className="issue-title">Siloed observer data</div>
                <div className="issue-desc">Civil society organisations collect data but rarely publish it at polling unit
                  granularity</div>
              </div>
            </li>
            <li className="issue-item">
              <span className="issue-icon">📵</span>
              <div>
                <div className="issue-title">No public parallel tally</div>
                <div className="issue-desc">Countries with robust democracies use PVTs — Nigeria needs a citizen-powered
                  equivalent</div>
              </div>
            </li>
            <li className="issue-item">
              <span className="issue-icon">⚠️</span>
              <div>
                <div className="issue-title">Misinformation spreads unchecked</div>
                <div className="issue-desc">Without a verified source, social media becomes the default — and it is easily
                  manipulated</div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* MOCKUP */}
      <section className="mockup-section reveal">
        <div className="section-label">The platform</div>
        <h2>What the live feed looks like</h2>
        <p>Results flow in as observers upload. Every entry shows coverage status, verification tier, and timestamp.</p>
        <div className="app-mockup">
          <div className="mockup-topbar">
            <div className="mockup-logo">VoteWatch NG</div>
            <div className="live-badge"><span className="live-dot"></span> Live — Election Day 2027</div>
          </div>
          <div className="mockup-body">
            <div className="mock-card">
              <div className="mock-card-label">Units reported</div>
              <div className="mock-card-val">84,312</div>
              <div className="mock-card-sub">of 176,846 polling units</div>
              <div className="mock-bar-wrap">
                <div className="mock-bar" style={{ width: '47%' }}></div>
              </div>
            </div>
            <div className="mock-card">
              <div className="mock-card-label">Verified uploads</div>
              <div className="mock-card-val">61,204</div>
              <div className="mock-card-sub">2+ independent confirmations</div>
              <div className="mock-bar-wrap">
                <div className="mock-bar" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div className="mock-card" style={{ gridColumn: 'span 2', background: '#162016' }}>
              <div className="mock-card-label" style={{ marginBottom: '16px' }}>Recent uploads — live feed</div>
              <div className="feed-item">
                <div className="feed-avatar">🗳️</div>
                <div>
                  <div className="feed-pu">Ward 3, Unit 012 — Surulere, Lagos<span className="verified-tag">✓ Verified</span></div>
                  <div className="feed-meta">Uploaded by accredited observer · 2 min ago · GPS confirmed</div>
                  <div className="feed-score">APC 312 · LP 208 · PDP 94 · Others 21</div>
                </div>
              </div>
              <div className="feed-item">
                <div className="feed-avatar">🗳️</div>
                <div>
                  <div className="feed-pu">Ward 1, Unit 005 — Kano Municipal, Kano<span className="verified-tag">✓ Verified</span>
                  </div>
                  <div className="feed-meta">Uploaded by community observer · 5 min ago · GPS confirmed</div>
                  <div className="feed-score">APC 441 · LP 33 · PDP 188 · Others 12</div>
                </div>
              </div>
              <div className="feed-item">
                <div className="feed-avatar">🗳️</div>
                <div>
                  <div className="feed-pu">Ward 7, Unit 019 — Enugu North, Enugu</div>
                  <div className="feed-meta" style={{ color: '#EF9F27' }}>⚠ Pending — awaiting second confirmation · 8 min ago</div>
                  <div className="feed-score" style={{ color: 'var(--muted)' }}>LP 524 · APC 88 · PDP 102 · Others 9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
