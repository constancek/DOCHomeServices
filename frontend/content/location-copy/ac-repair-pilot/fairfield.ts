import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfield: LocationServiceCopy = {
  localParagraph:
    'In Fairfield, a lot of the AC we fix is a heat pump. Census figures show more than half the homes here heat with electricity, so the outdoor unit runs in January as well as July and wears faster than a cooling-only condenser. Most houses date from the 1960s through the 90s, and about a quarter of homes are in apartment buildings, where the landlord or manager decides on repairs. We test the system, find what failed and quote a price before any work begins.',
  emergencyParagraph:
    'Top-floor Fairfield apartments heat up fast once the cooling stops, and so do homes where an older parent or a newborn lives. Expect roughly 21 days of 90 degrees or hotter each year here, going by the National Weather Service. Heat pumps and central air both get fixed on the day you call in most cases, Saturdays and Sundays too.',
  commonIntro:
    'Fairfield has more heat pumps than gas furnaces, plus plenty of apartments. These are the AC problems we see most:',
  localFaqs: [
    {
      q: 'Who issues the permit to replace an AC in Fairfield?',
      a: 'The City of Fairfield Building & Zoning Division, not Butler County. The city requires an HVAC permit for new or replacement heating and cooling equipment, plus an electrical permit to reconnect it, and the contractor has to be registered with the city. We pull both before installation day.',
    },
    {
      q: 'I rent in Fairfield and my AC quit. Can I call you?',
      a: 'Tell your landlord or property manager first. Ohio law (ORC 5321.04) requires landlords to keep the appliances they supply, central air included, in good and safe working order, so the repair is usually theirs to arrange. Owners and managers can call us directly. We fix air conditioners, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Fairfield heat pump and AC repair, same day on most calls',
    band1Heading: 'Common AC Problems in Fairfield Homes',
    commonSituations: [
      'A heat pump stuck in heat mode on a July afternoon',
      'A 1970s split-level where the upstairs never catches up',
      'One apartment running warm while the others on the pad cool fine',
      'A clogged drain line at a closet air handler',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Three quick looks come first: the filter, the thermostat mode and the breaker panel. Heat pump owners often find the thermostat flipped to emergency heat, which blows warm air and costs you nothing to fix. Book a visit when a reset breaker pops a second time, or when the condenser buzzes and its fan sits still. If you rent, report it to management before anything else, since the owner usually decides. We test the indoor and outdoor sections, explain what failed, give you a flat-rate price to approve, and check the vent temperature when we’re done.',
      },
      {
        title: 'Repair or Replace Your Fairfield AC?',
        body: 'Go by the age of the heat pump or condenser, not the house. A heat pump works year-round, so one past ten years with a failed compressor is usually ready to retire, while a newer unit with a single bad part is a quick repair. Replacement in Fairfield needs a city HVAC permit, which we pull. Your electric bill gives early warning. When a heat pump loses refrigerant it runs longer in summer and leans on its backup electric heat in winter, so a bill that jumps without a change in the weather deserves a look.',
      },
    ],
    whyTitle: 'Why Fairfield Homeowners and Landlords Call Us',
    whyParagraph:
      'We work on Fairfield heat pumps and gas-furnace systems in houses and apartment buildings alike. Licensed technicians, background-checked and drug-tested, give you a flat-rate price to approve before work starts, and evening calls cost no extra.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Fairfield?',
        a: 'That depends on the fault, so we price it after testing. A stuck reversing valve on a heat pump is a bigger job than a bad contactor, and a slow refrigerant leak takes time to find. You approve one flat-rate price before we start, with no overtime charge for nights or weekends.',
      },
      {
        q: 'Should I repair or replace my Fairfield AC?',
        a: 'Check the year on the outdoor unit. In a city where more than half the homes heat with electricity, many of these units are heat pumps working summer and winter, so they wear out sooner than a cooling-only AC. A young unit with one failed part is worth fixing. An old one with a dead compressor usually isn’t.',
      },
      {
        q: 'Why is my Fairfield AC blowing warm air?',
        a: 'Most Fairfield homes run heat pumps, and a reversing valve stuck on the heating side is the classic summer culprit there. First rule out the easy causes: thermostat mode and a dusty filter. A silent condenser fan usually traces to the capacitor. A system short on refrigerant blows lukewarm air, and only gauges confirm it.',
      },
    ],
  },
};
