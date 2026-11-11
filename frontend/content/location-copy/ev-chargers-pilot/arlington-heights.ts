import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const arlingtonHeights: LocationServiceCopy = {
  localParagraph:
    'Arlington Heights is a village of a few hundred homes wedged inside I-75, and Census figures show close to two-thirds were already built by 1939, with a little over half of households renting. Many of those houses were wired long before anyone plugged in a car, and some still run on a modest original service. That decides whether a 240-volt line fits as is or needs load management or an upgrade. We measure first, tell you if the car’s cord is enough, and settle the price before wiring.',
  emergencyParagraph:
    'A plug that scorches, a cable that’s been driven over, a receptacle warming behind a Level 1 cord or a breaker that won’t stay on means unplug now. Only switch that breaker off if you’re dry, and leave for smoke or fire, then call 911. We get to most calls the same day, weekends included.',
  commonIntro:
    'Older houses and a high share of renters shape most of the charger questions we get in this small village, and these come up most:',
  localFaqs: [
    {
      q: 'Will a house built before 1940 in Arlington Heights need a new service for a charger?',
      a: 'Not always. Some of those houses had their service replaced along the way, and some never did. We look at what the panel carries today and do the math on the load. When it falls short, a load-management device often beats a new service on price, and both options get written up for you.',
    },
    {
      q: 'Can my landlord add a charger to the house I rent in Arlington Heights?',
      a: 'Yes, and the request should come from the landlord or property manager, with their written approval, since the charger is wired into their building. They book the visit and approve the price. We stay out of the lease side; we install chargers, not lease terms.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charger installation for older houses in Arlington Heights',
    band1Heading: 'When a Home in Arlington Heights Needs an EV Charger',
    commonSituations: [
      'A pre-war house on its original service with no spare room for a charger circuit',
      'A tenant’s new EV and an owner deciding whether to add a charger',
      'A Level 1 cord on a 1930s receptacle that’s warm to the touch by dawn',
      'A driver tired of waiting at public chargers after work',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Arlington Heights',
        body: 'Charging at home ends the hunt for a free public charger and the wait once you find one. A Level 2 unit refills the pack far quicker than the cord that came with the car, so after a night plugged in at a house in Arlington Heights, there’s plenty of range. It usually costs less than a station, and many utilities sell overnight power more cheaply, so ask yours. In houses built before 1940, the larger payoff is safety, because a correctly sized breaker, the right wire gauge and proper grounding stop tired wiring from overheating. Future buyers are starting to look for chargers as well.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Arlington Heights',
        body: 'Plenty of light drivers in this small village can do without us. A car that makes short hops and sleeps near a healthy receptacle may get by on the trickle from its own cord at 120 volts, a handful of miles back per hour, and we’ll say so when that’s you. Commuters, daily drivers and two-EV homes usually want Level 2 wired on a separate 240-volt line. Find out first whether that receptacle shares a breaker with a bedroom or kitchen, and keep the cord off extension cords and out of old outlets that wobble or warm up. Curbside parking usually rules out a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Arlington Heights',
        body: 'A house from the 1920s in Arlington Heights can surprise us either way, so arithmetic decides rather than age. With headroom, the charger is wired on a run nothing else shares, typically on a 40 to 60 amp breaker depending on the unit. Without it, the owner sees two quotes, load management or a panel or service upgrade, and chooses. Electrical Panel Replacement covers the upgrade side. We pull the permit and set up the inspection.',
      },
    ],
    whyTitle: 'Why Landlords and Owners in Arlington Heights Choose Us for EV Charger Installation',
    whyParagraph:
      'Pre-war wiring is normal work for us in Arlington Heights. Our licensed electricians size up the service and panel against everything the house runs, say bluntly if it needs an upgrade or load management, and keep the quoted price.',
    sharedFaqs: [
      {
        q: 'How much will a charger installation cost in Arlington Heights?',
        a: 'The quote is one flat rate, written once an electrician has looked over the panel, and it holds. Three things move it, namely the charger, the length of wire from the panel to the parking spot, and whether a century-old panel needs work first. Financing is available, and you approve the figure before we begin.',
      },
      {
        q: 'Can a charger go in on the same visit in Arlington Heights?',
        a: 'On most jobs the install takes several hours once the plan is approved. An older house that needs a panel upgrade takes longer, and we tell you how much longer before starting. The timeline is part of the quote, so nothing about the schedule is a guess.',
      },
      {
        q: 'Why shouldn’t I install a Level 2 charger on my own in Arlington Heights?',
        a: 'Because the hard parts are invisible. Sizing the circuit, a load calculation on what may be an original service, the permit and the final inspection all need a licensed electrician. On wiring this old, a wrong guess about capacity is how a breaker trips nightly or a connection overheats.',
      },
    ],
  },
};
