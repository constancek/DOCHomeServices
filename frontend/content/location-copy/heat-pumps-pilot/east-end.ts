import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastEnd: LocationServiceCopy = {
  localParagraph:
    'East End heat pump work is mostly dual fuel, since the neighborhood runs on gas. Census figures show 79.6% of homes heat with gas and 15.8% with electricity, including electric furnaces and baseboard. Housing is split between pre-1940 houses along Eastern Avenue, where the heat pump was added long after the house, and Riverside Drive homes from the 1990s onward. The river matters too: equipment in a basement that flooded needs checking before it runs. We find the fault and quote it before we start.',
  emergencyParagraph:
    'An East End house without heat in January is facing nights that average about 23F, per NOAA’s 1991-2020 normals at CVG. Check first on any baby, older relative or sick person in the house. Our technicians fix heat pumps, the indoor air handler and the gas switchover, and most calls get a same-day visit, Saturdays and Sundays too.',
  commonIntro:
    'East End heat pump calls come from older houses on Eastern Avenue with a heat pump added to the furnace, and from newer homes along Riverside Drive. These four come up most:',
  localFaqs: [
    {
      q: 'My East End basement flooded. Can I turn the heat pump back on?',
      a: 'Not if the air handler, furnace or outdoor unit sat in water. The National Weather Service notes East End basement flooding once the Ohio River reaches about 55.5 feet at Cincinnati. Leave the breakers off and have the equipment checked first. If nothing was under water, start with your normal checks.',
    },
    {
      q: 'I rent in the East End and the heat pump stopped. What can I do?',
      a: 'Put it in writing to your landlord, with what you checked: thermostat mode, filter, breakers. In Cincinnati, a landlord who controls the heat in a rental owes you at least 70F indoors during a cold spell, and Ohio law covers heating equipment they supply. Your landlord can call us. We fix heat pumps, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'East End heat pump repair, quoted before we begin',
    band1Heading: 'Common Heat Pump Problems in East End Homes',
    commonSituations: [
      'An air handler in a basement that took on water when the river rose',
      'A heat pump added to an Eastern Avenue house that never switches to the gas furnace',
      'A Riverside Drive home from the 1990s with an outdoor unit that ices over',
      'A rowhouse heat pump stuck on cooling after the first cold night',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Look at the thermostat first: it has to say heat. A filter gone grey restricts the air, so swap it. Two breakers serve the system, one outdoors and one at the air handler, and a trip on either stops the heat. Sweep snow and leaves off the outdoor unit. Defrost looks odd but is normal: a cloud of steam, a skin of frost, the fan going quiet for a few minutes. If that fixes it, you don’t need us. If ice keeps growing, the emergency heat light won’t clear or the fan is dead, call. We diagnose, explain, quote for approval and test.',
      },
      {
        title: 'Repair or Replace Your East End Heat Pump?',
        body: 'Look at the heat pump’s age, not the house’s. An 1890s house on Eastern Avenue may have a heat pump that is only a few years old, and a failed contactor or fan motor on it is a repair. Refrigerant leaks and compressor failures are the big decisions, and on an older unit we price repair and replacement side by side. Equipment that sat in floodwater usually belongs in the replace column. Replacements at a city address need a mechanical permit from the City of Cincinnati Department of Buildings & Inspections, which we pull.',
      },
    ],
    whyTitle: 'Why East End Homeowners and Landlords Call Us',
    whyParagraph:
      'East End homes range from pre-war houses to 1990s riverfront builds, most on gas with a heat pump beside it. Our technicians are licensed, insured and background-checked, and you approve the flat-rate price first.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in the East End?',
        a: 'The fault sets the price. A capacitor or contactor is quick, and a refrigerant leak takes longer because it has to be found and sealed before the recharge. We diagnose, then give one flat-rate price, and wait for your approval. There are no overtime fees on weekends.',
      },
      {
        q: 'Should I repair or replace my East End heat pump?',
        a: 'Go by the date on the outdoor unit’s label. A newer heat pump with one failed part is worth repairing. A dead compressor, a repeat leak on an older unit or any equipment that sat in floodwater leans toward replacement. We price both and leave the choice to you.',
      },
      {
        q: 'Why does my East End heat pump blow cool air in winter?',
        a: 'Heat pump air feels cooler than gas furnace air, and that lukewarm feel is normal. Cold air with the outdoor unit iced or stopped is a fault. In a dual fuel home it can also mean the furnace isn’t picking up when the heat pump can’t keep up.',
      },
    ],
  },
};
