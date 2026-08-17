import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { gasServiceDisconnectionCopy } from '@/content/location-copy/gas-service-disconnection';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'gas-service-disconnection',
  serviceName: 'Gas Service Disconnection',
  eyebrow: 'Plumbing',
  hubLabel: 'Gas Service Disconnection',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Gas Service Restoration After Disconnection',
  ctaLine: 'Gas off in {neighborhood} and no hot water?',
  heroImage: '/services/gas-disconnection-hero.webp',
  introHeading: 'Gas Service Disconnection in {neighborhood}',
  introParagraphs: [
    'Your utility will not restore gas until the fault on your side of the meter is repaired by a licensed plumber and the house piping proves it holds pressure. That is the whole answer, and nobody at the utility can waive it.',
    'The split is simple once someone explains it. They own the service line from the street main to the meter, and the meter itself. Everything downstream — the piping through the basement, the run to the furnace, the connector behind the range — belongs to you. When gas is shut off it is almost always because something on your side was found to be wrong, and your side is the part they are not permitted to touch.',
    '{brand} finds the fault, repairs it, pressure-tests the system, gets it inspected where a permit applies, and relights every appliance once gas is back. We handle the scheduling too, so you are not project-managing a utility with no hot water in the house.',
  ],
  sidebarSections: [
    {
      title: 'What a Pressure Test Actually Is',
      body: [
        'Your house piping is isolated from the meter, brought up to pressure, and watched on a gauge to confirm it holds. If the needle drops there is a leak, and it gets chased until it does not.',
        'It is the single most common thing standing between a shut-off house in {neighborhood} and gas being restored, and it is why a house can be repaired and still not have gas the same afternoon.',
      ],
    },
    {
      title: 'Do Not Relight It Yourself',
      body: [
        'If the meter has been locked, leave it. Tampering with utility metering equipment is a criminal offence in both Ohio and Kentucky, and restoring gas to a system that was shut off for a leak means putting gas into a house you are standing in.',
        'Relighting also is not just turning a valve. Pilots, burners and combustion need checking on every appliance, which is part of our job rather than a second visit you pay for.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'gas-line-repair-replacement', title: 'Gas Line Repair & Replacement' },
    { slug: 'water-heater-installation', title: 'Water Heater Installation' },
    { slug: 'leak-detection', title: 'Leak Detection' },
    { slug: 'plumbing-repair', title: 'Plumbing Repair' },
  ],
  band1Image: '/services/gas-disconnection-meter.webp',
  band1Heading: 'Why Gas Gets Shut Off in {neighborhood}',
  commonSituations: [
    'A leak found at the meter or on house-side piping',
    'A red tag on a furnace, water heater or an unsafe connector',
    'Piping that will not hold a pressure test',
    'A property that has stood vacant and needs testing before restoration',
    'Failed inspection, or piping that was never permitted',
    'Physical damage — a vehicle into the meter, or a line struck during work',
  ],
  trustedBanner: 'Licensed Gas Plumbers Serving {neighborhood}',
  band2Image: '/services/gas-disconnection-gauge.webp',
  band2Heading: 'How We Get Your Gas Restored',
  band2Paragraphs: [
    'We start at the meter and work through the system — joints, connectors, valves and appliances — to find why it came off. Sometimes it is a single failed flex connector behind a range. Sometimes it is a corroded run under the floor that has to be replaced.',
    'Then the repair, the pressure test, and the inspection where a permit applies. Once the utility restores gas at the meter we relight every appliance, confirm the furnace and water heater fire and run correctly, and show you where your shutoff valve is before we leave.',
  ],
  proseSections: [
    {
      title: 'If You Can Smell Gas, Get Out First',
      body: 'Leave on foot. Do not touch light switches, unplug anything, or use your phone until you are outside. Then call 911 and your utility. Gas can remain in piping after the meter is closed, so a smell with the service already off means something is still wrong. The utility makes the property safe; we come afterwards to find and repair whatever failed.',
    },
    {
      title: 'A Vacant House Needs Testing, Not Just Switching On',
      body: 'Piping that has sat unused, particularly in an older {neighborhood} home, has a habit of failing a test the first time anyone checks it. Utilities will not restore service to a property that has been off for an extended period without confirmation the system still holds pressure. It is a formality when the piping is sound and a rescue when it is not — and it is the single most common surprise for someone buying a house that has been empty.',
    },
    {
      title: 'Flooded Gas Appliances Are Replaced, Not Relit',
      body: 'If a furnace, water heater or boiler has been under water, the gas control valve and the burner controls are replaced rather than dried out and relit. Water damages those components in ways that are not visible, and manufacturers are unambiguous about it. Anyone offering to dry out a submerged gas appliance and put it back into service is taking a risk with your house, not saving you money.',
    },
    {
      title: 'Permits and the Inspection',
      body: 'Most repairs to gas piping need a permit and an inspection, and we pull it as part of the job. Emergency work can usually begin before the paperwork is filed — most local authorities allow the permit to follow on the next business day — but it still has to be filed and signed off, because the utility will be looking for that before restoring service. Skipping it does not speed anything up.',
    },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'clock', title: 'We Move Fast on These', text: 'No gas means no hot water and, in winter, no heat. It gets treated that way.' },
    { icon: 'shield', title: 'Licensed Gas Plumbers', text: 'Only a licensed trade can do the repair the utility is waiting on.' },
    { icon: 'badge', title: 'We Deal With the Utility', text: 'We handle the test, the paperwork and the reconnect scheduling so you are not on hold.' },
    { icon: 'check', title: 'Relight Included', text: 'Every appliance relit and checked before we leave, not billed as a second trip.' },
  ],
  proofQuote:
    'They found the leak in an afternoon, passed the test the same day, and had the furnace and water heater lit before they left. The utility had told us nothing except that they could not touch it.',
  sharedFaqs: [
    { q: 'How do I get my gas turned back on?', a: 'The fault that caused the shutoff has to be found and repaired by a licensed plumber, the house piping has to hold a pressure test, and where the work was permitted an inspector has to sign it off. Only then will the utility restore service. We do all of that and schedule the reconnect for you.' },
    { q: 'Why will they not just turn it back on?', a: 'Because they stop at the meter. The utility owns the service line from the main to the meter and the meter itself. Everything past it is yours. They will not put gas into piping they do not own and cannot vouch for.' },
    { q: 'Can I turn the valve back on myself?', a: 'No. If the meter is locked, breaking that lock is both illegal and dangerous. If the gas came off because of a leak, restoring it yourself puts gas into a system that is known to be leaking, in a house you are standing in.' },
    { q: 'The gas is already off and I can still smell it. What do I do?', a: 'Leave on foot. Do not flip switches, unplug anything or use your phone until you are outside. Call 911 and your utility from there. Gas can remain in piping after the meter is closed, and a smell with the service already off means something is still wrong.' },
    { q: 'Will the utility relight my furnace and water heater?', a: 'Usually not. They restore gas at the meter and leave. Relighting pilots, checking burners, and confirming the furnace and water heater run safely is our work, and it is part of the job rather than a second trip you pay for.' },
    { q: 'What does it cost?', a: 'It depends on what is being repaired and what happens afterwards, so we quote it flat-rate in writing before anything starts. Your utility may also charge its own fee for a reconnect visit, and we separate those on the estimate so you can see which is which.' },
  ],
  related: [
    { label: 'Gas Service Disconnection (overview)', href: '/services/gas-service-disconnection' },
    { label: 'Gas Line Repair & Replacement', href: '/services/gas-line-repair-replacement' },
    { label: 'Water Heater Installation', href: '/services/water-heater-installation' },
    { label: 'Leak Detection', href: '/services/leak-detection' },
    { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => gasServiceDisconnectionCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Gas Service Disconnection in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Gas shut off in ${place}? It will not be restored until the fault is repaired and the piping passes a pressure test. Licensed gas plumbers, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/gas-service-disconnection/${loc.slug}` },
    openGraph: {
      title: `Gas Service Disconnection in ${place} | ${site.name}`,
      description: `Leak repair, pressure testing and relighting so gas can be restored in ${place} and nearby areas.`,
    },
  };
}

export default async function GasServiceDisconnectionLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = gasServiceDisconnectionCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
