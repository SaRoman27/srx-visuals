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
  title: {
    default: 'SRX Visuals | Sports Photographer in Philadelphia, PA',
    template: '%s | SRX Visuals',
  },
  description: 'Trained to compete. Built to capture. SRX Visuals is a Philadelphia sports photography studio run by Sawyer Roman — a track and field athlete covering meets, game days, athlete portraits, and custom sessions.',
  keywords: [
    'sports photographer Philadelphia',
    'track and field photographer Philadelphia',
    'high school sports photography',
    'athlete portrait photographer Philadelphia',
    'sports photography Philadelphia PA',
    'track meet photographer',
    'game day photography Philadelphia',
    'SRX Visuals',
    'Sawyer Roman photographer',
    'Philadelphia sports photography',
    'custom athlete portraits',
    'team photography Philadelphia',
  ],
  authors: [{ name: 'Sawyer Roman', url: 'https://srxvisuals.com/about' }],
  creator: 'Sawyer Roman',
  publisher: 'SRX Visuals',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://srxvisuals.com',
    siteName: 'SRX Visuals',
    title: 'SRX Visuals | Sports Photographer in Philadelphia, PA',
    description: 'Track meets, game days, athlete portraits, and custom sessions. Philadelphia-based sports photographer and track & field athlete.',
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
    description: 'Track meets, game days, athlete portraits, and custom sessions. Philadelphia-based sports photographer.',
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
      '@type': 'LocalBusiness',
      '@id': 'https://srxvisuals.com/#business',
      name: 'SRX Visuals',
      description: 'Sports and creative photography studio based in Philadelphia, PA. Specializing in track and field, game-day coverage, athlete portraits, and custom sessions.',
      url: 'https://srxvisuals.com',
      email: 'sawyer@srxvisuals.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Philadelphia',
        addressRegion: 'PA',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.9526,
        longitude: -75.1652,
      },
      areaServed: {
        '@type': 'City',
        name: 'Philadelphia',
      },
      priceRange: '$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: ['https://srxvisuals.pic-time.com'],
    },
    {
      '@type': 'Person',
      '@id': 'https://srxvisuals.com/#sawyer',
      name: 'Sawyer Roman',
      jobTitle: 'Sports Photographer',
      description: 'Track and field athlete and photographer based in Philadelphia, PA. Founder of SRX Visuals.',
      url: 'https://srxvisuals.com/about',
      email: 'sawyer@srxvisuals.com',
      worksFor: { '@id': 'https://srxvisuals.com/#business' },
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
