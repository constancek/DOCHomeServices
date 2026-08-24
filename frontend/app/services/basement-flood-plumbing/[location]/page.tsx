import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { basementFloodPlumbingCopy } from '@/content/location-copy/basement-flood-plumbing';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'basement-flood-plumbing',
  serviceName: 'Basement Flood Plumbing',
  eyebrow: 'Plumbing',
  hubLabel: 'Basement Flood Plumbing',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Basement Flood Plumbing',
  ctaLine: 'Basement flooding in {neighborhood}? Call for same-day help',
  heroImage: '/services/basement-flood-hero.webp',
  introHeading: 'Basement Flood Plumbing in {neighborhood}',
  introParagraphs: [
    'Water on a basement floor looks the same whatever caused it. A split supply line, a dead sump pump, a backed-up main, and groundwater coming through the footer all leave the same puddle in a {place} home — and they need four completely different repairs. The expensive mistake is fixing the wrong one.',
    '{brand} works the diagnosis first. We trace where the water entered, repair the failure, test the drainage under real flow, and tell you what it would take to keep the next storm outside. Before anyone goes down there, the power to that level needs to be off — water and live circuits are the real danger in a flooded basement, well ahead of the water damage itself.',
  ],
  sidebarSections: [
    {
      title: 'What the Job Covers',
      body: [
        'Finding the actual source, repairing whatever failed — the burst line, the seized valve, the dead pump, the blocked main — then testing floor drains and the main line under real flow rather than a bucket of water.',
        'After that, protection against the next one: a backup pump, a check valve, or a new discharge route, depending on what let you down this time in your {neighborhood} home.',
      ],
    },
    {
      title: 'When You Do Not Need Us',
      body: [
        'A small amount of clean water on a sealed concrete floor from a known one-off, mopped up the same hour, is finished. You do not need a plumber and you do not need a drying crew.',
        'If your basement takes water at the wall base every heavy rain and the plumbing is sound, that is an exterior drainage and grading problem. A waterproofing contractor is the right call, not us. We can confirm which one you are dealing with, and that visit is worth more to you than a pump you did not need.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'sump-pumps', title: 'Sump Pumps' },
    { slug: 'sewer-backup-repair', title: 'Sewer Backup Repair' },
    { slug: 'emergency-water-extraction', title: 'Emergency Water Extraction' },
    { slug: 'structural-drying', title: 'Structural Drying' },
  ],
  band1Image: '/services/basement-flood-sources.webp',
  band1Heading: 'Where Basement Water Comes From in {neighborhood}',
  commonSituations: [
    'A failed sump pump, float switch, or check valve',
    'A backed-up floor drain or main sewer line',
    'A burst or split supply line in the ceiling or wall',
    'A water heater that let go at the base',
    'A cracked or separated drain line under the slab',
    'A discharge line that ends too close to the foundation',
    'Groundwater entering through the foundation or footer drain',
  ],
  trustedBanner: 'Your Local & Trusted Basement Flood Plumbers in {neighborhood}',
  band2Image: '/services/basement-flood-hero.webp',
  band2Heading: 'What to Expect From a Flooded Basement Call in {neighborhood}',
  band2Paragraphs: [
    'We confirm the power to that level is off, then find the source before quoting anything — a camera on the drain line and the discharge, a load test on the pump, and a look at where the water actually entered rather than where it pooled.',
    'Then we repair the failure, run the drains under real flow to prove the fix, and tell you plainly whether the structure also needs drying and what that will take. One company for both halves beats coordinating two.',
  ],
  proseSections: [
    { title: 'Turn the Power Off First', body: 'Nobody should walk into standing water on a level that still has live circuits. That is the real danger in a flooded basement, ahead of the water damage. If the panel is in the basement and you would have to stand in water to reach it, do not — call an electrician or the utility, and call us after.' },
    { title: 'Plumbing, Sewer, or Groundwater', body: 'Clean water near a fixture, a water heater, or a ceiling line is usually plumbing. Water rising at a floor drain, especially if it smells, is the sewer. Water seeping in at the base of the walls after heavy rain is groundwater, which is a drainage and grading question rather than a pipe question. We identify which of the three you have in {neighborhood} before quoting, because the three repairs have nothing in common.' },
    { title: 'Why the Pump Ran and It Still Flooded', body: 'Usually one of three reasons: the pump could not keep up with the volume, the discharge line was blocked or frozen so the water it pumped came straight back, or the pump failed partway through and nobody knew. A camera on the discharge and a load test on the pump sorts out which it was, and the answer decides whether you need a bigger pump, a battery backup, or a different discharge route.' },
    { title: 'Same-Day Response Across {neighborhood}', body: 'A basement filling now cannot wait for a slot next week, and we reach most {neighborhood} homes the same day. If what you describe on the phone is exterior drainage rather than plumbing, we will say so then rather than send a truck to sell you a pump.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'clock', title: 'Same-Day Response', text: 'A basement filling now cannot wait for a slot next week. We reach most homes the same day.' },
    { icon: 'check', title: 'We Find the Source', text: 'Diagnosis first. Fixing the wrong thing is the most expensive outcome in a flooded basement.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked plumbers, permits where the code calls for them.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
  ],
  proofQuote:
    'The basement had a few inches in it and two other companies wanted to sell us a bigger pump. These guys put a camera down the discharge, found it blocked solid, cleared it and rerouted the end of the line. It has stayed dry through every storm since.',
  sharedFaqs: [
    { q: 'How do I tell if my basement flood is a plumbing problem or groundwater?', a: 'Clean water appearing near a fixture, a water heater, or a ceiling line is usually plumbing. Water seeping in at the base of the walls or up through the floor after heavy rain is usually groundwater, which is a drainage and sump pump question rather than a pipe question. Water at a floor drain that smells is a sewer issue. We identify which of the three you have before quoting.' },
    { q: 'Is it safe to go into a flooded basement?', a: 'Not until the power to that level is off. Water and live circuits together are the real danger in a flooded basement, well ahead of the water damage itself. If the panel is in the basement and you would have to stand in water to reach it, do not — call an electrician or the utility.' },
    { q: 'My sump pump ran the whole storm and the basement still flooded. Why?', a: 'Usually one of three reasons: the pump could not keep up with the volume, the discharge line was blocked or frozen so the water it pumped came straight back, or the pump failed partway through and you did not know. A camera on the discharge and a load test on the pump sorts out which it was.' },
    { q: 'Will you dry the basement out as well?', a: 'Yes. Our water damage restoration and structural drying crews handle the extraction and the drying, and the plumbing side that caused it is our work too. Most flooded basements need both, and we would rather send one company than have you coordinate two.' },
    { q: 'How do I stop this happening again?', a: 'It depends what failed. If it was the pump, a battery backup covers the power-loss case that catches most people. If it was the main line, clearing and lining it is the fix. If it was groundwater volume, the answer may be drainage work outside rather than plumbing inside — and we will tell you if that is what you actually need.' },
  ],
  related: [
    { label: 'Basement Flood Plumbing (overview)', href: '/services/basement-flood-plumbing' },
    { label: 'After Flood Plumbing', href: '/services/after-flood-plumbing' },
    { label: 'Sump Pumps', href: '/services/sump-pumps' },
    { label: 'Sewer Backup Repair', href: '/services/sewer-backup-repair' },
    { label: 'Structural Drying', href: '/services/structural-drying' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => basementFloodPlumbingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Basement Flood Plumbing in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Finding and fixing the plumbing failure behind a flooded basement in ${place}. Same-day service, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/basement-flood-plumbing/${loc.slug}` },
    openGraph: {
      title: `Basement Flood Plumbing in ${place} | ${site.name}`,
      description: `Same-day basement flood plumbing serving ${place} and nearby areas.`,
    },
  };
}

export default async function BasementFloodPlumbingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = basementFloodPlumbingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
