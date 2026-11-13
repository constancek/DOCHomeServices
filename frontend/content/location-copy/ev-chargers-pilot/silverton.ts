import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const silverton: LocationServiceCopy = {
  localParagraph:
    'Close to six in ten homes in Silverton are rented, and about a quarter sit in three- and four-unit buildings, according to Census figures, so the landlord often decides on a charger. The typical home went up in 1959. Postwar panels were small and most filled up long ago, while newer buildings may have room or can use load management. An electrician reads the panel and tallies the load first, tell you if the cord that came with the car covers your driving, and set the price before wiring.',
  emergencyParagraph:
    'End the charge right away if the outlet, plug or charger is hot, looks melted or smells like burning, and do the same when the breaker trips each session. Kill that circuit only while you’re dry. Smoke or flames mean getting the household out, then dialing 911. We get to most calls that day, Saturdays and Sundays included.',
  commonIntro:
    'In a village of fourplexes, apartments and postwar houses, these four situations lead most of our charger calls.',
  localFaqs: [
    {
      q: 'I own a fourplex in Silverton. Should I add chargers for tenants?',
      a: 'That depends on how many tenants drive EVs and what the building’s service can carry. We run a load calculation for the whole building, then price one shared charger, chargers for several units, or load management that splits power among them. Each tenant still needs your sign-off in writing before an install.',
    },
    {
      q: 'Who handles the permit for a charger in Silverton?',
      a: 'Silverton is a village with its own permit process at Village Hall, and electrical work is inspected under the village’s code. We file the permit, arrange the inspection and deal with the paperwork, so you don’t have to make the trip yourself or wait in line for it.',
    },
  ],
  overrides: {
    ctaLine: 'Home and fourplex EV charging in Silverton',
    band1Heading: 'When an Apartment or Home in Silverton Needs an EV Charger',
    commonSituations: [
      'A tenant’s first EV and a landlord deciding on a charging circuit',
      'A 1950s panel with every space already holding a breaker',
      'Charging overnight off-peak instead of paying at a public station',
      'Two EVs in one household fighting over a single slow cord',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Silverton',
        body: 'A landlord can offer a charger as one more reason for an EV driver to sign and stay. An owner gets to stop scheduling the week around public stations. Level 2 refills the battery much faster than an ordinary receptacle, so the car is plugged in for less time and starts each morning ready. Charging at home usually comes in cheaper than public charging, and many utilities price off-peak power lower. A breaker, wire run and ground sized correctly keep the circuit cool and spare an older panel the strain. Buyers have also started asking whether a charger comes with the house.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Silverton',
        body: 'If the car makes short hops around the village and sits near a reliable outlet, the portable charger in the trunk may be all it ever needs, and we’ll say keep using it. On 120 volts it puts range back at a crawl. Commuters and two-EV households tend to need Level 2, wired at 240 volts on a line of its own. Before you call, make sure that receptacle isn’t also running a window AC or a freezer, and don’t plug the portable unit into a power strip, an adapter or a worn, wobbly or warm outlet. Tenants and owners parking on the street generally can’t charge at home.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Silverton',
        body: 'Postwar or newer, the house doesn’t settle it; the load calculation does. Enough capacity means a dedicated circuit for the charger. Not enough, and we price load management, which slows charging while the building draws heavily, beside a panel or service upgrade. In a fourplex, that might mean one panel or several. You pick the option, and we pull the permit and arrange the inspection.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Silverton Choose Us for EV Charger Installation',
    whyParagraph:
      'Nothing gets priced until a licensed electrician has opened the panel and added up the load. Upgrade, load management or neither, you hear it straight, and the charger goes in to code at the agreed figure.',
    sharedFaqs: [
      {
        q: 'How is an EV charger installation priced in Silverton?',
        a: 'One flat rate, set after the panel check. It covers the charger, the wire run from the panel to the car, and any panel work. Landlords putting chargers at several units can use our financing, and the figure is fixed before anyone starts.',
      },
      {
        q: 'How long does a home EV charger install take?',
        a: 'Several hours on most jobs. A panel upgrade adds time, and in a multi-unit building we may schedule the work so tenants lose power as briefly as possible. The timeline comes before we start, so a landlord can give notice.',
      },
      {
        q: 'Can a landlord or handyman wire a Level 2 charger instead?',
        a: 'Not safely. A charger circuit needs a breaker and wire sized to the unit, a load calculation that clears the panel, and a permit with an inspection. That’s licensed electrician territory. In a rental, a permitted install also keeps the owner on solid ground if anything goes wrong.',
      },
    ],
  },
};
