import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Sports Photographer Philadelphia, PA | SRX Visuals',
  description:
    'Need a sports photographer in Philadelphia? SRX Visuals covers track meets, game days, and athletic events with 24-hour selects and fast delivery.',
  keywords: [
    'sports photographer philadelphia',
    'sports photography philadelphia pa',
    'sports photographer near me philadelphia',
    'philadelphia sports photographer',
    'hire sports photographer philadelphia',
  ],
  alternates: { canonical: 'https://srxvisuals.com/sports-photographer-philadelphia' },
  openGraph: {
    title: 'Sports Photographer Philadelphia, PA | SRX Visuals',
    description:
      'Philadelphia sports photography for teams, athletes, and events. Track meets, game days, portraits, and custom sessions with fast turnaround.',
    url: 'https://srxvisuals.com/sports-photographer-philadelphia',
    type: 'website',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://srxvisuals.com/sports-photographer-philadelphia#webpage',
      url: 'https://srxvisuals.com/sports-photographer-philadelphia',
      name: 'Sports Photographer Philadelphia, PA | SRX Visuals',
      isPartOf: { '@id': 'https://srxvisuals.com/#website' },
      about: { '@id': 'https://srxvisuals.com/#business' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srxvisuals.com' },
          { '@type': 'ListItem', position: 2, name: 'Sports Photographer Philadelphia', item: 'https://srxvisuals.com/sports-photographer-philadelphia' },
        ],
      },
    },
    {
      '@type': 'Service',
      name: 'Sports Photography in Philadelphia',
      provider: { '@id': 'https://srxvisuals.com/#business' },
      areaServed: 'Philadelphia, PA',
      serviceType: 'Sports Photography',
      description:
        'Track and field meets, game days, and sports event coverage with 24-hour selects and full edited delivery within 72 hours.',
    },
  ],
};

export default function SportsPhotographerPhiladelphiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHeader
        index="SEO / 01"
        eyebrow="Philadelphia sports photography"
        title={<>Sports photographer<br />in Philadelphia.</>}
        lede="SRX Visuals delivers sports coverage for teams, schools, clubs, and athletes across Philadelphia, PA."
      />

      <section className="sp" style={{ borderBottom: '1px solid var(--color-hairline)' }}>
        <Reveal as="h2" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 1, color: '#fff' }}>
          What this page is for
        </Reveal>
        <Reveal delay={1}>
          <p className="t-body-md" style={{ color: 'var(--color-body-strong)', maxWidth: 900 }}>
            If you are searching for a sports photographer in Philadelphia, this is the right place to start. We cover high school athletics, club sports,
            and individual athletes with a fast turnaround and consistent edit style.
          </p>
        </Reveal>
        <Reveal delay={2} style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/services" className="btn-ghost">See all services</Link>
          <Link href="/contact" className="btn-primary">Book a session</Link>
        </Reveal>
      </section>
    </>
  );
}
