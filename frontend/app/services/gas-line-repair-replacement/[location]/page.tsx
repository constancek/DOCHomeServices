import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { gasLineCopy } from '@/content/location-copy/gas-line-repair-replacement';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'gas-line-repair-replacement',
  serviceName: 'Gas Line Repair & Replacement',
  eyebrow: 'Plumbing',
  hubLabel: 'Gas Line Repair & Replacement',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Gas Line Repair & Replacement',
  ctaLine: 'Suspect a gas line problem in {neighborhood}? Call today',
  heroImage: '/services/gasline-hero.webp',
  introHeading: 'Gas Line Repair & Replacement in {neighborhood}',
  introParagraphs: [
    'Gas lines power some of a {neighborhood} home’s most important appliances, and a damaged or aging line leaves no room for error. {brand} diagnoses, repairs, replaces, and installs gas lines for homeowners in {place} — completed to code and pressure-tested before the job is done.',
    'Our licensed plumbers locate the problem, explain whether a repair or full replacement is the right call, and handle the work safely. If you smell a strong gas odor, leave the home and call your gas utility or 911 from a safe distance first, then call (513) 586-5107.',
  ],
  sidebarSections: [
    {
      title: 'Repair, Replace, or Install',
      body: [
        'For {neighborhood} homes we review the layout and appliance load, choose the right piping and connectors, complete the work to code, and pressure-test the line to verify there are no leaks.',
        'A repair fixes a specific point of damage; a replacement removes and re-runs piping when the problem is more systemic. We explain which fits after a thorough diagnosis.',
      ],
    },
    {
      title: 'Safety First, Always',
      body: [
        'Gas work is not like other plumbing — it demands proper sealing, the right materials, and strict code compliance. Every {neighborhood} job is pressure-tested and verified leak-free before we leave.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'plumbing-repair', title: 'Plumbing Repair' },
    { slug: 'water-heater-installation', title: 'Water Heaters' },
    { slug: 'plumbing-installation', title: 'Plumbing Installation' },
    { slug: 'emergency-plumbing', title: 'Emergency Plumbing' },
  ],
  band1Image: '/services/gasline-signs.webp',
  band1Heading: 'Signs of a Gas Line Problem in Your {neighborhood} Home',
  commonSituations: [
    'A rotten-egg or sulfur smell near appliances or the line',
    'Hissing or whistling near a pipe or connection',
    'Dead patches of grass over an underground line',
    'Dizziness, headaches, or nausea indoors',
    'A gas bill climbing with no change in usage',
    'An older line due for replacement before adding appliances',
    'Damage from nearby digging or construction',
  ],
  trustedBanner: 'Your Local & Trusted Gas Line Pros in {neighborhood}',
  band2Image: '/services/gas-line-repair-replacement.webp',
  band2Heading: 'Our Gas Line Process in {neighborhood}',
  band2Paragraphs: [
    'We assess the home layout and appliance requirements, select the right piping and connectors, and explain the flat-rate price before any work begins.',
    'We install or repair to code, then pressure-test the line and verify it is leak-free, so your {neighborhood} home is safe and your appliances run reliably.',
  ],
  proseSections: [
    { title: 'Code-Compliant, Pressure-Tested Work', body: 'Gas work demands proper sealing, the right materials, and strict code compliance — there is no margin for shortcuts. We complete every {neighborhood} gas line to code and pressure-test it to confirm there are no leaks before we hand it back.' },
    { title: 'Repair vs. Replacement', body: 'A small leak at a fitting may only need a targeted repair, while a corroded or aging line is safer to replace. After diagnosing the issue in a {neighborhood} home, we explain both options honestly so you can decide with the full picture.' },
    { title: 'Common Causes We Find', body: 'Most gas line leaks in {neighborhood} homes trace back to corrosion on older lines, loose or aging connections, construction or digging damage, pressure issues, or tree-root interference underground. We track the cause, not just the symptom.' },
    { title: 'New Lines for Appliances and Additions', body: 'Adding a gas range, a generator, a fireplace, or a water heater means running a properly sized line. We plan and install new gas lines for {neighborhood} homes to handle the load safely and pass inspection.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Safety-First Work', text: 'Qualified pros who follow strict gas safety protocols.' },
    { icon: 'check', title: 'Code-Compliant', text: 'Proper sealing, materials, and pressure testing every time.' },
    { icon: 'badge', title: 'Repair or Replace', text: 'Honest guidance on the right fix for your situation.' },
    { icon: 'clock', title: 'Fast Response', text: 'Prompt service when you suspect a gas line problem.' },
  ],
  proofQuote:
    'Smelled gas near the water heater and the bill had crept up. They found a corroded section, walked us through repair versus replacement, and re-ran that line. Pressure-tested it, confirmed no leaks, and explained everything. Felt safe the whole time.',
  sharedFaqs: [
    { q: 'How can I identify gas line problems?', a: 'Strong sulfur odors, hissing sounds, dead grass patches, or appliance failures all warrant a professional inspection.' },
    { q: 'What happens during emergency repairs?', a: 'Technicians respond quickly, locate the leak, shut off gas safely if needed, and complete repairs following strict safety protocols.' },
    { q: 'What is the difference between repair and replacement?', a: 'A repair addresses specific damage, while replacement involves removing and installing new piping for more systemic issues.' },
    { q: 'Is natural gas work different from other plumbing?', a: 'Yes. Qualified professionals must ensure proper sealing, safety compliance, and code adherence on every gas line job.' },
    { q: 'What causes gas line leaks?', a: 'Corrosion, loose connections, construction damage, pressure buildup, or tree root interference can all cause leaks.' },
  ],
  related: [
    { label: 'Gas Line Repair & Replacement (overview)', href: '/services/gas-line-repair-replacement' },
    { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
    { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
    { label: 'Plumbing Installation', href: '/services/plumbing-installation' },
    { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => gasLineCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Gas Line Repair & Replacement in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Gas line repair, replacement, and installation in ${place} — licensed plumbers, code-compliant and pressure-tested work. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/gas-line-repair-replacement/${loc.slug}` },
    openGraph: {
      title: `Gas Line Repair & Replacement in ${place} | ${site.name}`,
      description: `Licensed gas line service serving ${place} and nearby areas.`,
    },
  };
}

export default async function GasLineLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = gasLineCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
