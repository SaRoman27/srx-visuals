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
  title: 'SRX Visuals | Sports & Creative Photography',
  description: 'Sports and creative photography out of Philadelphia. Track meets, game days, and custom work.',
  openGraph: {
    title: 'SRX Visuals',
    description: 'Sports & creative photography studio based in Philadelphia.',
    siteName: 'SRX Visuals',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loader />
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
