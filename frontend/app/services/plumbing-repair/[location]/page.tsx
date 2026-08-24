import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { plumbingRepairCopy } from '@/content/location-copy/plumbing-repair';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'plumbing-repair',
  serviceName: 'Plumbing Repair',
  eyebrow: 'Plumbing',
  hubLabel: 'Plumbing Repair',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Plumbing Repair',
  ctaLine: 'Plumbing problem in {neighborhood}? Call for same-day service',
  heroImage: '/services/plumbing-repair-hero.webp',
  introHeading: 'Plumbing Repair in {neighborhood}',
  introParagraphs: [
    'From a dripping faucet to a pipe that finally gave out, plumbing problems do not fix themselves. {brand} provides professional plumbing repair for homeowners in {place} — leaks, clogs, fixtures, and water-pressure issues, fixed at the root cause.',
    'Our licensed plumbers diagnose the real problem, explain the flat-rate price before any work begins, and back it with same-day and emergency service.',
  ],
  sidebarSections: [
    {
      title: 'Residential Plumbing Repairs We Handle',
      body: [
        'We cover just about anything inside your {neighborhood} home’s plumbing — toilet and sink repairs, shower and tub fixture replacements, water-pressure problems, clogged or slow drains, and appliance hookups for dishwashers and washing machines.',
        'If something is leaking, draining slowly, or simply not working right, we track down the cause and fix it.',
      ],
    },
    {
      title: 'We Fix It at the Root Cause',
      body: [
        'A patch that ignores the underlying problem just fails again. We repair the actual cause — a worn valve, a corroded joint, a pressure issue — so the same repair does not come back next month.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'leak-repair', title: 'Leak Repair' },
    { slug: 'drain-cleaning', title: 'Drain Cleaning' },
    { slug: 'water-heater-repair', title: 'Water Heater Repair' },
    { slug: 'faucet-repair-replacement', title: 'Faucet Repair & Replacement' },
  ],
  band1Image: '/services/plumbing-repair.webp',
  band1Heading: 'Signs You Need a Plumber in {neighborhood}',
  commonSituations: [
    'Persistent leaks from pipes, faucets, or fixtures',
    'Slow drains or frequent clogs throughout the home',
    'Low or inconsistent water pressure',
    'Banging, gurgling, or whistling pipes',
    'Water stains, damp areas, or mold growth',
    'A sudden jump in your water bill',
    'Discolored water or foul odors from drains',
  ],
  trustedBanner: 'Your Local & Trusted Plumbing Repair Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.webp',
  band2Heading: 'What to Expect From Your Plumbing Repair in {neighborhood}',
  band2Paragraphs: [
    'A licensed plumber arrives, diagnoses the cause rather than guessing, and explains the recommended repair and the flat-rate price before any work begins — you approve it first.',
    'We carry common parts to handle most repairs in one visit, test the fix, and clean up before we leave, so your {neighborhood} home is back to normal as quickly as possible.',
  ],
  proseSections: [
    { title: 'Common Plumbing Repairs in Older {neighborhood} Homes', body: 'Older homes in {neighborhood} tend to need the same handful of repairs — corroded galvanized supply lines that drop water pressure, worn shut-off valves and faucet cartridges, slow drains in original cast-iron lines, and running toilets with worn internal parts. We fix the immediate problem and flag aging components worth watching.' },
    { title: 'We Fix the Root Cause', body: 'Low pressure at one faucet might be the aerator, or it might be a failing line feeding the whole house. A recurring clog might be the trap, or a deeper issue in the drain. We diagnose which it is so the repair actually holds instead of returning in a month.' },
    { title: 'Emergency & Same-Day Plumbing Repair in {neighborhood}', body: 'Burst pipes, major leaks, and sewer backups cannot wait. We are on call 24/7 for urgent repairs and reach most {neighborhood} homes the same day to stop the damage and make the fix.' },
    { title: 'Related Plumbing Services', body: 'Beyond everyday repairs, we also handle pipe repair and replacement for aging lines, sump-pump service to protect basements, and garbage-disposal repair and installation — so one call covers the whole system.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'check', title: 'We Fix the Root Cause', text: 'We repair the underlying problem, not just the symptom, so it does not return.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked, licensed plumbers you can trust in your home.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start — no overtime or weekend fees.' },
    { icon: 'clock', title: 'Same-Day & Emergency', text: 'We respond fast and reach most homes the same day you call.' },
  ],
  proofQuote:
    'Had low pressure and a leak under the sink. They traced it to a corroded shut-off, replaced the valve and supply lines, and pressure came right back — done in one visit.',
  sharedFaqs: [
    { q: 'What does residential plumbing repair include?', a: 'Just about anything inside your home’s plumbing network — leaks, clogged or slow drains, toilet and sink repairs, fixture replacements, water-pressure problems, and appliance hookups.' },
    { q: 'Do your plumbers provide emergency plumbing repair?', a: 'Yes. We are on call 24/7 for urgent repairs like burst pipes, major leaks, and sewer backups, and we reach most homes the same day.' },
    { q: 'How much does a licensed plumbing repair typically cost?', a: 'Every repair is quoted at a flat rate before we begin, based on your home and the work involved — so there are no surprises. Call for a free, no-obligation estimate.' },
    { q: 'Do plumbing repair services include toilet repair?', a: 'Yes. We fix running, leaking, and clogged toilets, replace worn internal parts, and install new toilets when a repair no longer makes sense.' },
    { q: 'How fast can a plumber respond?', a: 'We staff for demand, so most residential repair calls are handled the same day you reach out — often within hours.' },
  ],
  related: [
    { label: 'Plumbing Repair (overview)', href: '/services/plumbing-repair' },
    { label: 'Leak Repair', href: '/services/leak-repair' },
    { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
    { label: 'Pipe Repair & Replacement', href: '/services/pipe-repair-replacement' },
    { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => plumbingRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Plumbing Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Same-day plumbing repair in ${place} — leaks, clogs, fixtures, and water-pressure issues fixed at the root cause. Upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/plumbing-repair/${loc.slug}` },
    openGraph: {
      title: `Plumbing Repair in ${place} | ${site.name}`,
      description: `Licensed, same-day plumbing repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function PlumbingRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = plumbingRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
