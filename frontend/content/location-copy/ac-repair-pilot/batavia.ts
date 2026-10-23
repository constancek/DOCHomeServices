import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const batavia: LocationServiceCopy = {
  localParagraph:
    'Batavia village homes are old, and most AC repairs here are on cooling added to houses built for heat alone. Census figures put 33.7% of homes as built before 1940 and 57.5% on gas heat, so the usual setup is an outdoor condenser plus a coil over the furnace, fed by ducts sized for warm air. Upstairs rooms fall behind first. Many homes are rented, so the landlord often books the repair. We find the fault and price it before anything gets done.',
  emergencyParagraph:
    'Older Batavia houses hold heat upstairs once the air conditioning stops, which hits elderly residents and babies hardest. Cincinnati sees close to 21 days of 90-plus heat in a typical year, by National Weather Service count. Batavia central air and heat pump calls usually get repaired on the day they come in, weekend days as well.',
  commonIntro:
    'Batavia’s village homes are mostly prewar and mid-century, and gas heats the majority. Here’s what we fix most often:',
  localFaqs: [
    {
      q: 'Why is the upstairs of my older Batavia house so hard to cool?',
      a: 'Usually the ducts, not the AC. In a house that predates central air, the ductwork was added later or sized for a furnace, and the upper rooms get too little supply air. We check the system first. If it’s working and the ducts are the problem, we tell you that instead of selling a repair.',
    },
    {
      q: 'I rent in Batavia. Do I call you or my landlord about the AC?',
      a: 'Your landlord, who books and pays for the repair. Under ORC 5321.04, an Ohio landlord has to keep supplied appliances safe and working. Try the thermostat setting and the breaker, then put the problem to the owner in writing. Leases aren’t our department; air conditioners are.',
    },
  ],
  overrides: {
    ctaLine: 'AC repair for the older homes of Batavia village',
    band1Heading: 'Common AC Problems in Batavia Homes',
    commonSituations: [
      'Second-floor bedrooms in a prewar house staying warm while the downstairs cools fine',
      'A cooling coil retrofitted onto a 1950s gas furnace, icing over behind a small return',
      'A condenser behind a mid-century house with a burned wire at the disconnect',
      'A drain line from a basement furnace coil clogging and overflowing onto the floor',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Many Batavia owners solve a cooling problem on their own. Change the filter first, which matters most on a mid-century furnace with a small return. Set the thermostat below the room’s temperature in cool mode, and give a tripped breaker one reset. Cool air again means no appointment. We earn the visit when the breaker refuses to hold or ice reforms on the furnace coil after the filter is new. Our technician inspects the system, tells you the cause without jargon and sets a flat price that waits for your approval. Afterward we read the register temperature together.',
      },
      {
        title: 'Repair or Replace Your Batavia AC?',
        body: 'A 1950s Batavia house likely isn’t running its first air conditioner, so go by the condenser’s nameplate date. Fix a unit with service left when a single component, like a blower motor, wears out. Swap out an older system once the compressor dies or the coil begins to leak. In the village’s older homes, the ductwork should be measured before anyone sizes new equipment, since oversizing on narrow ducts leaves rooms warm. Clermont County Building Inspection handles HVAC permits in the village, and we file yours. A July Duke Energy Ohio bill that keeps climbing often signals a system falling behind.',
      },
    ],
    whyTitle: 'Why Batavia Homeowners and Landlords Call Us',
    whyParagraph:
      'Batavia’s older houses need someone who checks the ducts and wiring before blaming the equipment. Our licensed, insured technicians work that way and price jobs flat up front. If a repair fails, we make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Batavia?',
        a: 'The fault sets the price, and we find it before quoting. Clearing a clogged condensate drain is quick work, while a compressor in an old condenser is a big job. You get one flat figure with the reasoning, then decide. Nights and weekends carry no overtime, and on rentals the owner approves.',
      },
      {
        q: 'Is it worth repairing the AC in my older Batavia home?',
        a: 'Usually, if the equipment is in decent shape. The house’s age doesn’t settle it, since a 1950s Batavia home can have a five-year-old condenser. Replace when the compressor quits on an aging unit or the leaks keep coming back. If the real trouble is undersized ducts, new equipment alone won’t fix it.',
      },
      {
        q: 'Why does my Batavia AC blow warm air?',
        a: 'Check the thermostat and the breaker first. In most Batavia houses, a coil on the gas furnace and an outdoor condenser do the cooling. If the condenser fan won’t turn, an electrical part has usually failed. Warm air with everything running points to low refrigerant, which needs a licensed technician.',
      },
    ],
  },
};
