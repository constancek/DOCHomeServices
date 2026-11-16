import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastEnd: LocationServiceCopy = {
  localParagraph:
    'East End housing comes in two kinds. Just over half the homes predate 1940, mostly older houses along Eastern Avenue, while newer condos and houses toward Riverside Drive went up from the 1990s on, according to Census figures. The older group is where we find cloth wiring, fuses and ungrounded outlets; the newer one is usually sound. The river is the other factor, since basements here flood when the Ohio runs high. We inspect, report in writing, and price any fix before starting.',
  emergencyParagraph:
    'Treat these as same-day problems: burning smells, an outlet gone hot or discolored, a switch that hums, sparks, a breaker that flips back off, or lights that sag when a big appliance starts. Switch that breaker off. Smoke or fire: outside, then 911. Same day on most calls, weekends too.',
  commonIntro:
    'Between the pre-war houses on Eastern Avenue and the newer homes by the river, these are the problems we find most:',
  localFaqs: [
    {
      q: 'The Ohio got into my East End basement. What about the wiring?',
      a: 'Keep the power off to anything that sat in water, and don’t reset breakers or plug things back in until it’s checked. The National Weather Service lists basement flooding in the East End once the river passes about 55.5 feet. We inspect the panel, outlets and cable runs that got wet and tell you what must be replaced.',
    },
    {
      q: 'I’m buying an older house in the East End. Should I get an electrical inspection?',
      a: 'If it’s pre-1940 and nobody can tell you when it was last rewired, yes. The buyer’s home inspector opens the panel and plugs into a handful of outlets; we work through every circuit and follow the wiring as far as we can reach it. If your lender or insurer asks for a written report, you’ll have one.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for East End houses and riverside homes',
    band1Heading: 'Common Electrical Problems We Find in East End Homes',
    commonSituations: [
      'Basement outlets and a panel that sat in floodwater when the Ohio crested',
      'Cloth-covered wiring still feeding the upstairs of a pre-1940 house on Eastern Avenue',
      'Two-prong outlets throughout the rented half of a two-family',
      'A 1990s riverside house adding an EV charger to a panel with little spare room',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Not every dead outlet is a job for us. Outlets in the kitchen, bath, garage and yard can all drop out because one GFCI tripped, so locate it and press its reset. One breaker tripping, then holding, is fine. Try another bulb and see whether the outlet is wired to a wall switch. A newer East End condo with a clean home inspection behind it doesn’t need more. Bring us in for fuses, mostly two-prong outlets, cords pinned along walls as wiring, flicker on several circuits, a basement that took river water, or an older house you’re about to buy.',
      },
      {
        title: 'Inspection, Repair or Rewire in East End?',
        body: 'Your report decides, not the build year. Connections corroded by damp, a breaker that’s failing or a bathroom outlet with no GFCI each get their own small repair. A panel that sat underwater, or one with no room for the house’s load, comes out and a new one goes in. When cloth or knob-and-tube cable still feeds an older East End house, you get a rewire price alongside the spot repairs. Duke Energy owns the meter and incoming line; our work starts at the meter base. Our visit is a safety inspection; permitted work also gets the official one, which we file for.',
      },
    ],
    whyTitle: 'Why East End Homeowners Call Us',
    whyParagraph:
      'East End owners deal with old houses and a river that rises. We explain what flooding did to the wiring, put it in writing, and quote a flat price first. Licensed, insured, background-checked and drug-tested technicians.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in the East End?',
        a: 'A flat rate we quote before starting. The house size and your reason set it: checking the circuits in one flooded basement is a smaller job than a full inspection of a three-story house before a sale. Nothing is added later for evening or weekend time.',
      },
      {
        q: 'What does an East End inspection include?',
        a: 'Panel and breakers or fuses first, along with grounding and bonding. Then outlets and switches through the house, a trip test on each GFCI and AFCI, the wiring you can see in basement and attic, and whether the smoke alarms are powered. After a flood we start with whatever the water touched. The written report lists it all.',
      },
      {
        q: 'Must I use you for the repairs?',
        a: 'No. The report is yours to use with any licensed electrician. We give a flat price for each item so you can compare, and if you hire us, we start only on what you’ve signed off.',
      },
    ],
  },
};
