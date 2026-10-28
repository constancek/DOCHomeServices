import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const southgate: LocationServiceCopy = {
  localParagraph:
    'Electricity heats more Southgate homes than gas does. Census figures show 54.4% heat with electricity, a total that includes heat pumps along with electric furnaces and baseboard, so in many homes the heat pump carries the winter alone. About four in ten homes sit in buildings of five or more units, and most of the rest are detached houses, old and newer. So we work on apartment and condo systems as well as houses. We trace the fault and price it before any work starts.',
  emergencyParagraph:
    'Southgate sees January lows around 23F, going by NOAA normals for the Cincinnati airport. In an all-electric home, a heat pump failure on a night like that leaves only the backup strips, if they work, and a baby, an older relative or anyone sick is most at risk. We repair heat pumps the same day on most calls, weekends included.',
  commonIntro:
    'Southgate calls split between houses and apartment or condo buildings, and most involve a heat pump doing all the heating. These four come up again and again:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a heat pump in Southgate?',
      a: 'Yes. Kentucky requires a permit to replace a heat pump, and for Southgate the building and HVAC inspections run through Campbell County’s office in Newport. We apply for the permit and meet the inspector, so the replacement is signed off properly.',
    },
    {
      q: 'I rent an apartment in Southgate. Does my landlord have to fix the heat?',
      a: 'Start with your lease, which should say who handles repairs. Report the problem to your landlord or building manager in writing and keep a copy, mentioning whether the emergency heat light is on. If the owner sends us, we diagnose and repair it. We fix heat pumps, not leases.',
    },
    {
      q: 'Our Southgate condo’s heat pump air handler is in a closet. Can you work on it there?',
      a: 'Yes. Closet air handlers are common in apartment and condo buildings, and most repairs on them happen right where they stand. Before you call, check that the closet door isn’t blocking return air and that the filter is clean. If your association handles the outdoor units, tell us so we can coordinate.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump repair for Southgate houses, condos and apartments',
    band1Heading: 'Common Heat Pump Problems in Southgate Homes',
    commonSituations: [
      'An all-electric house where the heat strips run constantly and the bill shows it',
      'A condo heat pump whose outdoor unit sits in a row with the neighbors’ units',
      'A 1980s or 1990s house with a heat pump losing refrigerant',
      'An outdoor unit iced solid after freezing rain, with the defrost cycle not clearing it',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Southgate residents can check a few things first. The thermostat should be on heat; emergency heat left on by mistake keeps the heat pump idle and runs up the bill. Change a gray filter. Look for two breakers, one for the outdoor unit and one for the air handler, and reset a tripped one. Clear snow and ice from around the outdoor unit. Light frost, steam and a fan stopped for a few minutes are part of defrost. If heat returns, you don’t need us. Ice that won’t clear or a grinding outdoor unit means call. We quote before work.',
      },
      {
        title: 'Repair or Replace Your Southgate Heat Pump?',
        body: 'Base the call on the heat pump, not the building. A Southgate house from the 1930s or an apartment from the 1980s can have a heat pump of any age, and a stuck reversing valve solenoid or a worn contactor on a younger unit is a repair. A failed compressor or refrigerant that keeps leaking from an older system is where we quote replacement next to repair. We file the permit. In an all-electric home, an electric bill that leaps while the weather is steady usually means the heat strips have taken over from a heat pump that is losing ground.',
      },
    ],
    whyTitle: 'Why Southgate Homeowners and Residents Call Us',
    whyParagraph:
      'More than half of Southgate homes heat with electricity, often with a heat pump doing the whole job. We repair heat pumps in houses and multi-unit buildings, with every price approved before work and no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Southgate?',
        a: 'It depends on the part and where the equipment sits. A failed capacitor in a backyard unit is quick; a refrigerant leak in a condo line set can take longer to trace. We diagnose first and give you a flat-rate price to approve. Weekend visits come with no overtime fees.',
      },
      {
        q: 'Should I repair or replace my Southgate heat pump?',
        a: 'Repair it if one part failed and the compressor works. Consider replacing it when the compressor fails or the system keeps leaking refrigerant, especially on an older unit. In an all-electric home a weak heat pump costs you every month in backup heat, so we price both options.',
      },
      {
        q: 'Why does my Southgate heat pump blow cool air?',
        a: 'Heat pump air is warm, not hot, and in an all-electric home there’s no furnace blast to compare it to, so lukewarm vents are normal. If the outdoor unit is frozen over or stopped and the air is plainly cold, the heat pump has a fault we need to find.',
      },
    ],
  },
};
