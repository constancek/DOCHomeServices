import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastEnd: LocationServiceCopy = {
  localParagraph:
    'Along Eastern Avenue, going over to LED hinges on what the walls already hide, the old dimmer, the box behind it and how far off the nearest circuit sits. Census figures give 1938 as the median build year for homes here, and the older blocks are nearly all pre-war, so switches from the incandescent age turn up constantly. Riverside Drive is another story, mostly 1990s condos and townhouses with open kitchens that have bare counters under the cabinets. We open things up, look, and name a flat figure first.',
  commonIntro:
    'Riverbank condos and pre-war houses sit a few blocks apart here, so the LED requests swing between two very different kinds of home.',
  localFaqs: [
    {
      q: 'Why did my LEDs start strobing after I put them in my old house in the East End?',
      a: 'The dimmer is the usual suspect. Units from the incandescent years expect a big, heavy load, and a handful of LED lamps barely registers, so the light pulses or hums. In houses here from the 1930s we swap in a dimmer rated for LED and look at the wall box while the plate is off.',
    },
    {
      q: 'I rent a flat off Eastern Avenue in the East End. Can I order LED lights?',
      a: 'Bulbs are fine to change, though anything wired in, like a fixture, a dimmer or a strip under the cabinets, has to be cleared by your landlord, who then schedules it. Ohio Revised Code 5321.04, division (A)(4), holds landlords to keeping the electrical fixtures they provide safe and working. We wire lights; leases stay between you and them.',
    },
  ],
  overrides: {
    ctaLine: 'LED upgrades for riverside condos and older houses in the East End',
    band1Heading: 'Signs You Need LED Lighting in the East End',
    commonSituations: [
      'A 1930s wall dimmer that whines the moment LED lamps go into the fixture',
      'Granite counters in a Riverside Drive condo left in the cabinets’ shadow',
      'A narrow rowhouse parlor where one ceiling globe barely reaches the walls',
      'Shelving or a kitchen island in a 1990s townhouse that could use a glowing strip',
    ],
    proseSections: [
      {
        title: 'Switching to LED Lighting in the East End',
        body: 'The diode inside an LED lamp gives off light as current crosses a semiconductor chip, with no wire glowing white-hot. An incandescent bulb threw most of its power away as warmth, which is why the new lamps sip electricity and last for years. That gap shows up fastest on lights left burning from dinner until bedtime. When one lamp has gone dark, a fresh bulb, a flick of the wall switch and a glance at the breaker come first. For a bigger change we study the room, pick fixtures and spots for them, map out the wiring, fit everything, judge the brightness and make sure it passes code.',
      },
      {
        title: 'LED Wiring, Dimmers and Circuits in the East End',
        body: 'Pre-war dimmers were sized for heavy filament bulbs, so with LED lamps they hum or flutter, and fitting one rated for LED is a quick, plain repair rather than a deep mystery. Cans in the ceiling and lights under the cabinets each want fresh cable. Tired switches and old fixture leads sometimes get replaced along the way. A condo kitchen taking on lots of extra light may earn a dedicated circuit. Inspection Bureau, Inc. (IBI) looks after electrical permits inside Cincinnati, and we file for one whenever the job calls for it. Nothing gets cut or connected until you have okayed the wiring cost.',
      },
      {
        title: 'LED Color Temperature by Room in the East End',
        body: 'In the pre-war houses, sitting rooms and bedrooms look cozy at roughly 2700K, the amber tone of an old filament bulb. Kitchens read sharper at about 3000K, and a high-CRI lamp over the cutting board stops tomatoes from going a dull grey. Open riverfront condos often pair that with a dimmer, so one big room can drop from cooking-bright to soft once the plates are cleared. We tune each room on its own.',
      },
    ],
    whyTitle: 'Why Homeowners in the East End Choose Us for LED Lighting',
    whyParagraph:
      'A licensed electrician opens the switch box, tests the circuit and reads the old dimmer before pricing anything. Then come LED-rated dimmers, cans and cabinet strips wired to code, at a figure you signed off on beforehand.',
    sharedFaqs: [
      {
        q: 'What sets the price of LED work in the East End?',
        a: 'LED fixtures themselves are cheap today. You are mostly paying for hands and cable, meaning ceiling cans, light under the cabinets, a fresh circuit or a dimmer that must change. The flat rate comes first and depends on the fixture count, how tricky the install gets and which style you want. Qualifying homeowners can spread it out with financing.',
      },
      {
        q: 'How come my old dimmer buzzes with LED lamps on it?',
        a: 'It was engineered to throttle the heavy draw of filament bulbs. LED lamps pull so little that its circuitry chatters, and the light flickers or hums. Putting in an LED-rated dimmer is a modest job and settles it, so there is no hidden gremlin in the walls.',
      },
      {
        q: 'Which LED color temperature should I choose for rooms in the East End?',
        a: 'Go near 2700K in a sitting room or bedroom and about 3000K over a kitchen counter or bathroom mirror. Bluish cool light belongs in a workshop, where it looks right, not a lounge. Over a stove, high color rendering keeps food and finishes honest.',
      },
    ],
  },
};
