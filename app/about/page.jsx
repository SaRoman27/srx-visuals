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
      <section className="sp">
        <div className="g-about">
          <Reveal>
            <Photo src={ABOUT_PORTRAITS[0]} aspect="4/5" objectPosition="35% center" />
            <div className="t-caption" style={{ marginTop: 16 }}>Sawyer Roman - Studio principal - 2026</div>
          </Reveal>
          <div>
            <div className="t-caption" style={{ marginBottom: 24 }}>Bio - 01</div>
            <Reveal as="h2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4.4vw, 72px)',
              lineHeight: 1.05, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', margin: 0
            }}>
              Sawyer Roman - sports photographer, since 2025.
            </Reveal>
            <Reveal delay={1} style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.6, color: 'var(--color-body-strong)' }}>
                I came to sports through magazines, not through fandom. I wanted to make pictures that held up the way the editorial portraits I grew up looking at did - quiet, considered, the subject given the room they earned.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.65, color: 'var(--color-body)' }}>
                SRX Visuals is the studio that work became. Based in Philadelphia, I shoot game days, training grounds, and custom sessions for athletes and brands who care about how their work looks.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.65, color: 'var(--color-body)' }}>
                The brief is always the same. Wait. Frame the moment that already exists. Print it cool.
              </p>
            </Reveal>
            <Reveal delay={2} style={{ marginTop: 32, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="chip">Sports - since 2025</span>
              <span className="chip">Philadelphia, PA</span>
              <span className="chip">Game-day coverage</span>
              <span className="chip">Custom requests</span>
            </Reveal>
            <Reveal delay={3} style={{ marginTop: 32 }}>
              <Link href="/contact" className="btn-primary">Work together</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="sp" style={{ borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="t-caption" style={{ marginBottom: 48 }}>Philosophy - 02</div>
        <div className="g-3">
          {PHILOSOPHY.map((p, i) => (
            <Reveal key={p.n} delay={i}>
              <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 24 }}>{p.n}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.8vw, 32px)',
                textTransform: 'uppercase', letterSpacing: 1.5, color: '#fff', margin: 0, lineHeight: 1.15
              }}>{p.t}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--color-body-strong)', marginTop: 20 }}>
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full-bleed portrait */}
      <section style={{ padding: 0 }}>
        <Photo src={ABOUT_PORTRAITS[1]} aspect="21/9" kenburns style={{ width: '100%' }} />
      </section>

      {/* Timeline */}
      <section className="sp">
        <div className="g-split">
          <div>
            <div className="t-caption" style={{ marginBottom: 24 }}>Experience - 03</div>
            <Reveal as="h2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 88px)',
              lineHeight: 1.05, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', margin: 0
            }}>
              Since<br />2025.
            </Reveal>
          </div>
          <div>
            {TIMELINE.map((row, i) => (
              <Reveal key={i} delay={i} className="g-timeline-row" style={{ borderTop: i === 0 ? '1px solid var(--color-hairline)' : undefined }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 2, color: '#fff' }}>{row.y}</span>
                <span style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 1.5, color: '#fff', fontSize: 20 }}>{row.t}</span>
                <p className="t-body-md timeline-desc" style={{ color: 'var(--color-body-strong)' }}>{row.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee words={['Wait · ', 'Frame · ', 'Print cool · ', 'Hold the line · ']} />
    </>
  );
}
