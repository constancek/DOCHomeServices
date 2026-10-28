import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'Most Northside AC calls happen in a house that is decades older than its air conditioner. Census figures show 57.3% of homes built before 1940 and 68.9% heating with gas, so the cooling usually rides on a furnace blower through ducts first meant for heat. Upper Hamilton Avenue skews newer, and plenty of homes are rentals, where the owner approves the work. Replacements need a mechanical permit from Cincinnati Buildings & Inspections. We diagnose, then price, then repair.',
  emergencyParagraph:
    'Northside’s pre-1940 houses hold heat in their top floors once the cooling quits, and tenants up there and older residents feel it first. The National Weather Service counts about 21 days a year at 90 degrees or higher around Cincinnati. We repair central air and heat pumps, with most calls handled the same day, weekends included.',
  commonIntro:
    'Northside housing runs from pre-1940 homes to large apartment buildings, and the AC faults follow the building type:',
  localFaqs: [
    {
      q: 'Do I need city approval to repair AC in Northside’s Hoffner Historic District?',
      a: 'Not for a repair. The Hoffner Historic District is on the National Register, and that listing alone doesn’t trigger city design review, so fixing your AC there goes ahead like anywhere else in Northside. If a replacement would move the condenser or add a second one, we check with the city before we start.',
    },
    {
      q: 'Who approves AC repair in a Northside rental?',
      a: 'The owner, in most cases. The equipment belongs to the landlord, and Ohio law (ORC 5321.04) requires it to be kept in good and safe working order. A tenant can still let us in for the diagnosis. We explain the fault on site, and the flat-rate price goes to whoever approves the work.',
    },
  ],
  overrides: {
    ctaLine: 'Northside AC repair from Hamilton Avenue to Spring Grove',
    band1Heading: 'Common AC Problems in Northside Homes',
    commonSituations: [
      'Top-floor rooms in pre-1940 houses that never catch up on hot afternoons',
      'A furnace blower motor worn out from pushing cooled air all summer',
      'Condensate overflowing from a coil set on an older gas furnace',
      'Leaking duct joints in 1950s and 1960s houses on upper Hamilton Avenue',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'A warm Northside house is not always a broken AC. Swap a dirty filter, put fresh batteries in the thermostat and reset a tripped breaker once. If cold air comes back, skip the service visit. Keep an eye on the furnace too, because its blower moves the cooled air. When the outdoor unit runs but almost nothing comes out of the registers, the blower or its capacitor is the likely fault. Book a technician for that, or when ice forms on the copper line. We check the system end to end and explain the cause. The flat-rate quote comes before any work, and we confirm vent temperatures afterward.',
      },
      {
        title: 'Repair or Replace Your Northside AC?',
        body: 'The age of the condenser settles it, not the age of the house. One failed part on a unit under about 12 years old, such as a capacitor or contactor, is worth fixing. A compressor failure on an older system, or an R-22 unit that needs refrigerant, points to replacement. In Northside’s pre-1940 homes, look at the furnace as well. A new outdoor unit paired with a worn blower won’t move enough air to cool the upper floors. Meanwhile a dirty outdoor coil or a slow leak adds compressor hours to your Duke Energy Ohio bill, and you can hose the coil clean yourself with the power off.',
      },
    ],
    whyTitle: 'Why Northside Homeowners Call Us',
    whyParagraph:
      'Northside homes range from pre-1940 houses with retrofitted cooling to large apartment buildings, and our licensed, drug-tested technicians repair both. Prices are flat-rate and approved by you first, without overtime fees.',
    sharedFaqs: [
      {
        q: 'What should I expect to pay for AC repair in Northside?',
        a: 'The fault sets the price, so the technician finds it before quoting. Replacing a capacitor is quick. Fixing a refrigerant leak or a failed furnace blower takes longer and costs more. You get one flat-rate figure to approve, and only then does the work start. Overtime fees don’t apply.',
      },
      {
        q: 'Is it better to repair or replace an older Northside AC?',
        a: 'A younger unit with a single bad part is worth repairing. An older one with a dead compressor or a refrigerant leak is usually worth replacing. Most Northside homes heat with gas, so the AC shares a blower with the furnace, and any replacement plan should take the furnace’s age into account too.',
      },
      {
        q: 'Why does my Northside AC run but blow warm air?',
        a: 'Check the filter and breaker first. Then look outside. If the outdoor fan is still, a worn capacitor is the likely part. If it spins but the air stays warm, low refrigerant from a leak is more likely. In homes on electric heat, a stuck heat pump reversing valve can do it too.',
      },
    ],
  },
};
