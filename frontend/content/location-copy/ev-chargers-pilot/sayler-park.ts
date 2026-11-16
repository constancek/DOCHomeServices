import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const saylerPark: LocationServiceCopy = {
  localParagraph:
    'In Sayler Park, half the homes went up in 1939 or earlier, according to Census figures, and about six in ten are lived in by their owners. Many prewar houses have had their service enlarged, but some still carry a small original one with no spare capacity for a 240-volt line. The postwar houses among them tend to have crammed panels. We open the panel and total the load before any figure is mentioned, tell you if the trickle cord suits you, and fix the price before a wire moves.',
  emergencyParagraph:
    'A charger box, plug or outlet that’s hot, browned or smelling of burnt plastic is a reason to quit charging tonight. So is a breaker that pops each session. Only throw the breaker if your hands are dry. Smoke or flame means everybody out and a call to 911. We usually make it out that day, weekends included.',
  commonIntro:
    'In the city’s westernmost neighborhood, these four situations bring us most of our charger calls.',
  localFaqs: [
    {
      q: 'Can a Level 2 charger go into a 1920s house in Sayler Park?',
      a: 'Some can as they stand, especially where the service was upgraded at some point. Others still have a small original service with nothing to spare. The load calculation tells us which, and if the service falls short, we price load management and a service upgrade side by side for you to pick from.',
    },
    {
      q: 'If I need a service upgrade, does Duke Energy get involved?',
      a: 'Yes. Duke Energy Ohio delivers power across Cincinnati, and a bigger service means the utility disconnects and reconnects the line while we replace the equipment. We coordinate that with them, and you hear the whole timeline before work begins, so the house isn’t without power longer than it has to be.',
    },
  ],
  overrides: {
    ctaLine: 'EV charging for prewar and postwar houses in Sayler Park',
    band1Heading: 'When a Home in Sayler Park Needs an EV Charger',
    commonSituations: [
      'A prewar service with no room left for a 240-volt circuit',
      'A commute along River Road that drains more than the cord puts back overnight',
      'A second EV joining the first, with one slow cord shared between them',
      'A breaker that gives out when the space heater and microwave share a winter evening',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Sayler Park',
        body: 'With a Level 2 unit, the car recharges overnight while the house is quiet. It fills the battery at a much quicker pace than an ordinary receptacle, so the car spends less of its life tethered and each charge stretches further. You stop circling for a free public station or waiting for someone else’s car to finish. Plugging in at home generally costs less than paying at those stations, and plenty of utilities knock the price down for off-peak use. Getting the breaker size, conductor gauge and grounding right keeps a prewar house from overheating under the new load. Buyers are starting to ask about chargers on house tours, too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Sayler Park',
        body: 'The slow cord is enough for some households. Someone who works from home or drives little, and parks within reach of a solid outlet, may never need more than that 120-volt trickle, which recovers only a few miles each hour, and we’ll be honest about it. Once the driving gets daily and long, or a second electric car turns up, Level 2 on a 240-volt line of its own is the fix. Find out whether that outlet’s breaker feeds other rooms, and if the cord needs an extension to reach, or the receptacle wobbles or feels warm, stop using it. Curbside parking usually makes home charging a non-starter.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Sayler Park',
        body: 'An older service makes us look harder, yet the arithmetic of the load calculation is what decides. Spare capacity gets the charger its own breaker and run of wire. A service with nothing left gets two written options, a controller that throttles charging whenever the furnace, dryer or range pull hard, or heavier service and a new panel, and the call is yours. Inspection Bureau, Inc. reviews and inspects electrical permits in Cincinnati, and we file ours with them.',
      },
    ],
    whyTitle: 'Why Homeowners in Sayler Park Choose Us for EV Charger Installation',
    whyParagraph:
      'You won’t get a number from us until a licensed electrician has seen the panel and worked the load. Then you hear if an upgrade or a load controller is needed, and the code-compliant install costs what we quoted.',
    sharedFaqs: [
      {
        q: 'How much will an EV charger cost in Sayler Park?',
        a: 'You get a flat number only after we’ve examined the panel. What pushes it up or down is the charger you pick, how much wire it takes to reach your plug-in spot, and whether the panel or service needs attention. Financing is offered, and nothing begins until you agree.',
      },
      {
        q: 'How long does it take to put in a home charger?',
        a: 'Several hours on most jobs, done in one visit. An older house that needs a service upgrade takes longer, because the utility has to be scheduled. We tell you the timeline before starting, so you can plan around any stretch without power.',
      },
      {
        q: 'Why does a home charger need a licensed electrician?',
        a: 'The breaker and wire have to be matched to what the charger draws, the panel has to clear a load calculation, and an inspector signs off on the permit. Older houses add another job, spotting wiring that can’t safely take more. Every step there belongs to a licensed electrician.',
      },
    ],
  },
};
