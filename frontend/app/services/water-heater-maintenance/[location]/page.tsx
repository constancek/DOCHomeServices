import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { waterHeaterMaintenanceCopy } from '@/content/location-copy/water-heater-maintenance';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'water-heater-maintenance',
  serviceName: 'Water Heater Maintenance',
  eyebrow: 'Plumbing',
  hubLabel: 'Water Heater Maintenance',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Water Heater Maintenance',
  ctaLine: 'Time for a water heater tune-up in {neighborhood}? Call to schedule',
  heroImage: '/services/wh-hero.jpg',
  introHeading: 'Water Heater Maintenance in {neighborhood}',
  introParagraphs: [
    'A yearly tune-up keeps your water heater efficient, safe, and lasting longer. {brand} flushes the tank, checks the anode rod, and inspects every safety part for homeowners in {place} — on tank and tankless systems alike.',
    'The hard water common across the area drops sediment that bakes into scale and shortens tank life, so annual service matters here more than most places. Every tune-up comes with upfront flat-rate pricing you approve before we start.',
  ],
  sidebarSections: [
    {
      title: 'What a Tune-Up Includes',
      body: [
        'Every {neighborhood} tune-up covers the work that keeps a heater running: a full tank flush to clear sediment, an anode-rod inspection, a test of the temperature-and-pressure relief valve, and a check of the thermostat and burner or heating element.',
        'We service both traditional tank and tankless systems, and follow manufacturer-recommended practices that help protect your warranty.',
      ],
    },
    {
      title: 'Why It Matters More Here',
      body: [
        'The hard water across {neighborhood} speeds up sediment buildup, so a tank that goes years without a flush loses efficiency and wears out early. An annual flush is the single best thing you can do to get the full life out of the unit.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'water-heater-repair', title: 'Water Heater Repair' },
    { slug: 'water-heater-installation', title: 'Water Heater Installation' },
    { slug: 'tankless-water-heater', title: 'Tankless Water Heaters' },
    { slug: 'water-quality', title: 'Water Quality' },
  ],
  band1Image: '/services/wh-signs.jpg',
  band1Heading: 'Signs Your {neighborhood} Water Heater Needs a Tune-Up',
  commonSituations: [
    'Hot water runs out faster than it used to',
    'Inconsistent temperature or slow heating',
    'Popping or rumbling noises from the tank',
    'Rising energy bills with no clear cause',
    'Cloudy or discolored water from sediment',
    'A noticeable drop in efficiency or performance',
    'No professional service in over a year',
  ],
  trustedBanner: 'Your Local & Trusted Water Heater Maintenance Pros in {neighborhood}',
  band2Image: '/services/water-heater-repair.jpg',
  band2Heading: 'What to Expect From Your Tune-Up in {neighborhood}',
  band2Paragraphs: [
    'We start by checking the overall condition of the unit — age, performance, and the safety parts — then explain the flat-rate price before any work begins.',
    'We drain and flush the tank to clear sediment, inspect the anode rod and recommend replacement if it is worn, then test the temperature, the relief valve, and the burner or heating element so you get steady, reliable hot water.',
  ],
  proseSections: [
    { title: 'Why an Annual Flush Matters in {neighborhood}', body: 'Every time your heater runs, sediment settles at the bottom of the tank, where it traps heat and forces the system to work harder. The hard water common across {neighborhood} makes that buildup faster than average, which is why we recommend flushing once a year here — it restores efficiency, steadies the temperature, and adds years to the tank.' },
    { title: 'The Anode Rod — Your Tank’s Quiet Protector', body: 'The anode rod corrodes on purpose so the tank does not. Once it is used up, rust starts attacking the tank itself, and that is when leaks begin. We inspect it at every tune-up and replace it when worn — a cheap part that can double the life of a {neighborhood} water heater.' },
    { title: 'Tank and Tankless — Both Need Service', body: 'Tankless units are not maintenance-free; the hard water across {neighborhood} scales their heat exchangers and cuts performance without an annual descaling. Whether you run a traditional tank or a tankless system, we service both and keep them running the way they should.' },
    { title: 'Catch Small Problems Before They Cost', body: 'A worn relief valve, a corroding fitting, or a thermostat drifting out of range is cheap to fix during a tune-up and expensive to ignore. Regular maintenance on your {neighborhood} home catches these early, lowers the odds of a surprise breakdown, and helps keep the manufacturer’s warranty intact.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'badge', title: 'Tank & Tankless', text: 'We service both traditional tank and tankless systems.' },
    { icon: 'check', title: 'Manufacturer-Recommended Service', text: 'We follow the practices that help extend system life and protect your warranty.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians and detailed, careful inspections.' },
    { icon: 'clock', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  ],
  proofQuote:
    'Booked a tune-up after years of skipping it. They flushed out a shocking amount of sediment, replaced the worn anode rod, and the hot water lasts noticeably longer now. Straightforward pricing, no upsell.',
  sharedFaqs: [
    { q: 'What regular maintenance does a water heater need?', a: 'The essentials are an annual flush to clear sediment, an anode-rod inspection, a test of the temperature-and-pressure relief valve, and a check of the thermostat and burner or heating element.' },
    { q: 'How often should I have my water heater inspected or flushed?', a: 'Once a year is the standard recommendation — more often if you have hard water, which is common across the area and speeds up sediment buildup.' },
    { q: 'What are the benefits of water heater maintenance?', a: 'Better efficiency and steadier temperatures, a longer system life, fewer surprise breakdowns, and lower energy bills — plus the safety check on the relief valve and discharge pipe.' },
    { q: 'How can I tell if my water heater needs servicing?', a: 'Running out of hot water faster, popping or rumbling noises, discolored water, higher bills, or simply not having had it serviced in over a year are all good reasons to book a tune-up.' },
    { q: 'What happens if I skip water heater maintenance?', a: 'Sediment keeps building up, efficiency drops, and the tank wears out faster — raising the risk of leaks and early failure. Skipping service can also void the manufacturer’s warranty.' },
  ],
  related: [
    { label: 'Water Heater Maintenance (overview)', href: '/services/water-heater-maintenance' },
    { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
    { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
    { label: 'Tankless Water Heaters', href: '/services/tankless-water-heater' },
    { label: 'Water Quality', href: '/services/water-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => waterHeaterMaintenanceCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Water Heater Maintenance in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Water heater maintenance and tune-ups in ${place} — tank flush, anode-rod checks, and safety inspections for tank and tankless systems. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/water-heater-maintenance/${loc.slug}` },
    openGraph: {
      title: `Water Heater Maintenance in ${place} | ${site.name}`,
      description: `Water heater tune-ups and inspections serving ${place} and nearby areas.`,
    },
  };
}

export default async function WaterHeaterMaintenanceLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = waterHeaterMaintenanceCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
