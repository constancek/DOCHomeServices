import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const campWashington: LocationServiceCopy = {
  localParagraph:
    'Most Camp Washington AC repairs start with a tenant’s call and need a landlord’s yes. Census figures show 79.4% of households here rent, and much of the housing is two-family houses and small apartment buildings. Nearly all of it went up before 1940, long before central air, so the cooling was fitted in later with line sets run through old walls. Tenants can report what they notice and let us in. The owner hears what failed and approves a set price before anything gets fixed.',
  emergencyParagraph:
    'Tenants in Camp Washington’s doubles and walk-up apartments rarely have any way to fix a dead AC, and upstairs rooms heat first. Weather Service records for CVG show 21 days a year, on average, at 90 or above. Most Camp Washington no-cool calls get a technician that day, weekends included, for split systems and heat pumps alike.',
  commonIntro:
    'Camp Washington’s housing went up before 1940, and its central air came decades later, retrofitted into two-family houses and small apartment buildings. What we fix here most:',
  localFaqs: [
    {
      q: 'Who pays for AC repair in a Camp Washington rental?',
      a: 'Usually the landlord. Ohio law, ORC 5321.04, says landlords must keep the air conditioning they supply in good and safe working order. We fix air conditioners, not leases, so check yours too. Ask the owner in writing, and when they send us, both of you hear what failed.',
    },
    {
      q: 'Do I need a permit to fix the AC in my Camp Washington building?',
      a: 'Not for a repair. A permit comes in when the condenser or heat pump is replaced, and we handle that paperwork for the owner. The American Sign Museum complex and the Crosley Building are individual National Register listings, and we found no local historic district that adds review for homes here.',
    },
  ],
  overrides: {
    ctaLine: 'Cooling repairs for Camp Washington tenants and landlords',
    band1Heading: 'Common AC Problems in Camp Washington Homes',
    commonSituations: [
      'Two condensers side by side behind a two-family house, one cooling and one not',
      'A furnace cooling coil frozen solid from a filter nobody changed between tenants',
      'Refrigerant lines retrofitted into an old building, leaking where they pierce the wall',
      'An electrically heated flat whose heat pump won’t leave heating mode',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Before reporting anything, make sure the thermostat is set to cool and no breaker has flipped. A filter left in place across a lease turnover often freezes the coil, so change it if the lease allows. Cold air returning means nobody has to come out. Otherwise, alert the landlord, especially when the breaker keeps tripping, the outside unit buzzes but never starts, or water collects under the indoor unit. Once booked by the owner, the technician inspects both halves, explains the cause to tenant and owner alike and fixes a price before work. Cold air at the registers is our proof the job is finished.',
      },
      {
        title: 'Repair or Replace Your Camp Washington AC?',
        body: 'Every Camp Washington home predates the air conditioner inside it, since nothing here was built after 1979. So the equipment nameplate decides. Younger than roughly 12 years with a single bad part, keep it running. Older, with a compressor that’s quit, a new unit is the sounder choice, and we take care of any permit work. In a two-family house, compare both units’ ages before replacing one, because the second may not be far behind. Short of replacement, watch the Duke Energy Ohio bill, since a grimy coil or a slow leak means longer compressor runs for no extra comfort.',
      },
    ],
    whyTitle: 'Why Camp Washington Landlords and Tenants Call Us',
    whyParagraph:
      'Most Camp Washington homes are rentals, so each repair gets explained to the person living with the problem and the owner paying for it. Prices are agreed in advance, and every technician is background checked.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in a Camp Washington rental?',
        a: 'We can’t say until the fault is found. A burned contactor is a quick swap. A leak along a line set threaded through an old wall takes longer to trace. After the diagnosis the owner gets one flat price to approve, and an evening or weekend visit carries no overtime charge.',
      },
      {
        q: 'Should a Camp Washington landlord repair or replace an old AC?',
        a: 'Repair a unit with life left in it when one part has failed. Replace an older one whose compressor has gone. In a two-family house, check whether the other unit is the same age, because doing both at once saves the tenants a second round of work in the building.',
      },
      {
        q: 'Why is my Camp Washington AC blowing warm air?',
        a: 'Check the thermostat, the breaker and the filter first. Most homes here pair a condenser with a coil on a gas furnace, where a dead capacitor or lost refrigerant usually explains warm air. In the 33.2% of homes on electric heat, a heat pump stuck in heating mode is the other common cause.',
      },
    ],
  },
};
