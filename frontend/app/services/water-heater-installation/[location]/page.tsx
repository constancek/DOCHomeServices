import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { waterHeaterInstallationCopy } from '@/content/location-copy/water-heater-installation';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'water-heater-installation',
  serviceName: 'Water Heater Installation',
  eyebrow: 'Plumbing',
  hubLabel: 'Water Heater Installation',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Water Heater Installation & Replacement',
  ctaLine: 'Need a new water heater in {neighborhood}? Call for same-day service',
  heroImage: '/services/wh-hero.webp',
  introHeading: 'Water Heater Installation in {neighborhood}',
  introParagraphs: [
    'When it is time for dependable hot water, {brand} installs and replaces water heaters for homeowners in {place} — tank or tankless, sized to your household and installed to code. We help you choose the right system and handle every step from removal to testing.',
    'Every installation comes with upfront flat-rate pricing you approve before we start, plus financing so a new water heater does not have to wait — and our licensed plumbers reach most {neighborhood} homes the same day.',
  ],
  sidebarSections: [
    {
      title: 'Tank or Tankless',
      body: [
        'We install both for {neighborhood} homes. A standard 40–50 gallon tank is the straightforward, lower-cost swap most households choose, while a tankless unit gives you endless hot water and frees up floor space — a good fit for larger families or finished basements.',
        'We size either option to your actual usage and explain the trade-offs honestly before you decide.',
      ],
    },
    {
      title: 'Hard Water and Tank Life',
      body: [
        'The hard water common across {neighborhood} drops sediment to the bottom of the tank, where it bakes into scale, drags down efficiency, and shortens the unit’s life. We can pair a new heater with a softener or recommend an annual flush to protect your investment.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'water-heater-repair', title: 'Water Heater Repair' },
    { slug: 'tankless-water-heater', title: 'Tankless Water Heaters' },
    { slug: 'water-heater-maintenance', title: 'Water Heater Maintenance' },
    { slug: 'water-quality', title: 'Water Quality' },
  ],
  band1Image: '/services/wh-signs.webp',
  band1Heading: 'Signs Your {neighborhood} Home Needs a New Water Heater',
  commonSituations: [
    'Inconsistent, lukewarm, or quickly-running-out hot water',
    'Rust-colored water from the hot taps',
    'Water pooling or leaking around the tank or base',
    'Popping or rumbling noises from sediment buildup',
    'Water temperature that swings on its own',
    'A unit that is 10 to 15 years old',
    'Repairs that are becoming more frequent',
  ],
  trustedBanner: 'Your Local & Trusted Water Heater Installers in {neighborhood}',
  band2Image: '/services/water-heater-repair.webp',
  band2Heading: 'What to Expect From Your Installation in {neighborhood}',
  band2Paragraphs: [
    'We start by sizing the system to your household and checking your existing connections, gas or electric supply, and venting — then explain the flat-rate price before any work begins.',
    'We remove the old unit safely, install the new heater with fresh connections and valves, set the temperature, and test the full system before we leave, so you have reliable hot water from day one.',
  ],
  proseSections: [
    { title: 'Repair or Replace Your Water Heater?', body: 'A newer unit with an isolated problem is often worth repairing, and we are glad to make that fix. But once a tank is past 10–15 years, leaking, corroded, or racking up repeated repairs, replacing it before it fails outright saves a {neighborhood} basement from water damage and an emergency call. We tell you honestly which is the better value.' },
    { title: 'Sizing It Right for Your Home', body: 'A heater that is too small runs out mid-shower; one that is oversized wastes energy. We size the unit to your household and peak demand — many {neighborhood} families do well on a 40–50 gallon tank, while a tankless unit suits larger homes that want endless hot water. We match the system to how you actually use it.' },
    { title: 'Hard Water and Your New Heater', body: 'The hard water common across {neighborhood} leaves sediment that bakes into scale at the bottom of the tank, cutting efficiency and lifespan. We can install a softener alongside the new heater or set you up with an annual flush so your investment lasts the full life it should.' },
    { title: 'Financing and Same-Day Service in {neighborhood}', body: 'A failed water heater does not have to wait on budget or schedule. We offer financing so you can move forward without a large upfront cost, and we staff for demand to reach most {neighborhood} homes the same day you call.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'check', title: 'Proper Sizing', text: 'We match the system to your household so you get enough hot water without strain.' },
    { icon: 'shield', title: 'Licensed & To Code', text: 'Background-checked plumbers and code-compliant installation from day one.' },
    { icon: 'star', title: 'Financing Available', text: 'Move forward with installation now without a large upfront cost.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
  ],
  proofQuote:
    'Our 14-year-old tank finally gave out and they had a new one sized, installed, and tested the same afternoon. Walked us through tank versus tankless without any pressure, and the price was exactly what they quoted.',
  sharedFaqs: [
    { q: 'What shortens the life of a water heater?', a: 'The biggest factors are sediment and scale buildup from hard water, water pressure that is set too high, skipped annual flushes, and corrosion once the anode rod wears out. Routine maintenance addresses most of them.' },
    { q: 'How long does it take to remove and install a hot water heater?', a: 'A standard tank-for-tank swap usually takes a few hours. Switching to tankless, relocating the unit, or upgrading gas or venting takes longer — we will give you a clear time estimate up front.' },
    { q: 'What size water heater do I need for my home?', a: 'It depends on your household size and peak demand. As a rough guide, many families do well with a 40–50 gallon tank, but we size it to your actual usage — or recommend a tankless unit for endless hot water.' },
    { q: 'How often should I flush my water heater?', a: 'About once a year to clear sediment and keep it efficient — more often if you have hard water, which is common across the area.' },
    { q: 'Do electric water heaters last longer than gas water heaters?', a: 'Electric units often last a little longer because they have fewer combustion components, but water quality and regular maintenance affect lifespan far more than fuel type.' },
  ],
  related: [
    { label: 'Water Heater Installation (overview)', href: '/services/water-heater-installation' },
    { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
    { label: 'Tankless Water Heaters', href: '/services/tankless-water-heater' },
    { label: 'Water Heater Maintenance', href: '/services/water-heater-maintenance' },
    { label: 'Water Quality', href: '/services/water-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => waterHeaterInstallationCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Water Heater Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Water heater installation and replacement in ${place} — tank or tankless, sized right and installed to code. Financing and same-day service. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/water-heater-installation/${loc.slug}` },
    openGraph: {
      title: `Water Heater Installation in ${place} | ${site.name}`,
      description: `Same-day water heater installation and replacement serving ${place} and nearby areas.`,
    },
  };
}

export default async function WaterHeaterInstallationLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = waterHeaterInstallationCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
