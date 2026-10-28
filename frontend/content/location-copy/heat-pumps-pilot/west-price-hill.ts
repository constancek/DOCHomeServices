import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westPriceHill: LocationServiceCopy = {
  localParagraph:
    'Gas heats most of West Price Hill, so a heat pump on this hillside usually shares the job with a gas furnace that steps in on the bitter nights. By Census figures, 69.5% of homes burn gas for heat and 27.7% use electricity, the latter lumping electric furnaces and baseboard in with heat pumps. Owners and renters are roughly even here, in housing that runs from pre-war houses to postwar homes and two-family buildings. We pin the failure to one half of the system and give you the price first.',
  emergencyParagraph:
    'NOAA normals at CVG put the typical January low around 23F. When a West Price Hill heat pump and its backup both fail on a night like that, babies, older family members and anyone ill are at the most risk. We fix both halves of a dual fuel system, mostly the same day, weekends included.',
  commonIntro:
    'West Price Hill heat pump calls come from owners and landlords alike, mostly in older gas-heated houses where the heat pump was added later. The four we see most:',
  localFaqs: [
    {
      q: 'I rent in West Price Hill and the heat isn’t working. What is my landlord required to do?',
      a: 'When tenants can’t set their own heat, the city’s rule is 70F or warmer indoors after a full day below 60F outside. Write to your landlord about the outage and keep a copy. We fix heat pumps, not leases, so the repair gets scheduled through the owner.',
    },
    {
      q: 'Do I need a permit to replace a heat pump in West Price Hill?',
      a: 'Yes. West Price Hill is inside Cincinnati, and the Department of Buildings & Inspections requires a mechanical permit to install or replace air conditioning equipment, which includes a heat pump. We get it before the old unit comes out. Repairs to your existing unit are quoted while we’re there.',
    },
    {
      q: 'I own a two-family in West Price Hill. Can you fix the heat pump for one unit without disturbing the other?',
      a: 'Yes. In a two-family house each unit usually has its own heat pump or furnace, thermostat and breakers, so we can work on one side while the other stays heated. Let your tenants know we’re coming, and you approve the flat-rate price before we start.',
    },
  ],
  overrides: {
    ctaLine: 'West Price Hill heat pump repair for houses and two-families',
    band1Heading: 'Common Heat Pump Problems in West Price Hill Homes',
    commonSituations: [
      'A dual fuel system in a 1950s house where the furnace carries the whole winter',
      'A heat pump added to a pre-war house that leaves the far bedrooms cool',
      'An outdoor unit on a sloped side yard packed with ice that won’t clear',
      'One side of a two-family running on emergency heat while the other heats normally',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Heat is the only thermostat mode that warms the house, so check it hasn’t slipped to cool or off. Hold the filter to a lamp; if no light passes, replace it. The condenser and air handler each have their own breaker, and both must be on. Rake leaves and snow off the outside cabinet, which on a sloped lot can catch drifts. A few minutes of steam, light frost and a silent fan is the defrost cycle doing its job. Warm air back means you don’t need us. Ice that hangs on, a grinding fan or one that won’t spin is our cue, and we quote before work.',
      },
      {
        title: 'Repair or Replace Your West Price Hill Heat Pump?',
        body: 'Decide by the heat pump’s condition, not the house’s age. A pre-war West Price Hill house may carry a heat pump installed a few years back, and a bad defrost control or outdoor fan motor on it is a repair. When the compressor fails, or refrigerant needs adding again and again, we price a replacement next to the repair. In a dual fuel house, the gas bill gives it away: if the furnace runs through mild weather, the heat pump has likely stopped heating. Financing is available if you replace.',
      },
    ],
    whyTitle: 'Why West Price Hill Homeowners and Landlords Call Us',
    whyParagraph:
      'We work for West Price Hill homeowners with dual fuel systems and for landlords with two-families and apartment buildings. Our technicians are licensed, insured and background-checked, and we’ve been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in West Price Hill?',
        a: 'We give you a number once we know the cause. A stuck contactor or a failed fan motor on the outdoor unit is a quicker fix than a refrigerant leak, which has to be traced first. You approve one flat-rate price before work begins, and there’s no overtime charge on weekends.',
      },
      {
        q: 'Is my West Price Hill heat pump worth repairing?',
        a: 'Usually, when one part has failed and the rest is in good order. A dead compressor or a coil that keeps losing refrigerant changes the math, and then we show you a replacement price next to the repair. Landlords with several units get the same comparison for each.',
      },
      {
        q: 'Why does my West Price Hill heat pump blow cool air in winter?',
        a: 'Heat pump air feels mild beside a gas furnace’s because it leaves the registers warm, not hot, and that’s expected. Plainly cold air, or an outdoor cabinet that is iced over or silent, signals a failure; in a dual fuel house it can also mean the furnace isn’t taking over when it should.',
      },
    ],
  },
};
