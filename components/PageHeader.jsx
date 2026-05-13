import Reveal from './Reveal';

export default function PageHeader({ index, eyebrow, title, lede }) {
  return (
    <header className="page-header">
      <div className="page-header__eyebrow">
        <span className="t-caption" style={{ color: 'var(--color-muted)' }}>{index}</span>
        <i />
        <span className="t-caption">{eyebrow}</span>
      </div>
      <Reveal as="h1" className="page-header__title">{title}</Reveal>
      {lede && (
        <Reveal delay={1} as="p" className="t-body-md" style={{ marginTop: 40, maxWidth: 640, fontSize: 20, lineHeight: 1.55, color: 'var(--color-body-strong)' }}>
          {lede}
        </Reveal>
      )}
    </header>
  );
}
