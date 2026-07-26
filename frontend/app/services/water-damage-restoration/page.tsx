import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import NeighborhoodLinks from '@/components/NeighborhoodLinks';
import { site } from '@/content/site';
import { locations } from '@/content/locations';
import { waterDamageRestorationCopy } from '@/content/location-copy/water-damage-restoration';

export const metadata: Metadata = {
  title: 'Water Damage Restoration',
  description: `Water damage restoration across ${site.serviceArea} from ${site.name} — extraction, structural drying, and repair of the plumbing that caused it. Upfront pricing, no overtime fees.`,
  alternates: { canonical: '/services/water-damage-restoration' },
  openGraph: {
    title: 'Water Damage Restoration',
    description: `Water extraction, drying, and plumbing repair after a leak or flood in ${site.serviceArea}.`,
  },
};

const signs = [
  'Standing water on a floor, in a basement, or in a crawl space',
  'Carpet, drywall, or subfloor that stays damp more than a day',
  'A musty smell that returns after the room has been aired out',
  'Staining, bubbling paint, or warped baseboards along a wall',
  'A ceiling that sags or shows a spreading brown ring',
  'Water that came up through a floor drain rather than down from above',
];

const steps = [
  { lead: 'Stop the source', text: 'we shut off and repair the failed line, fitting, or fixture first. Drying a room while it is still filling is wasted work.' },
  { lead: 'Extract standing water', text: 'pumps and extractors pull out the bulk of the water, which is the single biggest factor in how much material can be saved.' },
  { lead: 'Structural drying', text: 'air movers and dehumidifiers bring framing, subfloor, and drywall back to normal moisture content, measured rather than guessed.' },
  { lead: 'Monitor until dry', text: 'we take moisture readings over several days. A wall that feels dry on the surface can still be wet inside.' },
  { lead: 'Repair and reconnect', text: 'once the structure is dry we put the plumbing right and hand you documentation of the readings for your insurer.' },
];

const whyUs = [
  { icon: 'clock' as const, title: 'Same-Day Response', text: 'Water damage compounds by the hour. We reach most homes the same day you call.' },
  { icon: 'shield' as const, title: 'Licensed Plumbers On Site', text: 'We fix the cause, not just the puddle — the failed line gets repaired as part of the job.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend surcharge.' },
  { icon: 'doc' as const, title: 'Documented for Insurance', text: 'Moisture readings and photos, written up so your claim is not held over a missing record.' },
];

const faqs = [
  {
    q: 'How fast do I need to act after water damage?',
    a: 'Within the first day if you can. Water keeps moving into framing and subfloor for as long as it sits, and mold can begin establishing in damp material within roughly 24 to 48 hours. The difference between calling on day one and day three is usually the difference between drying materials and replacing them.',
  },
  {
    q: 'Do you handle the plumbing repair as well as the drying?',
    a: 'Yes, and we do the repair first. We are a plumbing company, so the burst line, failed water heater, or cracked fitting that caused the damage gets fixed as part of the same visit rather than left for a second contractor.',
  },
  {
    q: 'Will my homeowners insurance cover this?',
    a: 'Sudden and accidental water damage, like a burst pipe, is commonly covered. Damage from long-term seepage or a maintenance issue you knew about often is not. We document moisture readings and photograph the source so you have the record your adjuster will ask for, but the coverage decision is your insurer’s.',
  },
  {
    q: 'Can I just dry it out myself with fans?',
    a: 'Sometimes, and we will tell you when. A small clean-water spill on a tile floor caught immediately is a shop vac and a box fan. What household fans cannot do is pull water back out of framing and subfloor, which is what causes the smell and the buckled floor two months later. If water reached drywall or has been sitting more than a day, it needs real equipment.',
  },
  {
    q: 'How long does the drying process take?',
    a: 'Most homes take three to five days of active drying, depending on how much water there was, what materials it soaked into, and how humid it is outside. We take readings daily and pull the equipment when the numbers say the structure is dry, not on a fixed schedule.',
  },
  {
    q: 'Is the water from my flood dangerous?',
    a: 'It depends where it came from. A supply line break is clean water. Water from a washing machine or dishwasher carries detergent and food waste. Anything that backed up from a sewer line or came in from outside during a storm is contaminated and needs different handling and more aggressive material removal.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Water Damage Restoration',
  description:
    'Water extraction, structural drying, and repair of the failed plumbing behind the damage.',
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
    { '@type': 'ListItem', position: 4, name: 'Water Damage Restoration', item: `${site.url}/services/water-damage-restoration` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function WaterDamageRestorationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Water Damage Restoration in ${site.serviceArea}`}
        description="Extraction, structural drying, and repair of the plumbing that caused it — starting the same day you call."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Water Damage Restoration' },
        ]}
      />

      {/* Top CTA banner */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Water in your home right now? Call before it spreads
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

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar>
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/water-damage-restoration-hero.jpg)' }}
            role="img"
            aria-label="A suburban house surrounded by high floodwater after heavy rain"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Water Damage Restoration
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Water damage gets more expensive by the hour. A supply line that lets go at nine in the
            morning is a wet floor by noon and a wet wall cavity by dinner, and the cost of the job
            climbs with every one of those hours. {site.name} handles both halves of the problem —
            we repair the plumbing that failed and dry out what it soaked.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Most restoration companies are not plumbers. They arrive after someone else has stopped
            the water, which means two contractors, two schedules, and a gap in between where the
            damage keeps spreading. We turn up as one crew, shut the source down, and start pulling
            water out the same visit.
          </p>
        </MainWithSidebar>
      </section>

      {/* Signs band */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-[2fr_3fr] lg:py-16">
          <div
            className="aspect-[10/9] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/water-damage-restoration-signs.jpg)' }}
            role="img"
            aria-label="Moisture beading across a damp interior wall surface"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Water Damage Restoration
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Not every leak needs a restoration crew. But once water has been sitting long enough to
              reach materials that hold it, drying it properly stops being a mop-and-fan job. Call if
              you are seeing any of these:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              The last one matters most. Water coming up rather than down usually means a sewer or
              drain problem, and that changes how the cleanup has to be handled.
            </p>
          </div>
        </div>
      </section>

      {/* Process + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">How the Restoration Works</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Restoration is a sequence, and skipping a step is how homes end up with a smell nobody
            can find six months later. Here is the order we work in and why each part matters:
          </p>
          <ul className="mt-4 space-y-2">
            {steps.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}:</span> {b.text}
                </span>
              </li>
            ))}
          </ul>

          {/* When not to call */}
          <h2 className="mt-12 section-title text-brand-700">When You Do Not Need Us</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            An overflowed tub or a knocked-over bucket on a tile or vinyl floor, mopped up within the
            hour, is finished. You do not need a restoration crew and you should not pay for one.
            Same goes for a small drip under a sink caught early — that is a repair, not a
            restoration job, and we would rather send a plumber for an hour than a crew for a week.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The line worth knowing is whether water reached something porous. Tile and sealed vinyl
            shed it. Carpet, drywall, subfloor, and framing hold it, and anything holding water for
            more than about a day needs equipment to get it back out.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Water Damage Restoration
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Water damage is stressful in a way most plumbing problems are not. Your floor is ruined,
            you do not know how far it went, and the insurance side is its own headache. We try to
            take all three off your plate at once.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.title} className="card flex gap-3.5">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-pink-500 text-white">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-brand-700">{w.title}</h3>
                  <p className="text-sm text-ink/70">{w.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Related */}
          <h2 className="mt-12 section-title text-brand-700">Related Plumbing Services</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Water damage almost always traces back to something specific. Depending on what we find,
            you may also want{' '}
            <Link href="/services/after-flood-plumbing" className="font-semibold text-brand-600 underline">
              after flood plumbing
            </Link>{' '}
            to check the system a flood left behind,{' '}
            <Link href="/services/leak-detection" className="font-semibold text-brand-600 underline">
              leak detection
            </Link>{' '}
            when the source is hidden,{' '}
            <Link href="/services/pipe-repair-replacement" className="font-semibold text-brand-600 underline">
              pipe repair and replacement
            </Link>{' '}
            for the line that failed, or{' '}
            <Link href="/services/sump-pumps" className="font-semibold text-brand-600 underline">
              sump pumps
            </Link>{' '}
            to stop the basement filling again next storm.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Water Damage Restoration FAQs</h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({
                title: f.q,
                body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p>,
              }))}
              defaultOpen={0}
            />
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
              Get the Water Out Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Every hour water sits, it moves further into your home. We stop the source, pull the
              water, dry the structure, and document all of it — so you are dealing with one crew
              and one invoice instead of three.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.primaryPhone.href} className="btn-pink text-base">
                <Icon name="phone" className="h-5 w-5" />
                Call {site.primaryPhone.number}
              </a>
              <Link href="/free-estimate" className="btn-outline border-white text-white hover:bg-white/10">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Water damage restoration by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Water damage restoration by neighborhood</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We extract water, dry the structure, and repair the plumbing behind it across{' '}
            {site.serviceArea} — {locations.filter((l) => waterDamageRestorationCopy[l.slug]).length}{' '}
            neighborhoods and counting. Find yours below for local detail on the water damage we see
            in your area.
          </p>
          <NeighborhoodLinks
            copy={waterDamageRestorationCopy}
            basePath="/services/water-damage-restoration"
            linkPrefix="Water damage restoration"
          />
        </div>
      </section>

      <PageSections />
    </>
  );
}
