import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wilder: LocationServiceCopy = {
  localParagraph:
    'In Wilder a heat pump is often the only heat in the home, since Census figures show 62.4% of homes heat with electricity. That also counts electric furnaces. Most homes went up in the 1980s and 1990s, and 59.1% are in buildings of five or more units, so we work on heat pumps and air handlers in larger buildings as well as houses. When the outdoor unit fails, electric backup strips keep it warm at a higher cost. We test it and give you a flat price first.',
  emergencyParagraph:
    'Freezing nights come about 100 times a year at the CVG station, per NOAA’s 1991-2020 normals. In an all-electric Wilder home there’s no gas furnace to fall back on, so a dead heat pump hits a newborn or an elderly parent hard. We repair heat pumps, air handlers and backup heat strips, often the same day, weekends included.',
  commonIntro:
    'Most Wilder heat pump calls come from all-electric homes built in the 1980s and 1990s. These four are the usual problems:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace the heat pump in my Wilder home?',
      a: 'Yes. Kentucky requires a permit to replace a heat pump, and Campbell County Planning, Zoning and Building Inspection is the local HVAC office for Wilder. We file it as part of any replacement, so you don’t deal with the county yourself. A repair is quoted separately.',
    },
    {
      q: 'I rent in Wilder and the heat pump quit. Who handles it?',
      a: 'Tell your landlord or property manager in writing and keep a copy. Before that, make sure the thermostat is on heat and nothing has tripped at the breaker panel. Kentucky has no statewide rule like Ohio’s on landlord heat, so your lease spells out the repair terms. We fix heat pumps, not leases.',
    },
    {
      q: 'The aux heat light in our Wilder home stays on all the time. Is that costing us money?',
      a: 'Probably. That light means the electric heat strips are doing the work the heat pump should do, and the strips use far more power. With no gas in the house, it shows up on the next Duke Energy Kentucky bill. Check for ice packed on the outdoor coil, then call us to test it.',
    },
  ],
  overrides: {
    ctaLine: 'Wilder heat pump repair for all-electric homes',
    band1Heading: 'Common Heat Pump Problems in Wilder Homes',
    commonSituations: [
      'An all-electric unit running on heat strips because the outdoor fan stopped',
      'A 1990s heat pump with a slow refrigerant leak and a frosted coil',
      'An air handler breaker that trips on the first cold night',
      'A heat pump stuck blowing cool after the reversing valve stuck',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'A few checks come before a service call. Set the thermostat to heat, since cool or off looks a lot like a breakdown. Fit a fresh filter. Find both breakers, the outdoor unit’s and the air handler’s, and reset a tripped one once. Keep snow and blown leaves off the outdoor unit. When the unit hisses, gives off steam and frosts lightly with the fan paused, it is defrosting. If warm air returns, you can skip the call. Call us when the ice never clears, the emergency heat light stays on or the fan grinds. We inspect, explain and price before work.',
      },
      {
        title: 'Repair or Replace Your Wilder Heat Pump?',
        body: 'Go by the heat pump, not the building. A Wilder home from the 1980s or 1990s may run its original unit or a later one, and the date on the outdoor label tells you which. Small parts like a capacitor or contactor are repairs. On an older unit, a compressor failure or a refrigerant leak is the big decision, and we price both repair and replacement. Kentucky requires a permit for a replacement, which we file with Campbell County. With no gas backup, a struggling heat pump shows up fast as a higher electric bill.',
      },
    ],
    whyTitle: 'Why Wilder Homeowners Call Us',
    whyParagraph:
      'In all-electric Wilder homes the heat pump is the heat, so we treat a failure as urgent. Our technicians are licensed, insured, background-checked and drug tested, and you approve a flat price before any work.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Wilder?',
        a: 'We find the fault before we name a price. A capacitor or contactor is a small repair, while a leak or a failed compressor is a larger job. You approve a flat rate before work starts, weekend visits carry no overtime fee, and financing is available for bigger repairs.',
      },
      {
        q: 'Should I repair or replace my Wilder heat pump?',
        a: 'Repair it if one part failed and the rest tests well. If an older unit has a dead compressor or keeps losing refrigerant, replacement deserves a look, and we lay out both prices. In an all-electric home, running on heat strips while you decide is expensive, so we move quickly.',
      },
      {
        q: 'Why does my Wilder heat pump blow cool air?',
        a: 'Heat pump air comes out milder than furnace air, so it can feel cool to a hand at the vent even while it heats the room properly. If the air is plainly cold and the outdoor unit is iced or not running, something has failed and only the heat strips are left.',
      },
    ],
  },
};
