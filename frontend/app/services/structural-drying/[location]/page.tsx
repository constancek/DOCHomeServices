import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { structuralDryingCopy } from '@/content/location-copy/structural-drying';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'structural-drying',
  serviceName: 'Structural Drying',
  eyebrow: 'Plumbing',
  hubLabel: 'Structural Drying',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Structural Drying',
  ctaLine: 'Water out but still damp in {neighborhood}? Call to get equipment in',
  heroImage: '/services/structural-drying-hero.webp',
  introHeading: 'Structural Drying in {neighborhood}',
  introParagraphs: [
    'A floor can feel dry underfoot while the subfloor beneath it is still holding water. {brand} dries the structure rather than the surface for homeowners in {place} — air movers and dehumidifiers in place, moisture readings taken daily, equipment out when the numbers say so.',
    'This is the stage after the water is gone, and it is the one that decides whether the repair holds. The smell nobody can locate, the floor that cups three months later, the mold behind a wall that looked fine — those all come from drying that was called finished by eye.',
  ],
  sidebarSections: [
    {
      title: 'What the Job Covers',
      body: [
        'Mapping how far the water travelled with meters and, where it helps, thermal imaging. Opening sealed wall cavities where they cannot dry on their own, usually with small controlled openings rather than replacing a whole wall. Setting air movers to lift moisture out of materials and dehumidifiers to pull it out of the air before it settles back in.',
        'Then the part that matters: the same readings from the same points in your {neighborhood} home, every day, compared against a dry standard taken from an unaffected part of the same house in the same material.',
      ],
    },
    {
      title: 'Documented for Your Insurer',
      body: [
        'You get the daily reading log. Adjusters expect to see drying documented, and having the numbers prevents most disputes about whether the work was needed or whether it was finished. Whether the underlying water event is covered remains your insurer’s decision.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'emergency-water-extraction', title: 'Emergency Water Extraction' },
    { slug: 'water-damage-restoration', title: 'Water Damage Restoration' },
    { slug: 'mold-prevention-remediation', title: 'Mold Prevention & Remediation' },
    { slug: 'pipe-repair-replacement', title: 'Pipe Repair & Replacement' },
  ],
  band1Image: '/services/structural-drying-materials.webp',
  band1Heading: 'What Still Holds Water in a {neighborhood} Home',
  commonSituations: [
    'Subfloor and floor joists under carpet or hardwood',
    'The bottom of drywall sheets, where water wicks upward well above the visible line',
    'Wall cavities and the insulation inside them',
    'Framing and sill plates along exterior walls',
    'Concrete slab and the flooring bonded to it',
    'Cabinet bases, stair stringers, and trim',
    'Plaster over wood lath, which gives moisture up far slower than drywall',
  ],
  trustedBanner: 'Your Local & Trusted Structural Drying Team in {neighborhood}',
  band2Image: '/services/structural-drying-hero.webp',
  band2Heading: 'What to Expect From Structural Drying in {neighborhood}',
  band2Paragraphs: [
    'Equipment goes in the day we arrive, because drying delayed is drying that takes longer. Then we come back and read it. Most {neighborhood} homes run three to five days with equipment in place, longer where plaster, solid wood, or a finished lower level is involved.',
    'Be ready for the equipment. It is noisy, it runs continuously including overnight, and it will add to your electricity bill for those days. Switching it off to sleep lets moisture redistribute back through the material, and it is the most common reason a drying job takes twice as long as it should.',
  ],
  proseSections: [
    { title: 'Drying the Structure, Not the Surface', body: 'Household fans move air across a surface. That dries the surface and leaves the water inside the material, which is why a room can feel dry and still smell two months later. Restoration air movers are shaped to lift moisture out of the material itself, and they only work paired with dehumidifiers — otherwise you are moving water from the floor into the air and back into the walls of your {neighborhood} home.' },
    { title: 'How We Know When It Is Actually Dry', body: 'We take readings from the same points daily and compare them against a dry standard from an unaffected part of the same house, in the same material. When the affected areas reach that baseline and hold it, the structure is dry. That comparison is the whole method — a moisture reading on its own tells you very little, because what counts as dry depends on the material and the weather that week.' },
    { title: 'Less Gets Torn Out Than You Expect', body: 'Drywall that was wet but not contaminated can frequently be dried in place rather than cut out. What generally cannot be saved is carpet pad, saturated insulation, and anything touched by contaminated water. We would rather dry material than bill you to replace it, and in older {neighborhood} houses that is often the difference between keeping original finishes and losing them.' },
    { title: 'When You Do Not Need Us', body: 'Clean water on a hard, sealed floor that you wiped up within the hour does not need structural drying. Nothing porous took it on, so there is nothing left to dry — open a window and move on. A damp patch that has been there for years in a basement that has always been humid is also not a drying job. That is an ongoing moisture source, groundwater or a failed gutter or poor grading, and running equipment on it just runs your meter. Find the source first, and if it is not plumbing we will tell you on the phone rather than send a truck.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'check', title: 'Measured, Not Guessed', text: 'Daily meter readings in fixed locations. We can show you the numbers rather than tell you it feels dry.' },
    { icon: 'clock', title: 'Equipment Same Day', text: 'Drying starts the visit we arrive. Days of delay here turn into weeks of problems later.' },
    { icon: 'doc', title: 'Documented for Insurance', text: 'The reading log is exactly what adjusters ask for, and having it prevents most disputes.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend fees.' },
  ],
  proofQuote:
    'They put the equipment in the same afternoon and then actually came back every day with a meter. When I asked whether it was done they showed me the readings next to a room that never got wet. Nobody has ever shown me numbers before.',
  sharedFaqs: [
    { q: 'How long does structural drying take?', a: 'Most homes run three to five days with equipment in place. What changes it is how much water there was, which materials it soaked into, how much of it we could extract first, and the humidity outside. Hardwood and plaster take longer than carpet and drywall. We read it daily and pull the equipment when the numbers hit target, not on a fixed schedule.' },
    { q: 'Why can I not just run my own fans?', a: 'Household fans move air across a surface, which dries the surface and leaves the water inside the material. Restoration air movers are shaped to lift moisture out of the material itself, and they only work paired with dehumidifiers — otherwise you are moving water from the floor into the air and back into the walls. Fans alone are why a room can feel dry and still smell two months later.' },
    { q: 'Does the equipment have to run overnight?', a: 'Yes, continuously. Drying stops when the equipment stops, and moisture redistributes back through the material overnight if you switch it off. It is noisy, and it does add to your electricity bill for those days. Turning it off to sleep is the single most common reason a job takes twice as long.' },
    { q: 'How do you know when it is actually dry?', a: 'We take moisture readings from the same points daily and compare them against a dry standard from an unaffected part of the same house, using the same material. When the affected areas reach that baseline and hold it, the structure is dry. That comparison is why a reading on its own does not tell you much.' },
    { q: 'Do you have to remove my drywall and flooring?', a: 'Less often than people expect. Drywall that was wet but not contaminated can frequently be dried in place. What generally cannot be saved is carpet pad, saturated insulation, and anything that was touched by contaminated water. We would rather dry material than bill you to replace it.' },
    { q: 'Will my insurance pay for the drying?', a: 'Where the water event itself is covered, drying normally is too, and it is the part adjusters most expect to see documented. The daily reading log we produce is what supports that. Coverage of the underlying event is still your insurer’s decision.' },
    { q: 'Is drying really necessary if the water is already gone?', a: 'It depends entirely on what the water touched. Clean water on a sealed floor wiped up within the hour needs nothing. Water that reached carpet, drywall, framing, or subfloor is a different matter — that material stays wet long after the room looks normal, and mold can begin establishing in damp material within roughly 24 to 48 hours. A meter reading settles the question in a couple of minutes.' },
  ],
  related: [
    { label: 'Structural Drying (overview)', href: '/services/structural-drying' },
    { label: 'Emergency Water Extraction', href: '/services/emergency-water-extraction' },
    { label: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
    { label: 'Mold Prevention & Remediation', href: '/services/mold-prevention-remediation' },
    { label: 'Pipe Repair & Replacement', href: '/services/pipe-repair-replacement' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => structuralDryingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Structural Drying in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Air movers, dehumidifiers, and daily moisture readings in ${place} until framing, subfloor, and drywall are genuinely dry. Upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/structural-drying/${loc.slug}` },
    openGraph: {
      title: `Structural Drying in ${place} | ${site.name}`,
      description: `Measured structural drying of framing, subfloor, and drywall serving ${place} and nearby areas.`,
    },
  };
}

export default async function StructuralDryingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = structuralDryingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
