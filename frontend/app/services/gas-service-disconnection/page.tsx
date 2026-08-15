import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Gas Service Disconnection (Duke Energy)',
  description: `Gas service disconnection and reconnection across ${site.serviceArea}. Duke Energy pulls the meter — ${site.name}'s licensed plumbers cap, test, repair, and relight everything on your side of it.`,
  alternates: { canonical: '/services/gas-service-disconnection' },
  openGraph: {
    type: 'website',
    title: `Gas Service Disconnection (Duke Energy) | ${site.name}`,
    description: `Duke Energy pulls the meter. We handle the piping, the permit, the inspection, and the relight. Serving ${site.serviceArea}.`,
    url: `${site.url}/services/gas-service-disconnection/`,
  },
};

const whenYouNeedIt = [
  { lead: 'Water Heater or Furnace Replacement', text: 'The gas has to come off before the old unit comes out, and the new connection has to be tested before it goes back on.' },
  { lead: 'Gas Line Repair or Replacement', text: 'Corroded, undersized, or leaking pipe downstream of the meter cannot be worked on live.' },
  { lead: 'Remodels and Demolition', text: 'Moving a kitchen, taking out a wall, or removing an old gas appliance means the line gets capped properly, not stuffed with a rag.' },
  { lead: 'Meter Relocation', text: 'If the meter is in the way of an addition or a deck, Duke moves the meter and we re-run the piping to your appliances.' },
  { lead: 'A Failed Pressure Test', text: 'If your system will not hold pressure, the gas stays off until the leak is found and repaired.' },
  { lead: 'Suspected Leak', text: 'A gas smell is an emergency first and a plumbing job second. Get out, then call.' },
];

const whatWeHandle = [
  'Scheduling the Duke Energy disconnect and reconnect',
  'Capping and pressure-testing the house-side piping',
  'Repair, replacement, or re-routing of gas lines',
  'Permits and the local inspection where required',
  'Relighting and testing every appliance before we leave',
  'Flat-rate pricing approved before any work starts',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Gas Plumbers', text: 'Gas piping is permitted, inspected work. We are licensed to do it.' },
  { icon: 'badge' as const, title: 'We Make the Utility Calls', text: 'You do not sit on hold with Duke. We schedule the disconnect and the reconnect.' },
  { icon: 'check' as const, title: 'Tested Before Reconnect', text: 'Every joint pressure-tested and every appliance relit and checked.' },
  { icon: 'house' as const, title: 'Family-Owned Since 2009', text: `${site.yearsExperience} years working on Cincinnati homes, not a franchise call centre.` },
];

const faqs = [
  {
    q: 'Who actually shuts the gas off, you or Duke Energy?',
    a: 'Duke Energy owns the service line from the main to the meter, and the meter itself. Only Duke pulls or locks a meter. Everything from the meter outlet to your appliances is yours, and that is the part we work on. When a job needs the meter off, we schedule it with Duke on your behalf.',
  },
  {
    q: 'How long is the gas off?',
    a: 'For a straightforward water heater or furnace swap, usually part of a single day. Longer jobs like a full re-pipe or a meter relocation depend on Duke Energy’s scheduling and on the inspection, which is why we book the disconnect and the inspector before we start rather than after.',
  },
  {
    q: 'Can I just turn the gas off at the meter myself?',
    a: 'You can close the shutoff valve in an emergency, and you should if you smell gas. What you should not do is turn it back on. Restoring gas without a pressure test and a relight is how appliances get left leaking or with pilots out. Duke locks the meter for a reason.',
  },
  {
    q: 'I smell gas right now. What do I do?',
    a: 'Leave the house on foot. Do not flip switches, unplug anything, or use your phone inside. From outside, call 911 and Duke Energy’s emergency line. Call us after the utility has made the property safe, not before.',
  },
  {
    q: 'Do I need a permit to cap a gas line?',
    a: 'In most of our service area, yes, and it needs an inspection. We pull the permit as part of the job. A capped line that was never inspected is a problem that surfaces later, usually during a home sale.',
  },
  {
    q: 'What does a gas disconnection cost?',
    a: 'It depends on what is being disconnected and what happens afterwards, so we quote it flat-rate in writing before anything starts. Duke Energy may also charge its own fee for a disconnect or reconnect visit. We tell you which costs are ours and which are theirs.',
  },
  {
    q: 'Do I have to be home?',
    a: 'For the Duke Energy visit, yes, someone needs to provide access to the meter. For our portion, someone over 18 should be on site at the start and at the relight so we can walk you through what was done.',
  },
  {
    q: 'Will Duke Energy relight my appliances?',
    a: 'Not usually. Duke restores gas to the meter. Relighting pilots, checking burners, and confirming the water heater and furnace run correctly is our work, and it is included in the job rather than billed as an extra trip.',
  },
  {
    q: 'I am moving out. Do I need a plumber?',
    a: 'No. Closing an account is a phone call to Duke Energy and it does not cost you anything. If a company offers to disconnect your gas because you are moving, you are being sold something you do not need.',
  },
  {
    q: 'Can you move my gas meter?',
    a: 'Duke moves the meter, we handle the piping on either side of the new location. It is a coordinated job and it takes planning, so start the conversation well before the deck or addition is framed.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Gas Service Disconnection',
  description:
    'Coordination of Duke Energy gas service disconnection and reconnection, with licensed capping, pressure testing, gas line repair, permitting, and appliance relighting on the customer side of the meter.',
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
    { '@type': 'ListItem', position: 4, name: 'Gas Service Disconnection', item: `${site.url}/services/gas-service-disconnection` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function GasServiceDisconnectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Plumbing"
        title={`Gas Service Disconnection in ${site.serviceArea}`}
        description="Duke Energy pulls the meter. We handle everything on your side of it — capping, testing, repairs, the permit, and the relight."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Plumbing', href: '/services/plumbing' },
          { label: 'Gas Service Disconnection' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Need the gas off to get work done?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/gasline-hero.jpg)' }} role="img" aria-label="Residential natural gas meter and service piping" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Gas Service Disconnection, Handled End to End
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            There is a line at the gas meter, and it decides who does what. Duke Energy owns the service
            line running from the street main to the meter, and it owns the meter. Everything downstream of
            that meter — the piping through your basement, the run to the furnace, the flex connector behind
            the range — belongs to you. That is the side licensed plumbers work on.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            So when a job needs the gas off, two parties are involved. Duke sends a technician to pull or
            lock the meter. {site.name} does the actual work: capping the line, pressure-testing it,
            replacing what needs replacing, pulling the permit, meeting the inspector, and relighting your
            appliances once gas is restored.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            The part homeowners find frustrating is the coordination. You call the utility, they give you a
            window, the plumber gives you a different window, and nothing lines up. We schedule the
            disconnect and the reconnect around our own crew so the gas is off for the length of the job
            rather than the length of a week.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/gasline-signs.jpg)' }} role="img" aria-label="Plumber working on residential gas piping" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              When You Need a Gas Disconnect
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Most homeowners never think about the gas meter until a job forces the issue. These are the
              jobs that do:
            </p>
            <ul className="mt-4 space-y-2">
              {whenYouNeedIt.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
              Licensed Gas Work Across {site.serviceArea}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              What We Handle
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              A gas disconnect is rarely the job. It is the step that lets the real job happen. We treat it
              that way and quote the whole sequence up front, so the price you approve covers the
              coordination, the work, and getting your hot water back.
            </p>
            <ul className="mt-4 space-y-2">
              {whatWeHandle.map((w) => (
                <li key={w} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-400" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/wh-hero.jpg)' }} role="img" aria-label="Water heater connected to household gas piping" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">How the Disconnect Actually Works</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Four steps, in this order, every time.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">1. We Scope the Job and Pull the Permit</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Before anyone calls the utility, we look at what is actually being done — the appliance, the
            piping, the venting, the shutoff locations. That determines whether the meter needs to come off
            at all. Plenty of{' '}
            <Link href="/services/gas-line-repair-replacement" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              gas line repairs
            </Link>{' '}
            can be done at an isolation valve without involving Duke Energy, and if yours is one of them we
            will say so.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">2. Duke Energy Disconnects</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We book the disconnect and give Duke the access details. Their technician shuts the meter off and
            locks it. Details on the utility side of this — including what Duke charges and how far ahead
            they schedule — are on the{' '}
            <a href="https://www.duke-energy.com/home/natural-gas" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Duke Energy natural gas pages
            </a>
            .
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">3. We Do the Work and Test It</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Old appliance out, new piping in, joints made up and pressure-tested. A gas system that will not
            hold pressure does not get signed off, and we would rather find that on a gauge in the basement
            than have you find it by smell at 2am. If the test fails we chase the leak until it passes.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">4. Reconnect, Relight, Walk Through</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Once the inspector signs off, Duke restores gas at the meter. We relight every appliance, confirm
            the{' '}
            <Link href="/services/water-heater-installation" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              water heater
            </Link>{' '}
            and furnace fire and run correctly, and show you where the shutoff is before we leave. That last
            part takes thirty seconds and it is the thing people are glad they know later.
          </p>

          <h2 className="mt-12 section-title text-brand-700">When You Should Not Call Us</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Two situations where hiring a plumber is the wrong move.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If you smell gas, this is not a plumbing call.</span>{' '}
            Get everyone out of the house on foot. Do not touch light switches, garage door openers, or your
            phone until you are outside. Then call 911 and Duke Energy&rsquo;s emergency line. The utility
            makes the property safe first. We come afterwards to find and repair whatever failed. Calling a
            plumber instead of the gas company costs you the one thing you cannot get back, which is time.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If you are just closing an account, call Duke.</span>{' '}
            Moving out, selling, or shutting off service for the season is a phone call to the utility and it
            is free. You can do it yourself through{' '}
            <a href="https://www.duke-energy.com/my-account/stop-service" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Duke Energy&rsquo;s stop service page
            </a>
            . No plumber needs to be involved, and anyone telling you otherwise is selling you a truck roll
            you do not need. Ohio homeowners can also read their utility rights through the{' '}
            <a href="https://puco.ohio.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Public Utilities Commission of Ohio
            </a>
            .
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Homeowners Call {site.name}</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We have been doing gas work on Cincinnati homes since {site.founded}, across roughly{' '}
            {site.reviewCount.toLocaleString()} reviews averaging {site.rating}. Gas is the part of the trade
            with the least room for improvisation, so the process above does not change based on how busy we
            are.
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

          <p className="mt-6 text-[17px] leading-relaxed text-ink/75">
            Related work we handle on the same visit:{' '}
            <Link href="/services/tankless-water-heater" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              tankless conversions
            </Link>
            ,{' '}
            <Link href="/services/plumbing-repair" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              general plumbing repair
            </Link>
            , and{' '}
            <Link href="/services/emergency-plumbing" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              emergency plumbing
            </Link>{' '}
            when something has already gone wrong.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Gas Service Disconnection FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Book Your Gas Disconnect</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Tell us what the gas needs to come off for and we will handle the Duke Energy scheduling, the
              permit, and the relight. Serving {site.serviceArea}.
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

      <PageSections />
    </>
  );
}
