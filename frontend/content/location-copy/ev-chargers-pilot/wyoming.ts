import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wyoming: LocationServiceCopy = {
  localParagraph:
    'Wyoming is a city of owner-occupied detached houses. Census figures put the median at 1954, with the 1950s the busiest decade and about a quarter from 1939 or earlier. Post-war panels are often crowded with circuits, and some of the oldest houses keep a small original service. Gas heats nearly every home, leaving more capacity than electric heat would. Our first visit covers the panel and the load math, and if the Level 1 cord is enough, you’ll hear that. No wire gets pulled until the price is fixed.',
  emergencyParagraph:
    'Stop charging if a plug or outlet runs hot, discolors or melts, the charger smells burnt, the cable is crushed, or a breaker trips with every charge. If you can reach the panel safely, shut that circuit off. If there’s smoke or flame, get everyone outside and dial 911. Most calls see us the same day, Saturdays and Sundays too.',
  commonIntro:
    'From the Village Historic District to the Wyoming Hills, owners in Wyoming tend to call for one of these reasons.',
  localFaqs: [
    {
      q: 'Is a charger allowed on a house in the Wyoming Village Historic District?',
      a: 'The city notes extra requirements for properties in the Village Historic District, and a charger on an outside wall may count as an exterior change. We check with the city before mounting anything there. Sometimes an indoor spot or a less visible wall sidesteps the issue altogether.',
    },
    {
      q: 'Our family is getting a second EV in Wyoming. Will one panel handle two chargers?',
      a: 'It depends on the panel’s capacity, which the load calculation shows. Some houses can carry two dedicated circuits. Others do better with one circuit and a device that shares power between both cars. Charging overnight, when the house uses little, helps either way. We price the options together.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 chargers for post-war and older houses in Wyoming',
    band1Heading: 'When a Home in Wyoming Needs an EV Charger',
    commonSituations: [
      'A second EV joining the household, with one Level 1 cord between two cars',
      'A post-war panel that has run out of free spaces for a 240-volt circuit',
      'Wanting to charge overnight at off-peak prices rather than at a public station',
      'Breakers that already trip in an older house when the kitchen is busy',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Wyoming',
        body: 'Wyoming is a city where nearly nine in ten houses are owner-occupied, so a charger here is a fixture, not a stopgap. Compared with the cord in the trunk, a Level 2 unit refills in far less time, which buys more range per session and fewer evenings tied to the wall. Plug in after supper and the car is set before the school run, with no public station involved. Electricity at home usually undercuts public charging, and plenty of utilities reward off-peak use, so ask yours. Correct breaker sizing, wire and grounding spare an older panel any strain, and future buyers increasingly expect to see a charger.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Wyoming',
        body: 'Plenty of drivers in Wyoming can keep their money. When the week is mostly short errands and the car spends the night by a sound outlet, the trunk cord on 120 volts often keeps pace, slow as it is at only a few miles of range an hour. We’ll say which camp you fall into. Longer commutes or a pair of EVs usually point to Level 2 on its own 240-volt circuit. Before booking, find out which rooms go dark when that outlet’s breaker is off. In houses this age, retire any extension cord from charging duty, along with any outlet that feels loose or warm.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Wyoming',
        body: 'In Wyoming, the date on the deed can’t tell us whether a panel has room, but adding up the loads can. Room means the charger is wired on a dedicated circuit, typically on a 40 to 60 amp breaker depending on the unit. No room means two quotes, one for a load controller and one for a bigger panel or service. Inspection Bureau Incorporated handles electrical permits for the City of Wyoming, and we see it through inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Wyoming Choose Us for EV Charger Installation',
    whyParagraph:
      'Before suggesting anything, a licensed electrician opens your panel and totals the load. You hear plainly whether the house wants an upgrade or a load controller, the charger is wired to code, and the price is agreed up front.',
    sharedFaqs: [
      {
        q: 'What sets the price of an EV charger installation in Wyoming?',
        a: 'Three variables set it. They are the charger you pick, the length of wire from the panel to the car’s spot, and whether an older panel needs work first. After the panel check we quote one flat rate, and in the historic district we confirm placement with the city before it’s final. Financing is available.',
      },
      {
        q: 'How long does installing an EV charger take in Wyoming?',
        a: 'Several hours is typical. A panel upgrade or load-management device makes the day longer, as does a long wire run through an older house. The timeline, including any time the power is off, is agreed before we begin.',
      },
      {
        q: 'Do I really need an electrician for a Level 2 charger in Wyoming?',
        a: 'Yes. Someone has to size the circuit to the charger, prove the panel can carry it with a load calculation, and get the work permitted and inspected. That’s a licensed electrician’s job, and sloppy wiring or grounding is what makes chargers overheat.',
      },
    ],
  },
};
