'use client';
import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Photo from '../../components/Photo';
import Lightbox from '../../components/Lightbox';
import Reveal from '../../components/Reveal';
import { GALLERY } from '../../data';

const CATS = ['all', 'sports', 'events', 'creative', 'esports'];

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [lbIndex, setLbIndex] = useState(null);

  const filtered = active === 'all' ? GALLERY : GALLERY.filter(g => g.cat === active);

  return (
    <>
      <PageHeader index="01" eyebrow="Portfolio" title="The work." lede="Eight seasons of sport, motion, and stillness — captured frame by frame." />

      {/* Filter pills */}
      <div style={{ padding: '0 64px 64px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {CATS.map(c => (
          <button
            key={c}
            className={`filter-pill${active === c ? ' filter-pill--active' : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry-style gallery grid */}
      <div className="gallery-grid" style={{ padding: '0 64px 120px' }}>
        {filtered.map((item, i) => (
          <Reveal
            key={item.id}
            delay={i % 4}
            className="gallery-item"
            style={{ gridColumn: `span ${item.span}` }}
            onClick={() => setLbIndex(i)}
          >
            <Photo src={item.src} aspect={item.aspect} hoverZoom />
            <div className="gallery-item__caption">
              <span className="t-caption" style={{ color: 'var(--color-muted)' }}>{item.meta}</span>
              <span className="t-caption">{item.title}</span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Pic-Time embed */}
      <section style={{ padding: '0 64px 120px' }}>
        <div className="t-caption" style={{ marginBottom: 32, color: 'var(--color-muted)' }}>CLIENT GALLERY</div>
        <iframe
          src="https://srxvisuals.pic-time.com/client?headless=true"
          style={{ width: '100%', height: 600, border: 'none', background: '#111' }}
          title="SRX Visuals Client Gallery"
          loading="lazy"
        />
      </section>

      {lbIndex !== null && (
        <Lightbox
          items={filtered}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onPrev={() => setLbIndex(idx => (idx - 1 + filtered.length) % filtered.length)}
          onNext={() => setLbIndex(idx => (idx + 1) % filtered.length)}
        />
      )}
    </>
  );
}
