import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { landscapeLightingCopy } from '@/content/location-copy/landscape-lighting';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'landscape-lighting',
  serviceName: 'Landscape Lighting Installation',
  eyebrow: 'Lighting',
  hubLabel: 'Landscape Lighting',
  parentCrumb: { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'Landscape Lighting Installation',
  ctaLine: 'Want to light up your {neighborhood} landscape? Call today',
  heroImage: '/services/landscape-hero.jpg',
  introHeading: 'Landscape Lighting Installation in {neighborhood}',
  introParagraphs: [
    'A well-designed landscape lighting system changes how a {neighborhood} property looks after sunset — safer paths, highlighted trees and stonework, and a warmer feel without glare. {brand} designs and installs custom low-voltage and line-voltage lighting for homeowners across {place}, with weather-rated fixtures and safe electrical connections.',
    'Our licensed electricians plan the layout, conceal the wiring, and install everything to current code — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} properties we walk the yard, plan the layout, choose durable weather-rated fixtures, decide between low-voltage and line-voltage, make safe connections, conceal the wiring, and test brightness and coverage before we leave.',
        'We size the transformer to the system so the lighting runs evenly without dim spots or early failures.',
      ],
    },
    {
      title: 'Layered, Not Overwhelming',
      body: [
        'Good landscape lighting adds depth — accent lights on trees, path lights for navigation, and feature lighting on stonework, all balanced so a {neighborhood} yard feels natural rather than flooded with light.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'outdoor-lighting', title: 'Outdoor Lighting' },
    { slug: 'patio-lighting', title: 'Patio Lighting' },
    { slug: 'holiday-lighting', title: 'Holiday Lighting' },
    { slug: 'hot-tub-wiring', title: 'Hot Tub Wiring' },
  ],
  band1Image: '/services/landscape-benefits.jpg',
  band1Heading: 'Signs It Is Time for Landscape Lighting in {neighborhood}',
  commonSituations: [
    'Dark paths, driveways, or stairs that are a trip hazard',
    'Mature trees and landscaping that disappear after dark',
    'Entry points and darker areas with no lighting for security',
    'A yard you would like to use and enjoy after sunset',
    'Old fixtures that flicker, corrode, or have stopped working',
    'A DIY kit that gives uneven brightness or harsh glare',
    'Stonework or architectural features worth highlighting',
  ],
  trustedBanner: 'Your Local & Trusted Landscape Lighting Pros in {neighborhood}',
  band2Image: '/services/landscape-lighting.jpg',
  band2Heading: 'Our Landscape Lighting Process in {neighborhood}',
  band2Paragraphs: [
    'We start with an on-site walk-through, plan a layout that fits how you use the yard, and explain the flat-rate price before any work begins.',
    'We set durable, weather-rated fixtures with concealed wiring, balance the voltage so the system lights evenly, and test the whole layout so your {neighborhood} landscape looks right and stays safe after dark.',
  ],
  proseSections: [
    { title: 'Layered Design and Placement', body: 'Landscape lighting works best in layers — accent uplights on trees, path lights for navigation, and feature lighting on stonework. We plan the layout for a {neighborhood} property so each fixture has a purpose and the yard feels balanced, not flooded with glare.' },
    { title: 'Low-Voltage vs. Line-Voltage', body: 'Low-voltage systems run off a transformer and are energy-efficient and ideal for most {neighborhood} homes, while line-voltage involves more complex electrical work. We review both, size the system to the property, and let a licensed electrician handle every connection.' },
    { title: 'Weather-Rated for Every Season', body: 'Outdoor fixtures and wiring have to handle rain, snow, and the freeze-thaw swing. We use weather-rated components and concealed, sealed connections so a {neighborhood} landscape lighting system keeps performing through every season.' },
    { title: 'Energy-Efficient LED Systems', body: 'Modern LED fixtures use far less power and last much longer than older bulbs, which matters on a system that runs every night. We install efficient LED landscape lighting so {neighborhood} homeowners get steady, lasting brightness with lower running costs.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Oversight', text: 'Every system installed and inspected under licensed electrician oversight.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Safe wiring, proper spacing, and balanced design that meets code.' },
    { icon: 'badge', title: 'Durable Fixtures', text: 'Weather-rated, energy-efficient fixtures built for long-term outdoor use.' },
    { icon: 'house', title: 'Custom Design', text: 'Layered layouts tailored to how you use your property.' },
  ],
  proofQuote:
    'They lit the front walk and uplit the big maples, then ran path lights along the drive. No glare, no dark stretches, and the wiring is completely hidden. It has run through two winters without a problem.',
  sharedFaqs: [
    { q: 'How expensive is it to install landscape lighting?', a: 'Costs depend on property size, fixture quantity, wiring requirements, and system type. Low-voltage systems are often more cost-effective for residential properties.' },
    { q: 'What types of landscape lights are available?', a: 'Options include path lights, spotlights, flood lights, well lights, and step lights. Each serves a specific purpose within a lighting system.' },
    { q: 'Are LED landscape lights worth it?', a: 'Yes. LED lighting is energy efficient, long lasting, and provides consistent brightness.' },
    { q: 'Why hire professional landscape lighting installers?', a: 'Professional installers ensure safe wiring, proper spacing, and balanced design that performs reliably.' },
    { q: 'Is landscape lighting weather-resistant?', a: 'Yes. Outdoor lighting systems use weather-rated components designed to withstand moisture and seasonal conditions.' },
  ],
  related: [
    { label: 'Landscape Lighting (overview)', href: '/services/landscape-lighting' },
    { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
    { label: 'Patio Lighting', href: '/services/patio-lighting' },
    { label: 'Holiday Lighting', href: '/services/holiday-lighting' },
    { label: 'Hot Tub Wiring', href: '/services/hot-tub-wiring' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => landscapeLightingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Landscape Lighting Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Landscape lighting installation in ${place} — custom, energy-efficient low-voltage systems installed by licensed electricians for safety and curb appeal. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/landscape-lighting/${loc.slug}` },
    openGraph: {
      title: `Landscape Lighting Installation in ${place} | ${site.name}`,
      description: `Licensed landscape lighting installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function LandscapeLightingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = landscapeLightingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
