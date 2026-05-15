import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div style={{ marginBottom: 24 }}>
          <img src="/srx-wordmark.svg" alt="SRX Visuals" height="36" style={{ display: 'block' }} />
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 1.6vw, 18px)', fontStyle: 'italic', color: 'var(--color-body-strong)', marginBottom: 8 }}>
          Trained to compete. Built to capture.
        </p>
        <p className="t-body-md" style={{ maxWidth: 340, color: 'var(--color-body)' }}>
          Sports and creative photography out of Philadelphia.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/contact" className="btn-primary">Book a session</Link>
        </div>
      </div>
      <div>
        <div className="footer__col-title">Studio</div>
        <ul className="footer__list">
          {[['/', 'Home'], ['/portfolio', 'Portfolio'], ['/services', 'Services'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <div className="footer__col-title">Social</div>
        <ul className="footer__list">
          <li><a href="https://srxvisuals.pic-time.com" target="_blank" rel="noreferrer">Pic-Time</a></li>
        </ul>
      </div>
      <div>
        <div className="footer__col-title">Reach</div>
        <ul className="footer__list">
          <li><a href="mailto:sawyer@srxvisuals.com" style={{ fontSize: 14 }}>sawyer@srxvisuals.com</a></li>
          <li><a href="mailto:press@srxvisuals.com" style={{ fontSize: 14 }}>press@srxvisuals.com</a></li>
        </ul>
        <div className="t-caption" style={{ marginTop: 24, color: 'var(--color-muted)' }}>Philadelphia, PA</div>
      </div>
      <div className="footer__bottom">
        <div className="t-caption">© 2026 SRX Visuals. All work protected.</div>
        <div className="t-caption">Frame · Index · 2025 - 2026</div>
      </div>
    </footer>
  );
}
