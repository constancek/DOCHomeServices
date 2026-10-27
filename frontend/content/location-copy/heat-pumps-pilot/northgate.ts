import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northgate: LocationServiceCopy = {
  localParagraph:
    'In Northgate, electric heat edges out gas: Census figures put it at 50.3% of homes against 45.2% on gas. That electric share counts baseboard and electric furnaces too, so not every one is a heat pump, but it means a failed outdoor unit often leaves the house on backup strips alone. Most homes went up in the 1960s and 1970s, and the ducts and air handlers are often original even when the outdoor unit isn’t. We test the whole system and give you a price to approve before we start.',
  emergencyParagraph:
    'Northgate winters bring January lows around 23F, based on NOAA normals for CVG. If the heat pump quits in that weather, the house cools quickly, and babies, elderly relatives and anyone sick feel it first. We repair heat pumps, electric air handlers and backup heat, same day on most calls and on weekends.',
  commonIntro:
    'Northgate is mostly owner-occupied 1960s and 1970s houses, about half of them on electric heat, plus a few large apartment buildings. These four come up most:',
  localFaqs: [
    {
      q: 'My Northgate heat pump runs constantly in January. Is that a problem?',
      a: 'Not always. Heat pumps run long, steady cycles in cold weather, and that’s how they’re built to work. It becomes a problem when the house won’t reach the set temperature, the auxiliary heat light stays on, or ice builds on the outdoor unit and doesn’t clear. Any of those is worth a visit.',
    },
    {
      q: 'I live in a Northgate apartment and the heat pump stopped. Can I call you?',
      a: 'In a managed building, report it to the office or landlord first, in writing. Ohio law makes landlords keep the heating equipment they supply in good and safe working order. Before reporting, make sure the thermostat is on heat and the filter isn’t clogged. Building owners and managers can book us. We fix heat pumps, not leases.',
    },
    {
      q: 'My Northgate house still has its 1960s ductwork. Does that matter for a heat pump?',
      a: 'It can. Leaky or undersized ducts make a heat pump work harder and leave rooms cool, especially at the ends of the house. We look at airflow during a repair visit. If the ducts are the main problem, we tell you that rather than replacing parts that aren’t broken.',
    },
  ],
  overrides: {
    ctaLine: 'Northgate heat pump repair for electric and gas homes',
    band1Heading: 'Common Heat Pump Problems in Northgate Homes',
    commonSituations: [
      'An all-electric house where the heat pump quit and the backup strips carry the load',
      'Original 1960s ducts feeding a newer heat pump and leaving end rooms cool',
      'An apartment heat pump that a tenant reports as blowing cold air',
      'An outdoor fan that won’t spin, so the coil ices up within hours',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Before you book, rule out the simple causes. Make sure the thermostat is in heat mode. Change the filter if it’s grey and matted. Look at the panel for a tripped breaker, either the outdoor unit’s or the air handler’s. Brush snow and leaves away from the outdoor unit. A defrost cycle throws off steam, leaves light frost and pauses the fan for a few minutes, and that’s normal. If those steps bring the heat back, you don’t need a technician. Call us when the coil stays iced, emergency heat won’t switch off or the system stays on cooling. We diagnose, explain and price before starting.',
      },
      {
        title: 'Repair or Replace Your Northgate Heat Pump?',
        body: 'Judge the heat pump, not the 1960s house it serves. Many outdoor units here are much younger than the walls around them. A worn contactor, a bad fan motor or a failed defrost board is a repair on a sound unit. A refrigerant leak or dead compressor is where we price replacement beside repair. In an all-electric Northgate house, a heat pump that’s losing ground shows on the Duke Energy bill, since the backup strips are doing the heating. Hamilton County issues building permits here once Colerain Township clears zoning, and we take care of both on a replacement.',
      },
    ],
    whyTitle: 'Why Northgate Homeowners Call Us',
    whyParagraph:
      'With so many Northgate homes on electric heat, a dead heat pump means either an expensive backup or a cold house. Our technicians are licensed, insured and drug-tested, and you approve a flat-rate price first.',
    sharedFaqs: [
      {
        q: 'What should I expect to pay for heat pump repair in Northgate?',
        a: 'The price follows the fault, and we find the fault before we name a price. A failed capacitor or contactor is a quick fix. A refrigerant leak takes more work to locate and repair. You approve one flat-rate price before any work, and weekends carry no overtime charge.',
      },
      {
        q: 'Is my Northgate heat pump worth repairing, or should I replace it?',
        a: 'If one part failed and the unit is otherwise sound, repair it. If the compressor is gone or refrigerant keeps leaking out, replacement is usually the better spend. Since all-electric homes pay for backup heat in the meantime, we lay out both prices at the first visit.',
      },
      {
        q: 'Why is my Northgate heat pump blowing cool air in winter?',
        a: 'Heat pump air runs cooler than gas furnace air, so the vents can feel lukewarm while the system works fine. Cold air with the outdoor unit iced over or stopped is a fault. If the house is cooling down instead of warming, the reversing valve may be stuck.',
      },
    ],
  },
};
