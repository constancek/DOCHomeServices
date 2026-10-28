import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'In Bethel, the first question on most AC calls is who owns the system, because Census figures show 51.7% of homes are rented. Many of those are in small apartment buildings, where each unit usually has its own condenser and a closet air handler. The houses lean older, with a median home built in 1958, so central air was often added later. If you rent, tell your landlord first. We find the fault and price it before work starts, for owners and landlords alike.',
  emergencyParagraph:
    'Bethel’s upstairs apartments are where a dead AC hurts most, especially for a tenant waiting on a landlord. Cincinnati sees about 21 days a year at 90 degrees or more, by National Weather Service counts. Owners can book central air or heat pump repair for the same day on most calls, Saturday and Sunday too.',
  commonIntro:
    'More than half of Bethel rents, in older houses and small apartment buildings. These are the AC problems we see most:',
  localFaqs: [
    {
      q: 'I rent in Bethel and my AC quit. Who do I call?',
      a: 'Your landlord, first. Ohio’s landlord law, ORC 5321.04, makes the owner responsible for keeping supplied air conditioning in good and safe working order, so the repair is theirs to set up and pay for. Once they call us, we can meet you at the apartment. We fix air conditioners, not leases, so rent disputes stay between you.',
    },
    {
      q: 'I own a rental in Bethel. Can you work with my tenants?',
      a: 'Yes. Send us the tenant’s contact details and we arrange the visit with them. The price still comes to you: we call with the fault and a flat-rate quote, and nothing starts until you approve it.',
    },
  ],
  overrides: {
    ctaLine: 'Bethel AC repair for owners and landlords',
    band1Heading: 'Common AC Problems in Bethel Homes and Apartments',
    commonSituations: [
      'An apartment closet air handler with its drain line backing up',
      'One unit in a small building running warm while its neighbors cool',
      'A 1950s house with central air added through tight ducts',
      'A condenser that hums but won’t start on a hot afternoon',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Do the free checks before anyone comes out: replace the filter, check the thermostat batteries and reset the breaker. If cold air returns, you don’t need us. Tenants in Bethel should report the problem to the landlord, who usually books the repair. Call us when the breaker trips again or water drips from the closet where the air handler sits. We check the indoor and outdoor units and explain the fault. Nothing starts until the flat-rate price is approved, and after the repair we confirm the air at the vents is cold.',
      },
      {
        title: 'Repair or Replace Your Bethel AC?',
        body: 'Decide on the age of the unit, not the building. A Bethel house from the 1950s can have a condenser put in last decade, and a new capacitor or fan motor keeps it going. An old system with a dead compressor is usually better replaced. Clermont County Building Inspection issues the replacement permit, and we file it. Before that point, the Duke Energy Ohio bill gives early notice: a jump during mild weather usually means a dirty coil or a slow leak is keeping the compressor on longer than it should.',
      },
    ],
    whyTitle: 'Why Bethel Landlords and Homeowners Call Us',
    whyParagraph:
      'More than half of Bethel rents, so we explain each repair to whoever pays and keep tenants informed. Every employee passes a background check and a drug test, and the price is approved before work begins.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Bethel?',
        a: 'The fault sets the price, so we diagnose before quoting. A clogged drain line in an apartment closet is a small job, and a failed compressor on an older house is a big one. The owner gets one flat-rate price to approve before work, and we don’t add overtime for nights or weekends.',
      },
      {
        q: 'Should a Bethel landlord repair or replace an old AC?',
        a: 'Repair when the unit is fairly young and a single part failed. Replace when an old compressor dies or the system needs refrigerant every season. We quote both, so owners can decide with real prices in hand instead of a guess about what the unit has left.',
      },
      {
        q: 'Why is my Bethel AC blowing warm air?',
        a: 'Check that the thermostat is on cool and look for a tripped breaker. In an apartment, find the filter slot near the air handler; a clogged filter can freeze the coil and stop cooling. If the outdoor fan is still or the warm air continues, the landlord or owner should call us.',
      },
    ],
  },
};
