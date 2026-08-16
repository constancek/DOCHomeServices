import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { miniSplitInstallationCopy } from '@/content/location-copy/mini-split-installation';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'mini-split-installation',
  serviceName: 'Mini-Split Installation',
  eyebrow: 'Air Conditioning · Mini-Splits',
  hubLabel: 'Mini-Split Installation',
  parentCrumb: { label: 'Mini-Splits', href: '/services/mini-splits' },
  businessType: 'HVACBusiness',
  schemaServiceType: 'Mini-Split Installation',
  ctaLine: 'Want a mini-split installed in {neighborhood}? Call for a free estimate',
  heroImage: '/services/minisplit-install-hero.webp',
  introHeading: 'Ductless Mini-Split Installation in {neighborhood}',
  introParagraphs: [
    'A ductless mini-split brings flexible cooling and heating to the rooms a central system never reaches — and it goes in without ductwork. {brand} installs mini-splits for homeowners in {place}, sizing the system and placing each indoor head where the comfort is actually needed.',
    'Because a clean, properly sized install is what makes a mini-split efficient and quiet, our trained technicians handle the sizing, refrigerant, and electrical to code — with upfront flat-rate pricing, financing, and free estimates.',
  ],
  sidebarSections: [
    {
      title: 'What Drives the Cost',
      body: [
        'Every {neighborhood} home is different, so we quote a flat rate after a quick look. The price depends on the number of indoor heads, whether it is single- or multi-zone, the size of the space, the efficiency rating you choose, and any electrical or mounting work.',
        'You get clear recommendations and an upfront estimate before the install begins — no surprises.',
      ],
    },
    {
      title: 'A Clean, Tidy Install',
      body: [
        'A mini-split only needs a small line-set opening — roughly three inches — between the indoor head and the outdoor unit. No tearing into {neighborhood} walls and ceilings for ductwork, which is why it suits older and finished spaces so well.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'mini-splits', title: 'Mini-Splits (overview)' },
    { slug: 'mini-split-repair', title: 'Mini-Split Repair' },
    { slug: 'ac-installation-replacement', title: 'AC Installation & Replacement' },
    { slug: 'heat-pumps', title: 'Heat Pumps' },
  ],
  band1Image: '/services/mini-split-installation.webp',
  band1Heading: 'Signs It’s Time for a Mini-Split in Your {neighborhood} Home',
  commonSituations: [
    'An addition, attic, or finished basement the main system cannot reach',
    'An older home with no existing ductwork',
    'Rooms that never cool or heat evenly',
    'Higher bills from extending central air to a far room',
    'A garage, sunroom, or office that needs its own comfort',
    'An aging mini-split that no longer keeps up',
    'A desire for quiet, zoned, energy-efficient comfort',
  ],
  trustedBanner: 'Your Local & Trusted Mini-Split Installers in {neighborhood}',
  band2Image: '/services/minisplit-install-hero.webp',
  band2Heading: 'Our Mini-Split Installation Process in {neighborhood}',
  band2Paragraphs: [
    'We start with a review of your home and comfort goals, then recommend the right system size and where each indoor head should go — and explain the flat-rate price before any work begins.',
    'We mount the indoor and outdoor units, make the refrigerant and electrical connections through a small wall opening, and test the system to confirm proper operation before we leave your {neighborhood} home.',
  ],
  proseSections: [
    { title: 'Why Professional Installation Matters', body: 'A mini-split is only as good as its install. Incorrect sizing, low refrigerant, or sloppy electrical work cuts efficiency and shortens the system’s life. We handle the sizing, charge, and connections correctly so your {neighborhood} system runs efficiently, keeps its manufacturer warranty intact, and delivers steady comfort from day one.' },
    { title: 'Built for Additions and Older {neighborhood} Homes', body: 'Mini-splits shine in additions, remodeled rooms, finished basements, garages, and the older homes across {neighborhood} that were never built with ductwork. Because they need no ducts, they install without major structural changes, and each indoor head goes exactly where the comfort is needed.' },
    { title: 'Efficiency and Zoned Control', body: 'A mini-split conditions the rooms you actually use instead of the whole house, and inverter-driven compressors adjust output to demand rather than cycling hard. For a {neighborhood} home with hot and cold spots, independent zone control means each space holds its temperature without overworking the system or wasting energy.' },
    { title: 'Financing and Free Estimates in {neighborhood}', body: 'A ductless system is an investment in comfort, and it does not have to wait on budget. We offer flexible financing and free estimates, so a {neighborhood} homeowner can move forward with the right system on a payment plan that fits.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'check', title: 'Right-Sized Zones', text: 'We size the system and indoor heads to your home so it performs efficiently.' },
    { icon: 'badge', title: 'Clean, Tidy Install', text: 'A small line-set penetration — no tearing into walls for ductwork.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked technicians and code-compliant, tested installs.' },
    { icon: 'star', title: 'Financing Available', text: 'Flexible plans so an efficient upgrade fits your budget.' },
  ],
  proofQuote:
    'They installed a single-zone mini-split in our converted attic office. Sized it right, kept the line set tidy, and tested everything before leaving. The room finally stays comfortable year-round and the unit is almost silent.',
  sharedFaqs: [
    { q: 'How long does a ductless mini-split installation take?', a: 'A single-zone installation often takes a few hours to most of a day. Multi-zone systems with several indoor heads take longer — we will give you a clear time estimate up front.' },
    { q: 'What is a good SEER rating for a mini-split system?', a: 'Many quality mini-splits land in the 18–22+ SEER range, and higher numbers mean greater efficiency and lower bills. We help you balance efficiency against budget when choosing a system.' },
    { q: 'Does a ductless mini-split installation require major home changes?', a: 'No. A mini-split only needs a small (roughly three-inch) hole for the line set that connects the indoor and outdoor units, so it is far less invasive than adding or extending ductwork.' },
    { q: 'What are the signs I need a new ductless mini-split system?', a: 'Rooms that no longer cool or heat evenly, weak airflow, rising energy bills, ongoing comfort issues, and an aging system that no longer meets your needs are all signs it may be time for a new system.' },
    { q: 'Are ductless mini-split systems quiet?', a: 'Very. The indoor heads run quietly — far quieter than a window unit — which makes them a great fit for bedrooms, offices, and living spaces.' },
  ],
  related: [
    { label: 'Mini-Split Installation (overview)', href: '/services/mini-split-installation' },
    { label: 'Mini-Splits', href: '/services/mini-splits' },
    { label: 'Mini-Split Repair', href: '/services/mini-split-repair' },
    { label: 'AC Installation & Replacement', href: '/services/ac-installation-replacement' },
    { label: 'Heat Pumps', href: '/services/heat-pumps' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => miniSplitInstallationCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Mini-Split Installation in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Ductless mini-split installation in ${place} — efficient, properly sized, zoned cooling and heating without ductwork. Financing available. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/mini-split-installation/${loc.slug}` },
    openGraph: {
      title: `Mini-Split Installation in ${place} | ${site.name}`,
      description: `Ductless mini-split installation serving ${place} and nearby areas.`,
    },
  };
}

export default async function MiniSplitInstallationLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = miniSplitInstallationCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
