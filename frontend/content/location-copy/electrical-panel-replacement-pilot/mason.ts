import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'Mason has grown fast since 1990, and Census figures put the median house at 1996, so the original wiring is mostly sound. The weak spot is the builder’s breaker box, often full on move-in day. Add a garage charger or a backyard spa, and that box runs out of spaces. Roughly a third of households also heat electrically, which eats capacity all winter. We test the main, bus, feed and meter socket first; if one new breaker sorts it, that’s the quote, fixed before the old box is pulled.',
  emergencyParagraph:
    'Phone us if the breaker box smells scorched, feels warm, crackles or arcs, or if one breaker snaps off whenever you push it on. A wet box stays untouched. Flip a circuit off only with dry hands and a cool cover. Smoke or flame means everyone gets out and calls 911. Most visits happen the same day, weekends too.',
  commonIntro:
    'Usually one of these turns up first, often the same week a spa or charger gets wired in around Mason:',
  localFaqs: [
    {
      q: 'Which office signs off on panel work inside Mason?',
      a: 'The City of Mason Engineering & Building Department administers most permits for work within city limits. Our crew files for the permit, books the inspector and stays on site for that visit. The cost sits inside the one flat number you sign off on beforehand.',
    },
    {
      q: 'Will a charger and a heat pump overload my breaker box in Mason?',
      a: 'Not necessarily. Plenty of late-1990s boxes around here still have spare spaces and enough service behind them. We total the household’s present demand, add the new gear on paper, and tell you plainly whether a single circuit, a replacement box or a service upgrade is the honest answer.',
    },
    {
      q: 'I lease a townhome in Mason. Whose job is the panel?',
      a: 'It belongs to the owner, so the owner decides. Write your landlord about the tripping or the warm cover and save a copy. ORC 5321.04 (A)(4) obliges Ohio landlords to keep supplied electrical fixtures in good and safe working order. We replace panels, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Breaker box upgrades for busy subdivisions around Mason',
    band1Heading: 'Signs a Home in Mason Needs a New Electrical Panel',
    commonSituations: [
      'A spa added out back, and now the kitchen breaker drops',
      'Garage lights sagging whenever the air handler kicks in',
      'Every slot taken, with nowhere to land a charger circuit',
      'A cover that’s warm to the palm or hums faintly',
    ],
    proseSections: [
      {
        title: 'Benefits of a New Electrical Panel for Homes in Mason',
        body: 'Space is the big gain. Owners around Kings Island are adding garage chargers, heat pumps, finished lower levels and backyard spas, and a larger box gives each its own breaker, so a spa heater no longer knocks out the kitchen. We write a clear directory on the door, room by room. When the house sells, a buyer’s inspector will lift that cover, and a crowded builder box packed with doubled-up breakers tends to show up in the report. A fresh one with spare positions reads well there and leaves headroom for the next project.',
      },
      {
        title: 'Electrical Panel Repair or Replacement in Mason',
        body: 'Our test results drive this, not the date on the deed. One worn breaker, a lug that has loosened and browned, or a single misbehaving circuit gets fixed, and your box stays put. Burn marks, heat-warped parts, zero room for circuits you need now, or a discontinued model with no parts left means a swap. You’ll see both quotes side by side. First, push any tripped handle fully off and back on to see if it stays, and hunt down GFCI receptacles in bathrooms, the garage, the kitchen and outdoors, since one tripped GFCI can kill a string of others.',
      },
      {
        title: 'Sizing and Permits for a New Electrical Panel in Mason',
        body: 'Capacity gets worked out from today’s demand plus the projects on your list, never copied from the old label. If the meter socket or the service drop also needs replacing, the scope widens and you hear that up front. Duke Energy Ohio pulls the meter and restores power on swap day, since everything from the meter base inward is ours. Permit and final sign-off are handled through the city.',
      },
    ],
    whyTitle: 'Why Homeowners in Mason Choose Us for Electrical Panel Replacement',
    whyParagraph:
      'Much of our work up near Kings Island is charger circuits and box swaps in garages around Mason. Licensed, insured, background-checked technicians do it, the flat price comes first, and we’ve been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'What will a replacement breaker box run in Mason?',
        a: 'That number comes after testing. It rests on the box we install, the service size your load calls for, any meter socket work and the permit. One flat figure lands in writing before a single wire moves, and Saturday work carries no overtime.',
      },
      {
        q: 'Which warnings mean a box in Mason should be replaced?',
        a: 'Handles that trip again and again, lights that sag when the air handler or electric heat starts, a cover that’s warm or humming, and brown scorching around a breaker all count. So does a full box with no position for the spa or charger on your list.',
      },
      {
        q: 'Could a handy owner swap a breaker box without an electrician?',
        a: 'Please don’t. The conductors coming from the meter stay energized even with the main switched off, and only the utility can pull that meter. The city also wants a permit and an inspector’s sign-off. A licensed electrician takes care of all of it.',
      },
    ],
  },
};
