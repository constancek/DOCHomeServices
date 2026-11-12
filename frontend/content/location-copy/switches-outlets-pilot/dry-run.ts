import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const dryRun: LocationServiceCopy = {
  localParagraph:
    'Dry Run is almost entirely owner-occupied single-family houses, and Census figures put the median build at 1986, with very few from before 1960. That makes most calls here about wear and wants rather than old wiring, such as a deck GFCI that won’t reset, a dimmer that hums, a finished basement that needs more outlets, or USB charging by the kitchen island. We look at the outlet, the circuit and the panel first, say if a reset or breaker sorted it out, and agree the price before work.',
  emergencyParagraph:
    'A receptacle that’s hot, smoking, sparking or blackened, a melted plug, a shock off a switch, or a breaker that won’t latch after a reset can’t sit until Monday. Shut that breaker off with dry hands. If smoke appears, get out and then call 911. Most of those calls get us out that day, weekends included.',
  commonIntro: 'For houses in Dry Run, the calls we get usually fall into these four:',
  localFaqs: [
    {
      q: 'Can you add outdoor outlets for a deck or patio in Dry Run?',
      a: 'Yes. Outdoor outlets need GFCI protection and a weather-resistant cover that stays closed while something is plugged in. We test the circuit or panel that will feed them, run the wire, and set the outlet where you’ll actually use it for lights or tools. The price is set before work starts.',
    },
    {
      q: 'Why would a dimmer switch hum in a house in Dry Run?',
      a: 'A low hum often comes from a dimmer that doesn’t suit the LED bulbs on it, and the right dimmer fixes that. A louder buzz, flicker or a warm plate points to a loose connection or a failing switch. Turn it off and let us test it before it gets worse.',
    },
  ],
  overrides: {
    ctaLine: 'Switch and outlet work for houses in Dry Run',
    band1Heading: 'Common Outlet and Switch Problems We Fix in Dry Run',
    commonSituations: [
      'A deck or patio outlet with a GFCI that won’t reset',
      'A dimmer that hums or makes LED bulbs flicker',
      'A finished basement with too few receptacles for a TV and a desk',
      'A garage outlet that trips the breaker when the freezer and a tool run',
    ],
    proseSections: [
      {
        title: 'GFCI and USB Outlet Upgrades in Dry Run',
        body: 'Houses in Dry Run from the 1980s and later were built under early GFCI rules, so a kitchen, an unfinished basement or a deck added later may still lack one. Code wants them in kitchens, bathrooms, garages, basements and outdoors. A GFCI keeps checking that the current sent out equals the current returning. If some never comes back, it has found another route, a person included, and the outlet trips quickly. It doesn’t sense water at all; water is just the usual cause. A worn GFCI that won’t reset is a common replacement. USB outlets are worth it by the island or a nightstand.',
      },
      {
        title: 'Checks to Try Before Calling About an Outlet in Dry Run',
        body: 'In a 1980s or 1990s house, a dead receptacle usually has a boring explanation. The GFCI protecting it may live in a bathroom, the garage, the basement or by the deck door; press its button firmly. Next, open the panel and check for a breaker handle that sits off-center. Some bedrooms and family rooms in Dry Run have a receptacle switched from the doorway, so try the switch. If the lights and power come back, you’ve saved the trip. A USB receptacle or smart switch is an upgrade for comfort, not a repair. Warmth, buzzing, discoloring or sparking, or a breaker that trips again straight after resetting, is ours.',
      },
      {
        title: 'When an Outlet Job Points to Panel or Wiring Work in Dry Run',
        body: 'There may be room for an added circuit in a house in Dry Run, but we don’t promise one until the panel is metered and the cable checked. A full panel, or cable not fit for more load, appears on the estimate as Electrical Panel Replacement or Home Rewiring next to the receptacle work, and you decide. Installation follows code. Inspection Bureau, Inc. (IBI) covers electrical permits in Anderson Township, and we file one when the job needs it.',
      },
    ],
    whyTitle: 'Why Homeowners in Dry Run Choose Us for Switches and Outlets',
    whyParagraph:
      'Each job starts with a licensed electrician testing the device, the circuit and the panel. If a reset or replacement switch is all it needs, you’ll hear that. Devices go in grounded and wired to code, at a set price.',
    sharedFaqs: [
      {
        q: 'What does it cost to add or replace outlets in Dry Run?',
        a: 'Testing comes first; then you get one flat figure, and work starts only once you approve it. More devices, GFCI or USB choices, and any circuit or panel repair raise it. A basement finish that needs a string of new receptacles can be financed.',
      },
      {
        q: 'Why does the GFCI on my deck keep tripping?',
        a: 'A GFCI trips when the current going out and the current coming back stop matching, meaning some is leaking, often through moisture in an outdoor box or a worn cord, and sometimes through a person. It doesn’t sense water itself. Repeated trips with nothing plugged in usually mean the box or device needs work.',
      },
      {
        q: 'Is installing a new outlet a reasonable do-it-yourself project?',
        a: 'It isn’t one we’d recommend. A new outlet means tapping a circuit that can carry the extra load, keeping the ground continuous, using the right box, and meeting code, especially outdoors or in a basement. A licensed electrician tests the circuit first and installs it so it stays safe.',
      },
    ],
  },
};
