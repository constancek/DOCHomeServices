import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const moscow: LocationServiceCopy = {
  localParagraph:
    'In Moscow, most inspection calls are about wiring that has spent decades in the walls: Census figures show most of the village’s homes predate 1940. Houses that old may still carry knob-and-tube or cloth-sheathed cable, outlets with two slots and no ground, and a fuse box in the basement. On top of that, most Moscow homes heat with electricity, a heavy draw on an old service. You get every finding on paper, and a price for anything you want fixed, before work begins.',
  emergencyParagraph:
    'Not every Moscow call can wait. A burning smell, a cover plate too warm to touch or turning brown, sparks at a plug, a breaker that snaps off right after you flip it back: kill that circuit at the panel. Smoke or fire means out of the house, then 911. Weekday or weekend, most calls get a same-day visit.',
  commonIntro:
    'Here is what turns up when we open panels and pull outlet covers in Moscow’s older houses.',
  localFaqs: [
    {
      q: 'Our Moscow house took on water in a river flood. Is the wiring safe to use?',
      a: 'Treat it as suspect until it’s tested. Breakers, receptacles and cable that sat in Ohio River water can corrode on the inside and fail months later, even when the lights come back on. Leave those circuits off and let us check them first. Any replacement we do is permitted and inspected.',
    },
    {
      q: 'I rent out a house in Moscow. What does Ohio expect of me on the wiring?',
      a: 'If you own a rental in Moscow, Ohio’s ORC 5321.04 (A)(4) is the rule: the electrical fixtures that come with the house stay in good and safe working order. An inspection between tenants puts that on paper. Your tenant’s part is to tell you about problems in writing. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Have your Moscow wiring checked and written up',
    band1Heading: 'Common Electrical Problems We Find in Moscow Homes',
    commonSituations: [
      'Cloth-insulated wiring still live behind plaster in a pre-1940 village house',
      'Outlets with two slots and no ground, with adapters plugged in to fit modern cords',
      'Electric heat and a modern kitchen sharing an old panel with too few spaces',
      'A basement panel or outlets that sat in river water and were never checked afterward',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before you book, rule out the easy ones. Bathroom and kitchen outlets in a Moscow house often hang off a single GFCI, sometimes one out in the garage or on the porch; find it and push reset. A breaker that tripped once and held after you flipped it back was overloaded. A burned-out bulb is a bulb. We earn the visit when two-slot outlets are all you have, fuses still sit in the basement, cords snake under rugs, or several rooms flicker together. Plans for a sale, a heat pump or a hot tub in a house this old are the other good reason to book.',
      },
      {
        title: 'Inspection, Repair or Rewire in Moscow?',
        body: 'Moscow houses are mostly the same age, but their wiring isn’t, because owners have patched it at different times. So the report, not the calendar, sorts the work. A neutral that has worked loose, a breaker that won’t trip on test or a bath with no GFCI gets fixed on its own. A fuse box, or a panel crowded by electric heat, goes on the list for a panel change. Where most rooms still run on cloth or knob-and-tube, we quote a full rewire and the piecemeal option side by side. Keep the report and decide; hiring us is optional. Clermont County Building Inspection signs off any permitted job.',
      },
    ],
    whyTitle: 'Why Moscow Homeowners Call Us',
    whyParagraph:
      'Moscow is a small river village of old houses, and an inspection there takes patience with what’s behind the plaster. Whoever we send holds a license, carries insurance and has passed a background check and drug test.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Moscow?',
        a: 'Moscow inspections are flat-rate. Before we open a single cover plate you hear the number, worked out from how big the house is and what the report is for. A small river house going up for sale is a lighter job than a big old place with fuses and add-on circuits. Weekends cost no more.',
      },
      {
        q: 'What does an electrical inspection in Moscow cover?',
        a: 'Starting at the panel, we test each breaker or fuse, then check grounding and bonding, every reachable outlet and its GFCI or AFCI protection, any wiring exposed in the basement or attic, and whether the smoke alarms are getting power. Moscow’s pre-1940 houses also get a hunt for cloth and knob-and-tube.',
      },
      {
        q: 'Do I have to hire you for the repairs?',
        a: 'No. Hand the report to any licensed electrician you trust; it’s yours. If a buyer, lender or insurer asks for a written report, you’ll have one. Want us to do it? Every line item carries its own price, so you can fix the urgent ones now and the rest later.',
      },
    ],
  },
};
