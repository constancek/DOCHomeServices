import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { garageLightingCopy } from '@/content/location-copy/garage-lighting';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'garage-lighting',
  serviceName: 'Garage Lighting Installation',
  eyebrow: 'Lighting',
  hubLabel: 'Garage Lighting',
  parentCrumb: { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'Garage Lighting Installation',
  ctaLine: 'Want to brighten every corner of your {neighborhood} garage? Call today',
  heroImage: '/services/garage-hero.webp',
  introHeading: 'Garage Lighting Installation in {neighborhood}',
  introParagraphs: [
    'Most garages run off a single dim ceiling bulb that leaves the corners, workbench, and storage in shadow. {brand} installs bright, even garage lighting for homeowners across {place} — durable LED fixtures inside and weather-rated lights outside, all by licensed electricians.',
    'Our team plans the placement for full coverage, installs durable fixtures, and wires everything to current electrical standards — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} garages we evaluate the layout and existing electrical, plan placement for even coverage, choose durable fixtures, install LED garage lights or shop-style panels, connect the wiring safely, and test the result.',
        'If the garage needs a new circuit or the existing one is overloaded, we handle it and explain the cost up front.',
      ],
    },
    {
      title: 'Lit for How You Use It',
      body: [
        'A garage used for parking needs different lighting than one used as a workshop or home gym. We plan each {neighborhood} layout around the workbench, storage, and parking areas so there are no dark corners.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'indoor-lighting', title: 'Indoor Lighting' },
    { slug: 'led-lighting', title: 'LED Lighting' },
    { slug: 'basement-lighting', title: 'Basement Lighting' },
    { slug: 'outdoor-lighting', title: 'Outdoor Lighting' },
  ],
  band1Image: '/services/garage-signs.webp',
  band1Heading: 'Signs You Need New Garage Lighting in {neighborhood}',
  commonSituations: [
    'Dark areas around shelving or storage',
    'One ceiling light that does not reach the whole garage',
    'Flickering or outdated garage fixtures',
    'Poor visibility at the workbench or with tools',
    'Exterior lights that no longer brighten the driveway',
    'Shadows along the walls and corners',
    'A garage now used as a shop, gym, or hobby space',
  ],
  trustedBanner: 'Your Local & Trusted Garage Lighting Pros in {neighborhood}',
  band2Image: '/services/garage-lighting.webp',
  band2Heading: 'Our Garage Lighting Process in {neighborhood}',
  band2Paragraphs: [
    'We review how the garage is used, plan placement for even coverage, and explain the flat-rate price before any work begins.',
    'We install durable LED garage lights or shop-style fixtures, connect the wiring safely, and test the system so your {neighborhood} garage is bright from the workbench to the back corners.',
  ],
  proseSections: [
    { title: 'Bright, Even LED Coverage', body: 'A single bulb leaves a {neighborhood} garage full of shadows. We lay out LED panels or shop-style fixtures so the light reaches the workbench, storage shelves, and parking area evenly, with the low heat and long life that make LED the standard for garages.' },
    { title: 'Wired for a Working Garage', body: 'Garages used for tools, a gym, or a workshop often outgrow their single circuit. We add capacity where it is needed and wire each {neighborhood} install to code so the lighting and any added outlets run reliably without tripping.' },
    { title: 'Exterior and Motion Lighting', body: 'Lighting around the garage door, driveway, and entry makes a {neighborhood} property easier and safer to use after dark. We install weather-rated exterior fixtures and motion-activated lights that stand up to the seasons.' },
    { title: 'Durable Fixtures, Less Maintenance', body: 'Garage fixtures take dust, temperature swings, and the occasional bump. We install durable, energy-efficient LED lighting in {neighborhood} garages so it stays bright with fewer bulb changes and dependable performance year-round.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Experienced lighting pros handling every connection safely.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Wiring and fixtures installed to electrical safety standards.' },
    { icon: 'badge', title: 'Durable Fixtures', text: 'High-quality, energy-efficient LED garage lighting.' },
    { icon: 'house', title: 'Even Coverage', text: 'Placement planned to eliminate shadows and dark corners.' },
  ],
  proofQuote:
    'We use the garage as a workshop and the one old bulb was useless. They put up LED shop panels, added an exterior light over the door, and ran a dedicated circuit so it never trips. The whole space is bright now, corners included.',
  sharedFaqs: [
    { q: 'Why should I upgrade my garage lighting?', a: 'Upgrading garage lighting improves visibility, helps you use the space more comfortably, and makes it easier to see tools, storage items, and vehicles.' },
    { q: 'What are the best lighting options for garages?', a: 'LED garage lights are one of the most popular options because they provide strong brightness and energy efficiency.' },
    { q: 'Can garage lighting make the garage safer?', a: 'Yes. Proper lighting helps reduce shadows and improves visibility around tools, equipment, and entry areas.' },
    { q: 'How long does a typical garage lighting installation take?', a: 'Most garage lighting installations can be completed within a few hours, depending on the number of fixtures and wiring needed.' },
    { q: 'How can I maintain my garage lighting after installation?', a: 'Keeping fixtures clean and replacing bulbs when needed helps maintain strong brightness and reliable performance.' },
  ],
  related: [
    { label: 'Garage Lighting (overview)', href: '/services/garage-lighting' },
    { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
    { label: 'LED Lighting', href: '/services/led-lighting' },
    { label: 'Basement Lighting', href: '/services/basement-lighting' },
    { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => garageLightingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Garage Lighting Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Garage lighting installation in ${place} — durable LED garage lights and exterior fixtures installed by licensed electricians for bright, usable space. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/garage-lighting/${loc.slug}` },
    openGraph: {
      title: `Garage Lighting Installation in ${place} | ${site.name}`,
      description: `Licensed garage lighting installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function GarageLightingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = garageLightingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
