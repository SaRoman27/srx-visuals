export const metadata = {
  title: 'Portfolio | Sports Photography by SRX Visuals',
  description: 'Browse the SRX Visuals photo archive — track meets, game days, athlete portraits, and creative sessions from 2023 through 2026. Based in Philadelphia, PA.',
  alternates: { canonical: 'https://srxvisuals.com/portfolio' },
  openGraph: {
    title: 'Portfolio | Sports Photography by SRX Visuals',
    description: 'Track meets, game days, athlete portraits, and creative sessions from 2023 through 2026.',
    url: 'https://srxvisuals.com/portfolio',
  },
};

import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        index="02 / 05"
        eyebrow="Portfolio - The archive - Live gallery"
        title={<>The<br />archive.</>}
        lede="The full studio archive, served live from Pic-Time. Selected stills from 2024 through 2026 - match days, brand work, behind-the-scenes notes."
      />

      <section style={{ padding: 0 }}>
        <div className="portfolio-bar">
          <div className="t-caption">Live archive - media.srxvisuals.com</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 6, height: 6, background: '#5fa657', borderRadius: 9999, display: 'inline-block', flexShrink: 0 }} />
            <span className="t-caption" style={{ color: 'var(--color-body-strong)' }}>Connected - feed live</span>
          </div>
          <a href="https://srxvisuals.pic-time.com/client" target="_blank" rel="noreferrer" className="btn-ghost">
            Open in full window
          </a>
        </div>

        <div className="pictime-wrap" style={{ background: '#0a0a0a', padding: '24px var(--pad-x, 64px)' }}>
          <iframe
            id="pictimeIntegration"
            title="SRX Visuals - Pic-Time portfolio"
            src="https://srxvisuals.pic-time.com/client?headless=true"
            frameBorder="0"
            style={{
              width: '100%',
              height: 'calc(100vh - 200px)',
              minHeight: 600,
              border: 0,
              background: '#000',
              display: 'block',
            }}
          />
        </div>
      </section>

      {/* Archive CTA */}
      <section className="sp" style={{ borderTop: '1px solid var(--color-hairline)' }}>
        <div className="g-half" style={{ alignItems: 'center' }}>
          <Reveal>
            <div className="t-caption" style={{ marginBottom: 16 }}>Beyond the gallery - 2026</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px, 2.2vw, 22px)', lineHeight: 1.55, color: 'var(--color-body-strong)' }}>
              For private sets, unreleased frames, or licensing - write to the studio and Sawyer will respond personally within two working days.
            </p>
          </Reveal>
          <Reveal delay={1} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="mailto:archive@srxvisuals.com" className="btn-primary">Request the archive</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
