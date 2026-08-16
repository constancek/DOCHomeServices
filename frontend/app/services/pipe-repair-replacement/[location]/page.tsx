import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { pipeRepairCopy } from '@/content/location-copy/pipe-repair-replacement';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'pipe-repair-replacement',
  serviceName: 'Pipe Repair & Replacement',
  eyebrow: 'Plumbing',
  hubLabel: 'Pipe Repair & Replacement',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Pipe Repair & Replacement',
  ctaLine: 'Dealing with a leak or damaged pipe in {neighborhood}? Call today',
  heroImage: '/services/pipe-hero.webp',
  introHeading: 'Pipe Repair & Replacement in {neighborhood}',
  introParagraphs: [
    'A small leak rarely stays small — damaged pipes waste water, harm the home, and get more expensive the longer they wait. {brand} handles pipe repair and replacement for homeowners in {place}, from emergency leaks to full-scale replacements, using camera inspection and leak detection to find the real problem.',
    'Whether a section can be repaired or the line needs replacing, our licensed plumbers recommend the most cost-effective fix and complete it with minimal disruption — including trenchless options where they fit. Call (513) 586-5107.',
  ],
  sidebarSections: [
    {
      title: 'Repair or Replace',
      body: [
        'For {neighborhood} homes we inspect with a camera to confirm the real cause, then repair a faulty connection or damaged section when that holds, or replace the line when it is cracked, collapsed, or heavily corroded.',
        'We explain which option fits and why, so you are not paying to replace a line that only needs a targeted repair.',
      ],
    },
    {
      title: 'Minimally Invasive Methods',
      body: [
        'Camera inspection and trenchless techniques let us locate and replace pipe in {neighborhood} homes with less digging — protecting lawns, slabs, and finished basements wherever the layout allows.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'leak-detection', title: 'Leak Detection' },
    { slug: 'whole-house-repiping', title: 'Whole-House Repiping' },
    { slug: 'sewer-repair-replacement', title: 'Sewer Repair' },
    { slug: 'emergency-plumbing', title: 'Emergency Plumbing' },
  ],
  band1Image: '/services/pipe-signs.webp',
  band1Heading: 'The Dangers of Ignoring a Damaged Pipe in {neighborhood}',
  commonSituations: [
    'A leak warping floors or staining walls and ceilings',
    'Mold or mildew from a damp, hidden leak',
    'A water bill climbing with no change in usage',
    'Frequent clogs or slow, gurgling drains',
    'Corroded cast-iron or galvanized lines in an older home',
    'A cracked, sagging, or collapsed drain line',
    'A burst pipe or active leak that cannot wait',
  ],
  trustedBanner: 'Your Local & Trusted Pipe Repair Pros in {neighborhood}',
  band2Image: '/services/pipe-repair-replacement.webp',
  band2Heading: 'Our Pipe Repair & Replacement Process in {neighborhood}',
  band2Paragraphs: [
    'We locate the problem with camera inspection and leak detection, then explain whether a repair or replacement is the better value and the flat-rate price before any work begins.',
    'We repair the section or run new pipe — trenchless where it fits — and verify the system holds, so your {neighborhood} home is back to normal with as little disruption as possible.',
  ],
  proseSections: [
    { title: 'Leaky Pipe Repair', body: 'A leak that seeps into walls, ceilings, or floors causes mold, rot, and costly repairs. We trace the source in a {neighborhood} home with leak-detection tools — a worn valve, a hidden joint, a corroded section — and repair or replace just that area without tearing the place apart.' },
    { title: 'Drain Pipe Repair', body: 'Clogged or damaged drain lines in {neighborhood} homes often trace back to tree-root infiltration or old cast-iron corrosion. We camera-inspect to confirm the cause, then patch, replace, or reseal so sewage keeps moving and clogs do not keep coming back.' },
    { title: 'Pipe Replacement and Trenchless', body: 'When a pipe is cracked, collapsed, or corroded beyond use, replacement is the right call. We use trenchless techniques where the layout allows to swap lines under a {neighborhood} lawn, slab, or basement floor with minimal digging and disruption.' },
    { title: 'Aging Pipes in Older Homes', body: 'Cast iron can last 50 to 100 years and copper longer, but many older {neighborhood} homes are past due for an inspection. We assess what is left of the original plumbing and lay out a clear plan — section repair now, or replacement before the next failure.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Plumbers', text: 'Experienced pros who diagnose the real cause before they dig.' },
    { icon: 'check', title: 'Minimally Invasive', text: 'Camera inspection and trenchless methods protect your property.' },
    { icon: 'badge', title: 'Repair or Replace', text: 'Honest guidance on the most cost-effective fix.' },
    { icon: 'clock', title: 'Emergency Service', text: 'Fast help when a leak or burst pipe cannot wait.' },
  ],
  proofQuote:
    'Slow drains and a stain on the basement ceiling. They camera-scoped the line, found a corroded cast-iron section and a leaking joint, and replaced just those runs trenchless where they could. Walked us through repair versus replacement honestly. No torn-up yard.',
  sharedFaqs: [
    { q: 'How do I know if I need drain pipe repair or full pipe replacement?', a: 'Frequent clogs, slow drainage, or standing water may point to a damaged or aging drain line. Minor issues like buildup can be repaired, while broken, sagging, or heavily corroded pipes typically need full replacement. A professional inspection determines the best approach.' },
    { q: 'What is involved in leaky pipe repair?', a: 'We start by locating the leak with specialized detection tools, then either repair the faulty connection, replace a damaged section of pipe, or reseal the area using quality materials built for long-term safety.' },
    { q: 'Can store-bought drain cleaner damage my plumbing?', a: 'Yes. Harsh chemical drain cleaners can eat away at old or weakened pipes, sometimes causing more damage than the original clog. Professional drain cleaning is safer and more effective.' },
    { q: 'How often should pipes be replaced in an older home?', a: 'Cast iron pipes often last around 50 to 100 years, while copper and PVC can go longer with proper maintenance. Homes that are several decades old should have their plumbing inspected and potentially updated.' },
    { q: 'Are your services available for emergencies?', a: 'Yes. We provide emergency plumbing for situations like burst pipes and major leaks, responding quickly to get things under control when the problem cannot wait.' },
  ],
  related: [
    { label: 'Pipe Repair & Replacement (overview)', href: '/services/pipe-repair-replacement' },
    { label: 'Leak Detection', href: '/services/leak-detection' },
    { label: 'Whole-House Repiping', href: '/services/whole-house-repiping' },
    { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
    { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => pipeRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Pipe Repair & Replacement in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Pipe repair and replacement in ${place} — licensed plumbers fix leaks, clear damaged drain lines, and replace failing pipes, including trenchless options. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/pipe-repair-replacement/${loc.slug}` },
    openGraph: {
      title: `Pipe Repair & Replacement in ${place} | ${site.name}`,
      description: `Licensed pipe repair and replacement serving ${place} and nearby areas.`,
    },
  };
}

export default async function PipeRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = pipeRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
