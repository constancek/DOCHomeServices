import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import NeighborhoodLinks from '@/components/NeighborhoodLinks';
import { emergencyPlumbingCopy } from '@/content/location-copy/emergency-plumbing';
import PageHero from '@/components/PageHero';
import { ServicePhotoBand, ServiceReviews, ServiceSections } from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Link from 'next/link';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { locations } from '@/content/locations';
import { withSocial } from '@/lib/seo';

export const metadata: Metadata = withSocial({
  title: 'Emergency Plumber in Cincinnati & NKY',
  description:
    'Emergency plumbing in Cincinnati and Northern Kentucky, 7 days a week: burst pipes, sewer backups, failed water heaters. No overtime fees.',
  alternates: { canonical: '/services/emergency-plumbing' },
});

const fixFast = [
  'Burst pipes and water line breaks',
  'Leaking or overflowing water heaters',
  'Sewer line backups and clogged drains',
  'Sudden toilet or faucet failures',
  'Emergency installations and general repairs',
];

const commonSituations = [
  'Burst or leaking pipes that can quickly flood your home',
  'Sewer backups causing wastewater to back up into sinks, tubs, or floor drains',
  'Overflowing toilets that will not stop running or flushing',
  'No water or a sudden loss of water pressure throughout the home',
  'Water heater leaks or a complete loss of hot water',
  'Major drain clogs causing repeated backups in multiple fixtures',
  'Gas line issues related to plumbing appliances',
];


const faqs = [
  { q: 'What is a plumbing emergency?', a: 'Any situation that threatens your home, health, or safety due to water or sewer issues — burst pipes, overflowing water heaters, sewer backups, and major leaks.' },
  { q: `How soon can your emergency plumbers arrive in ${site.serviceArea}?`, a: 'We prioritize speed. Our emergency plumbers aim to arrive the same day, often within hours of your call, to address urgent issues quickly.' },
  { q: 'What should I do if a pipe bursts in my home?', a: 'Shut off the main water supply immediately to prevent flooding, avoid using affected fixtures, and call our team for emergency repair. Our licensed plumbers handle the rest.' },
  { q: 'Can you fix clogged drains quickly?', a: 'Yes. We provide fast drain clearing and emergency service, getting your plumbing functional again without delay — and a camera inspection if clogs keep returning.' },
  { q: 'What services do you offer for water heaters?', a: 'We provide repair, replacement, and installation for all types of water heaters, including tankless and traditional models, and can handle urgent water heater issues the same day.' },
  { q: 'Do you charge extra for evenings or weekends?', a: 'No. Our flat-rate pricing is the same any day of the week, with no overtime surcharges.' },
];

const relatedCards = [
  { slug: 'leak-repair', title: 'Leak Repair' },
  { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement' },
  { slug: 'water-heater-repair', title: 'Water Heater Repair' },
  { slug: 'drain-cleaning', title: 'Drain Cleaning' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Emergency Plumbing',
  description: 'Emergency plumbing repair, any day of the week, for burst pipes, sewer backups, and water heater failures.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Plumbing', item: `${site.url}/services/plumbing` },
    { '@type': 'ListItem', position: 4, name: 'Emergency Plumbing', item: `${site.url}/services/emergency-plumbing` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function EmergencyPlumbingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Emergency Plumbing in ${site.serviceArea}, Open Every Day`}
        description="Burst pipe? No water? Sewer backup? Our licensed plumbers are on call 7 days a week and reach most homes the same day."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Emergency Plumbing' },
        ]}
      />

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar mascot>
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/emergency-hero.webp)' }}
            role="img"
            aria-label="Licensed plumber responding to a plumbing emergency"
          />
          <h2 className="section-title text-brand-700">
            Plumbing Emergencies We Can Fix Fast
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When a plumbing emergency strikes, every minute counts — and problems rarely happen on a
            convenient schedule. That is why {site.name} takes emergency calls every day, weekends
            included, across {site.serviceArea}. From a minor leak to a major water line failure, our licensed
            plumbers handle each situation with speed and precision. Common emergencies we fix
            include:
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {fixFast.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-base font-semibold text-pink-600">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A burst pipe or sewer backup can cause thousands of dollars in damage in just a few
            hours, so getting help quickly is key to minimizing loss. Even small delays can lead to
            mounting water damage and mold — our team arrives quickly, assesses the problem, and
            completes the repair efficiently, protecting your home and delivering long-lasting
            results.
          </p>

          {/* Related services — image cards */}
          <h2 className="mt-10 section-title text-brand-700">Related Plumbing Services</h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {relatedCards.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-xl">
                  <span
                    className="absolute inset-0 bg-brand-200 bg-cover bg-center transition duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(/services/${s.slug}.webp)` }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-pink-500/45 to-transparent transition group-hover:from-pink-600" />
                  <span className="absolute inset-0 grid place-items-center p-3 text-center">
                    <span className="font-display text-[13px] font-extrabold uppercase leading-tight tracking-wide text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] sm:text-sm">
                      {s.title}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </MainWithSidebar>
      </section>

      {/* Band: Most Common Situations (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/emergency-situations.webp)' }}
            role="img"
            aria-label="Burst pipe and water damage"
          />
          <div>
            <h2 className="section-title">
              Most Common Emergency Plumbing Situations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Plumbing emergencies can happen without warning and often need immediate attention to
              prevent water damage or costly repairs. Some of the most common situations include:
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {commonSituations.map((c) => (
                <li key={c} className="flex gap-3 text-base font-medium leading-snug">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Local & trusted banner */}
      <section className="py-12">
        <div className="container-page">
          <div className="flex flex-col items-center gap-4 rounded-2xl bg-blue-section p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <h2 className="font-display text-xl font-extrabold text-white sm:text-2xl">
              Your Local &amp; Trusted Emergency Plumbing Service Pros
            </h2>
            <a href={site.primaryPhone.href} className="btn-pink flex-shrink-0">
              Get Peace of Mind Today!
            </a>
          </div>
        </div>
      </section>

      {/* Band: What to Expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="section-title">
              What to Expect From Your Emergency Plumbing Service
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              When you call for emergency plumbing service, the priority is to respond quickly and
              limit damage to your home. A licensed plumber arrives promptly, assesses the situation,
              and takes immediate steps to stop active leaks, backups, or flooding.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              After identifying the cause, the plumber explains the recommended repair and gives you
              clear next steps before any work begins. We restore safety and basic function first,
              then complete the permanent repair as efficiently as possible to get your plumbing back
              to normal.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/emergency-expect.webp)' }}
            role="img"
            aria-label="Plumber reviewing the repair with a homeowner"
          />
        </div>
      </section>

      <ServiceReviews service="emergency-plumbing" />

      {/* Orange call banner, right under the reviews and awards */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold sm:text-2xl">
            Have a Plumbing Emergency? Call for Immediate Service
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

      {/* Prose + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <div className="space-y-8">
            <div>
              <h2 className="section-title text-brand-700">
                Emergency Plumbing Services in {site.serviceArea}{' '}&amp; Beyond
              </h2>
              <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
                Plumbing emergencies call for fast action, and our team is always ready to help.
                Whether you are facing a water leak, a blocked pipe, or a sewer-line issue, we deliver
                professional solutions and focus on restoring your home as quickly as possible. A
                serious plumbing problem is stressful, so we are here to take the weight off your
                shoulders. Our people are what make the difference — we approach every emergency with
                genuine care and a focus on your well-being.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">Burst Pipes and Our Process</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
                A burst pipe can release hundreds of gallons of water a day, so a fast response
                prevents structural damage, electrical hazards, and mold growth. We respond
                immediately, shut off the water supply to stop the damage, and make the repair
                efficiently. We inspect the affected area, repair or replace the damaged piping, and
                confirm your system is fully operational before we leave — plus tips to help you
                prevent future bursts.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">Plumber Open Every Day in {site.serviceArea}</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
                Plumbing disasters do not wait for business hours, which is why we are available
                7 days a week. As the plumber across {site.serviceArea} who picks up on Sundays too, we
                respond promptly to minimize damage and restore comfort to your home. We arrive with
                the tools, expertise, and dedication to fix the issue quickly — and the trust of
                homeowners across the area backs up our work.
              </p>
            </div>

            <div>
              <h2 className="section-title text-brand-700">
                Same-Day Plumbing to Get Your Home Back in Shape
              </h2>
              <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
                From a leaky faucet to the emergency installation of a new water heater, we provide
                same-day service whenever possible. Our goal is to restore your home quickly, reduce
                disruption, and prevent further damage. Every job is completed with care, attention
                to detail, and an emphasis on durability, so your plumbing keeps working reliably long
                after the emergency is over.
              </p>
            </div>
          </div>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Your Plumbing Emergencies
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We answer 7 days a week and reach most homes the same day, often within hours. You get a flat-rate quote before we start, and we fix the real cause so it stays fixed.
          </p>

        </div>
      </section>

      <ServicePhotoBand />

      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Emergency Plumbing FAQs</h2>
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
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Call Today for Emergency Plumbing Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              Do not wait for a small leak to turn into a full-blown emergency. Call now for fast,
              reliable service from licensed plumbers who put homeowners first.
            </p>
            <a href={site.primaryPhone.href} className="btn-pink mt-6 text-base">
              <Icon name="phone" className="h-5 w-5" />
              Call {site.primaryPhone.number}
            </a>
          </div>
        </div>
      </section>

      <ServiceSections service="emergency-plumbing">
        <section className="py-16">
          <div className="container-page max-w-4xl">
            {/* Neighborhoods — links DOWN to location pages (internal-link mesh) */}
            {locations.length > 0 && (
              <div>
                <h2 className="section-title text-brand-700">Emergency plumbing by neighborhood</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
                  We respond across {site.serviceArea} —{' '}
                  {locations.filter((l) => emergencyPlumbingCopy[l.slug]).length}{' '}
                  neighborhoods and counting. For local detail on response times and the plumbing issues
                  common to older homes in your area, find yours below.
                </p>
                <NeighborhoodLinks copy={emergencyPlumbingCopy} basePath="/services/emergency-plumbing" linkPrefix="Emergency plumber" />
              </div>
            )}
          </div>
        </section>
      </ServiceSections>
    </>
  );
}
