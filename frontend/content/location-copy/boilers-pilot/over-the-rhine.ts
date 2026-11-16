import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const overTheRhine: LocationServiceCopy = {
  localParagraph:
    'Boiler work in Over-the-Rhine is mostly in 19th-century apartment buildings, where one boiler heats several units through radiators. Census figures put 70.1% of homes at 1939 or earlier, and 85.7% are in buildings with two or more units. Nearly half heat with electricity, so the boilers we see are in the buildings that kept their radiators. We find the fault, explain it to the owner or manager, and price it before starting.',
  emergencyParagraph:
    'An apartment building boiler that fails in January leaves every unit cold at once, and NOAA normals put Cincinnati’s January low near 23F. Babies, older residents and anyone who is ill are most at risk, and in a long outage the radiator pipes can be too. Most boiler calls in Over-the-Rhine are seen the same day, weekends included.',
  commonIntro:
    'Over-the-Rhine boiler calls come from three- to nine-unit buildings, larger apartment houses and a few single rowhouses. The usual faults:',
  localFaqs: [
    {
      q: 'My Over-the-Rhine apartment is cold and the building has one boiler. What should I do?',
      a: 'Tell the landlord or property manager in writing; if the building has a boiler service contract, they call that company first. Cincinnati requires landlords who control the heat to keep units at 70F or more once it stays below 60F outside for 24 hours. We fix boilers, not leases.',
    },
    {
      q: 'Does a new boiler in an Over-the-Rhine building need historic review?',
      a: 'The boiler is indoor equipment, so no. Over-the-Rhine is a local historic district, where exterior changes need a Certificate of Appropriateness from the city. A new vent through a street-facing wall could count, so if a replacement needs one, we check with the city before planning it.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Over-the-Rhine apartment buildings',
    band1Heading: 'Common Boiler Problems in Over-the-Rhine Homes and Apartments',
    commonSituations: [
      'A five-unit building where the top apartments stay cold on the coldest nights',
      'A central boiler that locks out overnight and leaves the whole building without heat',
      'Radiator valves in an old building that leak at the packing nut',
      'A boiler that loses pressure because of a leak somewhere in decades-old piping',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'In a building with one boiler, tenants report the problem and the owner or manager does the checks. Bleed any radiator cold at the top. A hot water boiler that reads low after bleeding may just need filling. Make sure the thermostat is calling and the boiler switch is on. If the building warms up, we aren’t needed. We are needed when pressure keeps dropping, water shows at the boiler or a valve, it bangs, a code locks it out or one zone stays cold. On any gas smell, everyone leaves, nobody touches a switch, and someone calls the gas company from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Over-the-Rhine?',
        body: 'A 19th-century building can have a boiler installed last decade, so the label on the boiler is what we go by. On a sound boiler, pumps, zone valves, igniters and expansion tanks are repairs. A leaking section, vessel or heat exchanger, or a boiler that needs a call every winter, is when we price replacement next to the repair. With several units on one boiler, the yearly service is worth scheduling before the first cold week: about 60 to 90 minutes checking pressure, the expansion tank, leaks, safety controls, burner and venting, and bleeding radiators in each unit.',
      },
    ],
    whyTitle: 'Why Over-the-Rhine Landlords and Residents Call Us',
    whyParagraph:
      'Most Over-the-Rhine homes are rented apartments in older buildings. Owners and property managers get a flat price to approve before work and no overtime fees; every technician is licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'How much does boiler repair cost in Over-the-Rhine?',
        a: 'The fault sets it, not the size of the building. Bleeding air or clearing a lockout is a short job; a circulator pump, a zone valve or a leaking section takes more. After the diagnosis you get a flat-rate quote to approve, and nothing is replaced until you do.',
      },
      {
        q: 'Should we repair or replace the boiler in our Over-the-Rhine building?',
        a: 'Repair it when one part has failed and the boiler holds water. Replace it when a section, the vessel or the heat exchanger leaks, or when it needs work every winter. We price both so the owner can compare, and financing is available.',
      },
      {
        q: 'Why are some radiators cold in my Over-the-Rhine apartment?',
        a: 'In a multi-unit building, air in the radiators and low boiler pressure are the usual causes, and the units farthest from the boiler feel it first. Report which rooms are cold. If bleeding and topping up don’t fix it, we check radiator valves, zone valves and the pump.',
      },
    ],
  },
};
