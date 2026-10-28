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
import { furnaceRepairCopy } from '@/content/location-copy/furnace-repair';
import { withSocial } from '@/lib/seo';

export const metadata: Metadata = withSocial({
  title: 'Furnace Repair in Cincinnati & NKY',
  description:
    'Same-day furnace repair in Cincinnati and Northern Kentucky for gas and electric furnaces, all major brands. Upfront pricing and no overtime fees.',
  alternates: { canonical: '/services/furnace-repair' },
});

// Four problems (page-format.md): the ones a homeowner can see, hear or feel.
const problems = [
  'The furnace runs but blows cold air',
  'Burners light, then shut off within seconds',
  'Short cycling: the furnace turns on and off every few minutes',
  'Banging, squealing or rattling from the blower or burners',
];

const otherServices = [
  { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
  { label: 'Heat Pumps', href: '/services/heat-pumps' },
  { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
];

const faqs = [
  { q: 'How much does furnace repair cost?', a: 'It depends on what failed, and we won’t guess before we test. Cleaning a flame sensor is a small job, while a blower motor or control board costs more. The technician gives you one flat price before any work starts, and evening and weekend visits cost the same.' },
  { q: 'My furnace runs but blows cold air. What’s wrong?', a: 'Check that the thermostat is on heat, not fan only, and swap a dirty filter. If it still blows cold, the burners may be lighting and shutting off because of a dirty flame sensor, a failed igniter or a pressure switch problem. Those need a technician.' },
  { q: 'I smell gas near my furnace. What should I do?', a: 'Don’t flip switches or try to relight anything. Get everyone out of the house, then call the gas company’s emergency line from outside. Once the gas side is safe, we can find and fix whatever went wrong with the furnace.' },
  { q: 'Do you repair all kinds of furnaces?', a: 'Yes. We repair gas and electric furnaces from all major brands, including burners, igniters, flame sensors, gas valves, blower motors, control boards and thermostats. If your furnace is old enough that parts are hard to find, we tell you before you spend money on a repair.' },
  { q: 'How often should I change my furnace filter?', a: 'Check a standard 1-inch filter every month during heating season and change it when it looks gray, usually every one to three months. Pets, dust and renovation work shorten that. A clogged filter is one of the most common reasons a furnace overheats and shuts itself off.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Furnace Repair',
  description: 'Gas and electric furnace repair on all major brands across Cincinnati and Northern Kentucky.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Heating', item: `${site.url}/services/heating` },
    { '@type': 'ListItem', position: 4, name: 'Furnace Repair', item: `${site.url}/services/furnace-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FurnaceRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Heating"
        title={`Furnace Repair in ${site.serviceArea}`}
        description="No heat, weak airflow or strange noises? Our licensed technicians find the cause and get gas and electric furnaces heating again, with the price approved before work starts."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Heating', href: '/services/heating' },
          { label: 'Furnace Repair' },
        ]}
      />

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar mascot couponTitle="Furnace Tune-Up">
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/furnace-repair-hero.webp)' }}
            role="img"
            aria-label="Technician repairing a furnace"
          />
          {/* One-format top section: local pros + emergency, one paragraph each */}
          <h2 className="section-title text-brand-700">
            Local Furnace Repair Pros Who Know {site.serviceArea}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Furnace repair across {site.serviceArea} usually comes down to a few parts: a dirty flame
            sensor, a failed igniter, a worn blower motor, a stuck pressure switch or a filter so clogged
            the furnace shuts itself off. Older homes here often have a gas furnace in the basement
            feeding ducts that were sized long ago, while newer subdivisions lean more on electric heat.
            We repair gas and electric furnaces from all major brands, find the cause first and give you
            the price before any work starts.
          </p>

          <h2 className="mt-10 section-title text-brand-700">
            Emergency Furnace Repair in {site.serviceArea}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            No heat is an emergency when someone at home is vulnerable to cold: a baby, an older
            relative or anyone who is ill. NOAA’s climate normals put Cincinnati at about 100 nights a
            year at or below freezing. Most no-heat calls are handled the same day, weekends included.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Common furnace problems (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/furnace-repair.webp)' }}
            role="img"
            aria-label="Technician diagnosing a furnace"
          />
          <div>
            <h2 className="section-title">
              Common Furnace Problems in {site.serviceArea} Homes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              These are the furnace problems we’re called for most:
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-base font-medium leading-snug">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              If the furnace won’t start at all, check the thermostat batteries, the power switch near
              the furnace and the filter first. That fixes more no-heat calls than you’d think, and you
              won’t need us.
            </p>
          </div>
        </div>
      </section>

      {/* Band: What to expect (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="section-title">
              What to Expect During a Furnace Repair
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              A furnace repair begins with a full inspection to find the cause. The technician checks
              the burners, igniter, flame sensor, blower and safety controls, tests how the furnace
              runs and looks for anything unsafe.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Once the problem is found, the technician explains it and gives you the price before any
              work begins. After the repair, the furnace is tested through a full heating cycle to
              confirm it runs properly and safely, and you’ll hear what, if anything, to watch for.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.webp)' }}
            role="img"
            aria-label="Technician explaining a furnace repair to a homeowner"
          />
        </div>
      </section>

      <ServiceReviews service="furnace-repair" />

      {/* Orange call banner, right under the reviews and awards */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold leading-tight sm:text-2xl">
            No heat in {site.serviceArea}? Call for immediate service
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
          {/* Signs */}
          <h2 className="section-title text-brand-700">Signs Your Furnace Needs Repair, and When It Doesn’t</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Some no-heat calls aren’t repairs. Check that the thermostat is set to heat and its
            batteries are good, the switch on or near the furnace is on, the breaker hasn’t tripped and
            the filter isn’t packed with dust. If you smell gas, don’t touch anything: leave the house
            and call the gas company from outside. If the carbon monoxide alarm sounds, get everyone out
            first. Book a repair when the furnace short cycles, blows cold air or makes new noises. We
            inspect, explain the fault, price it before work and test the heat before we leave.
          </p>

          {/* Repair or replace */}
          <h2 className="mt-12 section-title text-brand-700">Repair or Replace Your Furnace?</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Go by the furnace, not the house. A furnace with one failed part, like an igniter, flame
            sensor or inducer motor, is usually worth repairing, even if it’s been in the basement a
            while. Replacement makes sense when an older furnace needs a heat exchanger, keeps breaking
            down every winter or can’t keep the house warm on the coldest nights. A cracked heat
            exchanger is a safety problem, not just a cost one, because it can leak carbon monoxide
            into the house. We show you what we found, price both options side by side and let you
            decide.
          </p>

          {/* Extras: gas and electric, same plain format as the rest of the page */}
          <h2 className="mt-12 section-title text-brand-700">Gas Furnace Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Gas furnaces heat most homes here, and most of their failures sit in the ignition side:
            igniters, flame sensors, pressure switches, inducer motors and gas valves. Our licensed
            technicians repair them and check the burners and venting before the furnace runs again.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Electric Furnace Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Electric furnaces have no burners, so the usual faults are heating elements, sequencers,
            relays and the blower. We find the failed part, check the wiring and breakers, and make sure
            every element is heating before we leave.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Furnace Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We find the cause before we replace anything, so the same breakdown doesn’t bring us back.
            You approve the price first, there are no overtime fees, and if you’re not happy, we make it
            right or you don’t pay.
          </p>
        </div>
      </section>

      <ServicePhotoBand />

      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Furnace Repair FAQs</h2>
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
            <h2 className="text-2xl font-extrabold sm:text-3xl">Schedule Your Furnace Repair Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              Honest recommendations and repairs that fix the cause. Call now or request an estimate.
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

      <ServiceSections service="furnace-repair">
        {/* Links: other heating services, then furnace repair by neighborhood (links DOWN to location pages) */}
        <section className="py-16">
          <div className="container-page max-w-4xl">
            <h2 className="section-title text-brand-700">Other Heating Services</h2>
            {/* Same pill style as Related Services on the location pages */}
            <ul className="mt-5 flex flex-wrap gap-3">
              {otherServices.map((o) => (
                <li key={o.label}>
                  <Link href={o.href} className="inline-block rounded-full bg-white px-5 py-2.5 font-display text-sm font-extrabold text-brand-600 ring-1 ring-brand-100 transition hover:bg-brand-50">
                    {o.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 section-title text-brand-700">Furnace repair by neighborhood</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
              We repair furnaces across {site.serviceArea}, in{' '}
              {locations.filter((l) => furnaceRepairCopy[l.slug]).length} neighborhoods and counting. For
              the heating issues common to homes in your area, find yours below.
            </p>
            <NeighborhoodLinks copy={furnaceRepairCopy} basePath="/services/furnace-repair" linkPrefix="Furnace repair" />
          </div>
        </section>
      </ServiceSections>
    </>
  );
}
