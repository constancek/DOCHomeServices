import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { afterFloodPlumbingCopy } from '@/content/location-copy/after-flood-plumbing';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'after-flood-plumbing',
  serviceName: 'After Flood Plumbing',
  eyebrow: 'Plumbing',
  hubLabel: 'After Flood Plumbing',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'After Flood Plumbing Inspection & Repair',
  ctaLine: 'Flooded home in {neighborhood}? Get the plumbing checked',
  heroImage: '/services/after-flood-hero.webp',
  introHeading: 'After Flood Plumbing in {neighborhood}',
  introParagraphs: [
    'The water going down is not the end of it. A flood leaves behind a plumbing system that looks the same and does not work the same — silt in the sewer main, a water heater whose gas controls sat underwater, shutoff valves quietly seizing, and a sump pump that may have burned itself out doing its job.',
    '{brand} goes through the whole system in your {place} home before you go back to normal water use, so the recovery does not turn into a second flood. What we find gets explained plainly, with a flat-rate price on anything that needs fixing and an honest answer on anything that does not.',
  ],
  sidebarSections: [
    {
      title: 'What the Inspection Covers',
      body: [
        'Water heater burners, controls, and gas valves; sewer and drain lines checked for backflow, silt, and collapsed sections; supply lines and shutoff valves that sat underwater; sump pump and check valve function; gas connections and appliance controls; and fixtures, traps, and floor drains packed with debris.',
        'We camera the main where there is any sign of a blockage, because guessing at a sewer line after a flood is how people end up snaking the same pipe three times.',
      ],
    },
    {
      title: 'Documented for Your Claim',
      body: [
        'Photographs of what failed and a written record of what caused it. Standard homeowners policies commonly exclude rising floodwater, which is what separate flood insurance covers, while a burst pipe inside the home is usually covered. The coverage decision is your insurer’s — the record they ask for is the part we control.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'water-damage-restoration', title: 'Water Damage Restoration' },
    { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement' },
    { slug: 'water-heater-installation', title: 'Water Heater Installation' },
    { slug: 'sump-pumps', title: 'Sump Pumps' },
  ],
  band1Image: '/services/after-flood-checks.webp',
  band1Heading: 'What Goes Wrong After a Flood in {neighborhood}',
  commonSituations: [
    'A water heater whose burner assembly and gas controls went underwater',
    'A sewer main packed with silt that backs up on the first heavy use',
    'Shutoff valves that sat in dirty water and will no longer turn',
    'A sump pump that ran through the flood and died in it',
    'Drains that pass a trickle but back up under a full laundry load',
    'Gas connections and appliance controls that were submerged',
    'Floor drains and traps packed with mud and debris',
  ],
  trustedBanner: 'Your Local & Trusted Post-Flood Plumbing Team in {neighborhood}',
  band2Image: '/services/after-flood-hero.webp',
  band2Heading: 'What to Expect From a Post-Flood Check in {neighborhood}',
  band2Paragraphs: [
    'We start at the components a flood reaches first — the water heater base, the gas controls, the main shutoff, the sump pump — and work outward to the drains. Anything that merely got wet gets separated from anything that actually failed, which is the distinction most post-flood quotes blur.',
    'Where the drains are slow we camera the main rather than guess, then give you a flat-rate price on the repairs that are needed. You approve it before we start, with no overtime or weekend surcharge.',
  ],
  proseSections: [
    { title: 'Check It Before You Resume Normal Use', body: 'Running a full household load through a system with a blocked main or a compromised water heater turns a repairable situation into a second flood, this time inside. The laundry, the dishwasher, and the showers all restarting at once is exactly the load that finds a partially blocked line in {neighborhood}. Have the system looked at first.' },
    { title: 'A Flooded Water Heater Is a Replacement', body: 'Once floodwater reaches the burner assembly and gas control valve on a gas unit, or the elements and thermostats on an electric one, manufacturers direct replacement rather than repair. The controls corrode internally where you cannot see it, and a gas valve that fails after a flood fails unsafely. If the water stayed below the base, the unit is usually fine and we will say so.' },
    { title: 'Is the Water Safe to Drink', body: 'Do not assume it is. On city water, your utility issues a boil advisory when the supply has been compromised, so follow that first. A flooded well needs testing before anyone drinks from it — floodwater carries bacteria and whatever was in the ground around it. This is a test, not a judgement call.' },
    { title: 'When You Do Not Need Us in {neighborhood}', body: 'If the water stayed outside the house, or came in shallow and never reached the water heater base, the shutoffs, or a floor drain, there may be nothing here worth paying us for. Clean water from a burst supply line inside the home is a different job — a repair and a dry-out, not a full post-flood inspection. Tell us what the water did and how high it got when you call. If the answer is that you do not need us, we would rather say it on the phone than send a truck.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'check', title: 'Full System Inspection', text: 'We check the whole system, not just the fixture you noticed — floods do damage in places you would not look.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked plumbers who pull permits where the code calls for it, including gas work.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
    { icon: 'clock', title: 'Same-Day Service', text: 'A house you cannot safely use water in is an emergency. We reach most homes the same day.' },
  ],
  proofQuote:
    'The basement took on water and everything looked fine once it drained. They found the main was half full of silt and the water heater controls had gone under. Both would have turned up the hard way a week later.',
  sharedFaqs: [
    { q: 'Is my water safe to drink after a flood?', a: 'Do not assume it is. If you are on city water, your utility will issue a boil advisory when the supply has been compromised, so follow that first. If you are on a well that was flooded, the water needs testing before anyone drinks it — floodwater carries bacteria and whatever was in the ground around it.' },
    { q: 'Does a flooded water heater have to be replaced?', a: 'Almost always, yes. Once floodwater reaches the burner assembly and gas control valve on a gas unit, or the elements and thermostats on an electric one, manufacturers direct replacement rather than repair. The controls corrode internally where you cannot see it, and a gas valve that fails after a flood fails unsafely.' },
    { q: 'Why is my drain slow after the flood receded?', a: 'Floods push silt, mud, and debris into sewer and drain lines. The line often still passes a small amount of water, so it seems fine, then backs up the first time you run a washing machine. A camera inspection shows whether it is a partial blockage that can be cleared or a section that has collapsed.' },
    { q: 'How soon should I have the plumbing checked?', a: 'Before you resume normal water use. Running a full household load through a system with a blocked main or a compromised water heater turns a repairable situation into a second flood, this time inside.' },
    { q: 'Do I need this if the water never got above the floor?', a: 'Probably not, and we will say so. If water stayed shallow, never reached the water heater base, and the drains run normally, there may be nothing here to fix. What we would still check is the sump pump, because that is the component that worked hardest during the flood.' },
    { q: 'Will insurance cover after flood plumbing repairs?', a: 'It depends on your policy and the flood source. Standard homeowners policies commonly exclude rising floodwater, which is what separate flood insurance covers, while a burst pipe inside the home is usually covered. We document what we find and what caused it so you have the record for your claim.' },
  ],
  related: [
    { label: 'After Flood Plumbing (overview)', href: '/services/after-flood-plumbing' },
    { label: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
    { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
    { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
    { label: 'Sump Pumps', href: '/services/sump-pumps' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => afterFloodPlumbingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `After Flood Plumbing in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Post-flood plumbing inspection and repair in ${place} — water heaters, sewer lines, shutoffs, and sump pumps. Same-day service, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/after-flood-plumbing/${loc.slug}` },
    openGraph: {
      title: `After Flood Plumbing in ${place} | ${site.name}`,
      description: `Same-day post-flood plumbing inspection and repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function AfterFloodPlumbingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = afterFloodPlumbingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
