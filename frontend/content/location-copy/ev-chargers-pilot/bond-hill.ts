import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bondHill: LocationServiceCopy = {
  localParagraph:
    'Close to half of the housing in Bond Hill was built before 1940, by Census count, and an original small service in a house that age may barely have room for a 240-volt line. Plenty of the other buildings are doubles or three- and four-family places, so the question is often which unit’s panel would feed a charger. We open that panel and work through the load before any talk of hardware, point out when the cord in the trunk is enough, and fix a price up front.',
  emergencyParagraph:
    'Stop charging tonight if a plug is melting or discolored, a receptacle is warm, or a Level 1 cord runs through an extension cord. Kill that circuit at the panel only if the floor is dry and nothing you’d touch is hot. With fire or smoke, get clear and call 911. Expect same-day help on most calls, weekends too.',
  commonIntro:
    'Here are the charger requests we see most often in Bond Hill, across pre-war houses, doubles and newer infill.',
  localFaqs: [
    {
      q: 'Can I mount a charger on the front of my house on Bella Vista Street in Bond Hill?',
      a: 'Maybe, but ask first. Bella Vista is a local historic district, and an exterior-wall charger there may be treated as a change to the outside of the house. We check with the city before drilling anything, and if an inside location works, we quote it as well.',
    },
    {
      q: 'I own a double in Bond Hill. Can both tenants get chargers?',
      a: 'Possibly. We work out each unit’s panel separately, and a unit that falls short might be solved with a controller that throttles charging, which is cheaper than new service. Either tenant needs your written okay first, and you schedule us. Lease terms are yours to settle, and we handle the wiring.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 chargers for pre-war houses and doubles in Bond Hill',
    band1Heading: 'When a Home in Bond Hill Needs an EV Charger',
    commonSituations: [
      'A first EV arriving at a pre-war house with its original small service',
      'A tenant in one half of a double asking the owner for a charger',
      'Plans to charge late at night on cheaper power rather than at public stations',
      'A breaker that already gives out when the dryer and central air overlap',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Bond Hill',
        body: 'For most owners in Bond Hill, the payoff is time back in the week. A Level 2 charger fills the pack far quicker than a wall receptacle, so one night covers more driving and the car sits plugged in for less of the day. You wake to a charged battery without queuing at a public station. Plugging in at the house tends to be cheaper than those stations, and some utilities charge less overnight. Matching breaker, wire and ground to the charger keeps a long session from cooking the circuit. When the house goes up for sale, a charger on the wall is starting to count with buyers.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Bond Hill',
        body: 'A new circuit isn’t a given for every EV in Bond Hill. If the car makes short hops around the neighborhood and sleeps near a working receptacle, the 120-volt trickle cord from the trunk may hold up fine, and you’ll hear that from us first. Long commutes, regular highway trips or a pair of EVs push most households toward Level 2 on its own 240-volt line. Ask what else that receptacle’s breaker feeds before calling. Pre-war wiring often hides tired outlets, so retire any that’s worn, loose or warm, and leave extension cords out entirely. Where the car only parks curbside, home charging rarely works.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Bond Hill',
        body: 'The year the house went up doesn’t decide this, and the arithmetic on the panel does. With headroom, the charger gets a circuit to itself. Without it, you’ll see two figures, a charging controller or a larger panel or service, and you choose. For the city, Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits. On Bella Vista Street, we talk to the city before any charger goes on an outside wall.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Bond Hill Choose Us for EV Charger Installation',
    whyParagraph:
      'Nobody pitches you hardware before a licensed electrician has opened the panel and worked out the load. If you need an upgrade or load control, we say so plainly, then do it to code at the price you approved.',
    sharedFaqs: [
      {
        q: 'Why does one charger install cost more than another in Bond Hill?',
        a: 'Mostly the distance. A long wire run from the panel to where you park costs more than a short one, and so does panel work, while the charger you pick sets the rest. We fold all of that into a flat figure after seeing the panel. Financing is available.',
      },
      {
        q: 'Can a charger install be finished in one day in Bond Hill?',
        a: 'Usually, yes. Several hours handles most of them, though an old house with a hard wire route or a panel that needs replacing takes longer. You get the schedule before we start, so nobody is surprised when the power goes off.',
      },
      {
        q: 'Why shouldn’t I wire my own charger in Bond Hill?',
        a: 'Because the breaker and wire must suit the charger, the panel’s load has to be worked out properly, and the city wants a permit and an inspection. In an older house those details matter more, and a licensed electrician is the one who signs off on them.',
      },
    ],
  },
};
