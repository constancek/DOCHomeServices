import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const melbourne: LocationServiceCopy = {
  localParagraph:
    'Melbourne has about 200 homes, Census figures show, almost all of them detached and owner-occupied. Close to a third were built in 1939 or earlier, when a modest service was plenty and cars ran on gasoline. Over half use electric heat, so that service already works hard every January. Our first step is the panel and the load math, then a frank word if a plug-in cord suits your driving, then a fixed price ahead of any wiring.',
  emergencyParagraph:
    'Unplug the car if the cord has been run over or split, the plug comes out warm or discolored, or the breaker quits whenever charging starts. When the panel can be reached safely and dry, switch that circuit off. Smoke or flame means getting everyone out and calling 911. We reach most calls the same day, weekends as well.',
  commonIntro:
    'Half the houses in Melbourne were built before 1958, and charger calls there usually trace back to one of these.',
  localFaqs: [
    {
      q: 'Will a 1930s house in Melbourne have space for a Level 2 charger?',
      a: 'Some will and some won’t, and the date on the deed can’t tell us which. We add the charger to the electric heat, the water heater and the rest of the service. If it fits, it gets a dedicated circuit. If it doesn’t, we price load management next to a service upgrade, handled with Duke Energy Kentucky.',
    },
    {
      q: 'Can a charger be mounted outdoors at a house in Melbourne?',
      a: 'Yes. Pick a unit rated for outdoor use, fix it firmly to the wall and shield it from rain and ice, and a Kentucky winter won’t bother it. We choose a spot handy to where you park, keep the run from the panel short, and seal every point where wire enters the house.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 home charging for older riverside houses around Melbourne',
    band1Heading: 'When a Home in Melbourne Needs an EV Charger',
    commonSituations: [
      'A first EV on order and a pre-war service with nothing to spare',
      'Wanting charging moved to late-night hours at home rather than a public plug',
      'Electric heat and a new charger both asking a lot of one small service',
      'A breaker that already pops when the dryer and the heat run together',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Melbourne',
        body: 'On a Level 2 unit the battery comes back far faster than on a household plug, so each night buys more driving and the car is rarely stuck waiting on itself. Plug in when you get home off KY 8 and it’s topped up before breakfast, with no public station involved. Charging off your own meter usually beats public prices, and plenty of utilities drop the rate after hours, so ask yours. A correctly sized breaker, the right gauge of wire and a solid ground keep the whole circuit from running hot. Sellers in Melbourne may find buyers asking about one, too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Melbourne',
        body: 'With a few short errands each week and a sound outlet within reach of the car, the 120-volt cord packed with it might be all the charging you ever do. Slow suits light driving fine, and we’d say so before taking a dime. Long commutes into Cincinnati, or a second EV in the household, are where Level 2 on its own 240-volt run belongs. Start by confirming that outlet serves nothing else, and never let the cord ride an extension or sit in an aging receptacle that’s gone loose or warm. Where a car spends its nights curbside, a home charger usually won’t work.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Melbourne',
        body: 'Old service or not, the load calculation decides. Healthy headroom means a dedicated circuit and a plain job. Thin headroom means a load-management device and a panel or service upgrade both get quoted on one page, with the decision left in your hands. Permit and inspection are ours to arrange, and no wall closes until the inspector has passed what’s behind it.',
      },
    ],
    whyTitle: 'Why Homeowners in Melbourne Choose Us for EV Charger Installation',
    whyParagraph:
      'You get licensed electricians who start at your panel and the load math, tell you plainly when an upgrade or load management is or isn’t needed, and wire everything to code at a price settled up front.',
    sharedFaqs: [
      {
        q: 'What will a Level 2 charger installation cost in Melbourne?',
        a: 'A single flat price, given after we’ve seen the panel. The unit, the distance from the panel to the parking spot and any panel work are what move it. In the older houses here, panel work is often the biggest piece of the bill. Financing is available.',
      },
      {
        q: 'How long does an EV charger take to put in at a house in Melbourne?',
        a: 'Most go in over several hours. A service upgrade stretches that out, since the utility has its own part to play. You hear the timeline before work begins, including when the lights will be off and for roughly how long.',
      },
      {
        q: 'Is it reasonable to wire my own charger in Melbourne?',
        a: 'Not really. Circuit sizing and a load calculation take training, and the job calls for a permit and an inspection. An error tends to show up later as heat at a connection. A licensed electrician should do it and stand behind it.',
      },
    ],
  },
};
