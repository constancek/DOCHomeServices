import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { basementLightingCopy } from '@/content/location-copy/basement-lighting';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'basement-lighting',
  serviceName: 'Basement Lighting Installation',
  eyebrow: 'Lighting',
  hubLabel: 'Basement Lighting',
  parentCrumb: { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'Basement Lighting Installation',
  ctaLine: 'Want to turn a dim {neighborhood} basement into usable space? Call today',
  heroImage: '/services/basement-hero.jpg',
  introHeading: 'Basement Lighting Installation in {neighborhood}',
  introParagraphs: [
    'Basements get little natural light, so the right lighting is what turns a dim {neighborhood} lower level into real living space. {brand} installs recessed and LED basement lighting across {place} — even, bright coverage for finished rooms, work areas, and storage, all wired safely.',
    'Our licensed electricians plan the layout around how you use the space, install the fixtures, and connect everything to current electrical standards — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} basements we evaluate the layout and ceiling height, plan fixture placement, run safe wiring, install recessed cans or LED fixtures, and test brightness before we leave.',
        'If the basement needs a new circuit or the existing one is overloaded, we handle it and explain the cost up front.',
      ],
    },
    {
      title: 'Lit for Low Ceilings',
      body: [
        'Many {neighborhood} basements have low or beam-broken ceilings where bulky fixtures feel cramped. Recessed cans sit flush and spread even light, keeping the space feeling open and bright.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'indoor-lighting', title: 'Indoor Lighting' },
    { slug: 'recessed-lighting', title: 'Recessed Lighting' },
    { slug: 'led-lighting', title: 'LED Lighting' },
    { slug: 'lighting-fixture-installation', title: 'Lighting Fixtures' },
  ],
  band1Image: '/services/basement-signs.jpg',
  band1Heading: 'Signs It Is Time to Upgrade Basement Lighting in {neighborhood}',
  commonSituations: [
    'Dark corners or uneven lighting',
    'Outdated fixtures with limited brightness',
    'Flickering lights or unreliable switches',
    'A finished basement that still feels dim',
    'A home office, gym, or media area needing stronger light',
    'Older fixtures still running inefficient bulbs',
    'A newly finished lower level with no real lighting plan',
  ],
  trustedBanner: 'Your Local & Trusted Basement Lighting Pros in {neighborhood}',
  band2Image: '/services/basement-lighting.jpg',
  band2Heading: 'Our Basement Lighting Process in {neighborhood}',
  band2Paragraphs: [
    'We review how the basement will be used, plan fixture placement for even brightness, and explain the flat-rate price before any work begins.',
    'We run safe wiring, install recessed cans or LED fixtures, and test the layout so your {neighborhood} basement is evenly lit, comfortable, and connected safely to the electrical system.',
  ],
  proseSections: [
    { title: 'Recessed Lighting for a Clean, Modern Look', body: 'Recessed cans sit flush in the ceiling, so they spread even light without making a low {neighborhood} basement feel shorter. They work well in media rooms, living areas, and home offices, and proper spacing keeps the whole space free of dark corners.' },
    { title: 'Energy-Efficient LED Basement Lights', body: 'LED uses far less power, lasts for years, and runs cool — which matters in an enclosed {neighborhood} basement. We install efficient LED basement lighting for steady brightness, lower bills, and fewer bulb changes.' },
    { title: 'Layered for How the Space Is Used', body: 'A finished {neighborhood} basement often serves several purposes — entertaining, an office, a gym. We layer recessed, accent, and task lighting so each area is lit the way it is actually used, not just one flat overhead glow.' },
    { title: 'Safe Wiring and Circuit Capacity', body: 'Adding lighting to a {neighborhood} basement can push an older circuit past its limit. We check the panel, add capacity where it is needed, and wire every fixture to code so the system runs reliably without nuisance trips.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Experienced indoor-lighting pros handling every connection safely.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Wiring and fixtures installed to current electrical code.' },
    { icon: 'badge', title: 'Quality Fixtures', text: 'Durable fixtures and energy-efficient LED basement lights.' },
    { icon: 'house', title: 'Layout-Specific Design', text: 'Lighting planned around how you actually use the basement.' },
  ],
  proofQuote:
    'Our finished basement always felt like a cave. They ran recessed LED cans across the whole ceiling, added task lighting at the desk, and put it on its own circuit. It is bright and even now, and the low ceiling still feels open. Clean work.',
  sharedFaqs: [
    { q: 'What types of basement lighting options do you offer?', a: 'We install recessed lighting, LED basement lights, ceiling fixtures, and other lighting solutions designed for basement spaces.' },
    { q: 'Can I install basement lights myself?', a: 'Some lighting upgrades may appear simple, but professional installation ensures safe wiring and proper electrical connections.' },
    { q: 'Will upgrading my basement lighting increase my home’s value?', a: 'Better lighting can make finished basements more functional and appealing, which may improve overall home value.' },
    { q: 'Do you handle wiring and electrical work as part of the installation?', a: 'Yes. Our electricians complete all required electrical work, including wiring and fixture installation.' },
    { q: 'How long will the installation take?', a: 'Most basement lighting installations can be completed within one day, depending on the number of fixtures and the layout of the space.' },
  ],
  related: [
    { label: 'Basement Lighting (overview)', href: '/services/basement-lighting' },
    { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
    { label: 'Recessed Lighting', href: '/services/recessed-lighting' },
    { label: 'LED Lighting', href: '/services/led-lighting' },
    { label: 'Lighting Fixture Installation', href: '/services/lighting-fixture-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => basementLightingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Basement Lighting Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Basement lighting installation in ${place} — recessed and LED basement lighting installed by licensed electricians to brighten finished and unfinished spaces. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/basement-lighting/${loc.slug}` },
    openGraph: {
      title: `Basement Lighting Installation in ${place} | ${site.name}`,
      description: `Licensed basement lighting installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function BasementLightingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = basementLightingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
