import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { acMaintenanceCopy } from '@/content/location-copy/ac-maintenance';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'ac-maintenance',
  serviceName: 'AC Maintenance',
  eyebrow: 'Air Conditioning',
  hubLabel: 'AC Maintenance',
  parentCrumb: { label: 'Air Conditioning', href: '/services/air-conditioning' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'AC Maintenance',
  ctaLine: 'Ready for an AC tune-up in {neighborhood}? Call to schedule',
  heroImage: '/services/ac-maintenance.jpg',
  introHeading: 'AC Maintenance in {neighborhood}',
  introParagraphs: [
    'A yearly tune-up is the cheapest way to keep an air conditioner efficient, reliable, and out of breakdown territory. {brand} provides AC maintenance for homeowners in {place} — cleaning, inspection, and testing that keeps your cooling system ready for summer.',
    'Our HVAC technicians catch the small problems that quietly drive up bills and lead to mid-July failures, with upfront flat-rate pricing and maintenance plans available.',
  ],
  sidebarSections: [
    {
      title: 'What Our AC Tune-Up Includes',
      body: [
        'A maintenance visit in your {neighborhood} home covers the whole system: we inspect the air conditioner and its major components, check and replace the air filter if needed, inspect the condenser and evaporator coils, test electrical connections and controls, and review refrigerant levels and overall operation.',
        'Most visits take about an hour, and we explain anything we find before it becomes a repair.',
      ],
    },
    {
      title: 'How Maintenance Protects Your System',
      body: [
        'Regular service keeps key components clean and free of buildup, helps moving parts operate as designed, reduces strain on the system, and catches small issues before they grow — which supports reliable cooling through the whole season.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'ac-repair', title: 'AC Repair' },
    { slug: 'ac-installation-replacement', title: 'AC Installation & Replacement' },
    { slug: 'mini-splits', title: 'Ductless Mini-Splits' },
    { slug: 'indoor-air-quality', title: 'Indoor Air Quality' },
  ],
  band1Image: '/services/ac-repair.jpg',
  band1Heading: 'Signs Your {neighborhood} AC Is Due for a Tune-Up',
  commonSituations: [
    'Weak airflow coming from the vents',
    'Rooms cooling unevenly or taking longer to cool',
    'Higher energy bills without increased usage',
    'The system running longer than usual on warm days',
    'New or unusual noises during operation',
  ],
  trustedBanner: 'Your Local & Trusted AC Maintenance Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.jpg',
  band2Heading: 'What to Expect From Your AC Tune-Up in {neighborhood}',
  band2Paragraphs: [
    'A technician arrives, runs a multi-point inspection, and cleans the parts of the system that collect buildup over a {neighborhood} summer — coils, the filter, and the condenser. We test electrical connections, controls, and refrigerant levels to confirm everything is operating as it should.',
    'If we find a small issue, we explain it and the flat-rate price before doing anything, so a tune-up never turns into a surprise. You get a clean, tested system ready for the heat.',
  ],
  proseSections: [
    { title: 'Why Annual AC Maintenance Matters', body: 'Humid {neighborhood} summers make an air conditioner work hard, and a neglected system loses efficiency, runs longer, and is far more likely to quit on the hottest day. An annual tune-up keeps performance up, energy use down, and extends the life of the equipment.' },
    { title: 'Long-Term Benefits', body: 'Over time, regular maintenance improves airflow through clean coils and filters, helps the system reach set temperatures faster, supports consistent efficiency, reduces stress on electrical and mechanical parts, and keeps your cooling system operating as intended.' },
    { title: 'Maintenance Plans', body: 'For {neighborhood} homeowners who would rather not track service dates, we offer maintenance plans that schedule your tune-ups and keep the system documented — which also helps with manufacturer warranty requirements.' },
    { title: 'Schedule Before Summer in {neighborhood}', body: 'The best time for an AC tune-up is spring, before the cooling season starts. Booking ahead means your system is ready when the first heat wave hits and you are not waiting in line behind emergency calls.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Choose Us',
  whyUs: [
    { icon: 'badge', title: 'Thorough Inspections', text: 'Detailed multi-point tune-ups that catch small issues before they become repairs.' },
    { icon: 'clock', title: 'Pre-Season Ready', text: 'Spring tune-ups get your system prepared before the summer heat arrives.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Experienced HVAC technicians and clear communication every visit.' },
    { icon: 'check', title: 'Upfront Flat-Rate Pricing', text: 'Affordable, transparent pricing and maintenance plans available.' },
  ],
  proofQuote:
    'Signed up for the spring tune-up and they caught a weak capacitor before it failed. The AC ran all summer without a hiccup and our bills were lower.',
  sharedFaqs: [
    { q: 'How long does an AC maintenance appointment take?', a: 'Most AC maintenance visits take about one hour, depending on system condition and accessibility.' },
    { q: 'Is AC maintenance necessary if my system is working fine?', a: 'Yes. Routine maintenance helps improve performance, protect energy efficiency, and extend the system’s life.' },
    { q: 'What happens if I skip AC maintenance?', a: 'Skipping maintenance can lead to reduced performance, higher energy use, and an increased risk of breakdowns.' },
    { q: 'How often should air conditioners be serviced?', a: 'Most systems benefit from annual maintenance, especially before the cooling season.' },
    { q: 'Can AC maintenance improve indoor air quality?', a: 'Yes. Maintenance includes checking airflow and air filters, which can help reduce dust buildup and improve indoor air quality.' },
    { q: 'Is AC maintenance required to keep my warranty valid?', a: 'Many manufacturers require regular professional maintenance to maintain warranty coverage. An annual tune-up helps document proper system care.' },
  ],
  related: [
    { label: 'AC Maintenance (overview)', href: '/services/ac-maintenance' },
    { label: 'AC Repair', href: '/services/ac-repair' },
    { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
    { label: 'Ductless Mini-Splits', href: '/services/mini-splits' },
    { label: 'Indoor Air Quality', href: '/services/indoor-air-quality' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => acMaintenanceCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `AC Maintenance in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `AC tune-ups and maintenance in ${place} — cleaning, inspection, and testing to keep cooling efficient and reliable all summer. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/ac-maintenance/${loc.slug}` },
    openGraph: {
      title: `AC Maintenance in ${place} | ${site.name}`,
      description: `AC tune-ups and maintenance serving ${place} and nearby areas.`,
    },
  };
}

export default async function AcMaintenanceLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = acMaintenanceCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
