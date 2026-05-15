export const metadata = {
  title: 'About Sawyer Roman | Philadelphia Sports Photographer',
  description: 'Sawyer Roman is a track and field athlete and sports photographer based in Philadelphia, PA. Founder of SRX Visuals — covering meets, game days, and custom sessions since 2023.',
  alternates: { canonical: 'https://srxvisuals.com/about' },
  openGraph: {
    title: 'About Sawyer Roman | Philadelphia Sports Photographer',
    description: 'Track and field athlete turned photographer. Based in Philadelphia, covering sports and custom sessions since 2023.',
    url: 'https://srxvisuals.com/about',
  },
};

import PageHeader from '../../components/PageHeader';
import Photo from '../../components/Photo';
import Reveal from '../../components/Reveal';
import Marquee from '../../components/Marquee';
import Link from 'next/link';
import { ABOUT_PORTRAITS } from '../../data';

const PHILOSOPHY = [
  { n: '01', t: 'Know the sport.', d: "I compete in track and field, so I already know where to stand when the gun fires. That background shows up in every shoot. I'm not guessing at the moment, I'm ready for it." },
  { n: '02', t: 'Cool, not warm.', d: 'I grade neutral to cool across all my work. It gives everything a consistent, clean look that holds up whether you\'re viewing it on a screen or printing it large.' },
  { n: '03', t: 'Built to last.',  d: "I edit with the final product in mind: whether that's a print, a post, or a publication. If it doesn't look right at full size, it doesn't leave my hands." },
];

const TIMELINE = [
  { y: '2025', t: 'SRX Visuals launched',  d: 'Started taking on clients officially under the SRX Visuals name. One photographer, one camera, fully committed.' },
  { y: '2025', t: 'First full season',     d: 'Covered a complete season sideline with WEXP and LS Athletics: game days, practices, and everything between.' },
  { y: '2024', t: 'First credential',      d: 'First sideline pass at a local derby match. One camera, one lens, zero backup cards. Figured it out.' },
  { y: '2023', t: 'First frames',          d: 'Started shooting local track meets and athletics events. Monochrome from day one, because it just looked right.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="04 / 05"
        eyebrow="About - The photographer"
        title={<>The<br />studio.</>}
        lede="SRX Visuals is run by Sawyer Roman, a track and field athlete and photographer based in Philadelphia, PA."
      />

      {/* Portrait + bio */}
      <section className="sp">
        <div className="g-about">
          <Reveal>
            <Photo src={ABOUT_PORTRAITS[0]} aspect="4/5" objectPosition="35% center" alt="Sawyer Roman — sports photographer and track & field athlete, Philadelphia PA" />
            <div className="t-caption" style={{ marginTop: 16 }}>Sawyer Roman - Studio principal - 2026</div>
          </Reveal>
          <div>
            <div className="t-caption" style={{ marginBottom: 24 }}>Bio - 01</div>
            <Reveal as="h2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4.4vw, 72px)',
              lineHeight: 1.05, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', margin: 0
            }}>
              Sawyer Roman, athlete and photographer, since 2023.
            </Reveal>
            <Reveal delay={1} style={{ marginTop: 28 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(20px, 2.6vw, 28px)', fontStyle: 'italic', lineHeight: 1.3, color: '#fff', borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: 20, margin: 0 }}>
                Trained to compete. Built to capture.
              </p>
            </Reveal>
            <Reveal delay={1} style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.6, color: 'var(--color-body-strong)' }}>
                I'm a track and field athlete based in Philadelphia. I started photographing sports because I wanted better coverage of the events I was already competing in. Once I had a camera on the sideline, I didn't want to put it down.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.65, color: 'var(--color-body)' }}>
                SRX Visuals is how I work with clients. I shoot track meets, game days, and multi-sport events across the Philadelphia area. I also take on custom work: portraits, headshots, brand sessions, and whatever else you have in mind.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.65, color: 'var(--color-body)' }}>
                Competing gives me a real advantage behind the lens. I know which moments matter and where to be when they happen, because I've been on the other side of the camera too.
              </p>
            </Reveal>
            <Reveal delay={2} style={{ marginTop: 32, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="chip">Track & field athlete</span>
              <span className="chip">Philadelphia, PA</span>
              <span className="chip">Multi-sport coverage</span>
              <span className="chip">Custom work welcome</span>
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
        <Photo src={ABOUT_PORTRAITS[1]} aspect="21/9" kenburns style={{ width: '100%' }} alt="SRX Visuals sports photography — Philadelphia PA" />
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

      <Marquee words={['Trained to compete · ', 'Built to capture · ', 'Philadelphia · ', 'Track & field · ']} />
    </>
  );
}
