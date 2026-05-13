'use client';
import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import Marquee from '../../components/Marquee';

const SUBJECTS = ['Sports', 'Editorial', 'Brand campaign', 'Esports', 'Long-form', 'Other'];
const BUDGETS  = ['Under $500', '$500 - $1k', '$1k - $2.5k', '$2.5k - $5k', '$5k+'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', subject: 'Sports', brief: '', budget: '$1k - $2.5k' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const pick = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nOrg: ${form.org}\nSubject: ${form.subject}\nBudget: ${form.budget}\n\n${form.brief}`;
    window.location.href = `mailto:hello@srxvisuals.com?subject=Project inquiry - ${encodeURIComponent(form.subject)} from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        index="05 / 05"
        eyebrow="Contact - The studio"
        title={<>Tell me<br />about the work.</>}
        lede="Sports, brand campaigns, editorial features, custom projects. I respond within two working days. Philadelphia, PA."
      />

      <section style={{ padding: '120px 64px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, borderBottom: '1px solid var(--color-hairline)' }}>
        {/* Left: studio info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          <Reveal>
            <div className="t-caption" style={{ marginBottom: 12 }}>Mail</div>
            <a href="mailto:hello@srxvisuals.com" style={{
              color: '#fff', textDecoration: 'none',
              fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.4vw, 36px)',
              letterSpacing: 1, textTransform: 'uppercase', display: 'block', marginBottom: 24
            }}>
              hello@srxvisuals.com
            </a>
            <div className="t-caption" style={{ marginBottom: 12 }}>Press</div>
            <a href="mailto:press@srxvisuals.com" style={{
              color: '#fff', textDecoration: 'none',
              fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, textTransform: 'uppercase'
            }}>
              press@srxvisuals.com
            </a>
          </Reveal>

          <Reveal delay={1}>
            <div className="t-caption" style={{ marginBottom: 12 }}>Studio</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.55, color: 'var(--color-body-strong)' }}>
              Philadelphia, PA
            </p>
          </Reveal>

          <Reveal delay={2}>
            <div className="t-caption" style={{ marginBottom: 16 }}>Follow</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { n: 'Instagram', h: '@srxvisuals',        href: 'https://instagram.com/srxvisuals' },
                { n: 'Pic-Time',  h: 'srxvisuals.pic-time.com', href: 'https://srxvisuals.pic-time.com' },
              ].map(s => (
                <a key={s.n} href={s.href} target="_blank" rel="noreferrer" style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 0', borderTop: '1px solid var(--color-hairline)',
                  color: '#fff', textDecoration: 'none'
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, letterSpacing: 2, textTransform: 'uppercase' }}>{s.n}</span>
                  <span className="t-caption">{s.h}</span>
                </a>
              ))}
              <div style={{ borderTop: '1px solid var(--color-hairline)' }} />
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <div>
          <Reveal>
            <div className="t-caption" style={{ marginBottom: 24 }}>Inquiry - 01</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, letterSpacing: 2, textTransform: 'uppercase', color: '#fff', margin: 0 }}>
              The brief.
            </h2>
          </Reveal>

          {sent ? (
            <div style={{ marginTop: 40, padding: '40px 0' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, letterSpacing: 2, textTransform: 'uppercase', color: '#fff', marginBottom: 16 }}>Sent.</div>
              <p className="t-body-md" style={{ color: 'var(--color-body)' }}>Your email client should have opened. If not, write directly to hello@srxvisuals.com</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 32 }}>
              <Reveal delay={1} className="field-row">
                <div className="field">
                  <label className="t-caption">Full name</label>
                  <input className="input-underline" placeholder="Your name" value={form.name} onChange={set('name')} required />
                </div>
                <div className="field">
                  <label className="t-caption">Email</label>
                  <input className="input-underline" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} required />
                </div>
              </Reveal>

              <Reveal delay={2}>
                <div className="field">
                  <label className="t-caption">Organisation</label>
                  <input className="input-underline" placeholder="Club, brand, or personal project" value={form.org} onChange={set('org')} />
                </div>
              </Reveal>

              <Reveal delay={3}>
                <div className="field">
                  <label className="t-caption" style={{ display: 'block', marginBottom: 12 }}>Subject</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {SUBJECTS.map(s => (
                      <button type="button" key={s}
                        onClick={() => pick('subject', s)}
                        className={'filter-pill' + (form.subject === s ? ' is-active' : '')}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={4}>
                <div className="field">
                  <label className="t-caption" style={{ display: 'block', marginBottom: 12 }}>Indicative budget</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {BUDGETS.map(b => (
                      <button type="button" key={b}
                        onClick={() => pick('budget', b)}
                        className={'filter-pill' + (form.budget === b ? ' is-active' : '')}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={5}>
                <div className="field">
                  <label className="t-caption">Brief</label>
                  <textarea
                    className="textarea-underline"
                    placeholder="A few sentences on the project, dates, deliverables, and anything else worth knowing."
                    value={form.brief}
                    onChange={set('brief')}
                  />
                </div>
              </Reveal>

              <Reveal delay={5} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="t-caption" style={{ color: 'var(--color-muted)' }}>
                  Response within 2 working days - no mailing list
                </div>
                <button type="submit" className="btn-primary">Send</button>
              </Reveal>
            </form>
          )}
        </div>
      </section>

      <Marquee words={['Currently booking · ', 'Philadelphia, PA · ', 'Frame by frame · ']} />

      <section style={{ padding: '160px 64px' }}>
        <Reveal as="h2" style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(64px, 11vw, 220px)',
          lineHeight: 0.85, letterSpacing: 0, textTransform: 'uppercase', color: '#fff', margin: 0
        }}>
          Ready when<br /><span style={{ opacity: 0.55 }}>you are.</span>
        </Reveal>
        <Reveal delay={1} style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 22, lineHeight: 1.55, color: 'var(--color-body-strong)', maxWidth: 480 }}>
            Currently taking on new projects for 2026. The calendar is filling - reach out early.
          </p>
          <a href="mailto:hello@srxvisuals.com" className="btn-primary">hello@srxvisuals.com</a>
        </Reveal>
      </section>
    </>
  );
}
