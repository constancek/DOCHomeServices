import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const millvale: LocationServiceCopy = {
  localParagraph:
    'About a third of Millvale’s residents live in public housing, mostly 1950s townhomes run by the Cincinnati Metropolitan Housing Authority, and most households rent, Census figures show. For those residents a charger is management’s decision, not a service call to book. Owners of private houses and small rental buildings can call us themselves. We look inside the panel and total the load first, own up when a plug-in cord covers the driving, and give a fixed price before anything is wired.',
  emergencyParagraph:
    'A resident who finds a hot or scorched outlet, or smells something burning while the car charges, should unplug and tell management right away. Owners can switch that circuit off at the panel when it’s safe to reach. Smoke or fire means leaving the building and calling 911. Owners get a same-day visit on most calls, weekends included.',
  commonIntro:
    'Charger requests here mostly reach us through owners and managers, and these four come up most often in Millvale.',
  localFaqs: [
    {
      q: 'I live in CMHA housing in Millvale. Can I get a charger?',
      a: 'Not by hiring us yourself. In managed communities a charger is management’s decision, so put the request to the housing authority or your property manager in writing. If they want one, they book the work and we deal with them directly. Until then, keep any cord off extension cords.',
    },
    {
      q: 'I own a rental in Millvale. Should I add a charger for a tenant?',
      a: 'If a tenant asks and the panel has room, it can be worth doing, and the call is yours. Put whatever you agree with the tenant in writing. We install chargers, not lease terms. Our part is checking the panel, running the load calculation and handing you one flat price.',
    },
  ],
  overrides: {
    ctaLine: 'EV chargers for owners and managers of homes and rentals in Millvale',
    band1Heading: 'When an Apartment or Home in Millvale Needs an EV Charger',
    commonSituations: [
      'A tenant with a new EV putting a charger request to the owner in writing',
      'An owner asking whether a renovated townhome’s panel can take a 240-volt circuit',
      'A plug-in cord snaking out a window to an outlet that runs warm',
      'A driver along Beekman Street tired of relying on public stations',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Millvale',
        body: 'For a landlord, a Level 2 charger is something a tenant with an EV values, and future buyers of the property increasingly look for one. It puts energy back into a battery far faster than any household plug, so the car spends less of its life tethered and more of it driving. Plugging in overnight means a full battery at sunrise instead of a hunt for a public station. Charging at the property usually costs less than public stations, and many utilities shave the price of off-peak power. A licensed install sizes the breaker and wire and grounds the circuit, so nothing overheats.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Millvale',
        body: 'A resident who covers a short distance each day, with a working outlet close to the car, may never outgrow the slow 120-volt cord that shipped with it. That’s worth knowing before anyone spends a cent. Long commutes, or a household with two EVs, are what Level 2 on a separate 240-volt circuit is for. Ask first whether that outlet serves anything else, and never stretch the cord with an extension or trust a receptacle that is cracked, loose or warm. When the car is parked out on the street, a home charger is rarely practical, and we will tell the owner that.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Millvale',
        body: 'The load calculation shows whether the panel can carry a charger alongside everything else, which tells us more than the year a townhome went up. Room means a dedicated circuit. A shortfall means the owner compares load management with a panel or service upgrade, both priced. Millvale is a City of Cincinnati neighborhood, so Inspection Bureau, Inc. (IBI) reviews and inspects the electrical permit we pull.',
      },
    ],
    whyTitle: 'Why Property Owners in Millvale Choose Us for EV Charger Installation',
    whyParagraph:
      'Owners work with licensed electricians who study the panel and the load numbers before quoting, say plainly whether an upgrade or load management is called for, and install to code at the price both sides agreed.',
    sharedFaqs: [
      {
        q: 'What does a charger install cost for a rental in Millvale?',
        a: 'A flat price, quoted once we’ve opened the panel. The charger, the stretch of wire between the panel and the parking spot, and any panel work decide it. An owner weighing chargers at more than one property can have them quoted together. Financing is available.',
      },
      {
        q: 'How long does an EV charger installation take in Millvale?',
        a: 'Several hours covers most of them, and a panel upgrade adds to that. Before we start, the owner hears the timeline, including when power to the unit will be off, so tenants can plan the day around it and know when the charger is ready.',
      },
      {
        q: 'Can a tenant or owner install a charger in Millvale without an electrician?',
        a: 'We would not. The circuit must suit the charger, the load calculation has to show the panel can bear it, and the city expects a permit and inspection. That’s licensed electrician work, and a tenant shouldn’t open a panel at all.',
      },
    ],
  },
};
