import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wetherington: LocationServiceCopy = {
  localParagraph:
    'Most Wetherington homes don’t need an electrical inspection just for age. The neighborhood was built from the early 1990s on, and Census figures put the median home at 1998, so wiring is modern and grounded. Owners book us when something changes: a sale, a purchase, a finished lower level, a generator, a pool or a car charger. Most homes heat with gas, which leaves more panel room than in electric-heat areas, but a big new load still deserves a check. Findings come in writing, priced first.',
  emergencyParagraph:
    'New wiring can still fail at a bad connection. In Wetherington, a hot or discolored outlet, a buzzing switch, a smell of burning, sparks, or a breaker that trips again the second it’s reset all mean switching that breaker off and calling us. Smoke or fire: leave, then 911. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Newer houses still produce a short list, and in Wetherington these items show up most.',
  localFaqs: [
    {
      q: 'We’re adding a generator or charger to our Wetherington home. Who signs it off?',
      a: 'The Butler County Building & Zoning Department issues the permit, and its inspector checks the finished work. Before that, our inspection tells you whether the panel has the room and spaces for the new circuit, so you aren’t surprised by an upgrade halfway through the job.',
    },
    {
      q: 'Our Wetherington buyer’s inspector found nothing. Do we still need you?',
      a: 'Probably not. If the home inspection had no electrical notes and nothing is acting up, skip us. Call if the inspector flagged an item you want explained or priced, or if the buyer, lender or insurer asks for a written report from an electrical company.',
    },
    {
      q: 'We lease our Wetherington house to a tenant. What does Ohio require?',
      a: 'Under ORC 5321.04 (A)(4), an Ohio landlord keeps the electrical fixtures they supply in good and safe working order. Your tenant reports problems to you in writing, and you book the visit. We inspect wiring, not leases, and send the report to whoever books.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Wetherington homes',
    band1Heading: 'Common Electrical Problems We Find in Wetherington Homes',
    commonSituations: [
      'Basement finishes or bar areas wired after the house was built, with no permit on file',
      'Outdoor and garage GFCI outlets from the 1990s that no longer trip on test',
      'A panel close to full once a pool, hot tub or car charger joins the original load',
      'Generator hookups added without a proper transfer switch',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'If you’re in a Wetherington house with no symptoms and no plans, you don’t need us. A dead outlet usually traces back to a tripped GFCI in the garage, a bathroom, the kitchen or outdoors; press reset. One breaker that trips and then holds is normal. Book an inspection when lights flicker across several circuits, an extension cord has become a fixture, or a previous owner did electrical work you can’t vouch for. It also makes sense before adding a pool, a generator or a car charger, and when you buy or sell.',
      },
      {
        title: 'Inspection, Repair or Rewire in Wetherington?',
        body: 'Rewiring isn’t a real question in houses this young, so the report splits findings two ways. Repairs come first: a failed GFCI, a lug that has worked loose, an unpermitted basement circuit brought up to standard. Then capacity, where a panel upgrade may be needed before a pool, generator or charger joins the load. Each item gets its own price, and none of it has to be done by us. You keep the report and choose what happens and when. For anything that needs a permit, we pull it and set up the county inspection.',
      },
    ],
    whyTitle: 'Why Wetherington Homeowners Call Us',
    whyParagraph:
      'Nearly every Wetherington home is owner-occupied, and owners want a plain answer about whether anything needs doing. Our technicians are licensed, insured, background-checked and drug-tested, and the flat price is agreed first.',
    sharedFaqs: [
      {
        q: 'What does a Wetherington electrical inspection cost?',
        a: 'We quote a flat rate before we start. It reflects the size of the house and what the inspection is for, like a sale or planning a generator. You approve it first, there are no overtime fees, and financing is available if repairs follow.',
      },
      {
        q: 'What’s covered in the inspection?',
        a: 'Panel, breakers, grounding and bonding, every outlet we can reach with its GFCI and AFCI protection, visible wiring, and smoke alarm power. Duke Energy owns the meter and service drop, so our work starts at the meter base and runs through the house.',
      },
      {
        q: 'Am I obliged to use you for repairs?',
        a: 'Not at all. The written report is yours to share with any licensed electrician. If a buyer, lender or insurer asks for a written report, you’ll have one. If you choose us, you get a flat price per item and pick what gets done.',
      },
    ],
  },
};
