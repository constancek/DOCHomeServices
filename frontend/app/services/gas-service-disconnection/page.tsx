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
  description: `Gas shut off by Duke Energy? They will not restore it until the fault on your side of the meter is repaired and the piping passes a pressure test. ${site.name} does that work across ${site.serviceArea}.`,
  alternates: { canonical: '/services/gas-service-disconnection' },
  openGraph: {
    type: 'website',
    title: `Gas Service Disconnection (Duke Energy) | ${site.name}`,
    description: `Duke shut your gas off and will not turn it back on. Here is why, and what has to happen first. Serving ${site.serviceArea}.`,
    url: `${site.url}/services/gas-service-disconnection/`,
  },
};

const whyItWasShutOff = [
  { lead: 'A Leak Was Found', text: 'Duke smells or detects gas at the meter or inside, shuts it down, and leaves. Finding and repairing that leak is the job.' },
  { lead: 'A Red Tag on an Appliance', text: 'A cracked heat exchanger, a bad flue, or an unsafe connector gets tagged and the gas comes off until it is corrected.' },
  { lead: 'Failed Inspection', text: 'Work that did not pass, or piping that was never permitted, keeps the meter locked until it is brought up to code.' },
  { lead: 'The House Sat Empty', text: 'Vacant, seasonal, or newly purchased homes usually need the piping tested before Duke will turn service back on.' },
  { lead: 'Physical Damage', text: 'A vehicle into the meter, a contractor through a buried line, or storm damage at the service.' },
  { lead: 'Line Work in the Street', text: 'Duke replaces a main, everyone comes back on, and the houses with a pre-existing fault do not.' },
];

const whatWeHandle = [
  'Same-day diagnosis of why the gas came off',
  'Leak location and repair on house-side piping',
  'The pressure test Duke requires before restoring',
  'Repair or replacement of red-tagged appliances and connectors',
  'Permits and the inspection where one is required',
  'Relighting and testing every appliance once gas is back',
];

const whyUs = [
  { icon: 'clock' as const, title: 'We Move Fast on These', text: 'A house with no gas has no hot water and, in winter, no heat. It gets treated that way.' },
  { icon: 'shield' as const, title: 'Licensed Gas Plumbers', text: 'Only a licensed trade can do the repair Duke is waiting on.' },
  { icon: 'badge' as const, title: 'We Deal With the Utility', text: 'We handle the test, the paperwork, and the reconnect scheduling so you are not on hold.' },
  { icon: 'house' as const, title: 'Family-Owned Since 2009', text: `${site.yearsExperience} years on Cincinnati homes, with crews who live here.` },
];

const faqs = [
  {
    q: 'Duke shut my gas off. How do I get it back on?',
    a: 'The fault that caused the shutoff has to be found and repaired by a licensed plumber, the house piping has to hold a pressure test, and where the work was permitted an inspector has to sign it off. Only then will Duke restore service. We do all of that and schedule the reconnect for you.',
  },
  {
    q: 'Why will Duke not just turn it back on?',
    a: 'Because they stop at the meter. Duke owns the service line from the main to the meter and the meter itself. Everything past it is yours. They will not put gas into piping they do not own and cannot vouch for, and no amount of asking changes that.',
  },
  {
    q: 'What is a pressure test?',
    a: 'Your house piping is isolated, pressurised, and watched on a gauge to confirm it holds. If the needle drops, there is a leak, and we chase it until it does not. It is the single most common thing standing between a shut-off house and gas being restored.',
  },
  {
    q: 'How long does it take?',
    a: 'A straightforward leak repair and test is often the same day. What extends it is the inspection, which depends on your local building department rather than on us, and any appliance that has to be replaced rather than repaired. We tell you which of those you are looking at after the diagnosis, not before.',
  },
  {
    q: 'My gas was shut off for non-payment. Can you help?',
    a: 'No, and you should not pay anyone who says they can. That is a billing matter between you and Duke Energy, there is nothing for a plumber to repair, and calling one only adds a diagnostic fee to what you already owe. Call Duke and ask about payment arrangements or assistance programmes.',
  },
  {
    q: 'The house has been empty. Why does anything need doing?',
    a: 'Piping that has sat unused, especially in an older home, has a habit of failing a test the first time anyone checks. Duke will not restore service to a property that has been off for an extended period without confirmation the system still holds. It is a formality when the piping is sound and a rescue when it is not.',
  },
  {
    q: 'Can I turn the valve back on myself?',
    a: 'No. If Duke locked the meter, breaking that lock is both illegal and dangerous. If the gas came off because of a leak, restoring it yourself puts gas into a system that is known to be leaking, into a house you are standing in.',
  },
  {
    q: 'The gas is already off and I can still smell it. What do I do?',
    a: 'Leave on foot. Do not flip switches, unplug anything, or use your phone until you are outside. Call 911 and Duke Energy from there. Gas can remain in the piping after the meter is closed, and a smell with the service already off means something is still wrong.',
  },
  {
    q: 'Do I need a permit?',
    a: 'For most repairs to gas piping, yes, and it needs an inspection. We pull it as part of the job. Skipping the permit does not speed anything up, because Duke will be looking for the sign-off before restoring service.',
  },
  {
    q: 'Will Duke relight my furnace and water heater?',
    a: 'Usually not. Duke restores gas at the meter and leaves. Relighting pilots, checking burners, and confirming the furnace and water heater run safely is our work, and it is part of the job rather than a second trip you pay for.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Gas Service Restoration After Disconnection',
  description:
    'Diagnosis and repair of the house-side fault behind a Duke Energy gas shutoff, including leak location and repair, the pressure test required before restoration, permitting, inspection, and appliance relighting.',
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
        description="Duke shut your gas off and will not turn it back on. Here is why, what has to happen first, and how quickly we can get it done."
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
            Gas off and no hot water? Call now.
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/gasline-hero.jpg)' }} role="img" aria-label="Residential natural gas meter with service piping" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Your Gas Is Off. Here Is What Happens Next.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Duke Energy will not restore your gas until the problem on your side of the meter is repaired
            by a licensed plumber and the piping proves it holds pressure. That is the whole answer. Nobody
            at the utility can waive it for you, and calling them back a third time will not change it.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            The split is simple once someone explains it. Duke owns the service line from the street main to
            the meter, and the meter itself. Everything downstream of that meter — the piping through the
            basement, the run to the furnace, the connector behind the range — belongs to you. When they shut
            you off, it is almost always because they found something wrong on your side, and your side is
            the part they are not allowed to touch.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            So the sequence is fixed: we find the fault, repair it, pressure-test the system, get it
            inspected where a permit applies, and then Duke comes back and turns the meter on. We handle
            every step of that, including the scheduling, so you are not trying to project-manage a utility
            with no hot water in the house.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/gasline-signs.jpg)' }} role="img" aria-label="Plumber testing residential gas piping" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Why Your Gas Was Shut Off
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Most people are told very little at the door. These are the reasons we actually turn up to:
            </p>
            <ul className="mt-4 space-y-2">
              {whyItWasShutOff.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
              Licensed Gas Repair Across {site.serviceArea}
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
              Everything between the shutoff and the relight, quoted flat-rate before we start so you know
              what getting your gas back actually costs.
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
          <h2 className="section-title text-brand-700">What To Do Right Now</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If you can smell gas, stop reading and get out.</span>{' '}
            Leave on foot, do not touch light switches or your phone until you are outside, and call 911 and
            Duke Energy from there. A smell with the service already off means gas is still in the system.
            That is an emergency, not a plumbing appointment.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If there is no smell, leave everything alone.</span>{' '}
            Do not touch the meter, do not cut a lock, and do not try to relight anything. Nothing you do at
            the meter helps, and tampering with it turns a repair into a much larger problem.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">Then find out what you were actually told.</span> If
            Duke left a tag, a door hanger, or a note, keep it. It usually names the reason, and that saves
            us diagnostic time and saves you money. If you have nothing, that is fine too, we start from the
            meter and work in.
          </p>

          <h2 className="mt-12 section-title text-brand-700">How We Get Your Gas Restored</h2>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">1. Find the Fault</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We start at the meter and work through the system, checking joints, connectors, and appliances
            for the reason it came off. Sometimes it is a single failed flex connector behind a range.
            Sometimes it is a corroded run under the floor that needs a{' '}
            <Link href="/services/gas-line-repair-replacement" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              gas line replacement
            </Link>
            . You get told which before any work is authorised.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">2. Repair It</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Piping, connectors, valves, or the appliance that got tagged. Where an old{' '}
            <Link href="/services/water-heater-repair" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              water heater
            </Link>{' '}
            or furnace is what failed, we lay out repair against replacement with both numbers rather than
            steering you to the bigger invoice.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">3. Pressure-Test the System</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The piping is isolated, brought up to pressure, and watched. It either holds or it does not. This
            is the test Duke is waiting on, and it is the reason a house can be repaired and still not get
            gas back the same afternoon — a system that fails the test gets chased until it passes.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">4. Inspection, Reconnect, Relight</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Where the work was permitted, the inspector signs off. We give Duke what they need and schedule
            the reconnect. Once gas is at the meter we relight every appliance, confirm the furnace and water
            heater run properly, and show you where your shutoff valve is before we leave.
          </p>

          <h2 className="mt-12 section-title text-brand-700">When You Should Not Call Us</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If your gas was cut off for non-payment, we cannot help you.</span>{' '}
            There is nothing broken, so there is nothing for a plumber to repair. Paying a licensed trade to
            come and confirm that only adds a diagnostic fee to a bill you are already struggling with. Call
            Duke Energy, ask about payment arrangements, and ask what assistance programmes you qualify for.
            Ohio customers can also check their rights through the{' '}
            <a href="https://puco.ohio.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Public Utilities Commission of Ohio
            </a>
            . Anyone who offers to get your gas back on without addressing the bill is taking your money.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If you are just starting service in your name, that is a phone call.</span>{' '}
            Moving into a house where the gas is already sound needs an account, not a plumber. You can set
            that up through{' '}
            <a href="https://www.duke-energy.com/my-account/start-service" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Duke Energy directly
            </a>
            . We only become necessary when they test the property and it does not pass.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Homeowners Call {site.name}</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Family-owned since {site.founded}, with roughly {site.reviewCount.toLocaleString()} reviews
            averaging {site.rating}. Most people who call us about a shutoff have already spent a day being
            passed between the utility and the internet. The first thing we do is tell you plainly what is
            wrong and what it takes to fix it.
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
            Related work we often end up doing on the same visit:{' '}
            <Link href="/services/leak-detection" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              leak detection
            </Link>
            ,{' '}
            <Link href="/services/water-heater-installation" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              water heater replacement
            </Link>
            , and{' '}
            <Link href="/services/emergency-plumbing" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              emergency plumbing
            </Link>
            .
          </p>

          <h2 className="mt-12 section-title text-brand-700">Gas Shutoff FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-sm leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Get Your Gas Back On</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-brand-100">
              Tell us what Duke told you and we will tell you what it takes to fix it. Diagnosis, repair,
              pressure test, and reconnect across {site.serviceArea}.
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
