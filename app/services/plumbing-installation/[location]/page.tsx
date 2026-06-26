import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { plumbingInstallationCopy } from '@/content/location-copy/plumbing-installation';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'plumbing-installation',
  serviceName: 'Plumbing Installation',
  eyebrow: 'Plumbing',
  hubLabel: 'Plumbing Installation',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Plumbing Installation',
  ctaLine: 'Planning a plumbing install in {neighborhood}? Call for a free estimate',
  heroImage: '/services/plumbing-installation.jpg',
  introHeading: 'Plumbing Installation in {neighborhood}',
  introParagraphs: [
    'Whether you are upgrading a tired fixture or adding a water softener, the install has to be done right or it leaks. {brand} provides professional plumbing installation for homeowners in {place} — fixtures, water heaters, sump pumps, sewer lines, filtration, and softeners, installed leak-free and to code.',
    'Our licensed plumbers help you choose the right equipment, install it cleanly, and test it before we leave, with upfront flat-rate pricing and financing on larger projects.',
  ],
  sidebarSections: [
    {
      title: 'What We Install',
      body: [
        'In {neighborhood} homes we install bathroom fixtures (sinks, faucets, tubs, showers, and toilets), standard and battery-backup sump pumps, sewer lines (including trenchless), traditional and tankless water heaters, whole-home water filtration, and water softeners.',
        'Every install is set with proper alignment, secure connections, and leak-free performance — and tested before we call it done.',
      ],
    },
    {
      title: 'Leak-Free and To Code',
      body: [
        'A fixture is only as good as its installation. We connect everything to code, pressure-check the work, and confirm there are no leaks, so a new install in your {neighborhood} home protects your floors and cabinets instead of threatening them.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'faucet-repair-replacement', title: 'Faucet Repair & Replacement' },
    { slug: 'water-heater-installation', title: 'Water Heater Installation' },
    { slug: 'tankless-water-heater', title: 'Tankless Water Heater' },
    { slug: 'plumbing-repair', title: 'Plumbing Repair' },
  ],
  band1Image: '/services/plumbing-repair.jpg',
  band1Heading: 'Signs It’s Time to Upgrade Your {neighborhood} Plumbing',
  commonSituations: [
    'Persistent leaks or drips',
    'Rust or corrosion on pipes and fixtures',
    'Low water pressure',
    'Banging, clanging, or gurgling pipes',
    'Outdated fixtures that waste water',
    'Frequent repairs that add up',
  ],
  trustedBanner: 'Your Local & Trusted Plumbing Installation Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect From Your Plumbing Installation in {neighborhood}',
  band2Paragraphs: [
    'We start with a free estimate. A licensed plumber reviews what you want installed, recommends the right equipment for your {neighborhood} home and water, and explains the flat-rate price before any work begins.',
    'On install day, we set the fixture or system with proper connections, pressure-test for leaks, clean up, and confirm everything works exactly as it should before we leave.',
  ],
  proseSections: [
    { title: 'Fixtures & Systems We Install', body: 'From a single faucet or toilet to a full bathroom, a sump pump, a sewer line, or a water heater, we handle it. We are happy to install one fixture or take on a complete plumbing installation — whatever your {neighborhood} home needs.' },
    { title: 'Replace or Repair?', body: 'If a fixture or pipe is old, corroded, or repeatedly failing, a new installation is often cheaper than paying for the same repair again and again. We assess what you have and tell you honestly which is the better value for your home.' },
    { title: 'Water Filtration & Softeners', body: 'The hard water common across {neighborhood} is tough on fixtures, water heaters, and pipes. A water softener protects that equipment and extends its life, and a filtration system removes chlorine, lead, and other contaminants for cleaner water throughout the home.' },
    { title: 'Financing & Same-Day Installs', body: 'Most fixture and water-heater installs can be handled the same day you call. For larger projects — water heaters, sewer lines, or whole-home work — we offer financing with a quick application and flexible terms.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Choose Us',
  whyUs: [
    { icon: 'heart', title: 'Family-Run & Local', text: 'A local team that genuinely cares about your home and your time.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers and to-code installations.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'Transparent estimates you approve before any work begins.' },
    { icon: 'check', title: 'Satisfaction Guarantee', text: 'We are not done until your new fixture works exactly as it should.' },
  ],
  proofQuote:
    'Had them install a new water softener and replace two old toilets. Clean work, no leaks, and they walked me through everything before they started.',
  sharedFaqs: [
    { q: 'How do I know if I need a new plumbing installation or just repairs?', a: 'If a fixture or pipe is old, corroded, or repeatedly failing, a new installation is often cheaper than paying for the same repair again and again. We assess what you have and tell you honestly which is the better value.' },
    { q: 'Can I finance my plumbing project?', a: 'Yes. For larger projects like water heaters, sewer lines, or whole-home work, we offer financing with a quick application and flexible terms, so a big upgrade does not have to wait.' },
    { q: 'Do you offer same-day plumbing installations?', a: 'In many cases, yes. We staff for demand and handle most fixture and water-heater installs the same day you call.' },
    { q: 'Are plumbing installations covered by warranty?', a: 'Fixtures and equipment carry their manufacturer warranties, and our workmanship is guaranteed. We will walk you through the coverage on your specific install before we begin.' },
    { q: 'Can I replace just one plumbing fixture, or do I need a full installation?', a: 'Either works. We are happy to install a single fixture or handle a complete plumbing installation — whatever your home needs.' },
  ],
  related: [
    { label: 'Plumbing Installation (overview)', href: '/services/plumbing-installation' },
    { label: 'Faucet Repair & Replacement', href: '/services/faucet-repair-replacement' },
    { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
    { label: 'Water Quality', href: '/services/water-quality' },
    { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => plumbingInstallationCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Plumbing Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Plumbing installation in ${place} — fixtures, water heaters, sump pumps, filtration, and softeners installed leak-free and to code. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/plumbing-installation/${loc.slug}` },
    openGraph: {
      title: `Plumbing Installation in ${place} | ${site.name}`,
      description: `Leak-free, to-code plumbing installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function PlumbingInstallationLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = plumbingInstallationCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
