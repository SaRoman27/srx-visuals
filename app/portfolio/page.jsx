import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        index="02 / 05"
        eyebrow="Portfolio - The archive - Live gallery"
        title={<>The<br />archive.</>}
        lede="The full studio archive, served live from Pic-Time. Selected stills from 2024 through 2026 - match days, brand work, behind-the-scenes notes. Use the gallery controls to browse, favourite, or request prints."
      />

      {/* Pic-Time live embed */}
      <section style={{ padding: 0 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '24px 64px', borderBottom: '1px solid var(--color-hairline)',
          gap: 24, flexWrap: 'wrap'
        }}>
          <div className="t-caption">Live archive - srxvisuals.pic-time.com</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 6, height: 6, background: '#5fa657', borderRadius: 9999, display: 'inline-block' }} />
            <span className="t-caption" style={{ color: 'var(--color-body-strong)' }}>Connected - feed live</span>
          </div>
          <a href="https://srxvisuals.pic-time.com/client" target="_blank" rel="noreferrer" className="btn-ghost">
            Open in full window
          </a>
        </div>

        <div style={{ background: '#0a0a0a', padding: '24px', minHeight: 'calc(100vh - 200px)' }}>
          <iframe
            id="pictimeIntegration"
            title="SRX Visuals - Pic-Time portfolio"
            src="https://srxvisuals.pic-time.com/client?headless=true"
            frameBorder="0"
            style={{
              width: '100%',
              height: 'calc(100vh - 240px)',
              minHeight: 800,
              border: 0,
              background: '#000',
              display: 'block',
            }}
          />
        </div>
      </section>

      {/* Archive CTA */}
      <section style={{ padding: '120px 64px', borderTop: '1px solid var(--color-hairline)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <Reveal>
          <div className="t-caption" style={{ marginBottom: 16 }}>Beyond the gallery - 2026</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 22, lineHeight: 1.55, color: 'var(--color-body-strong)', maxWidth: 560 }}>
            For private sets, unreleased frames, or licensing of any image in the archive - write to the studio and Sawyer will respond personally within two working days.
          </p>
        </Reveal>
        <Reveal delay={1} style={{ alignSelf: 'center', justifySelf: 'end' }}>
          <a href="mailto:archive@srxvisuals.com" className="btn-primary">Request the archive</a>
        </Reveal>
      </section>
    </>
  );
}
