import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Most homes in Winton Hills are public housing run by the Cincinnati Metropolitan Housing Authority at Winton Terrace and Findlater Gardens, and nearly every household rents. If you live there, heating repairs go through a CMHA work order, not a private company. Our boiler work here is in the privately owned houses and two-families, and Census figures put the median home at 1955. On those boilers we find the fault and give the owner a price before any work.',
  emergencyParagraph:
    'In a Winton Hills cold snap, with about 100 nights a year at or below freezing at CVG by NOAA’s count, a house with no heat is hard on babies, older relatives and anyone ill. Pipes feeding radiators can be at risk. Owners get same-day service on most calls, weekends included. CMHA tenants should put in a work order.',
  commonIntro:
    'Winton Hills boiler calls come from privately owned houses and small rentals, not the CMHA complexes. The problems we see most:',
  localFaqs: [
    {
      q: 'I live in Winton Terrace and my heat is out. Can I call you?',
      a: 'Not directly. CMHA or its property manager handles repairs in its units, so put in a work order and keep a record of it. Cincinnati’s rule says a landlord who controls the heat must keep units at 70F or more once it stays below 60F outside for 24 hours. We fix boilers, not leases.',
    },
    {
      q: 'My Winton Hills house has vents, not radiators. Do I need boiler service?',
      a: 'No. Vents mean forced air, and many homes here heat that way, often with electricity. Our furnace repair team handles those. Boiler service is for homes with radiators or hot water baseboard, which tend to be the older houses and two-families in the neighborhood.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Winton Hills houses and rentals',
    band1Heading: 'Common Boiler Problems in Winton Hills Homes and Apartments',
    commonSituations: [
      'An older two-family where one floor heats and the other stays cold',
      'A rental boiler that throws a fault code the first week tenants turn the heat on',
      'Radiators that knock and bang as the heat comes up in the morning',
      'A rental boiler that loses pressure between the landlord’s visits',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Owners of Winton Hills rentals can rule out the cheap causes by phone. If a radiator is hot near the floor and cold along its crown, there’s air in it; release it at the bleed screw until water spits. Next, the boiler’s dial: if a hot water system reads low after bleeding, it needs water from the fill valve. The thermostat must be in heating mode and the service switch on. If that sorts it, save the call-out. Book us for a dial that keeps sinking, seeping, kettling, a lockout code or a yellow flame. A carbon monoxide alarm means everyone leaves first.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Winton Hills?',
        body: 'For rental owners, the question is the boiler’s nameplate date and condition, not the building’s age. Circulators, zone valves, igniters and expansion tanks are routine parts. When the vessel or heat exchanger seeps, or tenants lose heat every January, we price a new boiler next to the repair so you can compare. A September tune-up costs less than an emergency with tenants waiting: about 60 to 90 minutes to bleed the radiators, find seeps, look over the flue, clean the burner, prove the safety controls and test pressure and the expansion tank. Book it before the first frost.',
      },
    ],
    whyTitle: 'Why Winton Hills Owners and Landlords Call Us',
    whyParagraph:
      'Almost every home here is a rental, so we often work for owners with tenants waiting on heat. Every technician is licensed, insured, background-checked and drug-tested, and the owner approves a flat-rate price before we start.',
    sharedFaqs: [
      {
        q: 'How much does a boiler repair cost for a Winton Hills rental?',
        a: 'The fault decides it. Bleeding air or replacing a thermocouple is quick, while a leaking section on an old cast-iron boiler is a big job. We diagnose first, quote a flat rate, and start once the owner approves. There are no overtime fees on weekend calls.',
      },
      {
        q: 'Should a Winton Hills landlord repair or replace the boiler?',
        a: 'Repair it when one part has failed and the boiler itself is tight. Replace it when the vessel leaks or repairs keep coming every winter, since tenants lose heat each time it fails. We price both options side by side, and financing is available.',
      },
      {
        q: 'Why do some radiators in my Winton Hills unit stay cold?',
        a: 'Air is the most common reason, and bleeding fixes it. Low pressure on a hot water system leaves the farthest radiators cold first. If that doesn’t help, a stuck valve or failing pump is likely. Tenants should report cold radiators to the landlord or manager in writing.',
      },
    ],
  },
};
