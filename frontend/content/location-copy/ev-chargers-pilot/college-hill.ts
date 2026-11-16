import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const collegeHill: LocationServiceCopy = {
  localParagraph:
    'Census figures split the housing three ways in College Hill. About a third was built before 1940, another third between 1940 and 1969, and the rest later. A prewar house may still run on a small first service, while a postwar box is often crammed with breakers. Half the homes are detached houses, the easy case when the car parks off the street. We open the panel and do the load math first, flag it when the trickle cord will cover you, and fix the price before wiring.',
  emergencyParagraph:
    'Melted plastic around the plug, scorch marks on the receptacle, a charging cable somebody backed over, or a breaker that falls the moment charging begins all mean unplug. Shut that circuit off if it’s safe to reach, and phone 911 at the first smoke or flame. College Hill gets same-day service on most calls, weekends included.',
  commonIntro:
    'Up and down Hamilton Avenue, from prewar houses to postwar ones, the charger questions we get in College Hill tend to fall into these.',
  localFaqs: [
    {
      q: 'In College Hill, does a packed panel in a postwar house rule out a charger?',
      a: 'Not by itself. A full panel has no open slot for the breaker, but that’s different from having no capacity, and the load calculation shows which one you’re dealing with. Load management sometimes gets around it for less than a service upgrade, and we price both.',
    },
    {
      q: 'Can renters in College Hill get an EV charger installed?',
      a: 'With written approval from the landlord, yes, and the landlord schedules the job with us. Around half the homes here are rented, so this is a common one. Condo owners need their association’s go-ahead too. We install the charger and leave the lease to you and the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 EV chargers for prewar and postwar houses in College Hill',
    band1Heading: 'When a Home in College Hill Needs an EV Charger',
    commonSituations: [
      'A 1950s breaker panel so full that a 240-volt breaker has nowhere to sit',
      'A dryer and an air conditioner already tripping breakers before any car plugs in',
      'Two EVs under one roof and a lone portable cord passed between them',
      'A daily commute that the slow cord can’t make up overnight',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in College Hill',
        body: 'For a house in College Hill, a Level 2 unit means the car regains far more range overnight than a household receptacle could give, so there’s more driving per charge and less time parked. You wake to a ready car rather than planning the day around a public charger or a queue for one. Power at home often comes cheaper than public charging, and many utilities set lower prices for off-peak use, which fits overnight charging. Installed properly, breaker, wire size and grounding all match the charger, sparing a postwar panel from heat and strain. House hunters increasingly count a charger as a plus.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in College Hill',
        body: 'Some households really don’t need us, and we tell people so in College Hill as anywhere. A car that runs light errands and sleeps near a sound outlet can live on its portable cord, which taps 120 volts and regains only a few miles hourly, plenty for short hops. Long commutes, heavy weekday mileage or a second EV are what justify Level 2 on its own 240-volt line. Check that the cord’s receptacle answers to a breaker of its own, skip extension cords altogether, and retire any outlet that’s loose or warm. Where the car stays at the curb, home charging rarely works out.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in College Hill',
        body: 'A postwar box packed with breakers can still have capacity, and a prewar one can surprise either way, so in College Hill, the load calculation rules. Spare capacity earns a dedicated circuit, typically on a 40 to 60 amp breaker depending on the unit. Missing capacity brings two quotes, load management or a heavier panel and service, for you to weigh. We file the electrical permit, and Inspection Bureau, Inc. reviews and inspects it.',
      },
    ],
    whyTitle: 'Why Homeowners and Renters in College Hill Choose Us for EV Charger Installation',
    whyParagraph:
      'Nothing gets priced here until a licensed electrician has opened the box and tallied the load. You hear directly whether an upgrade or load management fits, the work meets code, and the price stays where we set it.',
    sharedFaqs: [
      {
        q: 'How is the cost of an EV charger worked out in College Hill?',
        a: 'Once the panel has been looked over, a single flat rate is quoted. The charger, the cable distance between breaker box and parking spot, and any panel repairs shape it. You sign off on the number first, and financing can be arranged.',
      },
      {
        q: 'How long does it usually take to install a Level 2 charger in College Hill?',
        a: 'Several hours handles the usual job. A panel upgrade beforehand pushes that longer and sometimes into another visit. The schedule reaches you ahead of time, showing when the electricity goes off and when the car can charge again.',
      },
      {
        q: 'Do I need a licensed electrician for an EV charger in College Hill?',
        a: 'Yes. The circuit must fit the charger, a load calculation must show the panel can handle it beside everything else, and the permit and inspection have to be pulled and passed. That’s licensed work, not a weekend project.',
      },
    ],
  },
};
