'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Photo from './Photo';

const ITEMS = [
  { href: '/',          label: 'Home',      meta: '01' },
  { href: '/portfolio', label: 'Portfolio', meta: '02' },
  { href: '/services',  label: 'Services',  meta: '03' },
  { href: '/about',     label: 'About',     meta: '04' },
  { href: '/contact',   label: 'Contact',   meta: '05' },
];

export default function MenuOverlay({ open, current, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="page-fade menu-overlay" style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 100, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
      {/* Header bar */}
      <div style={{
        height: 64, padding: '0 var(--pad-x, 32px)', flexShrink: 0,
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
        borderBottom: '1px solid var(--color-hairline)',
      }}>
        <div className="t-nav" style={{ color: 'var(--color-muted)', justifySelf: 'start' }}>Index · 05</div>
        <div style={{ justifySelf: 'center' }}>
          <img src="/srx-wordmark.svg" alt="SRX Visuals" height="28" style={{ display: 'block' }} />
        </div>
        <button onClick={onClose} className="t-nav" style={{ justifySelf: 'end', background: 'transparent', border: 0, color: '#fff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: 12 }}>
          Close
          <span style={{ position: 'relative', width: 18, height: 18 }}>
            <span style={{ position: 'absolute', top: 8, left: 0, width: 18, height: 1, background: '#fff', transform: 'rotate(45deg)' }} />
            <span style={{ position: 'absolute', top: 8, left: 0, width: 18, height: 1, background: '#fff', transform: 'rotate(-45deg)' }} />
          </span>
        </button>
      </div>

      {/* Body */}
      <div className="menu-body" style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 0 }}>
        {/* Nav links */}
        <div className="menu-nav" style={{ borderRight: '1px solid var(--color-hairline)', padding: 'clamp(32px, 5vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {ITEMS.map((it, i) => (
              <Link key={it.href} href={it.href} onClick={onClose}
                data-delay={i}
                style={{
                  color: '#fff', textDecoration: 'none', padding: '10px 0',
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 8vw, 120px)',
                  letterSpacing: 1, textTransform: 'uppercase', lineHeight: 1,
                  display: 'flex', alignItems: 'baseline', gap: 16,
                  borderBottom: '1px solid var(--color-hairline)',
                }}>
                <span style={{ fontSize: 11, letterSpacing: 2, fontFamily: 'var(--font-mono)', color: 'var(--color-muted)', minWidth: 28, flexShrink: 0 }}>{it.meta}</span>
                <span>{it.label}</span>
                {current === it.href && <span style={{ marginLeft: 'auto', fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--color-muted)', letterSpacing: 2 }}>NOW VIEWING</span>}
              </Link>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 32 }}>
            <div className="t-caption">Studio · Philadelphia, PA</div>
            <div className="t-caption">EST. 2025</div>
          </div>
        </div>

        {/* Right panel, hidden on mobile */}
        <div className="menu-panel" style={{ padding: 'clamp(32px, 5vw, 64px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="t-caption" style={{ marginBottom: 32 }}>Latest frame</div>
            <Photo aspect="4/5" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&h=1000&q=80" hoverZoom style={{ maxWidth: 360 }} />
            <div className="t-caption" style={{ marginTop: 16 }}>City Derby · Stoppage time</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="t-caption">Reach the studio</div>
            <a href="mailto:sawyer@srxvisuals.com" style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: 24, letterSpacing: 1, textDecoration: 'none' }}>
              sawyer@srxvisuals.com
            </a>
            <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
              <span className="chip">Pic-Time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
