import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const parkHills: LocationServiceCopy = {
  localParagraph:
    'Park Hills was built out from the late 1920s through the 1950s, and Census figures put the median home at 1953, with 31.4% built in 1939 or earlier. Many of the older houses on the hillside streets by Devou Park were built with radiators, and plenty still use them. The city also has a fair number of apartment buildings, where a single boiler can heat every unit. In either, we find what failed and give you a price before any repair.',
  emergencyParagraph:
    'When a Park Hills boiler fails on a January night, with normal lows near 23F (NOAA, CVG), babies, older relatives and anyone ill feel it first. In a building on one boiler, every unit goes cold together, and radiator pipes can freeze if it lasts. Most no-heat calls are handled the same day, weekends included.',
  commonIntro:
    'Park Hills boiler calls split between older hillside houses and apartment buildings on a shared boiler. The usual ones:',
  localFaqs: [
    {
      q: 'I rent an apartment in Park Hills and the heat is out. Can you come?',
      a: 'The building’s boiler belongs to the owner, so report the outage to your manager or landlord first and put it in writing. Your lease sets how heat repairs are handled there. When management books us, we come out. We fix boilers, not leases.',
    },
    {
      q: 'Does the Park Hills historic district limit boiler work?',
      a: 'Much of Park Hills is in a National Register historic district, but that listing on its own does not restrict work on a private home. A boiler swap is indoor work either way; if a new outside vent is needed, we confirm with the city first.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Park Hills homes and apartment buildings',
    band1Heading: 'Common Boiler Problems in Park Hills Homes and Apartments',
    commonSituations: [
      'A central boiler in an apartment building that leaves the top-floor units cold',
      'A 1930s hillside house with radiators that heat unevenly from room to room',
      'A boiler that kettles and rumbles because buildup has collected in the heat exchanger',
      'One zone of a house with no heat because the zone valve has stuck shut',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Many Park Hills heat complaints need no technician. Take a radiator key to any radiator that’s cool along the top and open the valve until water spits. On hot water heat, check the boiler’s dial afterward and refill if it reads low. Set the thermostat to heat and flip the boiler switch on. If another company holds the building’s service contract, ring them first. Phone us for pressure that won’t stay up, water by the boiler or a valve, banging pipes, or an error code lockout. Smell gas? Get out, touch no switches, and call the gas company or 911 once outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Park Hills?',
        body: 'The year a Park Hills house went up says little about its boiler; the label on the boiler gives the install year. Pumps, igniters, zone valves and expansion tanks are repairs. A cracked section, a leaking heat exchanger or a winter-by-winter run of breakdowns is when we price replacement beside the repair. For apartment owners and homeowners alike, a yearly service before heating season takes about 60 to 90 minutes and covers pressure, expansion tank, leak checks, safety controls, burner and flue, and radiator bleeding. On a building boiler, it heads off a whole-building outage.',
      },
    ],
    whyTitle: 'Why Park Hills Homeowners and Landlords Call Us',
    whyParagraph:
      'A third of Park Hills homes are rented, many in buildings of five or more units. Owners and residents get licensed, insured technicians who pass background checks and drug tests, and a flat-rate price approved first.',
    sharedFaqs: [
      {
        q: 'How much is boiler repair in Park Hills?',
        a: 'Price follows the fault. Purging air or replacing a zone valve is a modest job; a leaking section on an apartment building’s boiler is a large one. We diagnose, quote one flat rate, and wait for the owner’s go-ahead before working. There are no overtime fees, and financing is available.',
      },
      {
        q: 'Repair or replace a Park Hills boiler: how do you decide?',
        a: 'We look at the boiler, not the building. A sound vessel with a failed pump, valve or igniter gets repaired. A leaking vessel or heat exchanger, or a boiler that has needed us each winter, gets a replacement quote set next to the repair quote, with financing available.',
      },
      {
        q: 'Why are some radiators cold in my Park Hills home?',
        a: 'Most of the time it is air, and the cold patch sits along the top of the radiator. Bleed it and check the boiler pressure. In apartment buildings, the units farthest from the boiler run coolest when air or a weak pump is the problem. If bleeding changes nothing, we check the valves and pump.',
      },
    ],
  },
};
