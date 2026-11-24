import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'In CUF, LED requests mostly come from landlords sick of climbing a stairwell ladder far too often, and owners whose front parlor still glows yellow from one ceiling globe. By Census counts, about four in ten homes predate 1940, clustered in Fairview and the west side of Clifton Heights, and roughly five of every six occupied homes are rented. Those old frames hide rotary dimmers, push-button switches and cloth-insulated fixture leads. We inspect all of that and name a price before any tools come out.',
  commonIntro:
    'In the old houses south of campus and the larger buildings near Straight Street, LED work usually starts with one of these:',
  localFaqs: [
    {
      q: 'I rent in CUF. Can I have LED lighting put in?',
      a: 'A replacement bulb is fine, but anything wired, like a fixture, a dimmer or a strip under the cabinets, needs the owner’s yes, and the owner or property manager schedules us. Under ORC 5321.04 (A)(4), Ohio landlords answer for the electrical fixtures they provide. Leases are between you and them; our part is the wiring.',
    },
    {
      q: 'Can LED bulbs go in the period fixtures of an old house in CUF?',
      a: 'Usually, yes. A warm LED lamp sits happily inside old schoolhouse glass and cooks the brittle socket far less than a filament bulb did. Before recommending it, we look at that socket, the cloth leads above the canopy and whatever switch drives it, since a loose contact flickers no matter which lamp is fitted.',
    },
  ],
  overrides: {
    ctaLine: 'LED lighting for rentals and owner-occupied houses in CUF',
    band1Heading: 'Signs You Need LED Lighting in CUF',
    commonSituations: [
      'A stairwell in a pre-1940 house near Ravine Street where the bulb at the top keeps burning out',
      'A rental kitchen with bare counters and a single ceiling light',
      'Corridors in a 1970s apartment block that glow from dusk to dawn and swell the owner’s electric bill',
      'Fresh LED lamps on a rotary dimmer that strobe whenever the knob is turned down',
    ],
    proseSections: [
      {
        title: 'Switching to LED Lighting in CUF',
        body: 'Landlords around Fairview mostly want one thing from LED, which is fewer tenant texts about a dead bulb. A diode emits light from a chip the instant current crosses it, with no filament to bake, so the fixture stays cool and the lamp outlives several leases. Corridor and porch lights burning through the night are where the electric savings show up. Our visit goes room by room. We note how each space gets used, propose fixtures and spacing, sketch the connections, mount and wire everything, check brightness at night and verify code. Swap in a known-good bulb and look at the breaker before calling about one dark fixture.',
      },
      {
        title: 'LED Wiring, Dimmers and Circuits in CUF',
        body: 'Rotary and slide dimmers in Clifton Heights houses were sized for the heavy pull of filament bulbs, and a ceiling full of LEDs barely registers on them, which is why the lamps strobe or the plate hums. Changing to an LED-rated dimmer cures it quickly. Pre-1940 houses can also surface cloth-wrapped fixture leads, cracked switch yokes or a tired run back to the panel, and anything we open gets brought to today’s code. Under-cabinet strips and recessed cans each count as wiring work. Inspection Bureau, Inc. (IBI) handles electrical permits in Cincinnati. We file one where required and quote the wiring beforehand.',
      },
      {
        title: 'LED Color Temperature by Room in CUF',
        body: 'Upstairs bedrooms and front parlors look homier under a warm 2700K lamp than under the stark white some landlords buy in bulk. A rental kitchen or bath suits 3000K. Over a kitchen counter, a lamp with high color rendering keeps tomatoes red rather than brownish. In stairwells, spread matters more than tone, so we space fixtures until no landing or tread falls into shadow.',
      },
    ],
    whyTitle: 'Why Owners and Landlords in CUF Choose Us for LED Lighting',
    whyParagraph:
      'Our licensed electricians open up suspect dimmers and boxes before quoting, replace filament-era controls with LED-rated ones and run recessed or cabinet lighting to code. Landlords see one flat figure per building, settled up front.',
    sharedFaqs: [
      {
        q: 'How is LED lighting work priced in CUF?',
        a: 'A modern LED fixture is a modest purchase, so the quote mostly reflects our time and whatever wiring the building needs, such as cans, a cabinet strip, a fresh circuit or new dimmers. Fixture count, how hard the walls and ceilings are to work in and the style of LED decide the flat figure, given beforehand. Qualifying homeowners may finance.',
      },
      {
        q: 'Why do LED bulbs flicker on the old dimmers in my building?',
        a: 'Older dimmers expect the heavy draw of filament lamps. LEDs sip so little current that the control can’t hold a steady level, so they pulse, strobe or buzz. Fitting a dimmer rated for LED settles them, and on a rental building we can work through several units in a single visit.',
      },
      {
        q: 'What color temperature works best in an apartment in CUF?',
        a: 'For bedrooms and a living room, a warm 2700K lamp feels most like home. Kitchens and bathrooms can step up to 3000K, crisper without turning clinical. Laundry rooms or a basement bike workshop can go cooler still. Over the counter, high color rendering helps produce and cooked food look right.',
      },
    ],
  },
};
