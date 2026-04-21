import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useState } from 'react';
import heroImg from '../assets/5.jpeg';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const Home = () => {
  useScrollReveal();
  const [donateConfig, setDonateConfig] = useState(null);
  const [copyDone, setCopyDone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${API_URL}/settings/donate`)
      .then((r) => r.json())
      .then((j) => { if (j.data?.enabled) setDonateConfig(j.data); })
      .catch(() => {});
  }, []);

  const copyAccount = () => {
    if (!donateConfig?.accountNumber) return;
    navigator.clipboard.writeText(donateConfig.accountNumber).then(() => {
      setCopyDone(true);
      setTimeout(() => setCopyDone(false), 2000);
    });
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="hero-eyebrow">NG General Elections</div>
        <h1>VoteWatch<span className="accent">NG</span></h1>
        <p className="hero-tagline">CITIZEN-LEAD VOTE COUNT</p>

        {/* Ballot box image */}
        <div className="hero-img-box" style={{ animation: 'fadeUp 0.8s 0.3s ease both' }}>
          <img src={heroImg} alt="Ballot box — Our Past, Our Present, Our Future" className="hero-img-main" />
        </div>

        <p className="hero-sub" style={{ animation: 'fadeUp 0.8s 0.45s ease both' }}>
          Upload real-time polling unit results.
        </p>

        <div className="hero-actions" style={{ animation: 'fadeUp 0.8s 0.55s ease both' }}>
          <Link className="btn-lemon" to="/contact" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Get started</Link>
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
            <div className="section-label">THE GAP</div>
            <h2>Election transparency depends on concerted citizen action, and by no means an opportunity to witch-hunt incumbent political actors.</h2>
            <p>General elections cannot continue to be marked by allegations of result manipulation, delayed official tallies, and a
              public left without a credible way to independently verify what happened at the polling unit level.</p>
            <p>Accredited observers, Party agents and Patriotic electorates can guarantee transparency in our elections—VOTEWATCH helps you do that.</p>
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

      {/* DONATE */}
      <section className="donate-section reveal">
        <div className="donate-inner">
          <div className="section-label">Support the mission</div>
          <h2>Help keep every vote visible.</h2>
          <p>VoteWatch NG runs on citizen belief. Your contribution keeps the platform independent, the infrastructure running, and the data free for every Nigerian.</p>
          <div className="donate-amounts">
            <button className="donate-pill">₦1,000</button>
            <button className="donate-pill">₦5,000</button>
            <button className="donate-pill active">₦10,000</button>
            <button className="donate-pill">₦50,000</button>
            <button className="donate-pill">Custom</button>
          </div>

          {donateConfig ? (
            <div className="donate-account">
              <div className="donate-account-label">Bank Transfer</div>
              <div className="donate-account-bank">{donateConfig.bankName}</div>
              <div className="donate-account-row">
                <div>
                  <div className="donate-account-field-label">Account Number</div>
                  <div className="donate-account-number">{donateConfig.accountNumber}</div>
                </div>
                <button className="donate-copy-btn" onClick={copyAccount} title="Copy account number">
                  {copyDone ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                  )}
                  {copyDone ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="donate-account-name-row">
                <div className="donate-account-field-label">Account Name</div>
                <div className="donate-account-name">{donateConfig.accountName}</div>
              </div>
              {donateConfig.note && (
                <div className="donate-account-note">{donateConfig.note}</div>
              )}
            </div>
          ) : (
            <button className="btn-donate">Donate now</button>
          )}

          <p className="donate-note">All contributions go directly to platform operations and infrastructure.</p>
        </div>
      </section>
    </>
  );
};

export default Home;
