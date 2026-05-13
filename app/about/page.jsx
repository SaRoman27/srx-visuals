import PageHeader from '../../components/PageHeader';
import Photo from '../../components/Photo';
import Reveal from '../../components/Reveal';
import Marquee from '../../components/Marquee';
import Link from 'next/link';
import { ABOUT_PORTRAITS } from '../../data';

const PHILOSOPHY = [
  { n: '01', t: 'Wait, then frame.', d: 'The picture exists before I lift the camera. My job is to be in the right place, lens at the right length, finger ready.' },
  { n: '02', t: 'Cool, not warm.',   d: 'I grade neutral to cool. The studio canvas is black; the work has to read against it.' },
  { n: '03', t: 'Print first.',      d: "Every frame is graded with print in mind. If it doesn't hold up at 24 inches, it doesn't leave the studio." },
];

const TIMELINE = [
  { y: '2025', t: 'SRX Visuals founded', d: 'Based out of Philadelphia. One photographer, one camera, no excuses.' },
  { y: '2025', t: 'First season embedded', d: 'First full season sideline with WEXP and LS Athletics programs.' },
  { y: '2024', t: 'The pivot.',            d: 'Left a day job to pursue sport photography seriously. The quality of light changed everything.' },
  { y: '2024', t: 'First credential',      d: 'A sideline credential at a local derby match. One camera, one lens, zero backup cards.' },
  { y: '2023', t: 'First frames.',         d: 'Started shooting local athletics events for practice. Monochrome from day one.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="04 / 05"
        eyebrow="About - The photographer"
        title={<>The<br />studio.</>}
        lede="SRX Visuals was founded in 2025 by Sawyer Roman, working out of Philadelphia, PA. The studio stays small on purpose."
      />

      {/* Portrait + bio */}
      <section style={{ padding: '120px 64px', display: 'grid', gridTemplateColumns: '1.1fr 1.4fr', gap: 80, alignItems: 'flex-start' }}>
        <Reveal>
          <Photo src={ABOUT_PORTRAITS[0]} aspect="4/5" />
          <div className="t-caption" style={{ marginTop: 16 }}>Sawyer Roman - Studio principal - 2026</div>
        </Reveal>
        <div>
          <div className="t-caption" style={{ marginBottom: 24 }}>Bio - 01</div>
          <Reveal as="h2" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.4vw, 72px)',
            lineHeight: 1.05, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', margin: 0
          }}>
            Sawyer Roman - sports photographer, since 2025.
          </Reveal>
          <Reveal delay={1} style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 620 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, lineHeight: 1.6, color: 'var(--color-body-strong)' }}>
              I came to sports through magazines, not through fandom. I wanted to make pictures that held up the way the editorial portraits I grew up looking at did - quiet, considered, the subject given the room they earned.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--color-body)' }}>
              SRX Visuals is the studio that work became. Based in Philadelphia, I shoot game days, training grounds, and custom sessions for athletes and brands who care about how their work looks.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--color-body)' }}>
              The brief is always the same. Wait. Frame the moment that already exists. Print it cool.
            </p>
          </Reveal>
          <Reveal delay={2} style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <span className="chip">Sports - since 2025</span>
            <span className="chip">Philadelphia, PA</span>
            <span className="chip">Game-day coverage</span>
            <span className="chip">Custom requests</span>
          </Reveal>
          <Reveal delay={3} style={{ marginTop: 40 }}>
            <Link href="/contact" className="btn-primary">Work together</Link>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: '160px 64px', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="t-caption" style={{ marginBottom: 56 }}>Philosophy - 02</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 80 }}>
          {PHILOSOPHY.map((p, i) => (
            <Reveal key={p.n} delay={i}>
              <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 24 }}>{p.n}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 32, textTransform: 'uppercase',
                letterSpacing: 1.5, color: '#fff', margin: 0, lineHeight: 1.15
              }}>{p.t}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--color-body-strong)', marginTop: 24 }}>
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full-bleed portrait */}
      <section style={{ padding: 0 }}>
        <Reveal>
          <Photo src={ABOUT_PORTRAITS[1]} aspect="21/9" kenburns style={{ width: '100%' }} />
        </Reveal>
      </section>

      {/* Timeline */}
      <section style={{ padding: '160px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <div className="t-caption" style={{ marginBottom: 24 }}>Experience - 03</div>
            <Reveal as="h2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 88px)',
              lineHeight: 1.05, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', margin: 0
            }}>
              Since<br />2025.
            </Reveal>
          </div>
          <div>
            {TIMELINE.map((row, i) => (
              <Reveal key={i} delay={i} style={{
                display: 'grid', gridTemplateColumns: '120px 1fr 1.2fr', gap: 32,
                padding: '32px 0', borderBottom: '1px solid var(--color-hairline)',
                borderTop: i === 0 ? '1px solid var(--color-hairline)' : 0
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 2, color: '#fff' }}>{row.y}</span>
                <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 1.5, color: '#fff', fontSize: 20 }}>{row.t}</span>
                <p className="t-body-md" style={{ color: 'var(--color-body-strong)' }}>{row.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portrait grid */}
      <section style={{ padding: '0 64px 120px' }}>
        <div className="t-caption" style={{ marginBottom: 32 }}>Portraits - 04</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {ABOUT_PORTRAITS.map((src, i) => (
            <Reveal key={i} delay={i}>
              <Photo src={src} aspect="3/4" hoverZoom />
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee words={['Wait · ', 'Frame · ', 'Print cool · ', 'Hold the line · ']} />
    </>
  );
}
