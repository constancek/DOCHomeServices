import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Electricity Disconnection (Duke Energy)',
  description: `Temporary power disconnect and reconnect across ${site.serviceArea}. Duke Energy pulls the meter — ${site.name}'s licensed electricians handle the panel, mast, meter base, permit, and inspection.`,
  alternates: { canonical: '/services/electricity-disconnection' },
  openGraph: {
    type: 'website',
    title: `Electricity Disconnection (Duke Energy) | ${site.name}`,
    description: `Duke Energy pulls the meter. We do the panel, mast, and meter base work, pull the permit, and get you signed off for reconnect. Serving ${site.serviceArea}.`,
    url: `${site.url}/services/electricity-disconnection/`,
  },
};

const whenYouNeedIt = [
  { lead: 'Panel Replacement or Service Upgrade', text: 'Going from 100 to 200 amps, or replacing a failed or recalled panel, means the service conductors come off first.' },
  { lead: 'Service Mast or Weatherhead Work', text: 'The mast, riser, and entrance cable are yours, and they cannot be touched with the service energised.' },
  { lead: 'Meter Base Replacement', text: 'A burned, cracked, or pulled-away meter socket is homeowner-owned equipment and needs the meter out to replace.' },
  { lead: 'Whole-Home Rewiring', text: 'Large rewiring projects usually need the service dropped at least once during the work.' },
  { lead: 'Meter or Service Relocation', text: 'Moving the service entrance for an addition, siding, or a new driveway is a coordinated utility job.' },
  { lead: 'A Failed Inspection or Red Tag', text: 'If the county or Duke has red-tagged your service, power stays off until a licensed electrician corrects it.' },
];

const whatWeHandle = [
  'Scheduling the Duke Energy disconnect and reconnect',
  'Permits with your city or county building department',
  'Panel, meter base, mast, and service entrance work',
  'Grounding and bonding brought up to current code',
  'Meeting the inspector so the reconnect is not delayed',
  'Flat-rate pricing approved before any work starts',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Service-entrance work is permitted, inspected work. We are licensed to do it.' },
  { icon: 'badge' as const, title: 'We Make the Utility Calls', text: 'We book the disconnect and the reconnect so the two ends of the job line up.' },
  { icon: 'check' as const, title: 'Inspection-Ready', text: 'We schedule the inspector alongside the work, not after it.' },
  { icon: 'house' as const, title: 'Family-Owned Since 2009', text: `${site.yearsExperience} years on Cincinnati homes, with crews who live here.` },
];

const faqs = [
  {
    q: 'Who disconnects the power, you or Duke Energy?',
    a: 'Duke Energy. They own the service line to your house and the meter, and only their technician pulls or locks a meter. Everything else at that connection — the weatherhead, the riser, the mast, the meter box, the attachment hardware, and the panel inside — is homeowner-owned, and that is the equipment we work on.',
  },
  {
    q: 'How long will my power be off?',
    a: 'Most panel replacements are a single day, with power off for the working part of it. Mast and meter base repairs are often shorter. What extends a job is not the wiring, it is the inspection, which is why we book the inspector before we start.',
  },
  {
    q: 'Do I need a permit?',
    a: 'For a panel replacement, service upgrade, mast, or meter base, yes. Duke Energy will not reconnect customer-owned equipment that has been worked on until the local inspector has signed it off. We pull the permit and meet the inspector as part of the job.',
  },
  {
    q: 'Can you do the work without the power off?',
    a: 'Some of it. Adding circuits inside an existing panel, or replacing devices, can often be done without involving the utility. Anything that touches the service conductors, the meter socket, or the mast cannot. We tell you which category your job falls in before you commit to anything.',
  },
  {
    q: 'What is a temporary power disconnect?',
    a: 'It is Duke Energy’s term for pulling the meter so work can be done safely, then restoring it afterwards. It is a normal, scheduled service rather than an emergency one, and it is what most panel and mast jobs run through.',
  },
  {
    q: 'What does it cost?',
    a: 'The electrical work is quoted flat-rate in writing before we start. Duke Energy may charge separately for the disconnect or reconnect visit. We separate the two on the estimate so you know which is ours and which is the utility’s.',
  },
  {
    q: 'Do I need to be home?',
    a: 'Someone should be there to give Duke access to the meter and to be present at the start of our work. Once the panel is being built out you are welcome to get on with your day.',
  },
  {
    q: 'What happens to my fridge and freezer?',
    a: 'Plan for the food. On a single-day panel job, an unopened fridge holds for the working hours without much trouble, and a full freezer holds longer. If you are on well water, medical equipment, or a sump pump in a wet week, tell us at the estimate and we will plan around it.',
  },
  {
    q: 'My power is out. Do I need this service?',
    a: 'Probably not. If the outage covers your street, that is a utility problem and Duke is already working on it. This service is for planned work, or for the case where the damage is on your own equipment. Our storm outage page covers how to tell the difference.',
  },
  {
    q: 'Can you handle an underground service?',
    a: 'Yes. Underground services are coordinated the same way, though Duke schedules them differently to overhead work and there is usually more lead time. Start the conversation early if you are working to a deadline.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Electricity Disconnection',
  description:
    'Coordination of Duke Energy temporary power disconnect and reconnect, with licensed panel replacement, meter base, service mast, permitting, and inspection work on the customer side of the meter.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Electrical', item: `${site.url}/services/electrical` },
    { '@type': 'ListItem', position: 4, name: 'Electricity Disconnection', item: `${site.url}/services/electricity-disconnection` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ElectricityDisconnectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Electricity Disconnection in ${site.serviceArea}`}
        description="Duke Energy pulls the meter. We handle the panel, the mast, the meter base, the permit, and the inspection that gets your power turned back on."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Electricity Disconnection' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Need the power dropped to get work done?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/panel-hero.jpg)' }} role="img" aria-label="Electrical panel and service equipment in a home" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Electricity Disconnection and Reconnection
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            The meter is the property line. Duke Energy installs and maintains the service line to your home
            and the meter itself. The weatherhead, the riser, the mast, the meter box, the attachment
            hardware, and everything inside the panel are yours. Duke will not work on your equipment, and
            you should not have anyone but a licensed electrician working on it either.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            That means any job touching the service entrance runs on two tracks. Duke schedules a temporary
            disconnect and pulls the meter. {site.name} does the work, pulls the permit, and meets the
            inspector. Once the inspector signs off, Duke comes back and reconnects.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Where these jobs go wrong is sequencing. An electrician who does the work first and thinks about
            the permit second leaves you sitting in the dark waiting on an inspector who is booked out three
            days. We book the disconnect, the crew, and the inspection as one schedule, which is the whole
            reason this is a service on its own rather than a line item.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/panel-signs.jpg)' }} role="img" aria-label="Electrician working inside an electrical panel" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              When You Need a Disconnect
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Not every electrical job needs the meter pulled. These ones do:
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
              Licensed Service Work Across {site.serviceArea}
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
              The disconnect is the easy part. What determines whether your power comes back on the same day
              is everything around it, and that is what we manage.
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
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/inspect-hero.jpg)' }} role="img" aria-label="Electrical inspection of service equipment" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">How a Temporary Disconnect Runs</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Four steps, and the order matters more than the speed.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">1. Assessment and Permit</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We look at the panel, the service entrance, the grounding, and the load you actually use. That
            tells us the scope, which tells us the permit. If your job turns out to be a straight{' '}
            <Link href="/services/electrical-panel-replacement" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              panel replacement
            </Link>{' '}
            rather than a full service upgrade, that is a meaningfully cheaper day and we will tell you.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">2. Duke Energy Pulls the Meter</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We schedule the disconnect with the utility and give them access details. Duke calls this a
            temporary power disconnect, and their own guidance on it is on the{' '}
            <a href="https://www.duke-energy.com/home/start-stop-move/temporary-power-disconnect" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Duke Energy temporary power disconnect page
            </a>
            .
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">3. The Work</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Old equipment out, new equipment in, circuits labelled properly rather than in the previous
            owner&rsquo;s handwriting. Grounding and bonding get brought to current code even when the
            original scope did not mention them, because an inspector will look at them and because they are
            what make the rest of the system safe. Where the{' '}
            <Link href="/services/electrical-mast-repair" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              service mast
            </Link>{' '}
            is involved, we reseal the roof penetration while we are up there.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">4. Inspection, Then Reconnect</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The local inspector signs off, Duke restores the meter, and we energise circuit by circuit rather
            than throwing the main and hoping. Then you get a labelled panel and a walkthrough. If we found
            anything worth watching — aluminium branch wiring, an overloaded subpanel, knob and tube in a
            corner of the attic — it goes in writing, with a note on whether it needs a{' '}
            <Link href="/services/home-rewiring" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              rewire
            </Link>{' '}
            or just an eye on it.
          </p>

          <h2 className="mt-12 section-title text-brand-700">When You Should Not Call Us</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If the whole street is dark, this is not your job to pay for.</span>{' '}
            Look out the window. If your neighbours are out too, the fault is on the utility side and Duke is
            already dispatching. Report it and wait. An electrician cannot restore a line that Duke owns, and
            you should not be charged a call-out fee to be told that.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If only your house is dark, that is different.</span>{' '}
            It usually means the damage is on your own equipment, and Duke will not reconnect until a licensed
            electrician repairs it. Our{' '}
            <Link href="/services/storm-electricity-outage" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              storm electricity outage
            </Link>{' '}
            page covers exactly how to tell the two apart, including what to look at before you call anyone.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">And if you only need a new circuit, skip all of this.</span>{' '}
            Adding a dedicated line or replacing devices rarely needs the meter pulled. Ask for that work by
            name and you will pay for a normal electrical visit rather than a coordinated utility job.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Homeowners Call {site.name}</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Family-owned since {site.founded}, with roughly {site.reviewCount.toLocaleString()} reviews
            averaging {site.rating}. Service-entrance work is the part of the trade where shortcuts show up
            years later in someone else&rsquo;s house fire, so we do it the long way every time.
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
            Often booked alongside an{' '}
            <Link href="/services/electrical-inspections" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              electrical inspection
            </Link>{' '}
            when a home is changing hands.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Electricity Disconnection FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Your Disconnect</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Tell us what the power needs to come off for and we will handle the Duke Energy scheduling, the
              permit, and the inspection. Serving {site.serviceArea}.
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
