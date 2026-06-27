import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { wholeHouseRepipingCopy } from '@/content/location-copy/whole-house-repiping';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'whole-house-repiping',
  serviceName: 'Whole-House Repiping',
  eyebrow: 'Plumbing',
  hubLabel: 'Whole-House Repiping',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Whole-House Repiping',
  ctaLine: 'Tired of leaks and rusty water in your {neighborhood} home? Call today',
  heroImage: '/services/repiping-hero.jpg',
  introHeading: 'Whole-House Repiping in {neighborhood}',
  introParagraphs: [
    'Old water pipes do not last forever — over time they corrode, narrow, and start to leak, hurting water quality, pressure, and peace of mind. {brand} repipes homes in {place}, replacing aging galvanized steel and polybutylene supply lines with modern PEX or copper built to last.',
    'Whether you are dealing with repeat leaks or planning ahead, our licensed plumbers restore reliable water throughout the home — with an upfront estimate after we inspect. Call (513) 586-5107.',
  ],
  sidebarSections: [
    {
      title: 'How a Repipe Works',
      body: [
        'For {neighborhood} homes we start with a full assessment, build a plan around your layout, replace the supply lines with PEX or copper, then leak-test, inspect, and clean up.',
        'We work room by room to keep the project organized and your water on as much as possible while the work is underway.',
      ],
    },
    {
      title: 'PEX or Copper, Sized Right',
      body: [
        'Modern PEX and copper outlast the galvanized and polybutylene they replace. We size the new lines to your {neighborhood} home so pressure is steady at every fixture and the water runs clean.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'pipe-repair-replacement', title: 'Pipe Repair' },
    { slug: 'leak-detection', title: 'Leak Detection' },
    { slug: 'water-quality', title: 'Water Quality' },
    { slug: 'plumbing-installation', title: 'Plumbing Installation' },
  ],
  band1Image: '/services/repiping-signs.jpg',
  band1Heading: 'Signs Your {neighborhood} Home Needs Repiping',
  commonSituations: [
    'Frequent or repeat leaks throughout the house',
    'Brown, yellow, or rusty discolored water',
    'Low water pressure at multiple fixtures',
    'Banging or clanking noises in the pipes',
    'Visible rust or corrosion on exposed lines',
    'Old galvanized steel or polybutylene supply lines',
    'A remodel or addition that is the right time to repipe',
  ],
  trustedBanner: 'Your Local & Trusted Repiping Pros in {neighborhood}',
  band2Image: '/services/whole-house-repiping.jpg',
  band2Heading: 'Our Whole-House Repiping Process in {neighborhood}',
  band2Paragraphs: [
    'We assess the whole plumbing system, build a plan around your home’s layout, and give you an upfront estimate before any work begins.',
    'We replace the supply lines with PEX or copper, leak-test and inspect the system, and clean up thoroughly, so your {neighborhood} home has clean, steady water at every tap.',
  ],
  proseSections: [
    { title: 'Replacing Galvanized and Polybutylene', body: 'Galvanized steel corrodes from the inside and polybutylene fails at the fittings — both common in older {neighborhood} homes. We replace the whole supply system with modern PEX or copper so the recurring leaks and rusty water stop for good.' },
    { title: 'Better Pressure and Water Quality', body: 'Decades of corrosion narrow old pipes and tint the water. A full repipe in a {neighborhood} home restores steady pressure at every fixture and gives you clean, clear water from lines that are not rusting from the inside out.' },
    { title: 'Organized, Minimally Disruptive Work', body: 'A repipe sounds like a big job, and it is — but we keep it manageable for {neighborhood} homeowners. We work room by room, keep water on where we can, communicate each step, and clean up so the house is livable throughout.' },
    { title: 'Repipe vs. Targeted Repair', body: 'If only one run is failing, a targeted pipe repair may be the smarter spend. We inspect the whole system in a {neighborhood} home and tell you honestly whether a full repipe or a focused repair is the better long-term value.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Plumbers', text: 'Experienced pros who repipe homes cleanly and to code.' },
    { icon: 'check', title: 'Quality Materials', text: 'Durable PEX or copper sized for your home.' },
    { icon: 'badge', title: 'Upfront Estimates', text: 'A clear quote after we inspect your system.' },
    { icon: 'house', title: 'Thorough Cleanup', text: 'Leak-tested results and a tidy finish.' },
  ],
  proofQuote:
    'Galvanized lines, rusty water, and a leak every few months. They mapped out the whole house, repiped it in PEX over a few days, and kept the water on at night. Pressure is back, the water runs clear, and they cleaned up like they were never here.',
  sharedFaqs: [
    { q: 'How do I know if I need plumbing repiping services?', a: 'Low water pressure, rusty water, frequent leaks, or unusual sounds indicate aging pipes. Galvanized steel and polybutylene systems particularly benefit from repiping.' },
    { q: 'What is residential repiping, and how long does it take?', a: 'It is the complete replacement of old water supply pipes with modern materials like PEX or copper, typically taking a few days to a week depending on home size.' },
    { q: 'Is whole-home repiping really necessary?', a: 'It becomes worthwhile when pipes leak frequently, show heavy corrosion, or use outdated materials — improving water quality and property value.' },
    { q: 'How much does it cost to repipe a house?', a: 'Pricing depends on home size, fixture count, and materials. Our specialists provide an upfront estimate during the inspection.' },
    { q: 'Will my water be off the whole time?', a: 'No. We work in stages and keep water on as much as possible, with only short shutoffs while we tie in new lines.' },
  ],
  related: [
    { label: 'Whole-House Repiping (overview)', href: '/services/whole-house-repiping' },
    { label: 'Pipe Repair & Replacement', href: '/services/pipe-repair-replacement' },
    { label: 'Leak Detection', href: '/services/leak-detection' },
    { label: 'Water Quality', href: '/services/water-quality' },
    { label: 'Plumbing Installation', href: '/services/plumbing-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => wholeHouseRepipingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Whole-House Repiping in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Whole-house repiping in ${place} — licensed plumbers replace old, corroded, or failing water pipes with modern PEX or copper. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/whole-house-repiping/${loc.slug}` },
    openGraph: {
      title: `Whole-House Repiping in ${place} | ${site.name}`,
      description: `Licensed whole-house repiping serving ${place} and nearby areas.`,
    },
  };
}

export default async function WholeHouseRepipingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = wholeHouseRepipingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
