import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'Boiler work in Hamilton follows the age of the housing. Census figures put 27.4% of the city’s homes at 1939 or earlier and the median at 1956, and the historic districts of German Village and Dayton Lane hold 19th-century houses, many built to heat with radiators. Gas here comes from the city’s own utility, not Duke. The repairs we make most are pressure loss, air-bound upstairs radiators, worn circulators and controls patched over the years. You get the price before we change any part.',
  emergencyParagraph:
    'Hamilton winters bring January lows around 23F (NOAA normals, taken at CVG). A boiler that locks out on one of those nights puts babies, older relatives and anyone ill in a cold house fast, and pipes feeding radiators near outside walls can freeze if the outage drags on. Same-day service covers most no-heat calls, Saturday and Sunday too.',
  commonIntro:
    'Hamilton boiler calls come from 19th-century houses in the older neighborhoods and from apartment buildings on one boiler. Most often:',
  localFaqs: [
    {
      q: 'My Hamilton landlord controls the boiler and my apartment is cold. What are my rights?',
      a: 'Hamilton is its own city, so Cincinnati’s 70F rule isn’t the standard here. ORC 5321.04 is: Ohio landlords who supply heat must keep that equipment safe and working and furnish reasonable heat. Send the request in writing and hold onto a copy. We fix boilers, not leases.',
    },
    {
      q: 'Can you replace a boiler in a Hamilton historic district?',
      a: 'Yes. The boiler itself is indoor work. If a replacement needs a new vent through an outside wall in German Village, Dayton Lane or Rossville, that may count as exterior work under the city’s Architectural Design Review Board, so we check with the city first.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Hamilton houses and apartment buildings',
    band1Heading: 'Common Boiler Problems in Hamilton Homes and Apartments',
    commonSituations: [
      'A 19th-century house in German Village or Dayton Lane with upstairs radiators that stay cool',
      'An apartment building on one central boiler with some units colder than others',
      'A steam boiler that sets the pipes banging as the heat comes up',
      'A boiler that locks out on an error code and won’t stay running after a reset',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Hamilton’s old radiator systems often need only a small hand. Air collects at the top of a radiator, so a cold top means bleed it. On hot water heat, the gauge on the boiler should come back up once you top it off after bleeding. Check that the thermostat is set to heat and the boiler’s emergency switch is on. If the house warms, keep your money. Pressure that sinks day after day, a puddle by the boiler, knocking pipes, a lockout or a lazy yellow flame need a technician. Gas smell: get out, no light switches, then phone the city gas utility or 911 from the street.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Hamilton?',
        body: 'A Hamilton house from 1900 can easily run a boiler put in this century, and the sticker on the boiler shows the year. We swap out worn circulators, zone valves, igniters and expansion tanks and leave the rest alone. Once cast iron cracks, the heat exchanger weeps, or the same boiler calls us out each winter, you’ll see a replacement quote next to the repair quote. Have it serviced once a year in September or October; the visit lasts roughly 60 to 90 minutes and covers pressure, tank charge, leak points, safety controls, flame and flue, and air bled from radiators. Building owners on one boiler gain the most.',
      },
    ],
    whyTitle: 'Why Hamilton Homeowners and Landlords Call Us',
    whyParagraph:
      'Hamilton is an old river city where close to half of homes are rented. The technician we send is licensed, insured, background-checked and drug-tested, and you approve a flat-rate price before anything is replaced.',
    sharedFaqs: [
      {
        q: 'How much does boiler repair cost in Hamilton?',
        a: 'What broke decides the price. Bleeding air or replacing a thermocouple is light work; a leaking section on an old cast-iron boiler is heavy work. We diagnose, quote a flat rate and begin only after you approve. There are no overtime fees for nights or weekends.',
      },
      {
        q: 'Should I repair or replace my Hamilton boiler?',
        a: 'If one part failed and the vessel is sound, repair it. A pump or valve is not a reason to buy a boiler. If the vessel or heat exchanger leaks, or you are paying for repairs each winter, we quote replacement beside the repair, and financing is available.',
      },
      {
        q: 'Why are the top-floor radiators cold in my Hamilton house?',
        a: 'In a tall old house the top floor is the farthest from the boiler, so it goes cold first when there is air in the system or the pressure drops. Bleed those radiators and check the gauge. If they stay cold, a stuck radiator valve or a weak circulator pump is the likely cause.',
      },
    ],
  },
};
