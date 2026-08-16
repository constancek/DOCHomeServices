import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { emergencyWaterExtractionCopy } from '@/content/location-copy/emergency-water-extraction';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'emergency-water-extraction',
  serviceName: 'Emergency Water Extraction',
  eyebrow: 'Plumbing',
  hubLabel: 'Emergency Water Extraction',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Emergency Water Extraction',
  ctaLine: 'Standing water in {neighborhood}? Every hour counts',
  heroImage: '/services/water-extraction-hero.webp',
  introHeading: 'Emergency Water Extraction in {neighborhood}',
  introParagraphs: [
    'Extraction is the part of water damage work where speed actually changes the outcome. How much of your flooring, drywall, and framing survives in {place} is decided largely by how long the water sat on it. Everything after this step is slower and costs more.',
    '{brand} arrives with pumps, extractors, and a licensed plumber on the same truck. The source gets shut down and repaired, the standing water comes out, saturated material that cannot be saved comes up, and drying equipment goes in before we leave — one visit rather than three contractors over four days.',
  ],
  sidebarSections: [
    {
      title: 'What the First Visit Covers',
      body: [
        'Isolating and repairing the failed line, pumping the bulk standing water, extracting what has soaked into carpet, pad, and subfloor, and lifting saturated pad and contaminated porous material that cannot be saved.',
        'Drying equipment goes in the same visit so drying starts immediately in your {neighborhood} home. The drying itself is a separate stage that runs over the following days — extraction is what stops the damage getting worse.',
      ],
    },
    {
      title: 'Documented From the First Hour',
      body: [
        'Photographs of the source and the water line before we pump, plus moisture readings taken on the first visit. Whether the loss is covered remains your insurer’s decision, but the record adjusters ask for is the part we control, and it is easiest to capture before the water is gone.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'structural-drying', title: 'Structural Drying' },
    { slug: 'water-damage-restoration', title: 'Water Damage Restoration' },
    { slug: 'mold-prevention-remediation', title: 'Mold Prevention & Remediation' },
    { slug: 'basement-flood-plumbing', title: 'Basement Flood Plumbing' },
  ],
  band1Image: '/services/water-extraction-situations.webp',
  band1Heading: 'When {neighborhood} Homes Need Emergency Extraction',
  commonSituations: [
    'A burst supply line that ran before anyone noticed',
    'A water heater that failed and emptied its tank',
    'A basement that took on water during a storm',
    'A sewer or drain backup that came up through a floor drain',
    'An overflowed tub, toilet, or appliance line',
    'Water from a fire crew putting out a fire upstairs',
  ],
  trustedBanner: 'Your Local & Trusted Water Extraction Team in {neighborhood}',
  band2Image: '/services/water-extraction-hero.webp',
  band2Heading: 'How Extraction Works in {neighborhood}',
  band2Paragraphs: [
    'We shut the source down first, because pumping a room that is still filling is wasted work. Then submersible pumps move the bulk volume — the fastest-moving part of the job and the one that matters most — and extraction equipment pulls back what has soaked into carpet, pad, and subfloor.',
    'Saturated pad and contaminated porous material come up on the same visit, because leaving it in slows every day of drying that follows. Air movers and dehumidifiers go in before we leave, so drying starts today rather than tomorrow.',
  ],
  proseSections: [
    { title: 'Why the First Hours Decide What Survives', body: 'Water keeps moving into framing and subfloor for as long as it sits, and it does not stop at the edge of the puddle. Materials that could have been dried on day one often have to be replaced by day three. In {neighborhood} the practical difference between calling within the hour and calling the next morning is usually the difference between an extraction bill and a demolition bill.' },
    { title: 'We Stop the Source, Not Just the Puddle', body: 'Most extraction outfits cannot touch the pipe that caused the problem, which leaves hours or days between the water being pumped out and a plumber arriving to stop it coming back. A lot of damage happens in that gap. Because we are plumbers, the burst line, failed fitting, or dead water heater in your {neighborhood} home gets isolated and repaired as part of the same visit.' },
    { title: 'Clean Water, Grey Water, and Contamination', body: 'A supply line break is clean water. An appliance line carries detergent and food waste. Anything that backed up from a sewer or came in from outside during a storm is contaminated, which changes the protective equipment we use from the first minute on site and means more porous material has to be removed rather than dried. Tell us the source when you call.' },
    { title: 'When You Do Not Need Us', body: 'A small clean-water spill on tile or sealed vinyl, caught within the hour, is a mop and a fan. A shop vac handles more than people expect on hard flooring. If the water never left the room, never reached carpet or drywall, and is already up, you are done — calling us would be paying for equipment you do not need. The threshold is porous material: once water is in carpet pad, subfloor, or the bottom of a drywall sheet, household tools cannot reach it.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us First',
  whyUs: [
    { icon: 'clock', title: 'Same-Day On Site', text: 'Extraction is a race. Every hour of standing water is more material that cannot be saved.' },
    { icon: 'shield', title: 'Licensed Plumbers On the Truck', text: 'We stop the source as part of the same visit, not after a second contractor arrives.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend surcharge.' },
    { icon: 'doc', title: 'Documented for Insurance', text: 'Photos and moisture readings from the first visit, written up for your claim.' },
  ],
  proofQuote:
    'A supply line let go while we were out and there was standing water across the lower level when we got back. They were there that afternoon with pumps, had the water out and the pad up the same visit, and shut off the line that caused it before they left.',
  sharedFaqs: [
    { q: 'How quickly can you get here?', a: 'Same day for most of the area, and we treat active flooding as an emergency rather than a booking. Call and tell us how much water there is and whether it is still coming in — that changes how we dispatch.' },
    { q: 'What should I do before you arrive?', a: 'Shut the water off at the main if you can safely reach it. Kill power to the affected level at the panel — never stand in water to reach a breaker. Lift what you can off the floor, especially anything with fabric or paper. Do not run a household vacuum on standing water.' },
    { q: 'Can I extract the water myself with a shop vac?', a: 'For a small clean-water spill on hard flooring, genuinely yes, and you should. A shop vac and a fan will finish that. What a shop vac cannot do is pull water back out of carpet pad, subfloor, or wall cavity, which is where the volume actually goes in a real flood. If water spread past one room or has been down more than a few hours, it needs extraction equipment.' },
    { q: 'How long does extraction take?', a: 'The extraction itself is usually a few hours, depending on volume and access. That is only the first step — drying the structure afterward typically runs three to five days with equipment in place. Extraction is what stops the damage getting worse; drying is what makes the space usable again.' },
    { q: 'Is the water contaminated?', a: 'Depends on the source. A supply line break is clean water. An appliance line carries detergent and food waste. Anything that backed up from a sewer, or came in from outside during a storm, is contaminated — that changes the protective equipment we use and means more porous material has to be removed rather than dried.' },
  ],
  related: [
    { label: 'Emergency Water Extraction (overview)', href: '/services/emergency-water-extraction' },
    { label: 'Structural Drying', href: '/services/structural-drying' },
    { label: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
    { label: 'Mold Prevention & Remediation', href: '/services/mold-prevention-remediation' },
    { label: 'Basement Flood Plumbing', href: '/services/basement-flood-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => emergencyWaterExtractionCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Emergency Water Extraction in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Same-day pumps and extractors for standing water in ${place}. We shut the source down and get the water out fast. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/emergency-water-extraction/${loc.slug}` },
    openGraph: {
      title: `Emergency Water Extraction in ${place} | ${site.name}`,
      description: `Same-day emergency water extraction serving ${place} and nearby areas.`,
    },
  };
}

export default async function EmergencyWaterExtractionLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = emergencyWaterExtractionCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
