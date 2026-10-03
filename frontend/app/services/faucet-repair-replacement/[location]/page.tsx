import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { faucetCopy } from '@/content/location-copy/faucet-repair-replacement';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'faucet-repair-replacement',
  serviceName: 'Faucet Repair & Replacement',
  eyebrow: 'Plumbing',
  hubLabel: 'Faucet Repair & Replacement',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Faucet Repair & Replacement',
  ctaLine: 'Dripping faucet in {neighborhood}? Call for same-day service',
  heroImage: '/services/faucet-repair-replacement.webp',
  introHeading: 'Faucet Repair & Replacement in {neighborhood}',
  introParagraphs: [
    'A dripping or worn-out faucet wastes water, stains the sink, and only gets worse. {brand} repairs and replaces kitchen and bathroom faucets for homeowners in {place} — stopping drips, fixing low pressure, and installing new fixtures clean and leak-free.',
    'Our licensed plumbers fix most faucets the same day, and tell you honestly whether a quick repair will hold or a new fixture is the better value, with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'Faucets We Repair & Install',
      body: [
        'We handle every faucet in a {neighborhood} home: kitchen faucets (single-handle, double-handle, pull-down, and pull-out), bathroom vanity and sink faucets, and bathtub and shower fixtures. We stop leaky shower faucets and dripping tub faucets for good.',
        'Whether it is a quick cartridge swap or a full fixture replacement in any finish or brand, we install to spec and test before we leave.',
      ],
    },
    {
      title: 'Why a Small Drip Is Worth Fixing',
      body: [
        'A steady drip can waste thousands of gallons a year and run up your bill, and a slow leak under the sink quietly damages cabinets and the subfloor before you notice. Fixing it early restores proper pressure and protects the room.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'plumbing-repair', title: 'Plumbing Repair' },
    { slug: 'plumbing-installation', title: 'Plumbing Installation' },
    { slug: 'leak-repair', title: 'Leak Repair' },
    { slug: 'water-quality', title: 'Water Quality' },
  ],
  band1Image: '/services/plumbing-repair.webp',
  band1Heading: 'Signs You Need Faucet Repair in {neighborhood}',
  commonSituations: [
    'A drip or leak that will not stop, even after a new washer',
    'Corrosion, rust, or mineral buildup on the fixture',
    'Cracks in the body or base of the faucet',
    'Low or uneven water pressure from the tap',
    'Handles that are stiff, loose, or hard to turn',
    'Water pooling under the sink or around the base',
    'An old, outdated fixture you are ready to upgrade',
  ],
  trustedBanner: 'Your Local & Trusted Faucet Repair Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.webp',
  band2Heading: 'What to Expect From Your Faucet Service in {neighborhood}',
  band2Paragraphs: [
    'We start by inspecting the existing faucet and understanding your goal — a kitchen faucet repair, a bathroom faucet installation, or an emergency fix — then explain the flat-rate price before any work begins.',
    'We carefully remove the old fixture, prep the area to prevent leaks, install your new or repaired faucet to spec, and test the water flow so everything works the way it should before we leave.',
  ],
  proseSections: [
    { title: 'Repair or Replace Your Faucet?', body: 'A new washer, O-ring, or cartridge fixes many drips, and we are glad to make that quick repair. But if a faucet is old, cracked, heavily corroded, or repeatedly failing, a replacement stops the repeated fixes and refreshes the room — usually for a modest cost. We tell you honestly which is the better value for your {neighborhood} home.' },
    { title: 'Hard Water and Your Faucets', body: 'The hard water common across {neighborhood} leaves mineral buildup that clogs aerators, stiffens handles, and wears out cartridges faster than they should. We clear the buildup and, where it keeps happening, can point you toward a water softener to protect your fixtures long-term.' },
    { title: 'Kitchen, Bath & Shower Faucets', body: 'From a pull-down kitchen faucet to a vanity sink or a leaky shower valve, we service and install every common type and finish. A faucet upgrade is one of the easiest, most affordable ways to refresh a {neighborhood} kitchen or bath.' },
    { title: 'Same-Day Faucet Service in {neighborhood}', body: 'A faucet that will not stop dripping or has quit entirely does not need to wait. We staff for demand and handle most faucet repairs and installs the same day you call across {neighborhood}.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
    { icon: 'clock', title: 'Same-Day Service', text: 'Most faucet repairs and installs are handled the same day you call.' },
    { icon: 'check', title: 'Clean, Leak-Free Work', text: 'We test every connection and leave the area cleaner than we found it.' },
  ],
  proofQuote:
    'Kitchen faucet had been dripping for months and the handle was stiff with buildup. They swapped the cartridge, cleared the aerator, and it works like new — done in under an hour.',
  sharedFaqs: [
    { q: 'How do I know if I need faucet repair in my home?', a: 'If a faucet drips, leaks, has low pressure, or is hard to turn, it likely needs attention. A new washer or cartridge fixes many issues; we will tell you honestly whether a simple repair will hold or a replacement is the better value.' },
    { q: 'What causes a dripping faucet?', a: 'Most drips come from worn-out washers, O-rings, or cartridges inside the faucet, or from corrosion and mineral buildup on the valve seat. These wear out with normal use and are usually a quick fix.' },
    { q: 'What should I do if my faucet has low water pressure?', a: 'Start by unscrewing the aerator at the tip and clearing any sediment. If pressure is still low, the cause may be a clogged cartridge, a partially closed shutoff, or a larger supply issue — we can diagnose it quickly.' },
    { q: 'Is faucet replacement a good investment for my home?', a: 'Often, yes. If a faucet is old, corroded, or repeatedly failing, a new fixture stops the repeated repairs, saves water, and refreshes the look of the room — usually for a modest cost.' },
    { q: 'What types of faucets do you install?', a: 'We install all common types — kitchen faucets with pull-down sprayers, bathroom sink faucets, tub and shower fixtures, and touchless or single-handle models — in just about any finish or brand.' },
  ],
  related: [
    { label: 'Faucet Repair & Replacement (overview)', href: '/services/faucet-repair-replacement' },
    { label: 'Plumbing Repair', href: '/services/plumbing-repair' },
    { label: 'Plumbing Installation', href: '/services/plumbing-installation' },
    { label: 'Leak Repair', href: '/services/leak-repair' },
    { label: 'Water Quality', href: '/services/water-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => faucetCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Faucet Repair & Replacement in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Faucet repair and replacement in ${place} — stop drips, fix low pressure, and install new kitchen and bathroom faucets. Same-day service. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/faucet-repair-replacement/${loc.slug}` },
    openGraph: {
      title: `Faucet Repair & Replacement in ${place} | ${site.name}`,
      description: `Same-day faucet repair and replacement serving ${place} and nearby areas.`,
    },
  };
}

export default async function FaucetLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = faucetCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
