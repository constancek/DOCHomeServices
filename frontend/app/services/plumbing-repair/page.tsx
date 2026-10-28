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
import { plumbingRepairCopy } from '@/content/location-copy/plumbing-repair';
import { withSocial } from '@/lib/seo';

export const metadata: Metadata = withSocial({
  title: 'Plumbing Repair',
  description: `Professional plumbing repair across ${site.serviceArea} from ${site.name} — leaks, clogs, fixtures, water pressure, and more, fixed at the root cause. Same-day and emergency service.`,
  alternates: { canonical: '/services/plumbing-repair' },
});

const signs = [
  'Persistent leaks from pipes, faucets, or fixtures',
  'Slow drains or frequent clogs throughout the home',
  'Low or inconsistent water pressure',
  'Unusual noises such as banging, gurgling, or whistling pipes',
  'Water stains, damp areas, or mold growth',
  'Sudden increases in water bills with no change in usage',
  'Discolored water or foul odors from drains',
];

const residential = [
  'Toilet and sink repairs',
  'Shower and tub fixture replacements',
  'Water pressure issues',
  'Clogged or slow drains',
  'Appliance hookups (dishwashers and washing machines)',
];

const otherServices = [
  { label: 'Water line replacement for aging or damaged lines', href: '/services/pipe-repair-replacement' },
  { label: 'Sump pump repair and maintenance to protect basements from flooding', href: '/services/sump-pumps' },
  { label: 'Backflow prevention and testing for a clean, safe water supply', href: undefined as string | undefined },
  { label: 'Garbage disposal installation and repair to keep your kitchen efficient', href: '/services/garbage-disposals' },
];


const faqs = [
  { q: 'What does residential plumbing repair include?', a: 'Just about anything inside your home’s plumbing network — leaks, clogged or slow drains, toilet and sink repairs, fixture replacements, water-pressure problems, and appliance hookups.' },
  { q: 'Do your plumbers provide emergency plumbing repair?', a: 'Yes. We are on call 7 days a week for urgent repairs like burst pipes, major leaks, and sewer backups, and we reach most homes the same day.' },
  { q: 'How much does a licensed plumbing repair typically cost?', a: 'Every repair is quoted at a flat rate before we begin, based on your home and the work involved — so there are no surprises. Call to request an estimate.' },
  { q: 'Do plumbing repair services include toilet repair?', a: 'Yes. We fix running, leaking, and clogged toilets, replace worn internal parts, and install new toilets when a repair no longer makes sense.' },
  { q: 'How fast can a plumber for residential repair respond?', a: 'We staff for demand, so most residential repair calls are handled the same day you reach out — often within hours.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Plumbing Repair',
  description: 'Residential plumbing repair for leaks, clogs, fixtures, and water-pressure issues.',
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
    { '@type': 'ListItem', position: 4, name: 'Plumbing Repair', item: `${site.url}/services/plumbing-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function PlumbingRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Plumbing Repair in ${site.serviceArea}`}
        description="Leaks, clogs, low pressure, or a failing fixture? Our licensed plumbers fix the root cause — fast, clean, and built to last."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Plumbing Repair' },
        ]}
      />

      {/* Intro + sidebar */}
      <section className="py-16">
        <MainWithSidebar mascot>
          <div
            className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/plumbing-repair-hero.webp)' }}
            role="img"
            aria-label="Licensed plumber making a repair under a sink"
          />
          <h2 className="section-title text-brand-700">
            Plumbing Problems Can’t Wait
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            When a plumbing issue strikes, waiting it out is not an option. Even small leaks or slow
            drains can lead to bigger problems if left unresolved. Our prompt response and attention
            to detail make sure your plumbing gets the care it needs before it becomes an emergency.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            A small leak today can quickly turn into water damage or mold tomorrow — fast action
            protects your home and your wallet. We know how disruptive plumbing problems can be: they
            interrupt your day, damage your property, and can even affect your health.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            That is why {site.name} prioritizes fast scheduling, clear communication, and high-quality
            repairs designed to last. From your first call to the final check, you will see why our
            reputation is built on trust and results.
          </p>
        </MainWithSidebar>
      </section>

      {/* Band: Signs you need a plumbing repair (photo left) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center"
            style={{ backgroundImage: 'url(/services/plumbing-repair-signs.webp)' }}
            role="img"
            aria-label="Plumber diagnosing a plumbing problem"
          />
          <div>
            <h2 className="section-title">
              Signs You Need a Plumbing Repair
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Plumbing problems often start small but can quickly lead to bigger issues if left
              unaddressed. Recognizing the warning signs early can help prevent water damage, higher
              utility bills, and costly repairs:
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {signs.map((s) => (
                <li key={s} className="flex gap-3 text-base font-medium leading-snug">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              If you notice any of these signs, professional plumbing repair with {site.name} can help
              restore proper function and protect your home.
            </p>
          </div>
        </div>
      </section>

      {/* Band: Residential plumbing repair services (photo right) */}
      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="section-title">
              Residential Plumbing Repair Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Your home’s plumbing system is one of its most important — and most used — components.
              When a pipe bursts or a fixture fails, you need dependable help right away. Our
              residential plumbing repair covers everything inside your home’s plumbing network,
              including:
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {residential.map((r) => (
                <li key={r} className="flex gap-3 text-base font-medium leading-snug">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-white" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Unlike many plumbers, we do not rush through the job. We take time to explain what went
              wrong, what needs repair, and how to prevent future issues — transparency that is one of
              the reasons homeowners across {site.serviceArea} keep choosing us. Every home is
              different, too: older homes may have galvanized pipes or outdated fixtures, while newer
              builds can have pressure imbalances or installation flaws. We are trained to spot and
              fix both.
            </p>
          </div>
          <div
            className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2"
            style={{ backgroundImage: 'url(/services/faucet-expect.webp)' }}
            role="img"
            aria-label="Plumber explaining a repair to a homeowner"
          />
        </div>
      </section>

      <ServiceReviews service="plumbing-repair" />

      {/* Orange call banner, right under the reviews and awards */}
      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold leading-tight sm:text-2xl">
            Need a plumbing repair? Call for immediate service
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

      {/* Leak repair + supplementary + other services + why us + FAQ + CTA */}
      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Plumbing Leak Repair to Protect Your Home</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Leaks can go unnoticed until they cause serious structural issues and costly repairs —
            homes with leaks can waste tens of thousands of gallons of water. Our team uses advanced
            detection tools to find the source fast, preventing water damage and mold growth. Whether
            the leak is under your slab, behind drywall, or hidden in a ceiling, we{' '}
            <Link href="/services/leak-detection" className="font-semibold text-pink-600 underline hover:text-pink-700">
              locate it accurately
            </Link>{' '}
            and repair it efficiently.
          </p>

          <h2 className="mt-10 section-title text-brand-700">Our Supplementary Plumbing Solutions</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We also help with fixture replacements, water-pressure balancing, and preventive
            maintenance to extend the life of your entire plumbing system. Routine maintenance visits
            from our licensed plumbers catch small issues before they become major repairs — saving
            you time, stress, and money in the long run.
          </p>

          <h2 className="mt-10 section-title text-brand-700">Other Plumbing Services We Offer</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Beyond general repairs, we handle more complex jobs that call for specialized expertise,
            including:
          </p>
          <ul className="mt-4 space-y-2">
            {otherServices.map((o) => (
              <li key={o.label} className="flex items-start gap-2.5 text-[17px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500" />
                {o.href ? (
                  <Link href={o.href} className="hover:text-pink-600">
                    {o.label}
                  </Link>
                ) : (
                  o.label
                )}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Fluctuating water pressure, strange odors, or higher-than-usual water bills can all be
            signs of a deeper problem. Our experts inspect your whole system, explain the cause, and
            offer the most cost-effective solution — whether that is a quick fix or a partial line
            installation. From appliance repair to a leaking main line, {site.name} has you covered
            with friendly, knowledgeable service.
          </p>

          {/* Why us */}
          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Plumbing Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We look for why the pipe failed, not just where it is dripping. Fixing the cause keeps a minor leak from turning into a second visit, and you hear what we found before any work starts.
          </p>

        </div>
      </section>

      <ServicePhotoBand />

      <section className="py-14">
        <div className="container-page max-w-4xl">
          {/* FAQ */}
          <h2 className="mt-12 section-title text-brand-700">Plumbing Repair FAQs</h2>
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
              Schedule Your Plumbing Repair Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              Fast scheduling, clear communication, and repairs built to last. Call now or request a
              estimate.
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

      <ServiceSections service="plumbing-repair">
        {/* Plumbing repair by neighborhood — links DOWN to location pages */}
        <section className="py-16">
          <div className="container-page max-w-4xl">
            <h2 className="section-title text-brand-700">Plumbing repair by neighborhood</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
              We handle plumbing repairs across {site.serviceArea} —{' '}
              {locations.filter((l) => plumbingRepairCopy[l.slug]).length} neighborhoods and counting. Find
              yours below for local detail on the plumbing issues common to homes in your area.
            </p>
            <NeighborhoodLinks copy={plumbingRepairCopy} basePath="/services/plumbing-repair" linkPrefix="Plumbing repair" />
          </div>
        </section>
      </ServiceSections>
    </>
  );
}
