import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { stormElectricityOutageCopy } from '@/content/location-copy/storm-electricity-outage';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'storm-electricity-outage',
  serviceName: 'Storm Electricity Outage Repair',
  eyebrow: 'Electrical',
  hubLabel: 'Storm Electricity Outage',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Storm Electricity Outage Repair',
  ctaLine: 'Street back on but your {neighborhood} home still dark?',
  heroImage: '/services/storm-outage-hero.webp',
  introHeading: 'Storm Electricity Outage Repair in {neighborhood}',
  introParagraphs: [
    'Start with the window test. If the whole street is dark, it is a utility outage, Duke Energy already knows, and the honest advice is to wait — there is nothing an electrician can do about a line Duke owns, and you should not pay a call-out fee to be told that.',
    'If your neighbours have lights and you do not, the picture changes. That pattern means the break is on your side of the meter, on equipment you own: the mast, the weatherhead, the entrance cable, the meter box, or the panel. Duke will not reconnect damaged customer-owned equipment. A licensed electrician has to repair it, an inspector generally has to approve it, and only then does the meter go back in.',
    '{brand} does that repair across {place}, pulls the permit, meets the inspector, and coordinates the reconnect with Duke so you are not making those calls yourself with no power to charge a phone.',
  ],
  sidebarSections: [
    {
      title: 'What You Own, and What Duke Owns',
      body: [
        'Duke Energy installs and maintains the service line running to your house and the electric meter itself. The weatherhead at the top of the mast, the mast and riser, the hardware holding the line to your wall, the meter box, and everything inside the panel belong to you.',
        'It surprises nearly everyone, and it is why storm repairs land on the homeowner rather than the utility — and why your insurance, not Duke, is usually the one paying.',
      ],
    },
    {
      title: 'After the Storm, Call Before You Clear the Yard',
      body: [
        'The morning after a bad storm, every electrician and every inspector in the region is booked by lunchtime, and it runs on a first-come basis. The people who called at seven get their power back days before the people who called at noon.',
        'So if you wake up to damage at the meter or the mast in {neighborhood}, call it in before you start dragging branches. The repair itself is usually a single day. The wait to begin it is what turns into a week.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'electrical-mast-repair', title: 'Electrical Mast Repair' },
    { slug: 'electrical-panel-replacement', title: 'Electrical Panel Replacement' },
    { slug: 'electricity-disconnection', title: 'Electricity Disconnection' },
    { slug: 'surge-protector-installation', title: 'Whole-Home Surge Protection' },
  ],
  band1Image: '/services/surge-hero.webp',
  band1Heading: 'Storm Damage We Repair in {neighborhood}',
  commonSituations: [
    'A meter box pulled away from the wall, with its conduit torn off the siding',
    'A bent, leaning, or snapped service mast after a limb came down on the drop',
    'A broken weatherhead letting water straight into the entrance cable',
    'Frayed, stretched, or crushed service entrance cable',
    'Scorch marks or melted plastic at the meter socket',
    'Surge damage inside the panel while the outside looks untouched',
  ],
  trustedBanner: 'Your Local & Trusted Storm Damage Electricians in {neighborhood}',
  band2Image: '/services/storm-outage-crews.webp',
  band2Heading: 'What Has to Happen Before Duke Reconnects You',
  band2Paragraphs: [
    'We photograph the damage before touching it, because your insurer will want to see it and because it decides whether this is a mast repair or a full service replacement. Then the repair: new mast pipe, weatherhead, entrance cable, or meter socket as needed, with the roof penetration resealed properly rather than smeared with tar.',
    'Grounding and bonding get corrected to current code even where they were not part of the original complaint, because the inspector will look at them. The inspector signs off, we give Duke what they need, and when the meter goes back in we energise circuit by circuit rather than throwing the main and hoping.',
  ],
  proseSections: [
    {
      title: 'Treat Every Downed Wire as Live',
      body: 'Stay well back from it, keep children and pets indoors, and do not move branches resting on it. Call 911 and Duke Energy. No electrician should be your first call for a downed conductor in {neighborhood}, and no reputable one will tell you otherwise. We come afterwards, once the utility has made the property safe.',
    },
    {
      title: 'Never Backfeed a Generator',
      body: 'Running a portable generator outside, well away from windows and doors, with appliances plugged directly into it, is fine. Feeding one into a wall outlet or the panel without a proper transfer switch pushes voltage back onto the utility line and can kill the lineworker restoring your street. This is the single most dangerous thing homeowners do during an outage.',
    },
    {
      title: 'Stop Resetting the Main',
      body: 'If a breaker trips again immediately after a storm, something downstream is faulted. Every reset sends fault current through equipment that may already be damaged. It is worth an hour of diagnosis instead, and on older {neighborhood} services that hour sometimes ends in a panel replacement rather than a simple repair.',
    },
    {
      title: 'The Surge Is Often the Bigger Bill',
      body: 'The outage is rarely what costs the most. A strike near the line puts a spike through everything plugged in, and it lands on the furnace board, the heat pump inverter, the range, and every television in the house. Those replacements add up faster than the mast repair that got the power back on, which is why whole-home surge protection at the panel is the cheapest thing we install that regularly saves someone four figures.',
    },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us After a Storm',
  whyUs: [
    { icon: 'clock', title: 'Storm-Week Scheduling', text: 'When the weather turns we staff for it, because everyone needs the same repair on the same morning.' },
    { icon: 'shield', title: 'Licensed for Service Work', text: 'Mast, meter base, and entrance cable repair is licensed, permitted work.' },
    { icon: 'doc', title: 'Documented for Your Insurer', text: 'Photographs of the damage and an itemised invoice, which is what an adjuster asks for.' },
    { icon: 'badge', title: 'We Handle the Inspection', text: 'We pull the permit and meet the inspector so Duke can reconnect without another delay.' },
  ],
  proofQuote:
    'A limb took the mast off the side of the house and Duke told us they could not touch it. These guys had it rebuilt and inspected the next day, and the power was back on that evening.',
  sharedFaqs: [
    { q: 'Duke restored my street but my house is still dark. Why?', a: 'Because Duke restores its own equipment and stops at the meter. If your meter box has been pulled away from the wall or your mast is bent, their crew cannot safely reconnect to it. They leave the service disconnected until a licensed electrician repairs the damage and, in most jurisdictions, an inspector approves it.' },
    { q: 'Is the meter base really mine? It has Duke’s name on the meter.', a: 'The meter is theirs. The box it sits in is yours, along with the mast, riser, weatherhead, and attachment hardware. It is a common surprise, and it is why storm repairs land on the homeowner rather than the utility.' },
    { q: 'Will my insurance cover this?', a: 'Storm damage to a mast or meter base is often covered under a homeowner policy, though deductibles vary and so do carriers. We document the damage with photographs and give you an itemised invoice, which is what an adjuster will ask for.' },
    { q: 'Do I need a permit for a storm repair?', a: 'For mast, meter base, or entrance cable work, yes, and it needs an inspection before reconnect. We pull it. An emergency is not an exemption, and a repair that skips the permit is a repair Duke will not energise.' },
    { q: 'Everything looks fine outside but half my house has no power. What is that?', a: 'That pattern usually points at a lost leg of the service or damage inside the panel rather than storm damage you can see. Do not keep resetting breakers to find out. It is worth an hour of diagnosis, and it sometimes ends in a panel replacement.' },
    { q: 'How do I avoid this next time?', a: 'You cannot storm-proof a service mast, but you can keep limbs off the drop and you can protect what is inside. Whole-home surge protection is the cheapest insurance in the trade for a house full of electronics, control boards, and inverter-driven appliances.' },
  ],
  related: [
    { label: 'Storm Electricity Outage (overview)', href: '/services/storm-electricity-outage' },
    { label: 'Electrical Mast Repair', href: '/services/electrical-mast-repair' },
    { label: 'Electricity Disconnection (Duke Energy)', href: '/services/electricity-disconnection' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
    { label: 'Whole-Home Surge Protector Installation', href: '/services/surge-protector-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => stormElectricityOutageCopy[l.slug]).map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) return {};
  const place = loc.city ? `${loc.neighborhood}, ${loc.city}, ${loc.state}` : `${loc.neighborhood}, ${loc.state}`;
  return {
    title: `Storm Electricity Outage Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Storm-damaged mast, weatherhead, or meter base in ${place}? Duke will not reconnect until it is repaired and inspected. Licensed electricians, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/storm-electricity-outage/${loc.slug}` },
    openGraph: {
      title: `Storm Electricity Outage Repair in ${place} | ${site.name}`,
      description: `Repair of storm-damaged service masts, weatherheads, and meter bases serving ${place} and nearby areas.`,
    },
  };
}

export default async function StormElectricityOutageLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = stormElectricityOutageCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
