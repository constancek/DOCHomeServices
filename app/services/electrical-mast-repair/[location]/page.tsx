import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { mastRepairCopy } from '@/content/location-copy/electrical-mast-repair';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'electrical-mast-repair',
  serviceName: 'Electrical Mast Repair',
  eyebrow: 'Electrical',
  hubLabel: 'Electrical Mast Repair',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Electrical Mast Repair',
  ctaLine: 'Storm-damaged or leaning service mast in {neighborhood}? Call now',
  heroImage: '/services/mast-hero.jpg',
  introHeading: 'Electrical Mast Repair in {neighborhood}',
  introParagraphs: [
    'Your electrical service mast is the pipe and weatherhead that connect your home to the utility’s power lines. When it’s damaged, bent, or pulling away from the house, your whole home’s power and safety are at risk. {brand} repairs and replaces service masts, risers, and entrance cables for homeowners in {place}.',
    'Because the mast ties directly into utility power, this is licensed work — not a DIY fix. We coordinate with the utility where needed, do it to code, and focus on getting your power back safely and fast.',
  ],
  sidebarSections: [
    {
      title: 'What We Repair',
      body: [
        'For {neighborhood} homes we handle the full service entrance: the mast pipe and weatherhead, the meter riser and meter base, the service entrance cable, the roof flashing and seal, and the grounding that ties it all together.',
        'When one part fails the whole connection is at risk, so we inspect and address them together.',
      ],
    },
    {
      title: 'Storms Are the Usual Cause',
      body: [
        'The wind, ice, and falling limbs that come through {neighborhood} are hard on a service mast — a snapped limb can bend the pipe or rip the cable right off the house. We respond quickly to restore a safe connection and reseal against water.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'electrical-panel-replacement', title: 'Panel Replacement' },
    { slug: 'home-rewiring', title: 'Home Rewiring' },
    { slug: 'electrical-inspections', title: 'Electrical Inspections' },
    { slug: 'surge-protector-installation', title: 'Surge Protection' },
  ],
  band1Image: '/services/mast-signs.jpg',
  band1Heading: 'Signs Your {neighborhood} Home Needs Mast Repair',
  commonSituations: [
    'A mast that is leaning, bent, or pulling away from the house',
    'Exposed, frayed, or sagging service-entrance wires',
    'Water stains, rust, or a failing seal at the weatherhead',
    'Frequent power interruptions or flickering tied to the connection',
    'Storm damage — fallen limbs, dents, or a struck mast',
    'A meter riser or base that is loose or corroded',
    'A utility that has red-tagged the service entrance',
  ],
  trustedBanner: 'Your Local & Trusted Electrical Mast Pros in {neighborhood}',
  band2Image: '/services/mast-hero.jpg',
  band2Heading: 'What to Expect From Your Mast Service in {neighborhood}',
  band2Paragraphs: [
    'We inspect the full service entrance — mast, riser, meter base, entrance cable, and flashing — to find every issue, then explain whether a repair or full replacement is needed and lay out the price before any work begins.',
    'We install weather-rated materials, seal and flash the roof penetration, ground everything to code, coordinate any utility disconnect and reconnect, and confirm power is safe and steady before we leave your {neighborhood} home.',
  ],
  proseSections: [
    { title: 'Why a Damaged Mast Can’t Wait', body: 'The mast is the one part of your electrical system exposed to the weather and carrying full utility voltage. A leaning pipe, a cracked weatherhead, or a frayed entrance cable on a {neighborhood} home is both a shock and fire risk and an open door for water. Left alone, the utility may cut power until it’s fixed — so prompt, licensed repair matters.' },
    { title: 'Storm Damage Across {neighborhood}', body: 'The storms that roll through {neighborhood} bring high winds, ice, and falling branches that bend masts, tear entrance cables loose, and crack the seal at the roof. After severe weather we check the mast, riser, and flashing together and restore a weather-tight, code-compliant connection.' },
    { title: 'What Makes Up the Service Mast', body: 'The mast is more than one pipe. It includes the weatherhead, the meter riser that ties into the meter base, the service entrance cable that carries power inside, and the flashing that seals the roof. When any of these fail on a {neighborhood} home the whole connection is compromised, which is why we inspect and repair them as a system.' },
    { title: 'Repair, Replace, and Coordinate the Utility', body: 'Minor damage to a sound mast is often a targeted repair. A bent, corroded, or storm-wrecked mast usually needs full replacement, which means coordinating the utility disconnect and reconnect. We handle that scheduling for your {neighborhood} home and complete most replacements in a day, finishing with an inspection.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Family-Owned & Operated', text: 'A local team that takes care of your home like its own.' },
    { icon: 'badge', title: 'Experienced Electricians', text: 'Trained pros who handle service-entrance work safely.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Proper flashing, sealing, and grounding that meets code.' },
    { icon: 'house', title: 'Satisfaction Guarantee', text: 'We’re not done until your power is safe and reliable.' },
  ],
  proofQuote:
    'A storm took a big limb down and it bent our service mast right off the roofline. They came out fast, coordinated the power shutoff with the utility, replaced the mast and resealed the roof, and had us back on by evening. Clean, safe work.',
  sharedFaqs: [
    { q: 'How do I know if I need an electrical mast repair?', a: 'Look for a leaning structure, exposed wires, water damage, or power interruptions near the mast.' },
    { q: 'Can storms damage my service mast?', a: 'Yes. Severe weather, including falling branches and high winds, can compromise mast integrity.' },
    { q: 'What is an electrical pole connection, and why is it important?', a: 'The pole connection links utility power lines to your home’s system via the service mast, delivering electricity safely and efficiently.' },
    { q: 'What’s involved in replacing a service mast?', a: 'Removal of old equipment, new installation, wiring updates, and a thorough system inspection.' },
    { q: 'How long does a service mast replacement take?', a: 'Most replacements are completed within one day, depending on project complexity.' },
  ],
  related: [
    { label: 'Electrical Mast Repair (overview)', href: '/services/electrical-mast-repair' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
    { label: 'Home Rewiring', href: '/services/home-rewiring' },
    { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
    { label: 'Surge Protection', href: '/services/surge-protector-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => mastRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Electrical Mast Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Electrical service mast repair and replacement in ${place} — masts, risers, and entrance cables restored by licensed electricians. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/electrical-mast-repair/${loc.slug}` },
    openGraph: {
      title: `Electrical Mast Repair in ${place} | ${site.name}`,
      description: `Licensed service mast repair and replacement serving ${place} and nearby areas.`,
    },
  };
}

export default async function MastRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = mastRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
