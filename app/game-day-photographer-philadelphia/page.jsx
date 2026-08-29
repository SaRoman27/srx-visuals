import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Game Day Photographer Philadelphia | SRX Visuals',
  description:
    'Game day photography in Philadelphia for soccer, lacrosse, football, basketball, and more. Sideline action coverage with fast turnaround.',
  keywords: [
    'game day photographer philadelphia',
    'sideline photographer philadelphia',
    'football photographer philadelphia',
    'soccer photographer philadelphia',
    'lacrosse photographer philadelphia',
  ],
  alternates: { canonical: 'https://srxvisuals.com/game-day-photographer-philadelphia' },
  openGraph: {
    title: 'Game Day Photographer Philadelphia | SRX Visuals',
    description:
      'Book SRX Visuals for game day and sideline sports photography in Philadelphia with fast selects and clean edits.',
    url: 'https://srxvisuals.com/game-day-photographer-philadelphia',
    type: 'website',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://srxvisuals.com/game-day-photographer-philadelphia#webpage',
      url: 'https://srxvisuals.com/game-day-photographer-philadelphia',
      name: 'Game Day Photographer Philadelphia | SRX Visuals',
      isPartOf: { '@id': 'https://srxvisuals.com/#website' },
      about: { '@id': 'https://srxvisuals.com/#business' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srxvisuals.com' },
          { '@type': 'ListItem', position: 2, name: 'Game Day Photographer Philadelphia', item: 'https://srxvisuals.com/game-day-photographer-philadelphia' },
        ],
      },
    },
    {
      '@type': 'Service',
      name: 'Game Day and Sideline Photography',
      provider: { '@id': 'https://srxvisuals.com/#business' },
      areaServed: 'Philadelphia, PA',
      serviceType: 'Game Day Sports Photography',
      description:
        'Action-focused game day photography for school and club sports including soccer, lacrosse, football, basketball, and more.',
    },
  ],
};

export default function GameDayPhiladelphiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHeader
        index="SEO / 05"
        eyebrow="Sideline coverage"
        title={<>Game day photographer<br />in Philadelphia.</>}
        lede="Action-focused photos for game days across Philadelphia and the surrounding area."
      />

      <section className="sp" style={{ borderBottom: '1px solid var(--color-hairline)' }}>
        <Reveal as="h2" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 1, color: '#fff' }}>
          Capture every key moment
        </Reveal>
        <Reveal delay={1}>
          <p className="t-body-md" style={{ color: 'var(--color-body-strong)', maxWidth: 900 }}>
            We shoot from warmups through final whistle, covering decisive plays, sideline emotion, and athlete portraits that teams can use across websites and social channels.
          </p>
        </Reveal>
        <Reveal delay={2} style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/services" className="btn-ghost">Explore coverage</Link>
          <Link href="/contact" className="btn-primary">Book game day photos</Link>
        </Reveal>
      </section>
    </>
  );
}
