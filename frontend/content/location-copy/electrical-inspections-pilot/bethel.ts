import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'In Bethel, a lot of our inspections are for landlords. Census figures show 51.7% of the village’s homes are rented, and over a third of units sit in buildings of three or more apartments, often older houses split up years ago. That is where we find shared panels, circuits nobody labeled and outlets added without grounds. About a quarter of homes date from before 1940, so single-family owners see the same issues on a smaller scale. You get a written report and a price before anything is fixed.',
  emergencyParagraph:
    'In a Bethel apartment or house, these jump the queue: a plate that’s hot or buzzing, scorch marks, a burning odor, sparks from a plug, a breaker that refuses to stay on. Flip that breaker off. Smoke or flame means everyone outside and 911. Tenants, tell the landlord too. Most calls get a technician the same day, weekends included.',
  commonIntro:
    'Between the converted houses and the small apartment buildings, these are the problems that fill our reports in Bethel.',
  localFaqs: [
    {
      q: 'What does an Ohio landlord in Bethel owe tenants on the wiring?',
      a: 'Bethel landlords fall under ORC 5321.04 (A)(4), which says electrical fixtures a landlord supplies are kept in good and safe working order. A unit-by-unit inspection gives you a punch list and a dated record of what was checked. We inspect wiring, not leases.',
    },
    {
      q: 'I rent in Bethel. Can I book an inspection myself?',
      a: 'Report the problem to your landlord or manager in writing first, with dates. They own the wiring, so they book the inspection and any repairs. If an outlet is hot or sparking, turn off its breaker and tell them the same day. Smoke or fire means 911.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Bethel rentals and homes',
    band1Heading: 'Common Electrical Problems We Find in Bethel Homes and Apartments',
    commonSituations: [
      'An old house divided into units with circuits that cross from one apartment into another',
      'Panels with blank or wrong labels, so nobody knows which breaker feeds what',
      'Three-prong outlets swapped in on wiring that has no ground behind them',
      'Space heaters and window units leaning on circuits that were never meant for them',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Check for a popped GFCI before calling. In converted Bethel houses one of them may sit in a different apartment’s bathroom or out by the back door and still control your outlets, so ask the landlord where they are. One breaker that trips, resets and stays put usually just had too much plugged in. We’re worth booking when a building still has fuses or two-prong outlets throughout, cords run under rugs as permanent wiring, or flicker shows up on several circuits. A landlord buying an older Bethel building, or a unit turning over, is a sensible time for a full check.',
      },
      {
        title: 'Inspection, Repair or Rewire in Bethel?',
        body: 'Our findings set the plan, and in Bethel those are often split by unit. A loose lug in apartment two, a breaker that won’t trip on test, or a kitchen counter without GFCI each gets its own repair line. A panel serving more units than it can handle, or one that has corroded, moves to replacement. If cloth or knob-and-tube runs through most of a converted house, we price a rewire beside the spot repairs so the owner can compare. The report is yours, and nobody has to hire us. Clermont County Building Inspection permits the work and sends its inspector to sign off.',
      },
    ],
    whyTitle: 'Why Bethel Landlords and Homeowners Call Us',
    whyParagraph:
      'Bethel has more renters than owners, so we write reports a landlord can work through unit by unit. Technicians are licensed, insured, background-checked and drug-tested, and the flat price is settled first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Bethel?',
        a: 'Bethel inspections carry a flat rate, named up front. It turns on the square footage, how many units the building holds, and why you want the report. A Sunday visit costs what a Tuesday one does, and the figure you sign off on is the figure on the bill.',
      },
      {
        q: 'What gets checked during an inspection?',
        a: 'The main panel and any sub-panels, each breaker or fuse, grounding and bonding, receptacles and their GFCI and AFCI protection, exposed wiring, and smoke alarm power. In a split-up house we also map which circuits serve which unit, since that is where surprises hide.',
      },
      {
        q: 'After the report, do I have to use you for the work?',
        a: 'No. Pass the report to any licensed electrician; you paid for it, it’s yours. If a buyer, lender or insurer asks for a written report, you’ll have one. If we do the repairs, each unit’s items are priced on their own so you can stage the work.',
      },
    ],
  },
};
