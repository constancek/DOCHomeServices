import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const whiteOak: LocationServiceCopy = {
  localParagraph:
    'In White Oak, two-thirds of the houses went up between 1940 and 1979, Census figures show, with the median in 1968. Panels from that era were often filled breaker by breaker as kitchens, central air and finished basements came along, so a 240-volt charger circuit may find no open slot. Most homes are detached and owner-occupied, which keeps the job simple once the capacity is there. We start with a panel assessment and load calculation, mention it if Level 1 will do, and fix the price before pulling wire.',
  emergencyParagraph:
    'Unplug if the charger, plug or outlet is hot, discolored or going soft, or smells of melting plastic. A breaker that drops whenever charging starts is a warning. Only switch the circuit off if nothing near it is wet or hot. With smoke or flame, leave and call 911. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Around White Oak, on the Green and Colerain sides alike, these are the usual reasons a charger comes up.',
  localFaqs: [
    {
      q: 'Will the panel in my 1960s house in White Oak have room for a charger?',
      a: 'It might, though many panels from that decade are already full. Open slots matter less than total capacity, so we run a load calculation that counts the furnace, air conditioner, dryer and range. If the numbers work, it’s a dedicated circuit. If they don’t, you get prices for load management and for a panel upgrade.',
    },
    {
      q: 'I rent a house or apartment in White Oak. Can I get a charger put in?',
      a: 'Yes, provided the landlord signs off in writing first. After that, the owner or property manager schedules us, since the charger becomes part of the building. Condo owners clear it with their association instead, and shared-lot chargers are the owner’s call. We install chargers, not lease terms, so the paperwork between you and the landlord stays yours.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 home charging for mid-century houses in White Oak',
    band1Heading: 'When a Home in White Oak Needs an EV Charger',
    commonSituations: [
      'No open breaker spaces left in a panel filled during the 1960s and 1970s',
      'A daily drive that uses more charge than the Level 1 cord puts back overnight',
      'A dryer and air conditioner that trip a breaker when they run at once, before any charger is added',
      'A first EV arriving at a 1960s house with no plan yet for charging it',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in White Oak',
        body: 'Level 2 at home refills the battery much faster than a household outlet, so each session yields more range and the car sits idle less. For a family in a detached house in White Oak, that turns charging into a habit, plugged in at bedtime and full when the coffee’s on. Trips planned around public stations stop. Home power usually undercuts public charging, and many utilities price off-peak electricity lower, so ask yours. A professional install sizes the breaker and wire and grounds the circuit, so a mid-century panel isn’t strained or heated. More buyers now look for a charger when they walk through a house.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in White Oak',
        body: 'In White Oak, some drivers never need us. Short daily distances and an outlet near the car can make the Level 1 cord supplied with the car enough, even though it gains only a handful of miles each hour on 120 volts. Long commutes and two-EV households usually outgrow it and move to Level 2 on a separate 240-volt circuit. Before calling, flip breakers to learn what else shares the cord’s outlet. An extension cord is never acceptable, and an outlet that wobbles, looks old or feels warm should be retired from charging. With street parking only, a home charger usually isn’t practical.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in White Oak',
        body: 'A 1968 build date settles nothing in White Oak, so the load calculation rules. Spare capacity earns the charger a circuit of its own, typically on a 40 to 60 amp breaker depending on the unit. A shortfall brings two quotes, one for a controller that slows the charger at busy times and one for a bigger panel or service. In unincorporated Hamilton County, Inspection Bureau, Inc. (IBI) reviews and inspects the electrical permit.',
      },
    ],
    whyTitle: 'Why Homeowners in White Oak Choose Us for EV Charger Installation',
    whyParagraph:
      'We work out the load on paper before anyone touches the panel. Licensed electricians tell you whether you need an upgrade, a load-management device or just a new circuit, then install to code at a price you approved first.',
    sharedFaqs: [
      {
        q: 'What decides the price of an EV charger installation in White Oak?',
        a: 'Three things move it. One is the charger you choose, another is how much wire separates the panel from your parking spot, and the last is whether the panel needs work to carry the new load. After the panel check you get a single flat rate, with financing if you would rather spread the cost.',
      },
      {
        q: 'How long will installing a home charger take in White Oak?',
        a: 'Several hours on most houses, start to finish, testing included. Add time if the panel needs upgrading or a load-management device goes in with it. Before work starts, we tell you how long the job will run and when the power will be off.',
      },
      {
        q: 'Could I put in an EV charger myself at my house in White Oak?',
        a: 'No. Someone has to size the circuit, check it against everything else the house uses, pull a permit and pass the inspection. That’s a licensed electrician’s work, and a badly sized circuit is the usual reason a charger or outlet runs hot.',
      },
    ],
  },
};
