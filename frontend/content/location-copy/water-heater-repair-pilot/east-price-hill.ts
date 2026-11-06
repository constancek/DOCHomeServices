import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastPriceHill: LocationServiceCopy = {
  localParagraph:
    'East Price Hill water heater calls split two ways. The blocks near Warsaw Avenue are mostly pre-war, with 40.1% of homes built in 1939 or earlier by Census figures, and their heaters sit in stone or brick basements with old flues. Further out, 1960s houses and apartment buildings put tanks in closets or utility rooms. Rentals make up 63.2% of homes, so many calls come through a landlord. Duke Energy Ohio supplies the gas here. We locate the fault and quote it before any work.',
  emergencyParagraph:
    'Water spreading from the heater: twist the cold inlet handle above it shut, then kill its gas or circuit. Smell gas downstairs: climb out, hands off every switch, phone the utility from the yard. A carbon monoxide alarm empties the house first. Babies, older relatives and the sick are hardest hit. Same-day visits on most calls, weekends included.',
  commonIntro:
    'East Price Hill has pre-war basements, 1960s houses and plenty of apartment buildings. These water heater calls come up most:',
  localFaqs: [
    {
      q: 'I live in the Warsaw Avenue Historic District. Does that affect a new water heater?',
      a: 'Not the heater itself. It matters only if a new heater needs a new vent through an outside wall, because the city reviews exterior changes in that local district through a Certificate of Appropriateness. Most replacements reuse the existing flue, and we check with the city first if one doesn’t.',
    },
    {
      q: 'My East Price Hill landlord hasn’t fixed the hot water. What can I do?',
      a: 'Write it down, send it, and keep your copy. Ohio’s ORC 5321.04 puts the duty on whoever owns the building: supplied appliances kept in good and safe working order, and reasonable hot water provided. In the three- and four-family buildings here, give your unit number. We fix water heaters, not leases; the owner can call us.',
    },
  ],
  overrides: {
    ctaLine: 'East Price Hill water heater repair, basements to apartment closets',
    band1Heading: 'Common Water Heater Problems in East Price Hill Homes and Apartments',
    commonSituations: [
      'A gas heater venting into an old brick chimney in a pre-war basement',
      'Rusty hot water from a tank in a 1960s utility room',
      'One unit in a four-family building with no hot water',
      'A relief valve discharging onto a basement floor more than once',
    ],
    proseSections: [
      {
        title: 'Signs Your Water Heater Needs Repair, and When It Doesn’t',
        body: 'Try these before booking. If everyone showered at once, the tank is spent and needs time. Check the temperature dial, which gets bumped more than people think. An electric heater may have lost its breaker. A gas heater may have its valve turned off, or a pilot that blew out; relight that by the label only if you smell no gas. Our visit is for the bigger signs: a puddle under the tank, rotten-egg or rusty hot water, rumbling from sediment, or scorch marks around the burner door. We look it over, explain what we found, quote it for your approval and check the hot water when we finish.',
      },
      {
        title: 'Repair or Replace Your Water Heater in East Price Hill?',
        body: 'A 1920s house near Warsaw Avenue may hold a tank that went in last spring, so the label decides, not the house. A thermocouple that no longer holds the pilot, a sticky gas control, a burnt-out electric element, a worn anode rod: each is one swap and counts as a repair. Steel rusting through and leaking from the shell is the end of that tank. You see the two prices side by side. Pre-war basements may vent into a brick chimney, so before a new gas heater goes in we check the flue. Plumbing permits run through the city’s Department of Buildings & Inspections, and we pull one where required.',
      },
    ],
    whyTitle: 'Why East Price Hill Residents and Landlords Call Us for Water Heater Repair',
    whyParagraph:
      'Pre-war basements, 1960s utility rooms and multi-unit buildings are routine work for us here. Our technicians are licensed and background checked, prices are flat and approved first, and there are no overtime fees.',
    sharedFaqs: [
      {
        q: 'How much is water heater repair in East Price Hill?',
        a: 'A flat rate, set once we know the fault. Fuel matters too: a gas heater in an East Price Hill basement with a bad pilot assembly is a quicker fix than an apartment’s electric tank needing both elements. You approve the number before work begins, and Saturday or Sunday visits carry no overtime fees.',
      },
      {
        q: 'Repair or replace: what makes sense in East Price Hill?',
        a: 'Repair a sound tank with one bad part. Replace a tank that leaks from its body. The age of the house tells you little, so read the date on the heater’s label. Landlords with several tanks can get every one checked and priced on a single visit.',
      },
      {
        q: 'Why does the hot water run out fast, or never come?',
        a: 'Sediment, a broken dip tube or a dead electric element shortens the supply. When nothing comes at all, look first at the breaker or the pilot. If those are fine, a thermocouple, gas valve or thermostat has usually failed, and that’s a job for us.',
      },
    ],
  },
};
