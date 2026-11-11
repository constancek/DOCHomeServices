import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evanston: LocationServiceCopy = {
  localParagraph:
    'Around seven in ten homes in Evanston were standing by 1939, Census figures show, and most are detached houses or two-families. A house that old can still depend on a modest first service with little left for a 240-volt line, so the panel decides whether a charger is a quick add or a bigger project. Where things are tight, load management often keeps the bill down. We start with the panel and load math, say so if the factory cord covers you, and set the price first.',
  emergencyParagraph:
    'End the charge immediately for a hot, charred or melted charger, plug or receptacle, a burning odor, a breaker tripping on each charge, or a slow cord fed through an extension cord or a warm old outlet. Turn the circuit off only when that’s safe, and call 911 from outside if smoke appears. Most calls see same-day service, weekends included.',
  commonIntro:
    'Among the pre-1940 houses and two-families near Xavier University, charger calls usually trace back to one of these.',
  localFaqs: [
    {
      q: 'Is a house built before 1940 too old for a Level 2 charger in Evanston?',
      a: 'No house gets ruled out on age alone. A pre-1940 house may carry a small original service, yet only the load calculation reveals what’s actually free. A load-management device that holds charging back while the stove or dryer runs often costs less than a service upgrade, and both get quoted.',
    },
    {
      q: 'Can a charger be mounted outside on a house in Evanston?',
      a: 'Yes. Weatherproof, outdoor-rated units with secure mounting and protected connections hold up fine outdoors. We trace the route back to the panel, which in an older house can be the largest part of the job, and quote it before anything gets drilled.',
    },
  ],
  overrides: {
    ctaLine: 'Home EV charging for pre-1940 houses and two-families near Xavier',
    band1Heading: 'When a Home in Evanston Needs an EV Charger',
    commonSituations: [
      'An old house whose first service has almost nothing left over',
      'A brand-new EV and a portable cord too slow for weekday driving',
      'A two-family where upstairs and downstairs both want to charge',
      'Deciding your own charging hours instead of relying on public plugs',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Evanston',
        body: 'At home, Level 2 refills the battery at a rate no ordinary outlet can match, so you get more driving per charge and the car sits idle less. It also hands you the schedule. Connect at night, wake to a charged car, and forget hunting for a public plug. Electricity at home normally costs less than charging in public, and lower off-peak pricing is common among utilities. An old house raises the stakes on installation, because breaker, wire and grounding must be sized correctly to prevent overheating. Buyers are also beginning to ask whether a house has a charger.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Evanston',
        body: 'Drive lightly and park close to a sound receptacle, and the cord packed with your car might be enough, in which case we’ll tell you to keep your money. It runs from regular 120-volt household power and returns only a little range for each hour on the plug. Daily commuters, long-distance drivers and two-EV households generally want Level 2 fed by its own 240-volt line. Find out whether other rooms share that receptacle’s breaker, which in an old house is quite possible. Skip extension cords, and stop using outlets that are aged, loose or warm. Street parking usually makes a home charger impractical.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Evanston',
        body: 'Plaster and old framing don’t decide this, because arithmetic does, adding the charger to every load already on the panel. Spare capacity earns the charger a breaker of its own. A shortfall earns two quotes, load management and a panel or service upgrade, and you pick between them. Inspection Bureau, Inc. (IBI) reviews electrical permits at city addresses and performs the final inspection.',
      },
    ],
    whyTitle: 'Why Homeowners in Evanston Choose Us for EV Charger Installation',
    whyParagraph:
      'Our licensed electricians check the panel and the household demand first, tell you without spin whether an upgrade or load management makes sense, and complete the install to code at a flat, agreed price.',
    sharedFaqs: [
      {
        q: 'How much does an EV charger installation cost in Evanston?',
        a: 'It comes as one flat rate, quoted after a look at your panel. The charger, the distance the cable travels to your parking spot, and any panel work all play in, and older houses can mean a longer route. Financing is available if you want it.',
      },
      {
        q: 'How long does it take to install a charger in Evanston?',
        a: 'Most jobs take several hours. An upgrade to the panel or service makes it longer, and fishing cable through plaster and old framing can add time. We share the timeline before starting, so you can plan around the power being off.',
      },
      {
        q: 'Can I install an EV charger myself in Evanston?',
        a: 'We’d steer you away from it. Circuit size, demand calculation and grounding all have to be correct, and the job requires a permit plus a final inspection. Old wiring makes mistakes costlier, so a licensed electrician is the sensible choice here.',
      },
    ],
  },
};
