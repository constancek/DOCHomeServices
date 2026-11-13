import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const downtown: LocationServiceCopy = {
  localParagraph:
    'Nearly every home in Downtown Cincinnati is an apartment or condo, most in buildings of 50 or more units, and Census figures put renters at almost nine in ten households. That makes a charger here a building decision. Tenants need the landlord’s written approval, condo owners need the association’s, and chargers in shared garages are the owner’s or manager’s call. The building’s service has to carry it, so we review the panel and run a load calculation, tell you if Level 1 will do, and fix the price first.',
  emergencyParagraph:
    'If a charger, plug or receptacle feels hot, looks scorched or is melting, or the breaker quits on every charge, residents should stop charging and alert management. Cut that circuit if the panel is safe to reach. With smoke or fire, get out of the building and call 911. Managers usually see us the same day, weekends included.',
  commonIntro:
    'From condo owners to building managers, these are the charger requests we get in Downtown Cincinnati:',
  localFaqs: [
    {
      q: 'I rent an apartment in Downtown Cincinnati. Can I get an EV charger?',
      a: 'Only through your landlord or building manager. They need to approve it in writing and book the work, and a charger in a shared garage is entirely their call. Ask management first; if they agree, we assess the building’s capacity and price the job for them. We install chargers, not lease terms.',
    },
    {
      q: 'As a condo owner in Downtown Cincinnati, can I add a charger in a shared garage?',
      a: 'With the association’s approval, yes, and the association decides where chargers go in a shared garage. The circuit may come from your unit’s panel or from a house panel the association controls. We run the load calculation on whichever feeds it and price the work for both of you to review.',
    },
  ],
  overrides: {
    ctaLine: 'EV charger installs for condos and managed buildings in Downtown Cincinnati',
    band1Heading: 'When an Apartment or Home in Downtown Cincinnati Needs an EV Charger',
    commonSituations: [
      'A condo association weighing chargers for a shared garage',
      'A building manager fielding requests from tenants with new EVs',
      'A condo owner whose unit panel has no open spaces for a 240-volt circuit',
      'An owner who wants to charge off-peak instead of paying at public stations',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Downtown Cincinnati',
        body: 'For a building owner, chargers in Downtown Cincinnati are fast becoming an amenity residents ask about on the tour, and they help when units are leased or sold. For a resident, Level 2 refills the battery far faster than a wall receptacle, so the car is full by morning with no search for a public station and no line. Plugging in at home usually costs less than public charging, and plenty of utilities bill late-night power lower. In buildings from before 1940, conductor size, the breaker and the ground matter more than ever, because a long session on an undersized circuit is how old wiring cooks.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Downtown Cincinnati',
        body: 'Not every resident needs a charger. Someone who drives only now and then and parks beside a sound receptacle can often live on the Level 1 cord that ships with the car, plugged into 120 volts, slow as it is. That’s a case where you don’t need us. Management should confirm the outlet has a circuit to itself, and the cord should never run through an extension cord or an aged, loose or warm outlet. Daily drivers and two-EV households usually want Level 2 on its own 240-volt circuit. Without an assigned space off the street, a home charger rarely works, and we’ll say that.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Downtown Cincinnati',
        body: 'Whether there’s room is a question for the load calculation, run on the unit’s panel or on the building’s service, depending on what feeds the space. Room means a dedicated circuit. No room means a load-management device and a panel or service upgrade, priced next to each other, and the owner or association decides. Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits for addresses in Downtown Cincinnati, and we handle that from filing to final.',
      },
    ],
    whyTitle: 'Why Owners and Managers in Downtown Cincinnati Choose Us for EV Charger Installation',
    whyParagraph:
      'Owners and managers use our licensed electricians because we assess the panel and the building load before quoting, tell you plainly whether it needs more capacity or load management, and install to code at a price agreed first.',
    sharedFaqs: [
      {
        q: 'How is an EV charger priced for a building in Downtown Cincinnati?',
        a: 'As a flat rate after we’ve checked the panel and the building’s capacity. The charger, the distance from the panel to the parking space, and any panel or service work set the figure, and long runs in a garage add to it. Financing is available.',
      },
      {
        q: 'How long does an EV charger install take in Downtown Cincinnati?',
        a: 'Several hours for a single charger on most jobs. Panel work, building access rules and association approvals can stretch the schedule. We set out the timeline with management before we start, including any time the power will be off.',
      },
      {
        q: 'Can our building’s maintenance staff wire an EV charger in Downtown Cincinnati?',
        a: 'Not unless they’re licensed electricians. The breaker and wire must match the charger, a load calculation has to show the service can carry it, and the city requires a permit and inspection. In a large building, the stakes are higher.',
      },
    ],
  },
};
