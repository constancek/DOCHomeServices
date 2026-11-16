import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const aurora: LocationServiceCopy = {
  localParagraph:
    'Aurora keeps a lot of old housing: Census figures count 38.8% of homes as built in 1939 or earlier, many of them in and around the riverfront downtown. Houses and small buildings of that age were commonly heated with radiators, and plenty still are. About one in five homes sits in a two- to four-unit building, where one boiler can heat every apartment. Typical faults are air in the radiators, lost pressure and pumps worn after years of service. We find the cause and quote it before any work.',
  emergencyParagraph:
    'January nights in Aurora drop to around 23F, the normal low the National Weather Service records at the CVG station. When a boiler stops in that cold, babies, older relatives and anyone ill are at the most risk, and radiator pipes in a closed-off room can freeze. Most no-heat calls are reached the same day, weekends too.',
  commonIntro:
    'Aurora boiler calls come from 1800s and early 1900s houses and from small buildings with two to four apartments. What we see most:',
  localFaqs: [
    {
      q: 'Do I need historic approval to replace a boiler in downtown Aurora?',
      a: 'Not for the boiler itself. Aurora’s Downtown Historic District requires a Certificate of Appropriateness from the Historic Preservation Commission for most exterior work. A boiler swap in the basement isn’t exterior work, but a new vent through an outside wall may be, so we check with the city before moving one.',
    },
    {
      q: 'The river came into my Aurora basement. Can I turn the boiler back on?',
      a: 'Not yet. The National Weather Service lists riverfront buildings in Aurora among the first to flood when the Ohio rises, and the city has no levee. If water touched the burner, gas valve or controls, keep the boiler off and have it inspected; flooded controls are replaced, not dried and reused.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Aurora’s older homes and apartments',
    band1Heading: 'Common Boiler Problems in Aurora Homes and Apartments',
    commonSituations: [
      'An 1800s house near the riverfront where the top-floor radiators barely warm up',
      'A three-unit building on one boiler where the top apartment is always coldest',
      'A boiler that needs checking after high water reached the basement',
      'Radiator valves weeping water onto old wood floors',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'In an older Aurora house, try the thermostat first: heat mode, a couple of degrees higher, and the boiler’s switch on. Next walk the radiators. A cold strip along the top means trapped air, and a radiator key lets it out. Bleeding drops pressure, so read the gauge on a hot water boiler and add water to a low reading. Warm rooms afterward mean no visit is needed. We should come if pressure sinks again within days, a valve or the boiler leaks, pipes bang, or a lockout appears. Smell gas? Get out, don’t touch switches, and phone the gas company or 911 after you’re outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Aurora?',
        body: 'An 1880s Aurora home can be running a boiler only a few years old, so its install year on the label decides this, not the house. Circulator pumps that wear, zone valves that stick, igniters that fail and expansion tanks that tire all get repaired. When the vessel, a section or the heat exchanger leaks, or the boiler needs us every winter, we put a replacement price next to the repair price. A yearly service before the cold runs about 60 to 90 minutes: pressure, expansion tank, leaks, safety controls, burner and venting, then bleeding every radiator. Where one boiler heats three apartments, one visit covers all three.',
      },
    ],
    whyTitle: 'Why Aurora Homeowners and Landlords Call Us',
    whyParagraph:
      'Over a third of Aurora homes are rented, often in older buildings on one shared boiler. Tenants should report heat problems to the owner; we fix boilers, not leases. Every technician is licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'How much does boiler repair cost in Aurora?',
        a: 'The price follows the fault. Bleeding radiators or replacing a relief valve is small work, while a leaking section on an old cast-iron boiler is a large job. We diagnose first, then quote a flat rate, and the repair waits until you approve it. There are no overtime fees.',
      },
      {
        q: 'Should I repair or replace an old boiler in Aurora?',
        a: 'Keep it if the vessel is sound. Old cast-iron boilers often outlast several pumps and valves, and those parts are routine to replace. If the vessel leaks or the repairs come every winter, we give you a replacement price next to the repair, and financing is available.',
      },
      {
        q: 'Why is one Aurora apartment colder than the others on the same boiler?',
        a: 'Usually the unit farthest from the boiler, often the top floor, is losing out to trapped air or low pressure. Bleed its radiators and check the gauge. If it stays colder, the circulator pump may be weak or a valve partly shut, and balancing the system is a job for us.',
      },
    ],
  },
};
