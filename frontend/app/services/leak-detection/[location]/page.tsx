import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { leakDetectionCopy } from '@/content/location-copy/leak-detection';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'leak-detection',
  serviceName: 'Leak Detection',
  eyebrow: 'Plumbing',
  hubLabel: 'Leak Detection',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Leak Detection',
  ctaLine: 'Think you have a hidden leak in {neighborhood}? Call today',
  heroImage: '/services/leak-hero.webp',
  introHeading: 'Leak Detection in {neighborhood}',
  introParagraphs: [
    'The worst leaks are the ones you cannot see — behind a wall, under the slab, or inside a ceiling — quietly causing damage for weeks. {brand} finds them fast for homeowners in {place}, using acoustic, thermal, and camera tools that pinpoint the exact source without tearing up your home.',
    'Once we know where the leak is, our licensed plumbers explain what we found in plain terms and recommend the smallest effective fix — with upfront flat-rate pricing you approve before we start. Call (513) 586-5107.',
  ],
  sidebarSections: [
    {
      title: 'How We Find It',
      body: [
        'For {neighborhood} homes we start by listening to what you have noticed — a higher bill, a stain, the sound of running water — then bring in acoustic sensors, thermal cameras, and moisture meters to locate the leak without guesswork.',
        'We pinpoint the exact spot first, so we open up only what we actually need to and the repair stays targeted.',
      ],
    },
    {
      title: 'Why Early Detection Matters',
      body: [
        'A slow leak in a {neighborhood} home rots framing, ruins drywall, and grows mold long before it is visible — while wasting thousands of gallons. Finding it early is far cheaper than the repairs that follow.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'pipe-repair-replacement', title: 'Pipe Repair' },
    { slug: 'plumbing-repair', title: 'Plumbing Repair' },
    { slug: 'sewer-repair-replacement', title: 'Sewer Repair' },
    { slug: 'emergency-plumbing', title: 'Emergency Plumbing' },
  ],
  band1Image: '/services/leak-signs.webp',
  band1Heading: 'Signs of a Hidden Leak in Your {neighborhood} Home',
  commonSituations: [
    'An unexplained jump in your water bill',
    'Damp, stained, or discolored walls or ceilings',
    'Mold, mildew, or a persistent musty smell',
    'The sound of running water when everything is off',
    'Warm or damp spots on the floor',
    'Low water pressure with no clear cause',
    'A suspected slab leak under the foundation',
  ],
  trustedBanner: 'Your Local & Trusted Leak Detection Pros in {neighborhood}',
  band2Image: '/services/leak-tools.webp',
  band2Heading: 'Our Leak Detection Process in {neighborhood}',
  band2Paragraphs: [
    'We listen to what you have observed, then use acoustic, thermal, and camera tools to locate the leak precisely, and explain the flat-rate price before any work begins.',
    'For smaller issues we often repair on the same visit; for slab or basement leaks we give a clear plan and schedule the work fast, so your {neighborhood} home gets back to normal with minimal damage.',
  ],
  proseSections: [
    { title: 'Non-Invasive, Pinpoint Location', body: 'We find the leak before we open anything up. Acoustic sensors, thermal imaging, moisture meters, and pipe cameras locate the exact spot in a {neighborhood} home, so the repair is targeted and the mess is minimal instead of guesswork and torn-out drywall.' },
    { title: 'Slab and Under-Foundation Leaks', body: 'A leak under the slab is one of the hardest to spot and the most damaging if ignored. We trace slab and under-foundation leaks in {neighborhood} homes with the right tools and lay out a clear plan to fix them without unnecessary demolition.' },
    { title: 'Walls, Ceilings, and Supply Lines', body: 'Hidden leaks behind walls or in ceilings show up as stains, mold, and musty odors. We track moisture back to its source — a supply line, a fitting, a fixture — across {neighborhood} homes and confirm it before recommending the smallest effective fix.' },
    { title: 'Same-Day and Emergency Response', body: 'Leaks do not wait, and neither do we. For active leaks, flooding, or a suspected slab leak in {neighborhood}, we are on call and reach most homes the same day to stop the damage and find the source.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'badge', title: 'Non-Invasive Tools', text: 'Acoustic, thermal, and camera equipment finds the leak without guesswork or demolition.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
    { icon: 'check', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
    { icon: 'clock', title: 'Same-Day Service', text: 'Most leak calls are handled the same day you reach out.' },
  ],
  proofQuote:
    'Our water bill doubled with no explanation. They listened around the house, used the acoustic gear, and found a supply line leaking under the slab. Pinpointed it exactly, opened up only that spot, and fixed it the same week. No guesswork.',
  sharedFaqs: [
    { q: 'How does a leak detection service work?', a: 'We use non-invasive tools — acoustic listening devices, thermal imaging, moisture meters, pressure tests, and pipe cameras — to pinpoint a leak’s exact location before opening anything up, so the repair is targeted and the mess is minimal.' },
    { q: 'What are the signs I might need water leak detection?', a: 'Watch for an unexplained jump in your water bill, stains or discoloration, mold or a musty smell, the sound of running water when nothing is on, low pressure, or warm and damp spots on the floor.' },
    { q: 'Can small leaks really cause big damage?', a: 'Yes. A slow, hidden leak can rot framing, ruin drywall and flooring, and grow mold over weeks or months — while wasting thousands of gallons of water. Finding it early is far cheaper than the repairs that follow.' },
    { q: 'Do you offer emergency leak detection services?', a: 'Yes. We are on call 24/7 for active leaks, flooding, and suspected slab leaks, and we reach most homes the same day.' },
    { q: 'What areas of my home are most susceptible to leaks?', a: 'The most common spots are under slabs, behind walls, under sinks and toilets, at the water heater, along supply lines, and in outdoor or irrigation lines. We check them all.' },
  ],
  related: [
    { label: 'Leak Detection (overview)', href: '/services/leak-detection' },
    { label: 'Pipe Repair & Replacement', href: '/services/pipe-repair-replacement' },
    { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
    { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
    { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => leakDetectionCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Leak Detection in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Hidden water and slab leak detection in ${place} — acoustic, thermal, and camera tools find the source fast without tearing up your home. Same-day service. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/leak-detection/${loc.slug}` },
    openGraph: {
      title: `Leak Detection in ${place} | ${site.name}`,
      description: `Licensed leak detection serving ${place} and nearby areas.`,
    },
  };
}

export default async function LeakDetectionLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = leakDetectionCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
