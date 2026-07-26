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
import { emergencyWaterExtractionCopy } from '@/content/location-copy/emergency-water-extraction';

export const metadata: Metadata = {
  title: 'Emergency Water Extraction',
  description: `Emergency water extraction across ${site.serviceArea} from ${site.name} — truck-mounted pumps and extractors on site the same day to pull standing water out fast. Upfront pricing, no overtime fees.`,
  alternates: { canonical: '/services/emergency-water-extraction' },
  openGraph: {
    title: 'Emergency Water Extraction',
    description: `Same-day water extraction across ${site.serviceArea}.`,
  },
};

const situations = [
  'A burst supply line that ran before anyone noticed',
  'A water heater that failed and emptied its tank',
  'A basement that took on water during a storm',
  'A sewer or drain backup that came up through a floor drain',
  'An overflowed tub, toilet, or appliance line',
  'Water from a fire crew putting out a fire upstairs',
];

const process = [
  { lead: 'Shut the source down', text: 'we are plumbers, so the failed line gets isolated and repaired rather than left running while we work around it.' },
  { lead: 'Pump the standing water', text: 'submersible pumps move the bulk volume. This is the fastest-moving part of the job and the one that matters most.' },
  { lead: 'Extract from materials', text: 'water sitting on a floor is easy. Water inside carpet, pad, and subfloor needs extraction equipment to pull back out.' },
  { lead: 'Lift what cannot be saved', text: 'saturated pad and contaminated porous material come out now, because leaving it in slows every day of drying that follows.' },
  { lead: 'Set up drying', text: 'air movers and dehumidifiers go in the same visit so drying starts immediately rather than tomorrow.' },
];

const whyUs = [
  { icon: 'clock' as const, title: 'Same-Day On Site', text: 'Extraction is a race. Every hour of standing water is more material that cannot be saved.' },
  { icon: 'shield' as const, title: 'Licensed Plumbers On the Truck', text: 'We stop the source as part of the same visit, not after a second contractor arrives.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend surcharge.' },
  { icon: 'doc' as const, title: 'Documented for Insurance', text: 'Photos and moisture readings from the first visit, written up for your claim.' },
];

const faqs = [
  {
    q: 'How quickly can you get here?',
    a: 'Same day for most of the area, and we treat active flooding as an emergency rather than a booking. Call and tell us how much water there is and whether it is still coming in — that changes how we dispatch.',
  },
  {
    q: 'What should I do before you arrive?',
    a: 'Shut the water off at the main if you can safely reach it. Kill power to the affected level at the panel — never stand in water to reach a breaker. Lift what you can off the floor, especially anything with fabric or paper. Do not run a household vacuum on standing water.',
  },
  {
    q: 'Can I extract the water myself with a shop vac?',
    a: 'For a small clean-water spill on hard flooring, genuinely yes, and you should. A shop vac and a fan will finish that. What a shop vac cannot do is pull water back out of carpet pad, subfloor, or wall cavity, which is where the volume actually goes in a real flood. If water spread past one room or has been down more than a few hours, it needs extraction equipment.',
  },
  {
    q: 'How long does extraction take?',
    a: 'The extraction itself is usually a few hours, depending on volume and access. That is only the first step — drying the structure afterward typically runs three to five days with equipment in place. Extraction is what stops the damage getting worse; drying is what makes the space usable again.',
  },
  {
    q: 'Is the water contaminated?',
    a: 'Depends on the source. A supply line break is clean water. An appliance line carries detergent and food waste. Anything that backed up from a sewer, or came in from outside during a storm, is contaminated — that changes the protective equipment we use and means more porous material has to be removed rather than dried.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Emergency Water Extraction',
  description: 'Same-day emergency extraction of standing water, including source repair and drying setup.',
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
    { '@type': 'ListItem', position: 5, name: 'Emergency Water Extraction', item: `${site.url}/services/emergency-water-extraction` },
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

export default function EmergencyWaterExtractionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Water Damage Restoration"
        title={`Emergency Water Extraction in ${site.serviceArea}`}
        description="Pumps and extractors on site the same day — because the damage stops growing the moment the water is gone."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
          { label: 'Emergency Water Extraction' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Standing water in your home? Every hour counts
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

      <section className="py-16">
        <MainWithSidebar>
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/water-extraction-hero.jpg)' }}
            role="img"
            aria-label="A car driving through a flooded street after heavy rain"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Getting the Water Out
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Extraction is the part of water damage work where speed actually changes the outcome.
            How much of your flooring, drywall, and framing survives is decided largely by how long
            the water sat on it. Everything after this step is slower and more expensive.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} arrives with pumps, extractors, and a licensed plumber on the same truck. The
            source gets shut down and repaired, the standing water comes out, saturated material that
            cannot be saved comes up, and drying equipment goes in before we leave — one visit rather
            than three contractors over four days.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-[2fr_3fr] lg:py-16">
          <div
            className="aspect-[10/9] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/water-extraction-situations.jpg)' }}
            role="img"
            aria-label="Cars stranded on a flooded street after heavy rain"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              When You Need Extraction
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              These are the calls we get most, and all of them are time-sensitive in the same way:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {situations.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Tell us the source when you call. Clean water and contaminated water are handled
              differently from the first minute on site.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">How Extraction Works</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Five steps, in this order, on the first visit:
          </p>
          <ul className="mt-4 space-y-2">
            {process.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}:</span> {b.text}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 section-title text-brand-700">When You Do Not Need Us</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            A spill on tile or sealed vinyl, caught within the hour, is a mop and a fan. A shop vac
            handles more than people expect on hard flooring. If the water never left the room, never
            reached carpet or drywall, and is already up, you are done — calling us would be paying
            for equipment you do not need.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The threshold is porous material. Once water is in carpet pad, subfloor, or the bottom of
            a drywall sheet, household tools cannot reach it, and what they leave behind is what
            causes the smell and the buckled floor later.
          </p>

          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Water Extraction
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Most extraction companies cannot touch the pipe that caused the problem. That gap — the
            hours or days between the water being pumped out and a plumber arriving to stop it coming
            back — is where a lot of the damage happens. We close it by being both.
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

          <h2 className="mt-12 section-title text-brand-700">Related Services</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Extraction is the first step of a longer job. It is normally followed by{' '}
            <Link href="/services/structural-drying" className="font-semibold text-brand-600 underline">
              structural drying
            </Link>{' '}
            and, where the water sat long enough,{' '}
            <Link href="/services/mold-prevention-remediation" className="font-semibold text-brand-600 underline">
              mold prevention and remediation
            </Link>
            . See{' '}
            <Link href="/services/water-damage-restoration" className="font-semibold text-brand-600 underline">
              water damage restoration
            </Link>{' '}
            for the whole process, or{' '}
            <Link href="/services/basement-flood-plumbing" className="font-semibold text-brand-600 underline">
              basement flood plumbing
            </Link>{' '}
            if this happened downstairs.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Water Extraction FAQs</h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({
                title: f.q,
                body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p>,
              }))}
              defaultOpen={0}
            />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
              Get the Water Out Now
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Water off, power off, then call. We bring the pumps, stop the source, and start drying
              the same visit — and we will tell you if what you have is a shop vac job instead.
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

      {/* Emergency water extraction by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Emergency water extraction by neighborhood</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We pull standing water out fast across {site.serviceArea} —{' '}
            {locations.filter((l) => emergencyWaterExtractionCopy[l.slug]).length} neighborhoods and counting.
            Find yours below for local detail on your area.
          </p>
          <NeighborhoodLinks copy={emergencyWaterExtractionCopy} basePath="/services/emergency-water-extraction" linkPrefix="Emergency water extraction" />
        </div>
      </section>

      <PageSections />
    </>
  );
}
