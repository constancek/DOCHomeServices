import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { electricityDisconnectionCopy } from '@/content/location-copy/electricity-disconnection';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'electricity-disconnection',
  serviceName: 'Electricity Disconnection',
  eyebrow: 'Electrical',
  hubLabel: 'Electricity Disconnection',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Electrical Service Restoration After Disconnection',
  ctaLine: 'Power off in {neighborhood} and Duke will not reconnect?',
  heroImage: '/services/panel-hero.webp',
  introHeading: 'Electricity Disconnection in {neighborhood}',
  introParagraphs: [
    'Duke Energy will not reconnect your power until a licensed electrician repairs the equipment you own and, in most cases, a local inspector signs the work off. That is the answer, and it does not change however many times you call them.',
    'The meter is the boundary. Duke installs and maintains the service line running to your house and the meter itself. The weatherhead, the mast and riser, the hardware holding the line to your wall, the meter box, and everything inside your panel are yours. When the disconnection is because something on that list failed, Duke is not permitted to fix it for you.',
    '{brand} repairs that equipment across {place}, pulls the permit, meets the inspector, and coordinates the reconnect. Most people who call us have already lost a day between the utility and search results. The first thing we do is tell you what is actually wrong and what it takes to fix it.',
  ],
  sidebarSections: [
    {
      title: 'What Gets a Service Red-Tagged',
      body: [
        'A red tag is an instruction not to energise, and it is issued for a reason rather than a formality: exposed conductors, a meter socket showing heat damage, missing or failed grounding, a panel with known defects, or work that was done without a permit and never inspected.',
        'The tag does not lift because the immediate hazard has been tidied up. It lifts when a licensed electrician has corrected the cause and an inspector has signed it off, which is the part homeowners in {neighborhood} are usually surprised by.',
      ],
    },
    {
      title: 'The Inspection Is Usually the Delay',
      body: [
        'The electrical work on a service is often a single day. What decides how long you are without power is the inspection, which runs on your local building department’s schedule rather than ours.',
        'That is why we book the inspector at the same time as scheduling the work instead of once it is finished. If someone quotes you a same-day fix without mentioning the inspection, ask them how they intend to handle it.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'electrical-panel-replacement', title: 'Electrical Panel Replacement' },
    { slug: 'electrical-mast-repair', title: 'Electrical Mast Repair' },
    { slug: 'storm-electricity-outage', title: 'Storm Electricity Outage' },
    { slug: 'electrical-inspections', title: 'Electrical Inspections' },
  ],
  band1Image: '/services/panel-signs.webp',
  band1Heading: 'Why the Power Was Disconnected in {neighborhood}',
  commonSituations: [
    'A meter box pulled away from the wall, or a mast that is bent or leaning',
    'Scorch marks, melted plastic, or heat damage at the meter socket',
    'A red tag on the service for exposed conductors or missing grounding',
    'Work that was never permitted and so was never inspected',
    'A property that has stood vacant long enough to need the service checked',
    'A panel that has been under water and cannot be re-energised',
  ],
  trustedBanner: 'Your Local & Trusted Service Restoration Electricians in {neighborhood}',
  band2Image: '/services/inspect-hero.webp',
  band2Heading: 'How We Get Your Power Back On',
  band2Paragraphs: [
    'We look at the whole service rather than the one obvious fault: mast, weatherhead, entrance cable, meter base, panel, grounding and bonding. That tells us the scope, and the scope determines the permit. Duke inspects what they are reconnecting to, so a patch on tired equipment fails the same way again.',
    'Then the repair, the permit, and the inspector — booked alongside the work rather than after it. When the meter goes back in we energise circuit by circuit instead of throwing the main and hoping, label the panel properly, and put in writing anything worth watching.',
  ],
  proseSections: [
        {
      title: 'Do Not Break a Meter Lock',
      body: 'If the meter has been pulled or locked, leave it. Tampering with utility metering equipment is a criminal offence in both Ohio and Kentucky, and on a service that was disconnected for a fault it also puts power back into equipment somebody has already judged unsafe. Whatever the frustration, this is the one action that turns a repair into a much larger problem.',
    },
    {
      title: 'A Vacant Property Is Its Own Case',
      body: 'A service that has been dead for a long stretch gets treated with more caution, particularly on older {neighborhood} housing where the panel or the grounding may not meet anything close to current code. Sometimes a short inspection is all it takes. Sometimes it turns into a panel replacement, and we will tell you which after looking rather than after starting.',
    },
    {
      title: 'Rebuild or Upgrade Is a Real Choice',
      body: 'The costs that dominate this job are the labour, the permit and the inspection, and they are the same whether we refit what was there or install a properly sized modern service. On a house still running its original equipment, putting the same thing back means paying that whole set of costs again before long. We price both so the difference is visible rather than asserted.',
    },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'clock', title: 'We Move Fast on These', text: 'No power means no heat, no fridge, no sump pump. It gets treated as the emergency it is.' },
    { icon: 'shield', title: 'Licensed Electricians', text: 'Only a licensed trade can do the repair the utility is waiting on.' },
    { icon: 'badge', title: 'We Handle the Inspection', text: 'We pull the permit and meet the inspector, which is what usually holds these up.' },
    { icon: 'house', title: 'Family-Owned Since 2009', text: `${site.yearsExperience} years on Cincinnati homes, with crews who live here.` },
  ],
  proofQuote:
    'The meter had been pulled and nobody would tell us what we actually needed. They looked at it, explained the red tag in plain English, replaced the panel and the meter base, got it inspected, and we were back on the next day.',
  sharedFaqs: [
    { q: 'Duke disconnected my power. How do I get it back?', a: 'A licensed electrician has to repair whatever is wrong with your equipment, a permit is pulled where the work requires one, and a local inspector signs it off. The utility then reconnects. We handle the repair, the permit, the inspection, and the scheduling.' },
    { q: 'They say I need an electrician before they will reconnect. What does that mean?', a: 'It means the damage is on equipment you own rather than equipment they own. The utility installs and maintains the service line and the meter. The weatherhead, riser, mast, attachment hardware, meter box, and everything in the panel are yours, and they will not energise your equipment until someone licensed has repaired it.' },
    { q: 'Do I really need a permit and an inspection?', a: 'For meter base, mast, service entrance, or panel work, yes. Emergency work can usually begin before the paperwork is filed, and most local authorities allow the permit to follow on the next business day — but it still has to be filed and inspected, because the utility will be looking for the sign-off before reconnecting.' },
    { q: 'What does it cost?', a: 'It depends entirely on what failed — a meter base repair and a full service replacement are very different days. We quote flat-rate in writing after the diagnosis and before any work starts, and we separate our costs from anything the utility charges so you can see which is which.' },
    { q: 'Can I just turn it back on myself?', a: 'No. If the meter has been pulled or locked, tampering with it is a criminal offence in both Ohio and Kentucky, and on a service disconnected for a fault it puts power back into equipment already judged unsafe.' },
  ],
  related: [
    { label: 'Electricity Disconnection (overview)', href: '/services/electricity-disconnection' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
    { label: 'Electrical Mast Repair', href: '/services/electrical-mast-repair' },
    { label: 'Storm Electricity Outage', href: '/services/storm-electricity-outage' },
    { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => electricityDisconnectionCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Electricity Disconnection in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Power disconnected in ${place}? Duke will not reconnect until your meter base, mast, or panel is repaired and inspected. Licensed electricians, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/electricity-disconnection/${loc.slug}` },
    openGraph: {
      title: `Electricity Disconnection in ${place} | ${site.name}`,
      description: `Repair, permitting and inspection of disconnected electrical service in ${place} and nearby areas.`,
    },
  };
}

export default async function ElectricityDisconnectionLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = electricityDisconnectionCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
