import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const amelia: LocationServiceCopy = {
  localParagraph:
    'Much of Amelia is newer than people assume. The Census median sits at 1995, and upward of two in five homes have gone up since 2000, so panel space is rarely the first obstacle. Electricity is. About three homes in five heat with it, and a charger asking for power on a January night competes with the heat pump or electric furnace. Load management often settles that. Our electrician reads the panel and the load first, says if Level 1 will do, and prices it before wiring.',
  emergencyParagraph:
    'A crushed cable, a softening plug, a burnt smell at the outlet or a breaker that gives up each charge means the car stays unplugged. Kill that breaker only from a dry floor with nothing hot nearby. With smoke or fire, get out first, then call 911. We’re out the same day on most calls, weekends included.',
  commonIntro:
    'Newer houses, apartment complexes and plenty of electric heat shape the charger requests we see around Amelia, and four keep coming back:',
  localFaqs: [
    {
      q: 'Who handles the permit for my charger now that Amelia is no longer a village?',
      a: 'After voters dissolved the old village in 2019, its streets were split between Pierce Township and Batavia Township, both unincorporated. For either side, Clermont County Building Inspection covers the electrical permit. We check which township your address landed in, file for you and meet the inspector.',
    },
    {
      q: 'My apartment in Amelia has no charger. Is there a way to get one?',
      a: 'Start with your landlord, whose written yes comes before anything else, because the owner or manager is who books an electrician for their building. In a bigger complex, shared-lot chargers are decided by management, so ask at the office. A condo owner asks the association first. We install chargers, not lease terms.',
    },
  ],
  overrides: {
    ctaLine: 'Home charger installation for houses and rentals in Amelia',
    band1Heading: 'When a Home in Amelia Needs an EV Charger',
    commonSituations: [
      'An all-electric house where the heat pump leaves little headroom on cold nights',
      'Drivers who want the car to fill up on late-night power rather than at a public charger',
      'A long weekday commute that a 120-volt cord falls behind on by Thursday',
      'An owner wiring a rental house so it appeals to tenants who drive EVs',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Amelia',
        body: 'Control over timing is the quiet advantage. With a Level 2 unit on the wall, you choose when the car draws power in Amelia, and many utilities bill late-night electricity at a lower rate, so ask yours. Plugging in at your own place usually undercuts what public chargers cost in the first place. It is also far quicker than a wall socket, so an evening on the charger adds a lot more range and the car is ready before you are. Correct breaker sizing, wire and grounding keep the circuit from running hot, which matters in an all-electric house. Buyers are starting to want chargers too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Amelia',
        body: 'Light drivers in Amelia can sometimes skip us entirely. A car that does errands close to home and sleeps beside a decent outlet may manage on the slow cord it shipped with, which runs on 120 volts and claws back only a few miles each hour, and we will tell you when that fits. Daily commuters, high-mileage drivers and two-EV households are usually better served by Level 2 on its own 240-volt circuit. Check whether the cord’s outlet shares a breaker with anything else, and never plug the cord into an extension cord or a worn, warm outlet. With street-only parking, home charging is rarely practical.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Amelia',
        body: 'With so much electric heat in Amelia, the load calculation counts for more than the date printed on a panel label. Headroom left over earns the charger its own run of wire, typically on a 40 to 60 amp breaker depending on the unit. A shortfall earns two written prices, one for load management and one for a panel or service upgrade, and you pick. The county permit and final inspection follow.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Amelia Choose Us for EV Charger Installation',
    whyParagraph:
      'A licensed electrician weighs the panel against the heat pump and other big loads before any charger job in Amelia gets priced. You hear plainly if an upgrade or load management is needed, and the work meets code.',
    sharedFaqs: [
      {
        q: 'What does a home EV charger cost to install in Amelia?',
        a: 'You get one flat number once an electrician has seen the panel. The charger you settle on, the stretch of wire from panel to car, and any upgrade or load-management device push it up or down. Nothing begins until you say yes, and financing is on offer.',
      },
      {
        q: 'Will a charger install take more than a day in Amelia?',
        a: 'Rarely. Several hours handles a normal install in Amelia. A panel upgrade makes the day longer, and that gets flagged when you get the quote, along with the hours the power will be down and the moment the car can plug in.',
      },
      {
        q: 'Could I put in an EV charger without an electrician in Amelia?',
        a: 'We’d steer you away from that. Choosing the breaker and wire, working out the load, and getting Clermont County’s permit and inspection are electrician’s work. In an all-electric house, the load math is the step people skip, and it’s what keeps the breaker from tripping on the coldest nights.',
      },
    ],
  },
};
