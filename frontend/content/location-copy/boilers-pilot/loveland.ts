import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const loveland: LocationServiceCopy = {
  localParagraph:
    'Most Loveland homes run forced air, not boilers. Census figures put only 5.4% of the city’s homes as built in 1939 or earlier, and the median home dates from 1985, so a ducted house wants our furnace repair team. The boilers we do service are in the older houses, often ones that have kept their original radiators. For those, we find the fault, show you what failed, and quote it before work begins.',
  emergencyParagraph:
    'A Loveland home on radiators can lose heat fast when the boiler quits on a January night, with normal lows near 23F at CVG (NOAA). Babies, older relatives and anyone ill are most at risk, and radiator pipes in cold corners can freeze if it goes on. Most no-heat calls get a technician the same day, weekends included.',
  commonIntro:
    'Loveland boiler calls come from a small group of older houses with radiators. What comes up most:',
  localFaqs: [
    {
      q: 'Does Loveland’s historic district affect a boiler replacement?',
      a: 'The boiler itself sits indoors, so usually not. Loveland’s Historic Preservation and Planning Commission reviews projects in the downtown district that need a building permit. If a new boiler means a new vent through an outside wall of a downtown house, we check with the city first.',
    },
    {
      q: 'I rent in Loveland and the radiators won’t heat. What can I expect from my landlord?',
      a: 'Ohio law (ORC 5321.04) requires your landlord to keep the heating they supply in good and safe working order; Cincinnati’s 70F rule doesn’t reach Loveland. Send the request in writing. Your landlord can book us to repair it. We fix boilers, not leases, so we don’t settle disputes.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Loveland’s older radiator homes',
    band1Heading: 'Common Boiler Problems in Loveland Homes',
    commonSituations: [
      'An older Loveland house with original radiators and a boiler nobody has serviced in years',
      'A boiler pressure gauge that reads near zero after a summer of sitting idle',
      'Radiators that heat downstairs but stay lukewarm in the upstairs bedrooms',
      'A burner that lights, runs a minute and locks out on a flame error',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Rule out the simple stuff before booking. Turn the thermostat up past room temperature and look at the boiler’s on/off switch. A radiator with a cold top band is holding air; let it out with a radiator key. Afterward, glance at the gauge on a hot water boiler and refill if it dropped. Heat back in every room means no visit needed. We should come out when the gauge won’t stay up, water drips at a valve or under the boiler, the burner flame looks yellow, or a single zone gets no heat. Smell gas? Leave, flip nothing, and phone the gas company or 911 from the yard.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Loveland?',
        body: 'Older Loveland houses sometimes have a boiler far younger than the radiators it feeds, so check the label; it shows the install date. Igniters, circulator pumps, zone valves and expansion tanks are repair parts. A leaking heat exchanger or section, or a boiler that has needed repairs each winter, is when we bring a replacement quote alongside the repair quote. To keep one going, book yearly service before the heat goes on: about 60 to 90 minutes going over pressure, the expansion tank, leaks, the safety controls, burner and venting, and bleeding the radiators.',
      },
    ],
    whyTitle: 'Why Loveland Homeowners Call Us',
    whyParagraph:
      'Boilers are uncommon in Loveland, so you want a technician who works on them often, not one guessing. Ours are licensed, insured, background-checked and drug-tested, and give you a flat-rate price before starting.',
    sharedFaqs: [
      {
        q: 'What does it cost to repair a boiler in Loveland?',
        a: 'We can’t price it until we know what failed. Adding water to a low system is minor; a new circulator pump is a mid-size job; a leaking section is a major repair. After the diagnosis you get one flat-rate price, nothing starts until you approve it, and financing is there for larger jobs.',
      },
      {
        q: 'Should I fix or replace the boiler in my Loveland house?',
        a: 'Fix it when one part has failed and the boiler itself is tight. Look at replacement when the heat exchanger or a section leaks, or the repairs keep stacking up winter after winter. In those cases we price both, and if a new boiler makes sense, financing is available.',
      },
      {
        q: 'Why is one radiator cold in my Loveland home?',
        a: 'If it is cold at the top and warm below, it has air in it; bleed it. If the whole radiator is cold, check that its valve is open, then look at the boiler pressure. A cold room on a separate zone points to a zone valve, which is a repair for us.',
      },
    ],
  },
};
