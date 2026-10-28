import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import NeighborhoodLinks from '@/components/NeighborhoodLinks';
import PageHero from '@/components/PageHero';
import { ServicePhotoBand, ServiceReviews, ServiceSections } from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { locations } from '@/content/locations';
import { miniSplitRepairCopy } from '@/content/location-copy/mini-split-repair';
import { withSocial } from '@/lib/seo';

export const metadata: Metadata = withSocial({
  title: 'Mini-Split Repair',
  description: `Ductless mini-split repair across ${site.serviceArea} from ${site.name} — weak cooling, leaks, ice, and error codes fixed on all major brands. Emergency service every day, upfront pricing.`,
  alternates: { canonical: '/services/mini-split-repair' },
});

const signs = [
  'Uneven cooling or heating between rooms',
  'Weak airflow from the indoor unit',
  'Unusual noises during operation',
  'Water leaking near the indoor unit',
  'Odors coming from the system',
  'The system shutting down or cycling unexpectedly',
];

const commonRepairs = [
  'Refrigerant leaks or low refrigerant levels',
  'Electrical or control board problems',
  'Sensor or thermostat malfunctions',
  'Drainage and moisture issues',
  'Fan motor or airflow problems',
  'Error codes and unexpected system shutdowns',
];

const benefits = [
  'Restore consistent cooling and heating',
  'Improve energy efficiency',
  'Reduce strain on system components',
  'Prevent small issues from turning into major repairs',
  'Support a longer system lifespan',
];

const prevent = [
  'Schedule regular professional maintenance',
  'Keep indoor units clean and unobstructed',
  'Clean or replace filters as recommended',
  'Address performance changes early',
];


const faqs = [
  { q: 'Why is my mini-split not cooling?', a: 'The usual causes are low refrigerant, a dirty filter choking airflow, a frozen coil, or a faulty sensor or control board. We diagnose the exact cause and fix it rather than guessing.' },
  { q: 'Why is my mini-split leaking water?', a: 'A leak from the indoor head is most often a clogged condensate drain or a frozen coil that is thawing. We clear the drain, address the underlying cause, and confirm it drains properly.' },
  { q: 'Can you repair any brand of mini-split?', a: 'Yes — we service single- and multi-zone ductless systems from all major brands.' },
  { q: 'Do mini-splits need regular maintenance?', a: 'They do. Cleaning the filters regularly and having the system checked once a year keeps it efficient and prevents many of the repairs we get called for.' },
  { q: 'Should I repair or replace my mini-split?', a: 'If the system is relatively new and the issue is isolated, a repair makes sense. If it is aging or failing repeatedly, a new system is often the better value — see our mini-split installation page, and we will advise honestly.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mini-Split Repair',
  description: 'Ductless mini-split repair for weak cooling, leaks, ice, and error codes.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Air Conditioning', item: `${site.url}/services/air-conditioning` },
    { '@type': 'ListItem', position: 4, name: 'Mini-Splits', item: `${site.url}/services/mini-splits` },
    { '@type': 'ListItem', position: 5, name: 'Mini-Split Repair', item: `${site.url}/services/mini-split-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function MiniSplitRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Conditioning · Mini-Splits"
        title={`Ductless Mini-Split Repair in ${site.serviceArea}`}
        description="Weak cooling, leaks, odors, or error codes? Our licensed technicians diagnose and repair ductless mini-splits fast — all major brands, with emergency service weekends included."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'Mini-Splits', href: '/services/mini-splits' },
          { label: 'Mini-Split Repair' },
        ]}
      />

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar mascot couponTitle="Furnace Tune-Up">
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/minisplit-repair-hero.webp)' }}
            role="img"
            aria-label="Technician repairing a ductless mini-split"
          />
          <h2 className="section-title text-brand-700">
            Ductless Mini-Split Repair
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Ductless mini-splits provide reliable, energy-efficient cooling and heating — but when
            something goes wrong, comfort can change quickly. Rooms may feel uneven, airflow may
            weaken, or the system may stop responding altogether.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides professional ductless mini-split repair for homeowners across{' '}
            {site.serviceArea}, helping restore comfort when systems fail to perform as expected.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Mini-splits use advanced components to deliver zoned comfort. Because they operate
            differently from traditional HVAC systems, problems often require specialized diagnosis —
            our technicians understand how these systems work and resolve issues without unnecessary
            delays.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When your mini-split is not operating properly, prompt repair helps protect comfort,
            efficiency, and overall system performance.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs your mini-split needs repair (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/mini-split-repair.webp)' }}
            role="img"
            aria-label="Ductless mini-split being repaired"
          />
          <div>
            <h2 className="section-title">
              Signs Your Mini-Split Needs Repair
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Mini-split issues often start small — subtle performance changes can signal a larger
              problem if left unaddressed. Common signs your ductless system may need repair include:
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex gap-3 text-base font-medium leading-snug">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Addressing these symptoms early helps reduce strain on the system and supports more
              reliable comfort throughout the home.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Mini-split repair process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="section-title">
              Mini-Split Repair Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Every ductless mini-split repair begins with a careful system evaluation. Our technician
              inspects both the indoor and outdoor units to understand how the system is operating and
              where performance has changed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              We examine airflow, electrical connections, and refrigerant levels to identify the source
              of the issue. Once we find the problem, we explain what is happening and review the
              recommended repair in clear, simple terms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              After approval, we complete repairs using proper tools and manufacturer-approved parts,
              then test the system to confirm steady cooling and heating, safe operation, and
              dependable performance before service is complete.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.webp)' }}
            role="img"
            aria-label="Technician explaining a mini-split repair to a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Common Mini-Split Repairs We Handle</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Our technicians regularly repair a wide range of ductless mini-split issues, including:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {commonRepairs.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-[17px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Timely repair helps keep your mini-split system running smoothly and efficiently.
          </p>

        </div>
      </section>

      <ServiceReviews service="mini-split-repair" />

      {/* Orange call banner, right under the reviews and awards */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold leading-tight sm:text-2xl">
            Mini-split not working in {site.serviceArea}? Call for service
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

      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Emergency */}
          <h2 className="mt-12 section-title text-brand-700">Emergency Mini-Split Repair, 7 days a week</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Mini-split problems do not always happen during business hours, and a loss of cooling or
            heating can quickly affect comfort and safety inside the home. {site.name} offers 7 days a week
            emergency mini-split repair for urgent situations — focused on restoring comfort as quickly
            as possible while helping prevent further damage to the system.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h3 className="font-display text-xl font-extrabold uppercase text-white sm:text-2xl">
              No cooling or heating right now? We answer 7 days a week.
            </h3>
            <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0">
              <Icon name="phone" className="h-4 w-4" />
              Call {site.primaryPhone.number}
            </a>
          </div>

          {/* Benefits */}
          <h2 className="mt-12 section-title text-brand-700">Benefits of Prompt Mini-Split Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Even minor mini-split issues can impact comfort and efficiency if left unresolved. Prompt
            repair protects system performance and prevents larger problems. Professional repair can
            help:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[17px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {b}
              </li>
            ))}
          </ul>

          {/* Efficiency */}
          <h2 className="mt-12 section-title text-brand-700">How Repair Supports Energy Efficiency</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            When a ductless mini-split is not working correctly, it often uses more energy than
            necessary. Restricted airflow, electrical problems, or refrigerant loss can force the
            system to work harder to maintain comfort.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Professional repair corrects these issues so the system operates as designed — reducing
            component strain, improving efficiency, and supporting more stable energy use. Addressing
            repairs early also helps prevent unnecessary energy waste and rising utility costs.
          </p>

          {/* Preventing future breakdowns */}
          <h2 className="mt-12 section-title text-brand-700">Preventing Future Mini-Split Breakdowns</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            While repairs address current issues, routine care reduces the risk of future breakdowns.
            A few simple steps support long-term performance:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {prevent.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[17px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Consistent care supports dependable operation and year-round comfort.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Mini-Split Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            A mini-split repair is only as good as the diagnosis behind it. Our trained
            technicians find the actual fault first, then repair it safely and explain what
            failed, so you pay only for the fix your system needs.
          </p>

        </div>
      </section>

      <ServicePhotoBand />

      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Mini-Split Repair FAQs</h2>
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
            <h2 className="text-2xl font-extrabold sm:text-3xl">Schedule Your Mini-Split Repair Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              If your ductless mini-split is not cooling or heating properly, professional repair can
              help. Call now or request an estimate.
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

      <ServiceSections service="mini-split-repair">
        {/* Mini-split repair by neighborhood — links DOWN to location pages */}
        <section className="py-16">
          <div className="container-page max-w-4xl">
            <h2 className="section-title text-brand-700">Mini-split repair by neighborhood</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
              We repair ductless mini-splits across {site.serviceArea} —{' '}
              {locations.filter((l) => miniSplitRepairCopy[l.slug]).length} neighborhoods and counting.
              Find yours below for local detail on the homes and spaces in your area.
            </p>
            <NeighborhoodLinks copy={miniSplitRepairCopy} basePath="/services/mini-split-repair" linkPrefix="Mini-split repair" />
          </div>
        </section>
      </ServiceSections>
    </>
  );
}
