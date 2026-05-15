'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import MenuOverlay from './MenuOverlay';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHidden(y > 120 && y > last);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 64, zIndex: 50,
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
        padding: '0 32px', background: 'transparent',
        transition: 'transform 300ms ease, border-color 300ms ease',
        transform: hidden && !menuOpen ? 'translateY(-100%)' : 'translateY(0)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}>
        <button onClick={() => setMenuOpen(true)} className="t-nav" style={{
          justifySelf: 'start', display: 'inline-flex', alignItems: 'center', gap: 12,
          background: 'transparent', border: 0, color: '#fff', cursor: 'pointer', padding: 0, height: 40,
        }}>
          <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ width: 22, height: 1, background: '#fff' }} />
            <span style={{ width: 16, height: 1, background: '#fff' }} />
          </span>
          Menu
        </button>

        <Link href="/" style={{ justifySelf: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/srx-wordmark.svg" alt="SRX Visuals" height="32" style={{ display: 'block' }} />
        </Link>

        <div style={{ justifySelf: 'end' }}>
          <Link href="/contact" className="t-nav" style={{
            color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ width: 6, height: 6, background: '#fff', borderRadius: 9999 }} />
            Book a session
          </Link>
        </div>
      </nav>

      <MenuOverlay open={menuOpen} current={pathname} onClose={() => setMenuOpen(false)} />
    </>
  );
}
