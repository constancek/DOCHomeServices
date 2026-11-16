import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'The West End’s housing spans more than a century, so no two inspections look alike. Census figures put 38.4% of homes at 1939 or earlier, including the Italianate rowhouses around Betts-Longworth, while about a quarter went up in the 1960s and 70s and a smaller share since 2000. The oldest can still carry cloth wire and fuses; the 1960s and 70s buildings tend to have undersized panels. With 87.1% of homes rented, owners and managers book most visits. We check the whole system and quote fixes before work begins.',
  emergencyParagraph:
    'A rowhouse outlet giving off a scorched smell, browned or hot to the hand, a crackling wall switch, a visible spark, or a breaker that drops again right after reset all need us today. Cut that circuit at the panel. With smoke or fire, everyone leaves first; 911 second. Same-day service on most West End calls, weekends included.',
  commonIntro:
    'Between 19th-century rowhouses, 1970s apartment buildings and newer townhomes, West End reports keep showing these:',
  localFaqs: [
    {
      q: 'Who approves electrical permits in the West End?',
      a: 'The West End is inside the City of Cincinnati, and the Department of Buildings & Inspections contracts electrical permit review and inspection to Inspections Bureau, Inc. (IBI). When our repair needs a permit, such as a panel change, we pull it and IBI’s inspector checks the finished work.',
    },
    {
      q: 'My West End apartment has outlets that spark. What should I do?',
      a: 'Unplug everything from it, switch its circuit off, and email or write the landlord with the date. Ohio’s ORC 5321.04 (A)(4) puts the duty on landlords to maintain supplied electrical fixtures in good and safe working order. We inspect wiring, not leases; management calls us.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for West End rowhouses, apartments and rentals',
    band1Heading: 'Common Electrical Problems We Find in West End Homes and Apartments',
    commonSituations: [
      'Cloth-covered wiring and a fuse box in an Italianate rowhouse near Betts-Longworth',
      'A 1970s apartment building with small unit panels and few kitchen circuits',
      'Rowhouse outlets swapped to three-prong without a ground behind them',
      'Electric heat and window units sharing circuits in older rental units',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Newer West End townhomes usually have sound wiring, and if a buyer’s home inspector found nothing, you can probably skip us. A dead outlet often comes back once you reset the GFCI that protects it, which might be in a bathroom, the kitchen or outside. One breaker that trips and then holds is normal. We’re worth booking when an older rowhouse still has fuses, two-prong outlets fill the rooms, cords stand in for wiring, or lights flicker on more than one circuit, especially before a sale or a new tenant moves in.',
      },
      {
        title: 'Inspection, Repair or Rewire in the West End?',
        body: 'Test results settle it, and a 1991 townhome can need more than an 1870s rowhouse that was redone. Scorched lugs, a breaker past its life or an unprotected kitchen counter get fixed individually. An undersized or deteriorating unit panel gets swapped, permitted through IBI for the city. When cloth or knob-and-tube runs still serve most rooms of a Betts-Longworth house, we show rewire pricing alongside piecemeal fixes. Duke Energy owns the meter and the line to the house; our work starts at the meter base. The report is yours.',
      },
    ],
    whyTitle: 'Why West End Owners and Landlords Call Us',
    whyParagraph:
      'From Betts-Longworth rowhouses to apartment buildings near TQL Stadium, we know West End housing. Licensed, insured electricians, background checks and drug tests, and a flat price approved before work. Family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in the West End?',
        a: 'Flat, and quoted up front. A lone rowhouse checked ahead of a listing lands lower than a multi-unit building a landlord wants combed between leases. Tell us the address, unit count and purpose and you’ll have the figure.',
      },
      {
        q: 'What does a West End electrical inspection include?',
        a: 'Each service panel and its fuses or breakers, the grounding electrode and bonding, receptacles and their GFCI or AFCI protection, exposed cable in cellars and attics, and smoke alarm supply. Old rowhouses also get a check on whether three-prong receptacles are truly grounded.',
      },
      {
        q: 'Do I have to hire you for any repairs?',
        a: 'No. The written report belongs to you, and any licensed electrician can quote from it. We price each item on its own, and we mark the safety problems so a West End landlord knows what needs doing before the next tenant.',
      },
    ],
  },
};
