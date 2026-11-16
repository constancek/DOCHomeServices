import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountLookout: LocationServiceCopy = {
  localParagraph:
    'Most owners in Mount Lookout can have a Level 2 charger, and the panel sets how much work that takes. Census figures count 1,140 detached houses among 1,454 homes in its core, which helps when the car parks off the street. Half were built in 1939 or earlier, and an original service from those years may leave little room for 240 volts. We start by opening the panel and working the load numbers, then tell you if Level 1 will do, then agree the price before wire goes in.',
  emergencyParagraph:
    'If a charger, plug or outlet turns hot or soft, or the breaker gives out each time charging begins, unplug and stop. Anything floodwater touched this past summer stays off until we’ve tested it. Cut power at the panel only when that’s safe. Smoke or flames mean leaving and calling 911. Weekends count, and most calls see us that day.',
  commonIntro:
    'Owner-occupied houses line most streets around the Square, and these are the requests we hear from people there who want to charge at home.',
  localFaqs: [
    {
      q: 'Do we need two chargers for a second EV in Mount Lookout?',
      a: 'Not always. Two cars with moderate driving can often take turns on one Level 2 charger overnight, or the lighter driver keeps using a Level 1 cord. When both cover a lot of ground, a second circuit paired with a load-management device may suit. The load calculation shows what your panel can carry.',
    },
    {
      q: 'Does a 1930s house in Mount Lookout have room for Level 2?',
      a: 'It might. Some older services were upgraded over the decades and some weren’t, so the build year won’t tell us. A load calculation will. With capacity, the charger gets a circuit of its own. Without it, we price load management and a service upgrade for you to weigh up.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 home charging installed for houses in Mount Lookout',
    band1Heading: 'When a Home in Mount Lookout Needs an EV Charger',
    commonSituations: [
      'A new EV and an older one squabbling over a single trickle cord',
      'A 1930s house whose original panel has no spare spaces left',
      'A plan to buy cheaper late-night power rather than pay at public plugs',
      'A breaker that pops whenever the Level 1 cord shares a circuit with the basement freezer',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Mount Lookout',
        body: 'Level 2 puts charge back far faster than a household outlet, so an evening on it covers more errands and the car seldom sits waiting. Connect after dinner and it’s ready by breakfast, with no drive to a public station and no queue behind strangers. Paying for electricity at your own meter often beats public charging prices, and plenty of utilities shave the cost of off-peak hours, so ask yours. Correct breaker sizing, wire and grounding from a professional install stop overheating in a house whose wiring may date from the 1930s. Buyers touring the owner-occupied streets around the Square increasingly expect to find a charger.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Mount Lookout',
        body: 'Start with the miles. Someone in Mount Lookout who drives to the Square, with a sound outlet near the car, can often live on the Level 1 cord in the box, and we’ll say so. That cord sips 120 volts and returns only a handful of miles for each hour on it. Commuting across town, weekend trips or a second EV tip the scales toward Level 2 on a 240-volt circuit by itself. Next, look at the outlet. It should have its breaker to itself, with no extension cord and nothing loose, old or warm at the plug. A car parked at the curb rarely suits a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Mount Lookout',
        body: 'The load calculation answers whether the panel can carry a charger, and the year the foundation went in doesn’t. Headroom gets the charger a circuit nobody else touches. A shortfall gets you a load-management device and an Electrical Panel Replacement or service upgrade on one page, priced, so you can choose. For Mount Lookout and every other city address, IBI reviews and inspects electrical permits, and we file ours and walk the inspector through.',
      },
    ],
    whyTitle: 'Why Homeowners in Mount Lookout Choose Us for EV Charger Installation',
    whyParagraph:
      'A licensed electrician checks your panel and works the load numbers before we suggest any charger. We’re blunt about upgrade versus load management, we wire to code, and the price is locked before a drill comes out.',
    sharedFaqs: [
      {
        q: 'How do you set the price for a charger in Mount Lookout?',
        a: 'You get one flat rate after the panel has been looked over. The charger, the cable distance from the panel to where the car is kept, and anything the panel needs decide the number. You see and approve it before work starts, and financing is offered.',
      },
      {
        q: 'How long does installing a charger take in Mount Lookout?',
        a: 'Most installs are finished within several hours. When the panel or service needs an upgrade first, the job runs longer. After the load calculation, the timeline comes with the price, so you can plan the day and know when the power will be off.',
      },
      {
        q: 'Can a handy homeowner install a charger in Mount Lookout?',
        a: 'We’d steer you away from it. Matching the breaker and wire to the charger, a load calculation on an older panel, and the city’s permit and inspection all come with the job. That’s licensed work, and a 1930s panel often hides trouble nobody sees from outside the cover.',
      },
    ],
  },
};
