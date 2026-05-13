'use client';
import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

const SERVICES = ['Sports photography', 'Custom request', 'Press / media', 'Other'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nService: ${form.service}\n\n${form.message}`);
    window.location.href = `mailto:hello@srxvisuals.com?subject=Project inquiry from ${encodeURIComponent(form.name)}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Contact"
        title="Let's talk."
        lede="Book a session, ask a question, or just say hello."
      />

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, padding: '0 64px 120px' }}>
        {/* Form */}
        <Reveal>
          {sent ? (
            <div style={{ paddingTop: 40 }}>
              <div className="t-display-sm" style={{ marginBottom: 16 }}>Message sent.</div>
              <p className="t-body-md" style={{ color: 'var(--color-body)' }}>Your email client should have opened. If not, reach us directly at hello@srxvisuals.com</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="form-field">
                <label className="t-caption">NAME</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Your name"
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <label className="t-caption">EMAIL</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={set('email')}
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>
              <div className="form-field">
                <label className="t-caption">SERVICE</label>
                <select value={form.service} onChange={set('service')} className="form-input" required>
                  <option value="">Select a service</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-field">
                <label className="t-caption">MESSAGE</label>
                <textarea
                  required
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us about your project…"
                  rows={6}
                  className="form-input"
                  style={{ resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send message</button>
            </form>
          )}
        </Reveal>

        {/* Contact info */}
        <Reveal delay={1} style={{ paddingTop: 40 }}>
          <div style={{ marginBottom: 48 }}>
            <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 16 }}>GENERAL</div>
            <a href="mailto:hello@srxvisuals.com" className="t-body-md" style={{ display: 'block', color: 'var(--color-body-strong)', marginBottom: 8 }}>hello@srxvisuals.com</a>
            <div className="t-caption" style={{ color: 'var(--color-muted)' }}>Response within 24h</div>
          </div>
          <div style={{ marginBottom: 48 }}>
            <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 16 }}>PRESS</div>
            <a href="mailto:press@srxvisuals.com" className="t-body-md" style={{ display: 'block', color: 'var(--color-body-strong)' }}>press@srxvisuals.com</a>
          </div>
          <div style={{ marginBottom: 48 }}>
            <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 16 }}>SOCIAL</div>
            <a href="https://instagram.com/srxvisuals" target="_blank" rel="noreferrer" className="t-body-md" style={{ display: 'block', color: 'var(--color-body-strong)', marginBottom: 8 }}>Instagram</a>
            <a href="https://srxvisuals.pic-time.com" target="_blank" rel="noreferrer" className="t-body-md" style={{ display: 'block', color: 'var(--color-body-strong)' }}>Pic-Time</a>
          </div>
          <div>
            <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 8 }}>LOCATION</div>
            <div className="t-body-sm" style={{ color: 'var(--color-body)' }}>Philadelphia, PA</div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
