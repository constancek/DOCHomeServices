import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const summerside: LocationServiceCopy = {
  localParagraph:
    'Summerside was built mostly in one long stretch: 87.7% of homes went up between 1960 and 1999, by Census figures, and very few since. That means panels and wiring from the 1960s through the 1990s, usually grounded but often short on circuits for today’s kitchens, home offices and electric heat. Of the housing here, 34.5% is in apartment buildings, and more is attached townhouses. We inspect the house or unit, give you a written report, and price any repairs before they happen.',
  emergencyParagraph:
    'Some Summerside calls shouldn’t wait for an inspection slot: a burning smell, a cover plate that’s warm or discolored, buzzing in a switch, sparks, or a breaker that won’t stay reset. Shut that breaker off. In an apartment, tell management too. Smoke or fire means everyone out and a call to 911. Most urgent calls get same-day service, weekends included.',
  commonIntro:
    'Summerside calls split between single homes, townhouses and apartment buildings, nearly all from the 1960s to the 1990s. What we find most:',
  localFaqs: [
    {
      q: 'I rent an apartment in Summerside. Who is responsible for the wiring?',
      a: 'Your landlord. Ohio’s landlord law, ORC 5321.04 (A)(4), puts the duty on them to keep supplied electrical fixtures safe and working. Tell management in writing and save a copy. Owners and managers book the inspection or repair, and we inspect wiring, not leases.',
    },
    {
      q: 'I own a Summerside townhouse. Is the wiring mine or the association’s?',
      a: 'Usually the wiring inside your unit, from your own panel out, is yours, while shared areas belong to the association. Check your association documents to be sure. We inspect your panel and circuits, and if we find a problem on the shared side, we note it so you can take it to the association.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Summerside homes, townhouses and apartments',
    band1Heading: 'Common Electrical Problems We Find in Summerside Homes and Apartments',
    commonSituations: [
      'A 1970s panel now carrying a heat pump and a home office it was never planned for',
      'Apartment kitchens with too few countertop circuits, so breakers trip at breakfast',
      'Townhouse basements finished over the years with outlets added off existing circuits',
      'Outdoor outlets on patios and decks with worn or missing GFCI protection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'You may not need us at all. A dead outlet in a bath, kitchen, garage or on the patio often traces back to a GFCI that tripped somewhere else; press its reset button. If a breaker trips once and stays on after you reset it, that’s normal. Check bulbs and switched lamp outlets too. Call for an inspection when breakers keep tripping, lights flicker across several circuits, or you’re selling, buying or adding a large appliance. Landlords often book one between tenants. We go through the system and leave a written report.',
      },
      {
        title: 'Inspection, Repair or Rewire in Summerside?',
        body: 'The inspection, not the house’s age, sorts this out. Summerside wiring from the 1960s to 1990s rarely needs replacing wholesale. More often we find loose connections at outlets, a breaker past its best, and wet locations without GFCI protection, all of them repairs. A panel that’s overloaded or showing heat damage gets a replacement quote. For permitted work we pull the permit and arrange the official inspection, which is separate from ours: ours is a safety check of the whole system with a written report. Whoever does the repairs is your choice.',
      },
    ],
    whyTitle: 'Why Summerside Homeowners and Landlords Call Us',
    whyParagraph:
      'With 35.0% of Summerside homes rented, a lot of our calls come from owners of apartments and townhouse rentals. Everyone gets a licensed, insured, background-checked technician and a price agreed before work.',
    sharedFaqs: [
      {
        q: 'What will a Summerside electrical inspection cost?',
        a: 'A flat rate, quoted before we begin. A two-bedroom apartment and a four-bedroom house aren’t priced the same, and neither are a pre-sale check and one before a new heat pump. Repairs are priced separately, item by item, and you approve each before we touch it.',
      },
      {
        q: 'What do you inspect?',
        a: 'Your panel and its breakers, how the system is grounded, outlets and switches tested for polarity, GFCI and AFCI protection, any wiring we can see in the basement, attic or garage, and smoke alarm power. In an apartment or townhouse, that’s your unit from its panel out. Duke Energy Ohio owns the meter.',
      },
      {
        q: 'Can I hire someone else for the repairs?',
        a: 'Yes. The report is written for you, not for us, and you’re free to get other quotes with it. If you choose us, the price for each repair is fixed before work starts, with financing for bigger jobs like a panel change.',
      },
    ],
  },
};
