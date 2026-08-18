import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import NeighborhoodLinks from '@/components/NeighborhoodLinks';
import PageHero from '@/components/PageHero';
import PageSections from '@/components/PageSections';
import MainWithSidebar from '@/components/Sidebar';
import Accordion from '@/components/Accordion';
import { site } from '@/content/site';
import { locations } from '@/content/locations';
import { mastRepairCopy } from '@/content/location-copy/electrical-mast-repair';

export const metadata: Metadata = {
  title: 'Electrical Mast Repair',
  description: `Electrical service mast repair across ${site.serviceArea} from ${site.name} — licensed electricians repair and replace damaged service masts, risers, and entrance cables.`,
  alternates: { canonical: '/services/electrical-mast-repair' },
};

const signs = [
  { lead: 'Damaged or Leaning Mast', text: 'A mast that’s leaning or visibly bent could indicate structural damage that may compromise your electrical connection.' },
  { lead: 'Exposed or Frayed Wires', text: 'If you notice wires sticking out or their insulation wearing off, it’s time to call for repairs.' },
  { lead: 'Water Intrusion Near the Mast', text: 'Water stains or leaks near your mast may signal a failing seal, which can lead to corrosion or electrical issues.' },
  { lead: 'Power Interruptions', text: 'Frequent outages or flickering lights might point to a problem with your mast’s connection.' },
  { lead: 'Storm Damage', text: 'After a strong storm, check for fallen branches, dents, or other damage to your service mast.' },
];

const whyChoose = [
  'Licensed and experienced electricians',
  'Repairs and full mast replacements',
  'Quality, weather-rated materials',
  'Code-compliant installation',
  'A satisfaction guarantee on every job',
];

const whyUs = [
  { icon: 'shield' as const, title: 'Family-Owned & Operated', text: 'A local team that takes care of your home like its own.' },
  { icon: 'badge' as const, title: 'Experienced Electricians', text: 'Trained pros who handle service-entrance work safely.' },
  { icon: 'check' as const, title: 'Code-Compliant Work', text: 'Proper flashing, sealing, and grounding that meets code.' },
  { icon: 'house' as const, title: 'Satisfaction Guarantee', text: 'We’re not done until your power is safe and reliable.' },
];

const faqs = [
  { q: 'How do I know if I need an electrical mast repair?', a: 'A mast that has gone out of plumb, a weatherhead pulled away from the wall, cracked or brittle insulation on the conductors, rust streaks running down from the fittings, or a meter box no longer flat against the siding. One thing that is not a mast problem: the whole street being dark. That is a utility outage, and no electrician can shorten it.' },
  { q: 'Can storms damage my service mast?', a: 'Yes, and it is the most common reason we are called out. A limb landing on the service drop pulls on the mast rather than the pole, because the pole is not the weak point. High wind does the same thing gradually. What matters is the mast bending far enough to loosen the roof penetration or the drop attachment, because that is what lets water in and what stops Duke reconnecting.' },
  { q: 'What is an electrical pole connection, and why is it important?', a: 'It is where Duke’s overhead conductors end and your equipment begins. They own the line from the pole to that point, and they own the meter. The mast holding the connection up, the weatherhead on top of it, the riser, the entrance cable, and the meter box are all yours — which is why storm damage to them lands on your insurance rather than the utility’s.' },
  { q: 'What’s involved in replacing a service mast?', a: 'The utility has to drop the service first, so the work is scheduled around their visit rather than ours. Then the old mast, weatherhead, and damaged entrance cable come off, the new mast is set and properly flashed where it passes through the roof, new conductors are run down to the meter base, and the whole thing is inspected before Duke will reconnect. That sequence is why we file the permit when the job is booked rather than at the end.' },
  { q: 'What is a service entrance cable?', a: 'It is the run of conductors between the weatherhead and your meter base, and it belongs to you. It is also the part that fails quietly: once water gets past the weatherhead it travels down inside that cable into the meter box and the panel, corroding lugs where nobody looks. A cable with cracked or chalky insulation is a replacement rather than a repair.' },
  { q: 'Why is proper roof flashing important?', a: 'Because the mast goes straight through your roof, and that hole is only as good as the flashing around it. Done poorly it leaks into the framing above the ceiling, and it also lets water track down the outside of the conduit into the meter base. We flash the penetration properly as part of the repair rather than leaving it as a roofing problem for somebody else.' },
  { q: 'What is the role of an electrical meter riser?', a: 'The riser is the conduit carrying the service conductors down from the mast into the meter base. It also keeps water out of that run, which is why its flashing and fittings matter as much as the pipe itself.' },
  { q: 'How long does a service mast replacement take?', a: 'The electrical work is usually a single day. What sets the real timeline is the utility disconnect and reconnect visit at either end, and the inspection in between, because Duke will not re-energise before the sign-off. We book the inspection when we book the work, which is the single biggest thing that shortens the wait.' },
  { q: 'How often should I inspect my electrical mast?', a: 'There is no schedule worth following, but there is a habit: after any storm that brings limbs down, look up at where the wires meet the house. You are checking that the mast is still vertical, the weatherhead is tight against the wall, and the meter box is flat to the siding. That takes ten seconds from the driveway and catches most problems before they become an outage.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Electrical Mast Repair',
  description: 'Electrical service mast repair and replacement, including risers, meter sockets, and service entrance cables.',
  provider: { '@type': 'Organization', name: site.name, telephone: site.primaryPhone.number },
  areaServed: site.serviceArea,
};
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
    { '@type': 'ListItem', position: 3, name: 'Electrical', item: `${site.url}/services/electrical` },
    { '@type': 'ListItem', position: 4, name: 'Electrical Mast Repair', item: `${site.url}/services/electrical-mast-repair` },
  ],
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function ElectricalMastRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        eyebrow="Electrical"
        title={`Electrical Mast Repair in ${site.serviceArea}`}
        description="Licensed electricians repair and replace damaged service masts, risers, and entrance cables — restoring a safe, reliable connection to utility power."
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Electrical', href: '/services/electrical' },
          { label: 'Electrical Mast Repair' },
        ]}
      />

      <section className="bg-hero-pink">
        <div className="container-page flex flex-col items-center gap-4 py-7 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-extrabold uppercase leading-tight sm:text-2xl">
            Storm-damaged or leaning service mast?
          </h2>
          <a href={site.primaryPhone.href} className="flex flex-shrink-0 items-center gap-2 rounded-full bg-lime-500 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-pill transition hover:bg-lime-600">
            <Icon name="phone" className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </section>

      <section className="py-16">
        <MainWithSidebar>
          <div className="mb-7 aspect-[16/9] w-full rounded-2xl bg-brand-200 bg-cover bg-center" style={{ backgroundImage: 'url(/services/mast-hero.webp)' }} role="img" aria-label="Electrical service mast on a home exterior" />
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-brand-600 sm:text-4xl">
            Professional Electrical Mast Repair
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Your electrical service mast connects your home’s electrical system to the utility company’s
            power lines. When it’s damaged, your whole home’s power and safety are at risk.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            {site.name} provides electrical service mast repair and replacement across {site.serviceArea}.
            Whether you’re dealing with a damaged mast or need an upgrade, we’re here to make your home
            more efficient and dependable.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-ink/75">
            Because the mast ties directly into utility power, this is work for a licensed professional,
            not a DIY fix. We handle it safely, to code, and with a focus on getting your power back
            quickly.
          </p>
        </MainWithSidebar>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center" style={{ backgroundImage: 'url(/services/mast-signs.webp)' }} role="img" aria-label="Utility power line connection to a home" />
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Signs You Need Service Mast Repair
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              A service mast is built to endure harsh weather, but like any part of your home, it can wear
              out over time. Recognizing issues early helps prevent further damage and keeps your
              electricity flowing safely. Watch for these signs:
            </p>
            <ul className="mt-4 space-y-2">
              {signs.map((s) => (
                <li key={s.lead} className="flex gap-2.5 text-base leading-relaxed text-white/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                  <span><span className="font-bold text-white">{s.lead}:</span> {s.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white">
              Your Local &amp; Trusted Electrical Mast Service Pros
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hero-pink text-white">
        <div className="container-page grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div className="lg:order-1">
            <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
              Electrical Mast Repair Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90">
              We take pride in providing dependable electrical mast repair for families across{' '}
              {site.serviceArea}. With every repair, our goal is to keep your home’s power safe and
              consistent.
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/90">
              Our team is known for detail-oriented work, clear communication, and a customer-first
              approach. When you choose us, you gain peace of mind knowing your home’s electrical system is
              in good hands.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-white/15 bg-cover bg-center lg:order-2" style={{ backgroundImage: 'url(/services/faucet-expect.webp)' }} role="img" aria-label="Electrician reviewing mast repair work" />
        </div>
      </section>

      <section className="py-14">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Service Mast Replacement Services</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            When your service mast needs replacing, it’s not just about swapping out parts. It’s about
            creating a safe, efficient connection tailored to your home, with every detail handled with
            care.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Planning & Preparing for Your Replacement</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The first step is a detailed inspection of your home’s electrical system. We check components
            like the breaker box, meter socket, and service entrance cable to identify potential issues,
            which is what lets us plan a replacement around what your house actually has rather than a standard kit.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            During this stage, we also discuss upgrade options — including{' '}
            <Link href="/services/home-rewiring" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              home rewiring
            </Link>{' '}
            — so you get a solution that meets your family’s needs both now and in the future.
          </p>

          <h3 className="mt-8 font-display text-xl font-extrabold text-brand-700">Installation & Final Touches</h3>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Our installation process prioritizes safety and precision. We use high-quality materials and
            proven techniques to make sure your new mast is strong, secure, and built to last.
          </p>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            After installation, we complete a thorough{' '}
            <Link href="/services/electrical-inspections" className="font-semibold text-pink-600 hover:text-pink-700 hover:underline">
              electrical inspection
            </Link>{' '}
            to confirm everything is functioning properly — so your power keeps flowing smoothly for years
            to come.
          </p>

          <h2 className="mt-12 section-title text-brand-700">What Makes Up Your Service Mast</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            The service mast is more than a single pipe. It includes the meter riser that connects to the
            meter base, the service entrance cable that carries electricity into your home, and roof
            flashing that seals the system against water. When any of these parts fail, the whole
            connection is at risk — which is why we inspect and address them together.
          </p>

          <h2 className="mt-12 section-title text-brand-700">Why Choose {site.name} for Mast Repair</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            Homeowners across {site.serviceArea} choose {site.name} for safety, quality, and customer
            satisfaction. When you work with our team, you receive:
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {whyChoose.map((w) => (
              <li key={w} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink/75">
                <Icon name="check" className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-500" />
                {w}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whyUs.map((w) => (
              <div key={w.title} className="card flex gap-3.5">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-pink-500 text-white">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-brand-700">{w.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink/70">{w.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-12 section-title text-brand-700">Electrical Mast Repair FAQs</h2>
          <div className="mt-4">
            <Accordion items={faqs.map((f) => ({ title: f.q, body: <p className="text-[15px] leading-relaxed text-ink/75">{f.a}</p> }))} defaultOpen={0} />
          </div>

          <div className="mt-12 rounded-3xl bg-blue-section p-8 text-center text-white">
            <h2 className="text-2xl font-extrabold uppercase sm:text-3xl">Schedule Mast Repair or Replacement Today</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-brand-100">
              Noticing problems with your electrical mast? {site.name} repairs and replaces masts across{' '}
              {site.serviceArea}. Call now or request a free estimate.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.primaryPhone.href} className="btn-pink text-base">
                <Icon name="phone" className="h-5 w-5" />
                Call {site.primaryPhone.number}
              </a>
              <Link href="/free-estimate" className="btn-outline border-white text-white hover:bg-white/10">
                Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical mast repair by neighborhood — links DOWN to location pages */}
      <section className="pb-16">
        <div className="container-page max-w-4xl">
          <h2 className="section-title text-brand-700">Electrical mast repair by neighborhood</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-ink/75">
            We repair and replace service masts across {site.serviceArea} —{' '}
            {locations.filter((l) => mastRepairCopy[l.slug]).length} neighborhoods and counting.
            Find yours below for local detail on the homes and storm exposure in your area.
          </p>
          <NeighborhoodLinks copy={mastRepairCopy} basePath="/services/electrical-mast-repair" linkPrefix="Mast repair" />
        </div>
      </section>

      <PageSections />
    </>
  );
}
