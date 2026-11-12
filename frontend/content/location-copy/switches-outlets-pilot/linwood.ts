import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const linwood: LocationServiceCopy = {
  localParagraph:
    'Almost everything in Linwood is pre-war. Census figures show about four in five homes built in 1939 or earlier, many of them two-family houses, and more than half are rented. Those rooms were wired when a household owned a few lamps and a radio, so extension cords run everywhere, and some receptacles are still ungrounded two-prong types. Our first job is a meter on the receptacle and a look inside the panel; if flipping a breaker was the cure, you’ll know. Nobody starts work before the price is agreed.',
  emergencyParagraph:
    'A receptacle that smokes or throws sparks, a plug welded into the face, a jolt off a light switch or a breaker that drops out after every reset is same-day work in Linwood on most calls, weekends too. Kill the circuit only if the floor is dry. With smoke or flame, everyone leaves and someone rings 911 from the sidewalk.',
  commonIntro: 'In the pre-war singles and two-family houses of Linwood, these four come up most:',
  localFaqs: [
    {
      q: 'I own a two-family in Linwood. Can you add outlets in both units?',
      a: 'Yes. We check which panel feeds each unit, test the circuits in both, and add outlets where tenants keep reaching for cords. If one unit’s panel can’t take more, we price that separately. IBI inspects electrical work in the city where a permit is required.',
    },
    {
      q: 'I rent in Linwood. Who handles a dead outlet?',
      a: 'The owner does. Under Ohio’s ORC 5321.04, whoever rents out the place must keep the electrical fixtures that came with it safe and working, so put the dead outlet in writing to them. Pushing a GFCI reset or flipping a tripped breaker is fine to try first. We handle the wiring; the lease sits with you two.',
    },
  ],
  overrides: {
    ctaLine: 'Outlet and switch repair for pre-war houses in Linwood',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Linwood',
    commonSituations: [
      'Ungrounded two-prong outlets in a 1930s house that won’t take today’s plugs',
      'A shared basement in a two-family house with no GFCI by the laundry',
      'A front porch with no outdoor outlet, or an old one with no cover',
      'A switch that’s warm to the touch or buzzes when the light is on',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Linwood',
        body: 'The trick inside a GFCI is a comparison. Current runs out to a lamp or kettle on one wire and back on another, and the device checks that both match. If some never returns, it may be travelling through a person, and the GFCI opens the circuit. Water isn’t what it senses, only the usual cause. Code now expects GFCIs at the kitchen sink, in baths, basements and garages, and at every outdoor receptacle, and since most houses in Linwood were built before those rules, the usual gaps are the basement laundry, the porch and an original bath. USB receptacles suit a bedside.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Linwood',
        body: 'In Linwood, pre-war houses often hide a GFCI in an odd spot, so before calling, check the bath, the cellar stairs, the garage and the porch for one whose reset button sits proud, and push it. Then peer into the panel for a handle stuck between on and off. Old parlors were often wired with a receptacle controlled by the switch by the door, so flip that too. Putting in USB charging or a smart switch is for convenience and won’t cure a fault. A warm plate, a buzz, scorch marks, sparks or a breaker that refuses to hold are ours to deal with.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Linwood',
        body: 'A house in Linwood gets its panel and old wiring tested before a new receptacle goes in. If the box is undersized or the original wire is already carrying all it should, we spell that out and quote Home Rewiring or Electrical Panel Replacement beside the outlet work, and you pick. All of it meets code, and IBI inspects for the city where a permit is required.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Linwood Choose Us for Switches and Outlets',
    whyParagraph:
      'We don’t name a price until a licensed electrician has metered the receptacle and opened the panel. If a reset or one new device is the answer, that’s what you hear, and all our wiring is grounded to code.',
    sharedFaqs: [
      {
        q: 'How do you work out the cost of outlet repairs in Linwood?',
        a: 'We test first, then hand you one flat figure to approve before work. It grows with each extra device, with GFCI or USB receptacles over standard ones, and with any wiring or panel work hiding behind the plaster. Financing is available, and no overtime is ever added.',
      },
      {
        q: 'What does a GFCI actually measure?',
        a: 'Current, in both directions. It expects the power going to a lamp or appliance to come back in equal measure, and when part of it doesn’t, that part may be crossing a person, so it trips at once. A wet floor makes that leak likelier, but water isn’t what it measures.',
      },
      {
        q: 'Why not fix a dead outlet myself in a pre-war house in Linwood?',
        a: 'Old boxes in a house this age can hide cloth-covered wire, no ground and circuits that wander between rooms, and code may want GFCI protection where the old outlet was. Getting that wrong leaves a shock or heat risk behind the plate. A licensed electrician wires it right and tests it.',
      },
    ],
  },
};
