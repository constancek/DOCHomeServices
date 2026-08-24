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
import { structuralDryingCopy } from '@/content/location-copy/structural-drying';

export const metadata: Metadata = {
  title: 'Structural Drying',
  description: `Structural drying across ${site.serviceArea} from ${site.name} — air movers, dehumidifiers, and daily moisture readings until framing, subfloor, and drywall are genuinely dry. Upfront pricing.`,
  alternates: { canonical: '/services/structural-drying' },
  openGraph: {
    title: 'Structural Drying',
    description: `Measured structural drying of framing, subfloor, and drywall across ${site.serviceArea}.`,
  },
};

const materials = [
  'Subfloor and floor joists under carpet or hardwood',
  'The bottom of drywall sheets, where water wicks upward',
  'Wall cavities and the insulation inside them',
  'Framing and sill plates along exterior walls',
  'Concrete slab and the flooring bonded to it',
  'Cabinet bases, stair stringers, and trim',
];

const process = [
  { lead: 'Map the moisture', text: 'meters and, where it helps, thermal imaging show how far the water travelled. Water moves further through a wall than it does across a floor.' },
  { lead: 'Open what needs opening', text: 'a sealed wall cavity does not dry on its own. Sometimes that means small controlled openings rather than replacing the whole wall.' },
  { lead: 'Set the equipment', text: 'air movers to lift moisture out of surfaces, dehumidifiers to pull it out of the air before it settles back in.' },
  { lead: 'Read it daily', text: 'we take the same readings in the same spots each day. Drying is finished when the numbers say so, not when a set number of days have passed.' },
  { lead: 'Document and remove', text: 'you get the log of readings for your insurer, and the equipment comes out when the structure has hit normal moisture content.' },
];

const whyUs = [
  { icon: 'check' as const, title: 'Measured, Not Guessed', text: 'Daily meter readings in fixed locations. We can show you the numbers rather than tell you it feels dry.' },
  { icon: 'clock' as const, title: 'Equipment Same Day', text: 'Drying starts the visit we arrive. Days of delay here turn into weeks of problems later.' },
  { icon: 'doc' as const, title: 'Documented for Insurance', text: 'The reading log is exactly what adjusters ask for, and having it prevents most disputes.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
];

const faqs = [
  {
    q: 'How long does structural drying take?',
    a: 'Most homes run three to five days with equipment in place. What changes it is how much water there was, which materials it soaked into, how much of it we could extract first, and the humidity outside. Hardwood and plaster take longer than carpet and drywall. We read it daily and pull the equipment when the numbers hit target, not on a fixed schedule.',
  },
  {
    q: 'Why can I not just run my own fans?',
    a: 'Household fans move air across a surface, which dries the surface and leaves the water inside the material. Restoration air movers are shaped to lift moisture out of the material itself, and they only work paired with dehumidifiers — otherwise you are moving water from the floor into the air and back into the walls. Fans alone are why a room can feel dry and still smell two months later.',
  },
  {
    q: 'Does the equipment have to run overnight?',
    a: 'Yes, continuously. Drying stops when the equipment stops, and moisture redistributes back through the material overnight if you switch it off. It is noisy, and it does add to your electricity bill for those days. Turning it off to sleep is the single most common reason a job takes twice as long.',
  },
  {
    q: 'How do you know when it is actually dry?',
    a: 'We take moisture readings from the same points daily and compare them against a dry standard from an unaffected part of the same house, using the same material. When the affected areas reach that baseline and hold it, the structure is dry. That comparison is why a reading on its own does not tell you much.',
  },
  {
    q: 'Do you have to remove my drywall and flooring?',
    a: 'Less often than people expect. Drywall that was wet but not contaminated can frequently be dried in place. What generally cannot be saved is carpet pad, saturated insulation, and anything that was touched by contaminated water. We would rather dry material than bill you to replace it.',
  },
  {
    q: 'Will my insurance pay for the drying?',
    a: 'Where the water event itself is covered, drying normally is too, and it is the part adjusters most expect to see documented. The daily reading log we produce is what supports that. Coverage of the underlying event is still your insurer’s decision.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Structural Drying',
  description:
    'Structural drying of framing, subfloor, and drywall using air movers and dehumidifiers with daily moisture monitoring.',
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
    { '@type': 'ListItem', position: 5, name: 'Structural Drying', item: `${site.url}/services/structural-drying` },
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

export default function StructuralDryingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Water Damage Restoration"
        title={`Structural Drying in ${site.serviceArea}`}
        description="Framing, subfloor, and drywall dried to measured readings — not to a guess and a schedule."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
          { label: 'Structural Drying' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Water damage that needs drying? Call to get equipment in
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
            style={{ backgroundImage: 'url(/services/structural-drying-hero.webp)' }}
            role="img"
            aria-label="Water droplets covering a rain-drenched window"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Drying the Structure, Not the Surface
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A floor can feel dry underfoot while the subfloor beneath it is still holding water. That
            gap between how a room feels and what the material is actually carrying is where most
            water damage problems are created — the smell nobody can locate, the floor that cups
            three months later, the mold behind a wall that looked fine.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} dries to numbers. We meter the affected material daily against a dry standard
            taken elsewhere in your house, and the equipment stays until the readings match. It is a
            less dramatic service than extraction and it is the one that determines whether the
            repair holds.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-[2fr_3fr] lg:py-16">
          <div
            className="aspect-[10/9] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/structural-drying-materials.webp)' }}
            role="img"
            aria-label="Close-up of an aged, moss-covered brick wall"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What Holds the Water
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Water leaves the open floor quickly and stays in everything porous it reached. These
              are the places we meter:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {materials.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Drywall is the one that surprises people. Water wicks upward inside the sheet well
              above the line you can see on the surface.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">How the Drying Works</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The equipment is the easy part. The measuring is what makes it work:
          </p>
          <ul className="mt-4 space-y-2">
            {process.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}:</span> {b.text}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 section-title text-brand-700">When You Do Not Need Us</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Clean water on a hard, sealed floor that you wiped up within an hour does not need
            structural drying. Nothing porous took it on, so there is nothing left to dry. Open a
            window and move on.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            A damp patch that has been there for years, in a basement that has always been humid, is
            also not a drying job. That is an ongoing moisture source — groundwater, a failed
            gutter, poor grading — and running equipment on it just runs your meter. Find the source
            first, and if it is not plumbing we will tell you.
          </p>

          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Structural Drying
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Drying is easy to fake. Equipment sits in a room for three days, someone says it is dry,
            and nobody finds out otherwise until the flooring moves. The reading log is the
            difference, and we hand you ours.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.title} className="card flex gap-3.5">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-pink-500 text-white">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-brand-700">{w.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink/70">{w.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 section-title text-brand-700">Related Services</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Drying normally follows{' '}
            <Link href="/services/emergency-water-extraction" className="font-semibold text-brand-600 underline">
              emergency water extraction
            </Link>{' '}
            and runs alongside{' '}
            <Link href="/services/mold-prevention-remediation" className="font-semibold text-brand-600 underline">
              mold prevention and remediation
            </Link>
            . It is one stage of{' '}
            <Link href="/services/water-damage-restoration" className="font-semibold text-brand-600 underline">
              water damage restoration
            </Link>
            , and if the water came from a failed pipe you may also need{' '}
            <Link href="/services/pipe-repair-replacement" className="font-semibold text-brand-600 underline">
              pipe repair and replacement
            </Link>
            .
          </p>

          <h2 className="mt-12 section-title text-brand-700">Structural Drying FAQs</h2>
          <div className="mt-4">
            <Accordion
              items={faqs.map((f) => ({
                title: f.q,
                body: <p className="text-[15px] leading-relaxed text-ink/75">{f.a}</p>,
              }))}
              defaultOpen={0}
            />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">
              Dry It Properly the First Time
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              The difference between a room that is dry and a room that feels dry shows up months
              later, in the flooring and in the smell. We measure it, log it, and show you the
              numbers before we pull the equipment.
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

      {/* Structural drying by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Structural drying by neighborhood</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We dry framing, subfloor, and drywall to measured readings across {site.serviceArea} —{' '}
            {locations.filter((l) => structuralDryingCopy[l.slug]).length} neighborhoods and counting.
            Find yours below for local detail on your area.
          </p>
          <NeighborhoodLinks copy={structuralDryingCopy} basePath="/services/structural-drying" linkPrefix="Structural drying" />
        </div>
      </section>

      <PageSections />
    </>
  );
}
