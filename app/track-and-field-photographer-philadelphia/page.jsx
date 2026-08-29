import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Track and Field Photographer Philadelphia | SRX Visuals',
  description:
    'Track meet photographer in Philadelphia for sprints, distance, hurdles, relays, and field events. Athlete-led coverage with fast photo delivery.',
  keywords: [
    'track and field photographer philadelphia',
    'track meet photographer philadelphia',
    'high school track photographer philadelphia',
    'philadelphia track photography',
    'cross country photographer philadelphia',
  ],
  alternates: { canonical: 'https://srxvisuals.com/track-and-field-photographer-philadelphia' },
  openGraph: {
    title: 'Track and Field Photographer Philadelphia | SRX Visuals',
    description:
      'Book SRX Visuals for track and field photography in Philadelphia. Meet-day coverage by photographers who compete in the sport.',
    url: 'https://srxvisuals.com/track-and-field-photographer-philadelphia',
    type: 'website',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://srxvisuals.com/track-and-field-photographer-philadelphia#webpage',
      url: 'https://srxvisuals.com/track-and-field-photographer-philadelphia',
      name: 'Track and Field Photographer Philadelphia | SRX Visuals',
      isPartOf: { '@id': 'https://srxvisuals.com/#website' },
      about: { '@id': 'https://srxvisuals.com/#business' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srxvisuals.com' },
          { '@type': 'ListItem', position: 2, name: 'Track and Field Photographer Philadelphia', item: 'https://srxvisuals.com/track-and-field-photographer-philadelphia' },
        ],
      },
    },
    {
      '@type': 'Service',
      name: 'Track and Field Meet Photography',
      provider: { '@id': 'https://srxvisuals.com/#business' },
      areaServed: 'Philadelphia, PA',
      serviceType: 'Track and Field Photography',
      description:
        'Coverage for high school and club track meets, including starts, relays, hurdles, jumps, throws, and distance races.',
    },
  ],
};

export default function TrackFieldPhiladelphiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHeader
        index="SEO / 02"
        eyebrow="Track & field coverage"
        title={<>Track and field<br />photographer in Philly.</>}
        lede="Shot by competitive athletes who understand the rhythm of races and field events."
      />

      <section className="sp" style={{ borderBottom: '1px solid var(--color-hairline)' }}>
        <Reveal as="h2" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 1, color: '#fff' }}>
          Meet-day coverage
        </Reveal>
        <Reveal delay={1}>
          <p className="t-body-md" style={{ color: 'var(--color-body-strong)', maxWidth: 900 }}>
            We cover starts, acceleration phases, finish-line moments, relay handoffs, jumps, throws, and athlete portraits across the Philadelphia area.
            Selects are delivered within 24 hours.
          </p>
        </Reveal>
        <Reveal delay={2} style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/services" className="btn-ghost">View services</Link>
          <Link href="/contact" className="btn-primary">Book track coverage</Link>
        </Reveal>
      </section>
    </>
  );
}
