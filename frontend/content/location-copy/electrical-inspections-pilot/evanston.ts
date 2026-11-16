import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evanston: LocationServiceCopy = {
  localParagraph:
    'Evanston inspections are mostly in houses from before 1940, which Census figures put at about 71% of the neighborhood’s homes. Owners outnumber renters overall, though the mix changes a lot from one part of Evanston to the next. In houses this age, cloth-covered or knob-and-tube wiring can still be in use, often next to circuits added during later updates, and outlets may have no ground. We check the whole system, write up what’s there, and quote any work before it begins.',
  emergencyParagraph:
    'Don’t book these for later. A plug or switch that’s warm or charred, a crackle behind a cover plate, sparks, a burning smell, or a breaker that won’t hold after a reset all need attention today. Shut that breaker off. If you see smoke or fire, leave the house and phone 911. Usually same day, weekends included.',
  commonIntro:
    'In Evanston’s older houses and the apartments over the Montgomery Road shops, these are the faults we find most:',
  localFaqs: [
    {
      q: 'I rent an apartment above a shop on Montgomery Road. Who handles the wiring?',
      a: 'The building owner. Ohio’s ORC 5321.04 (A)(4) holds landlords to keeping the electrical fixtures they supply in good and safe working order, and that covers apartments over shops too. Tell them in writing, and say plainly if anything is hot or sparking. We inspect wiring, not leases; the owner or manager books the visit.',
    },
    {
      q: 'We want central air or a heat pump in our Evanston house. Can the panel handle it?',
      a: 'Find out before you buy the equipment. Most Evanston houses heat with gas, and many still have panels sized decades ago, before anyone planned for central air. We do a load calculation during the inspection and tell you whether the panel and service can take the new load or need an upgrade first.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Evanston houses and two-families',
    band1Heading: 'Common Electrical Problems We Find in Evanston Homes',
    commonSituations: [
      'Knob-and-tube wiring still feeding second-floor bedrooms in a pre-1940 house',
      'A two-family with circuits for both units mixed in one unlabeled panel',
      'Ungrounded outlets in older apartments above the Montgomery Road storefronts',
      'A finished attic wired off a single bedroom circuit',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Check the basics before calling. An outlet that quits in the bathroom, kitchen, basement or porch often traces to a tripped GFCI, which may be in another room; press reset. One breaker that trips and resets cleanly is routine. A lamp that won’t come on may need a bulb or be on a switched outlet. You probably need us for a fuse box, two-prong outlets through most of the house, cords stapled along walls, lights flickering on several circuits, or before buying, selling or adding air conditioning to an older Evanston home.',
      },
      {
        title: 'Inspection, Repair or Rewire in Evanston?',
        body: 'Age is a clue; the findings decide. A 1915 Evanston house rewired in the 1990s may need just a few things: a splice tightened, a tired breaker swapped, GFCI protection added at the kitchen counter. A panel too small for central air, or one that’s failing, gets replaced. If cloth or knob-and-tube wiring still feeds a good part of the house, you see a full rewire quote beside the room-by-room repairs. Ours is a safety inspection with a written report; permitted work also needs the official inspection, and we file for the permit and book it. Then you choose.',
      },
    ],
    whyTitle: 'Why Evanston Homeowners and Landlords Call Us',
    whyParagraph:
      'Evanston has owners on some streets and landlords on others, mostly in pre-war houses. We inspect either way, explain the findings plainly, and quote flat before starting. Licensed, insured technicians.',
    sharedFaqs: [
      {
        q: 'What does an Evanston electrical inspection cost?',
        a: 'One flat rate, quoted before we begin. House size and your reason set it, so a pre-listing walk-through is priced differently from a load review ahead of central air or an EV charger. What you agree to is what you pay, with no overtime fees.',
      },
      {
        q: 'What do you inspect in an Evanston house?',
        a: 'Starting at the panel, we check breakers or fuses and the grounding and bonding, then test outlets and switches, trip every GFCI and AFCI, and look over exposed wiring in the basement and attic. Smoke alarms get a power check. Any old cloth or knob-and-tube wiring in view is noted in the written report.',
      },
      {
        q: 'Do I have to use you for the work the report lists?',
        a: 'You don’t. Give the report to any licensed electrician, or use it to plan work over time. Each item has our flat price beside it if you’d like us to do it, and we touch nothing you haven’t approved.',
      },
    ],
  },
};
