import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';

export const metadata = {
  title: 'Athlete Portrait Photographer Philadelphia | SRX Visuals',
  description:
    'Athlete portraits and headshots in Philadelphia for recruiting, NIL, social media, and team profiles. Studio and on-location sessions available.',
  keywords: [
    'athlete portrait photographer philadelphia',
    'athlete headshots philadelphia',
    'sports headshots philadelphia',
    'recruiting photos athletes philadelphia',
    'athlete branding photography philadelphia',
  ],
  alternates: { canonical: 'https://srxvisuals.com/athlete-portraits-philadelphia' },
  openGraph: {
    title: 'Athlete Portrait Photographer Philadelphia | SRX Visuals',
    description:
      'Professional athlete portraits and headshots in Philadelphia. Built for recruiting profiles, personal branding, and team media.',
    url: 'https://srxvisuals.com/athlete-portraits-philadelphia',
    type: 'website',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://srxvisuals.com/athlete-portraits-philadelphia#webpage',
      url: 'https://srxvisuals.com/athlete-portraits-philadelphia',
      name: 'Athlete Portrait Photographer Philadelphia | SRX Visuals',
      isPartOf: { '@id': 'https://srxvisuals.com/#website' },
      about: { '@id': 'https://srxvisuals.com/#business' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://srxvisuals.com' },
          { '@type': 'ListItem', position: 2, name: 'Athlete Portraits Philadelphia', item: 'https://srxvisuals.com/athlete-portraits-philadelphia' },
        ],
      },
    },
    {
      '@type': 'Service',
      name: 'Athlete Portraits and Headshots',
      provider: { '@id': 'https://srxvisuals.com/#business' },
      areaServed: 'Philadelphia, PA',
      serviceType: 'Athlete Portrait Photography',
      description:
        'Portrait sessions for athletes, including action and posed looks for recruiting, social media, and personal branding.',
    },
  ],
};

export default function AthletePortraitsPhiladelphiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHeader
        index="SEO / 03"
        eyebrow="Athlete portraits"
        title={<>Athlete portraits<br />in Philadelphia.</>}
        lede="Portrait and headshot sessions for athletes who need standout recruiting and branding images."
      />

      <section className="sp" style={{ borderBottom: '1px solid var(--color-hairline)' }}>
        <Reveal as="h2" style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 1, color: '#fff' }}>
          Recruiting and branding
        </Reveal>
        <Reveal delay={1}>
          <p className="t-body-md" style={{ color: 'var(--color-body-strong)', maxWidth: 900 }}>
            We create portrait sets for recruiting profiles, school announcements, social media, and personal brand campaigns. Sessions can be built around your sport and location.
          </p>
        </Reveal>
        <Reveal delay={2} style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/services" className="btn-ghost">See portrait options</Link>
          <Link href="/contact" className="btn-primary">Book portraits</Link>
        </Reveal>
      </section>
    </>
  );
}
