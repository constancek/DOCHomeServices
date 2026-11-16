import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const arlingtonHeights: LocationServiceCopy = {
  localParagraph:
    'Arlington Heights is a small village, about 448 homes inside the split lanes of I-75, and much of it is old: Census figures show 64.7% of homes built in 1939 or earlier. Houses from that era were built to heat with boilers and radiators, and many still do. Others have been switched to forced air over the years, and those owners want furnace repair. For radiator homes, we find the fault and settle the price with you before any work.',
  emergencyParagraph:
    'NOAA’s normals for CVG list January lows of about 23F. In Arlington Heights, a boiler that dies overnight in that weather leaves a house cold by morning, which is hardest on babies, older relatives and anyone sick. A long freeze can also threaten radiator piping. Most no-heat calls get a same-day visit from us, weekends included.',
  commonIntro:
    'Arlington Heights boiler work is almost all in pre-war houses and small rentals. The calls we get most:',
  localFaqs: [
    {
      q: 'I rent in Arlington Heights and the heat isn’t working. What is the landlord required to do?',
      a: 'Under ORC 5321.04, the landlord owns that problem if the heating came with the rental: the equipment must be kept in good and safe working order, with reasonable heat. Cincinnati’s 70F ordinance stops at the city line and doesn’t reach Arlington Heights. Put your request in writing. We fix boilers, not leases.',
    },
    {
      q: 'Does a boiler in an Arlington Heights house need a state inspection?',
      a: 'Not in a private home or a building of five units or fewer. ORC 4104.04 exempts those boilers from Ohio’s inspection program when steam runs no higher than 15 psi and hot water no higher than 160 psi. That covers the village’s houses and small rentals, so keeping up the yearly service is the owner’s job.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Arlington Heights homes',
    band1Heading: 'Common Boiler Problems in Arlington Heights Homes',
    commonSituations: [
      'A pre-war house where one bedroom radiator has been cold since the heat came on in fall',
      'A hot water boiler whose gauge drops back after every refill',
      'A small rental where the tenant reports banging pipes each morning',
      'An old boiler that shuts off on a flame fault and won’t relight',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Plenty of cold-house calls end with the owner fixing it before we arrive. A radiator chilly along its upper edge is holding air; crack its bleed screw with a radiator key until water dribbles out. Afterward, read the dial on the boiler front, and if a hot water system has slipped low, feed in water through the fill valve. The thermostat needs to be in heating mode and the boiler’s service switch on. If it’s still cold because the dial keeps sinking, water is pooling, a lockout code shows or the flame looks yellow, that’s ours. A carbon monoxide alarm means everybody out, then phone.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Arlington Heights?',
        body: 'Arlington Heights houses are mostly pre-war, but the boiler inside one might be far newer, so we read its nameplate before talking money. Circulators, zone valves, igniters and expansion tanks wear out and get swapped. Water seeping from the vessel, a cast-iron section or the heat exchanger changes the conversation, as does a boiler that needs us each January, and then you see a replacement quote alongside the repair. An autumn tune-up runs 60 to 90 minutes: we prove the safety controls, test the expansion tank and system pressure, look for seeps, clean the burner, inspect the flue and bleed each radiator.',
      },
    ],
    whyTitle: 'Why Arlington Heights Residents and Landlords Call Us',
    whyParagraph:
      'Arlington Heights is split close to evenly between owners and renters. Our technicians are licensed, insured, background-checked and drug-tested, and no work starts until whoever is paying approves the flat-rate price.',
    sharedFaqs: [
      {
        q: 'What will a boiler repair cost in Arlington Heights?',
        a: 'That depends on what we find. Clearing air or a lockout is a short visit, replacing a pump or zone valve is more, and a leaking cast-iron section is the largest repair. You get a flat-rate quote after diagnosis, and we start once you approve it.',
      },
      {
        q: 'Should I repair or replace my Arlington Heights boiler?',
        a: 'If it doesn’t leak and one part has worn out, repair it. If the heat exchanger, a section or the vessel leaks, or you’re calling for repairs each winter, we quote replacement beside the repair so you can weigh the two. Financing is available.',
      },
      {
        q: 'Why are some radiators cold in my Arlington Heights home?',
        a: 'Usually air, which bleeding clears. Low pressure on a hot water boiler leaves the radiators farthest away cold first, so check the gauge. A radiator that stays cold after that has a stuck valve or isn’t getting flow from the pump, and we find which.',
      },
    ],
  },
};
