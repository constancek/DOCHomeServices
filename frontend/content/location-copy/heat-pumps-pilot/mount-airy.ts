import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAiry: LocationServiceCopy = {
  localParagraph:
    'Electricity edges out gas in Mount Airy, heating 50.1% of homes by Census figures, though that count includes electric furnaces and baseboard as well as heat pumps. Close to four in ten homes are in buildings of five or more units, and most households rent, so many calls come through property managers. The houses date mostly from the 1960s and 1970s. For managed buildings we work with the owner, and every repair is priced and approved before we begin.',
  emergencyParagraph:
    'Freezing nights are routine here: NOAA counts close to 100 a year at the Cincinnati airport. When a Mount Airy apartment goes cold on one, an infant, a grandparent or a neighbor who is unwell is in the most danger. Our technicians fix heat pumps and the electric air handlers behind them, generally the day you call, weekends too.',
  commonIntro:
    'In Mount Airy, heat pump calls split between apartment complexes and 1960s and 1970s houses. These four come up most:',
  localFaqs: [
    {
      q: 'I rent in a Mount Airy apartment complex. Can I call you to fix the heat?',
      a: 'Report it to your management office first, in writing. In a managed complex the owner picks the contractor and pays for the repair, so we need their approval before touching the equipment. If they call us, we test it, explain the fault and agree the price with them before work.',
    },
    {
      q: 'How warm does my Mount Airy landlord have to keep my apartment?',
      a: 'If you can’t control your own heat, City of Cincinnati rules require 70F or more indoors once it’s been under 60F outside for 24 hours, enforced by the Cincinnati Health Department. Keep a written record of the problem. We fix heat pumps, not leases, but your landlord can book us.',
    },
    {
      q: 'Do I need a permit to replace my heat pump in Mount Airy?',
      a: 'For a replacement, yes. Mount Airy sits within Cincinnati city limits, and mechanical permits there come from the Department of Buildings & Inspections. That paperwork is ours, folded into the replacement quote. A repair to the existing unit carries no such step; we find the fault and price it while we’re there.',
    },
  ],
  overrides: {
    ctaLine: 'Mount Airy heat pump repair for owners and managers',
    band1Heading: 'Common Heat Pump Problems in Mount Airy Homes and Apartments',
    commonSituations: [
      'A complex air handler glowing on emergency heat, its outdoor unit gone quiet',
      'A 1960s house whose heat pump runs constantly and never catches up',
      'A complex where one of several same-age outdoor units has iced over',
      'A Duke Energy bill that jumped after the backup heat took over',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'A handful of Mount Airy calls fix themselves once someone looks. Confirm the thermostat reads heat. If the lease puts the filter on you and it’s gray, put a new one in. The panel holds two breakers for this system, outdoor unit and air handler. Sweep snow and leaves off the outdoor cabinet. Frost on the coil, a puff of steam and a fan that idles mean defrost. If warmth returns, you don’t need us, though management should still hear about it. A coil that stays iced, an emergency heat light that won’t clear or a fan that won’t spin calls for us; you get the price first.',
      },
      {
        title: 'Repair or Replace Your Mount Airy Heat Pump?',
        body: 'The heat pump decides this, not the building. Mount Airy complexes often have outdoor units of the same age, so when one fails, the others may not be far behind. One failed part on a sound unit is a repair. A dead compressor or a recurring refrigerant leak is when we quote replacement next to repair, and owners with several matching units can plan ahead. If heating costs rise in a normal month, the backup strips are probably carrying the load. We handle the permit for replacements.',
      },
    ],
    whyTitle: 'Why Mount Airy Landlords and Tenants Call Us',
    whyParagraph:
      'Most Mount Airy homes are rented, and many sit in larger complexes. We work with the owners and managers who approve repairs. Technicians are licensed, background-checked and drug-tested, and prices are flat-rate.',
    sharedFaqs: [
      {
        q: 'How much is heat pump repair in Mount Airy?',
        a: 'That turns on what broke. A burned contactor is a fast swap, while a leak somewhere along a long copper run to an upper-floor unit eats more hours. Whoever owns the building sees one flat-rate figure and approves it before we start, and weekends add no overtime.',
      },
      {
        q: 'Should a Mount Airy property owner repair or replace a heat pump?',
        a: 'Repair it when one part has failed and the compressor is sound. If the compressor has quit or refrigerant keeps escaping, replacement deserves a price, especially when other units in the building are the same age. We quote both, and financing is available.',
      },
      {
        q: 'Why is my Mount Airy heat pump blowing cool air?',
        a: 'Air from a working heat pump is milder than gas furnace air, so a register can feel cool even with nothing wrong. Truly cold air, paired with an outdoor unit frozen over or silent, is a fault. Tenants should tell management instead of adjusting the equipment.',
      },
    ],
  },
};
