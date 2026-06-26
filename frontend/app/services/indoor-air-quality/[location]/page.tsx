import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { indoorAirQualityCopy } from '@/content/location-copy/indoor-air-quality';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'indoor-air-quality',
  serviceName: 'Indoor Air Quality',
  eyebrow: 'Heating & Cooling',
  hubLabel: 'Indoor Air Quality',
  parentCrumb: { label: 'Heating', href: '/services/heating' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Indoor Air Quality',
  ctaLine: 'Worried about your air quality in {neighborhood}? Call to schedule a test',
  heroImage: '/services/iaq-hero.jpg',
  introHeading: 'Indoor Air Quality Services in {neighborhood}',
  introParagraphs: [
    'Cleaner, healthier air at home starts with knowing what is actually in it. {brand} tests indoor air and installs whole-home filtration, purifiers, humidifiers, and dehumidifiers for homeowners in {place} — tailored to your home rather than a one-size-fits-all box off the shelf.',
    'We test first to pinpoint the cause, then recommend the right solution, with upfront flat-rate pricing you approve before any work begins.',
  ],
  sidebarSections: [
    {
      title: 'What We Install',
      body: [
        'For {neighborhood} homes we handle the full range: whole-home air purifiers and media filters, HVAC-integrated humidifiers and dehumidifiers, and ventilation improvements — all sized to your system and your home.',
        'We start with air testing so you treat the actual problem, whether that is allergens, humidity swings, or stale air.',
      ],
    },
    {
      title: 'Why It Matters Here',
      body: [
        'The Ohio Valley swings from humid, pollen-heavy summers to dry, closed-up winters, so {neighborhood} homes deal with both mold-feeding moisture and bone-dry heating-season air. The right IAQ setup steadies humidity and clears allergens year-round.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'furnace-maintenance', title: 'Furnace Maintenance' },
    { slug: 'ac-maintenance', title: 'AC Maintenance' },
    { slug: 'heat-pumps', title: 'Heat Pumps' },
    { slug: 'water-quality', title: 'Water Quality' },
  ],
  band1Image: '/services/iaq-benefits.jpg',
  band1Heading: 'Signs Your {neighborhood} Home Has an Air Quality Problem',
  commonSituations: [
    'Allergy or asthma flare-ups that feel worse indoors',
    'Stale, stuffy air or lingering odors',
    'Excessive dust settling on surfaces',
    'Dry skin and static in winter, clamminess in summer',
    'Condensation, musty smells, or visible mold',
    'Rooms that never seem to get fresh air',
    'A new pet, baby, or family member with breathing issues',
  ],
  trustedBanner: 'Your Local & Trusted Indoor Air Quality Pros in {neighborhood}',
  band2Image: '/services/furnace-filters.jpg',
  band2Heading: 'What to Expect From Your Air Quality Service in {neighborhood}',
  band2Paragraphs: [
    'We start with an indoor air quality test to find what is actually in your air — allergens, humidity levels, odors, or airborne contaminants — then explain the results and the flat-rate price before any work begins.',
    'We install the right solution at the system level, whether that is a whole-home purifier, a better filter, or a humidifier, and confirm it is working so every room in your {neighborhood} home breathes cleaner.',
  ],
  proseSections: [
    { title: 'Start With an Air Quality Test', body: 'Treating indoor air is not about grabbing the first purifier on the shelf — the right fix depends on what is actually in your air. We test your {neighborhood} home to pinpoint the cause, whether allergens, humidity, or VOCs from cleaners and building materials, then recommend a solution that targets it instead of guessing.' },
    { title: 'Humidity, Both Ways, in {neighborhood}', body: 'The Ohio Valley climate runs humid in summer and dry in winter, so {neighborhood} homes fight mold-feeding moisture half the year and static, dry-skin, dry-throat air the other half. A whole-home humidifier or dehumidifier integrates with your HVAC to hold a steady, comfortable level all year — not just one room.' },
    { title: 'Whole-Home Filtration', body: 'A whole-home air purifier treats the air everywhere your HVAC reaches, not just one plug-in corner of a room. It cuts dust, pollen, pet dander, mold spores, and airborne germs — a real help for the allergy and asthma sufferers common in {neighborhood} homes, and easier on your HVAC system too.' },
    { title: 'Cleaner Air, Longer HVAC Life', body: 'Poor air quality is hard on equipment: dust and debris coat the coils and blower, force the system to work harder, and shorten its life. Better filtration in your {neighborhood} home means cleaner air to breathe and less strain on the furnace and AC, which means fewer breakdowns and lower bills.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'badge', title: 'Air Quality Testing', text: 'We test your indoor air to pinpoint the exact cause before recommending a solution.' },
    { icon: 'check', title: 'Filtration & Humidifiers', text: 'Whole-home air purifiers, filters, humidifiers, and dehumidifiers — installed right.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians and properly installed, lasting systems.' },
    { icon: 'star', title: 'Satisfaction Guarantee', text: 'If you are not happy, neither are we — we stand behind every job.' },
  ],
  proofQuote:
    'Our allergies were brutal indoors and the winter air was painfully dry. They tested the air, put in a whole-home purifier and a humidifier on the furnace, and the difference was real — less dust, easier breathing, no more static shocks.',
  sharedFaqs: [
    { q: 'What are the signs of poor indoor air quality?', a: 'Common signs include frequent allergy or asthma flare-ups, stale or stuffy air, lingering odors, excessive dust on surfaces, and humidity problems like dry skin in winter or condensation and mold in summer.' },
    { q: 'What are indoor air quality services, and why are they important?', a: 'IAQ services combine air testing with solutions like filtration, purifiers, humidifiers, dehumidifiers, and ventilation to reduce contaminants. They matter because most of us spend the majority of our time indoors, where pollutants can concentrate.' },
    { q: 'What types of indoor air pollutants can affect my home?', a: 'Dust, pollen, pet dander, mold spores, bacteria and viruses, chemical fumes (VOCs) from cleaners and building materials, and both excess and low humidity can all affect your air.' },
    { q: 'Can poor air quality affect my HVAC system?', a: 'Yes. A buildup of dust and debris strains your equipment, reduces efficiency, and leads to more breakdowns — so cleaner air helps your HVAC system last longer too.' },
    { q: 'How often should I replace air filters?', a: 'Monthly is ideal (as Energy Star recommends), and every three months at a minimum — more often with pets or during heavy heating and cooling seasons.' },
  ],
  related: [
    { label: 'Indoor Air Quality (overview)', href: '/services/indoor-air-quality' },
    { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
    { label: 'AC Maintenance', href: '/services/ac-maintenance' },
    { label: 'Heat Pumps', href: '/services/heat-pumps' },
    { label: 'Water Quality', href: '/services/water-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => indoorAirQualityCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Indoor Air Quality in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Indoor air quality services in ${place} — air testing, whole-home filtration, purifiers, and humidifiers for cleaner, healthier air. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/indoor-air-quality/${loc.slug}` },
    openGraph: {
      title: `Indoor Air Quality in ${place} | ${site.name}`,
      description: `Air testing, filtration, and humidifiers serving ${place} and nearby areas.`,
    },
  };
}

export default async function IndoorAirQualityLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = indoorAirQualityCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
