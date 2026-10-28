import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lowerPriceHill: LocationServiceCopy = {
  localParagraph:
    'Most Lower Price Hill AC repairs start with a landlord, because 82.7% of households here rent, by Census figures. Many of the houses date from the 1850s, so cooling went in generations later, often one small system per apartment, and close to half the homes heat with electricity, which usually means a heat pump. Tenants should report the problem to the owner first. We find the fault, explain it to tenant and owner, and price it before work starts.',
  emergencyParagraph:
    'Upper-floor tenants in Lower Price Hill’s attached houses take the worst of it when a heat pump or central air quits, and older residents and babies most of all. Cincinnati reaches 90 degrees on about 21 days a year, by National Weather Service counts. Most emergency calls get a technician the same day, weekends included.',
  commonIntro:
    'Lower Price Hill is mostly 19th-century attached houses and small apartment buildings with cooling added generations later. The problems we see most:',
  localFaqs: [
    {
      q: 'Does the Lower Price Hill Historic District limit AC work?',
      a: 'Not for a repair. The Lower Price Hill Historic District is on the National Register, and that listing alone doesn’t bring city design review. We haven’t confirmed any local designation, so if a replacement would change anything on the outside of the building, we check the address with the city first.',
    },
    {
      q: 'I rent in Lower Price Hill. Can I book the AC repair myself?',
      a: 'You can, but get the landlord’s approval first. Ohio law requires landlords to keep the air conditioning they supply in good and safe working order, and the owner normally pays. We explain the fault and the price to you both before anything is fixed. We fix air conditioners, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Lower Price Hill AC repair for tenants and owners, most calls same day',
    band1Heading: 'Common AC Problems in Lower Price Hill Homes',
    commonSituations: [
      'A heat pump that carried the house all winter now short-cycling in summer',
      'A refrigerant line leaking where it passes through a shared wall',
      'One apartment cooling poorly while the unit next door runs fine',
      'An old electrical panel tripping when a newer condenser starts up',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'If you rent, report the problem to your landlord before anything else, since the owner decides on repairs to their equipment. Then do what a tenant safely can. Make sure the thermostat is on cool and set below room temperature, and look at whether the filter is clogged. If cold air comes back, there’s nothing more to do. A system that keeps tripping its breaker, an outdoor fan that won’t spin or frost on the refrigerant line needs a technician. We look at the condenser and the indoor unit, tell tenant and owner what failed, and give a flat-rate price before starting.',
      },
      {
        title: 'Repair or Replace an Older Lower Price Hill AC?',
        body: 'Ask how old the equipment is, because an 1850s house tells you nothing about its condenser. A unit under about 10 years old with one bad part should be repaired. Past 12 to 15 years, a failed compressor usually justifies replacement, and the new system needs a City of Cincinnati mechanical permit. Landlords should also watch the Duke Energy Ohio account in electrically heated units, where a weak heat pump wastes power in both seasons. A slow leak or a dirty outdoor coil keeps it running longer than it should, and catching that early is cheaper than a compressor.',
      },
    ],
    whyTitle: 'Why Lower Price Hill Landlords and Tenants Call Us',
    whyParagraph:
      'Most jobs here involve two people: the tenant living with the heat and the owner paying for the fix. We explain the fault to both, fix the price before work starts, and if it isn’t right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Lower Price Hill?',
        a: 'We quote once we know the fault. Replacing a capacitor on a small apartment condenser is a short job, while finding a leak in a line run through an old wall takes more time. The owner, or the tenant with the owner’s say-so, approves a flat-rate price first, and there are no overtime fees.',
      },
      {
        q: 'Is it worth repairing an older AC in a Lower Price Hill rental?',
        a: 'Usually, if the equipment is younger than about a decade and one part failed. When an older heat pump loses its compressor, replacing often makes more sense, because it heats the unit in winter too. We can price a repair and a replacement on the same visit.',
      },
      {
        q: 'Why is my Lower Price Hill AC blowing warm air?',
        a: 'Check that the thermostat is on cool and the filter isn’t clogged. A heat pump’s reversing valve stuck in heat mode can blow warm air in July, and many homes here use heat pumps. Otherwise a worn capacitor or a refrigerant leak is the likely cause, and the owner should send a licensed technician.',
      },
    ],
  },
};
