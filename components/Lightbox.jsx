'use client';
import { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const cur = items[index];
  if (!cur) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <img className="lightbox__img" src={cur.src} alt={cur.title} />
        <button className="lightbox__close" onClick={onClose}><X size={18} /></button>
        <button className="lightbox__nav lightbox__nav--prev" onClick={onPrev}><ArrowLeft size={18} /></button>
        <button className="lightbox__nav lightbox__nav--next" onClick={onNext}><ArrowRight size={18} /></button>
        <div className="lightbox__caption">
          <div className="t-caption">{cur.meta}</div>
          <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 2, color: '#fff' }}>{cur.title}</div>
          <div className="t-caption">{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</div>
        </div>
      </div>
    </div>
  );
}
