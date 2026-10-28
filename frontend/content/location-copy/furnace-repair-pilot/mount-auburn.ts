import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAuburn: LocationServiceCopy = {
  localParagraph:
    'Mount Auburn furnace calls split between two kinds of building. Census figures put 56.6% of homes at 1939 or earlier, mostly large 19th-century houses now divided into apartments, where one basement gas furnace may serve a single unit or several. The newer buildings, about a fifth of homes built since 2010, lean on electric heat. That mix means one street can need a gas valve and the next a blower motor. We diagnose the furnace, then give you a price to approve before any repair.',
  emergencyParagraph:
    'When the heat goes out, check first on babies, older relatives and anyone sick in the house. NOAA normals at CVG average roughly 100 nights a year at freezing or below, and a cold house risks frozen pipes. Gas furnaces, electric furnaces and heat pumps in Mount Auburn get same-day repair on most calls, Saturdays and Sundays too.',
  commonIntro:
    'In Mount Auburn, the older converted houses mostly run gas furnaces, and the newer apartment buildings mostly run electric. Here’s what we fix most often:',
  localFaqs: [
    {
      q: 'Does the Prospect Hill historic district affect furnace work?',
      a: 'Repairs happen indoors, so they don’t touch the exterior that the city’s Historic Conservation Board reviews in Prospect Hill. A replacement can be different if it needs a new vent through an outside wall of the house. In that case we check with the city before we cut anything.',
    },
    {
      q: 'My Mount Auburn apartment has no heat. What should I do?',
      a: 'Tell the landlord or manager in writing right away. In Cincinnati, rentals whose tenants can’t control the heat must be kept at 70 degrees or warmer inside once it has stayed under 60 outdoors for 24 hours. We fix furnaces, not leases, so we usually work for the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Mount Auburn furnace repair for converted houses and apartments',
    band1Heading: 'Common Furnace Problems in Mount Auburn Homes and Apartments',
    commonSituations: [
      'One basement gas furnace heating two apartments unevenly',
      'An old masonry chimney causing a newer furnace to shut down',
      'An electric furnace in a newer building blowing cool air',
      'A third-floor unit in a Victorian house that never warms up',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Run through the basics before booking a visit. The thermostat should read heat, with working batteries and a setting above the room temperature. Look for a switch on or near the furnace that someone flipped off, a tripped breaker and a filter gone gray. Close the furnace door firmly too, because a loose panel stops many furnaces from running. If heat comes back, that’s the end of it and you don’t need us. If it doesn’t, or the furnace starts and stops, call. A gas smell or a carbon monoxide alarm means everyone out first, then call from outside. We find the cause, price it, and test after.',
      },
      {
        title: 'Repair or Replace Your Mount Auburn Furnace?',
        body: 'Look at the furnace in the basement, not the age of the house above it. Many Mount Auburn houses date to the 1800s but have had several furnaces, and the current one may be young enough that a new igniter, pressure switch or blower motor is the sensible fix. A cracked heat exchanger is a carbon monoxide risk, so we won’t run that furnace, and the talk turns to replacement. A new furnace needs a mechanical permit through the city’s Department of Buildings & Inspections, which we file. Meanwhile, a Duke Energy Ohio gas bill that jumps in steady weather often means the furnace is short-cycling.',
      },
    ],
    whyTitle: 'Why Mount Auburn Homeowners and Landlords Call Us',
    whyParagraph:
      'Converted houses with shared basements and newer electric buildings are routine work for us in Mount Auburn. Our technicians pass background checks and drug tests, the price is fixed before work begins, and there are no overtime fees.',
    sharedFaqs: [
      {
        q: 'How much is furnace repair in Mount Auburn?',
        a: 'It comes down to which part failed, and testing tells us that. Replacing a flame sensor is quick work, while tracing a venting fault up an old chimney takes longer. Either way you approve a flat-rate price before we touch anything, and financing is available on bigger repairs.',
      },
      {
        q: 'Repair or replace an old furnace in Mount Auburn?',
        a: 'Repair when one component failed and the heat exchanger is sound, even in a very old house. Replace when the heat exchanger is cracked, because carbon monoxide is the danger, or when the repairs keep coming every season. We show you both prices before you decide.',
      },
      {
        q: 'Why is my Mount Auburn furnace blowing cold air?',
        a: 'Confirm the thermostat is on heat and the fan is on auto, then check the filter. Gas furnaces that blow cold have usually switched the burners off on a safety, often a dirty flame sensor or a blocked flue. Electric furnaces blow cold when an element or relay fails.',
      },
    ],
  },
};
