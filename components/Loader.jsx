'use client';
import { useState, useEffect } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 2700);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;
  return (
    <div className="loader">
      <div className="loader__wordmark">SRX<span style={{ opacity: 0.5 }}>\\</span>Visuals</div>
      <div className="loader__bar"><span /></div>
      <div className="loader__caption">Loading the archive · 2025 - 2026</div>
    </div>
  );
}
