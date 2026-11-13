import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const stBernard: LocationServiceCopy = {
  localParagraph:
    'St. Bernard is mostly older houses, with plenty of doubles among them. Census figures show a median build of 1955, about a third of homes from before 1940 and roughly a sixth of units in two-family buildings. Rooms then got a receptacle or two apiece, so cords run under rugs and a few outlets have no ground. Renters occupy more than a third of homes. We test the receptacle, its breaker and the panel first, say when a reset was enough, and fix the price before work.',
  emergencyParagraph:
    'In St. Bernard, a hot, charred or sparking switch or receptacle, a jolt off a cover, a melted plug or a breaker that refuses to hold means we come out that day on most calls, weekends too. Kill that circuit only with dry hands and nothing hot nearby. If anything smokes, get everyone out, then call 911.',
  commonIntro:
    'In the doubles and older houses of St. Bernard, these four come up week after week:',
  localFaqs: [
    {
      q: 'Who handles permits for electrical work in St. Bernard?',
      a: 'The village handed building permits and inspections to the Hamilton County Building Department on January 1, 2026, and applications now go through the county’s online portal. If your outlet or switch work needs a permit, we pull it through the county and arrange the inspection.',
    },
    {
      q: 'I own a double in St. Bernard. Can you sort out both units?',
      a: 'Yes. We go through receptacles, switches and the panel on each side and price the lot as one flat job. Under ORC 5321.04 (A)(4), you as landlord must keep supplied electrical fixtures in good and safe working order. We fix outlets, not leases, and tenants can still press a GFCI reset themselves.',
    },
  ],
  overrides: {
    ctaLine: 'Switch and receptacle work for houses and doubles in St. Bernard',
    band1Heading: 'Common Outlet and Switch Problems We Fix in St. Bernard',
    commonSituations: [
      'A 1950s switch that makes the ceiling light blink',
      'Ungrounded pre-1940 bedroom receptacles that refuse a three-prong plug',
      'One half of a double where a string of outlets died at once',
      'A sink-side kitchen receptacle with no ground-fault protection',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in St. Bernard',
        body: 'In St. Bernard, the kitchen sink and the bathroom vanity are the two spots we most often find unprotected, because most houses in the village predate the requirement. Today’s code also covers garages, basements and outdoor receptacles. Inside, the device compares current sent out with current returning and trips fast when they part ways, since the shortfall may be passing through someone. It can’t sense water, which is merely the commonest trigger. In a double, each side needs its own protected kitchen and bath. A USB receptacle beside a bed or counter is a small, handy extra for phones and tablets.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in St. Bernard',
        body: 'Before you ring us, hunt for the GFCI. One that has tripped, whether it sits in a bath, by the kitchen sink, down cellar or on the back wall, silences every receptacle downstream, so press its reset. In a double, check that the breaker box you open is your own side’s, then look for a handle off or caught midway. Flip the nearby wall switches as well. USB ports and smart switches are extras, not repairs. Warmth, buzzing, char marks or sparks, or a breaker that won’t stay reset, mean you stop and call us.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in St. Bernard',
        body: 'Before wiring in another receptacle, we meter the panel and the circuit it would join. Houses from the 1950s or earlier sometimes have a panel with no spare slot, or wiring that shouldn’t carry more. Then you get the outlet price and, beside it, a price for Electrical Panel Replacement or Home Rewiring, and you decide which way to go. Every device meets code.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in St. Bernard Choose Us for Switches and Outlets',
    whyParagraph:
      'As licensed electricians, we test the receptacle, the breaker feeding it and the panel before anything else, say when a reset or one new device is the answer, and wire and ground everything to code at a price fixed ahead.',
    sharedFaqs: [
      {
        q: 'How do you price an outlet or switch repair in St. Bernard?',
        a: 'After testing we name one flat rate, and work waits for your yes. The device count sets most of it, then whether you want GFCI or USB receptacles, then whether the wiring or the panel needs attention. Both sides of a double can go on one quote. Financing is available.',
      },
      {
        q: 'Why does a GFCI outlet trip in a kitchen in St. Bernard?',
        a: 'Because the current heading out and the current coming back no longer match. That gap means current found another route, sometimes through a person, so it cuts out fast. Water isn’t sensed directly, but a wet counter or a nicked appliance cord usually creates the gap. If it trips often, have it tested.',
      },
      {
        q: 'Should I replace an old outlet myself in St. Bernard?',
        a: 'We’d advise against it. Behind an old outlet you might find no ground, a circuit that runs farther than you’d expect, or wiring that won’t take a modern device. A licensed electrician sorts that out to code and tests the result, which a swap from the hardware store can’t do.',
      },
    ],
  },
};
