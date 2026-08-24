import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { miniSplitsCopy } from '@/content/location-copy/mini-splits';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'mini-splits',
  serviceName: 'Mini-Splits',
  eyebrow: 'Air Conditioning',
  hubLabel: 'Mini-Splits',
  parentCrumb: { label: 'Air Conditioning', href: '/services/air-conditioning' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Ductless Mini-Splits',
  ctaLine: 'Considering a mini-split in {neighborhood}? Call for a free estimate',
  heroImage: '/services/minisplit-hero.webp',
  introHeading: 'Ductless Mini-Splits in {neighborhood}',
  introParagraphs: [
    'A ductless mini-split delivers flexible cooling and heating without ductwork — targeted comfort for the rooms a central system never quite reaches. {brand} installs and repairs mini-splits for homeowners in {place}, pairing an outdoor unit with one or more indoor heads sized to how you actually use your home.',
    'Because ductless systems work differently from central air, proper service takes specialized knowledge — our technicians understand how mini-splits function and set each one up right, with upfront flat-rate pricing and financing available.',
  ],
  sidebarSections: [
    {
      title: 'Installation & Repair',
      body: [
        'We install ductless systems in {neighborhood} homes, additions, finished basements, garages, and any space where ductwork is impractical — sizing the system and indoor heads to the rooms you want to condition.',
        'When a mini-split loses airflow, leaks, or stops holding temperature, we diagnose and fix the common issues so comfort comes back fast.',
      ],
    },
    {
      title: 'Where Mini-Splits Shine Here',
      body: [
        'Older {neighborhood} homes built before central ducting, third-floor rooms that bake in summer, and additions that the main system cannot keep up with are all classic mini-split jobs. One outdoor unit can run several independently controlled zones.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'mini-split-installation', title: 'Mini-Split Installation' },
    { slug: 'mini-split-repair', title: 'Mini-Split Repair' },
    { slug: 'ac-installation-replacement', title: 'AC Installation & Replacement' },
    { slug: 'heat-pumps', title: 'Heat Pumps' },
  ],
  band1Image: '/services/mini-splits.webp',
  band1Heading: 'Signs a Mini-Split Makes Sense for Your {neighborhood} Home',
  commonSituations: [
    'Rooms or additions a central system never cools or heats evenly',
    'An older home with no existing ductwork',
    'A finished basement, garage, or attic conversion that needs comfort',
    'Weak airflow or uneven temperatures between rooms',
    'Rising energy bills from extending central air to a far room',
    'Water leaking or odors from an existing indoor unit',
    'A mini-split that shuts down or responds slowly',
  ],
  trustedBanner: 'Your Local & Trusted Mini-Split Pros in {neighborhood}',
  band2Image: '/services/mini-split-installation.webp',
  band2Heading: 'What to Expect From Your Mini-Split Service in {neighborhood}',
  band2Paragraphs: [
    'For an install, we walk the space, size the system to your rooms and how you use them, and recommend single- or multi-zone — then explain the flat-rate price before any work begins.',
    'We mount the indoor heads and the outdoor unit, run the refrigerant lines and electrical through a small wall opening, and test each zone so your {neighborhood} home holds temperature the way it should before we leave.',
  ],
  proseSections: [
    { title: 'How a Mini-Split Works', body: 'A ductless mini-split pairs an outdoor compressor with one or more indoor heads, linked by refrigerant lines through a small wall opening. Instead of pushing air through ducts, it delivers conditioned air straight into each room, and because every head runs independently you can set different temperatures zone to zone — comfort and lower energy waste for a {neighborhood} home.' },
    { title: 'Perfect for Older {neighborhood} Homes', body: 'A lot of the housing across {neighborhood} predates central ducting, and tearing walls open to add ducts is expensive and messy. A mini-split skips all that — it conditions the rooms you use without the ductwork, which is why it is such a common fix for century-old homes, additions, and converted attics here.' },
    { title: 'Heating and Cooling in One', body: 'Most mini-splits are heat pumps, so the same system cools through a {neighborhood} summer and heats through winter, with inverter-driven compressors that adjust output to demand instead of cycling hard. That efficiency is a real edge over older window units or stretching central air to a distant room.' },
    { title: 'Right-Sizing the Zones', body: 'A single head handles one room; a multi-zone system runs several heads off one outdoor unit. Getting the count and placement right is what makes a mini-split comfortable instead of noisy and overworked, so we size it to your {neighborhood} home and how you actually live in it.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'check', title: 'Cooling & Heating', text: 'One efficient ductless system that keeps your space comfortable all year.' },
    { icon: 'badge', title: 'Right-Sized Zones', text: 'We size the system and indoor heads to your home and how you use it.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians and clean, code-compliant work.' },
    { icon: 'star', title: 'Financing Available', text: 'Flexible plans so an efficient upgrade fits your budget.' },
  ],
  proofQuote:
    'Our 1920s house had a third floor that was unbearable every summer. They put in a two-zone mini-split, sized it right, and now those rooms finally hold temperature. Clean install and no ductwork tearing up the walls.',
  sharedFaqs: [
    { q: 'What is a ductless mini-split system?', a: 'A mini-split pairs an outdoor compressor with one or more indoor units (heads) that mount on a wall or ceiling. It cools and heats your home without any ductwork — perfect for spaces a central system cannot reach well.' },
    { q: 'Do mini-splits heat as well as cool?', a: 'Yes. Most mini-splits are heat pumps, so the same system cools in summer and heats in winter — efficiently, and with independent control for each zone.' },
    { q: 'How many indoor units do I need?', a: 'It depends on the rooms or zones you want to condition. A single head works for one room; a multi-zone system runs several heads off one outdoor unit. We size it to your home.' },
    { q: 'Are ductless mini-splits energy efficient?', a: 'Very. With no duct losses and inverter-driven compressors that adjust output to demand, mini-splits often cut energy use compared with older window units or extending central air.' },
    { q: 'Where do mini-splits make the most sense?', a: 'Additions and renovations, finished basements and garages, older homes without ducts, and any room with stubborn uneven temperatures are all great fits.' },
  ],
  related: [
    { label: 'Mini-Splits (overview)', href: '/services/mini-splits' },
    { label: 'Mini-Split Installation', href: '/services/mini-split-installation' },
    { label: 'Mini-Split Repair', href: '/services/mini-split-repair' },
    { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
    { label: 'Heat Pumps', href: '/services/heat-pumps' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => miniSplitsCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Ductless Mini-Splits in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Ductless mini-split installation and repair in ${place} — flexible, efficient cooling and heating without ductwork. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/mini-splits/${loc.slug}` },
    openGraph: {
      title: `Ductless Mini-Splits in ${place} | ${site.name}`,
      description: `Mini-split installation and repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function MiniSplitsLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = miniSplitsCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
