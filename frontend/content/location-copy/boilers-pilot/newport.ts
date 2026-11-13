import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newport: LocationServiceCopy = {
  localParagraph:
    'Most boiler calls in Newport come from the older half of the city. Census figures show 46.5% of homes were built in 1939 or earlier, and radiators were how houses of that age were heated, so they are common in the East Row and the older blocks around it. Another 29.6% of homes sit in buildings of five or more units, where one boiler can heat a whole building. We trace the fault, then quote it before any part comes off.',
  emergencyParagraph:
    'Lows in Newport sit near 23F in January, going by NOAA normals at the CVG station, so a boiler that stops overnight means a cold house by morning. Infants, elderly parents and anyone unwell feel it first, and a long freeze can endanger radiator piping. Most no-heat calls here are reached the same day, Saturday and Sunday included.',
  commonIntro:
    'Newport boiler work splits between Victorian houses in the historic districts and apartment buildings on a shared boiler. What we see most:',
  localFaqs: [
    {
      q: 'Will I need historic approval to replace a boiler in Newport?',
      a: 'Not for the boiler itself, which sits indoors. Newport’s local districts, Buena Vista, East Row and York Street, require a Certificate of Appropriateness for many exterior changes. If a new boiler needs a vent through an outside wall, ask the city’s Historic Preservation office before that hole is cut.',
    },
    {
      q: 'The radiators in my Newport apartment are cold. Who do I call?',
      a: 'Tell your landlord or building manager first, in writing, because a central boiler belongs to the owner and they book the repair. Before you do, bleed any radiator that is cold at the top. We fix boilers, not leases, and we work with Newport owners on shared systems.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for older Newport houses and apartment buildings',
    band1Heading: 'Common Boiler Problems in Newport Homes and Apartments',
    commonSituations: [
      'Upper-floor radiators in an East Row house that stay cool while the parlor floor heats',
      'A shared boiler in a building of five or more units where the end apartments never get warm',
      'A circulator pump that runs loud for a week and then stops moving water',
      'A pressure relief valve dripping onto the basement floor after each heating cycle',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Start with any radiator whose top stays cool: open the bleed screw until water comes out. Look at the gauge next, and on a hot water boiler add water if it sits low once the air is out. Turn the thermostat up and make sure the boiler switch is on. If the heat returns, skip the visit. In a building whose boiler another company services under contract, ring them before us. Call us when the gauge drops again, the boiler kettles, it shuts down showing a code, or one zone won’t warm. If you smell gas, leave, touch no switches, and phone Duke Energy Kentucky once you’re outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Newport?',
        body: 'A Victorian house in the East Row tells us nothing about its boiler, so we read the rating label for the install year and look at the boiler’s actual state. Swapping out a noisy circulator, a sticking zone valve, a dead igniter or a flooded expansion tank counts as repair. Once the vessel itself or a cast-iron section is weeping water, or this boiler has had a callout each of the last few winters, you see two quotes, repair and replacement, and pick. Each fall, a 60 to 90 minute service tests pressure, tank charge, safety controls, burner and flue, hunts for leaks and bleeds every radiator.',
      },
    ],
    whyTitle: 'Why Newport Residents and Landlords Call Us',
    whyParagraph:
      'Just over half of Newport homes are rented, so we often work for an owner with tenants waiting on heat. Every tech is licensed, insured, background-checked and drug-tested, and the price is yours to approve first.',
    sharedFaqs: [
      {
        q: 'What does boiler repair cost in Newport?',
        a: 'The fault sets the price. Bleeding a radiator or clearing a lockout is a short visit; a new circulator pump or a leaking section is more. We find the cause, quote a flat rate and wait for your yes before any work begins. There are no overtime fees.',
      },
      {
        q: 'Is it worth repairing my Newport boiler?',
        a: 'Usually, if the vessel is sound. Pumps, valves and controls wear out around a vessel that can keep going. If the heat exchanger or a section leaks, or you are calling us every winter, we show the replacement price beside the repair. Financing is available.',
      },
      {
        q: 'Why are only some radiators cold in my Newport house?',
        a: 'Air rises to the top floors first, so upstairs radiators go cold before the rest. Bleed them, then check the pressure. If one floor still has no heat, a zone valve or the circulator pump is the likely cause, and that is a job for us.',
      },
    ],
  },
};
