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
import { boilersCopy } from '@/content/location-copy/boilers';

export const metadata: Metadata = {
  title: 'Boiler Repair, Maintenance & Replacement',
  description: 'Boiler repair, tune-ups, and replacement in Cincinnati and the Tri-State. Hot water, steam, gas, and oil boilers, with 7-day no-heat service.',
  alternates: { canonical: '/services/boilers' },
};

const boilerTypes = [
  'Hot water boilers',
  'Steam boilers',
  'Gas-fired boilers',
  'Oil-fired boilers',
  'Combi boilers',
  'Cast iron boilers',
];

const signs = [
  'Radiators or baseboards that stay cold, or only warm at the bottom',
  'Pressure gauge reading low, or dropping again after a refill',
  'Banging, gurgling, or kettling noises from the boiler or pipes',
  'Water pooling around the boiler or a radiator valve',
  'The boiler short cycling or locking out with an error code',
  'Rising gas bills with no change in how you use the heat',
  'A yellow or flickering burner flame',
];

const tuneUp = [
  'Check system water pressure and the expansion tank',
  'Inspect for leaks and corrosion at the boiler, valves, and fittings',
  'Test the safety controls, including the relief valve and high limit',
  'Inspect the burner and check combustion and venting',
  'Test the circulator pump',
  'Bleed trapped air from the radiators so they heat fully',
];

const repairReplace = [
  { lead: 'Repair', text: 'usually the right call for low pressure, a stuck valve, a failed circulator pump, or a bad control. Those are parts, not a new boiler.' },
  { lead: 'Replace', text: 'worth pricing out when the boiler is past 15 to 25 years, the heat exchanger or vessel is leaking, or repair bills are stacking up.' },
];

const whyUs = [
  { icon: 'clock' as const, title: 'Seven-Day No-Heat Service', text: 'A boiler that quits gets a technician the same day, 7 days a week from 8am to 8pm.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
  { icon: 'shield' as const, title: 'Licensed & Insured', text: 'Background-checked technicians and code-compliant gas and venting work.' },
  { icon: 'star' as const, title: 'Financing Available', text: 'Flexible plans when a replacement makes more sense than another repair.' },
];

const faqs = [
  { q: 'How often should a boiler be serviced?', a: 'Once a year, ideally before heating season. The visit usually takes 60 to 90 minutes and covers water pressure, leaks, safety controls, the circulator pump, and bleeding air from the radiators.' },
  { q: 'How long does a boiler last?', a: 'With regular maintenance, most boilers last 15 to 25 years, which is longer than a typical furnace.' },
  { q: 'Why is my boiler pressure low?', a: 'Low pressure usually means water is leaving the closed loop, often through a small leak, a weeping relief valve, or after radiators were bled. Topping it up is a short-term fix. If the pressure keeps dropping, the leak needs to be found.' },
  { q: 'Why are some radiators cold when the boiler is running?', a: 'Trapped air is the most common cause, especially when a radiator is cold at the top. Bleeding it with a radiator key often fixes it. If bleeding doesn’t help, the problem may be a stuck valve, a weak circulator pump, or low system pressure.' },
  { q: 'Can I replace a boiler with a furnace?', a: 'You can, but a furnace needs ductwork, and most boiler homes don’t have it. Adding ducts is a large job, so replacing a boiler with a new, high-efficiency boiler is usually simpler and keeps the radiant comfort you already have.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Boiler Repair, Maintenance & Replacement',
  description: 'Boiler repair, annual maintenance, and replacement for radiator, baseboard, and radiant floor heating systems.',
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
    { '@type': 'ListItem', position: 4, name: 'Boilers', item: `${site.url}/services/boilers` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function BoilersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Heating"
        title="Boiler Repair, Maintenance & Replacement"
        description={`Repairs, annual tune-ups, and replacements for the boilers that heat radiator, baseboard, and radiant floor homes across ${site.serviceArea}.`}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Heating', href: '/services/heating' },
          { label: 'Boilers' },
        ]}
      />

      {/* Top CTA banner (orange, green button) */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Boiler not heating in {site.serviceArea}? Call for service
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
            style={{ backgroundImage: 'url(/services/boiler-hero.webp)' }}
            role="img"
            aria-label="Technician servicing the circulator pump inside a gas boiler"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Boiler Service for Every Stage
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} repairs, maintains, and replaces boilers for homes and rental buildings across{' '}
            {site.serviceArea}. A boiler heats water to roughly 140°F and pumps it through radiators,
            baseboards, or tubing under the floor, so when something goes wrong, the fix is usually
            about pressure, water flow, or the burner, not airflow.
          </p>

          <h2 className="mt-10 section-title text-brand-700">Boilers We Service</h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {boilerTypes.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[17px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-1 h-5 w-5 flex-shrink-0 text-pink-500" />
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[17px] leading-relaxed text-ink/75">
            One thing before you call us: if your building’s boiler is under a service contract with
            another company, call them first so you don’t pay twice for the same visit.
          </p>

          <h2 className="mt-10 section-title text-brand-700">Boiler Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Cold radiators, a pressure gauge that keeps falling, a boiler locked out on an error
            code, or water on the floor. Our technicians find the cause first, then fix it. Most
            boiler repairs come down to a specific part, like a circulator pump, a pressure relief
            valve, an expansion tank, a zone valve, or an igniter, and we tell you the price before
            we start.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            No heat on a cold night is an emergency, and we treat it that way. Boiler no-heat calls
            are covered by the same 7-day service as our{' '}
            <Link href="/services/furnace-repair" className="font-semibold text-pink-600 hover:underline">
              furnace repair
            </Link>
            .
          </p>

          <h2 className="mt-10 section-title text-brand-700">Boiler Maintenance</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Boilers reward regular care. One professional service a year, usually 60 to 90 minutes,
            keeps the system efficient and catches small leaks and weak parts before they become a
            no-heat call in January. Book it in early fall, before the first cold week.
          </p>

          <h2 className="mt-10 section-title text-brand-700">Boiler Replacement</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            A well-maintained boiler lasts 15 to 25 years. When yours reaches the end, a modern
            high-efficiency boiler runs around 90% efficient, so more of the gas you pay for turns
            into heat. We size the new boiler to your home’s actual heat loss, not just the label on
            the old one, and install it with the venting, piping, and controls it needs.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need a repair (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/boilers.webp)' }}
            role="img"
            aria-label="Cast iron radiator under a window in an older home"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs Your Boiler Needs Repair
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              A boiler usually gives some warning before it stops heating. Call for service if you
              notice any of these:
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              If you smell gas near the boiler, leave the house and call 911 or the gas utility from
              outside before you call anyone else.
            </p>
          </div>
        </div>
      </section>

      {/* Band: What a tune-up covers (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What a Boiler Tune-Up Covers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              During an annual service visit, a technician will:
            </p>
            <ul className="mt-4 space-y-1.5">
              {tuneUp.map((t) => (
                <li key={t} className="flex gap-2 text-sm font-medium">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Anything we find is explained before any work is done, with the price up front.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.webp)' }}
            role="img"
            aria-label="Technician reviewing a service visit with a homeowner"
          />
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Repair or Replace?</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Most boiler problems are repairs. A quick guide:
          </p>
          <ul className="mt-4 space-y-2.5">
            {repairReplace.map((r) => (
              <li key={r.lead} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                <span>
                  <span className="font-semibold text-brand-800">{r.lead}:</span> {r.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            If a repair will get you through several more winters, we’ll tell you that instead of
            quoting a new boiler. For more background, read{' '}
            <Link href="/what-you-should-know-about-boilers/" className="font-semibold text-pink-600 hover:underline">
              what you should know about boilers
            </Link>
            .
          </p>

          <h2 className="mt-12 section-title text-brand-700">Financing a New Boiler</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            A boiler replacement is a large expense, so {site.name} offers{' '}
            <Link href="/financing" className="font-semibold text-pink-600 hover:underline">
              flexible financing
            </Link>{' '}
            to spread the cost over time.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Boiler Service</h2>
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

          <h2 className="mt-12 section-title text-brand-700">Boiler FAQs</h2>
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
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Boiler Service Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              Repair, an annual tune-up, or a replacement quote. Call now or request an estimate.
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

      {/* Boilers by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Boilers by neighborhood</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We repair, maintain, and replace boilers across {site.serviceArea},{' '}
            {locations.filter((l) => boilersCopy[l.slug]).length} neighborhoods in all. Find yours
            below for local detail on the homes and heating systems in your area.
          </p>
          <NeighborhoodLinks copy={boilersCopy} basePath="/services/boilers" linkPrefix="Boilers" />
        </div>
      </section>

      <PageSections />
    </>
  );
}
