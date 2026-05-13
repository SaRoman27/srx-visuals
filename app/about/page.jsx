'use client';
import { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Photo from '../../components/Photo';
import Reveal from '../../components/Reveal';
import Link from 'next/link';
import { ABOUT_PORTRAITS } from '../../data';

const TIMELINE = [
  { year: '2025', label: 'Since 2025.', desc: 'SRX Visuals opens full-time. First season embedded with two Philadelphia-area programs.' },
  { year: '2024', label: 'First frames.',  desc: 'A sideline credential at a local derby match. One camera, one lens, zero backup cards.' },
  { year: '2023', label: 'The pivot.',    desc: 'Left a corporate job to pursue sport photography seriously. The quality of light changed everything.' },
];

export default function AboutPage() {
  const [portraitIdx, setPortraitIdx] = useState(0);

  return (
    <>
      <PageHeader index="03" eyebrow="About" title="The photographer." />

      {/* Portrait + bio */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, padding: '0 64px 120px', alignItems: 'start' }}>
        <div>
          <div style={{ position: 'relative' }}>
            <Photo src={ABOUT_PORTRAITS[portraitIdx]} aspect="3/4" style={{ width: '100%' }} />
            {ABOUT_PORTRAITS.length > 1 && (
              <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                {ABOUT_PORTRAITS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPortraitIdx(i)}
                    style={{
                      width: 32, height: 3,
                      background: i === portraitIdx ? '#fff' : 'var(--color-rule)',
                      border: 'none', cursor: 'pointer', padding: 0, transition: 'background .3s',
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ paddingTop: 40 }}>
          <Reveal>
            <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 24 }}>SAWYER ROMAN / SRX VISUALS</div>
            <p className="t-body-md" style={{ color: 'var(--color-body-strong)', marginBottom: 24, lineHeight: 1.7 }}>
              I shoot sport. Not the highlights — the weight of the moment before and after. The shot clock winding down, the exhausted smile on the sideline, the coach mid-sentence with chalk dust on his hands.
            </p>
            <p className="t-body-md" style={{ color: 'var(--color-body)', marginBottom: 24, lineHeight: 1.7 }}>
              Based in Philadelphia, I've been embedded with teams across football, tennis, climbing, and esports. My work is monochrome by default because color is a distraction from form.
            </p>
            <p className="t-body-md" style={{ color: 'var(--color-body)', lineHeight: 1.7 }}>
              Fast turnaround, clean licensing, no watermarks on delivery. The work is built to be used.
            </p>
          </Reveal>
          <Reveal delay={1} style={{ marginTop: 48 }}>
            <Link href="/contact" className="btn-primary">Work together</Link>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 64px 120px', borderTop: '1px solid var(--color-rule)' }}>
        <div className="t-caption" style={{ color: 'var(--color-muted)', marginBottom: 64 }}>BACKGROUND</div>
        {TIMELINE.map((t, i) => (
          <Reveal key={t.year} delay={i} style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 2fr',
            gap: 40,
            paddingBottom: 48,
            marginBottom: 48,
            borderBottom: i < TIMELINE.length - 1 ? '1px solid var(--color-rule)' : 'none',
            alignItems: 'start',
          }}>
            <div className="t-caption" style={{ color: 'var(--color-muted)', paddingTop: 4 }}>{t.year}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: 2, textTransform: 'uppercase' }}>{t.label}</div>
            <p className="t-body-sm" style={{ color: 'var(--color-body)' }}>{t.desc}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
