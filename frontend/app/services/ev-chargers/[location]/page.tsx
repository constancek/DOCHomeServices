import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { evChargersCopy } from '@/content/location-copy/ev-chargers';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'ev-chargers',
  serviceName: 'EV Charger Installation',
  eyebrow: 'Electrical',
  hubLabel: 'EV Charger Installation',
  parentCrumb: { label: 'Electrical', href: '/services/electrical' },
  businessType: 'Electrician',
  schemaServiceType: 'EV Charger Installation',
  ctaLine: 'Ready to charge your EV at home in {neighborhood}? Call for a free estimate',
  heroImage: '/services/ev-hero.webp',
  introHeading: 'Home EV Charger Installation in {neighborhood}',
  introParagraphs: [
    'A home EV charging station puts charging on your schedule — plug in overnight and start each day with a full battery, no detours to a public station. {brand} installs Level 2 home EV chargers for homeowners in {place}, with a proper panel evaluation and code-compliant wiring.',
    'A charger adds real load to your electrical system, so it needs the right circuit, proper grounding, and a panel that can handle the demand. Our licensed electricians size it correctly and finish clean, with upfront pricing and financing available.',
  ],
  sidebarSections: [
    {
      title: 'What the Install Includes',
      body: [
        'For {neighborhood} homes we assess your panel’s capacity, run a load calculation, help you pick the right Level 2 charger for your vehicle and mileage, install on a dedicated 240-volt circuit, and test it — indoors or on an outdoor-rated, weather-protected mount.',
        'If your panel needs more capacity first, we will tell you straight and handle the upgrade.',
      ],
    },
    {
      title: 'Does Your Panel Have Room?',
      body: [
        'A Level 2 charger pulls hard, and many older {neighborhood} homes run panels that are already near capacity. We check before we install so a new charger does not trip breakers or overload the service — no surprises.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'electrical-panel-replacement', title: 'Panel Replacement' },
    { slug: 'switches-outlets', title: 'Switches & Outlets' },
    { slug: 'home-rewiring', title: 'Home Rewiring' },
    { slug: 'electrical-inspections', title: 'Electrical Inspections' },
  ],
  band1Image: '/services/ev-benefits.webp',
  band1Heading: 'Why {neighborhood} Drivers Add a Home Charger',
  commonSituations: [
    'Tired of detouring to public charging stations',
    'Want a full battery every morning',
    'Slow Level 1 charging can’t keep up with daily driving',
    'A second EV joining the household',
    'High public-charging costs versus off-peak home rates',
    'A new EV purchase that needs a proper home circuit',
    'A garage or driveway ready for a dedicated charger',
  ],
  trustedBanner: 'Your Local & Trusted EV Charger Installers in {neighborhood}',
  band2Image: '/services/ev-hero.webp',
  band2Heading: 'Our EV Charger Installation Process in {neighborhood}',
  band2Paragraphs: [
    'We start with a panel assessment and a load calculation to confirm your {neighborhood} home can safely support a Level 2 charger alongside the HVAC and other big appliances — then explain the charger options and flat-rate price before any work begins.',
    'We install the charger on a dedicated 240-volt circuit, ground it to code, weatherproof it if it is mounted outside, and test it to confirm consistent, safe charging before we leave.',
  ],
  proseSections: [
    { title: 'Level 1 vs. Level 2 for a {neighborhood} Home', body: 'A Level 1 cord plugs into a standard 120-volt outlet and adds only a few miles per hour — fine for very light driving, slow for everyone else. A Level 2 charger runs on a dedicated 240-volt circuit and charges several times faster, which is why most {neighborhood} drivers choose it. We size and install the 240-volt circuit it needs.' },
    { title: 'Will Your Panel Support It?', body: 'A Level 2 charger is one of the biggest loads in a home, and a lot of older {neighborhood} panels are already close to full. If breakers trip often, the panel is dated, or there is no open space, an upgrade may be needed first. We run the numbers and tell you honestly before installing — no tripped breakers or overloaded service after the fact.' },
    { title: 'Indoor or Outdoor, Done to Code', body: 'Whether your charger goes in the garage or on an exterior wall by the driveway, we mount it securely, run the circuit cleanly, and weatherproof outdoor installs. Every charger in {neighborhood} is grounded and wired to current electrical code and tested before we hand it over.' },
    { title: 'Cost, Financing, and Home Value', body: 'Install cost depends on the charger, the wiring distance, and whether the panel needs work — we give a {neighborhood} homeowner clear pricing up front and offer financing. A home charging station also reads as a real plus to future buyers as more drivers go electric.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'shield', title: 'Licensed Electricians', text: 'Pros with EV charger experience who size the circuit correctly.' },
    { icon: 'check', title: 'Code-Compliant Work', text: 'Every charger is installed to meet current electrical code.' },
    { icon: 'badge', title: 'Clear Pricing & Financing', text: 'Upfront cost explanations and financing options before work begins.' },
    { icon: 'house', title: 'Honest Panel Advice', text: 'Straight answers on whether your panel needs an upgrade.' },
  ],
  proofQuote:
    'Bought an EV and needed a Level 2 charger in the garage. They checked the panel, found we had room, and installed it on a dedicated circuit in an afternoon. Clean wiring, fair price, and the car charges overnight now.',
  sharedFaqs: [
    { q: 'Do I need a professional electrician to install an EV charger?', a: 'Yes. Installing a Level 2 EV charger requires proper circuit sizing and panel evaluation. A licensed electrician makes sure the installation meets safety standards.' },
    { q: 'How long does it take to install a home EV charging station?', a: 'Most installations take several hours. If panel upgrades are required, the project may take longer — we explain the timeline before we begin.' },
    { q: 'Do I need a special electrical system for an EV charger?', a: 'Your home needs sufficient capacity to support electric vehicle charging. We evaluate your electric panel before installation so there are no surprises.' },
    { q: 'Can I install an EV charger outside?', a: 'Yes. Many charging units are rated for outdoor installation. Proper mounting and weather protection are essential, and we handle both.' },
    { q: `Does ${site.name} offer financing options?`, a: `Yes. We offer financing options to help make EV charger installation more affordable for homeowners across ${site.serviceArea}.` },
  ],
  related: [
    { label: 'EV Charger Installation (overview)', href: '/services/ev-chargers' },
    { label: 'Electrical Panel Replacement', href: '/services/electrical-panel-replacement' },
    { label: 'Switches & Outlets', href: '/services/switches-outlets' },
    { label: 'Home Rewiring', href: '/services/home-rewiring' },
    { label: 'Electrical Inspections', href: '/services/electrical-inspections' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => evChargersCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `EV Charger Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Home Level 2 EV charger installation in ${place} — panel evaluation and code-compliant wiring by licensed electricians. Financing available. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/ev-chargers/${loc.slug}` },
    openGraph: {
      title: `EV Charger Installation in ${place} | ${site.name}`,
      description: `Licensed home EV charger installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function EvChargersLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = evChargersCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
