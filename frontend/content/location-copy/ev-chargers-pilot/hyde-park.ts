import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hydePark: LocationServiceCopy = {
  localParagraph:
    'Half of Hyde Park’s housing predates 1940, by Census counts, and a third of its units are in buildings with five or more apartments. A detached house with somewhere off the street to park is usually simple. An older house might still be fed by the modest service it got decades ago, leaving scant headroom for a 240-volt line. Our first step is opening the panel and doing the load math. If the trunk cord suffices, you’ll hear that, and the price is fixed before any wire gets pulled.',
  emergencyParagraph:
    'When the charger housing, its plug or the receptacle feels hot, shows brown marks or smells of scorched plastic mid-session, end the session. Flip that breaker only from a dry spot where nothing is hot to the touch. Smoke or flames call for getting out first and phoning 911. For Hyde Park, same-day visits cover most calls, weekends included.',
  commonIntro:
    'In Hyde Park, older houses sit beside two-families and condo blocks, and charger calls here tend to look like these.',
  localFaqs: [
    {
      q: 'Will the condo association let me add an EV charger at my unit in Hyde Park?',
      a: 'That’s their decision, so get it in writing before anything else. Parking that belongs to the building, a shared garage or lot included, stays under the board or manager, and they hire us for it. If your unit has its own meter and a space we can reach, we look at the unit’s panel and quote from there.',
    },
    {
      q: 'Is a house in Hyde Park from the 1930s too old for a Level 2 charger?',
      a: 'Age alone won’t rule it out. What settles it is a load calculation that adds the charger to the furnace, the cooling and the kitchen at their busiest. Where the old service runs short, a load-management unit that throttles the car back when the house is busy can undercut a service upgrade. You see both prices.',
    },
    {
      q: 'As a renter in Hyde Park, can I arrange a charger myself?',
      a: 'Not directly. Your landlord signs off in writing, then the landlord or building manager calls us to schedule it. Who pays and who keeps the charger when you move are lease questions for you and the owner. We wire chargers; we don’t write leases.',
    },
  ],
  overrides: {
    ctaLine: 'Level 2 charging wired into older houses and condos in Hyde Park',
    band1Heading: 'When a Home in Hyde Park Needs an EV Charger',
    commonSituations: [
      'Two EVs in one family taking turns on a single slow cord',
      'A pre-war panel with no empty slot for a new breaker',
      'A condo owner done with queueing at public chargers on the weekend',
      'Breakers that already trip on busy evenings, before any charger is added',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Hyde Park',
        body: 'Speed is the first thing owners notice. A Level 2 unit refills the battery in a fraction of the time a household receptacle needs, so you cover more miles on each charge and the car is rarely tied up. Plugging in after supper means a full battery before work, without hunting for an open public stall or waiting behind someone else’s car. Filling up at home generally beats public station prices, and plenty of utilities discount off-peak hours. Correctly sized breakers, wire and grounding keep a decades-old electrical system from running hot. Buyers in Hyde Park are starting to ask whether a house has one.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Hyde Park',
        body: 'Light drivers may never need us. If the car does a few errands a week and sleeps beside a sound outlet, the slow 120-volt cord in the trunk can keep pace, and we’ll say so before quoting anything. Commuters, households sharing two EVs and anyone driving daily usually outgrow it and want Level 2 on a dedicated 240-volt line. Two quick checks help. Find out whether that receptacle feeds other things on the same breaker, and never put the cord on an extension or into a socket that’s loose, cracked or warm. Street-only parking usually rules a home charger out.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Hyde Park',
        body: 'The deciding factor is the load calculation rather than the house’s age. Where there’s headroom, the charger gets its own 240-volt circuit. Where there isn’t, two quotes go on the table, one with a throttling device and one with a bigger panel or service. In Hyde Park, Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits, and we schedule that final visit.',
      },
    ],
    whyTitle: 'Why Drivers in Hyde Park Choose Us for EV Charger Installation',
    whyParagraph:
      'Nobody quotes until a licensed electrician has opened your panel and done the load calculation. Then you hear plainly whether it’s an upgrade, load management or nothing extra, and the charger goes in to code at the approved price.',
    sharedFaqs: [
      {
        q: 'How do you work out the price of a home charger in Hyde Park?',
        a: 'We don’t guess over the phone. After the panel visit you get one flat figure, shaped by the charger you choose, the length of the run between panel and parking, and whether the panel itself needs work. Financing is an option, and nothing is booked until you say yes.',
      },
      {
        q: 'How much of a day does a charger installation take in Hyde Park?',
        a: 'Plan for several hours on an ordinary job. Plaster walls in an older house can slow the wire run, and a panel or service upgrade stretches it further. We give you the schedule beforehand, including when the power goes down and when the car can plug in.',
      },
      {
        q: 'Is wiring a Level 2 charger a weekend project for a homeowner in Hyde Park?',
        a: 'We’d say no. Matching the breaker and conductor to the charger, proving the panel can carry it, and getting the permit inspected all belong with a licensed electrician. Mistakes on a circuit this busy tend to surface as heat behind plaster, long after the tools are packed.',
      },
    ],
  },
};
