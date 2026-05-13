import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import Photo from '../components/Photo';
import StatGrid from '../components/StatGrid';
import Link from 'next/link';
import { HERO_FRAMES, GALLERY, PROJECTS, STATS, CLIENTS } from '../data';

export default function HomePage() {
  return (
    <>
      <Hero
        frames={HERO_FRAMES}
        eyebrow="Sports and creative photography - Philadelphia"
        title={<>On the field.<br /><span style={{ opacity: 0.55 }}>In the moment.</span></>}
        sub="Cinematic photography for sports, brands, and editorial. Cool, contrasted, and quietly composed."
      />

      {/* Mission strip */}
      <section style={{ padding: '120px 64px 80px', borderBottom: '1px solid var(--color-hairline)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <div className="t-caption" style={{ marginBottom: 24 }}>The studio - 01</div>
            <Reveal as="div" style={{ fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: 6, color: '#fff', textTransform: 'uppercase' }}>
              SRX Visuals
            </Reveal>
          </div>
          <div>
            <Reveal as="h2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 88px)',
              lineHeight: 1.05, letterSpacing: 1, textTransform: 'uppercase', color: '#fff',
              margin: 0, maxWidth: 1100
            }}>
              I make pictures of sport. Quiet,<br />
              <span style={{ color: 'var(--color-muted)' }}>composed, and built to print.</span>
            </Reveal>
            <Reveal delay={1} as="p" style={{
              marginTop: 48, fontFamily: 'var(--font-body)', fontSize: 22, lineHeight: 1.55,
              color: 'var(--color-body-strong)', maxWidth: 720
            }}>
              SRX Visuals is a one-person studio based in Philadelphia. I cover match days, training grounds, and custom sessions for athletes, clubs, and brands who care about how their work looks.
            </Reveal>
            <Reveal delay={2} style={{ marginTop: 40, display: 'flex', gap: 24 }}>
              <Link href="/portfolio" className="btn-primary">See the work</Link>
              <Link href="/about" className="btn-ghost">About the studio</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full bleed editorial photo */}
      <section style={{ padding: 0 }}>
        <Reveal>
          <div style={{ position: 'relative' }}>
            <Photo
              src={GALLERY[7].src}
              aspect="21/9"
              kenburns
              style={{ width: '100%' }}
            />
            <div style={{ position: 'absolute', left: 64, bottom: 56, color: '#fff', maxWidth: 720 }}>
              <div className="t-caption" style={{ marginBottom: 16, color: 'rgba(255,255,255,0.8)' }}>Frame study - 02</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 72px)', lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}>
                Cool light.<br />Long lens.<br /><span style={{ opacity: 0.6 }}>Wait.</span>
              </div>
            </div>
            <div style={{ position: 'absolute', right: 64, bottom: 56, color: '#fff' }}>
              <div className="t-caption" style={{ color: 'rgba(255,255,255,0.7)' }}>City Derby - Frame 2,140 - 21:9</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Film strip */}
      <div className="filmstrip">
        <div className="filmstrip__track">
          {[...PROJECTS, ...PROJECTS].map((p, i) => (
            <div key={i} className="filmstrip__frame">
              <Photo src={p.cover} aspect="3/2" />
            </div>
          ))}
        </div>
      </div>

      <StatGrid stats={STATS} eyebrow="Studio - 2025" />

      <Marquee words={CLIENTS} />

      {/* Closing CTA */}
      <section style={{ padding: '160px 64px', borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 80, alignItems: 'flex-end' }}>
          <Reveal as="h2" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(64px, 10vw, 200px)',
            lineHeight: 0.9, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', margin: 0
          }}>
            Frame by<br /><span style={{ opacity: 0.55 }}>frame.</span>
          </Reveal>
          <Reveal delay={1} style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-end', paddingBottom: 32 }}>
            <div className="t-caption" style={{ maxWidth: 320, textAlign: 'right' }}>Currently booking - 2026</div>
            <Link href="/contact" className="btn-primary">Book a session</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
