import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Team Photography Philadelphia, PA | SRX Visuals',
  description:
    'Team photography in Philadelphia for schools, clubs, and programs. Group photos, roster portraits, and game-day sideline coverage by SRX Visuals.',
  keywords: [
    'team photography philadelphia',
    'sports team photos philadelphia',
    'high school team photographer philadelphia',
    'roster portraits philadelphia',
    'team media day photography philadelphia',
  ],
  alternates: { canonical: 'https://srxvisuals.com/team-photography-philadelphia' },
  openGraph: {
    title: 'Team Photography Philadelphia, PA | SRX Visuals',
    description:
      'Book team photo day and roster portraits in Philadelphia. Organized, fast team sessions for schools and clubs.',
    url: 'https://srxvisuals.com/team-photography-philadelphia',
    type: 'website',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://srxvisuals.com/team-photography-philadelphia#webpage',
      url: 'https://srxvisuals.com/team-photography-philadelphia',
      name: 'Team Photography Philadelphia, PA | SRX Visuals',
      isPartOf: { '@id': 'https://srxvisuals.com/#website' },
      about: { '@id': 'https://srxvisuals.com/#business' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srxvisuals.com' },
          { '@type': 'ListItem', position: 2, name: 'Team Photography Philadelphia', item: 'https://srxvisuals.com/team-photography-philadelphia' },
        ],
      },
    },
    {
      '@type': 'Service',
      name: 'Team Photography and Media Day Sessions',
      provider: { '@id': 'https://srxvisuals.com/#business' },
      areaServed: 'Philadelphia, PA',
      serviceType: 'Team Sports Photography',
      description:
        'Full-team coverage including group photos, individual roster portraits, and optional game-day add-ons.',
    },
  ],
};

export default function TeamPhotographyPhiladelphiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHeader
        index="SEO / 04"
        eyebrow="Team photo day"
        title={<>Team photography<br />in Philadelphia.</>}
        lede="Organized team and roster sessions for schools, clubs, and sports programs."
      />

      <section className="sp" style={{ borderBottom: '1px solid var(--color-hairline)' }}>
        <Reveal as="h2" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 1, color: '#fff' }}>
          Built for teams
        </Reveal>
        <Reveal delay={1}>
          <p className="t-body-md" style={{ color: 'var(--color-body-strong)', maxWidth: 900 }}>
            We structure team sessions so they move quickly and stay organized. You get clean group shots, individual athlete portraits, and deliverables that are easy for families and programs to use.
          </p>
        </Reveal>
        <Reveal delay={2} style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/services" className="btn-ghost">View team services</Link>
          <Link href="/contact" className="btn-primary">Book team coverage</Link>
        </Reveal>
      </section>
    </>
  );
}
