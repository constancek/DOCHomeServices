import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { furnaceMaintenanceCopy } from '@/content/location-copy/furnace-maintenance';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'furnace-maintenance',
  serviceName: 'Furnace Maintenance',
  eyebrow: 'Heating',
  hubLabel: 'Furnace Maintenance',
  parentCrumb: { label: 'Heating', href: '/services/heating' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Furnace Maintenance',
  ctaLine: 'Ready for a furnace tune-up in {neighborhood}? Call to schedule',
  heroImage: '/services/furnace-maintenance.jpg',
  introHeading: 'Furnace Maintenance in {neighborhood}',
  introParagraphs: [
    'A fall tune-up is the cheapest insurance against a no-heat night in January. {brand} provides furnace maintenance for homeowners in {place} — safety checks, cleaning, and filter service for gas and electric furnaces.',
    'Our technicians catch the small problems that cause mid-winter breakdowns and check for the safety hazards an aging furnace can hide, with upfront flat-rate pricing and maintenance plans available.',
  ],
  sidebarSections: [
    {
      title: 'What Our Furnace Tune-Up Includes',
      body: [
        'A visit in your {neighborhood} home covers the whole system: we check and replace the air filter, inspect the blower motor and fan, test the thermostat and controls, examine electrical connections and safety controls, and inspect the combustion chamber, burners, and heat exchanger for cracks or wear.',
        'Most tune-ups take about an hour, and we explain anything we find before it becomes a repair.',
      ],
    },
    {
      title: 'Benefits of Regular Maintenance',
      body: [
        'Routine service means fewer unexpected breakdowns, better energy efficiency and lower bills, a longer furnace service life, improved indoor air quality from clean filters and components, safer operation, and consistent, reliable warmth all winter.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'furnace-repair', title: 'Furnace Repair' },
    { slug: 'furnace-installation-replacement', title: 'Furnace Installation & Replacement' },
    { slug: 'heat-pumps', title: 'Heat Pumps' },
    { slug: 'indoor-air-quality', title: 'Indoor Air Quality' },
  ],
  band1Image: '/services/furnace-repair.jpg',
  band1Heading: 'Signs Your {neighborhood} Furnace Needs a Tune-Up',
  commonSituations: [
    'Rising energy bills without increased usage',
    'Uneven heating or cold spots throughout your home',
    'Unusual noises such as rattling, banging, or squealing',
    'Weak airflow from the vents',
    'The furnace cycling on and off frequently',
    'Burning or dusty odors when the system is running',
    'The system has not been serviced in over a year',
  ],
  trustedBanner: 'Your Local & Trusted Furnace Maintenance Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect From Your Furnace Tune-Up in {neighborhood}',
  band2Paragraphs: [
    'A technician runs a multi-point inspection, cleans the components that collect buildup, and replaces the filter. We test the thermostat, controls, and startup, and check electrical connections so the system runs efficiently and safely.',
    'Crucially, we inspect the combustion chamber, burners, and heat exchanger for cracks — the checks that catch carbon-monoxide risks in {neighborhood}’s older gas furnaces. If we find an issue, we explain it and the price before doing anything.',
  ],
  proseSections: [
    { title: 'Why Fall Furnace Maintenance Matters', body: 'Booking a tune-up in the fall, before {neighborhood} winter sets in, means your furnace is clean, safe, and tested when you first turn it on — not failing on the coldest night. A maintained system also runs more efficiently through a long Ohio River Valley heating season, which keeps bills down.' },
    { title: 'The Safety Check That Matters Most', body: 'Older gas furnaces, common in {neighborhood}’s established homes, can develop cracked heat exchangers that leak carbon monoxide. Our tune-up includes inspecting the heat exchanger, burners, and combustion chamber and verifying safe operation — the part of maintenance that protects your family, not just your comfort.' },
    { title: 'Common Problems We Catch Early', body: 'The issues we head off most often are dirty or clogged filters, worn blower motors, cracked heat exchangers, ignition or pilot-light failures, and inconsistent heating. Catching these during a tune-up is far cheaper than an emergency repair in the middle of winter.' },
    { title: 'Maintenance Plans & Simple Upkeep', body: 'Between visits, replace your filter every 1–3 months, keep vents and registers clear, listen for unusual noises, and make sure the thermostat is reading right. For {neighborhood} homeowners who would rather not track it, our maintenance plans schedule the tune-ups and document the service for warranty purposes.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Choose Us',
  whyUs: [
    { icon: 'badge', title: 'Thorough Tune-Ups', text: 'Detailed multi-point inspections that catch small issues before they become repairs.' },
    { icon: 'check', title: 'Gas & Electric', text: 'We maintain both gas and electric furnaces with the right care for each.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians and a real safety check every visit.' },
    { icon: 'clock', title: 'Upfront Flat-Rate Pricing', text: 'Affordable, transparent pricing and maintenance plans available.' },
  ],
  proofQuote:
    'The fall tune-up turned up a hairline crack starting in the heat exchanger. They caught it before it became a carbon-monoxide problem and we sorted it out safely before winter.',
  sharedFaqs: [
    { q: 'What does furnace maintenance include?', a: 'A full tune-up covers a filter check and replacement, blower and fan inspection, thermostat and controls testing, an electrical and safety-control check, and an inspection of the combustion chamber, burners, and heat exchanger.' },
    { q: 'How often should I schedule furnace maintenance?', a: 'Once a year — ideally in the fall, before heating season — keeps your system efficient and catches problems before the cold sets in.' },
    { q: 'What is the cost of furnace maintenance service?', a: 'Maintenance is modest and far cheaper than an emergency repair or early replacement. We provide upfront, flat-rate pricing and affordable plans to keep your system running reliably year after year.' },
    { q: 'What is the difference between furnace maintenance and repair?', a: 'Maintenance is preventive — it keeps the furnace running efficiently and catches small issues early. Repair fixes something that has already failed. Regular maintenance is what reduces how often you need repairs.' },
    { q: 'How long does a furnace tune-up take?', a: 'A standard tune-up usually takes about an hour, depending on the system and what we find during the inspection.' },
    { q: 'How often should I change a furnace filter?', a: 'Every 1–3 months for a standard 1-inch filter — more often with pets or heavy use. Thicker media filters can last several months.' },
  ],
  related: [
    { label: 'Furnace Maintenance (overview)', href: '/services/furnace-maintenance' },
    { label: 'Furnace Repair', href: '/services/furnace-repair' },
    { label: 'Furnace Installation & Replacement', href: '/services/furnace-installation-replacement' },
    { label: 'Heat Pumps', href: '/services/heat-pumps' },
    { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => furnaceMaintenanceCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Furnace Maintenance in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Furnace tune-ups and maintenance in ${place} — safety checks, cleaning, and filter service for gas and electric furnaces. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/furnace-maintenance/${loc.slug}` },
    openGraph: {
      title: `Furnace Maintenance in ${place} | ${site.name}`,
      description: `Furnace tune-ups and safety checks serving ${place} and nearby areas.`,
    },
  };
}

export default async function FurnaceMaintenanceLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = furnaceMaintenanceCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
