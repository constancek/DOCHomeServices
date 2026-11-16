import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastPriceHill: LocationServiceCopy = {
  localParagraph:
    'East Price Hill has two kinds of housing, and only one is usually heated by a boiler. Some parts of the neighborhood were built mostly before 1940, others mostly in the 1960s, and Census figures put 40.1% of all homes at 1939 or earlier. Our boiler calls come from that older stock: radiators in doubles, four-family buildings and larger apartment houses. Homes with ducts belong on our furnace page. For radiators, we find the failed part and price it before work begins.',
  emergencyParagraph:
    'With about 100 nights a year at or below freezing around Cincinnati (NOAA normals), a boiler outage in East Price Hill seldom lands on a mild night. A cold apartment is hardest on babies, older relatives and anyone who is ill, and long outages can put radiator pipes at risk. Most are seen the same day, weekends too.',
  commonIntro:
    'In East Price Hill the boiler calls come from older doubles, small multi-family buildings and apartment houses with one central boiler. What we see most:',
  localFaqs: [
    {
      q: 'I live on Warsaw Avenue in the historic district. Does that affect a boiler replacement?',
      a: 'The boiler itself, no. The Warsaw Avenue district is a local historic district, so changes to a building’s exterior need city review. That only matters if a new boiler needs a new vent through an outside wall, and in that case we check with the city before any work on the outside.',
    },
    {
      q: 'My East Price Hill landlord says the heat is fine, but my apartment is cold. What are the rules?',
      a: 'East Price Hill is in Cincinnati, where a landlord who controls the heat must keep the unit at 70F or more once it stays below 60F outside for 24 hours. Measure the temperature, write it down and send it to the landlord. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for East Price Hill homes and apartment buildings',
    band1Heading: 'Common Boiler Problems in East Price Hill Homes and Apartments',
    commonSituations: [
      'A four-family building on one boiler where the back units never get warm enough',
      'Radiator pipes that bang for the first ten minutes after the heat comes on',
      'A boiler pressure gauge that drops a little lower each morning',
      'A gas boiler that tries to light, fails and locks out on an error code',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'A cold radiator is not always a broken boiler. If it is warm low down and cold up top, bleed the air out. If your hot water boiler’s gauge reads under its usual mark after that, add water to bring it back. Check the thermostat is set to heat and the boiler switch hasn’t been knocked off. Tenants in a building with a central boiler should report it rather than touch the boiler. Call us for falling pressure, leaks, kettling, a yellow flame, a lockout or a dead zone. For any gas smell, get out, touch no switches, and call the gas company from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in East Price Hill?',
        body: 'A 1930s building in East Price Hill may be on its second or third boiler, so the useful date is on the boiler’s label. On a boiler that holds water, a failed circulator, zone valve, igniter or expansion tank is a repair, and we quote it as one. When a section or the heat exchanger leaks, or the same boiler needs a visit every winter, we price a new one beside the repair. Landlords with one boiler for several units have the most riding on a fall service: 60 to 90 minutes on pressure, expansion tank, leaks, safety controls, burner and venting, plus bleeding radiators.',
      },
    ],
    whyTitle: 'Why East Price Hill Residents and Landlords Call Us',
    whyParagraph:
      'East Price Hill has more renters than owners and plenty of multi-family buildings. Owners get a flat price to approve before work; tenants get a straight explanation. Every technician is licensed, insured and background-checked.',
    sharedFaqs: [
      {
        q: 'How much is boiler repair in East Price Hill?',
        a: 'We price the fault, not the building. A lockout or air in the system is quick to clear; a new pump or a leaking cast-iron section takes more time and parts. You get a flat-rate figure after we diagnose it, and the work starts only when you approve.',
      },
      {
        q: 'Should an old East Price Hill boiler be repaired or replaced?',
        a: 'If the vessel is tight and one part failed, repair it, even on an old boiler. If it leaks from the vessel or heat exchanger, or keeps failing each winter, we give you both prices side by side. Financing is available if you replace it.',
      },
      {
        q: 'Why do some radiators stay cold in my East Price Hill home?',
        a: 'Air is the common cause, and it collects at the top of the radiator. Bleed it, check the boiler pressure, and give the system an hour. Radiators farthest from the boiler go cold first when pressure is low. If one still won’t heat, its valve or a zone valve is likely stuck.',
      },
    ],
  },
};
