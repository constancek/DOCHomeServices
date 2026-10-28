import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import NeighborhoodLinks from '@/components/NeighborhoodLinks';
import PageHero from '@/components/PageHero';
import { ServicePhotoBand, ServiceReviews, ServiceSections } from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { locations } from '@/content/locations';
import { patioLightingCopy } from '@/content/location-copy/patio-lighting';
import { site } from '@/content/site';
import { withSocial } from '@/lib/seo';

export const metadata: Metadata = withSocial({
  title: 'Patio Lighting Installation',
  description: `Patio lighting installation across ${site.serviceArea} from ${site.name} — custom, outdoor-rated lighting for decks and patios installed by licensed electricians for safety and atmosphere.`,
  alternates: { canonical: '/services/patio-lighting' },
});

const benefits = [
  'Improves visibility around seating areas, steps, and walkways',
  'Creates a warm environment for relaxing or entertaining',
  'Enhances the look of patios and nearby landscaping',
  'Helps reduce dark areas around your property',
  'Makes outdoor spaces more usable in the evening',
];

const process = [
  'Evaluating the patio layout and lighting goals',
  'Recommending fixture types and placement',
  'Designing a balanced lighting plan',
  'Installing outdoor-rated light fixtures',
  'Connecting the lighting system safely to electrical power',
  'Testing brightness and system performance',
];

const options = [
  'Hanging and string patio lights',
  'Recessed deck lighting',
  'Step and pathway lighting',
  'Under-rail lighting',
  'Accent lights for nearby features',
];



const faqs = [
  { q: 'How long does the patio lighting installation take?', a: 'Most patio lighting installations are completed in a single day, depending on the size of the space and the number of fixtures.' },
  { q: 'Is the installation process disruptive?', a: 'Mostly not, and where it will be we say so first. Running a new circuit out to the patio is the part that can mean lifting a little sod or getting into a soffit, and on a covered patio we may need ceiling access. Hanging fixtures on an existing outdoor circuit is a quiet afternoon by comparison.' },
  { q: 'Why should I hire a patio lighting professional?', a: 'Honestly, for plug-in string lights on an existing outdoor receptacle you do not need one — hang them properly, use the receptacle’s GFCI, and enjoy the evening. Call us when there is no outdoor receptacle to use, when you want fixtures wired in and switched from inside, or when what is out there now is an indoor-rated fixture that has been weathering for years. Anything exposed to rain needs a wet-location rating, not just an outdoor look.' },
  { q: 'Do you install hanging patio lights?', a: 'Yes. We install string lights, hanging fixtures, and other decorative patio lighting designed for outdoor use.' },
  { q: 'How do you ensure the lighting system connects to electrical power safely?', a: 'Everything outdoors runs on GFCI protection, which is what cuts power if moisture starts a leakage path. Fixtures are rated for where they actually sit — wet-location for anything exposed to rain, damp-location under a solid roof — and connections are made in weatherproof boxes rather than taped. String lights get proper strain relief so the weight hangs on a cable, not on the wiring.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Patio Lighting Installation',
  description: 'Custom patio and deck lighting installation, including string, recessed, step, and under-rail lighting.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Electrical', item: `${site.url}/services/electrical` },
    { '@type': 'ListItem', position: 4, name: 'Lighting', item: `${site.url}/services/lighting` },
    { '@type': 'ListItem', position: 5, name: 'Outdoor Lighting', item: `${site.url}/services/outdoor-lighting` },
    { '@type': 'ListItem', position: 6, name: 'Patio Lighting', item: `${site.url}/services/patio-lighting` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function PatioLightingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Lighting"
        title={`Patio Lighting Installation in ${site.serviceArea}`}
        description="Custom, outdoor-rated patio and deck lighting installed by licensed electricians — improving visibility, comfort, and atmosphere for your outdoor space after dark."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Lighting', href: '/services/lighting' },
          { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
          { label: 'Patio Lighting' },
        ]}
      />

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar mascot couponTitle="Any Electrical Service">
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/patio-hero.webp)' }}
            role="img"
            aria-label="Patio with string lights in the evening"
          />
          <h2 className="section-title text-brand-700">
            Professional Patio Lighting Installation
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A professional patio light installation helps you enjoy your outdoor space after sunset. The
            right lighting improves visibility, adds comfort, and creates a welcoming atmosphere for
            family and guests.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides expert patio lighting services across {site.serviceArea}. Our
            electricians design and install lighting systems that are safe, durable, and built for
            outdoor conditions.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Whether you want simple patio lights or a custom patio lighting layout, we install lighting
            that enhances both the look and function of your{' '}
            <Link href="/services/outdoor-lighting" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              outdoor space
            </Link>
            .
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Benefits (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/patio-benefits.webp)' }}
            role="img"
            aria-label="Backyard patio with warm evening lighting"
          />
          <div>
            <h2 className="section-title">
              Benefits of Custom Patio Lighting
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Adding patio lighting improves both safety and usability around your home.
            </p>
            <ul className="mt-4 grid gap-1.5">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2 text-base font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Many homeowners pair patio lighting with{' '}
              <Link href="/services/landscape-lighting" className="font-semibold text-white underline hover:text-white/80">
                landscape lighting
              </Link>{' '}
              to create a balanced outdoor lighting system that highlights both the patio and surrounding
              yard.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Patio Lighting Service Pros
            </p>
          </div>
        </div>
      </section>

      {/* Band: Installation process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="section-title">
              Our Patio Lighting Installation Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Every patio light installation begins with a review of your outdoor space. We discuss how
              you use the area and recommend lighting that fits your layout. Our process includes:
            </p>
            <ul className="mt-4 grid gap-1.5">
              {process.map((p) => (
                <li key={p} className="flex gap-2 text-base font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Our electricians ensure the system is installed safely and meets electrical code
              requirements.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.webp)' }}
            role="img"
            aria-label="Electrician planning a patio lighting layout"
          />
        </div>
      </section>

      <ServiceReviews service="patio-lighting" />

      {/* Orange call banner, right under the reviews and awards */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold leading-tight sm:text-2xl">
            Enjoy your patio after sunset.
          </h2>
          <a
            href={site.primaryPhone.href}
            className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600"
          >
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Custom Patio Lighting Solutions</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Every patio is different, so lighting should match how you use the space. Some homeowners
            prefer soft accent lighting. Others want brighter patio lights for cooking, dining, or
            entertaining.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            We design custom patio lighting that highlights seating areas, outdoor kitchens, and entry
            points while keeping the space comfortable and easy to navigate. Common lighting options
            include:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {options.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-[17px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            These fixtures work together to create a balanced outdoor lighting system.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Patio Lighting Installation</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Outdoor lighting has to survive rain and frost, so every circuit we add runs on GFCI protection and outdoor-rated wiring. If you only want plug-in string lights on an existing receptacle, you do not need us.
          </p>

        </div>
      </section>

      <ServicePhotoBand />

      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Patio Lighting FAQs</h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({
                title: f.q,
                body: <p className="text-[15px] leading-relaxed text-ink/75">{f.a}</p>,
              }))}
              defaultOpen={0}
            />
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Schedule Patio Lighting Installation Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              Ready to light up your patio? {site.name} designs and installs patio lighting across{' '}
              {site.serviceArea}. Call now or request an estimate.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.primaryPhone.href} className="btn-pink text-base">
                <Icon name="phone" className="h-5 w-5" />
                Call {site.primaryPhone.number}
              </a>
              <Link href="/request-estimate/" className="btn-outline border-white text-white hover:bg-white/10">
                Request an Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceSections service="patio-lighting">
        {/* Patio lighting by neighborhood — links DOWN to location pages */}
        <section className="py-16">
          <div className="container-page max-w-4xl">
            <h2 className="section-title text-brand-700">Patio lighting by neighborhood</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
              We design and install patio and deck lighting across {site.serviceArea} —{' '}
              {locations.filter((l) => patioLightingCopy[l.slug]).length} neighborhoods and counting.
              Find yours below for local detail on the decks and patios in your area.
            </p>
            <NeighborhoodLinks copy={patioLightingCopy} basePath="/services/patio-lighting" linkPrefix="Patio lighting" />
          </div>
        </section>
      </ServiceSections>
    </>
  );
}
