import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAdams: LocationServiceCopy = {
  localParagraph:
    'By Census figures, the median year built in Mount Adams is 1938, and 50.2% of units date from 1939 or earlier. Those houses, doubles and walk-ups were never ducted for cooling upstairs, so the head tends to sit in a third-floor bedroom or a rear addition, its copper snaking down the siding to a bracket-hung outdoor unit. Renters live in 66.1% of homes, and the building owner signs off on repairs. Our technician tracks down what failed, and you hear a firm number before anything is unscrewed.',
  emergencyParagraph:
    'Heat climbs the stairs. With roughly 21 days a year topping 90F, per the National Weather Service, a top-floor room with a dead head gets risky for a grandparent, an infant or someone with asthma. On most calls we’re there that same day, weekends included. If water soaks toward the flat downstairs, flip the breaker off.',
  commonIntro:
    'Here is what gets us called up the hill most often.',
  localFaqs: [
    {
      q: 'Who arranges the repair when a rented mini-split quits in Mount Adams?',
      a: 'The owner, provided the mini-split came with the flat. ORC 5321.04, Ohio’s landlord law, obliges owners to keep any air conditioning they supply in good and safe working order. Write the complaint down, date it and keep a copy. We fix mini-splits, not leases, and we’ll gladly take the owner’s booking.',
    },
    {
      q: 'Can your crew reach an outdoor unit hung high on a hillside house?',
      a: 'Yes. Lots in Mount Adams are steep, so outdoor units often hang from wall brackets or perch on a slim ledge beside the house. We bring the ladders and the second pair of hands the job calls for, and that access is built into the flat price you agree to.',
    },
  ],
  overrides: {
    ctaLine: 'Ductless repairs for hillside homes and apartments in Mount Adams',
    band1Heading: 'Common Mini-Split Problems in Mount Adams Homes and Apartments',
    commonSituations: [
      'A head in a converted third-floor bedroom that hums along without cooling',
      'Condensate seeping through the ceiling into the flat downstairs',
      'A bracket-mounted outdoor unit high on the siding whose fan sits still',
      'One zone of a multi-room system in a double flashing an error light',
    ],
    proseSections: [
      {
        title: 'Signs Your Mini-Split Needs Repair, and When It Doesn’t',
        body: 'Plenty of dead heads come back to life without us. Fresh batteries go in the remote first, and its screen ought to show cool or heat, never the fan icon alone. Next comes the breaker, then the pull-out block in the little box near the outdoor unit. Under the hinged cover of the head sit mesh screens; run them under the tap, let them air-dry and clip them back in. A brief shutdown at the breaker often clears a unit confused by an outage. Drips, frosted copper or a code that returns mean the problem is ours. We decode it, quote the fix and run every zone afterward.',
      },
      {
        title: 'Repairing or Replacing a Mini-Split in Mount Adams',
        body: 'Forget the deed date, because the mini-split’s own condition decides this. A pre-1939 house may hold a unit that went in recently, and on a young system a weeping flare nut at the head, a tired blower motor or a pump that no longer lifts condensate gets fixed. The picture changes when the compressor has died, the coil itself leaks, the board is out of production, or the same unit keeps failing. We write up the repair and a new system next to each other and the owner picks. The city’s Buildings & Inspections department issues the mechanical permit for a replacement, and we apply for it.',
      },
    ],
    whyTitle: 'Why Renters and Owners in Mount Adams Choose Us for Mini-Split Repair',
    whyParagraph:
      'Old doubles, walk-up apartments and the odd newer condo on the hill all get the same care from us. Our technicians are licensed and insured, the owner okays a flat price up front, and Saturdays cost nothing extra.',
    sharedFaqs: [
      {
        q: 'What do you charge to repair a mini-split in Mount Adams?',
        a: 'It rests on the failed part, the labor to swap it and how awkward the head and condenser are to reach on a sloped lot. We pull the error code before guessing. You see a single flat figure and say yes before any work, with nothing extra on weekends.',
      },
      {
        q: 'Is it worth fixing an aging mini-split in Mount Adams?',
        a: 'Often, yes. One bad sensor or blower motor on a unit that otherwise works well calls for that part and nothing more. If the compressor is gone, the coil leaks, or the part has been discontinued, we lay out the price of each option and the owner makes the call.',
      },
      {
        q: 'What makes a mini-split drip water or blow warm air?',
        a: 'Drips nearly always come from a drain tube choked with gunk, or a coil behind a dirty screen that can’t shed water. Warm air traces to a remote in the wrong mode, choked filters, or escaping refrigerant. Frost on the copper means shut it off at the breaker and phone us.',
      },
    ],
  },
};
