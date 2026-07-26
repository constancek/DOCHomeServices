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
import { moldPreventionRemediationCopy } from '@/content/location-copy/mold-prevention-remediation';

export const metadata: Metadata = {
  title: 'Mold Prevention & Remediation',
  description: `Mold prevention and remediation across ${site.serviceArea} from ${site.name} — containment, removal, and fixing the moisture source that caused it. Upfront pricing, no overtime fees.`,
  alternates: { canonical: '/services/mold-prevention-remediation' },
  openGraph: {
    title: 'Mold Prevention & Remediation',
    description: `Mold prevention, containment, and remediation across ${site.serviceArea}.`,
  },
};

const signs = [
  'A musty smell that comes back after you air the room out',
  'Visible growth on drywall, framing, tile grout, or stored items',
  'Dark staining that spreads along a wall base or ceiling edge',
  'Water damage that was never properly dried out',
  'Condensation on windows or pipes that never clears',
  'Symptoms that ease when you leave the house and return when you come back',
];

const process = [
  { lead: 'Fix the moisture first', text: 'mold is a symptom. Remove it without stopping the water feeding it and it returns to the same spot, usually within months.' },
  { lead: 'Contain the area', text: 'sheeting and negative air pressure keep spores from spreading through the house while the affected material is disturbed.' },
  { lead: 'Remove what cannot be cleaned', text: 'porous material with growth through it comes out. Hard, non-porous surfaces can be cleaned and kept.' },
  { lead: 'Clean and treat', text: 'HEPA filtration and antimicrobial treatment on the surfaces that remain, working inside the containment.' },
  { lead: 'Dry and verify', text: 'the area is dried to measured readings, because leaving it damp restarts the whole process.' },
];

const whyUs = [
  { icon: 'shield' as const, title: 'We Fix the Source', text: 'We are plumbers first. The leak feeding the mold gets repaired as part of the same job.' },
  { icon: 'check' as const, title: 'Proper Containment', text: 'Sheeting, negative air, and HEPA filtration — so remediation does not spread the problem.' },
  { icon: 'doc' as const, title: 'Documented Throughout', text: 'Photos and moisture readings written up for your insurer or a future buyer.' },
  { icon: 'badge' as const, title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
];

const faqs = [
  {
    q: 'How quickly can mold start after water damage?',
    a: 'Mold can begin establishing in damp material within roughly 24 to 48 hours, given the right temperature and something organic to grow on — which describes drywall paper and framing exactly. This is the entire reason we push so hard on drying speed. Most mold remediation we do could have been prevented by drying that started a day or two earlier.',
  },
  {
    q: 'Can I just clean mold off with bleach?',
    a: 'On a hard, non-porous surface like tile or sealed metal, a small patch of surface growth cleans off and stays off, provided you also fix whatever kept it wet. On porous material — drywall, framing, carpet — bleach kills what is on the surface while the growth inside the material continues. That is why remediation removes material rather than scrubbing it.',
  },
  {
    q: 'Do I need testing before remediation?',
    a: 'Often not. If you can see growth and you know where the water came from, testing tells you what you already know and delays the work. Testing is genuinely useful when you smell mold but cannot find it, when you need to establish the extent behind walls, or when there is a dispute — an insurance claim, a sale, a tenancy. In those cases we recommend an independent testing company rather than testing our own work.',
  },
  {
    q: 'Is the mold in my house the dangerous kind?',
    a: 'The practical answer is that the species matters less than most people expect. Any significant indoor mold growth is a problem worth removing, and remediation is handled essentially the same way regardless of type. If someone in the house has asthma, an allergy, or a compromised immune system, treat any growth as worth acting on quickly and talk to a doctor about symptoms.',
  },
  {
    q: 'Will insurance cover mold remediation?',
    a: 'It depends heavily on the cause and the policy. Mold arising from a sudden covered event, like a burst pipe, is more often covered — frequently up to a capped limit specific to mold. Mold from a long-running leak or ongoing humidity is usually excluded as a maintenance issue. Our documentation of the source and timeline is what supports the claim either way.',
  },
  {
    q: 'How do I stop it coming back?',
    a: 'Remove the water, not just the mold. That means repairing the leak, drying to measured readings rather than to touch, and controlling humidity in the space afterward — often a dehumidifier in a basement, sometimes better ventilation in a bathroom. Mold that returns to the same spot means the moisture source was never actually fixed.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mold Prevention & Remediation',
  description:
    'Mold containment, removal, and prevention, including repair of the moisture source causing the growth.',
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
    { '@type': 'ListItem', position: 5, name: 'Mold Prevention & Remediation', item: `${site.url}/services/mold-prevention-remediation` },
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

export default function MoldPreventionRemediationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Water Damage Restoration"
        title={`Mold Prevention & Remediation in ${site.serviceArea}`}
        description="Stopping mold before it establishes, and removing it properly — along with the moisture that caused it."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
          { label: 'Mold Prevention & Remediation' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Musty smell or visible growth? Get it looked at
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
            style={{ backgroundImage: 'url(/services/mold-hero.jpg)' }}
            role="img"
            aria-label="Close-up of an aged, moss-covered brick wall"
          />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Mold Is a Water Problem
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Mold needs moisture, something organic to sit on, and time. Your house supplies two of
            those permanently, which means the only variable you control is the water. Every
            remediation job that fails, fails because someone removed the growth and left the leak.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} works both ends. We repair the plumbing feeding the problem, contain and
            remove the affected material properly, and dry the space to measured readings so the
            conditions that grew it are gone. Prevention is the cheaper half of this page — if you
            call us during a water event rather than months after one, there is often nothing to
            remediate at all.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-[2fr_3fr] lg:py-16">
          <div
            className="aspect-[10/9] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/mold-signs.jpg)' }}
            role="img"
            aria-label="Close-up of a stone wall covered in moss and lichen"
          />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Have a Mold Problem
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Most mold is found by smell before it is found by sight, because the growth is usually
              behind something:
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
              The last one is worth taking seriously. Symptoms that track with being in the building
              are a real signal, particularly for anyone with asthma or allergies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">How Remediation Works</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Containment is what separates remediation from cleaning. Disturbing growth without it
            moves the problem into rooms that did not have it:
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
            A patch of black spotting in the corner of a shower or along tile grout is almost always
            surface growth on non-porous material, fed by steam rather than a leak. Clean it, run the
            exhaust fan, and it stays gone. That is a maintenance job, not a remediation job, and
            paying anyone to contain a bathroom for it is money wasted.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The line worth knowing is porous versus non-porous, and small versus spreading. Surface
            growth on tile, glass, or sealed metal cleans off. Growth on drywall, framing, carpet, or
            insulation has gone into the material, and cleaning the face of it accomplishes nothing.
          </p>

          <h2 className="mt-12 section-title text-brand-700">
            Why Choose {site.name} for Mold Work
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Mold is the easiest service in this trade to sell on fear. We would rather tell you that
            what you have is a bathroom ventilation problem than contain and strip a room that did
            not need it — and because we are plumbers, we can actually fix the leak that started it
            rather than handing you back a clean wall and the same drip.
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
            The best mold prevention is fast, measured drying. See{' '}
            <Link href="/services/structural-drying" className="font-semibold text-brand-600 underline">
              structural drying
            </Link>{' '}
            and{' '}
            <Link href="/services/emergency-water-extraction" className="font-semibold text-brand-600 underline">
              emergency water extraction
            </Link>
            , or{' '}
            <Link href="/services/water-damage-restoration" className="font-semibold text-brand-600 underline">
              water damage restoration
            </Link>{' '}
            for the full process. Where a hidden leak is feeding the growth,{' '}
            <Link href="/services/leak-detection" className="font-semibold text-brand-600 underline">
              leak detection
            </Link>{' '}
            comes first.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Mold FAQs</h2>
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
              Deal With It Before It Spreads
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              If you have had water damage in the last few days, the cheapest version of this
              conversation is happening right now — drying it properly costs a fraction of
              remediating it later.
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

      {/* Mold prevention & remediation by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Mold prevention & remediation by neighborhood</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We stop mold before it establishes and remove it properly across {site.serviceArea} —{' '}
            {locations.filter((l) => moldPreventionRemediationCopy[l.slug]).length} neighborhoods and counting.
            Find yours below for local detail on your area.
          </p>
          <NeighborhoodLinks copy={moldPreventionRemediationCopy} basePath="/services/mold-prevention-remediation" linkPrefix="Mold prevention & remediation" />
        </div>
      </section>

      <PageSections />
    </>
  );
}
