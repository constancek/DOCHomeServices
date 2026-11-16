import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bellevue: LocationServiceCopy = {
  localParagraph:
    'By Census counts, almost two-thirds of the houses in Bellevue were standing by 1939, and only a sliver were built after 1960. A charger in a house that old often meets a small original service, maybe upgraded once decades ago, with little spare for a 240-volt circuit. Gas heats most of these homes, which leaves more headroom than people expect. Our first stop is the panel and the full load; if the Level 1 cord suits your driving we’ll say so, and the price is agreed before a wire moves.',
  emergencyParagraph:
    'A blackened or warm outlet behind a Level 1 cord is the classic warning. Unplug for that, a burning smell, a plug going soft, or a breaker that trips each charge. If you’re dry, turn the circuit off, and for smoke or fire, go outside and call 911. Most calls are seen the same day, weekends included.',
  commonIntro:
    'Century-old houses, two local historic districts and a mostly owner-occupied city shape the charger requests we get across Bellevue:',
  localFaqs: [
    {
      q: 'Do the historic district rules affect where my charger is mounted in Bellevue?',
      a: 'Possibly. The city has two local historic districts, Fairfield Avenue and Taylor’s Daughters, and most exterior changes there need a Certificate of Appropriateness. An outdoor charger may count as one, so we check with the city before anything is mounted. Putting the charger on an inside wall usually avoids the question.',
    },
    {
      q: 'Does a charger in Bellevue mean a new service from Duke Energy Kentucky?',
      a: 'Usually not. Plenty of older houses can carry a charger on the service already there, sometimes helped by a load-management device that holds charging back while the stove or dryer runs. If the load math shows the service is truly too small, we coordinate with Duke Energy Kentucky and price that beside the device.',
    },
  ],
  overrides: {
    ctaLine: 'Home EV charger installation for older houses in Bellevue',
    band1Heading: 'When a Home in Bellevue Needs an EV Charger',
    commonSituations: [
      'A pre-war house on a modest service and a new EV that wants more than a trickle',
      'A Level 1 cord warming an original pre-war receptacle a little more every night',
      'A panel upgraded long ago with every breaker slot now spoken for',
      'A landlord with a two- to four-unit building fielding tenant requests for charging',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Bellevue',
        body: 'Wake up to a charged car in Bellevue and the public charger stops being part of your week, along with the hunt for an open one. Level 2 equipment refills a battery many times quicker than an ordinary socket, so each night restores more range and the car is tied up for less time. Plugging in at home generally comes in under public charging on cost, and many utilities discount off-peak power, so ask yours. In houses from before 1940, the safety gain matters most, because the right breaker, wire and ground keep an old circuit from overheating. Buyers increasingly want chargers too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Bellevue',
        body: 'Some residents in Bellevue can stop reading here. If your car sticks to short hops and parks beside a trustworthy outlet, the slow cord it came with may be all you ever plug in, and we’ll tell you so. On 120-volt household current it recovers only a few miles of range for each hour, enough for very light use. Daily commuters and two-EV households usually need Level 2 on its own 240-volt circuit. Find out whether that outlet shares a breaker with other rooms, and keep the cord clear of extension cords and of old outlets that are loose or warm. Parking on the street rules out a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Bellevue',
        body: 'Pre-war houses vary so much in Bellevue that we trust arithmetic over the date the house went up. Capacity to spare earns the charger a run of its own, typically on a 40 to 60 amp breaker depending on the unit. A shortfall earns one written price for load management and another for a panel or service upgrade. Campbell County takes the electrical permit, and we file it and arrange the final inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Bellevue Choose Us for EV Charger Installation',
    whyParagraph:
      'Houses from before 1940 are routine for our licensed electricians in Bellevue. They size up the old panel and whole load before quoting, tell you straight if it needs an upgrade or load management, and keep the price.',
    sharedFaqs: [
      {
        q: 'How much does a home charger installation run in Bellevue?',
        a: 'You get one flat-rate figure after an electrician has been inside the panel. It comes from your choice of charger, the distance from that panel to where the car parks, and any panel work. In houses this old, finding a route for the wire can be the tricky part. You approve first, and financing is available.',
      },
      {
        q: 'Can a charger installation be done in one day in Bellevue?',
        a: 'For most houses, yes, at several hours of work. A panel or service upgrade turns it into a longer project, and we give you that timeline before starting, including when the power will be off.',
      },
      {
        q: 'Why not just wire the charger myself in Bellevue?',
        a: 'On wiring this old, a do-it-yourself Level 2 install is where small errors become heat in the wall. The breaker and conductor size must suit the charger, the panel needs its load worked out, and Campbell County expects a permit plus an inspection. Every one of those steps belongs to a licensed electrician.',
      },
    ],
  },
};
