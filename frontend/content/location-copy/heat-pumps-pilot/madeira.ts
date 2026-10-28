import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const madeira: LocationServiceCopy = {
  localParagraph:
    'Heat pumps are the exception in Madeira, not the rule. Census figures show 88.1% of homes heat with gas and only 8.2% with electricity, so most heat pumps we see here were added beside a gas furnace as a dual fuel system, often when the old air conditioner wore out. The houses are mostly owner-occupied, and the 1950s were the city’s biggest building decade. When the heat pump fails, the furnace usually keeps the house warm, which buys you time. We diagnose it and quote the repair before any work.',
  emergencyParagraph:
    'January lows at CVG average about 23F, per NOAA normals. A Madeira dual fuel home whose heat pump quits still has the furnace, but an all-electric house has nothing behind it, and that’s where babies, older relatives and anyone ill are at risk. We repair both setups, usually the same day, weekends too.',
  commonIntro:
    'Madeira heat pump calls are mostly dual fuel systems in owner-occupied houses. These are the four we see most:',
  localFaqs: [
    {
      q: 'My Madeira heat pump stopped but the furnace still heats. Is that urgent?',
      a: 'Usually not. In a dual fuel system the gas furnace can carry the house while the heat pump waits for a repair, so a weekday visit is fine if that suits you. It becomes urgent if the furnace is also struggling or the house won’t hold temperature. Check that the outdoor unit’s breaker hasn’t tripped first.',
    },
    {
      q: 'Do I need a permit to replace a heat pump in Madeira?',
      a: 'Yes. Madeira runs its own building department, and its combined building and zoning permit covers heating and air replacements, including outdoor equipment. Hamilton County doesn’t issue it. We file the application with the city as part of the replacement. A repair to the existing heat pump is quoted and done on the visit.',
    },
    {
      q: 'Why is my Madeira heat pump sending up steam outside?',
      a: 'That’s almost always a defrost cycle. On cold, damp days frost builds on the outdoor coil, and the heat pump reverses for a few minutes to melt it, which sends up steam. The outdoor fan may stop while it happens. If the coil stays coated in ice afterward, defrost isn’t working and we should look.',
    },
  ],
  overrides: {
    ctaLine: 'Madeira heat pump and dual fuel repair, priced up front',
    band1Heading: 'Common Heat Pump Problems in Madeira Homes',
    commonSituations: [
      'A heat pump added during an AC replacement that the thermostat never calls on, so the furnace runs all winter',
      'A dual fuel thermostat set up so the heat pump and the gas furnace work against each other',
      'An outdoor unit that ices solid on a damp January morning and never clears',
      'One of the few all-electric Madeira houses where the backup strips are carrying the load',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Some problems need only a minute of your time. If the thermostat got switched to cool or off, set it back to heat. Swap a dusty filter for a new one. Each half of the system has its own breaker, outdoor unit and air handler, so look for one that has tripped. Clear leaves or snow off the outdoor unit. Frost that melts off with a puff of steam, and a fan that rests while it does, is normal defrost. If that sorts it, no visit is needed. We should come for ice that won’t melt, loud grinding, or a furnace doing all the heating. We test after every repair.',
      },
      {
        title: 'Repair or Replace Your Madeira Heat Pump?',
        body: 'The heat pump’s own age and condition decide it, not the year the house was built. Many Madeira heat pumps are far younger than the houses they serve, so a failed capacitor or fan motor on one of them is a simple repair. A compressor that won’t start, or a refrigerant leak that comes back, is the point to price replacement alongside the repair. In a dual fuel home a weak heat pump shows up as a bigger gas bill, because the furnace is covering for it. We handle the city permit when a heat pump is replaced.',
      },
    ],
    whyTitle: 'Why Madeira Homeowners Call Us',
    whyParagraph:
      'Most Madeira heat pumps work beside a gas furnace, and we know how the two are meant to hand off. Our technicians are licensed, insured and drug-tested, you approve a flat price first, and we’ve been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much does it cost to repair a heat pump in Madeira?',
        a: 'The price follows the fault. Replacing a contactor is quick work, while a reversing valve or a leaking coil takes hours. We diagnose first, then give you one flat price to approve. Nothing starts until you say yes, and weekend visits cost the same as weekdays.',
      },
      {
        q: 'Is my Madeira heat pump worth repairing, or should I replace it?',
        a: 'If one part failed and the compressor is healthy, repair usually makes sense. A failed compressor or a recurring leak tips it the other way, and we lay out both prices so you can decide. Since the gas furnace keeps you warm meanwhile, you have time to think it over.',
      },
      {
        q: 'Why does my Madeira heat pump blow cool air when the heat is on?',
        a: 'Heat pump air is milder than the air from your gas furnace, so it can feel cool even when it’s heating properly. If the air is plainly cold, check that the outdoor unit is running and not iced over. A silent or frozen outdoor unit means a fault we should find.',
      },
    ],
  },
};
