import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { tanklessCopy } from '@/content/location-copy/tankless-water-heater';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'tankless-water-heater',
  serviceName: 'Tankless Water Heaters',
  eyebrow: 'Plumbing',
  hubLabel: 'Tankless Water Heaters',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Tankless Water Heater Services',
  ctaLine: 'Tankless water heater service in {neighborhood}? Call today',
  heroImage: '/services/tankless-hero.webp',
  introHeading: 'Tankless Water Heaters in {neighborhood}',
  introParagraphs: [
    'A tankless water heater heats water on demand instead of storing it, giving your home endless hot water and lower energy bills. {brand} installs, repairs, and maintains tankless systems for homeowners in {place} — every major brand, gas or electric, sized to your home’s real demand.',
    'Whether you are upgrading from a tank, chasing down an error code, or keeping a healthy unit running with a descaling tune-up, every job comes with upfront flat-rate pricing you approve before we start.',
  ],
  sidebarSections: [
    {
      title: 'What We Do',
      body: [
        'We handle the full range for {neighborhood} homes: tankless installation, repair, annual descaling tune-ups, and swapping out an old tank for a tankless system. We work with every major brand, gas and electric.',
        'Each install is sized to your flow rate and demand, with any gas, electrical, or venting upgrades handled to code.',
      ],
    },
    {
      title: 'Hard Water and Tankless',
      body: [
        'The hard water common across {neighborhood} is the number-one enemy of a tankless unit — scale builds up in the heat exchanger and slowly chokes performance. An annual flush keeps it efficient, and a softener protects it long-term.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'water-heater-installation', title: 'Water Heater Installation' },
    { slug: 'water-heater-repair', title: 'Water Heater Repair' },
    { slug: 'water-heater-maintenance', title: 'Water Heater Maintenance' },
    { slug: 'water-quality', title: 'Water Quality' },
  ],
  band1Image: '/services/tankless-unit.webp',
  band1Heading: 'Signs Your {neighborhood} Home Needs Tankless Service',
  commonSituations: [
    'Inconsistent or fluctuating hot water, even after repairs',
    'Water that runs cold mid-shower or never gets fully hot',
    'Error codes that keep returning or frequent shutdowns',
    'Rising energy bills from declining efficiency',
    'Scale or mineral buildup despite regular descaling',
    'Leaks or visible corrosion on the unit',
    'A unit over 15–20 years old that no longer keeps up',
  ],
  trustedBanner: 'Your Local & Trusted Tankless Water Heater Pros in {neighborhood}',
  band2Image: '/services/water-heater-repair.webp',
  band2Heading: 'What to Expect From Your Tankless Service in {neighborhood}',
  band2Paragraphs: [
    'For an install, we size the unit to your household’s demand and check your gas, electrical, and venting — then explain the flat-rate price before any work begins.',
    'For a repair or tune-up, we diagnose the error or flush the heat exchanger, test the sensors and safety controls, and verify flow rate and temperature so the system runs the way it should before we leave.',
  ],
  proseSections: [
    { title: 'Why Switch to Tankless in {neighborhood}?', body: 'A traditional tank stores a limited amount of hot water — once it runs out, you wait. A tankless unit heats water as it flows, so you get endless hot water with none of the standby loss from keeping a tank hot all day. It frees up floor space and often lasts 15–20 years, roughly double a standard tank, which makes it a strong upgrade for a {neighborhood} home.' },
    { title: 'Hard Water Is the Real Enemy', body: 'The hard water common across {neighborhood} drops scale inside the heat exchanger, the part that does the heating. Left alone, that buildup restricts flow and drags down performance until error codes start. An annual flush clears it, and pairing the unit with a softener protects it for the long haul — we handle both.' },
    { title: 'Sizing Gas and Electric Correctly', body: 'A tankless unit that is undersized cannot keep up when two showers and the dishwasher run at once. We evaluate flow rate, household demand, and your gas or electrical supply so the system we install in your {neighborhood} home heats water without strain — and we are honest if your existing gas line or panel needs an upgrade first.' },
    { title: 'Repair, Replace, or Tune Up', body: 'A unit under 10 years old with an isolated fault is usually worth repairing. One that is racking up repairs, losing efficiency, or no longer meeting demand is often better replaced. And a healthy system just needs an annual descaling to stay efficient and keep its warranty intact. We tell you honestly which fits your {neighborhood} home.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'badge', title: 'All Major Brands', text: 'Our licensed technicians work with every major tankless brand, gas or electric.' },
    { icon: 'check', title: 'Properly Sized', text: 'We evaluate flow rate, demand, and utility access so the system heats without strain.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked plumbers and installations done to code.' },
    { icon: 'clock', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  ],
  proofQuote:
    'Switched from an old tank to a tankless unit and freed up half the utility closet. They sized it right for our family, handled the gas line upgrade, and walked us through the annual flush. Endless hot water now.',
  sharedFaqs: [
    { q: 'What is a tankless water heater, and how does it work?', a: 'Instead of storing hot water in a tank, a tankless unit heats water on demand as it flows through a heat exchanger. That means endless hot water and none of the standby energy loss that comes from keeping a tank hot all day.' },
    { q: 'How long does a tankless water heater last?', a: 'With routine maintenance, a tankless system often lasts 15–20 years — roughly double the lifespan of a standard tank water heater.' },
    { q: 'Do tankless water heaters need regular maintenance?', a: 'Yes. An annual flush to remove scale keeps the unit efficient and protects its warranty — and it matters even more in hard-water areas, which is much of the region.' },
    { q: 'How much space does a tankless water heater require?', a: 'Very little. The unit mounts on a wall and is roughly the size of a small suitcase, freeing up the floor space a bulky tank used to take.' },
    { q: 'What is involved in installing a tankless water heater?', a: 'We size the unit to your household’s demand, handle any gas, electrical, or venting upgrades it needs, mount and connect it, then test for proper flow and temperature before we finish.' },
  ],
  related: [
    { label: 'Tankless Water Heaters (overview)', href: '/services/tankless-water-heater' },
    { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
    { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
    { label: 'Water Heater Maintenance', href: '/services/water-heater-maintenance' },
    { label: 'Water Quality', href: '/services/water-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => tanklessCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Tankless Water Heaters in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Tankless water heater installation, repair, and maintenance in ${place} — endless hot water, all major brands, properly sized. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/tankless-water-heater/${loc.slug}` },
    openGraph: {
      title: `Tankless Water Heaters in ${place} | ${site.name}`,
      description: `Tankless water heater installation, repair, and maintenance serving ${place} and nearby areas.`,
    },
  };
}

export default async function TanklessLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = tanklessCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
