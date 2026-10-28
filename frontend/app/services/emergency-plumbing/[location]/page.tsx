import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { emergencyPlumbingCopy } from '@/content/location-copy/emergency-plumbing';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'emergency-plumbing',
  serviceName: 'Emergency Plumbing',
  eyebrow: 'Plumbing',
  hubLabel: 'Emergency Plumbing',
  businessType: 'Plumber',
  schemaServiceType: 'Emergency Plumbing',
  ctaLine: 'Plumbing emergency in {neighborhood}? Call for immediate service',
  heroImage: '/services/emergency-hero.webp',
  introHeading: 'Plumbing Emergencies We Fix Fast in {neighborhood}',
  introParagraphs: [
    'When a plumbing emergency strikes in {neighborhood}, every minute counts, and problems rarely happen on a convenient schedule. That is why {brand} takes emergency calls across {place} every day of the week, with licensed plumbers who handle each situation with speed and precision.',
    'A burst pipe or sewer backup can cause thousands of dollars in damage in just a few hours, so getting help quickly is key to minimizing loss. Our team arrives fast, assesses the problem, and completes the repair efficiently — protecting your home and delivering long-lasting results.',
  ],
  sidebarSections: [
    {
      title: 'Emergencies We Fix Fast',
      body: [
        'We handle burst pipes and water line breaks, leaking or overflowing water heaters, sewer line backups and clogged drains, sudden toilet or faucet failures, and emergency installations and general repairs.',
        'Whatever the situation, a licensed plumber reaches most {neighborhood} homes the same day — often within hours of your call.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'leak-repair', title: 'Leak Repair' },
    { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement' },
    { slug: 'water-heater-repair', title: 'Water Heater Repair' },
    { slug: 'drain-cleaning', title: 'Drain Cleaning' },
  ],
  band1Image: '/services/emergency-situations.webp',
  band1Heading: 'Most Common Emergencies in {neighborhood} Homes',
  commonSituations: [
    'Burst or leaking pipes that can quickly flood your home',
    'Sewer backups pushing wastewater into sinks, tubs, or floor drains',
    'Overflowing toilets that will not stop running or flushing',
    'No water or a sudden loss of water pressure throughout the home',
    'Water heater leaks or a complete loss of hot water',
    'Major drain clogs causing repeated backups in multiple fixtures',
    'Failed sump pumps during heavy rain',
  ],
  trustedBanner: 'Your Local & Trusted Emergency Plumbers in {neighborhood}',
  band2Image: '/services/emergency-expect.webp',
  band2Heading: 'What to Expect When We Arrive in {neighborhood}',
  band2Paragraphs: [
    'When you call for emergency plumbing service, the priority is to respond quickly and limit damage to your home. A licensed plumber arrives promptly, assesses the situation, and takes immediate steps to stop active leaks, backups, or flooding.',
    'After identifying the cause, the plumber explains the recommended repair and the flat-rate price before any work begins — you approve it first. We restore safety and basic function right away, then complete the permanent repair as efficiently as possible and clean up before we leave.',
  ],
  proseSections: [
    { title: 'Emergency Plumbing Services in {neighborhood}', body: 'Plumbing emergencies call for fast action, and our team is always ready to help {neighborhood} homeowners. Whether you are facing a water leak, a blocked pipe, or a sewer-line issue, we deliver professional solutions and focus on restoring your home as quickly as possible, approaching every emergency with genuine care.' },
    { title: 'Burst Pipes and Our Process', body: 'A burst pipe can release hundreds of gallons of water a day, so a fast response prevents structural damage, electrical hazards, and mold growth. We respond immediately, shut off the water supply to stop the damage, repair or replace the damaged piping, and confirm your {neighborhood} system is fully operational before we leave.' },
    { title: 'A Plumber Open Every Day in {neighborhood}', body: 'Plumbing disasters do not wait for business hours, which is why we are available every day, Sundays included. As the plumber in {place} who picks up on weekends too, we respond promptly to minimize damage and restore comfort, arriving with the tools, expertise, and dedication to fix the issue quickly.' },
    { title: 'Same-Day Service to Get Your Home Back in Shape', body: 'From a leaky faucet to the emergency installation of a new water heater, we provide same-day service whenever possible for {neighborhood} homes. Every job is completed with care and an emphasis on durability, so your plumbing keeps working reliably long after the emergency is over.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyParagraph: 'Licensed, background-checked plumbers reach most {neighborhood} homes the same day, any day of the week. We repair what caused the problem so it doesn’t come back, and the flat-rate price has no overtime or weekend fees.',
  proofQuote:
    'Called on a Sunday evening with water coming up the basement drain. They walked me through shutting off the water, showed up fast, and had it cleared the same evening. No overtime charge for the weekend either.',
  sharedFaqs: [
    { q: 'What is a plumbing emergency?', a: 'Any situation that threatens your home, health, or safety due to water or sewer issues — burst pipes, overflowing water heaters, sewer backups, and major leaks all qualify. If water is spreading and you cannot stop it, call us.' },
    { q: 'What should I do before the plumber arrives?', a: 'Shut off the main water supply to limit flooding, avoid using the affected fixtures, and clear the area so we can work. Then call us and we will talk you through the rest.' },
    { q: 'Do you charge extra for evenings or weekends?', a: 'No. Our flat-rate pricing is the same any day of the week, with no overtime surcharges.' },
  ],
  related: [
    { label: 'Emergency Plumbing (overview)', href: '/services/emergency-plumbing' },
    { label: 'Leak Repair', href: '/services/leak-repair' },
    { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
    { label: 'Water Heater Repair', href: '/services/water-heater-repair' },
    { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => emergencyPlumbingCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Emergency Plumber in ${loc.neighborhood}, ${loc.state}`,
    description: `Emergency plumber in ${place}, open every day including weekends. Burst pipes, sewer backups, and water heater failures — same-day service. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/emergency-plumbing/${loc.slug}` },
    openGraph: {
      title: `Emergency Plumbing in ${place} | ${site.name}`,
      description: `Licensed emergency plumbers, out any day of the week, serving ${place} and nearby neighborhoods.`,
    },
  };
}

export default async function EmergencyPlumbingLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = emergencyPlumbingCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
