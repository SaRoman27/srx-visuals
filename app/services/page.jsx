import PageHeader from '../../components/PageHeader';
import Photo from '../../components/Photo';
import Reveal from '../../components/Reveal';
import StatGrid from '../../components/StatGrid';
import Link from 'next/link';
import { SERVICES } from '../../data';

const METHODOLOGY = [
  { n: '01', t: 'Brief',   d: 'A short call. I listen for the picture you want before talking about the cameras.' },
  { n: '02', t: 'Recce',   d: 'For longer work, I visit the venue before shoot day to walk the angles and meet the people.' },
  { n: '03', t: 'Capture', d: 'On the day. Tethered backup. No second chances on a match.' },
  { n: '04', t: 'Edit',    d: 'Selects within 24 hours. Final grade within 72. All deliveries via signed download.' },
  { n: '05', t: 'Archive', d: 'Every frame is kept on cold storage. Later requests for re-licensing are answered the same week.' },
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
        eyebrow="Services - The studio offer"
        title={<>What I<br />make.</>}
        lede="Two categories of work, both produced under one creative direction. Engagements run from a single match day to ongoing season coverage."
      />

      {/* Service rows */}
      <section style={{ padding: '0 64px' }}>
        {SERVICES.map((s, i) => (
          <Reveal key={s.num} delay={i % 4} style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 1.2fr 1.5fr 80px',
            alignItems: 'center',
            borderBottom: '1px solid var(--color-hairline)',
            padding: '40px 0',
            gap: 32,
          }}>
            <div style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: 2 }}>{s.num}</div>
            <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(28px, 3.4vw, 48px)', letterSpacing: 1 }}>{s.title}</div>
            <p className="t-body-md" style={{ color: 'var(--color-body)', maxWidth: 560 }}>{s.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', maxWidth: 280 }}>
                <Photo src={s.cover} aspect="4/3" hoverZoom />
              </div>
            </div>
            <div style={{ color: '#fff', justifySelf: 'end', fontSize: 20 }}>→</div>
          </Reveal>
        ))}
      </section>

      {/* Methodology */}
      <section style={{ padding: '160px 64px', borderTop: '1px solid var(--color-hairline)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <div className="t-caption" style={{ marginBottom: 24 }}>Method - 02</div>
            <Reveal as="h2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 88px)',
              lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: 1, color: '#fff', margin: 0
            }}>
              How the<br />studio works.
            </Reveal>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {METHODOLOGY.map((step, i) => (
              <Reveal key={step.n} delay={i} style={{
                display: 'grid', gridTemplateColumns: '80px 200px 1fr', gap: 32,
                padding: '32px 0', borderBottom: '1px solid var(--color-hairline)'
              }}>
                <span className="t-caption" style={{ color: 'var(--color-muted)' }}>{step.n}</span>
                <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 2, color: '#fff', fontSize: 22 }}>{step.t}</span>
                <p className="t-body-md" style={{ color: 'var(--color-body-strong)' }}>{step.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatGrid eyebrow="Capability - capture" stats={CAPABILITY_STATS} />

      {/* CTA */}
      <section style={{ padding: '120px 64px', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 80, alignItems: 'flex-end' }}>
          <Reveal as="h3" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 96px)',
            lineHeight: 0.95, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', margin: 0
          }}>
            Discuss a brief.
          </Reveal>
          <Reveal delay={1}>
            <Link href="/contact" className="btn-primary">Contact the studio</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
