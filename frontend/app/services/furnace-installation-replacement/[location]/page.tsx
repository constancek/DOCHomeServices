import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { furnaceInstallationCopy } from '@/content/location-copy/furnace-installation-replacement';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'furnace-installation-replacement',
  serviceName: 'Furnace Installation & Replacement',
  eyebrow: 'Heating',
  hubLabel: 'Furnace Installation & Replacement',
  parentCrumb: { label: 'Heating', href: '/services/heating' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Furnace Installation & Replacement',
  ctaLine: 'Need a new furnace in {neighborhood}? Get a free estimate',
  heroImage: '/services/furnace-installation-replacement.jpg',
  introHeading: 'Furnace Installation & Replacement in {neighborhood}',
  introParagraphs: [
    'When a furnace is past saving, a properly sized replacement is the difference between a warm winter and another season of breakdowns. {brand} installs and replaces gas and electric furnaces for homeowners in {place} — sized to the home, installed to code, with financing and same-day installs available.',
    'Whether you are planning an upgrade or facing a no-heat emergency in a {neighborhood} cold snap, we help you choose the right system and get it running fast.',
  ],
  sidebarSections: [
    {
      title: 'Gas & Electric Furnace Installation',
      body: [
        'Natural gas furnaces are popular across {neighborhood} for their efficiency and power, and we handle the install safely — including all gas lines and connections. For homes without natural gas, an electric furnace is durable, easy to maintain, and effective at keeping the house warm.',
        'Either way, we load-size the system to your home rather than matching whatever was there before, so it heats evenly without wasting energy.',
      ],
    },
    {
      title: 'Advantages of a New Furnace',
      body: [
        'A modern furnace brings better indoor air quality with advanced filtration, lower monthly bills from efficient technology, consistent heating across every room, quieter operation than older models, and improved safety features you can rely on.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'furnace-repair', title: 'Furnace Repair' },
    { slug: 'furnace-maintenance', title: 'Furnace Maintenance' },
    { slug: 'heat-pumps', title: 'Heat Pumps' },
    { slug: 'indoor-air-quality', title: 'Indoor Air Quality' },
  ],
  band1Image: '/services/furnace-repair.jpg',
  band1Heading: 'Signs It’s Time to Replace Your {neighborhood} Furnace',
  commonSituations: [
    'Frequent breakdowns or rising repair costs',
    'Uneven heating throughout your home',
    'Higher energy bills despite regular maintenance',
    'A furnace that is 15–20 years old',
    'Strange noises or poor indoor air quality',
  ],
  trustedBanner: 'Your Local & Trusted Furnace Installation Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect From Your Furnace Installation in {neighborhood}',
  band2Paragraphs: [
    'We start with a free in-home estimate. A technician sizes the system to your home’s layout and heating load, recommends the right gas or electric furnace, and explains your options and pricing before you decide.',
    'On installation day, we safely remove the old unit, install the new furnace with proper gas, electrical, and venting connections, test airflow and operation, then clean up and walk you through how it runs.',
  ],
  proseSections: [
    { title: 'Gas vs. Electric Furnaces', body: 'Gas furnaces heat quickly and cost less to run where natural gas is available, which covers most of {neighborhood}. Electric furnaces suit homes without a gas line — they are durable and simple to maintain. We help you weigh fuel availability, efficiency, and budget, and we also lay out heat-pump options when they make sense.' },
    { title: 'Repair or Replace?', body: 'Most furnaces last about 15–20 years. If yours is in that range, breaking down often, or driving up energy bills despite maintenance, replacement is usually the better long-term value. For a newer unit with an isolated problem, we will tell you honestly when a repair makes more sense.' },
    { title: 'Furnace Installation Cost & Financing', body: 'Cost depends on the furnace type and efficiency, your home’s size, and any ductwork, venting, or fuel-line work. {brand} provides a free estimate up front and offers financing with low rates and fast approval, so an unexpected replacement does not have to be a crisis.' },
    { title: 'Emergency Furnace Replacement in {neighborhood}', body: 'When a furnace fails during a cold snap, waiting days for heat is not an option. Our team offers same-day installation whenever possible to get a new, reliable system running and your {neighborhood} home warm again fast.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Choose Us',
  whyUs: [
    { icon: 'check', title: 'Proper Sizing', text: 'We load-size every install so your furnace heats evenly without wasting energy.' },
    { icon: 'shield', title: 'Licensed & To Code', text: 'Background-checked technicians and safe, code-compliant gas and electrical work.' },
    { icon: 'star', title: 'Financing Available', text: 'Low rates and fast approval so an unexpected replacement is not a crisis.' },
    { icon: 'clock', title: 'Same-Day Installs', text: 'Furnace failed in a cold snap? We can install and test a new unit fast.' },
  ],
  proofQuote:
    'Our 20-year-old furnace quit in January. They came out same day, sized and installed a new high-efficiency gas unit, and had the house warm again by evening.',
  sharedFaqs: [
    { q: 'What does a professional furnace installation include?', a: 'We size the system to your home, safely remove the old unit, install the new furnace with proper gas, electrical, and venting connections, test airflow and operation, then clean up and walk you through how it runs.' },
    { q: 'How long does a new furnace installation take?', a: 'A standard replacement usually takes about 4–8 hours. It can take longer if we are adding ductwork, switching fuel types, or correcting older work.' },
    { q: 'Do you offer financing for furnace installation?', a: 'Yes — we offer financing with low rates and fast approval, so you can get a reliable system now and spread the payments over time.' },
    { q: 'Can I schedule emergency furnace installation during winter?', a: 'Absolutely. When a furnace fails during a cold snap, our team offers same-day installation to restore heat without delay.' },
    { q: 'How far in advance should I book a furnace install?', a: 'For a planned upgrade, a few days is usually plenty. For a no-heat emergency, we handle installs the same day whenever possible.' },
  ],
  related: [
    { label: 'Furnace Installation & Replacement (overview)', href: '/services/furnace-installation-replacement' },
    { label: 'Furnace Repair', href: '/services/furnace-repair' },
    { label: 'Furnace Maintenance', href: '/services/furnace-maintenance' },
    { label: 'Heat Pumps', href: '/services/heat-pumps' },
    { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => furnaceInstallationCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Furnace Installation & Replacement in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Furnace installation and replacement in ${place} — gas and electric, properly sized and to code, with financing and same-day installs. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/furnace-installation-replacement/${loc.slug}` },
    openGraph: {
      title: `Furnace Installation & Replacement in ${place} | ${site.name}`,
      description: `Properly sized, to-code furnace installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function FurnaceInstallationLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = furnaceInstallationCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
