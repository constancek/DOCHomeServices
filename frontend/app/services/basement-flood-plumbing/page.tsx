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
import { basementFloodPlumbingCopy } from '@/content/location-copy/basement-flood-plumbing';

export const metadata: Metadata = {
  title: 'Basement Flood Plumbing',
  description: `Basement flood plumbing across ${site.serviceArea} from ${site.name} — finding which failure let the water in and fixing it so it does not happen again. Same-day service, upfront pricing.`,
  alternates: { canonical: '/services/basement-flood-plumbing' },
  openGraph: {
    title: 'Basement Flood Plumbing',
    description: `Finding and fixing the plumbing that let your basement flood, across ${site.serviceArea}.`,
  },
};

const sources = [
  'A failed sump pump, float switch, or check valve',
  'A backed-up floor drain or main sewer line',
  'A burst or split supply line in the ceiling or wall',
  'A water heater that let go at the base',
  'A cracked or separated drain line under the slab',
  'Groundwater entering through the foundation or footer drain',
];

const work = [
  { lead: 'Find the actual source', text: 'water on a basement floor tells you almost nothing about where it came from. We trace it before we quote anything.' },
  { lead: 'Repair what failed', text: 'the burst line, the seized valve, the dead pump, the blocked main — whichever one it turns out to be.' },
  { lead: 'Test the drainage', text: 'floor drains and the main line get checked under real flow, not a bucket of water.' },
  { lead: 'Protect against the next one', text: 'a backup pump, a check valve, or a new discharge route, depending on what let you down this time.' },
  { lead: 'Hand off cleanly', text: 'we tell you plainly whether the structure needs drying, and what it will take, rather than leaving you to find out later.' },
];

const whyUs = [
  { icon: 'clock' as const, title: 'Same-Day Response', text: 'A basement filling now cannot wait for a slot next week. We reach most homes the same day.' },
  { icon: 'check' as const, title: 'We Find the Source', text: 'Diagnosis first. Fixing the wrong thing is the most expensive outcome in a flooded basement.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked plumbers, permits where the code calls for them.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
];

const faqs = [
  {
    q: 'How do I tell if my basement flood is a plumbing problem or groundwater?',
    a: 'Clean water appearing near a fixture, a water heater, or a ceiling line is usually plumbing. Water seeping in at the base of the walls or up through the floor after heavy rain is usually groundwater, which is a drainage and sump pump question rather than a pipe question. Water at a floor drain that smells is a sewer issue. We identify which of the three you have before quoting.',
  },
  {
    q: 'Is it safe to go into a flooded basement?',
    a: 'Not until the power to that level is off. Water and live circuits together are the real danger in a flooded basement, well ahead of the water damage itself. If the panel is in the basement and you would have to stand in water to reach it, do not — call an electrician or the utility.',
  },
  {
    q: 'My sump pump ran the whole storm and the basement still flooded. Why?',
    a: 'Usually one of three reasons: the pump could not keep up with the volume, the discharge line was blocked or frozen so the water it pumped came straight back, or the pump failed partway through and you did not know. A camera on the discharge and a load test on the pump sorts out which it was.',
  },
  {
    q: 'Will you dry the basement out as well?',
    a: 'Yes. Our water damage restoration and structural drying crews handle the extraction and the drying, and this page covers the plumbing side that caused it. Most flooded basements need both, and we would rather send one company than have you coordinate two.',
  },
  {
    q: 'How do I stop this happening again?',
    a: 'It depends what failed. If it was the pump, a battery backup covers the power-loss case that catches most people. If it was the main line, clearing and lining it is the fix. If it was groundwater volume, the answer may be drainage work outside rather than plumbing inside — and we will tell you if that is what you actually need.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Basement Flood Plumbing',
  description:
    'Diagnosis and repair of the plumbing failure behind a flooded basement, including sump pumps, drain lines, and burst supply lines.',
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
    { '@type': 'ListItem', position: 4, name: 'After Flood Plumbing', item: `${site.url}/services/after-flood-plumbing` },
    { '@type': 'ListItem', position: 5, name: 'Basement Flood Plumbing', item: `${site.url}/services/basement-flood-plumbing` },
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

export default function BasementFloodPlumbingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="After Flood Plumbing"
        title={`Basement Flood Plumbing in ${site.serviceArea}`}
        description="Finding which failure let the water in, fixing it, and making the next storm a non-event."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'After Flood Plumbing', href: '/services/after-flood-plumbing' },
          { label: 'Basement Flood Plumbing' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Basement flooding in {site.serviceArea}? Call for same-day help
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
            style={{ backgroundImage: 'url(/services/basement-flood-hero.webp)' }}
            role="img"
            aria-label="Floodwater rising at the entrance of a building"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Water in the Basement
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Water on a basement floor looks the same whatever caused it. A split supply line, a dead
            sump pump, a backed-up main, and groundwater coming through the footer all leave the
            same puddle — and they need four completely different repairs. The expensive mistake is
            fixing the wrong one.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} works the diagnosis first. We trace where the water entered, repair the
            failure, test the drainage under real flow, and tell you what it would take to keep the
            next storm outside. If the honest answer is that your problem is drainage rather than
            plumbing, we will say so rather than sell you a pump.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-[2fr_3fr] lg:py-16">
          <div
            className="aspect-[10/9] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/basement-flood-sources.webp)' }}
            role="img"
            aria-label="A basement with tiled floor, storage shelves, and staircase"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Where Basement Water Comes From
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              These are the sources we find, roughly in the order they show up on our calls:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {sources.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              The last one is not a plumbing failure at all. If that is what you have, the fix is
              outside the house, and we would rather tell you than take the job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">What the Job Involves</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The order matters here as much as the work itself:
          </p>
          <ul className="mt-4 space-y-2">
            {work.map((b) => (
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
            A small amount of clean water on a sealed concrete floor, from a known one-off like an
            overfilled laundry tub, mopped up the same hour, is finished. You do not need a plumber
            and you do not need a drying crew.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            If your basement takes water at the wall base every heavy rain and the plumbing is sound,
            that is an exterior drainage and grading problem. A waterproofing contractor is the right
            call, not us. We can confirm which one you are dealing with, and that visit is worth more
            to you than a pump you did not need.
          </p>

          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for a Flooded Basement
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Flooded basements are where the most guessing happens in this trade, because the evidence
            washes away with the water. We trace it properly, show you what we found, and price the
            repair once.
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

          <h2 className="mt-12 section-title text-brand-700">Related Plumbing Services</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Depending on what we find, the next step may be{' '}
            <Link href="/services/sump-pumps" className="font-semibold text-brand-600 underline">
              sump pump repair and installation
            </Link>
            ,{' '}
            <Link href="/services/sewer-backup-repair" className="font-semibold text-brand-600 underline">
              sewer backup repair
            </Link>{' '}
            if it came up the drain,{' '}
            <Link href="/services/emergency-water-extraction" className="font-semibold text-brand-600 underline">
              emergency water extraction
            </Link>{' '}
            to get the water out, or{' '}
            <Link href="/services/structural-drying" className="font-semibold text-brand-600 underline">
              structural drying
            </Link>{' '}
            for what it soaked into.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Basement Flooding FAQs</h2>
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
              Find Out What Let the Water In
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Power off, then call. We trace the source, repair what failed, and tell you honestly
              whether the fix is inside the house or outside it.
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

      {/* Basement flood plumbing by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Basement flood plumbing by neighborhood</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We trace and repair the plumbing behind flooded basements across {site.serviceArea} —{' '}
            {locations.filter((l) => basementFloodPlumbingCopy[l.slug]).length} neighborhoods and counting.
            Find yours below for local detail on your area.
          </p>
          <NeighborhoodLinks copy={basementFloodPlumbingCopy} basePath="/services/basement-flood-plumbing" linkPrefix="Basement flood plumbing" />
        </div>
      </section>

      <PageSections />
    </>
  );
}
