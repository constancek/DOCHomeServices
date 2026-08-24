import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationServicePage, { type ServiceLocationConfig } from '@/components/LocationServicePage';
import { getLocation, getNearby, locations } from '@/content/locations';
import { sewerBackupRepairCopy } from '@/content/location-copy/sewer-backup-repair';
import { site } from '@/content/site';

const config: ServiceLocationConfig = {
  slug: 'sewer-backup-repair',
  serviceName: 'Sewer Backup Repair',
  eyebrow: 'Plumbing',
  hubLabel: 'Sewer Backup Repair',
  parentCrumb: { label: 'Plumbing', href: '/services/plumbing' },
  businessType: 'Plumber',
  schemaServiceType: 'Sewer Backup Repair',
  ctaLine: 'Sewage backing up in {neighborhood}? Stop using water and call now',
  heroImage: '/services/sewer-backup-hero.webp',
  introHeading: 'Sewer Backup Repair in {neighborhood}',
  introParagraphs: [
    'A sewer backup is the one plumbing failure where the first move is to stop using water entirely. Everything you send down the drain while the line is blocked comes back into the house, and the damage scales with how long that goes on. Turn it off, then call {brand}.',
    'We put a camera down the line before quoting anything. Roots, grease, silt from a flood, a bellied section, and a fully collapsed pipe all produce the same symptom in a {place} basement and need five different repairs. Guessing at which one you have is how people end up paying to snake the same pipe three times in a year.',
  ],
  sidebarSections: [
    {
      title: 'What the Job Covers',
      body: [
        'Camera inspection of the lateral from the cleanout, mechanical clearing or hydro jetting of the blockage, and permanent repair of the failed section where the pipe itself is the problem — lining where the pipe is sound, excavation and replacement where it is not.',
        'We tell you which side of the property line the fault sits on before you spend money on it, because in {neighborhood} that is sometimes the difference between your bill and the sewer district’s.',
      ],
    },
    {
      title: 'Documented Before and After',
      body: [
        'You see the camera footage of the cause, not a description of it. We photograph what we find and record the line after the repair, so you have the record if you are making a claim or handing it to a buyer later.',
      ],
    },
  ],
  relatedCards: [
    { slug: 'sewer-repair-replacement', title: 'Sewer Repair & Replacement' },
    { slug: 'drain-cleaning', title: 'Drain Cleaning' },
    { slug: 'emergency-water-extraction', title: 'Emergency Water Extraction' },
    { slug: 'after-flood-plumbing', title: 'After Flood Plumbing' },
  ],
  band1Image: '/services/sewer-backup-signs.webp',
  band1Heading: 'Signs of a Sewer Backup in Your {neighborhood} Home',
  commonSituations: [
    'Waste or dirty water coming up through a floor drain, tub, or shower',
    'More than one fixture draining slowly at the same time',
    'A toilet that gurgles when the washing machine drains',
    'Sewage smell in the basement or around the yard cleanout',
    'Water backing up somewhere else when you flush',
    'A patch of lawn over the sewer line that is unusually wet or green',
    'Repeated blockages in the same line every few months',
  ],
  trustedBanner: 'Your Local & Trusted Sewer Backup Team in {neighborhood}',
  band2Image: '/services/sewer-backup-hero.webp',
  band2Heading: 'What to Expect From Sewer Backup Repair in {neighborhood}',
  band2Paragraphs: [
    'We start at the cleanout with a camera so you can see what is actually in the line — roots, grease, silt, a sagging section, or a break. Then we clear it, mechanically or with a jetter depending on what is in there, and camera it again to confirm the pipe behind the blockage is sound.',
    'If the pipe itself failed, you get a written flat-rate price for the repair before any ground is opened. Where the line is structurally intact we can often line it rather than dig it, and we will say so rather than sell you an excavation you do not need.',
  ],
  proseSections: [
    { title: 'What Causes Backups in {neighborhood}', body: 'Tree roots are the single most common cause we find in older Cincinnati neighborhoods — they find the smallest joint gap and grow into the line. After that it is grease that has narrowed the pipe over years, silt and debris pushed in by a flood, a bellied section that has settled into a low spot and holds solids, and clay or cast iron that has cracked or collapsed with age. The repair is completely different in each case, which is why the camera goes down first.' },
    { title: 'When You Do Not Need Us', body: 'If one fixture is slow and everything else in the house drains normally, that is a local clog, not a sewer backup. A plunger or a hand auger on that trap will very often finish it, and you should try that before paying anyone. And if the backup started at the same time as heavy rain across the whole street, call your sewer district first — when the municipal main is surcharged, the problem is not on your property and there is nothing on your side worth paying to repair.' },
    { title: 'Why Snaking Alone Keeps Failing', body: 'Cabling cuts a channel through the blockage without removing what caused it. If roots, a grease layer, or a sagging section of pipe is the real problem, the line closes back up on the same schedule it did before. Homeowners in {neighborhood} who have paid to snake the same line two or three times are usually paying for a diagnosis nobody ever made.' },
    { title: 'Same-Day Response Across {neighborhood}', body: 'Sewage in the house is a health issue rather than an inconvenience, so we treat an active backup as an emergency and reach most {neighborhood} homes the same day. Stop running water before we get there — no toilets, sinks, laundry, or dishwasher. Every gallon you send down adds to what comes up.' },
  ],
  whyTitle: 'Why {neighborhood} Homeowners Call Us',
  whyUs: [
    { icon: 'clock', title: 'Same-Day Response', text: 'Sewage in the house is a health issue, not an inconvenience. We reach most homes the same day.' },
    { icon: 'check', title: 'Camera Diagnosis First', text: 'We look at the line before quoting. You see the actual cause on screen rather than taking our word for it.' },
    { icon: 'shield', title: 'Licensed & Insured', text: 'Background-checked plumbers, permits pulled where the code requires them.' },
    { icon: 'badge', title: 'Upfront Flat-Rate Pricing', text: 'You approve the price before we start, with no overtime or weekend surcharge.' },
  ],
  proofQuote:
    'Waste came up through the basement floor drain on a Saturday. They had a camera down the line that afternoon, showed us the roots on screen, and cleared it — then told us straight which part of the pipe actually needed replacing and which part did not.',
  sharedFaqs: [
    { q: 'What should I do right now if sewage is backing up?', a: 'Stop running water anywhere in the house — no toilets, sinks, laundry, or dishwasher. Every gallon you send down adds to what comes up. Keep people and pets out of the affected area, since sewage backup is contaminated water, and call us. If it is actively rising and you can safely reach your main shutoff, close it.' },
    { q: 'Is a sewer backup covered by insurance?', a: 'Usually only if you carry a sewer or water backup endorsement, which is a separate add-on that many standard homeowners policies do not include by default. It is worth checking your policy now rather than during a backup. We document what we find and photograph the cause so you have the record for a claim.' },
    { q: 'Why does snaking the line only fix it for a few weeks?', a: 'Because cabling cuts a channel through the blockage without removing what caused it. If roots, a grease layer, or a sagging section of pipe is the real problem, the line closes back up on the same schedule it did before. That is why we camera the line — so you can decide based on what is actually in there.' },
    { q: 'Do you have to dig up my yard?', a: 'Not always. Where the pipe is structurally sound we can often clear and line it without a full excavation. Where a section has collapsed or the line has separated, there is no way around replacing that section. We tell you which situation you are in after the camera inspection, not before.' },
    { q: 'How much does sewer backup repair cost?', a: 'It ranges enormously — clearing a root blockage is a different job from replacing a collapsed section under a driveway. We will not quote a number over the phone and then change it at the house. You get a written flat-rate price after we have seen the line, and you approve it before any work starts.' },
    { q: 'Can I clean up the sewage myself?', a: 'For a small amount on a hard, sealed floor, with gloves, boots, and a disinfectant, some people do. What we would not recommend handling yourself is sewage that soaked into carpet, drywall, or subfloor. That is contaminated porous material, and it needs removal rather than cleaning.' },
  ],
  related: [
    { label: 'Sewer Backup Repair (overview)', href: '/services/sewer-backup-repair' },
    { label: 'Sewer Repair & Replacement', href: '/services/sewer-repair-replacement' },
    { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
    { label: 'Emergency Water Extraction', href: '/services/emergency-water-extraction' },
    { label: 'After Flood Plumbing', href: '/services/after-flood-plumbing' },
  ],
};

export function generateStaticParams() {
  return locations.filter((l) => sewerBackupRepairCopy[l.slug]).map((l) => ({ location: l.slug }));
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
    title: `Sewer Backup Repair in ${loc.neighborhood}, ${loc.state} | ${site.name}`,
    description: `Camera-diagnosed sewer backup clearing and permanent line repair in ${place}. Same-day response, upfront pricing. Call ${site.primaryPhone.number}.`,
    alternates: { canonical: `/services/sewer-backup-repair/${loc.slug}` },
    openGraph: {
      title: `Sewer Backup Repair in ${place} | ${site.name}`,
      description: `Same-day sewer backup repair serving ${place} and nearby areas.`,
    },
  };
}

export default async function SewerBackupRepairLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocation(location);
  if (!loc) notFound();
  const copy = sewerBackupRepairCopy[loc.slug];
  if (!copy) notFound();
  const nearby = getNearby(loc);

  return <LocationServicePage config={config} loc={loc} copy={copy} nearby={nearby} />;
}
