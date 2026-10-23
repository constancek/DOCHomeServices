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
import { acRepairCopy } from '@/content/location-copy/ac-repair';
import { withSocial } from '@/lib/seo';

export const metadata: Metadata = withSocial({
  title: 'AC Repair in Cincinnati & NKY',
  description:
    'Same-day AC repair in Cincinnati and Northern Kentucky for central air, heat pumps and mini-splits. Upfront pricing and no overtime fees.',
  alternates: { canonical: '/services/ac-repair' },
});

// Four signs (page-format.md): the ones a homeowner can see or feel.
const signs = [
  'Warm air coming from vents',
  'Weak or uneven airflow in the home',
  'Ice on the AC unit or refrigerant lines',
  'Water or refrigerant leaking near the equipment',
];

const problems = [
  'Refrigerant leaks or low refrigerant levels',
  'Electrical or thermostat problems',
  'Frozen evaporator coils',
  'Blower motor and fan failures',
  'Restricted airflow caused by dirty air filters',
  'Drainage and moisture issues',
];

const effIssues = [
  'Low refrigerant levels that reduce cooling efficiency',
  'Restricted airflow from dirty filters or blocked components',
  'Worn or failing parts that force the system to run longer',
  'Electrical problems that prevent normal operation',
];



const faqs = [
  { q: 'Do you work with all AC brands?', a: 'Yes. We repair central air conditioners, heat pumps and ductless mini-splits from all major brands.' },
  { q: 'What causes an AC unit to stop cooling?', a: 'The usual causes are low refrigerant, a frozen coil, a failed compressor or capacitor, a thermostat problem, or a dirty filter choking airflow. We diagnose the exact cause rather than guessing.' },
  { q: 'How can I tell if my AC has a refrigerant leak?', a: 'Weak cooling, ice on the refrigerant lines, a hissing sound, or rising energy bills can all point to a leak. Refrigerant is regulated, so a licensed technician should confirm and repair it.' },
  { q: 'Why is my AC making strange sounds?', a: 'Buzzing or clicking often means an electrical issue; grinding or squealing points to a motor or bearing; rattling usually means a loose part or debris. Any new noise is worth a look before it becomes a bigger repair.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AC Repair',
  description: 'Air conditioning repair any day of the week for central air, heat pumps, and mini-splits.',
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
    { '@type': 'ListItem', position: 4, name: 'AC Repair', item: `${site.url}/services/ac-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ACRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Air Conditioning"
        title={`AC Repair in ${site.serviceArea}`}
        description="Warm air, weak airflow or a system that quit? Our licensed technicians find the cause and get central air, heat pumps and mini-splits cooling again, every day."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Air Conditioning', href: '/services/air-conditioning' },
          { label: 'AC Repair' },
        ]}
      />

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar mascot couponTitle="Same-Day AC Repair">
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/ac-repair-hero.webp)' }}
            role="img"
            aria-label="Technician repairing an air conditioner"
          />
          {/* One-format top section: local pros + emergency, one paragraph each */}
          <h2 className="section-title text-brand-700">
            Local AC Repair Pros Who Know {site.serviceArea}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            AC repair across {site.serviceArea} usually comes down to a handful of causes: a failed
            capacitor, low refrigerant, a frozen coil, a clogged drain line or a dirty filter. We repair
            central air, heat pumps and ductless mini-splits from all major brands, and every visit
            checks airflow, electrical connections and refrigerant charge, not just the part that
            failed. Our licensed technicians find the actual cause before replacing anything, so you pay
            for one repair, not three.
          </p>

          <h2 className="mt-10 section-title text-brand-700">
            Emergency AC Repair in {site.serviceArea}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A dead AC is urgent when someone in the house is at risk from the heat: an older relative,
            a baby or a heat advisory outside. The National Weather Service counts about 21 days a year
            at 90 degrees or higher in Cincinnati. Technicians are out every day, weekends included,
            and most calls are handled the same day.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs your AC needs a repair (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/ac-repair.webp)' }}
            role="img"
            aria-label="Air conditioner being repaired"
          />
          <div>
            <h2 className="section-title">
              Signs Your AC Needs a Repair
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              These are the signs that usually mean a repair is due:
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
              If the only symptom is weak airflow, change the filter first. That fixes it more often
              than you’d think, and you won’t need us.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Our AC repair process (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="section-title">
              Our AC Repair Process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Every repair follows the same four steps. We inspect the system and find the cause. We
              explain it and give you the price before any work starts. Once you approve, we repair it
              with the right parts, then test it and stay until it’s cooling properly.
            </p>

          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.webp)' }}
            role="img"
            aria-label="Technician explaining an AC repair to a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* Common problems */}
          <h2 className="section-title text-brand-700">Common AC Problems We Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The repairs we make most often:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[17px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {p}
              </li>
            ))}
          </ul>

        </div>
      </section>

      <ServiceReviews service="ac-repair" />

      {/* Orange call banner, right under the reviews and awards */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold leading-tight sm:text-2xl">
            AC not cooling in {site.serviceArea}? Call for immediate service
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
          {/* Repair or replace */}
          <h2 className="mt-12 section-title text-brand-700">Repair or Replace Your AC System?</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Repair first when the system is otherwise sound. Most failures, like a capacitor, contactor
            or fan motor, are one-part fixes. Replacement makes sense when the same system keeps
            failing, needs a compressor, or no longer cools the house. We’ll tell you which one you’re
            looking at and why.
          </p>


          {/* Efficiency */}
          <h2 className="mt-12 section-title text-brand-700">How AC Repair Lowers Energy Bills</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            A struggling AC runs longer to do the same job. These are the faults that push bills up:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {effIssues.map((e) => (
              <li key={e} className="flex items-start gap-2.5 text-[17px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {e}
              </li>
            ))}
          </ul>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for AC Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We find the actual cause before we replace anything, because a wrong diagnosis is how a
            simple AC repair turns into a second visit. You approve the price first, and most calls
            are handled the same day.
          </p>

        </div>
      </section>

      <ServicePhotoBand />

      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">AC Repair FAQs</h2>
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
            <h2 className="text-2xl font-extrabold sm:text-3xl">Schedule Your AC Repair Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              If your air conditioner has stopped cooling or is struggling, call now or request an estimate.
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

      <ServiceSections service="ac-repair">
        {/* AC repair by neighborhood — links DOWN to location pages (internal-link mesh) */}
        <section className="py-16">
          <div className="container-page max-w-4xl">
            <h2 className="section-title text-brand-700">AC repair by neighborhood</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
              We repair air conditioning across {site.serviceArea}, in{' '}
              {locations.filter((l) => acRepairCopy[l.slug]).length} neighborhoods and counting. For local
              detail on response times and the cooling issues common to homes in your area, find yours below.
            </p>
            <NeighborhoodLinks copy={acRepairCopy} basePath="/services/ac-repair" linkPrefix="AC repair" />
          </div>
        </section>
      </ServiceSections>
    </>
  );
}
