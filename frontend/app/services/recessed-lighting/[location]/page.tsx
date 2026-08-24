import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { recessedLightingCopy } from '@/content/location-copy/recessed-lighting';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'recessed-lighting',
  serviceName: 'Recessed Lighting Installation',
  eyebrow: 'Lighting',
  hubLabel: 'Recessed Lighting',
  parentCrumb: { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'Recessed Lighting Installation',
  ctaLine: 'Want cleaner, brighter ceilings in your {neighborhood} home? Call today',
  heroImage: '/services/recessed-hero.webp',
  introHeading: 'Recessed Lighting Installation in {neighborhood}',
  introParagraphs: [
    'Recessed lighting brightens a {neighborhood} home without bulky fixtures — the cans sit flush in the ceiling and spread light evenly across kitchens, hallways, and living rooms. {brand} installs recessed lighting for homeowners across {place}, with safe, code-compliant wiring and balanced placement.',
    'Our licensed electricians plan the layout, protect the existing wiring, and install each can to current electrical standards — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} homes we review the room and ceiling structure, plan the can placement, choose the correct housing type, connect the wiring safely, install each fixture, and test brightness before we leave.',
        'If a room needs a new circuit or the ceiling needs careful access, we handle it and explain the cost up front.',
      ],
    },
    {
      title: 'Even Light, No Shadows',
      body: [
        'The key to recessed lighting is spacing — too far apart leaves dark gaps, too close washes out the room. We plan each {neighborhood} layout so the light spreads evenly across counters, walkways, and seating areas.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'indoor-lighting', title: 'Indoor Lighting' },
    { slug: 'led-lighting', title: 'LED Lighting' },
    { slug: 'lighting-fixture-installation', title: 'Lighting Fixtures' },
    { slug: 'basement-lighting', title: 'Basement Lighting' },
  ],
  band1Image: '/services/recessed-signs.webp',
  band1Heading: 'Signs You Need Recessed Lighting in {neighborhood}',
  commonSituations: [
    'Dark areas in kitchens, hallways, or living rooms',
    'Rooms that rely heavily on lamps',
    'Uneven lighting across counters or work areas',
    'Outdated or bulky ceiling fixtures',
    'A cleaner, more modern ceiling look',
    'A finished basement or renovation that needs even lighting',
    'Older fixtures still running inefficient bulbs',
  ],
  trustedBanner: 'Your Local & Trusted Recessed Lighting Pros in {neighborhood}',
  band2Image: '/services/recessed-lighting.webp',
  band2Heading: 'Our Recessed Lighting Process in {neighborhood}',
  band2Paragraphs: [
    'We review the room and ceiling, plan a layout with proper spacing, and explain the flat-rate price before any work begins.',
    'We connect the wiring safely, install each can, and test brightness so your {neighborhood} ceiling looks clean and the room is lit evenly from corner to corner.',
  ],
  proseSections: [
    { title: 'Placement and Spacing', body: 'Recessed lighting only looks right when the spacing is planned — even gaps, no dark corners, and light aimed where the room is used. We lay out the cans for a {neighborhood} kitchen or living room so the light is balanced across counters, seating, and walkways.' },
    { title: 'Safe Wiring and Ceiling Work', body: 'Recessed cans involve wiring and cutting into the ceiling, which is why a DIY job often goes wrong. We protect the existing wiring, secure each housing, and bring every connection up to code so a {neighborhood} install is safe and clean.' },
    { title: 'Energy-Efficient LED Cans', body: 'LED recessed fixtures use far less power and last for years, so they pay off in rooms lit every day. We install efficient LED cans throughout {neighborhood} homes for strong, even light with fewer bulb changes and lower energy bills.' },
    { title: 'New Rooms and Finished Ceilings', body: 'Adding cans during a renovation is straightforward with the ceiling open, while a finished {neighborhood} ceiling needs careful access and extra wiring. We evaluate the room first and recommend the right number of fixtures for balanced lighting either way.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Experienced lighting pros handling every connection safely.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Proper spacing, secure cans, and wiring that meets code.' },
    { icon: 'badge', title: 'Quality Fixtures', text: 'Energy-efficient LED cans built to last for years.' },
    { icon: 'house', title: 'Balanced Layout', text: 'Placement planned to spread light evenly and remove shadows.' },
  ],
  proofQuote:
    'They laid out recessed cans across the kitchen and living room, spaced them so there are no dark spots, and switched it all to LED. The whole floor is brighter and the ceiling looks clean. Careful work and a fair price.',
  sharedFaqs: [
    { q: 'Can recessed lights be used in bathrooms or damp areas?', a: 'Yes. Some recessed lighting fixtures are designed for bathrooms and damp spaces when installed properly.' },
    { q: 'Do I need an electrician or can I DIY?', a: 'Recessed lighting installation involves electrical wiring and ceiling work. Hiring an electrician helps ensure safe installation.' },
    { q: 'How much does recessed lighting installation typically cost?', a: 'Costs depend on the number of fixtures, ceiling access, and the electrical work required.' },
    { q: 'Can recessed lighting increase home value?', a: 'Many homeowners install recessed lighting because it improves brightness and modernizes a room.' },
    { q: 'How long do recessed LED lights last?', a: 'LED recessed lights typically last many years and use less electricity than traditional bulbs.' },
  ],
  related: [
    { label: 'Recessed Lighting (overview)', href: '/services/recessed-lighting' },
    { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
    { label: 'LED Lighting', href: '/services/led-lighting' },
    { label: 'Basement Lighting', href: '/services/basement-lighting' },
    { label: 'Lighting Fixture Installation', href: '/services/lighting-fixture-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => recessedLightingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Recessed Lighting Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Recessed lighting installation in ${place} — clean, even ceiling lighting for kitchens, hallways, living rooms, and basements by licensed electricians. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/recessed-lighting/${loc.slug}` },
    openGraph: {
      title: `Recessed Lighting Installation in ${place} | ${site.name}`,
      description: `Licensed recessed lighting installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function RecessedLightingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = recessedLightingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
