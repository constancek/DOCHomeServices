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
        body: 'Start at the thermostat; cool or off will never make heat. A grey, matted filter chokes the airflow, so put in a fresh one. The system runs on two breakers, the outdoor unit and the basement or closet air handler, and either one tripping kills the heat. Keep snow and leaves off the unit outside. Defrost throws people: a plume of steam, a film of frost and a fan that goes still for a few minutes are all part of it. Sorted after that? No visit needed. When ice keeps building, the emergency heat light stays lit or the fan is dead, we diagnose, quote for your approval and test.',
      },
      {
        title: 'Repair or Replace Your Heat Pump in East End?',
        body: 'Judge the heat pump, not the house around it. Plenty of 1890s houses on Eastern Avenue carry a heat pump installed in the last few years, and when a contactor or fan motor quits on one of those, we fix it. The hard calls are refrigerant leaks and compressor failures; on an older unit we put the repair price and the replacement price side by side. Equipment that sat in floodwater usually belongs in the replace column. Replacements at a city address need a mechanical permit from the City of Cincinnati Department of Buildings & Inspections, which we pull.',
      },
    ],
    whyTitle: 'Why East End Homeowners and Landlords Call Us',
    whyParagraph:
      'From pre-war Eastern Avenue houses to 1990s riverfront builds, East End homes mostly burn gas with a heat pump sharing the load. Every technician is licensed, insured and background-checked, and you sign off on the flat-rate price first.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in the East End?',
        a: 'Price follows the fault. Swapping a capacitor or contactor is a short visit. A refrigerant leak runs longer, since we trace it and seal it before recharging. Once we know the cause you get a single flat-rate number, and nothing starts until you say yes. Weekends carry no overtime fees.',
      },
      {
        q: 'Should I repair or replace my East End heat pump?',
        a: 'Check the install year printed on the outdoor unit. If it is fairly new and only one part has failed, fix it. A compressor that has quit, a second leak on an older system or anything that sat in floodwater tips things toward replacement. You get both prices and make the call.',
      },
      {
        q: 'Why does my East End heat pump blow cool air in winter?',
        a: 'Heat pump output is gentle, so an East End owner used to gas furnace heat may call it lukewarm; nothing is broken. Vents blowing cold while the unit outside is frozen or stalled mean a fault. With dual fuel, it may also be the furnace not stepping in once the heat pump falls behind.',
      },
    ],
  },
};
