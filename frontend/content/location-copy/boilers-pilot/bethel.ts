import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'Bethel has more boiler work than its size suggests. Census figures put 26.6% of village homes at 1939 or earlier, and over a third of units sit in buildings of three or more, where one boiler can heat several apartments. Gas and electric heat split the village almost evenly, so the boilers we see are mostly gas-fired. Typical faults are pressure loss, air in upstairs radiators, and pumps or zone valves that have worn out. We find the cause and give you a price to approve first.',
  emergencyParagraph:
    'When a Bethel boiler goes out, cold sets in fast; the area sees about 100 nights a year at or below freezing (NOAA, CVG station). Babies, older people and anyone recovering from illness feel it first, and a long freeze can threaten radiator pipes. We reach most no-heat calls the same day, Saturdays and Sundays included.',
  commonIntro:
    'In Bethel, boiler calls are split between older houses and the village’s small apartment buildings. These come up most:',
  localFaqs: [
    {
      q: 'I rent in Bethel and the heat is out. Can I call you directly?',
      a: 'You can call, but in most rentals the landlord books and pays for the repair. Ohio law (ORC 5321.04) has landlords keep the heat they supply working and reasonable. Report the outage in writing and keep a copy. We fix boilers, not leases, and we’re happy to work with your landlord.',
    },
    {
      q: 'Does a Bethel apartment building boiler need a state inspection?',
      a: 'It depends on size. Ohio law (ORC 4104.04) exempts boilers in private homes and in buildings with fewer than six units, as long as steam runs at 15 psi or under and hot water at 160 psi or under. Owners of larger Bethel apartment buildings keep state inspections current.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Bethel homes and apartment buildings',
    band1Heading: 'Common Boiler Problems in Bethel Homes and Apartments',
    commonSituations: [
      'A shared boiler in a small apartment building that leaves the top-floor units cold',
      'Upstairs radiators in an older village house that need bleeding every few weeks',
      'A zone valve stuck shut so one apartment or floor gets no heat',
      'A pressure gauge that slides down as the relief valve weeps',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Run a radiator key over each radiator whose top half stays cold, catching drips in a cup. Glance at the boiler gauge; on hot water heat, a reading under its usual mark after bleeding means add water. Thermostat on heat, boiler power switch on. Heat back means you can skip the visit. Tenants on a building boiler should leave the boiler alone and tell management. Bring us in for a gauge that slips day after day, weeping valves, knocking, a lockout code, or a flame gone yellow. Any gas odor: out of the building, hands off switches, gas company called from the sidewalk.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Bethel?',
        body: 'The date plate on a Bethel boiler, not the age of the house, tells you how old it is. Swapping a circulator, zone valve, igniter or expansion tank fixes many winter breakdowns and keeps a sound boiler going. If water seeps from the vessel, a cast-iron section splits or the heat exchanger leaks, or the building has needed boiler work year after year, we quote a new boiler next to the fix. Owners of small apartment buildings on one boiler should book service each fall: roughly an hour to an hour and a half to test pressure, the expansion tank, safety controls, burner and vent, find leaks and bleed radiators.',
      },
    ],
    whyTitle: 'Why Bethel Residents and Landlords Call Us',
    whyParagraph:
      'About half of Bethel rents, so we hear from tenants, landlords and owners alike. You get a licensed, insured, drug-tested technician, upfront flat-rate pricing and no overtime charges for evenings or weekends.',
    sharedFaqs: [
      {
        q: 'What does boiler repair run in Bethel?',
        a: 'The diagnosis decides it. Bleeding air or swapping a failed igniter is quick; replacing a leaking section on an old cast-iron boiler takes much longer. Once we know the cause, you get a flat-rate quote, and nothing is replaced until you sign off on it.',
      },
      {
        q: 'Should a Bethel landlord repair or replace an old boiler?',
        a: 'Repair while the vessel is sound and the fault is one part, like a pump, valve or control. Replace when the vessel or heat exchanger leaks or the building needs boiler repairs every winter. We price both side by side, and financing is available for the replacement.',
      },
      {
        q: 'Why are some radiators cold in my Bethel apartment?',
        a: 'Air at the top of the radiator is the usual reason, and bleeding it often fixes the problem. In a building on one boiler, low pressure or a weak pump leaves the units farthest from the boiler cold first. If bleeding doesn’t help, tell management so they can have the system checked.',
      },
    ],
  },
};
