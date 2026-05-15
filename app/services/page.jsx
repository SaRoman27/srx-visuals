import PageHeader from '../../components/PageHeader';
import Photo from '../../components/Photo';
import Reveal from '../../components/Reveal';
import StatGrid from '../../components/StatGrid';
import Link from 'next/link';
import { SERVICES } from '../../data';

const METHODOLOGY = [
  { n: '01', t: 'Talk it through', d: "A quick conversation about what you need. I want to understand the event, the deliverables, and what you're going for before anything else." },
  { n: '02', t: 'Prep',           d: 'For bigger projects, I scout the location beforehand so I already know my angles and positioning before shoot day.' },
  { n: '03', t: 'Show up ready',  d: "On the day, I'm there early and set up before anything starts. Live events don't give you second chances, so I don't need them." },
  { n: '04', t: 'Deliver fast',   d: 'Selects within 24 hours, final edits within 72. Everything is delivered through a secure download link.' },
  { n: '05', t: 'Keep it safe',   d: 'I archive every shoot in long-term storage. If you need something re-delivered or want to revisit old work, just reach out.' },
];

const CAPABILITY_STATS = [
  { value: '8.6K',    label: 'Sensor capture' },
  { value: '14stops', label: 'Dynamic range' },
  { value: '21:9',    label: 'Cinema crop, native' },
  { value: '24hr',    label: 'Edit-to-delivery turnaround' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="03 / 05"
        eyebrow="Services - What I offer"
        title={<>What I<br />shoot.</>}
        lede="Sports coverage and custom work, both handled the same way. From a single meet to a full season, I deliver photos that are actually worth keeping."
      />

      {/* Service rows */}
      <section className="sp-x">
        {SERVICES.map((s, i) => (
          <Reveal key={s.num} delay={i % 4} style={{
            display: 'grid',
            gridTemplateColumns: 'var(--svc-cols, 80px 1fr 1.2fr 1.5fr 80px)',
            alignItems: 'center',
            borderBottom: '1px solid var(--color-hairline)',
            padding: '40px 0',
            gap: 32,
          }}>
            <div style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 2 }}>{s.num}</div>
            <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(24px, 3.4vw, 48px)', letterSpacing: 1 }}>{s.title}</div>
            <p className="t-body-md svc-desc" style={{ color: 'var(--color-body)' }}>{s.desc}</p>
            <div className="svc-img" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', maxWidth: 280 }}>
                <Photo src={s.cover} aspect="4/3" hoverZoom />
              </div>
            </div>
            <Link href="/contact" style={{ color: '#fff', justifySelf: 'end', fontSize: 20, textDecoration: 'none' }}>→</Link>
          </Reveal>
        ))}
      </section>

      {/* Methodology */}
      <section className="sp" style={{ borderTop: '1px solid var(--color-hairline)' }}>
        <div className="g-split">
          <div>
            <div className="t-caption" style={{ marginBottom: 24 }}>Method - 02</div>
            <Reveal as="h2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 88px)',
              lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: 1, color: '#fff', margin: 0
            }}>
              How I<br />work.
            </Reveal>
          </div>
          <div>
            {METHODOLOGY.map((step, i) => (
              <Reveal key={step.n} delay={i} className="g-method-row">
                <span className="t-caption" style={{ color: 'var(--color-muted)' }}>{step.n}</span>
                <span className="method-step" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 2, color: '#fff', fontSize: 22 }}>{step.t}</span>
                <p className="t-body-md" style={{ color: 'var(--color-body-strong)' }}>{step.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatGrid eyebrow="Capability - capture" stats={CAPABILITY_STATS} />

      {/* CTA */}
      <section className="sp" style={{ borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="g-cta">
          <Reveal as="h3" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 96px)',
            lineHeight: 0.95, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', margin: 0
          }}>
            Let's talk about your project.
          </Reveal>
          <Reveal delay={1}>
            <Link href="/contact" className="btn-primary">Get in touch</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
