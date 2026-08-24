import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { sewerRepairCopy } from '@/content/location-copy/sewer-repair-replacement';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'sewer-repair-replacement',
  serviceName: 'Sewer Repair & Replacement',
  eyebrow: 'Plumbing',
  hubLabel: 'Sewer Repair & Replacement',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Sewer Line Repair & Replacement',
  ctaLine: 'Sewer backup in {neighborhood}? Call for same-day service',
  heroImage: '/services/sewer-repair-replacement.webp',
  introHeading: 'Sewer Repair & Replacement in {neighborhood}',
  introParagraphs: [
    'When the main sewer line fails, every drain in the house stops working — and the mess does not wait. {brand} provides sewer line repair, trenchless replacement, and camera inspection for homeowners in {place}, fixing the problem at the source.',
    'Our licensed plumbers start with a camera inspection to see exactly what is happening underground, then repair the section or replace the line, with upfront flat-rate pricing and same-day, emergency service when a line backs up.',
  ],
  sidebarSections: [
    {
      title: 'Common Sewer Line Problems We Fix',
      body: [
        'The sewer troubles we see most in {neighborhood} homes include tree-root intrusion that breaks into the line, clogs from grease and debris, corrosion in old metal pipe, shifting soil that cracks or misaligns the line, bellied (sunken) sections that collect standing water, and lines that have collapsed entirely.',
        'A camera inspection tells us which of these it is, so the fix matches the actual problem instead of a guess.',
      ],
    },
    {
      title: 'Trenchless Sewer Replacement',
      body: [
        'Where the line allows, we replace it with trenchless methods — repairing or relining the pipe with minimal digging instead of trenching across your whole yard. That protects your {neighborhood} home’s landscaping, driveway, and walkways and gets the job done faster.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'drain-cleaning', title: 'Drain Cleaning' },
    { slug: 'drains', title: 'Drain Services' },
    { slug: 'leak-detection', title: 'Leak Detection' },
    { slug: 'emergency-plumbing', title: 'Emergency Plumbing' },
  ],
  band1Image: '/services/drain-cleaning.webp',
  band1Heading: 'Signs Your {neighborhood} Sewer Line Needs Attention',
  commonSituations: [
    'Slow drains across several fixtures at once',
    'Frequent backups in toilets or sinks',
    'Foul sewage odors indoors or in the yard',
    'Soggy or unusually green spots in the yard',
    'Gurgling sounds from drains or toilets',
    'A sudden spike in your water bill',
  ],
  trustedBanner: 'Your Local & Trusted Sewer Line Pros in {neighborhood}',
  band2Image: '/services/faucet-expect.webp',
  band2Heading: 'What to Expect From Your Sewer Service in {neighborhood}',
  band2Paragraphs: [
    'We start with a full camera inspection to see what is happening underground — blockages, cracks, roots — for the complete picture. If there is a clog, we clear it, then walk you through the findings and explain whether a spot repair or full line work is the right call.',
    'Depending on the pipe’s condition, we patch the affected section or replace the line (trenchless where possible), then re-inspect with the camera to confirm it is clean and flowing before we clean up and leave.',
  ],
  proseSections: [
    { title: 'Repair or Replace Your Sewer Line?', body: 'Isolated damage — a single break or a root-clogged section — usually calls for a targeted repair. Widespread corrosion, repeated collapses, or an old clay or cast-iron line failing in multiple places calls for replacement. After the camera inspection we lay out both options honestly so you can decide what makes sense for your {neighborhood} home.' },
    { title: 'What Causes Sewer Line Failure', body: 'Age and corrosion, tree-root intrusion, shifting or settling soil, ground pressure, and bellied sections of pipe are the usual culprits. Older {neighborhood} homes with original clay or cast-iron laterals are especially prone to root intrusion and corrosion-related breaks.' },
    { title: 'Sewer Line Life Expectancy', body: 'It depends on the material: clay lines often last 50–60 years, cast iron 75–100, and modern PVC can last 100 or more. If your home still has its original older line, a camera inspection is the best way to know where it stands before a backup forces the issue.' },
    { title: 'Emergency Sewer Service in {neighborhood}', body: 'A main-line backup pushing sewage into your home cannot wait. Our team responds fast and reaches most {neighborhood} homes the same day to clear the blockage, assess the line, and make the repair.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'badge', title: 'Camera-Diagnosed', text: 'We inspect the line first so the fix matches the actual problem.' },
    { icon: 'check', title: 'Trenchless Available', text: 'We replace lines without tearing up your yard whenever possible.' },
    { icon: 'shield', title: 'Licensed & To Code', text: 'Background-checked plumbers and installations that meet local code.' },
    { icon: 'clock', title: 'Same-Day & Emergency', text: 'We respond fast when a main line backs up — no overtime or weekend fees.' },
  ],
  proofQuote:
    'Sewage started backing up into the basement floor drain. They camera-scoped the line, found roots in the old clay lateral, and relined it trenchless without digging up the yard.',
  sharedFaqs: [
    { q: 'How do I know if my main sewer line is clogged?', a: 'The tell-tale sign is several fixtures backing up at once — a toilet that gurgles when the washer drains, water at a basement floor drain, or multiple slow drains. Those point to the main line, not a single fixture.' },
    { q: 'Can tree roots damage my sewer line?', a: 'Yes — it is one of the most common causes of sewer trouble. Roots are drawn to the moisture in the line and work into joints and small cracks, causing blockages and eventually breaks. A camera inspection confirms it.' },
    { q: 'What is the life expectancy of a sewer line?', a: 'It depends on the material: clay lines often last 50–60 years, cast iron 75–100, and modern PVC can last 100 or more. If your home still has an original older line, it is worth a camera inspection.' },
    { q: 'What causes sewer lines to crack or break?', a: 'Age and corrosion, tree-root intrusion, shifting or settling soil, ground pressure, and bellied (sunken) sections of pipe are the usual culprits.' },
    { q: 'Can I get financing for my sewer line repair or replacement?', a: 'Yes. Sewer work is a bigger investment, so we offer financing with a quick application and flexible terms — your home does not have to wait for a repair it needs now.' },
  ],
  related: [
    { label: 'Sewer Repair & Replacement (overview)', href: '/services/sewer-repair-replacement' },
    { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
    { label: 'Drain Services', href: '/services/drains' },
    { label: 'Leak Detection', href: '/services/leak-detection' },
    { label: 'Emergency Plumbing', href: '/services/emergency-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => sewerRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Sewer Repair & Replacement in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Sewer line repair, trenchless replacement, and camera inspection in ${place}. Backups, roots, and broken lines fixed at the source. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/sewer-repair-replacement/${loc.slug}` },
    openGraph: {
      title: `Sewer Repair & Replacement in ${place} | ${site.name}`,
      description: `Licensed sewer line repair and trenchless replacement serving ${place} and nearby areas.`,
    },
  };
}

export default async function SewerRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = sewerRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
