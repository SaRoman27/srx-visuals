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
        eyebrow="Sports and creative photography · Philadelphia"
        title={<>On the field.<br /><span style={{ opacity: 0.55 }}>In the moment.</span></>}
        sub="I'm a track and field athlete who shoots the sports I love — meets, game days, custom sessions, and everything in between."
      />

      {/* Mission strip */}
      <section className="sp" style={{ paddingBottom: 80, borderBottom: '1px solid var(--color-hairline)' }}>
        <div className="g-split">
          <div>
            <Reveal style={{ marginBottom: 24 }}>
              <Photo src={GALLERY[4].src} aspect="3/4" style={{ width: '100%' }} />
            </Reveal>
            <div className="t-caption" style={{ marginBottom: 12 }}>The studio - 01</div>
            <Reveal as="div" style={{ fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: 6, color: '#fff', textTransform: 'uppercase' }}>
              SRX Visuals
            </Reveal>
          </div>
          <div>
            <Reveal as="h2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 88px)',
              lineHeight: 1.05, letterSpacing: 1, textTransform: 'uppercase', color: '#fff',
              margin: 0,
            }}>
              I shoot the moments<br />
              <span style={{ color: 'var(--color-muted)' }}>that actually matter.</span>
            </Reveal>
            <Reveal delay={1} as="p" style={{
              marginTop: 40, fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 2.2vw, 22px)', lineHeight: 1.55,
              color: 'var(--color-body-strong)',
            }}>
              SRX Visuals is a one-person photography studio out of Philadelphia. I'm a track and field athlete who started shooting the sports I compete in — and kept going. I cover meets, game days, practices, and custom sessions for athletes, teams, and brands who want photos that actually look good.
            </Reveal>
            <Reveal delay={2} style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/portfolio" className="btn-primary">See the work</Link>
              <Link href="/about" className="btn-ghost">About the studio</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full bleed editorial photo */}
      <section style={{ padding: 0, position: 'relative' }}>
        <Photo src={GALLERY[7].src} aspect="21/9" kenburns style={{ width: '100%' }} />
        <div className="bleed-label-l">
          <div className="t-caption" style={{ marginBottom: 16, color: 'rgba(255,255,255,0.8)' }}>Frame study - 02</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 72px)', lineHeight: 1, letterSpacing: 1, textTransform: 'uppercase' }}>
            Cool light.<br />Long lens.<br /><span style={{ opacity: 0.6 }}>Wait.</span>
          </div>
        </div>
        <div className="bleed-label-r">
          <div className="t-caption" style={{ color: 'rgba(255,255,255,0.7)' }}>City Derby - Frame 2,140 - 21:9</div>
        </div>
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
      <section className="sp" style={{ borderTop: '1px solid var(--color-hairline)', borderBottom: '1px solid var(--color-hairline)', paddingTop: 'min(160px, var(--section-y))', paddingBottom: 'min(160px, var(--section-y))' }}>
        <div className="g-cta">
          <Reveal as="h2" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(56px, 10vw, 200px)',
            lineHeight: 0.9, letterSpacing: 1, textTransform: 'uppercase', color: '#fff', margin: 0
          }}>
            Frame by<br /><span style={{ opacity: 0.55 }}>frame.</span>
          </Reveal>
          <Reveal delay={1} style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start', paddingBottom: 8 }}>
            <div className="t-caption" style={{ color: 'var(--color-muted)' }}>Currently booking - 2026</div>
            <Link href="/contact" className="btn-primary">Book a session</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
