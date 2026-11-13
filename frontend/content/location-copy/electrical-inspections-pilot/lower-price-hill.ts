import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lowerPriceHill: LocationServiceCopy = {
  localParagraph:
    'Lower Price Hill inspections are mostly for landlords. Census figures show 82.7% of homes here are rented, and 64.9% were built in 1939 or earlier, many in the 1850s according to the National Register listing for the district around State Avenue and West Eighth Street. In buildings that old, every layer of past work is in the walls: cloth-covered wire, two-prong outlets, small panels split between units. Nearly half the homes also heat with electricity, which leans on those panels in winter. We test it all and quote fixes first.',
  emergencyParagraph:
    'Treat these as urgent: smoke or a burnt smell from an outlet, a cover plate that’s warm or browned, a buzzing switch, sparks, a breaker or fuse that goes again right after you reset it. Turn that circuit off. Smoke or flames mean everyone out and 911. We can usually come the same day, weekends included.',
  commonIntro:
    'In Lower Price Hill’s old doubles and small apartment buildings, these are the problems on most of our reports:',
  localFaqs: [
    {
      q: 'I rent in Lower Price Hill and the lights dim every time the heat comes on. Who fixes that?',
      a: 'Your landlord. Report it in writing. Under ORC 5321.04 (A)(4), Ohio landlords have to keep the electrical fixtures they provide in good and safe working order. We inspect wiring, not leases, so it’s the owner or property manager who books us to find out why.',
    },
    {
      q: 'Does my Lower Price Hill building need a permit for electrical repairs?',
      a: 'Some repairs do, such as a new panel or new circuits. Lower Price Hill is inside the city, so permits go through the City of Cincinnati Department of Buildings & Inspections. We pull the permit and arrange the inspection, and you don’t need to deal with the city yourself.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Lower Price Hill rentals and owners',
    band1Heading: 'Common Electrical Problems We Find in Lower Price Hill Homes and Apartments',
    commonSituations: [
      'Electric heat on a 1930s fuse panel that blows fuses every cold night',
      'Cloth-covered wire spliced to newer cable inside the walls of an 1850s house',
      'Three or four apartments fed from one small panel with nothing labeled',
      'Bathrooms and kitchens in rental units with no GFCI protection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before booking, try a reset. Bathroom, kitchen and outdoor outlets are often protected by a GFCI that can sit in another room, and pressing its reset button brings them back. One breaker that trips and then holds after a reset doesn’t need us, and a lamp plugged into a switched outlet may just need the switch flipped. Landlords should book an inspection when a building still has fuses, two-prong outlets throughout, cords running between rooms, or tenants reporting flicker on more than one circuit. Buying a Lower Price Hill building is another good time.',
      },
      {
        title: 'Inspection, Repair or Rewire in Lower Price Hill?',
        body: 'We decide from what testing shows, since most buildings here are old and the wiring inside varies a lot. A loose connection, a breaker that’s worn out or a kitchen without GFCI protection gets repaired. A panel too small for electric heat, or one that’s failing, is replaced under a City of Cincinnati Department of Buildings & Inspections permit. Where knob-and-tube or cloth wire runs through a whole building, we price a rewire next to spot repairs, unit by unit if that helps the budget. You get the report and choose.',
      },
    ],
    whyTitle: 'Why Lower Price Hill Landlords and Tenants Call Us',
    whyParagraph:
      'Landlords get a written list they can act on, and tenants get a building that’s been checked. Licensed and insured electricians, background checks and drug tests on every employee, and a price agreed first.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection for a Lower Price Hill building?',
        a: 'We charge a flat rate and tell you it before starting. A single house costs less than a four-unit building with several panels, and the purpose matters too, whether it’s a purchase, a tenant complaint or a check before adding air conditioning.',
      },
      {
        q: 'What does a Lower Price Hill electrical inspection cover?',
        a: 'The panel or panels, breakers or fuses, grounding and bonding, outlets and GFCI or AFCI protection in each unit, all the wiring we can see, and whether smoke alarms are powered. In buildings this old we also trace which panel feeds which apartment.',
      },
      {
        q: 'If you find problems, do I have to use you to fix them?',
        a: 'No. You keep the written report and can hire any licensed electrician. We list each item with a flat price and mark the safety issues, so a landlord can deal with those first and plan the rest.',
      },
    ],
  },
};
