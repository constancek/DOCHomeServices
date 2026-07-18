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
import { afterFloodPlumbingCopy } from '@/content/location-copy/after-flood-plumbing';

export const metadata: Metadata = {
  title: 'After Flood Plumbing',
  description: `After flood plumbing inspection and repair across ${site.serviceArea} from ${site.name} — water heaters, drain lines, gas connections, and fixtures checked before you turn the water back on.`,
  alternates: { canonical: '/services/after-flood-plumbing' },
  openGraph: {
    title: 'After Flood Plumbing',
    description: `Inspection and repair of the plumbing a flood left behind, across ${site.serviceArea}.`,
  },
};

const checks = [
  'Water heater — submerged burners, controls, and gas valves',
  'Sewer and drain lines for backflow, silt, and collapsed sections',
  'Supply lines and shutoff valves that sat underwater',
  'Sump pump and check valve function before the next storm',
  'Gas connections and appliance controls that were flooded',
  'Fixtures, traps, and floor drains packed with debris',
];

const risks = [
  { lead: 'Contaminated supply', text: 'floodwater that got into a well or an open line can carry bacteria straight into the water you drink. It needs testing, not optimism.' },
  { lead: 'A flooded water heater', text: 'once the burner assembly and gas controls go underwater, that unit is not safe to relight. Manufacturers say replace, and they are right.' },
  { lead: 'Blocked sewer lines', text: 'floods push silt and debris into the main. The line looks fine until the first heavy use backs it up into the house.' },
  { lead: 'A failed sump pump', text: 'the pump that ran through the flood is often the pump that died in it. You find out during the next storm.' },
  { lead: 'Corroding shutoffs', text: 'valves that sat in dirty water seize up. The one you need in an emergency is the one that will not turn.' },
];

const whyUs = [
  { icon: 'check' as const, title: 'Full System Inspection', text: 'We check the whole system, not just the fixture you noticed — floods do damage in places you would not look.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked plumbers who pull permits where the code calls for it, including gas work.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
  { icon: 'clock' as const, title: 'Same-Day Service', text: 'A house you cannot safely use water in is an emergency. We reach most homes the same day.' },
];

const faqs = [
  {
    q: 'Is my water safe to drink after a flood?',
    a: 'Do not assume it is. If you are on city water, your utility will issue a boil advisory when the supply has been compromised, so follow that first. If you are on a well that was flooded, the water needs testing before anyone drinks it — floodwater carries bacteria and whatever was in the ground around it.',
  },
  {
    q: 'Does a flooded water heater have to be replaced?',
    a: 'Almost always, yes. Once floodwater reaches the burner assembly and gas control valve on a gas unit, or the elements and thermostats on an electric one, manufacturers direct replacement rather than repair. The controls corrode internally where you cannot see it, and a gas valve that fails after a flood fails unsafely.',
  },
  {
    q: 'Why is my drain slow after the flood receded?',
    a: 'Floods push silt, mud, and debris into sewer and drain lines. The line often still passes a small amount of water, so it seems fine, then backs up the first time you run a washing machine. A camera inspection shows whether it is a partial blockage that can be cleared or a section that has collapsed.',
  },
  {
    q: 'How soon should I have the plumbing checked?',
    a: 'Before you resume normal water use. Running a full household load through a system with a blocked main or a compromised water heater turns a repairable situation into a second flood, this time inside.',
  },
  {
    q: 'Do I need this if the water never got above the floor?',
    a: 'Probably not, and we will say so. If water stayed shallow, never reached the water heater base, and the drains run normally, there may be nothing here to fix. What we would still check is the sump pump, because that is the component that worked hardest during the flood.',
  },
  {
    q: 'Will insurance cover after flood plumbing repairs?',
    a: 'It depends on your policy and the flood source. Standard homeowners policies commonly exclude rising floodwater, which is what separate flood insurance covers, while a burst pipe inside the home is usually covered. We document what we find and what caused it so you have the record for your claim.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'After Flood Plumbing Inspection & Repair',
  description:
    'Post-flood plumbing inspection and repair, covering water heaters, sewer lines, supply lines, gas connections, and sump pumps.',
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

export default function AfterFloodPlumbingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`After Flood Plumbing in ${site.serviceArea}`}
        description="Inspection and repair of the plumbing a flood left behind — before you turn the water back on."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'After Flood Plumbing' },
        ]}
      />

      {/* Top CTA banner */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Flooded home in {site.serviceArea}? Get the plumbing checked
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
            style={{ backgroundImage: 'url(/services/after-flood-hero.jpg)' }}
            role="img"
            aria-label="Technician inspecting and repairing a heating system"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Plumbing Inspection After a Flood
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            The water going down is not the end of it. A flood leaves behind a plumbing system that
            looks the same and does not work the same — silt in the sewer main, a water heater whose
            gas controls sat underwater, shutoff valves quietly seizing, and a sump pump that may
            have burned itself out doing its job.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} goes through the whole system before you go back to normal water use, so the
            recovery does not turn into a second flood. What we find gets explained plainly, with a
            flat-rate price on anything that needs fixing and an honest answer on anything that does
            not.
          </p>
        </MainWithSidebar>
      </section>

      {/* What we check band */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-[2fr_3fr] lg:py-16">
          <div
            className="aspect-[10/9] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/after-flood-checks.jpg)' }}
            role="img"
            aria-label="Plumber fitting a pipe connection with specialized tools"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What We Check After a Flood
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Flood damage to plumbing is mostly invisible from where you are standing. These are the
              components that fail after a flood, in roughly the order they cause trouble:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {checks.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              We camera the main where there is any sign of a blockage, because guessing at a sewer
              line after a flood is how people end up snaking the same pipe three times.
            </p>
          </div>
        </div>
      </section>

      {/* Risks + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">What Goes Wrong After a Flood</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Every one of these is something we have been called back for after a homeowner turned the
            water on and hoped:
          </p>
          <ul className="mt-4 space-y-2">
            {risks.map((b) => (
              <li key={b.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                <span>
                  <span className="font-semibold text-brand-800">{b.lead}:</span> {b.text}
                </span>
              </li>
            ))}
          </ul>

          {/* When not to call */}
          <h2 className="mt-12 section-title text-brand-700">When You Do Not Need This</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            If the water stayed outside the house, or came in shallow across a slab and never reached
            the water heater base, the shutoffs, or a floor drain, there may be nothing here worth
            paying us for. Clean water from a burst supply line inside the home is also a different
            job — that is a repair and a dry-out, not a full post-flood inspection.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Tell us what the water did and how high it got when you call. If the answer is that you
            do not need us, we would rather say it on the phone than send a truck.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} After a Flood
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            After a flood you are getting a lot of advice from a lot of contractors, much of it
            pointing at the most expensive option. We give you the reading, show you the line, and
            separate what actually failed from what merely got wet.
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
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Depending on what the flood reached, the fix may be{' '}
            <Link href="/services/water-damage-restoration" className="font-semibold text-brand-600 underline">
              water damage restoration
            </Link>{' '}
            for the structure itself,{' '}
            <Link href="/services/sewer-repair-replacement" className="font-semibold text-brand-600 underline">
              sewer repair and replacement
            </Link>{' '}
            for a main packed with silt,{' '}
            <Link href="/services/water-heater-installation" className="font-semibold text-brand-600 underline">
              water heater installation
            </Link>{' '}
            when the unit went under, or{' '}
            <Link href="/services/sump-pumps" className="font-semibold text-brand-600 underline">
              sump pumps
            </Link>{' '}
            to replace the one that gave out.
          </p>

          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">After Flood Plumbing FAQs</h2>
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
              Book Your Post-Flood Plumbing Check
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Before the laundry, the dishwasher, and the showers all start again, have someone go
              through the system. It is a short visit that catches the failures a flood plants and
              leaves for later.
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

      {/* After flood plumbing by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">After flood plumbing by neighborhood</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            We inspect and repair the plumbing a flood left behind across {site.serviceArea} —{' '}
            {locations.filter((l) => afterFloodPlumbingCopy[l.slug]).length} neighborhoods and counting.
            Find yours below for local detail on your area.
          </p>
          <NeighborhoodLinks copy={afterFloodPlumbingCopy} basePath="/services/after-flood-plumbing" linkPrefix="After flood plumbing" />
        </div>
      </section>

      <PageSections />
    </>
  );
}
