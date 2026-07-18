import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { waterDamageRestorationCopy } from '@/content/location-copy/water-damage-restoration';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'water-damage-restoration',
  serviceName: 'Water Damage Restoration',
  eyebrow: 'Plumbing',
  hubLabel: 'Water Damage Restoration',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Water Damage Restoration',
  ctaLine: 'Water damage in {neighborhood}? Call before it spreads',
  heroImage: '/services/water-damage-restoration-hero.jpg',
  introHeading: 'Water Damage Restoration in {neighborhood}',
  introParagraphs: [
    'Water damage gets more expensive by the hour. {brand} handles both halves of the problem for homeowners in {place} — we repair the plumbing that failed and dry out what it soaked, so you are dealing with one crew instead of coordinating two.',
    'Most restoration companies are not plumbers, which means someone else has to stop the water before they can start. We arrive with licensed plumbers on the truck, shut the source down, and begin extraction the same visit.',
  ],
  sidebarSections: [
    {
      title: 'What the Job Covers',
      body: [
        'Extraction of standing water, removal of saturated material that cannot be saved, structural drying of framing and subfloor to measured readings, and repair of the failed line, fitting, or water heater behind it.',
        'We take moisture readings daily in fixed locations in your {neighborhood} home and pull the equipment when the numbers say the structure is dry, not on a fixed schedule.',
      ],
    },
    {
      title: 'Documented for Your Insurer',
      body: [
        'Photographs of the source and a daily log of moisture readings, written up so your claim is not held over a missing record. Whether the loss itself is covered remains your insurer’s decision, but the documentation adjusters ask for is the part we control.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'emergency-water-extraction', title: 'Emergency Water Extraction' },
    { slug: 'structural-drying', title: 'Structural Drying' },
    { slug: 'mold-prevention-remediation', title: 'Mold Prevention & Remediation' },
    { slug: 'leak-detection', title: 'Leak Detection' },
  ],
  band1Image: '/services/water-damage-restoration-signs.jpg',
  band1Heading: 'Signs Your {neighborhood} Home Needs Water Restoration',
  commonSituations: [
    'Standing water on a floor, in a basement, or in a crawl space',
    'Carpet, drywall, or subfloor that stays damp more than a day',
    'A musty smell that returns after the room has been aired out',
    'Staining, bubbling paint, or warped baseboards along a wall',
    'A ceiling that sags or shows a spreading brown ring',
    'Water that came up through a floor drain rather than down from above',
    'A burst supply line or a water heater that emptied its tank',
  ],
  trustedBanner: 'Your Local & Trusted Water Restoration Team in {neighborhood}',
  band2Image: '/services/water-extraction-hero.jpg',
  band2Heading: 'What to Expect From Water Restoration in {neighborhood}',
  band2Paragraphs: [
    'We stop the source first — drying a room while it is still filling is wasted work — then pump the standing water, extract what has soaked into materials, and lift saturated pad and contaminated porous material that cannot be saved.',
    'Air movers and dehumidifiers go in the same visit so drying starts immediately, and we return to read moisture levels daily until the structure reaches a dry standard taken from an unaffected part of the same house.',
  ],
  proseSections: [
    { title: 'Why the First 24 Hours Decide the Cost', body: 'How much of your flooring, drywall, and framing survives is decided largely by how long the water sits on it. Mold can begin establishing in damp material within roughly 24 to 48 hours, and materials that could have been dried on day one often have to be replaced by day three. Calling early is the single biggest cost lever you have in {neighborhood}.' },
    { title: 'We Fix the Cause, Not Just the Puddle', body: 'A restoration crew that cannot touch plumbing leaves a gap between pumping the water out and stopping it coming back, and a lot of damage happens in that gap. Because we are plumbers, the burst line, failed fitting, or dead water heater gets repaired as part of the same job in your {neighborhood} home.' },
    { title: 'Clean Water, Grey Water, and Contamination', body: 'A supply line break is clean water. An appliance line carries detergent and food waste. Anything that backed up from a sewer or came in from outside during a storm is contaminated, which changes the protective equipment we use and means more porous material has to be removed rather than dried. Tell us the source when you call.' },
    { title: 'Same-Day Response Across {neighborhood}', body: 'We treat active water damage as an emergency rather than a booking, and reach most {neighborhood} homes the same day. If what you have is a small clean-water spill on a sealed floor that you have already mopped up, we will say so on the phone rather than send a truck.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'clock', title: 'Same-Day Response', text: 'Water damage compounds by the hour. We reach most homes the same day you call.' },
    { icon: 'shield', title: 'Licensed Plumbers On Site', text: 'We fix the cause, not just the puddle — the failed line gets repaired as part of the job.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend surcharge.' },
    { icon: 'doc', title: 'Documented for Insurance', text: 'Moisture readings and photos, written up so your claim is not held over a missing record.' },
  ],
  proofQuote:
    'A supply line let go while we were at work and the lower level was soaked by the time we got home. They had the water out that evening, found the failed fitting, and kept coming back with readings until it was properly dry.',
  sharedFaqs: [
    { q: 'How fast do I need to act after water damage?', a: 'Within the first day if you can. Water keeps moving into framing and subfloor for as long as it sits, and mold can begin establishing in damp material within roughly 24 to 48 hours. The difference between calling on day one and day three is usually the difference between drying materials and replacing them.' },
    { q: 'Do you handle the plumbing repair as well as the drying?', a: 'Yes, and we do the repair first. We are a plumbing company, so the burst line, failed water heater, or cracked fitting that caused the damage gets fixed as part of the same visit rather than left for a second contractor.' },
    { q: 'Will my homeowners insurance cover this?', a: 'Sudden and accidental water damage, like a burst pipe, is commonly covered. Damage from long-term seepage or a maintenance issue you knew about often is not. We document moisture readings and photograph the source so you have the record your adjuster will ask for, but the coverage decision is your insurer’s.' },
    { q: 'Can I just dry it out myself with fans?', a: 'Sometimes, and we will tell you when. A small clean-water spill on a tile floor caught immediately is a shop vac and a box fan. What household fans cannot do is pull water back out of framing and subfloor, which is what causes the smell and the buckled floor two months later. If water reached drywall or has been sitting more than a day, it needs real equipment.' },
    { q: 'How long does the drying process take?', a: 'Most homes take three to five days of active drying, depending on how much water there was, what materials it soaked into, and how humid it is outside. We take readings daily and pull the equipment when the numbers say the structure is dry, not on a fixed schedule.' },
  ],
  related: [
    { label: 'Water Damage Restoration (overview)', href: '/services/water-damage-restoration' },
    { label: 'Emergency Water Extraction', href: '/services/emergency-water-extraction' },
    { label: 'Structural Drying', href: '/services/structural-drying' },
    { label: 'Mold Prevention & Remediation', href: '/services/mold-prevention-remediation' },
    { label: 'After Flood Plumbing', href: '/services/after-flood-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => waterDamageRestorationCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Water Damage Restoration in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Water extraction, structural drying, and plumbing repair in ${place}. Same-day response, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/water-damage-restoration/${loc.slug}` },
    openGraph: {
      title: `Water Damage Restoration in ${place} | ${site.name}`,
      description: `Same-day water damage restoration serving ${place} and nearby areas.`,
    },
  };
}

export default async function WaterDamageRestorationLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = waterDamageRestorationCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
