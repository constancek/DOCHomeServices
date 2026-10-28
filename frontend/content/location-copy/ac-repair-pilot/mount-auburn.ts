import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAuburn: LocationServiceCopy = {
  localParagraph:
    'Mount Auburn AC repair depends on which kind of building you live in. Census figures put 56.6% of homes at 1939 or earlier, many of them two-families and small multi-unit houses where a cooling coil sits on a gas furnace and the ducts went in long after the house. The newer apartment buildings, mostly built after 2010, lean on electric heat pumps. Most households rent, so tenants usually go through the landlord for a repair. We diagnose the fault and price it before anything begins.',
  emergencyParagraph:
    'Mount Auburn’s hilltop rentals hold heat on their upper floors, and most households here rent, so a tenant often waits on someone else for a fix. In a typical year NWS Wilmington logs around 21 days reaching 90 or more. We fix furnace cooling coils and electric heat pumps, usually the same day, weekends too.',
  commonIntro:
    'Mount Auburn mixes 19th-century houses with a cluster of post-2010 apartment buildings, and the two fail in different ways:',
  localFaqs: [
    {
      q: 'Does living in Prospect Hill change AC repair in Mount Auburn?',
      a: 'Not for repairs to the existing unit. Prospect Hill is a city local historic district, and any exterior change there requires the Historic Conservation Board to issue a certificate of appropriateness. The Auburn Avenue National Register listing doesn’t add city review on its own. We ask the city before relocating or adding an outdoor unit there.',
    },
    {
      q: 'Is my Mount Auburn apartment on a heat pump?',
      a: 'If you live in one of the newer buildings, quite possibly. Most of those heat with electricity, and a heat pump does both the heating and the cooling. Check the thermostat: if it has an emergency heat setting, you have one. A fault that stops the cooling in July can return as weak heat in winter.',
    },
  ],
  overrides: {
    ctaLine: 'Mount Auburn AC repair for old houses and new apartments',
    band1Heading: 'Common AC Problems in Mount Auburn Homes',
    commonSituations: [
      'A cooling coil on an older basement furnace icing over in a heat wave',
      'A post-2010 apartment heat pump short-cycling or stuck on heat',
      'A two-family where the second-floor system loses ground by mid-afternoon',
      'Refrigerant lines run up the outside of a tall 19th-century house leaking at a joint',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'A few warm-house problems fix themselves before anyone visits. Replace a filter that’s gone gray, swap the thermostat batteries and give the system 20 minutes. If cold air returns at the vents, keep your money. In the newer Mount Auburn apartments, make sure the heat pump thermostat says cool, not heat or auto. Frost on the indoor coil, or an outdoor fan sitting still, is when to book us. Renters should go through the landlord, who normally arranges and pays for the work. We inspect the full system, describe the fault plainly and give one flat price to approve, then check the registers are blowing cold.',
      },
      {
        title: 'Repair or Replace Your Mount Auburn AC?',
        body: 'A 19th-century house on Auburn Avenue can have a condenser put in five years ago, so read the equipment label, not the house. Fewer than about 12 years on the label and one broken part: we fix it. Older than that with its compressor gone: replace it, under a mechanical permit pulled through the city’s Department of Buildings & Inspections. Houses from 1939 or earlier got their ductwork long after they were built, so the new system has to suit what those ducts can move, and the panel needs checking. A slow leak or dirty outdoor coil stretches every compressor cycle, and the Duke Energy Ohio bill climbs first.',
      },
    ],
    whyTitle: 'Why Mount Auburn Homeowners and Landlords Call Us',
    whyParagraph:
      'Mount Auburn work runs from basement furnaces in old houses to heat pumps in new apartment blocks. Our technicians handle both, and nothing starts until you sign off on a flat price, which never includes overtime fees or later add-ons.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Mount Auburn?',
        a: 'The price comes after the diagnosis. Swapping a heat pump capacitor in a new apartment takes little time, but hunting a leak along refrigerant lines up a tall old house takes much longer. You see one flat figure before work starts, and renters can have the landlord okay it.',
      },
      {
        q: 'Should I repair or replace the AC in an older Mount Auburn house?',
        a: 'A unit with less than about 12 years behind it and a single bad part deserves the repair. Once an older unit loses its compressor, spend the money on new equipment. In a Mount Auburn house from 1939 or earlier, have the ducts and the electrical panel checked before a larger unit goes in.',
      },
      {
        q: 'What makes a Mount Auburn AC blow warm air?',
        a: 'Check the breaker and the filter first. In the older houses the cooling coil often sits on a gas furnace, and ice there can block the air. In electric-heat apartments, see whether the heat pump is stuck on heat. Past that, it’s usually a dead capacitor or low refrigerant.',
      },
    ],
  },
};
