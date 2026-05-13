import PageHeader from '../../components/PageHeader';
import Photo from '../../components/Photo';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import { SERVICES } from '../../data';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Services"
        title="What we offer."
        lede="Two offerings, one standard — cinematic work delivered fast."
      />

      <section style={{ padding: '0 64px 120px' }}>
        {SERVICES.map((svc, i) => (
          <Reveal key={svc.num} delay={i} className="service-row" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
            padding: '80px 0',
            borderTop: '1px solid var(--color-rule)',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 11,
                letterSpacing: 6,
                color: 'var(--color-muted)',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}>{svc.num}</div>
              <h2 className="t-display-md" style={{ marginBottom: 24 }}>{svc.title}</h2>
              <p className="t-body-md" style={{ color: 'var(--color-body)', maxWidth: 440, marginBottom: 40 }}>{svc.desc}</p>
              <Link href="/contact" className="btn-primary">Book this</Link>
            </div>
            <Photo src={svc.cover} aspect="4/3" hoverZoom />
          </Reveal>
        ))}
      </section>

      {/* CTA banner */}
      <section style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
        padding: '80px 64px',
        textAlign: 'center',
      }}>
        <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 24 }}>READY TO BOOK?</div>
        <h2 className="t-display-md" style={{ marginBottom: 40 }}>Let's talk frames.</h2>
        <Link href="/contact" className="btn-primary">Start a project</Link>
      </section>
    </>
  );
}
