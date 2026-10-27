import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'Most Northside homes heat with gas, so the heat pumps we repair here are often paired with a furnace as backup. Census figures show 68.9% of homes on gas and 27.0% on electricity. More than half the housing dates from 1939 or earlier, so any heat pump in those houses was fitted to an old basement and ducts that were never planned for one. We test both the outdoor unit and the gas side, then quote the fix before touching anything.',
  emergencyParagraph:
    'NOAA’s normals for CVG put January lows near 23 degrees. When the heat fails in an old Northside house or a top-floor apartment, that cold matters most for babies, older relatives and anyone ill. We repair heat pumps, dual fuel systems and electric air handlers, usually the same day, weekends included.',
  commonIntro:
    'Northside heat pump calls are mostly dual fuel systems in pre-war houses, with all-electric units in some apartment buildings. These come up most:',
  localFaqs: [
    {
      q: 'I rent in Northside and the heat pump isn’t heating. What can I do?',
      a: 'When heat is the landlord’s to control, Cincinnati sets a 70F indoor minimum after a full 24 hours below 60F outdoors, and the Cincinnati Health Department enforces it. Look at the thermostat and breakers, then put the problem in writing. Our job is heat pumps, not leases, so your landlord books us.',
    },
    {
      q: 'Do I need a permit to replace a heat pump in Northside?',
      a: 'Yes. Northside is in the City of Cincinnati, and a mechanical permit from the Department of Buildings & Inspections covers replacing heating and cooling equipment. We take care of it with the job. Repairing the system you already have is quoted and finished on the visit.',
    },
  ],
  overrides: {
    ctaLine: 'Northside heat pump repair for old houses and new',
    band1Heading: 'Common Heat Pump Problems in Northside Homes',
    commonSituations: [
      'A heat pump added to a pre-war house that can’t warm the second floor',
      'A dual fuel system whose gas furnace runs while the outdoor unit sits idle',
      'An apartment air handler running on backup heat strips all winter',
      'An outdoor unit on a narrow lot drifted over with snow and leaves',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'A few things you can sort out yourself. The thermostat should say heat; cool or off won’t warm anything. Slide in a clean filter. In the basement panel, flip back on whichever breaker tripped, the condenser’s or the furnace’s. On a narrow Northside lot, dig the condenser out of drifted snow and leaves. Steam, light frost and a fan that rests briefly are the defrost cycle doing its job. When warmth returns, you don’t need us. Phone us if ice won’t melt off the coil, the system is stuck cooling, or the condenser fan grinds. If you smell gas by the furnace, get out and phone from outside.',
      },
      {
        title: 'Repair or Replace Your Northside Heat Pump?',
        body: 'Go by the equipment’s age, not the 1910 date on a Northside deed. A heat pump put in recently that loses its fan motor or defrost control should be fixed. When an older system leaks refrigerant or its compressor dies, we quote a new unit next to the repair. With dual fuel, the furnace quietly picks up the slack for a weak heat pump, so the earliest clue is often a Duke Energy Ohio gas bill climbing during a mild stretch. Homes near Kirby and Virginia Avenues flooded in June 2019, and any unit that has been under water needs checking before it runs.',
      },
    ],
    whyTitle: 'Why Northside Homeowners and Landlords Call Us',
    whyParagraph:
      'We work on dual fuel systems in Northside’s pre-war houses and on all-electric heat pumps in its apartments. Every technician is licensed and drug-tested, and we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Northside?',
        a: 'We price it once we’ve found the fault. A failed outdoor fan motor is a moderate job, while a refrigerant leak along a line set run through an old basement takes more time. The flat-rate price comes first, you approve it, and weekend calls carry no overtime fees.',
      },
      {
        q: 'Is my Northside heat pump worth repairing?',
        a: 'If the unit is fairly new and one part failed, yes. The house may be over a century old while the heat pump is recent, so check the label. A failed compressor or repeated refrigerant leaks favor replacement, and financing is available if you go that way.',
      },
      {
        q: 'Why does my Northside heat pump blow cool air?',
        a: 'A heat pump blows warm, not hot, and anyone who grew up with a gas furnace may read that as cool. Nothing is broken. Truly cold vents with the condenser iced or sitting still mean a fault, and the same goes for a backup furnace that never lights. Look at the thermostat setting first.',
      },
    ],
  },
};
