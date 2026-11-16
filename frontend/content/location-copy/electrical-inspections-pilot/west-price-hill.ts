import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westPriceHill: LocationServiceCopy = {
  localParagraph:
    'In West Price Hill the typical inspection is a single house from the 1940s, 50s or 60s. Census figures put 48.1% of homes here in those three decades, when a modest panel and two or three circuits per floor were plenty. Today’s kitchens, window units and space heaters push those circuits hard, so overloaded breakers and cramped panels are the usual findings. The older homes, about a third of the total, add fuses and ungrounded outlets to the list. We test everything and quote repairs before starting.',
  emergencyParagraph:
    'Don’t wait on a scorched or hot outlet, a smell of hot plastic, a crackling switch, sparks, or a breaker that pops straight back off when you reset it. Lights dimming sharply when the microwave starts can point the same way. Kill that breaker, and if there’s smoke, leave and call 911. Same-day help on most calls, weekends too.',
  commonIntro:
    'West Price Hill is mostly postwar single houses with some apartments mixed in, and these come up on our reports again and again:',
  localFaqs: [
    {
      q: 'My West Price Hill house is from the 1950s. Is the wiring safe?',
      a: 'Usually the wire itself is fine; the trouble is capacity. A panel from that era often has no room left, and a few circuits end up feeding the kitchen, a window unit and a space heater at once. We test the load on each circuit and tell you whether more circuits or a bigger panel makes sense.',
    },
    {
      q: 'Who inspects electrical work after a repair in West Price Hill?',
      a: 'West Price Hill is in the City of Cincinnati, and the city’s Department of Buildings & Inspections contracts electrical permits and inspections to Inspections Bureau, Inc. (IBI). For a panel change or new circuits we pull the permit, and IBI sends an inspector to approve the finished job.',
    },
    {
      q: 'I rent half a double in West Price Hill and the outlets keep tripping. What can I do?',
      a: 'Write to your landlord about it. In Ohio, ORC 5321.04 (A)(4) puts the landlord in charge of keeping the electrical fixtures they supply in good and safe working order. We inspect wiring, not leases, so the owner calls us in to find the cause.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for West Price Hill houses and doubles',
    band1Heading: 'Common Electrical Problems We Find in West Price Hill Homes',
    commonSituations: [
      'A 1950s panel with every space full and tandem breakers squeezed in',
      'One kitchen circuit running the fridge, microwave and toaster together',
      'Space heaters and window units on extension cords in bedrooms with one outlet',
      'A 1930s house on fuses where a past owner tapped new circuits off the old ones',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Not every dead outlet is a wiring fault. Look for a tripped GFCI first; one in a bathroom or garage can switch off outlets in other rooms. A breaker that trips once on a cold night with the heater running, then resets and holds, is just telling you the circuit is busy. A dead light is often the bulb. Get an inspection when breakers trip on several circuits, outlets are mostly two-prong, cords are run under rugs or along baseboards, or you’re about to add an EV charger, a heat pump or a finished basement.',
      },
      {
        title: 'Inspection, Repair or Rewire in West Price Hill?',
        body: 'The inspection tells us, not the age of the house on its own. Overloaded circuits are often solved by adding a few new ones. A worn breaker, a loose connection or a missing GFCI is a repair. A panel with no room and an old main breaker is a panel replacement, permitted through IBI. Full rewiring is uncommon in West Price Hill’s postwar houses; in a pre-1940 house still on cloth wire, we price it beside the targeted fixes. You keep the report, and the decision is yours.',
      },
    ],
    whyTitle: 'Why West Price Hill Homeowners Call Us',
    whyParagraph:
      'If you own a postwar West Price Hill house, you get a straight answer on the old panel, not a sales pitch. Licensed, insured electricians who pass background checks and drug tests, and a flat price agreed before work.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in West Price Hill?',
        a: 'One flat price, given before we begin. It depends on the size of the house and what you need the inspection for: a pre-listing check, a purchase, or a load review before a new appliance. Financing is available if the report leads to a panel upgrade.',
      },
      {
        q: 'What does the inspection cover?',
        a: 'In a West Price Hill house we check the panel and every breaker or fuse, grounding and bonding, outlets and GFCI and AFCI protection, the wiring you can see in the basement and attic, and power to the smoke alarms. We also measure how loaded the busiest circuits are.',
      },
      {
        q: 'Do I have to hire you to fix what you find?',
        a: 'No. The report belongs to you, and you can take it to any licensed electrician in West Price Hill or anywhere else. We price each item separately, so you can fix the safety problems now and leave the upgrades for later.',
      },
    ],
  },
};
