import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'Northside inspections tend to fall into two kinds of house. Census figures put 57.3% of homes here at 1939 or earlier, and in those we look for cloth-covered wire, ungrounded outlets and fuse boxes that were never swapped out. Another 32.6% went up between 1940 and 1979, where the usual problem is a panel and a handful of circuits sized for a house with far less plugged in. We check every part of the system, hand you the findings on paper and quote any fix first.',
  emergencyParagraph:
    'In Northside, a burning odor, a discolored outlet, a spark when something plugs in, or lights dimming hard as an appliance starts means phoning us right away, not booking ahead. Flip that circuit’s breaker off. If smoke appears or anything catches, leave and phone 911. We’re there the same day on most calls, weekends included.',
  commonIntro:
    'More than half the homes in Northside are single houses, many owned by the people living in them. Here is what our inspections uncover most:',
  localFaqs: [
    {
      q: 'Water got into my Northside basement. Should the electrical be inspected?',
      a: 'Yes, if water reached the panel, outlets or any wiring. Don’t switch circuits back on that were under water; leave the main off if the panel got wet. Homes around Kirby and Virginia Avenues flooded in June 2019, and we check panels and basement circuits after storms like that before power goes back on.',
    },
    {
      q: 'I rent a Northside double and some outlets are dead. What should I do?',
      a: 'Reset any GFCI outlets first; one trip can kill several. Still dead? Write to the landlord with the date and which outlets. ORC 5321.04 (A)(4) makes Ohio landlords keep the electrical fixtures they furnish in good and safe working order. We inspect wiring, not leases, and the owner is who books our visit.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Northside houses and doubles',
    band1Heading: 'Common Electrical Problems We Find in Northside Homes',
    commonSituations: [
      'A 1950s house with one circuit for a whole floor and a kitchen added onto it later',
      'Fuses still running a pre-1940 house where someone screwed in oversized fuses years ago',
      'Basement outlets and a panel that sat in water during a heavy storm',
      'Homeowners planning an EV charger or a heat pump and unsure the panel can take it',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'You may not need us at all. If a garage, bath or kitchen outlet is dead, press reset on the GFCI outlets around the house; one of them can be feeding the others. A breaker that tripped once and has stayed on since doesn’t call for a visit, and a lamp that won’t come on may just be on a wall switch. Book an inspection when your Northside house has two-prong outlets throughout, still uses fuses, has extension cords acting as permanent wiring, or flickers on several circuits. Buying or selling an older place with no recent electrical work is another good reason.',
      },
      {
        title: 'Inspection, Repair or Rewire in Northside?',
        body: 'We base it on what the inspection finds. Many Northside inspections end with a handful of repairs: a neutral that’s worked loose, one breaker past its prime, a bath without GFCI protection. If a mid-century panel has no room for what you plan to add, such as a car charger or heat pump, a new panel gets priced. Where knob-and-tube or cloth wire still serves most of a pre-war house, a rewire quote sits next to the smaller fixes. The report is yours to take to any licensed electrician. We pull the permit and arrange the inspection when a job calls for one.',
      },
    ],
    whyTitle: 'Why Northside Homeowners Call Us',
    whyParagraph:
      'Northside owners tend to keep a house for years and want a straight answer on its wiring. Our electricians are licensed and insured, pass background checks and drug tests, and agree the price before work.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Northside?',
        a: 'We quote a flat rate before starting. It depends on the size of the house and the reason: a pre-purchase inspection on an old double covers more ground than checking one panel ahead of an EV charger. Financing is available if repairs follow.',
      },
      {
        q: 'What does your inspection look at?',
        a: 'Duke Energy’s meter and service line stop at the meter base, and that’s our starting point. We look over the panel with its breakers or fuses, grounding and bonding, every outlet plus GFCI and AFCI protection, the wiring exposed in basement and attic, and the smoke alarm supply. You get the findings in writing.',
      },
      {
        q: 'Can I take the report to a different electrician?',
        a: 'Yes. You paid for it, so it’s yours. Some Northside owners do small fixes with another licensed electrician and call us for the panel; others hand us the whole list. Each repair is priced separately so you decide.',
      },
    ],
  },
};
