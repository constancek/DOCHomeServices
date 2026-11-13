import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const sedamsville: LocationServiceCopy = {
  localParagraph:
    'In Sedamsville, nearly three in four homes were built in 1939 or earlier, according to Census figures, many of them worker cottages and two-family houses on the hill above River Road. Two in three are rented, so the owner has the final word. A few cottages gained new panels during rehabs, and the rest may still be on the modest service they started with. We open the panel, add up the load, tell you if the car’s own cord is enough, and fix the price first.',
  emergencyParagraph:
    'Stop charging if the outlet or wall unit is too hot to hold, the plug has burn marks, or the air smells scorched. A breaker dropping on each charge counts too. Touch the panel only with dry hands, and never if it’s warm. With smoke or flame, leave and phone 911 from outside. Most calls get same-day help, weekends included.',
  commonIntro:
    'Between the cottages, the two-family houses and the small apartment buildings along River Road, these are the four charging calls we hear most.',
  localFaqs: [
    {
      q: 'Can historic district rules affect where a charger goes in Sedamsville?',
      a: 'Parts of the neighborhood sit in two National Register districts, and that listing on its own doesn’t bring city design review. Whether a local designation covers your block is something we check with the city first, especially for a charger on an outside wall facing the street.',
    },
    {
      q: 'I rent half of a two-family in Sedamsville. How do I get a charger?',
      a: 'Ask your landlord for written approval first. The owner or manager books the job and we quote them, since the charger and its circuit become part of the building. If each half has its own panel, we check yours. Charger work is our job and the lease is not, so the rest is between you and the owner.',
    },
  ],
  overrides: {
    ctaLine: 'Chargers for cottages and two-family houses in Sedamsville',
    band1Heading: 'When an Apartment or Home in Sedamsville Needs an EV Charger',
    commonSituations: [
      'An EV on order for a cottage whose service has never been enlarged',
      'A tenant on one side of a two-family asking the landlord for a charging circuit',
      'A Level 1 cord that runs all night and still leaves the battery short',
      'A rehabbed house with a newer panel and space left for a 240-volt circuit',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Sedamsville',
        body: 'A charger on the wall frees you from public stations. Level 2 pours range back into the battery much faster than a household receptacle, which shortens the time the car sits connected and stretches what each charge gets you. Plug it in at bedtime and the car is ready at sunrise. At home, charging usually costs less than at public stations, and many utilities sell overnight power for less. In a house built before 1940, matching the breaker, wire and ground to the charger matters even more, because it stops old circuits from overheating. Owners renting or selling a rehabbed cottage can point to it too.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Sedamsville',
        body: 'Not every EV here needs new wiring. Someone making a handful of short trips, with a sound receptacle near where the car sits, can get along on the portable charger that shipped with it, and we’d rather say that than sell you one. Running on 120 volts, it adds range at a crawl. Daily commutes, long drives or a second EV call for Level 2 on its own 240-volt run. In a cottage this old, confirm that outlet feeds nothing else and shows no wear or warmth, and skip power strips and adapters entirely. If your car spends the night at the curb, home charging rarely works out.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Sedamsville',
        body: 'A pre-1940 house raises the question, and the numbers answer it. When the service has headroom, the charger is wired to a breaker of its own. When it doesn’t, two quotes arrive, one for a controller that holds charging back while the house is busy and one for heavier service with a new panel, and the choice is yours. Electrical permits in Cincinnati are reviewed and inspected by Inspection Bureau, Inc., and we file yours.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Sedamsville Choose Us for EV Charger Installation',
    whyParagraph:
      'Prewar wiring is ordinary work for our licensed electricians. They open the panel and figure the load before any quote, say plainly if an upgrade or load management is needed, and wire to code at the agreed price.',
    sharedFaqs: [
      {
        q: 'What does it cost to add an EV charger in Sedamsville?',
        a: 'Expect one flat rate after we inspect the panel. The charger, the stretch of wire between the panel and your charging spot, and any work the panel or service needs all feed into it, and older houses need that work more often. Financing can spread the cost.',
      },
      {
        q: 'How long will a charger installation take in an older house?',
        a: 'Fitting the charger itself usually takes several hours. Where the panel or service has to be upgraded first, the job stretches, and the utility may need to book a disconnect. You get the schedule before we start, so the family or the tenants know when the lights will be off.',
      },
      {
        q: 'Can an owner put in a charger circuit without an electrician?',
        a: 'We’d talk you out of it. Charger circuits need a breaker and wire matched to the unit, a load calculation that proves the panel can cope, and a permit followed by an inspection. Old wiring leaves less room for error. A licensed electrician should do the work, and that’s who we send.',
      },
    ],
  },
};
