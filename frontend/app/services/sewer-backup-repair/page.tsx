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
import { sewerBackupRepairCopy } from '@/content/location-copy/sewer-backup-repair';

export const metadata: Metadata = {
  title: 'Sewer Backup Repair',
  description: `Sewer backup repair across ${site.serviceArea} from ${site.name} — camera diagnosis, line clearing, and permanent repair. Same-day service, upfront pricing, no overtime fees.`,
  alternates: { canonical: '/services/sewer-backup-repair' },
  openGraph: {
    title: 'Sewer Backup Repair',
    description: `Camera-diagnosed sewer backup repair across ${site.serviceArea}.`,
  },
};

const signs = [
  'Waste or dirty water coming up through a floor drain, tub, or shower',
  'More than one fixture draining slowly at the same time',
  'A toilet that gurgles when the washing machine drains',
  'Sewage smell in the basement or around the yard cleanout',
  'Water backing up somewhere else when you flush',
  'A patch of lawn over the sewer line that is unusually wet or green',
];

const causes = [
  { lead: 'Tree roots', text: 'roots find the smallest joint gap and grow into the line. This is the single most common cause we find in older Cincinnati neighborhoods.' },
  { lead: 'Flood silt and debris', text: 'a flood pushes mud and grit into the main. The line still passes a trickle, so it seems fine until a full household load backs it up.' },
  { lead: 'Grease buildup', text: 'years of kitchen grease narrows the pipe until one bad day closes it entirely.' },
  { lead: 'A bellied or sagging line', text: 'the pipe has settled into a low spot that holds water and catches solids. Snaking it clears the symptom for a few weeks, not the cause.' },
  { lead: 'Collapsed or cracked pipe', text: 'clay and cast iron lines fail with age. Once a section has collapsed, no amount of cabling opens it.' },
  { lead: 'Municipal main backup', text: 'sometimes the problem is not on your property at all. We can tell you which side of the line it is on before you spend money.' },
];

const whyUs = [
  { icon: 'clock' as const, title: 'Same-Day Response', text: 'Sewage in the house is a health issue, not an inconvenience. We reach most homes the same day.' },
  { icon: 'check' as const, title: 'Camera Diagnosis First', text: 'We look at the line before quoting. You see the actual cause on screen rather than taking our word for it.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked plumbers, permits pulled where the code requires them.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend surcharge.' },
];

const faqs = [
  {
    q: 'What should I do right now if sewage is backing up?',
    a: 'Stop running water anywhere in the house — no toilets, sinks, laundry, or dishwasher. Every gallon you send down adds to what comes up. Keep people and pets out of the affected area, since sewage backup is contaminated water, and call us. If it is actively rising and you can safely reach your main shutoff, close it.',
  },
  {
    q: 'Is a sewer backup covered by insurance?',
    a: 'Usually only if you carry a sewer or water backup endorsement, which is a separate add-on that many standard homeowners policies do not include by default. It is worth checking your policy now rather than during a backup. We document what we find and photograph the cause so you have the record for a claim.',
  },
  {
    q: 'Why does snaking the line only fix it for a few weeks?',
    a: 'Because cabling cuts a channel through the blockage without removing what caused it. If roots, a grease layer, or a sagging section of pipe is the real problem, the line closes back up on the same schedule it did before. That is why we camera the line — so you can decide based on what is actually in there.',
  },
  {
    q: 'Do you have to dig up my yard?',
    a: 'Not always. Where the pipe is structurally sound we can often clear and line it without a full excavation. Where a section has collapsed or the line has separated, there is no way around replacing that section. We tell you which situation you are in after the camera inspection, not before.',
  },
  {
    q: 'How much does sewer backup repair cost?',
    a: 'It ranges enormously — clearing a root blockage is a different job from replacing a collapsed section under a driveway. We will not quote a number over the phone and then change it at the house. You get a written flat-rate price after we have seen the line, and you approve it before any work starts.',
  },
  {
    q: 'Can I clean up the sewage myself?',
    a: 'For a small amount on a hard, sealed floor, with gloves, boots, and a disinfectant, some people do. What we would not recommend handling yourself is sewage that soaked into carpet, drywall, or subfloor. That is contaminated porous material, and it needs removal rather than cleaning.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Sewer Backup Repair',
  description: 'Camera-diagnosed sewer backup clearing and permanent line repair.',
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
    { '@type': 'ListItem', position: 5, name: 'Sewer Backup Repair', item: `${site.url}/services/sewer-backup-repair` },
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

export default function SewerBackupRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="After Flood Plumbing"
        title={`Sewer Backup Repair in ${site.serviceArea}`}
        description="Camera diagnosis, line clearing, and a repair that holds — so it does not come back next month."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'After Flood Plumbing', href: '/services/after-flood-plumbing' },
          { label: 'Sewer Backup Repair' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Sewage backing up? Stop using water and call now
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
            style={{ backgroundImage: 'url(/services/sewer-backup-hero.jpg)' }}
            role="img"
            aria-label="Large concrete sewer pipes lined up at a construction site"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            When the Sewer Comes Back Up
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A sewer backup is the one plumbing failure where the first move is to stop using water
            entirely. Everything you send down the drain while the line is blocked comes back into
            the house, and the damage scales with how long that goes on. Turn it off, then call.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} puts a camera down the line before quoting anything. Roots, grease, silt from
            a flood, a bellied section, and a fully collapsed pipe all produce the same symptom in
            your basement and need five different repairs. Guessing at which one you have is how
            people end up paying to snake the same pipe three times in a year.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-[2fr_3fr] lg:py-16">
          <div
            className="aspect-[10/9] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/sewer-backup-signs.jpg)' }}
            role="img"
            aria-label="A drainage pipe discharging water into a ravine"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs of a Sewer Backup
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A single slow drain is usually a local clog. A sewer problem shows up in more than one
              place at once, because everything in the house shares that one line out:
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
              The gurgling toilet is the early warning most people ignore. It means air is being
              pushed back up the line, which happens before the blockage finishes closing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">What Causes Sewer Backups</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            The repair depends entirely on the cause, which is why the camera goes down first:
          </p>
          <ul className="mt-4 space-y-2">
            {causes.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}:</span> {b.text}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 section-title text-brand-700">When You Do Not Need Us</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            If one fixture is slow and everything else in the house drains normally, that is a local
            clog, not a sewer backup. A plunger or a hand auger on that trap will very often finish
            it, and you should try that before paying anyone. The tell for a sewer problem is
            multiple fixtures failing together, or waste appearing at the lowest drain in the house.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            And if the backup started at the same time as heavy rain across the whole street, call
            your sewer district first. When the municipal main is surcharged, the problem is not on
            your property and there is nothing on your side worth paying to repair.
          </p>

          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Sewer Backup Repair
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Sewer work is where homeowners get sold the most unnecessary excavation. We show you the
            camera footage, tell you which side of the property line the problem is on, and separate
            what has to be replaced from what can be cleared and left alone.
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
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            A backup rarely arrives alone. You may also need{' '}
            <Link href="/services/emergency-water-extraction" className="font-semibold text-brand-600 underline">
              emergency water extraction
            </Link>{' '}
            for what came up,{' '}
            <Link href="/services/sewer-repair-replacement" className="font-semibold text-brand-600 underline">
              sewer repair and replacement
            </Link>{' '}
            for a failed section of line,{' '}
            <Link href="/services/drain-cleaning" className="font-semibold text-brand-600 underline">
              drain cleaning
            </Link>{' '}
            for the branches feeding it, or{' '}
            <Link href="/services/after-flood-plumbing" className="font-semibold text-brand-600 underline">
              after flood plumbing
            </Link>{' '}
            if this followed a flood.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Sewer Backup FAQs</h2>
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
              Get the Line Cleared Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Stop running water, then call. We camera the line, show you what is in it, and price
              the repair before we start — including telling you when the problem is the city&rsquo;s
              and not yours.
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

      {/* Sewer backup repair by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Sewer backup repair by neighborhood</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We camera, clear, and repair backed-up sewer lines across {site.serviceArea} —{' '}
            {locations.filter((l) => sewerBackupRepairCopy[l.slug]).length} neighborhoods and counting.
            Find yours below for local detail on your area.
          </p>
          <NeighborhoodLinks copy={sewerBackupRepairCopy} basePath="/services/sewer-backup-repair" linkPrefix="Sewer backup repair" />
        </div>
      </section>

      <PageSections />
    </>
  );
}
