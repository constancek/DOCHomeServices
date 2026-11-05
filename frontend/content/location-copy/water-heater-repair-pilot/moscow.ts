import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const moscow: LocationServiceCopy = {
  localParagraph:
    'In Moscow few homes heat with gas, so a no-hot-water call is often an electric heater with a burned-out element or a tripped breaker. Census figures show most homes in the village went up before 1940, which puts the tank in an old basement or utility corner with shutoff valves nobody has turned in years. Ohio River high water reaches those basements too. We find what failed, explain it plainly, and you approve the price before we start.',
  emergencyParagraph:
    'If a Moscow tank starts spilling water, shut the cold-side supply valve, then the breaker or gas cock. Smell gas and you walk out, lights untouched, and phone the utility from the road. A carbon monoxide alarm empties the house first. Infants, elderly parents and sick family feel it soonest; most calls get a visit that day, weekends too.',
  commonIntro:
    'Most Moscow homes are small, older houses close to the river, and the water heater calls we get there tend to look like this:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a water heater in Moscow?',
      a: 'Where a permit is needed, it goes through Clermont County Public Health, which handles plumbing permits across the county, the village included. We pull it as part of the replacement and schedule the inspection, so you don’t have to sort out the paperwork. A part swapped on your current heater is priced on the visit.',
    },
    {
      q: 'The river came up into my Moscow basement. Can I still use the water heater?',
      a: 'Not until it’s checked. If floodwater reached the burner, the gas valve or the electric controls, leave the heater off even once the basement is dry. Those parts don’t recover from river water and silt. We inspect it, replace what got wet or price a new heater, and you decide.',
    },
  ],
  overrides: {
    ctaLine: 'Water heater repair for Moscow’s river village homes',
    band1Heading: 'Common Water Heater Problems in Moscow Homes',
    commonSituations: [
      'An electric heater in a village house with a burned-out lower element',
      'A tank beside a pre-1940 foundation wall with its shutoff seized open',
      'A heater that sat in Ohio River high water and won’t restart',
      'Rusty hot water from an old tank in a small village house',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Plenty of Moscow calls turn out to need no visit. A household that just ran the washer and two showers has used up the tank; wait and it recovers. Somebody may have nudged the thermostat knob. For an electric unit, look in the breaker box for a handle sitting off-center. A gas unit can lose its pilot to a draft, and the instructions on the jacket show how to light it again, provided nothing smells of gas. Book us for a wet floor around the base or water the color of tea. We find the cause, explain it, agree a flat price and run the taps after.',
      },
      {
        title: 'Repair or Replace Your Moscow Water Heater?',
        body: 'In Moscow the deciding fact is the tank’s own sticker, not the house. A 1920s village home might hold a heater installed a few winters back. Swapping an element, a thermostat, the relief valve or the anode rod makes sense while the steel shell is dry. Once water weeps through the shell, the tank is finished, and we’ll say that rather than sell a part. You see a price for each path and pick one. If the new heater needs a county plumbing permit, we file it and meet the inspector. A seized shutoff gets mentioned before the quote, never after.',
      },
    ],
    whyTitle: 'Why Moscow Homeowners Call Us',
    whyParagraph:
      'Moscow is a small village of older houses, and we treat a call there the same as one in the city. Licensed, background-checked technicians come the same day on most calls, and the flat price is approved first.',
    sharedFaqs: [
      {
        q: 'How much does water heater repair cost in Moscow?',
        a: 'Moscow prices come from the diagnosis: which part failed and whether the heater burns gas or runs on electricity. An element swap is quicker work than replacing a gas control. One flat figure is agreed before tools come out, and Saturday visits cost the weekday rate.',
      },
      {
        q: 'Should I repair or replace my water heater in Moscow?',
        a: 'Keep it if the shell is sound and a single component quit. Read the install date printed on the side, because a century-old river house can hide a young tank. Seepage from the shell itself can’t be patched. We write up both options for Moscow owners to compare.',
      },
      {
        q: 'Why does my Moscow hot water run out fast, or not come at all?',
        a: 'An electric tank with a dead lower element gives a few minutes of warm water, then turns cold, since only the top portion heats. Years of sediment shrink an older tank’s usable volume the same way. Completely cold taps usually mean a tripped circuit or a part we can test.',
      },
    ],
  },
};
