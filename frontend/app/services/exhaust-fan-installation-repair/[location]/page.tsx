import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { exhaustFanCopy } from '@/content/location-copy/exhaust-fan-installation-repair';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'exhaust-fan-installation-repair',
  serviceName: 'Exhaust Fan Installation & Repair',
  eyebrow: 'Electrical',
  hubLabel: 'Exhaust Fan Installation & Repair',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'Exhaust Fan Installation & Repair',
  ctaLine: 'Bathroom staying humid in {neighborhood}? Call for service',
  heroImage: '/services/exhaust-hero.webp',
  introHeading: 'Exhaust Fan Installation & Repair in {neighborhood}',
  introParagraphs: [
    'Bathrooms and kitchens make moisture every day, and if it has no clear path out it collects on ceilings, walls, and insulation — leading to mold, peeling paint, and musty odors. {brand} installs, repairs, and replaces exhaust fans for homeowners in {place}, with stronger airflow, quieter operation, and venting that actually carries moisture outside.',
    'Our licensed electricians wire to code, confirm the duct vents outdoors rather than into the attic, and tell you honestly whether a repair or a new fan is the right call — with upfront flat-rate pricing.',
  ],
  sidebarSections: [
    {
      title: 'What We Handle',
      body: [
        'For {neighborhood} homes we install new bathroom and kitchen exhaust fans, replace undersized or failing units, repair noisy or weak fans, and correct ductwork that vents into the attic instead of outside.',
        'We size the fan to the room and confirm quiet, code-compliant operation before we leave.',
      ],
    },
    {
      title: 'Venting Outdoors Matters Most',
      body: [
        'A fan is only as good as where it sends the moisture. Many {neighborhood} homes have fans dumping damp air straight into the attic, which breeds mold over time. We make sure the duct runs all the way outside.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'indoor-air-quality', title: 'Indoor Air Quality' },
    { slug: 'ceiling-fan-installation', title: 'Ceiling Fan Installation' },
    { slug: 'switches-outlets', title: 'Switches & Outlets' },
    { slug: 'electrical-inspections', title: 'Electrical Inspections' },
  ],
  band1Image: '/services/exhaust-fan-installation-repair.webp',
  band1Heading: 'Signs Your {neighborhood} Home Needs Exhaust Fan Service',
  commonSituations: [
    'Mirrors that stay fogged long after a shower',
    'Condensation on ceilings or walls, peeling paint near the vent',
    'Musty odors or visible mold around fixtures and corners',
    'A fan that buzzes, grinds, or rattles',
    'Weak airflow or a motor that hums but moves little air',
    'A wall switch that works only intermittently',
    'A fan venting into the attic instead of outdoors',
  ],
  trustedBanner: 'Your Local & Trusted Exhaust Fan Pros in {neighborhood}',
  band2Image: '/services/exhaust-hero.webp',
  band2Heading: 'Our Exhaust Fan Process in {neighborhood}',
  band2Paragraphs: [
    'We evaluate the room size and airflow, recommend a fan with the right capacity, and check how the existing unit is vented — then explain whether repair or replacement makes sense and lay out the flat-rate price before any work begins.',
    'We complete the wiring to code, confirm the duct vents outdoors, and test airflow, noise, and the seal so your {neighborhood} bathroom or kitchen clears moisture the way it should.',
  ],
  proseSections: [
    { title: 'Repair or Replace Your Exhaust Fan?', body: 'A newer fan with a worn motor, loose connection, or faulty switch is often a straightforward repair — if the housing is secure and it already vents outdoors. But an older, undersized, or mis-vented fan in a {neighborhood} home is usually better replaced, since a properly sized unit clears moisture far better and prevents the mold a weak fan lets build. We evaluate airflow, venting, and cost before recommending either.' },
    { title: 'Why Venting Outdoors Is the Whole Point', body: 'A lot of {neighborhood} homes have exhaust fans that vent into the attic or a wall cavity instead of all the way outside — which just moves the moisture problem somewhere you cannot see it, where it grows mold. We run the duct to an exterior vent so the damp air actually leaves the house.' },
    { title: 'Sizing the Fan to the Room', body: 'An undersized fan cannot keep up with a steamy bathroom, so the mirror stays fogged and the humidity lingers for hours. We match the fan’s airflow rating to the size of your {neighborhood} bathroom or kitchen so it actually pulls the moisture out, fast and quietly.' },
    { title: 'Kitchen Exhaust Too', body: 'Cooking throws steam, heat, and airborne grease into the air that settles on cabinets and surfaces. We install and repair kitchen exhaust fans for {neighborhood} homes as well, improving comfort and keeping surfaces cleaner with proper, vented-outside ventilation.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Code-compliant wiring and safe, secure connections.' },
    { icon: 'check', title: 'Vented Outdoors', text: 'We confirm ducts vent outside — not into the attic — for real moisture control.' },
    { icon: 'badge', title: 'Honest Repair vs. Replace', text: 'We evaluate airflow and venting before recommending the right solution.' },
    { icon: 'star', title: 'Financing Available', text: 'Flexible options for qualifying homeowners.' },
  ],
  proofQuote:
    'Our bathroom stayed steamy for an hour after every shower and paint was peeling by the vent. Turned out the old fan dumped into the attic. They put in a properly sized fan, ran the duct outside, and the room clears in minutes now — and it is quiet.',
  sharedFaqs: [
    { q: 'Can you repair noisy exhaust fans?', a: 'Yes. Fan noise usually comes from a worn motor, a loose mount, or built-up debris. We diagnose the source and either repair it or recommend a replacement if the motor is failing.' },
    { q: 'Do you offer financing for exhaust fan installation and repair?', a: 'Yes — we offer financing for qualifying homeowners and explain pricing clearly so you understand the scope of work before the project begins.' },
    { q: 'Can I install a bathroom exhaust fan myself?', a: 'We do not recommend it. Installation involves electrical wiring and proper exterior venting, and a licensed electrician ensures the fan is safe, to code, and actually vented outdoors rather than into the attic.' },
    { q: 'Why isn’t my bathroom exhaust fan removing moisture?', a: 'The most common reasons are a fan that is undersized for the room, ductwork that vents into the attic instead of outdoors, a clogged duct, or a weak or worn motor. We check all of these.' },
    { q: 'How long does exhaust fan installation take?', a: 'A standard replacement usually takes a couple of hours. A brand-new installation that requires running new ductwork and exterior venting takes longer — we will give you a clear estimate up front.' },
  ],
  related: [
    { label: 'Exhaust Fan Installation & Repair (overview)', href: '/services/exhaust-fan-installation-repair' },
    { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
    { label: 'Ceiling Fan Installation', href: '/services/ceiling-fan-installation' },
    { label: 'Switches & Outlets', href: '/services/switches-outlets' },
    { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => exhaustFanCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Exhaust Fan Installation & Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Bathroom and kitchen exhaust fan installation and repair in ${place} — better airflow, quieter operation, and venting that carries moisture outdoors. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/exhaust-fan-installation-repair/${loc.slug}` },
    openGraph: {
      title: `Exhaust Fan Installation & Repair in ${place} | ${site.name}`,
      description: `Licensed exhaust fan installation and repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function ExhaustFanLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = exhaustFanCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
