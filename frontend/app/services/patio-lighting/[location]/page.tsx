import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { patioLightingCopy } from '@/content/location-copy/patio-lighting';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'patio-lighting',
  serviceName: 'Patio Lighting Installation',
  eyebrow: 'Lighting',
  hubLabel: 'Patio Lighting',
  parentCrumb: { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
  businessType: 'Electrician',
  schemaServiceType: 'Patio Lighting Installation',
  ctaLine: 'Want to enjoy your {neighborhood} patio after sunset? Call today',
  heroImage: '/services/patio-hero.jpg',
  introHeading: 'Patio Lighting Installation in {neighborhood}',
  introParagraphs: [
    'The right patio lighting lets a {neighborhood} family use the deck and patio long after sunset — better visibility around seating and steps, and a warm, comfortable feel. {brand} designs and installs outdoor-rated patio and deck lighting for homeowners across {place}, with safe, code-compliant wiring.',
    'Our licensed electricians plan the layout around how you use the space, install weather-ready fixtures, and connect everything to power safely — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} patios we review the layout, recommend fixture types and placement, design a balanced plan, install outdoor-rated fixtures, connect the system safely, and test brightness and performance before we leave.',
        'We run outdoor-rated wiring and protect the connections so the lighting holds up to weather year after year.',
      ],
    },
    {
      title: 'Lighting Built Around the Space',
      body: [
        'A patio used for dining needs brighter task light; one used for relaxing wants soft accent light. We plan each {neighborhood} layout around how the space is actually used so it stays comfortable and easy to navigate.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'outdoor-lighting', title: 'Outdoor Lighting' },
    { slug: 'landscape-lighting', title: 'Landscape Lighting' },
    { slug: 'holiday-lighting', title: 'Holiday Lighting' },
    { slug: 'hot-tub-wiring', title: 'Hot Tub Wiring' },
  ],
  band1Image: '/services/patio-benefits.jpg',
  band1Heading: 'Signs It Is Time for Patio Lighting in {neighborhood}',
  commonSituations: [
    'A deck or patio you cannot use comfortably after dark',
    'Dark steps, rails, or walkways around the seating area',
    'An outdoor kitchen or dining spot with no task lighting',
    'String or hanging lights you want installed safely',
    'Old fixtures that flicker, corrode, or have failed',
    'No outdoor outlet or circuit to power the lighting',
    'A patio that feels disconnected from the rest of the lit yard',
  ],
  trustedBanner: 'Your Local & Trusted Patio Lighting Pros in {neighborhood}',
  band2Image: '/services/patio-lighting.jpg',
  band2Heading: 'Our Patio Lighting Process in {neighborhood}',
  band2Paragraphs: [
    'We start by reviewing your outdoor space, talk through how you use it, and explain the flat-rate price before any work begins.',
    'We install outdoor-rated fixtures, connect the system safely to power, and test brightness and coverage so your {neighborhood} patio looks right and stays usable after dark.',
  ],
  proseSections: [
    { title: 'Balanced, Layered Patio Lighting', body: 'Good patio lighting layers task, accent, and path light so the space is bright where it needs to be without glare. We plan the layout for a {neighborhood} patio around the seating, dining, and step areas so it feels comfortable and easy to move through.' },
    { title: 'String, Recessed, and Under-Rail Options', body: 'From hanging string lights to recessed deck fixtures, step lights, and under-rail lighting, there are many ways to light a {neighborhood} patio. We recommend fixtures that fit the look you want and install them to outdoor-rated standards so they last.' },
    { title: 'Outdoor-Rated, Code-Compliant Wiring', body: 'Patio lighting lives outdoors, so the wiring has to handle moisture and weather and meet code. We run outdoor-rated cable, seal the connections, and test the system so a {neighborhood} patio install stays safe and reliable through every season.' },
    { title: 'Powering the System Safely', body: 'Many patios lack an outlet or circuit for lighting, and overloading an existing one causes trips and failures. We add or extend power the right way so a {neighborhood} patio lighting system runs steadily without straining the panel.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Experienced pros who handle every outdoor connection safely.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Outdoor-rated wiring tested for safe, reliable operation.' },
    { icon: 'badge', title: 'Quality Fixtures', text: 'Durable, weather-ready fixtures built for outdoor use.' },
    { icon: 'house', title: 'Custom Design', text: 'Balanced layouts tailored to how you use your patio.' },
  ],
  proofQuote:
    'They hung string lights over the patio, added under-rail lights on the steps, and ran a new outdoor circuit so nothing trips. We use the patio every evening now. Clean install and a fair price.',
  sharedFaqs: [
    { q: 'How long does the patio lighting installation take?', a: 'Most patio lighting installations are completed in a single day, depending on the size of the space and the number of fixtures.' },
    { q: 'Is the installation process disruptive?', a: 'No. Our team works efficiently and keeps disruption minimal while installing the lighting system.' },
    { q: 'Why should I hire a patio lighting professional?', a: 'A professional ensures proper wiring, safe electrical connections, and balanced lighting placement.' },
    { q: 'Do you install hanging patio lights?', a: 'Yes. We install string lights, hanging fixtures, and other decorative patio lighting designed for outdoor use.' },
    { q: 'How do you ensure the lighting system connects to electrical power safely?', a: 'Our licensed electricians install outdoor-rated wiring and test the system to ensure safe operation.' },
  ],
  related: [
    { label: 'Patio Lighting (overview)', href: '/services/patio-lighting' },
    { label: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
    { label: 'Landscape Lighting', href: '/services/landscape-lighting' },
    { label: 'Holiday Lighting', href: '/services/holiday-lighting' },
    { label: 'Hot Tub Wiring', href: '/services/hot-tub-wiring' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => patioLightingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Patio Lighting Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Patio lighting installation in ${place} — custom, outdoor-rated deck and patio lighting installed by licensed electricians for safety and atmosphere. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/patio-lighting/${loc.slug}` },
    openGraph: {
      title: `Patio Lighting Installation in ${place} | ${site.name}`,
      description: `Licensed patio lighting installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function PatioLightingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = patioLightingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
