import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { ledLightingCopy } from '@/content/location-copy/led-lighting';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'led-lighting',
  serviceName: 'LED Light Installation',
  eyebrow: 'Lighting',
  hubLabel: 'LED Lighting',
  parentCrumb: { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'LED Light Installation',
  ctaLine: 'Want to cut energy use in your {neighborhood} home with LED? Call today',
  heroImage: '/services/led-hero.webp',
  introHeading: 'LED Light Installation in {neighborhood}',
  introParagraphs: [
    'LED lighting is one of the simplest upgrades a {neighborhood} homeowner can make — it uses far less electricity, lasts for years, and gives steady, even brightness. {brand} installs recessed, under-cabinet, and strip LED lighting across {place}, with safe, code-compliant wiring.',
    'Our licensed electricians plan the layout, tune brightness and color temperature to each room, and connect everything to current electrical standards — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} homes we review the room and lighting needs, recommend LED fixtures and placement, plan safe connections, install the fixtures or strip lighting, and test brightness before we leave.',
        'If a room needs a new circuit or dimmer, or older wiring needs updating, we handle it and explain the cost up front.',
      ],
    },
    {
      title: 'Efficiency That Pays Off',
      body: [
        'LED draws a fraction of the power of older bulbs and lasts for years, so it pays back in rooms that stay lit for hours. We install efficient LED throughout {neighborhood} homes for lower bills and fewer bulb changes.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'indoor-lighting', title: 'Indoor Lighting' },
    { slug: 'recessed-lighting', title: 'Recessed Lighting' },
    { slug: 'lighting-fixture-installation', title: 'Lighting Fixtures' },
    { slug: 'basement-lighting', title: 'Basement Lighting' },
  ],
  band1Image: '/services/led-signs.webp',
  band1Heading: 'Signs You Need LED Lighting in {neighborhood}',
  commonSituations: [
    'High energy bills from inefficient lighting',
    'Bulbs that burn out frequently',
    'Rooms that feel dim or unevenly lit',
    'Outdated fixtures that limit performance',
    'Kitchens or workspaces that need brighter light',
    'Basements or garages with poor visibility',
    'A wish to adjust brightness or color temperature',
  ],
  trustedBanner: 'Your Local & Trusted LED Lighting Pros in {neighborhood}',
  band2Image: '/services/led-lighting.webp',
  band2Heading: 'Our LED Light Installation Process in {neighborhood}',
  band2Paragraphs: [
    'We review your lighting goals and existing fixtures, recommend the right LED solution, and explain the flat-rate price before any work begins.',
    'We plan safe connections, install the LED fixtures, recessed cans, or strip lighting, and test brightness so your {neighborhood} home is brighter, more efficient, and lit evenly.',
  ],
  proseSections: [
    { title: 'Energy-Efficient, Long-Lasting Light', body: 'LED converts more power into light and far less into heat, so a {neighborhood} home gets strong, steady brightness while using a fraction of the electricity of older bulbs. They also last for years, which means fewer replacements and less maintenance over time.' },
    { title: 'Recessed, Under-Cabinet, and Strip LED', body: 'LED works in nearly every part of the home — recessed cans for ceilings, under-cabinet lighting for kitchen counters, and strip lighting for accents. We plan the right mix for each {neighborhood} room so the light is balanced and purposeful.' },
    { title: 'Brightness and Color Temperature Tuned to the Room', body: 'A kitchen wants crisp, bright light while a living room wants something warmer. We tune the brightness and color temperature of the LED so each {neighborhood} room feels right, and add dimmers where they help.' },
    { title: 'Safe Connections and Older Wiring', body: 'Swapping to LED sometimes means updating older fixtures, switches, or wiring. We make sure every connection meets current code in {neighborhood} homes so the new lighting runs reliably and safely for the long term.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Experienced pros who install LED systems safely and correctly.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Every install meets current electrical safety codes.' },
    { icon: 'badge', title: 'Quality LED Products', text: 'Long-lasting, energy-efficient fixtures and lighting.' },
    { icon: 'house', title: 'Custom Recommendations', text: 'Brightness and color temperature tuned to each room.' },
  ],
  proofQuote:
    'They swapped our whole main floor to LED — recessed cans in the living room and under-cabinet strips in the kitchen. It is brighter, the bills dropped, and they tuned the color so it is warm where we want it. Clean work and a fair price.',
  sharedFaqs: [
    { q: 'What is LED lighting, and how does it work?', a: 'LED stands for light-emitting diode. These lights use advanced technology to produce bright illumination while using less electricity than traditional bulbs.' },
    { q: 'How does LED lighting save energy?', a: 'LED lights convert more electricity into light rather than heat. This makes them more efficient and helps reduce energy consumption.' },
    { q: 'Where do you install LED lights?', a: 'LED lighting can be installed in kitchens, living rooms, hallways, basements, garages, and other indoor spaces. They are also commonly used for recessed lighting and under-cabinet lighting.' },
    { q: 'How much do LED lights cost?', a: 'Costs vary depending on the number of fixtures, installation complexity, and lighting type. Many homeowners find the long-term energy savings make LED lighting a worthwhile investment.' },
    { q: 'How can I customize LED lighting for my home?', a: 'LED lighting can be customized through fixture style, brightness levels, and color temperature. Our electricians help design lighting systems that match the layout and style of your home.' },
  ],
  related: [
    { label: 'LED Lighting (overview)', href: '/services/led-lighting' },
    { label: 'Indoor Lighting', href: '/services/indoor-lighting' },
    { label: 'Recessed Lighting', href: '/services/recessed-lighting' },
    { label: 'Basement Lighting', href: '/services/basement-lighting' },
    { label: 'Lighting Fixture Installation', href: '/services/lighting-fixture-installation' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => ledLightingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `LED Light Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `LED light installation in ${place} — recessed, under-cabinet, and strip LED lighting installed by licensed electricians for efficiency and comfort. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/led-lighting/${loc.slug}` },
    openGraph: {
      title: `LED Light Installation in ${place} | ${site.name}`,
      description: `Licensed LED light installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function LedLightingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = ledLightingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
