import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bondHill: LocationServiceCopy = {
  localParagraph:
    'Much of Bond Hill was built before 1960. Census figures put 44.5% of homes at 1939 or earlier and another 28.7% at 1940 to 1959, the years when a boiler and radiators were a normal way to heat a house. Besides single houses there are hundreds of doubles and three- and four-unit buildings, some on one shared boiler. Most of our calls are cold radiators, lost pressure and failed pumps or zone valves, each priced and approved before we start.',
  emergencyParagraph:
    'A cold house is hardest on babies, older relatives and anyone ill, and Bond Hill sees about 100 nights a year at or below freezing by NOAA’s count. If a boiler stays off through a cold snap, radiator pipes can be at risk as well. Most Bond Hill no-heat calls are handled the same day, Saturday and Sunday included.',
  commonIntro:
    'Bond Hill boiler calls come from single houses, doubles and small three- and four-unit buildings. The usual problems:',
  localFaqs: [
    {
      q: 'My house is in the Bella Vista Historic District. Can you still replace my boiler?',
      a: 'Yes. Bella Vista is a local historic district, but the boiler sits in the basement and isn’t an exterior change. If a new boiler needs a vent through an outside wall, we check with the city before cutting, since exterior work on those Tudor homes can need review.',
    },
    {
      q: 'I rent in a Bond Hill double and the heat is off. What is my landlord required to do?',
      a: 'Cincinnati’s heat rule covers Bond Hill. If your landlord runs the boiler, your unit has to reach at least 70F after 24 hours of outdoor temperatures under 60F. Tell the owner in writing, keep a copy, and leave the booking to them. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Bond Hill houses and doubles',
    band1Heading: 'Common Boiler Problems in Bond Hill Homes',
    commonSituations: [
      'A double where one boiler heats both units and the upstairs tenant reports cold radiators',
      'A 1940s house whose boiler pressure creeps up until the relief valve lets water go',
      'A circulator pump seized after sitting idle all summer',
      'A zone valve stuck shut, leaving one floor with no heat at all',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'In a Bond Hill house or double, start with the radiators. One that’s warm low down and cold up top has air in it: open the bleed valve with a radiator key and close it once water appears. Bleeding lowers pressure, so look at the gauge and add water to a hot water boiler that now reads under its mark. The thermostat needs to be on heat, and the boiler’s switch on. Heat back after that means no visit. Book us when pressure keeps falling, water gathers by the boiler, the flame burns yellow, pipes bang, or it locks out. Gas smell: get out, then call the gas company.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Bond Hill?',
        body: 'What matters is the boiler’s age and condition, and its rating plate shows the install year. A Bond Hill house from the 1940s may have a boiler far newer than the house. A failed circulator, zone valve, igniter or expansion tank gets repaired; we price replacement beside the repair when the vessel, a section or the heat exchanger leaks, or when breakdowns come every winter. In a double or a four-unit building on one boiler, the yearly service matters more: about 60 to 90 minutes before the cold, covering pressure, expansion tank, safety controls, burner, venting and leaks, plus bleeding.',
      },
    ],
    whyTitle: 'Why Bond Hill Homeowners and Landlords Call Us',
    whyParagraph:
      'Bond Hill is split close to evenly between owners and renters, and we work for both. Expect a licensed, insured technician who has passed a background check and drug test, and a price agreed first.',
    sharedFaqs: [
      {
        q: 'What does a Bond Hill boiler repair usually cost?',
        a: 'There isn’t one price, because the fault drives it. Replacing an igniter or clearing air is a smaller job than replacing a circulator or fixing a leaking section. We find the problem, give you one flat-rate number, and do nothing until you approve it. No overtime fees on weekends.',
      },
      {
        q: 'Repair or replace the boiler in my Bond Hill home?',
        a: 'Repair when a single part has failed on an otherwise solid boiler. Replace when the boiler body or heat exchanger leaks, or when it has needed a repair every winter for years. We quote both side by side so the choice is yours, and financing is available on a new boiler.',
      },
      {
        q: 'Why is one floor of my Bond Hill house colder than the other?',
        a: 'If the cold floor is upstairs, air or low pressure is the usual cause: bleed the radiators and top up a hot water system. If a whole floor gets no heat at all, the zone valve for that floor may have stuck shut, which is a repair for us.',
      },
    ],
  },
};
