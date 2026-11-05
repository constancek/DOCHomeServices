import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'The West End mixes eras, and boilers live in the older part of it. Census figures put 38.4% of homes at 1939 or earlier, including the late-1800s Italianate rows of the Betts-Longworth district; much of the rest went up from the 1960s on and tends toward ducted or electric heat. So our radiator work here is in rowhouses and small apartment buildings, and with 87.1% of homes rented, the person approving it is usually an owner. Diagnosis comes first, then a price.',
  emergencyParagraph:
    'Around 100 nights a year drop to freezing or below in the Cincinnati area by NOAA normals, and a West End rowhouse with a dead boiler loses its warmth fast. Infants, elderly relatives and anyone unwell are the ones to worry about, and a long cold spell without heat can threaten radiator piping. Same-day service covers most calls, weekends too.',
  commonIntro:
    'West End boiler calls come mostly from rowhouses and small apartment buildings on radiators. What comes up most:',
  localFaqs: [
    {
      q: 'I rent a West End rowhouse and the boiler keeps failing. What can I do?',
      a: 'Keep a written record and send each outage to your landlord. Under Cincinnati’s rule, which covers the West End, a landlord who runs the heat must hold the home at 70F or above after outdoor temperatures stay below 60F for 24 hours. We fix boilers, not leases; the owner calls us in.',
    },
    {
      q: 'Does the Betts-Longworth historic district affect boiler work?',
      a: 'A boiler swap inside a Betts-Longworth rowhouse isn’t something the district reviews. Because it is a locally designated district, outside alterations go to the Historic Conservation Board for a Certificate of Appropriateness. If the new boiler would need a fresh vent through a wall, we talk to the city about it before anything is ordered.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for West End rowhouses and apartment buildings',
    band1Heading: 'Common Boiler Problems in West End Homes and Apartments',
    commonSituations: [
      'A late-1800s rowhouse with radiators that heat the front rooms but not the back',
      'One apartment in a six-unit building stuck cold because its zone valve won’t open',
      'Repeated lockouts on the same error code, two or three times a winter',
      'Banging pipes and a hissing vent on an old steam radiator',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'In a West End rowhouse, the owner or a tenant with permission can try the radiator key first: crack the bleed valve on any radiator cold along its top and shut it when water dribbles out. Next, the gauge. A hot water boiler reading below its usual point after bleeding takes a top-up. Then the thermostat setting and the boiler’s on/off switch. Radiators warming up means you can skip us. Pressure that sinks again, puddles, kettling, a yellow flame, lockouts or a cold zone are ours. If you smell gas, leave, skip the switches, and phone the gas company once you’re out.',
      },
      {
        title: 'Boiler Maintenance or Replacement in West End?',
        body: 'West End housing runs from 1800s rowhouses to 1990s apartments, and boilers in both get changed out on their own timeline, so we read the date off the boiler itself. Worn circulators, sticky zone valves, igniters and flooded expansion tanks are repair work on a watertight boiler. Leaks through the vessel, a cast-iron section or the heat exchanger, or a boiler that eats a repair every winter, get a replacement figure written beside the repair figure. For owners, the early-fall service runs an hour to an hour and a half: pressure, tank, leak check, controls, burner, flue, and bleeding.',
      },
    ],
    whyTitle: 'Why West End Landlords and Residents Call Us',
    whyParagraph:
      'In the West End most homes are rented, so the owner approves the work and the tenant lives with the result. We give owners a flat price first, tell tenants what was fixed, and send licensed, insured technicians.',
    sharedFaqs: [
      {
        q: 'How much does boiler repair cost in the West End?',
        a: 'West End jobs are priced by the failed part. Air or a lockout is short work; a pump or zone valve costs more, and a leaking section on an old boiler more again. We name a flat rate once the cause is known and wait for approval. Weekends carry no overtime charge.',
      },
      {
        q: 'Is an old West End boiler worth repairing?',
        a: 'Usually, if it holds water and only one component has gone. Pumps, valves and controls are repairs. A leaking vessel, section or heat exchanger, or a new breakdown every winter, is when we quote replacement beside the fix, with financing available.',
      },
      {
        q: 'Why are some radiators cold in my West End home?',
        a: 'Air sitting at the top of the radiator is the common cause; bleed it until water appears. Low boiler pressure starves the radiators farthest down the line, so check the gauge next. A radiator that still won’t heat may have a stuck valve, or the zone valve or pump is failing.',
      },
    ],
  },
};
