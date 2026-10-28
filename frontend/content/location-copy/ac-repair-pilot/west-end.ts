import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'West End AC calls run from Italianate rowhouses built before 1940 to apartment buildings from the 1960s and 1970s, sometimes on the same block. In the old rowhouses, cooling went in later and the top floor runs hottest. Census figures show 87.1% of homes here are rented, so the owner or manager usually approves the repair, and we explain the fault to the tenant too. Betts-Longworth is a local historic district, so we check with the city before a condenser moves. We price the fix before work starts.',
  emergencyParagraph:
    'Heat builds fastest in the West End’s upper-floor apartments, and older or sick tenants there can’t simply wait it out. The National Weather Service puts the Cincinnati area at about 21 days a year of 90 degrees or higher. We repair central air and heat pumps in townhouses and apartments, mostly on the day you reach us, weekends included.',
  commonIntro:
    'West End cooling ranges from pre-war rowhouses to 1970s and newer apartment buildings, and the problems split along the same line:',
  localFaqs: [
    {
      q: 'I rent in the West End and my AC quit. What should I do first?',
      a: 'Check the breaker and the filter, then tell your landlord or property manager in writing so there’s a record. Most West End homes are rented, and the owner usually picks the contractor. If they send us, we explain the fault to you in plain words and quote the price to them.',
    },
    {
      q: 'Does the Betts-Longworth historic district affect AC repair?',
      a: 'Not for a repair, since fixing the unit in place leaves the exterior as it was. Betts-Longworth is a locally designated district, so outside alterations go through the Historic Conservation Board for a Certificate of Appropriateness. When a replacement condenser has to move, we confirm with the city first.',
    },
  ],
  overrides: {
    ctaLine: 'West End AC repair for rowhouses and apartments',
    band1Heading: 'Common AC Problems in West End Homes',
    commonSituations: [
      'A townhouse condenser boxed in against a shared wall and starved of airflow',
      'A drain line backing up inside an apartment’s air handler closet',
      'A heat pump in a 1970s building that runs all afternoon and barely cools',
      'The back bedroom on a rowhouse’s top floor staying hot well after dark',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Two checks belong to you before anyone visits: swap the filter and look at the breaker. If you cool with a window unit, a dead one usually costs less to replace than to repair, so you may not need us at all. For central systems, report it when the outdoor fan won’t start or frost coats the larger copper line. Since most West End homes are rented, the owner or manager normally books the visit. The technician checks both halves of the system, explains what failed and quotes a flat rate. After the repair, we confirm the vents are blowing cold before leaving.',
      },
      {
        title: 'Repair or Replace Your West End AC?',
        body: 'Go by the nameplate on the condenser, not the building. West End buildings range from the 1930s to the 1990s, so a 1970s apartment can hold a two-year-old heat pump and a rowhouse can hold a unit from the last century. When the equipment is under a dozen years old and only a capacitor or fan motor has quit, fix it. When it is old and the compressor has seized, replace it, which needs a city mechanical permit; window units don’t. Ducts squeezed into a pre-war rowhouse may limit how big the new system can be. Meanwhile, a dirty outdoor coil raises the Duke Energy Ohio bill.',
      },
    ],
    whyTitle: 'Why West End Tenants and Landlords Call Us',
    whyParagraph:
      'West End jobs often involve a tenant, a manager and us. We give everyone the same diagnosis and the same price, approved before work starts, and a licensed, background-checked technician does the repair.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in the West End?',
        a: 'It depends on the building as much as the part. A capacitor on a townhouse condenser is quick, while a leak inside an apartment’s air handler closet takes longer to trace. We diagnose first, quote a flat rate, and whoever is paying approves it before work, with no overtime charges.',
      },
      {
        q: 'Should a West End landlord repair or replace an older AC?',
        a: 'Look at the unit’s age, not the building’s. A 1970s apartment building can have a heat pump put in two summers ago, and a rowhouse can still have a condenser from the 1990s. A young system with one worn part earns a repair. An aging one with a seized compressor is worth pricing against replacement.',
      },
      {
        q: 'Why does my West End AC blow warm air?',
        a: 'Start with the breaker and the filter. Past those, we usually find a dead capacitor or refrigerant lost through a leak. Many West End homes heat with electricity, so plenty of them run heat pumps, and a reversing valve stuck on heat sends warm air out in August.',
      },
    ],
  },
};
