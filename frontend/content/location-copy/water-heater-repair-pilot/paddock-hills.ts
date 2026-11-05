import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const paddockHills: LocationServiceCopy = {
  localParagraph:
    'Paddock Hills water heater calls split two ways. The Tudor Revival, Dutch Colonial and bungalow houses keep their tanks in basements, often on older venting and valves. The larger apartment buildings, which make up much of the housing here, tuck heaters into closets or run one big unit for the building. Census figures show 41.8% of homes predate 1940 and 69.3% are rented, so a landlord or manager books many of our visits. We pin down the fault and price it before work begins.',
  emergencyParagraph:
    'If water runs from the tank, turn the cold-water valve on top off, then the gas valve or breaker. A gas smell means leaving, switches untouched, and calling the gas company from outdoors. A carbon monoxide alarm sends everyone out first. Most calls get a same-day visit, weekends included, with babies, older relatives and anyone ill first.',
  commonIntro:
    'Paddock Hills has pre-war basement tanks in its houses and closet heaters in its apartment buildings. Four problems we see often:',
  localFaqs: [
    {
      q: 'My Paddock Hills apartment has no hot water. Who do I call?',
      a: 'Go to the landlord or building manager in writing. Ohio Revised Code 5321.04 says owners have to keep the appliances that come with the unit safe and working, and furnish reasonable hot water. In Paddock Hills buildings with one big shared heater, that repair is management’s decision. We repair heaters, not leases.',
    },
    {
      q: 'Will you need a permit to replace the water heater in my Paddock Hills house?',
      a: 'Yes, for a replacement. Paddock Hills is inside the City of Cincinnati, so the Department of Buildings & Inspections issues the plumbing permit, and we pull it for you. Repairs to the existing heater, such as a new relief valve or element, don’t need one.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair for Paddock Hills houses and apartments',
    band1Heading: 'Common Water Heater Problems in Paddock Hills Homes and Apartments',
    commonSituations: [
      'A gas tank in the basement of a pre-war Tudor house that won’t hold a pilot',
      'A building water heater leaving several apartments with lukewarm water',
      'A tank in an apartment closet dripping from the relief valve',
      'Rotten-egg-smelling hot water from a tank with a worn anode rod',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'You may not need us. After a few showers the tank just needs time to recover. Check whether the dial was nudged lower. Electric heaters stop with the breaker off, and gas heaters stop with the gas shutoff closed or the pilot out; relight from the printed steps only if there’s no gas odor. Apartment renters should report the rest to the landlord. We come for water pooling at the base, crackling from scale, brown water, or a pressure valve that keeps venting. After testing we explain the fault, quote it, and once you approve, fix it and confirm.',
      },
      {
        title: 'Repair or Replace Your Paddock Hills Water Heater?',
        body: 'The sticker on the heater gives its install year; neither a Tudor house nor a 1960s apartment block tells you that. Most failures are one component, such as a pilot sensor, gas control, thermostat, element, pressure valve, anode or inlet tube, and each can be fixed alone. When the steel tank itself leaks, it has to be replaced. If either path is reasonable, we price both and you pick. Apartment owners may land on different answers for different units. Inside city limits, replacements need a Buildings & Inspections permit, and we arrange it.',
      },
    ],
    whyTitle: 'Why Paddock Hills Residents and Landlords Call Us for Water Heater Repair',
    whyParagraph:
      'We work in Paddock Hills basements from before 1940 and apartment buildings from the 1960s and 1970s. Every technician is licensed, insured and drug-tested, and no repair begins until the flat-rate price is approved.',
    sharedFaqs: [
      {
        q: 'What does water heater repair cost in Paddock Hills?',
        a: 'That turns on the part and the fuel. A new element in an electric closet heater is a different job from a gas control on a basement tank. We quote a single flat rate once the fault is found, nothing starts until you agree, and weekends carry no surcharge.',
      },
      {
        q: 'When should a Paddock Hills water heater be replaced instead of repaired?',
        a: 'Once the tank itself leaks, or when one heater keeps needing work. A single failed component on a dry tank is normally worth fixing. The sticker shows the install year. Before you decide, we show you what each route costs.',
      },
      {
        q: 'Why does my hot water run out fast, or not show up at all?',
        a: 'A tank half full of scale, a cracked inlet tube letting cold water in, or a dead lower element on an electric model all cut the hot supply short. Nothing hot at all usually means the pilot, its sensor, the gas control or a breaker. Check those two easy ones, then call us.',
      },
    ],
  },
};
