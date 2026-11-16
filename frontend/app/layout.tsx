import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Montserrat, Merriweather } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/content/site';

// Google Analytics (gtag.js) — loaded on every page via the root layout.
const GA_ID = 'G-8NY18D4938';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  // Logo wordmark and a few decorative headings, all at 900.
  weight: ['900'],
  variable: '--font-logo',
  display: 'swap',
  // Not preloaded: on slow phones it competed with the hero photo for bandwidth.
  // It still loads with the CSS; the logo shows in Georgia until it arrives.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: `${site.name} service van` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ['/og/default.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#199fbc',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${merriweather.variable}`}>
      <body>
        {/* Google Analytics: gtag.js is fetched on the visitor's first scroll,
            tap, click, or key press, so it never competes with page load.
            Visits with no interaction at all are not recorded. */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`(function(){
var events=['scroll','pointerdown','keydown','touchstart'];
var loaded=false;
function load(){
  if(loaded)return;loaded=true;
  events.forEach(function(e){window.removeEventListener(e,load);});
  window.dataLayer=window.dataLayer||[];
  window.gtag=function(){dataLayer.push(arguments);};
  gtag('js',new Date());
  gtag('config','${GA_ID}');
  var s=document.createElement('script');
  s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
  document.head.appendChild(s);
}
events.forEach(function(e){window.addEventListener(e,load,{passive:true});});
})();`}
        </Script>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
