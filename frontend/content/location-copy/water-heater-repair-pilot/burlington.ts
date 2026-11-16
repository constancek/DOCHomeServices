import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const burlington: LocationServiceCopy = {
  localParagraph:
    'Burlington water heaters mostly sit in houses built since the 1980s, so the usual repair is a failed part on a tank that is otherwise fine, or a builder tank that has worn through. Census figures put the median home at 1998, and about a quarter of homes here are rented, many in apartment complexes where the tank sits in a closet. Owners, renters and landlords all call us. We work out what broke and give a flat price before anything is taken apart.',
  emergencyParagraph:
    'Leaks come first: shut the supply handle above the heater, then cut its fuel or power. At any whiff of gas, walk out without flipping lights and phone the utility from the lawn. A CO detector going off means everybody outdoors. Infants, elderly parents and anyone sick struggle most. We usually arrive that same day, weekends too.',
  commonIntro:
    'Burlington water heater calls range from builder tanks in subdivisions to closet heaters in apartments. These come up most:',
  localFaqs: [
    {
      q: 'I rent in Burlington and the water heater quit. What should I do?',
      a: 'Tell your landlord or property manager in writing, since the heater is theirs to repair. If your complex runs a shared water heater for several units, that is management’s call. We fix water heaters, not leases. When the owner or manager books us, we come the same day on most calls.',
    },
    {
      q: 'Who issues permits for water heater work in Burlington?',
      a: 'Burlington is unincorporated, so building permits go through the Boone County Building Department, and plumbing is inspected by Kentucky’s state plumbing inspector. We pull the permit where one is needed and set up the inspection, so the paperwork isn’t on you.',
    },
  ],
  overrides: {
    ctaLine: 'Burlington water heater repair for homes and apartments',
    band1Heading: 'Common Water Heater Problems in Burlington Homes',
    commonSituations: [
      'A 1990s subdivision tank leaking from the bottom seam',
      'An apartment closet heater that a property manager needs fixed today',
      'An electric heater that went cold when one element burned out',
      'A relief valve dripping down the side of the tank',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Many Burlington calls end before we leave the shop. A household that just ran laundry and several showers has simply outrun the tank, and it recovers within the hour. A dial nudged toward warm explains tepid taps. Electric models go dark when their panel breaker flips,. Gas models need the supply handle open, and a dead pilot may be relit per its printed steps if nothing smells of gas. We should come out for rust-tinted hot water, a wet floor at the base, or a deep rumble from sediment. Expect a diagnosis and a fixed quote, then the repair once you sign off.',
      },
      {
        title: 'Repair or Replace Your Water Heater in Burlington?',
        body: 'Look at the water heater’s label, not the house. A Burlington home built in 2001 may be on its second tank already. A bad thermocouple, gas valve, element or thermostat gets repaired. The relief valve, anode rod and dip tube are repairs as well. A tank leaking from its body has to be replaced, and we quote that next to the repair cost so you can weigh them. Landlords with several units get a price per unit. Boone County handles building permits here and the state handles plumbing inspections; we pull the permit where one is needed. Tankless is one option, never the default.',
      },
    ],
    whyTitle: 'Why Burlington Homeowners and Landlords Call Us',
    whyParagraph:
      'Burlington mixes owner-occupied houses with apartment complexes, and we repair water heaters in both. Technicians are licensed and drug-tested, there are no overtime fees, and you approve the price before work.',
    sharedFaqs: [
      {
        q: 'What does water heater repair cost in Burlington?',
        a: 'Price follows the repair, and the repair depends on the fuel. Electric units usually need an element or thermostat; gas units more often need a thermocouple, igniter or control valve. Once the technician has tested it, you hear one fixed number, and nothing gets touched until you agree to it.',
      },
      {
        q: 'Is my Burlington water heater worth repairing?',
        a: 'Most of the time, yes. Burlington has many tanks from the late 1990s and 2000s, and a single worn component on a dry shell usually costs less to fix than a new unit. Water seeping out of the steel is the exception, because that can’t be sealed. Check the sticker for the year, then let us quote both.',
      },
      {
        q: 'Why does hot water run out fast or stop coming?',
        a: 'A burned-out lower element on an electric heater leaves you a short supply of hot water. Sediment and a broken dip tube do something similar. With no hot water at all, the pilot, the thermocouple or the upper element is the usual suspect.',
      },
    ],
  },
};
