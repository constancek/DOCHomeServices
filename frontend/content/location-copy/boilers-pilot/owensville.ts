import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const owensville: LocationServiceCopy = {
  localParagraph:
    'Most homes in Owensville don’t run on a boiler. Census figures date the typical house in the village to 1974, and only 5.8% went up before 1940, so electric heat and forced air are what most people here have. The boilers we work on sit in those older village houses and in a few of the small apartment buildings. If your heat comes through ducts, our furnace repair page is the better fit. For radiator systems, we track down the fault and quote it before a wrench comes out.',
  emergencyParagraph:
    'A boiler that quits in Owensville on a January night, when the normal low near CVG is about 23F (NOAA), leaves a cold house within hours. That matters most for babies, older relatives and anyone sick. Radiator piping can also be at risk if the cold lasts. We get to most no-heat calls the same day, weekends included.',
  commonIntro:
    'Boiler calls in Owensville come from older single homes and a few apartment buildings on one boiler. What we find most:',
  localFaqs: [
    {
      q: 'I rent in Owensville and my radiators are cold. Who fixes it?',
      a: 'Your landlord. Owensville is outside Cincinnati, so the city’s 70F rule does not reach here, but Ohio law (ORC 5321.04) has landlords keep the heating they supply working and provide reasonable heat. Put the request in writing. We fix boilers, not leases; the owner usually books us.',
    },
    {
      q: 'My Owensville place has baseboard heat. Is that a boiler?',
      a: 'Not always. Electric baseboard runs off the house wiring with no boiler behind it, and an electrician handles those. Hot water baseboard looks similar but connects by copper pipe to a boiler with a pressure gauge. If you can trace pipes back to a boiler, that’s our work.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for older Owensville homes and apartments',
    band1Heading: 'Common Boiler Problems in Owensville Homes',
    commonSituations: [
      'An older village house where the upstairs radiators stay cool after the first floor warms',
      'A small apartment building on one boiler with some units colder than others',
      'A hot water baseboard loop that gurgles and loses heat at the far end',
      'A boiler that locks out on an error code on the first cold morning of fall',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'In Owensville, a radiator or baseboard loop that’s cold along its top usually just has air in it; open the bleeder until water comes. Read the boiler gauge next, and on hot water heat refill to the normal mark if it dropped. Then check the thermostat is set to heat and the boiler switch hasn’t been turned off. Warm rooms afterward mean we don’t need to come. Ring us for a gauge that won’t hold, water on the floor by the boiler, banging pipes, a lockout code or a yellow flame. Gas smell: leave, don’t touch a switch, phone the gas company outside. We diagnose, explain and quote before work.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Owensville?',
        body: 'Check the plate on the boiler for its install year rather than going by the house. Circulators, igniters, zone valves and expansion tanks fail and get replaced; that’s routine repair even on an older boiler. A weeping vessel or heat exchanger, or a boiler that breaks down winter after winter, is when a replacement price goes on the table next to the repair price. If you own a small Owensville apartment building on one boiler, book service every fall. Plan on 60 to 90 minutes for us to test pressure and the expansion tank, trace leaks, run safety controls, check burner and venting, and bleed radiators.',
      },
    ],
    whyTitle: 'Why Owensville Residents and Landlords Call Us',
    whyParagraph:
      'In a village where most people rent, the call often comes from a landlord or a tenant. Either way, a licensed, insured, background-checked technician shows up, and the flat-rate price is agreed before work starts.',
    sharedFaqs: [
      {
        q: 'What does boiler repair cost in Owensville?',
        a: 'That depends on what failed. Bleeding air or swapping a thermocouple is small; a cracked section or leaking heat exchanger is not. We diagnose first, then give a flat-rate price, and nothing gets replaced until you say yes. Evening and weekend calls carry no overtime charge.',
      },
      {
        q: 'Should I repair or replace an Owensville boiler?',
        a: 'Repair it when one part has failed and the boiler itself holds water. A pump, valve or control rarely justifies a new unit. If the vessel leaks or you are calling us every winter, we quote both options side by side, and financing is available on replacement.',
      },
      {
        q: 'Why is one radiator in my Owensville home cold?',
        a: 'Trapped air is the most common reason, and bleeding the radiator fixes it. If it stays cold, check that its valve is open. A radiator that still won’t heat after that points to a stuck valve, a blocked line or a pump that can’t push water to the end of the loop.',
      },
    ],
  },
};
