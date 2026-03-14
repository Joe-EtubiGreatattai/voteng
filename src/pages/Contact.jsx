import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setMessage({ text: '✓ Got it — we\'ll be in touch soon.', type: 'success' });
      setEmail('');
    } else {
      setMessage({ text: 'Please enter a valid email address.', type: 'error' });
    }
  };

  return (
    <section className="cta-section" id="contact" style={{ paddingTop: '150px' }}>
      <div className="section-label reveal">Get involved</div>
      <h2 className="reveal">2027 is closer than you think.</h2>
      <p className="reveal">Leave your contact and we'll reach out to discuss how we build this together.</p>
      <div className="cta-email reveal">
        <input 
          type="email" 
          placeholder="your@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubmit}>Let's talk</button>
      </div>
      {message.text && (
        <p style={{ fontSize: '13px', color: message.type === 'success' ? 'var(--green)' : '#E24B4A', marginTop: '16px' }}>
          {message.text}
        </p>
      )}
    </section>
  );
};

export default Contact;
