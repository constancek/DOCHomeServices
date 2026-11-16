import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westwood: LocationServiceCopy = {
  localParagraph:
    'Most Westwood electrical inspections are booked by landlords and property managers, because 65.7% of homes here are rented and many of those sit in apartment buildings. The housing is mostly mid-century, so wiring is generally grounded, but panels and circuits were sized before electric heat and modern kitchens. Census figures show 48.4% of Westwood homes heat with electricity, which adds real load to older services. We check each unit or house, write up the findings and price repairs before any work.',
  emergencyParagraph:
    'Call right away for a burning odor, a receptacle that’s hot or discolored, sparks, or a breaker that flips back off the moment you push it on. So do lights that drop sharply when the heat comes on. Shut off its breaker. Smoke or fire: get out and call 911. We reach most calls the same day, including weekends.',
  commonIntro:
    'With so many apartments and rentals in Westwood, the problems we find often repeat from unit to unit:',
  localFaqs: [
    {
      q: 'I’m a Westwood tenant with an outlet that sparks. What should I do?',
      a: 'Stop using it, turn its breaker off if you can reach the panel, and tell your landlord or manager in writing. Ohio’s ORC 5321.04 (A)(4) makes landlords keep supplied electrical fixtures in good and safe working order. We inspect wiring, not leases, so the owner books the visit.',
    },
    {
      q: 'Can you inspect every unit in my Westwood apartment building?',
      a: 'Yes. We go unit by unit plus the common areas, the meter bank and the main panels, and the report lists findings by unit so you can see which ones need work first. It’s a sensible step when you buy a building or turn units over.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Westwood houses and apartment buildings',
    band1Heading: 'Common Electrical Problems We Find in Westwood Homes and Apartments',
    commonSituations: [
      'Electric heat and a window air conditioner sharing a circuit in a 1960s apartment',
      'Unit panels with mislabeled or double-tapped breakers after years of turnover',
      'Missing GFCI protection in kitchens and baths that were redone between tenants',
      'One of the older pre-1940 houses still running on fuses and two-prong outlets',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Tenants and owners can rule out a few things first. A dead bathroom or kitchen outlet often traces back to a GFCI that tripped, maybe in another room; press reset on each one. One breaker that trips and then holds once reset is not a fault. A light that won’t come on may need only a bulb. Book an inspection for a Westwood building you are buying, a unit with flickering on several circuits, power strips and cords used as permanent wiring, or a house that still has two-prong outlets or a fuse box. Adding a large appliance to an older service is another reason.',
      },
      {
        title: 'Inspection, Repair or Rewire in Westwood?',
        body: 'What we find in each unit sets the plan. A loose neutral, a breaker that has failed or a kitchen without GFCI protection is a repair. A unit panel with no room left, or a service that can’t carry electric heat and air conditioning together, is a panel or service upgrade. Rewiring is rare in Westwood’s mid-century buildings and comes up mainly in the older houses with cloth wiring throughout. Our check is separate from the permit inspection; for permit work we pull the permit and arrange the official one. Any licensed electrician can work from the report.',
      },
    ],
    whyTitle: 'Why Westwood Residents and Landlords Call Us',
    whyParagraph:
      'Westwood is Cincinnati’s largest neighborhood and mostly rented, so we write reports a manager can act on. Our electricians are licensed, insured, background-checked and drug-tested, and prices are approved before anything starts.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Westwood?',
        a: 'We set a flat rate before the visit, based on the size of the property and why you need it. A single apartment checked at turnover costs less than a whole building with common areas. Repairs are separate quotes, and you decide which go ahead.',
      },
      {
        q: 'What’s covered in the inspection?',
        a: 'Panels and breakers or fuses, the grounding and bonding, outlets tested for wiring faults and GFCI and AFCI protection, wiring we can reach without opening walls, and power to smoke alarms. In apartment buildings we add the meter bank and hallway circuits.',
      },
      {
        q: 'Must I hire you for the repairs the report lists?',
        a: 'No. Westwood owners can hand our report to their own maintenance electrician or another licensed contractor. If you want us to do it, you get a flat-rate price per item and approve the ones you want. Financing is available for bigger repairs.',
      },
    ],
  },
};
