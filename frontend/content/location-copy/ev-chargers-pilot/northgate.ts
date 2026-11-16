import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northgate: LocationServiceCopy = {
  localParagraph:
    'Electric heat outnumbers gas in Northgate, Census figures show, and for a charger that matters more than a house’s age. Most homes date from the 1960s or 1970s, eight in ten stand detached, and those panels often lack spare slots already. A heat pump or electric furnace claims a hefty slice of whatever capacity remains. Before any quote we tally the panel’s load, admit it when the car’s cord handles your driving, and price the job up front.',
  emergencyParagraph:
    'Quit charging the moment the charger or plug gets hot, scorched or soft, a burning smell appears, or the breaker trips at each plug-in. Reach for that breaker only with dry hands and nothing hot beside you. Smoke or fire sends everyone outdoors, where someone calls 911. Most visits happen the same day, weekends included.',
  commonIntro:
    'Houses from the 1960s and 1970s, lots of electric heat and a few large apartment complexes make up the charger calls we take in Northgate.',
  localFaqs: [
    {
      q: 'My house in Northgate has electric heat. Will a charger overload the panel?',
      a: 'Not when it’s planned properly. We count heat, water heater, range and cooling in one load calculation. Given room, the charger gets a dedicated line. Lacking room, a controller that throttles charging whenever the heat cycles on often costs less than a service upgrade.',
    },
    {
      q: 'I live in an apartment complex in Northgate. Can I get a charger?',
      a: 'That request goes to management. Shared lots and garages are for the owner or manager to decide, and tenants need written approval before anything is installed. If management asks us for a quote, we’ll look at the building’s panel and give them a flat price.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 home charging for houses with electric heat in Northgate',
    band1Heading: 'When a Home in Northgate Needs an EV Charger',
    commonSituations: [
      'A 1960s panel that already powers electric heat and a water heater',
      'Breakers that trip on cold nights when the furnace works hardest',
      'A new EV and a daily commute that the slow cord falls behind on',
      'A second EV on the way and no slot left for another circuit',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Northgate',
        body: 'Plug in at night, roll out with a full battery, and never hunt for a public station or wait in its line. Level 2 outruns a standard outlet by a wide margin, so each session delivers more range and less downtime. Power bought at home usually undercuts public charging, and many utilities set lower off-peak rates. With electric heat already drawing on the panel, the right breaker size, wiring and grounding are what prevent overheating and strain, which is why professional installation matters. Increasingly, buyers want a charger in place when they tour a house in Northgate.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Northgate',
        body: 'Light drivers who park near a sound receptacle may get along fine with the Level 1 cord included with the car. It draws ordinary 120-volt current and charges slowly, adequate for short trips, and we’ll say so if that covers you. Confirm that receptacle answers to its own breaker, and keep extension cords plus tired, discolored outlets out of the arrangement entirely. Commuters and two-EV households usually want Level 2 on a dedicated 240-volt circuit. A car that lives on the street generally can’t make use of a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Northgate',
        body: 'Load math, not the house’s age, tells us what the panel can carry. With capacity, we run a dedicated circuit sized to the charger. Lacking it, we price load management against a bigger panel or a service upgrade, and you choose. Inspection Bureau, Inc. inspects electrical work in Colerain Township, and we handle that permit and the final inspection for you.',
      },
    ],
    whyTitle: 'Why Homeowners in Northgate Choose Us for EV Charger Installation',
    whyParagraph:
      'Our licensed electricians begin at the panel and its load math, then give a plain answer on whether an upgrade or load management is called for. It’s wired to code, at a price agreed first.',
    sharedFaqs: [
      {
        q: 'What does an EV charger installation cost in Northgate?',
        a: 'Expect one flat rate following the panel check. The charger, the length of run between panel and parking spot, and any panel work drive it, and electric heat makes that work likelier. Financing exists, and nothing starts without your approval.',
      },
      {
        q: 'How long does an EV charger install take in Northgate?',
        a: 'Most houses take several hours. A panel upgrade stretches that, and we explain the schedule before starting. We also flag when the power will be off, which matters on a winter day in a house heated by electricity.',
      },
      {
        q: 'Can I install an EV charger myself in Northgate?',
        a: 'We’d advise against it. Matching the circuit to both charger and panel, allowing for electric heat in the load math, and clearing a permit and inspection are an electrician’s work. A licensed electrician covers each step safely and signs for it.',
      },
    ],
  },
};
