import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Reveal from '../components/Reveal';
import Photo from '../components/Photo';
import StatGrid from '../components/StatGrid';
import Link from 'next/link';
import { HERO_FRAMES, PROJECTS, STATS, CLIENTS } from '../data';

export default function HomePage() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <>
      <Hero
        frames={HERO_FRAMES}
        eyebrow="Sports & creative photography — Philadelphia"
        title="SRX Visuals"
        sub="A studio for sports and creative visual work. Frame by frame, the work holds up."
      />

      <Marquee words={CLIENTS} />

      {/* Featured work */}
      <section style={{ padding: '120px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 12 }}>02 / SELECTED WORK</div>
            <Reveal as="h2" className="t-display-md">Recent frames</Reveal>
          </div>
          <Link href="/portfolio" className="btn-ghost">View all</Link>
        </div>
        <div className="project-grid">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i} className="tile">
              <Photo src={p.cover} aspect="4/3" hoverZoom className="tile__photo" />
              <div className="tile__meta">
                <div className="t-caption" style={{ color: 'var(--color-muted)' }}>{p.sport} · {p.year}</div>
                <div className="tile__title">{p.name}</div>
                <div className="t-caption">{p.frames} frames</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Full-bleed photo */}
      <section style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        <Photo src={PROJECTS[3].cover} kenburns style={{ width: '100%', height: '100%' }} />
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,.38)'
        }}>
          <div className="t-caption" style={{ letterSpacing: 6, marginBottom: 24 }}>FRAME · RALLY · 2024</div>
          <h2 className="t-display-lg" style={{ textAlign: 'center', maxWidth: 800 }}>The decisive<br />moment.</h2>
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

      <StatGrid stats={STATS} eyebrow="03 / BY THE NUMBERS" />

      {/* Services teaser */}
      <section style={{ padding: '80px 64px 120px' }}>
        <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 48 }}>04 / WHAT WE DO</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <Reveal className="service-row" style={{ border: '1px solid var(--color-rule)', padding: '40px 32px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: 4, color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: 16 }}>01</div>
            <div className="t-display-sm" style={{ marginBottom: 16 }}>Sports photography</div>
            <p className="t-body-sm" style={{ color: 'var(--color-body)' }}>Game-day, practice, sideline. Stills delivered on a fast turnaround for teams, leagues, and athletes.</p>
          </Reveal>
          <Reveal delay={1} className="service-row" style={{ border: '1px solid var(--color-rule)', padding: '40px 32px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: 4, color: 'var(--color-muted)', textTransform: 'uppercase', marginBottom: 16 }}>02</div>
            <div className="t-display-sm" style={{ marginBottom: 16 }}>Custom requests</div>
            <p className="t-body-sm" style={{ color: 'var(--color-body)' }}>Portraits, events, brand shoots, headshots — whatever the brief calls for.</p>
          </Reveal>
        </div>
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <Link href="/services" className="btn-primary">See all services</Link>
        </div>
      </section>
    </>
  );
}
