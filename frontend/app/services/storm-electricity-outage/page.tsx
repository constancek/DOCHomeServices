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
import { stormElectricityOutageCopy } from '@/content/location-copy/storm-electricity-outage';

export const metadata: Metadata = {
  title: 'Storm Electricity Outage Repair',
  description: `Storm outage repair across ${site.serviceArea}. If the damage is on your meter base, mast, or weatherhead, Duke Energy will not reconnect until a licensed electrician fixes it. ${site.name} does that work.`,
  alternates: { canonical: '/services/storm-electricity-outage' },
  openGraph: {
    type: 'website',
    title: `Storm Electricity Outage Repair | ${site.name}`,
    description: `Power back on your street but not in your house? The damage is probably on equipment you own. We repair it and get you signed off for reconnect. Serving ${site.serviceArea}.`,
    url: `${site.url}/services/storm-electricity-outage/`,
  },
};

const yoursVsTheirs = [
  { lead: 'Duke Energy Owns', text: 'The poles, the overhead or underground service line running to your house, and the electric meter itself.' },
  { lead: 'You Own', text: 'The weatherhead, the riser and mast, the attachment hardware holding the line to your house, the meter box, and the panel inside.' },
  { lead: 'Why It Matters', text: 'Duke restores what it owns. It will not reconnect customer-owned equipment that has been damaged until a licensed electrician repairs it.' },
  { lead: 'The Inspection', text: 'In most of our service area a local inspector has to sign the repair off before the meter goes back in.' },
];

const damageWeRepair = [
  { lead: 'Meter Box Pulled Off the Wall', text: 'A falling limb or a downed line can rip the meter box and its conduit clean off the siding.' },
  { lead: 'Bent or Snapped Service Mast', text: 'The pipe carrying the line to your roof takes the load when a branch comes down on the drop.' },
  { lead: 'Broken Weatherhead', text: 'The fitting at the top of the mast keeps water out of the entrance cable. Broken, it lets water straight into the service.' },
  { lead: 'Damaged Entrance Cable', text: 'Frayed, stretched, or crushed cable between the weatherhead and the meter has to be replaced, not taped.' },
  { lead: 'Burned or Scorched Meter Base', text: 'Scorch marks or melted plastic at the socket mean heat damage, and that equipment is not going back into service.' },
  { lead: 'Surge Damage Inside the Panel', text: 'A nearby strike can take out breakers and the panel bus while leaving the outside looking untouched.' },
];

const whyUs = [
  { icon: 'clock' as const, title: 'Storm-Week Scheduling', text: 'When the weather turns we staff for it, because everyone needs the same repair on the same day.' },
  { icon: 'shield' as const, title: 'Licensed for Service Work', text: 'Mast, meter base, and entrance cable repair is licensed, permitted work.' },
  { icon: 'badge' as const, title: 'We Handle the Inspection', text: 'We pull the permit and meet the inspector so Duke can reconnect without another delay.' },
  { icon: 'house' as const, title: 'Local Since 2009', text: `${site.yearsExperience} years of Ohio River valley storms and the damage they do.` },
];

const faqs = [
  {
    q: 'The power is out. How do I know if it is Duke Energy’s problem or mine?',
    a: 'Look at your neighbours. If their lights are out too, it is a utility outage, Duke already knows, and you wait. If your house is the only dark one on a lit street, the fault is almost certainly on equipment you own — the mast, the weatherhead, the entrance cable, the meter box, or the panel. That is the case we fix.',
  },
  {
    q: 'Duke restored my street but my house is still dark. Why?',
    a: 'Because Duke restores its own equipment and stops at the meter. If your meter box has been pulled away from the wall or your mast is bent, their crew cannot safely reconnect to it. They will leave the service disconnected until a licensed electrician repairs the damage and, in most jurisdictions, an inspector approves it.',
  },
  {
    q: 'Is the meter base really mine? It has Duke’s name on the meter.',
    a: 'The meter is theirs. The box it sits in is yours, along with the mast, riser, weatherhead, and attachment hardware. It is a common surprise, and it is why storm repairs land on the homeowner rather than the utility.',
  },
  {
    q: 'How fast can you get out after a storm?',
    a: 'We staff up when severe weather is forecast, but so does every electrician in the region, and everybody calls the same afternoon. Calling early matters more than anything else you can do. If you can see damage at the meter or mast, get in the queue before you have finished clearing the yard.',
  },
  {
    q: 'There is a wire down in my yard. What do I do?',
    a: 'Treat every downed line as live. Stay well back, keep children and pets inside, and do not move branches that are touching it. Call 911 and Duke Energy. No electrician should be your first call for a downed conductor, and no reputable one will tell you otherwise.',
  },
  {
    q: 'Can I run a generator until it is fixed?',
    a: 'A portable generator is fine for plug-in loads if you run it outside, well away from windows and doors. What you must never do is backfeed it into a wall outlet or the panel without a proper transfer switch. That pushes voltage back onto the utility line and can kill the lineworker restoring your street.',
  },
  {
    q: 'Will my insurance cover this?',
    a: 'Storm damage to a mast or meter base is often covered under a homeowner policy, though deductibles vary and so do carriers. We document the damage with photographs and give you an itemised invoice, which is what an adjuster will ask for.',
  },
  {
    q: 'Do I need a permit for a storm repair?',
    a: 'For mast, meter base, or entrance cable work, yes, and it needs an inspection before reconnect. We pull it. An emergency is not an exemption, and a repair that skips the permit is a repair Duke will not energise.',
  },
  {
    q: 'Everything looks fine outside but half my house has no power. What is that?',
    a: 'That pattern usually points at a lost leg of the service or damage inside the panel rather than storm damage you can see. Do not keep resetting breakers to find out. It is worth an hour of diagnosis, and it sometimes ends in a panel replacement.',
  },
  {
    q: 'How do I avoid this next time?',
    a: 'You cannot storm-proof a service mast, but you can keep limbs off the drop and you can protect what is inside. Whole-home surge protection is the cheapest insurance in the trade for a house full of electronics, boards, and inverter-driven appliances.',
  },
];

// LocalBusiness markup for the hub page itself. The location pages already
// carry this; without it the city-wide page was the only one in the set
// without local-business signals.
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: `${site.name} — Storm Electricity Outage Repair`,
  telephone: site.primaryPhone.number,
  url: `${site.url}/services/storm-electricity-outage`,
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
  serviceType: 'Storm Electricity Outage Repair',
  description:
    'Emergency repair of storm-damaged, homeowner-owned electrical service equipment — service mast, weatherhead, riser, entrance cable, meter base, and panel — including permitting and inspection so Duke Energy can reconnect.',
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
    { '@type': 'ListItem', position: 4, name: 'Storm Electricity Outage', item: `${site.url}/services/storm-electricity-outage` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function StormElectricityOutagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Storm Electricity Outage Repair in ${site.serviceArea}`}
        description="Power back on your street but not in your house? The damage is on equipment you own, and Duke Energy will not reconnect until a licensed electrician repairs it."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Storm Electricity Outage' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Storm damage at your meter or mast?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/storm-outage-hero.webp)' }} role="img" aria-label="Fallen tree across a residential street with downed power lines and a snapped utility pole" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            When the Lights Come Back On Everywhere Except Your House
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Start with the window test. If the whole street is dark, it is a utility outage. Report it, and
            wait. There is nothing an electrician can do about a line Duke Energy owns, and you should not be
            paying anyone a call-out fee to come and tell you that.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            If your neighbours have lights and you do not, the picture changes completely. That pattern means
            the break is on your side of the meter, on equipment that belongs to you: the mast, the
            weatherhead, the entrance cable, the meter box, or the panel. Duke will not reconnect damaged
            customer-owned equipment. A licensed electrician has to repair it, an inspector generally has to
            approve it, and only then does the meter go back in.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            That is the work we do. {site.name} repairs storm-damaged service equipment across{' '}
            {site.serviceArea}, pulls the permit, meets the inspector, and coordinates the reconnect with
            Duke so you are not making the calls yourself with no power to charge your phone.
          </p>

          <h2 className="mt-10 section-title text-brand-700">After the Storm, Call Before You Clear the Yard</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The morning after a bad storm, every electrician and every inspector in the region is booked by
            lunchtime, and it runs on a first-come basis. The people who called at seven get their power back
            days before the people who called at noon.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            So if you wake up to damage at the meter or the mast, call it in before you start dragging
            branches. The repair itself is usually a single day. The wait to begin it is what turns into a
            week.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Storm Damage We Repair
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              High wind, falling limbs, and a heavy service drop do predictable things to a house:
            </p>
            <ul className="mt-4 space-y-2">
              {damageWeRepair.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-base leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/surge-hero.webp)' }} role="img" aria-label="Electrical panel and surge protection equipment" />
        </div>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/storm-outage-crews.webp)' }} role="img" aria-label="Utility bucket trucks restoring overhead power lines after a storm" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Who Owns What
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              Almost every argument about a storm outage comes down to this split, and most homeowners have
              never been told where the line falls:
            </p>
            <ul className="mt-4 space-y-2">
              {yoursVsTheirs.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-base leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
              Duke Restores the Line. We Restore Your Connection to It.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Before You Call Anyone: Three Safety Rules</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">Treat every downed wire as live.</span> Stay well back
            from it, keep children and pets indoors, and do not touch or move branches resting on it. Call 911
            and Duke Energy. Duke&rsquo;s own{' '}
            <a href="https://www.duke-energy.com/safety-and-preparedness/storm-safety" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              storm safety guidance
            </a>{' '}
            covers this in more detail, and it is worth reading before the next round of weather rather than
            during it.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">Never backfeed a generator.</span> Running a portable
            generator outside and plugging appliances directly into it is fine. Feeding it into a wall outlet
            or the panel without a transfer switch pushes voltage back onto the utility line and can kill the
            crew working to restore your street.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            <span className="font-bold text-brand-700">Do not keep resetting the main.</span> If a breaker
            trips repeatedly after a storm, something is wrong downstream. Each reset sends fault current
            through equipment that may already be damaged.
          </p>

          <h2 className="mt-12 section-title text-brand-700">How the Repair Runs</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The sequence after a storm is fixed, and knowing it saves you a day.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Assess and Photograph</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We document the damage before touching it, because your insurer will want to see it and because
            it tells us whether this is a{' '}
            <Link href="/services/electrical-mast-repair" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              mast repair
            </Link>{' '}
            or a full service replacement. Duke publishes its own explanation of the split on the{' '}
            <a href="https://www.duke-energy.com/outages/meter-damage" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              meter and service connection damage page
            </a>
            , which is useful to have open when you are on the phone with them.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Repair and Permit</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            New mast pipe, weatherhead, entrance cable, or meter socket as needed, with the roof penetration
            resealed properly rather than smeared with tar. Where the panel took a hit, that becomes a{' '}
            <Link href="/services/electrical-panel-replacement" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              panel replacement
            </Link>{' '}
            and we say so before starting rather than halfway through.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Inspection and Reconnect</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The inspector signs off and we coordinate the reconnect with Duke. This is the same process our{' '}
            <Link href="/services/electricity-disconnection" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              electricity disconnection
            </Link>{' '}
            service runs for planned work, except the clock matters more. After a bad night in the Tri-State
            every electrician and every inspector is booked, which is why we tell people to call before they
            have finished clearing the driveway.
          </p>

          <h2 className="mt-12 section-title text-brand-700">The Part Nobody Mentions Until Afterwards</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The outage is not usually what costs you the most. The surge is. A strike near the line puts a
            spike through everything plugged in, and the bill lands on the furnace board, the heat pump
            inverter, the range, and every television in the house. Those replacements add up faster than the
            mast repair that got the power back on.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            A{' '}
            <Link href="/services/surge-protector-installation" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              whole-home surge protector
            </Link>{' '}
            fitted at the panel is the cheapest thing we install that regularly saves someone four figures.
            If we are already at your house rebuilding the service, that is the right moment to add one. If
            the house has never had a proper{' '}
            <Link href="/services/electrical-inspections" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              electrical inspection
            </Link>
            , the same visit is a good time for that too.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Homeowners Call {site.name}</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Family-owned since {site.founded}, roughly {site.reviewCount.toLocaleString()} reviews averaging{' '}
            {site.rating}, and crews who have worked every bad storm this valley has thrown at us. We will
            also tell you plainly when the problem is Duke&rsquo;s and there is nothing to buy.
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

          <h2 className="mt-12 section-title text-brand-700">Storm Outage FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-[15px] leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Get Your Power Back On</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              If your house is dark and the street is not, call now. We repair the damage, handle the
              inspection, and coordinate the Duke Energy reconnect across {site.serviceArea}.
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

      {/* Storm outage repair by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Storm outage repair by neighborhood</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Storm damage is local. Tree cover, terrain, and how old the service entrances are decide
            which streets stay dark once Duke has restored the line — all {locations.length}{' '}
            neighborhoods we cover are below, each with the detail that matters where you live.
          </p>
          <NeighborhoodLinks
            copy={stormElectricityOutageCopy}
            basePath="/services/storm-electricity-outage"
            linkPrefix="Storm outage repair"
            listAll
          />
        </div>
      </section>

      <PageSections />
    </>
  );
}
