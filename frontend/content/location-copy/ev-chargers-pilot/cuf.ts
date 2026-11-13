import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'Renters fill roughly five of every six occupied homes in CUF, by Census figures, which puts the landlord’s signature ahead of any charger. Tenants get written approval and the owner books us. Clifton Heights and Fairview hold the oldest stock, many houses predating 1940, and an untouched original service in one of those can leave almost no headroom for a 240-volt line. We open the panel, work the load calculation, admit when the Level 1 cord will cover a light schedule, and lock the price before wiring.',
  emergencyParagraph:
    'Tenants who see a charger or receptacle discolored or melting, catch a scorched odor during a charge, or watch the breaker drop every session should stop charging and tell the landlord. With a dry, reachable panel, switch that breaker off. Fire or smoke means getting out and dialing 911. Owners can usually get us the same day, weekends included.',
  commonIntro:
    'In CUF, charger requests from owners of two-families and walk-ups tend to look like these:',
  localFaqs: [
    {
      q: 'As a tenant in CUF, how do I get a charger installed?',
      a: 'Ask the owner, in writing. A landlord’s written approval comes first, and then the landlord or property manager schedules us. Any shared lot is entirely the owner’s call. We install chargers, not lease terms, so the lease conversation stays between you two.',
    },
    {
      q: 'Is there panel space for a charger in a pre-1940 house in CUF?',
      a: 'A service that hasn’t been touched since the house was young may have very little spare, while one that was upgraded along the way could be fine. The load calculation tells us, and if it falls short, a device that throttles the charger whenever the building’s demand peaks is often cheaper than new service. Both get priced.',
    },
    {
      q: 'Does a charger make sense if I only have street parking in CUF?',
      a: 'Rarely, and we’d rather tell you that before you spend a dollar. A charger needs a space you control that sits near enough to the panel for a safe run. A cord stretched over a public sidewalk is a hazard. Off-street spaces behind the house are worth a look.',
    },
  ],
  overrides: {
    ctaLine: 'Charger circuits for landlords, two-families and walk-ups in CUF',
    band1Heading: 'When an Apartment or Home in CUF Needs an EV Charger',
    commonSituations: [
      'An owner of a two-family wanting a charger to help fill the next lease',
      'A tenant holding the landlord’s written OK and a new EV with nowhere to plug in',
      'A Fairview house from the 1920s whose original panel is packed',
      'A resident fed up with driving around for an open public plug',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in CUF',
        body: 'Landlords in CUF can treat a Level 2 charger as an amenity, something an EV-driving tenant will pick a unit for, and it adds appeal when the building changes hands. Drivers get a car that refills overnight at a far quicker pace than a wall-outlet trickle, without circling for an open public plug or queuing behind someone else. Home electricity is frequently cheaper than public charging, and plenty of utilities price late-night power lower. Correct breaker size, wire gauge and a sound ground matter in a building this old, where a long session can heat tired connections.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in CUF',
        body: 'Someone near campus who drives twice a week and parks beside a sound receptacle can often live on the Level 1 cord shipped with the car. It pulls from a plain 120-volt outlet and adds range slowly, a few miles each hour, and for that driver you don’t need us. Have the owner confirm the outlet has a circuit to itself, and keep extension cords and old, wobbly or warm receptacles out of the picture. Daily commuting or a second EV usually justifies Level 2 on a separate 240-volt line. When the car lives at the curb, a home charger generally isn’t workable, and we’ll be upfront.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in CUF',
        body: 'How old the building is matters less than what the load calculation shows. Headroom on the service means the charger gets a line of its own. A shortfall means the owner sees a load-management device priced against a panel or service upgrade and decides. Because CUF is a Cincinnati neighborhood, Inspection Bureau, Inc. (IBI) reviews and inspects its electrical permits. We file, then meet the IBI inspector for the final.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in CUF Choose Us for EV Charger Installation',
    whyParagraph:
      'Owners in CUF keep calling our licensed electricians because we read the panel and run the numbers before quoting, say flatly whether the building wants more service or a load manager, and wire to code at the agreed price.',
    sharedFaqs: [
      {
        q: 'How much does a landlord pay for a charger install in CUF?',
        a: 'A flat rate, set after we’ve seen the panel. The charger model, the length of wire between the panel and the parking space, and any service work move the figure, and older houses here are likelier to need that work. Financing exists for owners who want it.',
      },
      {
        q: 'How long does a charger job take for a building in CUF?',
        a: 'Several hours in most cases, longer when the panel or service needs upgrading first. The owner gets the timeline ahead of time, so tenants hear when their power will be cut and when the car can be plugged in.',
      },
      {
        q: 'Could a handy owner wire a charger in CUF without an electrician?',
        a: 'It isn’t worth the risk. A 240-volt charger line has to match the unit, pass a load calculation against everything the building already pulls, and go through permit and inspection. Mistakes hide inside old walls and show up as heat. Hire a licensed electrician.',
      },
    ],
  },
};
