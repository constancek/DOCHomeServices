import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mariemont: LocationServiceCopy = {
  localParagraph:
    'An electrical inspection in Mariemont usually means a house from the village’s first two decades. Ground was broken in 1923, and Census figures put the median home at 1945, with 36.8% built before 1940 and another 26.3% in the 1940s. Wiring that old was never meant for central air, induction ranges or a car charger, and some of it may still be cloth-covered. We test the panel and every circuit, then price anything that needs fixing before you agree to it.',
  emergencyParagraph:
    'A burning smell, or an outlet or switch that’s hot, crackling or browned, means shutting off that circuit’s breaker and leaving it shut. Same for a breaker that drops again right after a reset. Smoke or fire means out of the house and 911. In Mariemont we reach most such calls the same day, weekends included.',
  commonIntro:
    'Mariemont’s houses went up close together over a short span, so the same findings repeat from street to street:',
  localFaqs: [
    {
      q: 'Who signs off electrical work in Mariemont?',
      a: 'Mariemont hands electrical plan review and inspections to The Inspection Bureau, Inc. Their visit is the official one for permitted work. Ours is broader and comes first: the whole electrical system, tested and written up. When a repair needs a permit, we apply and the Inspection Bureau approves the finished job.',
    },
    {
      q: 'Does moving a meter or adding an outdoor outlet need historic approval in Mariemont?',
      a: 'If the house sits in one of the village’s seven local historic districts, any exterior change needs a Certificate of Appropriateness from the Architectural Review Board first. Inside work, like new circuits, stays out of sight. We check with the village before touching anything on the outside.',
    },
    {
      q: 'I own a rental unit in Mariemont. What does Ohio expect of me?',
      a: 'Ohio Revised Code 5321.04 (A)(4) obliges you to keep the electrical fixtures you supply in good and safe working order. Have tenants or your manager report problems in writing, and book the visit yourself. We inspect wiring, not leases, and the report spells out what needs doing.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Mariemont’s 1920s to 1940s homes',
    band1Heading: 'Common Electrical Problems We Find in Mariemont Homes',
    commonSituations: [
      'Ungrounded two-prong outlets in a house from the village’s first years',
      'A 1940s fuse box or small panel never upgraded since the house went up',
      'Window AC units and space heaters overloading a handful of original circuits',
      'Units in older apartment buildings with no GFCI protection by the sink',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before you book, check the simple things. A kitchen or bath outlet that went dead may be fed by a GFCI in another room that needs a reset. A breaker that tripped once, reset and stayed on usually isn’t a problem. Neither is a lamp outlet run off a wall switch. You do want an inspection if the house still has fuses, the outlets have no ground slot, cords run under rugs as permanent wiring, or several rooms flicker. Selling, buying or adding a heat pump to a house this old is the right time too. We walk you through each finding and you get it in writing.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mariemont?',
        body: 'Go by what we find. A house from 1928 that had its wiring redone in the 1990s may only need a few repairs, like a worn breaker or GFCI outlets in the bathrooms. A panel too small for central air or an EV charger points to a panel replacement. Original wiring through most of the walls is where we price a full rewire alongside spot fixes, and you choose between them. The Inspection Bureau signs off permit work. Duke Energy Ohio owns the meter and service line; our work starts at the meter base.',
      },
    ],
    whyTitle: 'Why Mariemont Homeowners Call Us',
    whyParagraph:
      'Three in four Mariemont homes are owner-occupied, and many owners are updating houses that are close to a century old. Our electricians are licensed and insured, and every one has passed a background check and drug test.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Mariemont?',
        a: 'A flat price before testing starts, which follows how big the house is and the reason for the visit. A buyer’s check, a landlord’s check and a check ahead of a heat pump each look at different things. The figure you approve is what you pay.',
      },
      {
        q: 'What do you look at during an inspection?',
        a: 'Panel first, with each breaker or fuse inside it. Grounding and bonding next. Receptacles get tried for a ground and for GFCI or AFCI coverage in rooms that call for it. Then any cable visible in the basement or attic, and power at the smoke alarms. Findings land in a written report.',
      },
      {
        q: 'If the report lists problems, must you be the ones to fix them?',
        a: 'No. You keep the report and can have any licensed electrician do the repairs. If you want us, we price each fix flat before work starts, and you decide which ones to do now and which can wait a season.',
      },
    ],
  },
};
