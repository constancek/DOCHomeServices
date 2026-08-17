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
import { electricityDisconnectionCopy } from '@/content/location-copy/electricity-disconnection';

export const metadata: Metadata = {
  title: 'Electricity Disconnection (Duke Energy)',
  description: `Power disconnected and Duke Energy will not reconnect? They cannot until the homeowner-owned equipment is repaired and inspected. ${site.name}'s licensed electricians do that work across ${site.serviceArea}.`,
  alternates: { canonical: '/services/electricity-disconnection' },
  openGraph: {
    type: 'website',
    title: `Electricity Disconnection (Duke Energy) | ${site.name}`,
    description: `Duke will not reconnect your power until a licensed electrician repairs your equipment and an inspector signs it off. Serving ${site.serviceArea}.`,
    url: `${site.url}/services/electricity-disconnection/`,
  },
};

const whyItWasDisconnected = [
  { lead: 'Damaged Meter Base or Mast', text: 'A pulled-away meter box or a bent mast is homeowner-owned, and Duke will not reconnect to it.' },
  { lead: 'Burned or Overheating Meter Socket', text: 'Scorch marks at the socket mean heat damage. That equipment does not go back into service as it is.' },
  { lead: 'A Red Tag on the Service', text: 'An unsafe panel, missing grounding, or exposed conductors gets tagged and the power stays off.' },
  { lead: 'Failed Inspection', text: 'Work that did not pass, or that was never permitted, keeps the meter out until it is corrected.' },
  { lead: 'The Property Sat Vacant', text: 'Homes that have been off for a long stretch often need the service checked before it is energised.' },
  { lead: 'Storm or Impact Damage', text: 'A limb through the drop or a vehicle into the service leaves damage on your side of the meter.' },
];

const whatWeHandle = [
  'Same-day diagnosis of why the power is off',
  'Meter base, mast, weatherhead, and entrance cable repair',
  'Panel replacement where the panel is what failed',
  'Grounding and bonding corrected to current code',
  'Permits and meeting the inspector so reconnect is not delayed',
  'Energising circuit by circuit once Duke restores the meter',
];

const whyUs = [
  { icon: 'clock' as const, title: 'We Move Fast on These', text: 'No power means no heat, no fridge, no sump pump. It gets treated as the emergency it is.' },
  { icon: 'shield' as const, title: 'Licensed Electricians', text: 'Only a licensed trade can do the repair Duke is waiting on.' },
  { icon: 'badge' as const, title: 'We Handle the Inspection', text: 'We pull the permit and meet the inspector, which is what usually holds these up.' },
  { icon: 'house' as const, title: 'Family-Owned Since 2009', text: `${site.yearsExperience} years on Cincinnati homes, with crews who live here.` },
];

const faqs = [
  {
    q: 'Duke disconnected my power. How do I get it back?',
    a: 'A licensed electrician has to repair whatever is wrong with your equipment, a permit is pulled where the work requires one, and a local inspector signs it off. Duke then reconnects. We handle the repair, the permit, the inspection, and the scheduling with the utility.',
  },
  {
    q: 'Duke says I need an electrician before they will reconnect. What does that mean?',
    a: 'It means the damage is on equipment you own rather than equipment they own. Duke installs and maintains the service line and the meter. The weatherhead, riser, mast, attachment hardware, meter box, and everything in the panel are yours. They will not energise your equipment until someone licensed has repaired it.',
  },
  {
    q: 'The meter has Duke’s name on it. How is the meter box mine?',
    a: 'The meter is theirs, the box it sits in is not. It surprises nearly everyone. It is also why this repair lands on the homeowner and why your insurance, rather than the utility, is usually the one paying for storm damage to it.',
  },
  {
    q: 'How fast can you get me reconnected?',
    a: 'The repair itself is often a single day. The variable is the inspection, which runs on your local building department’s schedule, not ours. We book the inspector at the same time as the work rather than after it, which is the single biggest thing that shortens the wait.',
  },
  {
    q: 'Do I really need a permit and an inspection?',
    a: 'For meter base, mast, service entrance, or panel work, yes. It is not optional and it is not something to skip in the name of speed, because Duke will be looking for the sign-off before they put the meter back in. Skipping it guarantees a longer outage, not a shorter one.',
  },
  {
    q: 'Only half my house has power. Is that the same problem?',
    a: 'Usually it means one leg of the service has been lost, either at the drop or inside the panel. It is a related fault and it is worth diagnosing quickly, because running a house on one leg puts odd voltages across anything with a motor or a control board.',
  },
  {
    q: 'Can I run a generator in the meantime?',
    a: 'A portable generator outside, well away from windows and doors, with appliances plugged directly into it, is fine. Never feed one into a wall outlet or the panel without a proper transfer switch. That pushes voltage back onto the utility line and can kill a lineworker.',
  },
  {
    q: 'The house has been vacant. Why will they not just turn it on?',
    a: 'A service that has been dead for a long period gets treated with more caution, particularly on older properties where the panel or the grounding may not meet anything close to current code. Often a short inspection is all it takes. Sometimes it turns into a panel replacement, and we will tell you which after looking.',
  },
  {
    q: 'What does it cost?',
    a: 'It depends entirely on what failed — a meter base repair and a full service replacement are very different days. We quote flat-rate in writing after the diagnosis and before any work starts, and we separate our costs from anything Duke charges so you can see which is which.',
  },
];

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: `${site.name} — Electricity Disconnection`,
  telephone: site.primaryPhone.number,
  url: `${site.url}/services/electricity-disconnection`,
  areaServed: { '@type': 'Place', name: site.serviceArea },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cincinnati',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
  },
};
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Electrical Service Restoration After Disconnection',
  description:
    'Diagnosis and repair of homeowner-owned electrical service equipment behind a Duke Energy disconnection — meter base, service mast, weatherhead, entrance cable, and panel — including permitting and inspection so power can be reconnected.',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Electricity Disconnection in ${site.serviceArea}`}
        description="Duke will not reconnect your power until the equipment you own is repaired and inspected. Here is what that means and how fast we can do it."
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
            No power and Duke will not reconnect?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/panel-hero.webp)' }} role="img" aria-label="Residential electric meter and service equipment" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Your Power Is Off. Here Is What Happens Next.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Duke Energy will not reconnect your power until a licensed electrician repairs the equipment you
            own and, in most cases, a local inspector signs the work off. That is the answer, and it does not
            change no matter how many times you call them.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            The meter is the boundary. Duke installs and maintains the service line running to your house and
            the meter itself. The weatherhead at the top of the mast, the mast and riser, the hardware holding
            the line to your wall, the meter box, and everything inside your panel are yours. When the
            disconnection is because something on that list failed, Duke physically cannot fix it for you.
            They are not permitted to work on your equipment.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} repairs that equipment across {site.serviceArea}, pulls the permit, meets the
            inspector, and coordinates the reconnect. Most people who call us have already lost a day
            bouncing between the utility and search results. The first thing we do is tell you exactly what
            is wrong and what it takes to fix it.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/panel-signs.webp)' }} role="img" aria-label="Electrician inspecting a damaged electrical service" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Why Your Power Was Disconnected
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Homeowners are rarely given much detail at the door. These are the reasons we actually turn up
              to:
            </p>
            <ul className="mt-4 space-y-2">
              {whyItWasDisconnected.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-base leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
              Licensed Service Repair Across {site.serviceArea}
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
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Everything between the disconnection and the lights coming back on, quoted flat-rate before we
              start.
            </p>
            <ul className="mt-4 space-y-2">
              {whatWeHandle.map((w) => (
                <li key={w} className="flex gap-2.5 text-base leading-relaxed text-white/90">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-400" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/inspect-hero.webp)' }} role="img" aria-label="Electrical inspection of residential service equipment" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">What To Do Right Now</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If there is a wire down, stay away from it.</span>{' '}
            Treat every downed conductor as live, keep children and pets indoors, and do not move branches
            resting on it. Call 911 and Duke Energy. No electrician should be your first call for a downed
            line.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">Stop resetting the main breaker.</span> If it trips
            again immediately, something downstream is faulted, and every reset pushes current through
            equipment that may already be damaged.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">Keep whatever Duke left you.</span> A tag, a door
            hanger, or a note usually names the reason for the disconnection. It saves diagnostic time, which
            saves you money. If you have nothing, we start at the service and work in.
          </p>

          <h2 className="mt-12 section-title text-brand-700">How We Get Your Power Restored</h2>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">1. Diagnose</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We look at the whole service: mast, weatherhead, entrance cable, meter base, panel, grounding.
            That tells us whether this is a{' '}
            <Link href="/services/electrical-mast-repair" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              mast repair
            </Link>
            , a meter base replacement, or a{' '}
            <Link href="/services/electrical-panel-replacement" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              panel replacement
            </Link>
            , and it determines the permit.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">2. Repair</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            New mast pipe, weatherhead, entrance cable, meter socket, or panel as required, with the roof
            penetration resealed properly where we have been up there. Grounding and bonding get corrected to
            current code even when they were not part of the original complaint, because the inspector will
            look at them and because they are what makes the rest safe.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">3. Inspection</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The local inspector signs the work off. This is the step that decides how long you are without
            power, so we book it alongside the repair rather than once the repair is finished. If the house
            has other issues worth documenting, an{' '}
            <Link href="/services/electrical-inspections" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              electrical inspection
            </Link>{' '}
            at the same time saves a second visit.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">4. Reconnect</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We give Duke what they need and schedule the reconnect. When the meter goes back in we energise
            circuit by circuit rather than throwing the main and hoping, label the panel properly, and put in
            writing anything we found that is worth watching — aluminium branch wiring, an overloaded
            subpanel, or wiring old enough to need a{' '}
            <Link href="/services/home-rewiring" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              rewire
            </Link>
            .
          </p>

          <h2 className="mt-12 section-title text-brand-700">When You Should Not Call Us</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">Check which utility actually serves you first.</span>{' '}
            Duke Energy Ohio, Duke Energy Kentucky and Duke Energy Indiana are separate operating companies
            with their own crews and procedures, and much of Hamilton is served by the city&rsquo;s own
            municipal electric system rather than Duke at all. Your rights sit with the regulator for your
            state: the{' '}
            <a href="https://puco.ohio.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Public Utilities Commission of Ohio
            </a>
            , the{' '}
            <a href="https://psc.ky.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Kentucky Public Service Commission
            </a>
            , or the{' '}
            <a href="https://www.in.gov/iurc/" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              Indiana Utility Regulatory Commission
            </a>
            .
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">And check which utility actually serves you.</span>{' '}
            Duke Energy Ohio, Duke Energy Kentucky, and Duke Energy Indiana are separate operating companies
            with their own crews and their own restoration schedules, and much of Hamilton is served by the
            city&rsquo;s own municipal electric system rather than Duke at all. Reporting an outage to the
            wrong one costs you time you do not have.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If the whole street is dark, this is not your repair.</span>{' '}
            Look at your neighbours. If they are out too, it is a utility outage, Duke already knows, and
            you wait. You should not be paying a call-out fee to be told that. Duke publishes what is
            homeowner-owned and what is theirs on their{' '}
            <a href="https://www.duke-energy.com/outages/meter-damage" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              meter and service connection damage page
            </a>
            .
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">If a storm took your service out</span>, the repair is
            the same but the queue is not. Our{' '}
            <Link href="/services/storm-electricity-outage" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              storm electricity outage
            </Link>{' '}
            page covers what to do when every electrician in the region is booked on the same morning.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Homeowners Call {site.name}</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Family-owned since {site.founded}, with roughly {site.reviewCount.toLocaleString()} reviews
            averaging {site.rating}. Service-entrance work is where shortcuts show up years later in someone
            else&rsquo;s house fire, so we do it the long way, and we tell you plainly when the problem is
            not ours to fix.
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

          <h2 className="mt-12 section-title text-brand-700">Electricity Disconnection FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-[15px] leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Get Your Power Back On</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              Tell us what Duke told you and we will tell you what it takes to fix it. Diagnosis, repair,
              inspection, and reconnect across {site.serviceArea}.
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

      {/* Electricity disconnection by neighborhood */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Electricity disconnection by neighborhood</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Housing age decides most of this — how old the panel is, whether the meter base has ever
            been replaced, and what an inspector will want to see before Duke reconnects. All{' '}
            {locations.length} neighborhoods we cover are below.
          </p>
          <NeighborhoodLinks
            copy={electricityDisconnectionCopy}
            basePath="/services/electricity-disconnection"
            linkPrefix="Electricity disconnection"
            listAll
          />
        </div>
      </section>

      <PageSections />
    </>
  );
}
