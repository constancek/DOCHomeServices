import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const coldSpring: LocationServiceCopy = {
  localParagraph:
    'According to Census figures, nearly half the homes in Cold Spring were built in 2000 or later, and construction that new tends to have breaker space left over for a Level 2 line. Where it doesn’t, load management usually bridges the shortfall. About half are detached houses, easy when the car stays off the street, and a sizable share are townhouses governed by an association. A panel inspection and load math still come first, we’ll admit when the portable cord is enough, and the price is settled before wiring.',
  emergencyParagraph:
    'Newer equipment fails too. A charger housing or outlet that turns hot or discolored, a crushed charging cable, or a breaker giving out on every session means you quit charging. Kill the circuit only if doing so is safe. Smoke or flames call for leaving and dialing 911. Cold Spring gets same-day visits on most calls, weekends included.',
  commonIntro:
    'Most houses here went up after 1980, so in Cold Spring, the charger questions mostly come from situations like these.',
  localFaqs: [
    {
      q: 'Can one panel run chargers for two EVs in Cold Spring?',
      a: 'Often it can, but the load calculation is the judge. Some houses have room for two dedicated circuits. Others manage better with load management, which slows charging while the rest of the house is busy. You see each option priced next to the other before deciding.',
    },
    {
      q: 'Will my townhouse association in Cold Spring have a say in a charger?',
      a: 'Usually, yes. The association typically decides on exterior work and anything in shared parking, so get its approval first. Once you have it, we look at your panel, run the load calculation and give you a flat price for the job.',
    },
  ],
  overrides: {
    ctaLine: 'Home EV chargers for newer houses and townhouses in Cold Spring',
    band1Heading: 'When a Home in Cold Spring Needs an EV Charger',
    commonSituations: [
      'A second EV in the household and two cars swapping one portable cord each evening',
      'Wanting electricity drawn late at night instead of paying at a public plug',
      'A builder panel from the 2000s with every slot already spoken for',
      'Daily miles up and down US 27 that the trickle cord can’t recover by morning',
    ],
    proseSections: [
      {
        title: 'Benefits of a Home EV Charger in Cold Spring',
        body: 'In Cold Spring, a Level 2 unit beside the parking spot puts miles back far quicker than a wall socket, so every charge lasts longer and downtime shrinks. Plug in after dinner, and even a two-EV household can have both cars topped up by morning. Nobody stops at a public charger or waits while a stranger finishes. Home electricity frequently costs less than public charging, and plenty of utilities set cheaper overnight rates. A breaker, wire run and ground sized to the charger keep the panel cool, and buyers later on are starting to look for one already installed.',
      },
      {
        title: 'Level 1 or Level 2 EV Charging in Cold Spring',
        body: 'A second car that only covers short local errands and parks near a healthy outlet may be fine on its own portable cord, and we’d tell you rather than sell more. That cord plugs into plain 120-volt current and gains only a few miles an hour. The commuter car, or two EVs sharing a busy schedule, is the one that earns Level 2 and a separate 240-volt circuit. First confirm nothing else rides on that outlet’s breaker, keep extension cords away, and stop trusting a receptacle that’s loose or warm. Cars parked out on the street usually can’t make use of a home charger.',
      },
      {
        title: 'Panel Capacity and Permits for an EV Charger in Cold Spring',
        body: 'In Cold Spring, newer houses usually pass the load calculation, but the calculation still gets done, whatever the build date. Passing earns a dedicated circuit, typically on a 40 to 60 amp breaker depending on the unit. Falling short gets you two prices, load management or a larger panel and service, and the service route brings Duke Energy Kentucky into the job. Permit paperwork and the inspection are on us.',
      },
    ],
    whyTitle: 'Why Homeowners in Cold Spring Choose Us for EV Charger Installation',
    whyParagraph:
      'A new house doesn’t skip the panel check with us. Our licensed electrician does the load math, says flatly if an upgrade or load management is warranted, and builds the circuit to code for the figure you signed.',
    sharedFaqs: [
      {
        q: 'What affects the price of a home EV charger in Cold Spring?',
        a: 'Your choice of charger, how far the cable runs from the breaker box to the car, and any panel work decide it. One flat rate is set once we’ve seen the panel, nothing starts until you agree, and financing exists for anyone who wants it.',
      },
      {
        q: 'How long will a Level 2 charger installation take in Cold Spring?',
        a: 'With panel room to spare, most jobs finish in several hours. Upgrading the panel or service lengthens things. You’re told the timeline beforehand, along with the stretch of the day when the electricity will be shut off.',
      },
      {
        q: 'Should a homeowner try installing an EV charger alone in Cold Spring?',
        a: 'We’d say no. Picking the right circuit, proving through a load calculation that the panel copes, and getting a permit and inspection all belong with a licensed electrician. Our crew handles that whole sequence, paperwork included.',
      },
    ],
  },
};
