import Reveal from './Reveal';

export default function StatGrid({ stats, eyebrow }) {
  return (
    <section style={{ padding: '120px 64px' }}>
      {eyebrow && <div className="t-caption" style={{ marginBottom: 40 }}>{eyebrow}</div>}
      <div className="stat-grid">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i} className="stat">
            <div className="t-caption">{String(i + 1).padStart(2, '0')}</div>
            <div className="stat__value">{s.value}</div>
            <div className="stat__label t-body-sm">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
