import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northgate: LocationServiceCopy = {
  localParagraph:
    'Electric heat outnumbers gas in Northgate, Census figures show, and for a charger that matters more than a house’s age. Most homes date from the 1960s or 1970s, eight in ten stand detached, and those panels often lack spare slots already. A heat pump or electric furnace claims a hefty slice of whatever capacity remains. Before any quote we tally the panel’s load, admit it when the car’s cord handles your driving, and price the job up front.',
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
        body: 'In Northgate, an EV that spends the night plugged in at home wakes up full, so the morning starts without a detour to a public charger or a wait behind someone else’s car. Level 2 is many times quicker than the outlet cord, which means more range from every evening hooked up. Household electricity tends to undercut public charging prices, and many utilities bill less in off-peak hours. Half the homes here already heat with electricity, so getting the breaker size, the wire and the grounding right is what stops a charger from overheating a busy panel. Buyers touring older houses increasingly ask whether one is installed.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Northgate',
        body: 'In Northgate, plenty of owners never outgrow the 120-volt cord that shipped with the car. If most driving is short hops along Colerain Avenue and the car sleeps next to a healthy outlet, that slow trickle refills it, and we’ll say as much. Give the cord an outlet with nothing else on its breaker, skip extension cords altogether, and swap out any receptacle that’s brown, cracked or wobbly before trusting it. Daily commuting or a second EV is the point where Level 2, on a 240-volt run of its own, makes sense. A car parked at the curb overnight is a poor fit for a wall unit.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Northgate',
        body: 'We size up a panel in Northgate with the load calculation, since a 1969 house with an electric furnace and one with gas heat look alike from the street yet carry very different loads. If capacity is there, the charger gets its own circuit. If it falls short, we quote a load-management device and a panel or service upgrade side by side, and you pick. Electrical permits in Colerain Township go to Inspection Bureau, Inc., and we file with them.',
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
