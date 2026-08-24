import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { outdoorLightingCopy } from '@/content/location-copy/outdoor-lighting';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'outdoor-lighting',
  serviceName: 'Outdoor Lighting Installation',
  eyebrow: 'Lighting',
  hubLabel: 'Outdoor Lighting',
  parentCrumb: { label: 'Lighting', href: '/services/lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'Outdoor Lighting Installation',
  ctaLine: 'Want to light up your {neighborhood} yard the right way? Call today',
  heroImage: '/services/outdoor-lighting-hero.webp',
  introHeading: 'Outdoor Lighting Installation in {neighborhood}',
  introParagraphs: [
    'A well-planned outdoor lighting system makes a {neighborhood} home safer after dark, highlights the landscaping, and extends how long you can use the yard. {brand} designs and installs landscape, patio, holiday, and security lighting for homeowners across {place} — with durable, weather-rated fixtures and code-compliant wiring.',
    'Our licensed electricians plan the layout, calculate the load so nothing flickers or fails early, and install everything to current standards — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} homes we evaluate the property, design a balanced layout, choose weather-resistant fixtures, run safe code-compliant wiring, mount each fixture securely, and test brightness and coverage before we leave.',
        'We size the transformer and circuits to the system so the lighting runs evenly without nuisance trips or dim spots.',
      ],
    },
    {
      title: 'Built for Midwest Weather',
      body: [
        'Outdoor wiring in {neighborhood} has to stand up to rain, snow, and the freeze-thaw swing. We use moisture-rated fittings, outdoor-rated cable, and sealed connections so the system keeps working through every season.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'landscape-lighting', title: 'Landscape Lighting' },
    { slug: 'patio-lighting', title: 'Patio Lighting' },
    { slug: 'holiday-lighting', title: 'Holiday Lighting' },
    { slug: 'hot-tub-wiring', title: 'Hot Tub Wiring' },
  ],
  band1Image: '/services/outdoor-lighting-benefits.webp',
  band1Heading: 'Signs It Is Time for Outdoor Lighting in {neighborhood}',
  commonSituations: [
    'Dark walkways, stairs, or driveways that are a trip hazard',
    'Entry points and side yards with no lighting at night',
    'Landscaping and architectural features that disappear after dark',
    'A patio or deck you cannot use comfortably after sunset',
    'Old fixtures that flicker, corrode, or have stopped working',
    'A DIY kit that gives uneven brightness or harsh glare',
    'Seasonal holiday displays you would rather not climb a ladder for',
  ],
  trustedBanner: 'Your Local & Trusted Outdoor Lighting Pros in {neighborhood}',
  band2Image: '/services/outdoor-lighting.webp',
  band2Heading: 'Our Outdoor Lighting Process in {neighborhood}',
  band2Paragraphs: [
    'We walk the property with you, plan a layout that fits how you use the yard, and explain the flat-rate price before any work begins.',
    'We install weather-rated fixtures and outdoor-rated wiring, balance the voltage so the system lights evenly, and test the whole layout so your {neighborhood} home looks right and stays safe after dark.',
  ],
  proseSections: [
    { title: 'Layout and Fixture Placement', body: 'Good outdoor lighting is about placement, not just brightness — fixtures aimed wrong create glare and dark gaps. We design the layout for a {neighborhood} property so paths, steps, and features are lit evenly, with warm, balanced light instead of hot spots and shadows.' },
    { title: 'Code-Compliant, Weather-Rated Wiring', body: 'Outdoor wiring has to handle moisture and temperature swings, and it has to meet code. We run outdoor-rated cable, seal every connection, and protect the circuits so a {neighborhood} system stays safe and reliable through rain, snow, and summer heat.' },
    { title: 'Load Planning That Prevents Failures', body: 'Flickering and early burnout usually trace back to bad load planning. We size the transformer and circuits to the fixtures so a {neighborhood} lighting system runs at full, steady brightness without straining the panel or shortening fixture life.' },
    { title: 'Energy-Efficient LED Systems', body: 'Modern LED fixtures use a fraction of the power of older bulbs and last far longer, which matters on a system that runs every night. We install efficient LED lighting so {neighborhood} homeowners get the look they want with lower running costs and less maintenance.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Experienced pros handling every outdoor connection safely.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Moisture-rated wiring and connections that meet code.' },
    { icon: 'badge', title: 'Durable Fixtures', text: 'High-quality products rated to perform in Midwest weather.' },
    { icon: 'clock', title: 'Reliable Scheduling', text: 'Transparent pricing and dependable timelines.' },
  ],
  proofQuote:
    'They mapped out the whole yard, lit the front path and the steps, and added uplights on the trees. No glare, no dark corners, and it has run through two winters without a hiccup. Clean wiring and a fair price.',
  sharedFaqs: [
    { q: 'What is the benefit of an outdoor lighting installation?', a: 'Outdoor lighting installation improves visibility, enhances security, increases curb appeal, and expands usable outdoor space.' },
    { q: 'How long does an exterior lighting installation take?', a: 'Most projects are completed within one day. Larger exterior lighting systems may require additional time.' },
    { q: 'Is a professional outdoor lighting installation better than DIY?', a: 'Yes. Professional installation ensures proper wiring, safe electrical connections, and reliable system performance.' },
    { q: 'What kind of outdoor lights do you install?', a: 'We install pathway lighting, accent lighting, patio lighting, outdoor landscape lighting systems, security lighting, and holiday lighting.' },
    { q: 'Can outdoor lights increase energy efficiency?', a: 'Yes. Modern LED light fixtures use less electricity and last longer than traditional bulbs.' },
  ],
  related: [
    { label: 'Outdoor Lighting (overview)', href: '/services/outdoor-lighting' },
    { label: 'Landscape Lighting', href: '/services/landscape-lighting' },
    { label: 'Patio Lighting', href: '/services/patio-lighting' },
    { label: 'Holiday Lighting', href: '/services/holiday-lighting' },
    { label: 'Hot Tub Wiring', href: '/services/hot-tub-wiring' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => outdoorLightingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Outdoor Lighting Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Outdoor lighting installation in ${place} — landscape, patio, holiday, and security lighting installed by licensed electricians, built for Midwest weather. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/outdoor-lighting/${loc.slug}` },
    openGraph: {
      title: `Outdoor Lighting Installation in ${place} | ${site.name}`,
      description: `Licensed outdoor lighting installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function OutdoorLightingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = outdoorLightingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
