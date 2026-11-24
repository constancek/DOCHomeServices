import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'In the West End, most LED requests come from landlords and owners of Italianate rowhouses and small apartment buildings near Ezzard Charles Drive. Close to four in ten homes date from 1939 or earlier, Census figures show, and almost nine in ten are rented. Those older buildings often hold filament-era dimmers, ornate fixtures and wiring that deserves testing before new lamps go in, while the newer townhouses are simpler. We look over fixtures, dimmers and wiring and name a price before starting.',
  commonIntro:
    'Old Italianate rows, newer townhouses and apartment blocks share the streets here, and each has its own lighting problems in the West End.',
  localFaqs: [
    {
      q: 'Can I put LED lights on the front of a Betts-Longworth rowhouse?',
      a: 'We check with the city first, since Betts-Longworth is a locally designated historic district where exterior changes can need review. Inside the house, LED is ordinary interior work. Warm diode lamps look right in the period fittings of these rowhouses, and we test old sockets and wire before trusting them.',
    },
    {
      q: 'Who arranges LED work in an apartment I rent in the West End?',
      a: 'Ask the owner or building manager, who decides and books. A tenant is free to change a bulb, but a new fitting, a dimmer or lights under the cabinets need the owner’s approval. ORC 5321.04 (A)(4) holds Ohio landlords responsible for supplied electrical fixtures being safe and in working order. We wire lights, and leases are another department.',
    },
  ],
  overrides: {
    ctaLine: 'LED for Italianate rowhouses and apartment buildings in the West End',
    band1Heading: 'Signs You Need LED Lighting in the West End',
    commonSituations: [
      'An Italianate rowhouse off Ezzard Charles Drive with ornate fixtures that eat bulbs',
      'Apartment stairs and halls lit all night on aging fittings',
      'A parlor dimmer from decades ago that sets LED lamps shimmering',
      'A townhouse kitchen whose counters sit under cabinet shadow',
    ],
    proseSections: [
      {
        title: 'Switching to LED Lighting in the West End',
        body: 'In the West End, switching to LED is often a whole-building project for a landlord, though rowhouse owners near Dayton Street tend to go room by room. Halls and stairwells burning through the night gain most, with fewer ladder trips and lower lighting bills. We review the spaces, propose fittings and positions, lay out the wiring, install, then check light levels and code. A diode turns current into light at a semiconductor junction, never heating a filament to a glow, so little energy is lost as heat. If a fitting goes dark, start with a new bulb and the breaker.',
      },
      {
        title: 'LED Wiring, Dimmers and Circuits in the West End',
        body: 'Rowhouses and older buildings in the West End usually need some electrical housekeeping before diode lamps go up. Rotary dimmers sized for filament bulbs expect a heavy draw, so LEDs on them shimmer or hum until a control built for LED replaces them, a quick job. Worn fittings, brittle switches and old lengths of cable get renewed so every joint we make meets present code. Cabinet strips and new cans need fresh runs, and an apartment can want its own circuit. Inspections Bureau, Inc. (IBI) handles electrical permit review and inspection inside city limits, and we file with them when required. Owners approve wiring costs before work.',
      },
      {
        title: 'LED Color Temperature by Room in the West End',
        body: 'In a rowhouse parlor or bedroom in the West End, amber light near 2700K looks right and suits the period fittings too. Kitchens and bathrooms do well at 3000K, and a high-CRI lamp over the counter keeps food true in color. Shared halls can run a little brighter for safety, but cold blue-white feels harsh in a home. Dimmers help living rooms where owners want them.',
      },
    ],
    whyTitle: 'Why Owners and Landlords in the West End Choose Us for LED Lighting',
    whyParagraph:
      'Whether it’s an Italianate row on Linn Street or a newer townhouse, our licensed electricians test fixtures, dimmers and circuits before quoting, put in dimmers made for diodes and wire cans and strips to code, priced in advance.',
    sharedFaqs: [
      {
        q: 'How is LED work priced for a rowhouse or small apartment building?',
        a: 'The fittings are the cheap part now. Most of the bill is labour and wiring for cans, cabinet strips, extra circuits and dimmers due to go, and a landlord gets one flat figure first, set by fitting count, how awkward the building is and the style of lighting. Qualifying homeowners can finance.',
      },
      {
        q: 'What makes LED lamps shimmer in an older building in the West End?',
        a: 'It’s usually the dimmer. It was made for the heavy draw of filament lamps and can’t govern the small current a diode needs, so light shimmers or the switch hums. A dimmer rated for LED solves it. Flicker spreading across several circuits is a different, wiring problem and needs a prompt visit.',
      },
      {
        q: 'Which LED color temperature suits an old rowhouse?',
        a: 'Rowhouse parlors and bedrooms look right in amber near 2700K, and so do the period fittings. Kitchens and bathrooms work at 3000K, ideally with a high-CRI lamp so a plate of food keeps its color. Cold light is for a cellar or utility room. Dimmers make sense wherever evenings ought to feel softer.',
      },
    ],
  },
};
