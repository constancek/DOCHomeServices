import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const california: LocationServiceCopy = {
  localParagraph:
    'Nearly everything in California is a detached house, most of them owner-occupied, and half went up before 1968, according to Census figures. Breaker boxes from the 1950s through the 1970s are commonly packed, so whether a Level 2 charger fits comes down to what the load math shows. Newer houses usually have the room, or can use a charging controller. We open the panel and run those numbers first, tell you if the slow cord will do, and fix a price ahead of the work.',
  emergencyParagraph:
    'If the river has come up to the charger or its outlet, leave it unplugged until it’s inspected. Treat a scorched outlet or a breaker that keeps tripping the same way. Switch that circuit off only if you’re dry and nothing is hot. With smoke or fire, get out and dial 911. Same-day visits handle most calls, weekends too.',
  commonIntro:
    'Off Kellogg Avenue and up the side streets, these are the charger calls we get most from California.',
  localFaqs: [
    {
      q: 'At high water, some yards flood in California. Is an outdoor charger still possible?',
      a: 'It is, with an outdoor-rated charger, a solid mount and weather protection. If the river has reached that spot before, mention it, and we’ll look at a higher place on the wall. Anything that has been under water stays off until an electrician has checked it.',
    },
    {
      q: 'Will a 1960s house in California need a bigger panel for a charger?',
      a: 'Often it won’t. A 1960s panel can be crowded with breakers and still have capacity once the house’s actual load is added up. If it really is short, a charging controller tends to cost less than heavier service, and both get priced.',
    },
  ],
  overrides: {
    ctaLine: 'Home EV charging for detached houses in California',
    band1Heading: 'When a Home in California Needs an EV Charger',
    commonSituations: [
      'A 1960s breaker box with no slot left for a new circuit',
      'A Kellogg Avenue commute that outruns the 120-volt cord',
      'An owner who wants to charge late at night instead of at a public station',
      'A second EV coming and only the slow cord to share',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in California',
        body: 'For a house in California, Level 2 means the car refills overnight at home, far faster than any wall outlet manages. Each charge adds more range, and less of the day goes to waiting. Home power is often cheaper than a public station, and many utilities discount off-peak hours, so ask yours what timing works. There’s no detour to find a free charger and no line once you arrive. Done properly, the breaker, wire and ground match the charger and the circuit stays cool. A charger is also turning into a selling point when a house is listed.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in California',
        body: 'In California, plenty of owners never need more than Level 1. Light mileage and a parking spot near a dependable receptacle can make the trickle cord in the trunk enough, slow as it is on 120 volts, and we’ll tell you that. People with a daily commute or two EVs usually end up wanting Level 2 fed by a 240-volt circuit of its own. Ask yourself what else hangs on that receptacle’s breaker. Extension cords don’t belong anywhere in the setup, and neither does an outlet that’s worn, loose or warm. Cars kept on the street are tough to charge from a house.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in California',
        body: 'How much the panel can spare comes from adding up its real load, and the age of the house is only part of that. If there’s headroom, the charger gets a circuit of its own. If not, a controller that slows charging under heavy use and a bigger panel or service both get quoted, and you pick. In California, as across the city, Inspection Bureau, Inc. (IBI) reviews and inspects the electrical permit, which we arrange.',
      },
    ],
    whyTitle: 'Why Homeowners in California Choose Us for EV Charger Installation',
    whyParagraph:
      'We never guess at a panel. A licensed electrician opens it, runs the load numbers and tells you honestly whether an upgrade or load control is needed, then installs to code at the price you agreed.',
    sharedFaqs: [
      {
        q: 'What decides the cost of a charger install in California?',
        a: 'Charger model, footage of wire between the panel and the parking spot, and any panel work are the three pieces. They become one flat quote after we’ve opened the panel, and nothing starts until you approve it. Financing is there for anyone who wants it.',
      },
      {
        q: 'Can a charger install be done in a day in California?',
        a: 'Generally, yes. Most take several hours, longer if the panel needs an upgrade or the wire has a long way to travel. We give you the timeline before anyone starts, so you know when the power will be off.',
      },
      {
        q: 'Do I need a licensed electrician for a Level 2 charger in California?',
        a: 'Yes. Matching the breaker and circuit to the charger, working out the panel’s load and handling the permit and inspection are licensed work. A wrong size can overheat the wiring, which is the very problem a proper install prevents.',
      },
    ],
  },
};
