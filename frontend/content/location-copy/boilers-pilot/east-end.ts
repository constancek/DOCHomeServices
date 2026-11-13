import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastEnd: LocationServiceCopy = {
  localParagraph:
    'The East End has two kinds of housing. Along Eastern Avenue the homes are old, and Census figures put 54.4% of the neighborhood’s homes at 1939 or earlier; those are the ones with boilers and radiators. The newer homes toward Riverside Drive, mostly built from the 1990s on, generally use ducted heat, so if yours has vents, our furnace repair service fits better. For boilers we see pressure loss, failed pumps and flood-damaged controls, and we price the repair first.',
  emergencyParagraph:
    'About 100 nights a year fall to freezing or below at the CVG station (NOAA normals), and an older East End house without boiler heat cools fast. Babies, older relatives and anyone ill are the people to worry about, and radiator lines suffer in a long cold spell. Most calls get a same-day visit, weekends too.',
  commonIntro:
    'East End boiler calls come from the older houses along Eastern Avenue, many of them close to the river. What we fix most:',
  localFaqs: [
    {
      q: 'The river flooded my East End basement. Is the boiler safe to restart?',
      a: 'Leave it off. The National Weather Service notes basement flooding in the East End once the Ohio reaches about 55.5 feet, and a boiler whose burner or controls sat in water can fail unsafely. Have it inspected and tested before you fire it again.',
    },
    {
      q: 'Does Cincinnati’s rental heat rule cover East End apartments?',
      a: 'Yes, the East End is inside the city. Where the landlord controls the heat, the unit must be held at 70F or above once it stays under 60F outside for 24 hours. Raise it with the landlord in writing. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for older East End houses',
    band1Heading: 'Common Boiler Problems in East End Homes',
    commonSituations: [
      'A basement boiler near Eastern Avenue that needs controls replaced after high water',
      'Pressure that drops a little each day from a slow leak at an old radiator',
      'A two-family where the upper unit only warms when the thermostat is turned way up',
      'A boiler that kettles and rumbles because scale has built up inside',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'First try the checks that cost nothing. Open the bleed valve on any radiator that is cool at the top, then close it when water shows. Look at the boiler gauge; on a hot water system, low pressure after bleeding usually needs a refill. Turn the thermostat up in heat mode and make sure the boiler switch is on. If warmth returns, you are done without us. Call us for pressure that keeps slipping, water around the boiler, rumbling or kettling, an error code or a cold zone. If a carbon monoxide alarm sounds, get everyone out of the house first, then call 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in East End?',
        body: 'Base the decision on the boiler. Its label carries the install date, and a boiler that took river water is a different case from one that simply aged. Pumps, valves, igniters and expansion tanks can be replaced on a sound unit. When the vessel or heat exchanger leaks, a flood ruined more than the controls, or it needs repairs every winter, we quote replacement beside the repair, with financing available. A yearly 60 to 90 minute service before cold weather checks pressure, the expansion tank, safety controls, burner and venting, looks for leaks and bleeds the radiators.',
      },
    ],
    whyTitle: 'Why East End Homeowners Call Us',
    whyParagraph:
      'Most East End homes are owner-occupied, from old houses on Eastern Avenue to newer homes by the river. You get a licensed, insured technician who passed a background check and drug test, and a price approved first.',
    sharedFaqs: [
      {
        q: 'What does an East End boiler repair cost?',
        a: 'The cause sets the cost. Topping up pressure is small; replacing controls damaged by flood water is larger. We diagnose, give you a flat-rate price and only then start, once you have approved it. There are no overtime fees for weekend or evening visits.',
      },
      {
        q: 'Should I replace my East End boiler after a flood?',
        a: 'Not automatically. If only the controls, wiring or pump took water, those can often be replaced. If the burner, vessel or heat exchanger is damaged, or the boiler was already needing a repair every winter, we price replacement next to the repair. Financing is available.',
      },
      {
        q: 'Why are some radiators cold in my East End house?',
        a: 'Air is the likely cause if the top is cold and the bottom warm, so bleed it. A cold radiator on a steam system may have a blocked air vent. If a whole floor is cold, think zone valve or pump, and that is when to call us.',
      },
    ],
  },
};
