import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const avondale: LocationServiceCopy = {
  localParagraph:
    'Avondale boiler calls mostly come from two- to four-unit buildings and older houses. Census figures show 43.0% of homes here predate 1940, and about a quarter of units are in three- and four-family buildings, the kind often heated by one gas boiler. Newer apartment buildings mostly run electric heat instead. Typical repairs are lost pressure, air in radiators and failed pumps or controls. We find which one it is and give the owner a price before work starts.',
  emergencyParagraph:
    'Cincinnati sees about 100 nights a year at or below freezing (NOAA normals, CVG). When a shared boiler in an Avondale building quits on one, every household in it loses heat, and babies, older residents and anyone ill are the most at risk. Radiator pipes can be in danger in a long outage. Most calls get same-day service, weekends too.',
  commonIntro:
    'Avondale boiler calls are mostly rental buildings of two to four units on a single boiler. What we find:',
  localFaqs: [
    {
      q: 'I rent in a managed Avondale apartment building and the heat is off. Can I hire you?',
      a: 'Report it to the management office instead, and put it in writing. In larger managed buildings the owner arranges repairs, often through its own contractor. Cincinnati’s rule requires 70F indoors when the landlord controls the heat and it has stayed under 60F outside for 24 hours. We fix boilers, not leases.',
    },
    {
      q: 'Does my Avondale three-family need a boiler inspection from the state?',
      a: 'No. ORC 4104.04 exempts boilers in private homes and in buildings with fewer than six units, provided steam pressure stays at 15 psi or less and hot water at 160 psi or less. That covers most Avondale two- to four-unit buildings, so maintenance is up to the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Avondale rentals and houses',
    band1Heading: 'Common Boiler Problems in Avondale Homes and Apartments',
    commonSituations: [
      'A three-family on one boiler where the top unit complains of cold first',
      'A boiler that trips its relief valve and leaves a puddle on the basement floor',
      'Radiators in an older house off Reading Road that only heat halfway up',
      'A circulator pump that hums but no longer moves water through the system',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Tenants and owners can try a few things first. Bleed any radiator cold across its top. Owners should read the boiler gauge, refill a hot water system that sits low after bleeding, and check the boiler switch. Tenants can confirm the thermostat is set to heat. If that brings heat back, there is nothing to repair. Call a technician when the pressure drops again, water leaks from the boiler, it locks out on an error, or one floor stays cold. If a carbon monoxide alarm sounds, get everyone out and call 911 from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Avondale?',
        body: 'Weigh the boiler itself. Its label shows the install year, and plenty of 1910s Avondale buildings run far younger boilers. On those, a new pump, zone valve, igniter or expansion tank is the fix. If the vessel or a section leaks, or the boiler has needed repairs each winter, we price a replacement alongside the repair, and financing is available. For landlords, a service visit of around 60 to 90 minutes before the cold sets in checks pressure, the expansion tank, safety controls, burner and vent, and bleeds the radiators in every unit.',
      },
    ],
    whyTitle: 'Why Avondale Landlords and Residents Call Us',
    whyParagraph:
      'Three in four Avondale homes are rented, and most of our boiler calls come from landlords. Each technician is licensed, insured, background-checked and drug-tested, and you sign off on a flat price before work.',
    sharedFaqs: [
      {
        q: 'What does boiler repair cost in Avondale?',
        a: 'It comes down to the fault. Bleeding air out of a system or swapping a thermocouple is a short call; a leaking cast-iron section is a bigger one. We diagnose, quote a single flat rate and do nothing until it is approved.',
      },
      {
        q: 'Repair or replace an Avondale rental boiler?',
        a: 'Most of the time, repair: when the boiler is dry and one part failed, that part gets replaced. Leaks from the heat exchanger, or a boiler that breaks down every heating season, are when we show you a replacement price next to the repair.',
      },
      {
        q: 'Why are radiators in one Avondale unit cold?',
        a: 'In a multi-family on one boiler, the unit farthest from the basement goes cold first when air builds up or pressure drops. Bleed the radiators and check the gauge. If that unit stays cold, look at its zone valve or the circulator pump.',
      },
    ],
  },
};
