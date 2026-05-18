import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import ScrollProgress from '../components/ScrollProgress';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://srxvisuals.com'),
  applicationName: 'SRX Visuals',
  title: {
    default: 'SRX Visuals | Sports Photographer in Philadelphia, PA',
    template: '%s | SRX Visuals',
  },
  description: 'Trained to compete. Built to capture. SRX Visuals is a Philadelphia sports photography studio run by Sawyer Roman — a track and field athlete covering track meets, game days, athlete portraits, team photos, and custom sessions across the Philadelphia area.',
  keywords: [
    'sports photographer Philadelphia',
    'sports photographer near me Philadelphia',
    'track and field photographer Philadelphia',
    'track and field photographer near me',
    'high school sports photographer Philadelphia',
    'high school sports photography Pennsylvania',
    'high school track meet photographer',
    'athlete portrait photographer Philadelphia',
    'athlete headshots Philadelphia',
    'sports photography Philadelphia PA',
    'track meet photographer Philadelphia',
    'game day photography Philadelphia',
    'game day photographer Philadelphia PA',
    'sideline photographer Philadelphia',
    'action sports photographer Philadelphia',
    'indoor track photographer Philadelphia',
    'outdoor track photographer Philadelphia',
    'cross country meet photographer',
    'relay race photographer Philadelphia',
    'sprints photography Philadelphia',
    'hurdles photographer Philadelphia',
    'field events photographer Philadelphia',
    'lacrosse photographer Philadelphia',
    'soccer photographer Philadelphia',
    'football photographer Philadelphia',
    'basketball photographer Philadelphia',
    'wrestling photographer Philadelphia',
    'team photography Philadelphia',
    'team photos Philadelphia PA',
    'sports photography Delaware Valley',
    'Philadelphia area sports photographer',
    'Pennsylvania sports photographer',
    'youth sports photographer Philadelphia',
    'private school sports photography PA',
    'sports photography packages Philadelphia',
    'brand photographer for athletes Philadelphia',
    'custom athlete portraits Philadelphia',
    'SRX Visuals',
    'Sawyer Roman photographer',
    'Philadelphia sports photography',
    'srxvisuals',
    'srx visuals photography',
  ],
  authors: [{ name: 'Sawyer Roman', url: 'https://srxvisuals.com/about' }],
  creator: 'Sawyer Roman',
  publisher: 'SRX Visuals',
  category: 'Photography',
  classification: 'Sports Photography',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://srxvisuals.com',
    siteName: 'SRX Visuals',
    title: 'SRX Visuals | Sports Photographer in Philadelphia, PA',
    description: 'Track meets, game days, athlete portraits, and custom sessions. Philadelphia-based sports photographer and track & field athlete. Selects delivered within 24 hours.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&h=630&q=85',
        width: 1200,
        height: 630,
        alt: 'SRX Visuals — Sports Photography Philadelphia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SRX Visuals | Sports Photographer in Philadelphia, PA',
    description: 'Track meets, game days, athlete portraits, and custom sessions. Philadelphia-based sports photographer. Selects within 24 hours.',
    images: ['https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&h=630&q=85'],
  },
  alternates: {
    canonical: 'https://srxvisuals.com',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
    other: [
      { rel: 'icon', url: '/icon-192.png', sizes: '192x192' },
      { rel: 'icon', url: '/icon-512.png', sizes: '512x512' },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://srxvisuals.com/#website',
      url: 'https://srxvisuals.com',
      name: 'SRX Visuals',
      description: 'Philadelphia sports photography studio specializing in track and field, game-day coverage, athlete portraits, and custom sessions.',
      publisher: { '@id': 'https://srxvisuals.com/#business' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://srxvisuals.com/portfolio?q={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://srxvisuals.com/#business',
      name: 'SRX Visuals',
      alternateName: 'SRX Visuals Photography',
      description: 'Sports and creative photography studio based in Philadelphia, PA. Specializing in track and field, game-day coverage, athlete portraits, team photos, and custom sessions. Run by Sawyer Roman, a competitive track and field athlete.',
      slogan: 'Trained to compete. Built to capture.',
      url: 'https://srxvisuals.com',
      email: 'sawyer@srxvisuals.com',
      foundingDate: '2025',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Venmo, PayPal',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Philadelphia',
        addressRegion: 'PA',
        addressCountry: 'US',
        postalCode: '19103',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.9526,
        longitude: -75.1652,
      },
      areaServed: [
        { '@type': 'City', name: 'Philadelphia', sameAs: 'https://en.wikipedia.org/wiki/Philadelphia' },
        { '@type': 'State', name: 'Pennsylvania' },
        { '@type': 'AdministrativeArea', name: 'Delaware Valley' },
      ],
      priceRange: '$–$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Sports Photography Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Track & Field Meet Photography', description: 'Full meet coverage — field events, sprints, distance, relays. Selects delivered within 24 hours.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Game Day Coverage', description: 'Sideline and editorial coverage for soccer, lacrosse, basketball, football, and more.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Athlete Portraits', description: 'Individual athlete portraits and headshots for recruiting, social media, and branding.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Team Photography', description: 'Full team sessions including group shots and individual portraits.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Sessions', description: 'Brand work, creative shoots, and any project that needs a camera.' } },
        ],
      },
      knowsAbout: [
        'Track and field photography',
        'Sports action photography',
        'Athlete portraiture',
        'Game day coverage',
        'High school athletics',
        'Philadelphia sports',
      ],
      sameAs: [
        'https://srxvisuals.pic-time.com',
        'https://media.srxvisuals.com',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://srxvisuals.com/#sawyer',
      name: 'Sawyer Roman',
      jobTitle: 'Sports Photographer',
      description: 'Competitive track and field athlete and sports photographer based in Philadelphia, PA. Founder and sole photographer at SRX Visuals. Has been photographing athletics events since 2023.',
      url: 'https://srxvisuals.com/about',
      email: 'sawyer@srxvisuals.com',
      worksFor: { '@id': 'https://srxvisuals.com/#business' },
      knowsAbout: ['Track and field', 'Sports photography', 'Athlete portraiture', 'Philadelphia sports'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Philadelphia',
        addressRegion: 'PA',
        addressCountry: 'US',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <meta name="geo.region" content="US-PA" />
        <meta name="geo.placename" content="Philadelphia, Pennsylvania" />
        <meta name="geo.position" content="39.9526;-75.1652" />
        <meta name="ICBM" content="39.9526, -75.1652" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
