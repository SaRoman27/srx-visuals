'use client';
import { useState, useEffect } from 'react';
import Photo from './Photo';

export default function Hero({ frames, eyebrow, title, sub }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!frames || frames.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % frames.length), 6000);
    return () => clearInterval(t);
  }, [frames]);

  return (
    <section className="hero">
      <div className="hero__bg">
        {frames.map((f, i) => (
          <div key={i} style={{ position: 'absolute', inset: 0, opacity: i === idx ? 1 : 0, transition: 'opacity 1200ms cubic-bezier(0.4,0,0.2,1)' }}>
            <Photo src={f.src} kenburns aspect="auto" style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </div>
      <div className="hero__content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
          <div className="t-caption" style={{ color: '#fff', opacity: 0.9, maxWidth: 460 }}>{eyebrow}</div>
          <div className="t-caption" style={{ color: '#fff', opacity: 0.7 }}>
            {String(idx + 1).padStart(2, '0')} / {String(frames.length).padStart(2, '0')}
          </div>
        </div>
        <h1 className="hero__title-massive shimmer-text">{title}</h1>
        <div className="hero__meta">
          <div style={{ maxWidth: 480 }}>
            <p className="t-body-md" style={{ color: '#fff', opacity: 0.9 }}>{sub}</p>
          </div>
          <div className="t-caption" style={{ color: '#fff', opacity: 0.8 }}>{frames[idx].caption}</div>
        </div>
      </div>
      <div className="hero__scroll-cue">
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
