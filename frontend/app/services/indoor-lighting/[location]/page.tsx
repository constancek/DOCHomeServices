import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { indoorLightingCopy } from '@/content/location-copy/indoor-lighting';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'indoor-lighting',
  serviceName: 'Indoor Lighting Installation',
  eyebrow: 'Lighting',
  hubLabel: 'Indoor Lighting',
  parentCrumb: { label: 'Lighting', href: '/services/lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'Indoor Lighting Installation',
  ctaLine: 'Want brighter rooms in your {neighborhood} home? Call today',
  heroImage: '/services/indoor-hero.jpg',
  introHeading: 'Indoor Lighting Installation in {neighborhood}',
  introParagraphs: [
    'Good indoor lighting changes how a {neighborhood} home looks and feels — brighter rooms, fewer shadows, and lighting that fits how each space is used. {brand} installs recessed, LED, basement, and garage lighting for homeowners across {place}, with safe, code-compliant wiring.',
    'Our licensed electricians review how you use each room, recommend the right fixtures and placement, and install everything to current electrical standards — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} homes we evaluate the room layout, recommend fixture styles and placement, plan safe wiring, install the fixtures and switches, and test brightness and performance before we leave.',
        'If a room needs a new circuit or the existing wiring needs updating, we handle it and explain the cost up front.',
      ],
    },
    {
      title: 'Lighting Built Around Your Rooms',
      body: [
        'Kitchens need bright task lighting, living rooms benefit from layered ambient and accent light, and basements and garages need even coverage with no dark corners. We plan each {neighborhood} layout around how the space is actually used.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'recessed-lighting', title: 'Recessed Lighting' },
    { slug: 'led-lighting', title: 'LED Lighting' },
    { slug: 'basement-lighting', title: 'Basement Lighting' },
    { slug: 'garage-lighting', title: 'Garage Lighting' },
  ],
  band1Image: '/services/indoor-signs.jpg',
  band1Heading: 'Signs You Need New Indoor Lighting in {neighborhood}',
  commonSituations: [
    'Rooms that feel dim or unevenly lit',
    'Light fixtures that flicker or fail',
    'Outdated fixtures that no longer fit the space',
    'Key areas with little natural light',
    'Dark garages or basements that are hard to navigate',
    'Older fixtures still running inefficient bulbs',
    'A finished basement or room addition that needs lighting',
  ],
  trustedBanner: 'Your Local & Trusted Indoor Lighting Pros in {neighborhood}',
  band2Image: '/services/indoor-lighting.jpg',
  band2Heading: 'Our Indoor Lighting Process in {neighborhood}',
  band2Paragraphs: [
    'We start by understanding how you use each room, review your current lighting, and explain the flat-rate price before any work begins.',
    'We plan safe wiring, install the fixtures and switches, and test brightness and performance so your {neighborhood} home is brighter, more comfortable, and connected safely to the electrical system.',
  ],
  proseSections: [
    { title: 'Recessed and Layered Lighting', body: 'Recessed cans sit flush with the ceiling and spread light evenly, which is why they work so well in {neighborhood} kitchens, hallways, and open living areas. We plan the spacing and add layered ambient and accent fixtures so a room is bright where it needs to be without hot spots or shadows.' },
    { title: 'Energy-Efficient LED Upgrades', body: 'LED fixtures use a fraction of the power of older bulbs and last far longer, so they pay off in rooms that stay lit for hours. We install efficient LED lighting throughout {neighborhood} homes for stronger, cleaner light and lower long-term energy and maintenance costs.' },
    { title: 'Basement and Garage Lighting', body: 'Basements and garages often have little natural light and leftover builder-grade fixtures, leaving dark corners that make the space hard to use. We install durable, even lighting so {neighborhood} workshops, gyms, storage areas, and finished basements are bright and safe to move through.' },
    { title: 'Safe Wiring in Older Homes', body: 'Many {neighborhood} homes have older wiring that needs care when adding fixtures or circuits. We make sure every connection meets current code, update what needs updating, and install lighting that runs reliably for the long term.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Professionals', text: 'Experienced lighting pros handling every connection safely.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Each install meets current electrical safety standards.' },
    { icon: 'badge', title: 'Energy-Efficient Options', text: 'LED upgrades that cut energy use and last longer.' },
    { icon: 'house', title: 'Custom Design', text: 'Lighting layouts tailored to how you use each room.' },
  ],
  proofQuote:
    'They added recessed lights through the kitchen and living room and swapped everything to LED. The whole floor is brighter, no more dim corners, and the switches were laid out exactly how we use the rooms. Clean work and a fair price.',
  sharedFaqs: [
    { q: 'What types of indoor lighting installations do you offer?', a: 'We install recessed lighting, LED lighting, basement lighting, garage lighting, and many types of lighting fixture installations throughout the home.' },
    { q: 'Can I get custom lighting designs for my home?', a: 'Yes. Our electricians can help design lighting layouts that improve brightness and match the style of each room.' },
    { q: 'Do you offer energy-efficient lighting options?', a: 'Yes. LED lighting installation is one of the most common upgrades because it provides strong illumination while using less energy.' },
    { q: 'Can you install lighting in older homes?', a: 'Yes. Our electricians regularly update lighting in older homes and make sure the wiring meets modern electrical standards.' },
    { q: 'Do you offer lighting for specific rooms like kitchens or bathrooms?', a: 'Yes. We install lighting systems for kitchens, bathrooms, basements, garages, and other indoor spaces.' },
  ],
  related: [
    { label: 'Indoor Lighting (overview)', href: '/services/indoor-lighting' },
    { label: 'Recessed Lighting', href: '/services/recessed-lighting' },
    { label: 'LED Lighting', href: '/services/led-lighting' },
    { label: 'Basement Lighting', href: '/services/basement-lighting' },
    { label: 'Garage Lighting', href: '/services/garage-lighting' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => indoorLightingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Indoor Lighting Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Indoor lighting installation in ${place} — recessed, LED, basement, and garage lighting installed by licensed electricians for comfort and efficiency. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/indoor-lighting/${loc.slug}` },
    openGraph: {
      title: `Indoor Lighting Installation in ${place} | ${site.name}`,
      description: `Licensed indoor lighting installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function IndoorLightingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = indoorLightingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
