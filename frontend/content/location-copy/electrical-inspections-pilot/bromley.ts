import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bromley: LocationServiceCopy = {
  localParagraph:
    'Bromley is small, old and close to the river, and both facts drive most electrical inspections here. More than half its homes, 51.7% by Census figures, were built before 1940, so ungrounded outlets, fuse boxes and leftover cloth wiring turn up often. Nearly every home is a detached house, and many have basements that have taken on Ohio River water. After a flood or before a sale, we check the system from the meter base in and quote repairs before doing any.',
  emergencyParagraph:
    'Some things in a Bromley house can’t wait for a planned visit: a burning smell, a hot or scorched cover plate, buzzing, sparks, or a breaker that trips the second you reset it. Switch it off and keep it off. Smoke or flames mean get out, then call 911. We reach most calls the same day, weekends included.',
  commonIntro:
    'Most Bromley homes are pre-war houses on low ground by the river. The findings we see most:',
  localFaqs: [
    {
      q: 'Our Bromley basement flooded. Can we just flip the breakers back on?',
      a: 'No. Wiring, outlets or a panel that sat in floodwater can short or corrode later, even after drying. In April 2025 the mayor estimated 20 to 30 basements flooded in Bromley. Leave those circuits off, and we test and replace what got wet before the power comes back.',
    },
    {
      q: 'Who is responsible for the meter and the line to my Bromley house?',
      a: 'Duke Energy Kentucky supplies power in Bromley and owns the meter and the service drop. We work from the meter base inward: panel, breakers, wiring and outlets. If the inspection finds a problem on their side, we tell you so you can call them.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Bromley’s older river homes',
    band1Heading: 'Common Electrical Problems We Find in Bromley Homes',
    commonSituations: [
      'A basement panel and outlets that sat in river water and were never tested',
      'A pre-1940 house still on a fuse box with too few circuits for its appliances',
      'Three-prong outlets added over old two-wire runs with no ground',
      'Extension cords run along baseboards in place of new circuits',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'If power is out in just the bathroom, kitchen or basement, find the GFCI outlet that tripped and reset it; a single GFCI often protects outlets in other spots. A breaker that trips once and holds after resetting doesn’t need us. Neither does a bulb that burned out. Call us after any water reaches the panel, outlets or basement wiring, when you have a fuse box or two-prong outlets in every room, or when lights flicker on more than one circuit. Selling an older Bromley house is another good reason to have the system checked.',
      },
      {
        title: 'Inspection, Repair or Rewire in Bromley?',
        body: 'The inspection decides it, house by house. Loose connections, a breaker going bad or missing GFCI outlets are simple repairs. An overloaded fuse box or tiny panel gets replaced. Wiring that was submerged is replaced rather than trusted. If cloth or knob-and-tube wiring runs through most of the walls, we price a rewire beside spot repairs so the choice is clear. Our check is a safety inspection that ends in a written report; permitted work also needs an official inspection, and we pull the permit and arrange it. Whoever does the repairs is your call.',
      },
    ],
    whyTitle: 'Why Bromley Homeowners Call Us',
    whyParagraph:
      'Three in four Bromley homes are owner-occupied, and many families have dealt with river water more than once. Our electricians are licensed, insured, background-checked and drug-tested, and quote before they work.',
    sharedFaqs: [
      {
        q: 'What would a Bromley electrical inspection run?',
        a: 'It’s a flat rate, set before we start by the size of the house and what you need the inspection for. A check after flooding is aimed at the basement and panel; a pre-sale check covers more ground. Repair work gets its own quote.',
      },
      {
        q: 'What’s on the inspection list?',
        a: 'Your panel or fuse box, the breakers or fuses, grounding and bonding, outlets and switches, GFCI and AFCI protection, visible wiring in the basement and attic, and power to the smoke alarms. We write up every finding for you.',
      },
      {
        q: 'Do the repairs have to be done by you?',
        a: 'No. The report is yours, and any licensed electrician can quote from it. If you’d rather we handle it, every repair is priced flat and approved by you first, with financing for bigger jobs and no overtime fees.',
      },
    ],
  },
};
