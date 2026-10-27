import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Heat pump repair in Winton Hills is work we do for property owners, not tenants. Nearly every household here rents (97.0% by Census figures), and most of those homes are public housing at Winton Terrace and Findlater Gardens, which the Cincinnati Metropolitan Housing Authority repairs through its own work orders. The heat pumps we fix belong to private owners of two-family houses and small buildings, in a neighborhood where electricity heats more homes than gas. We diagnose the unit, and the owner approves a flat price before work.',
  emergencyParagraph:
    'NOAA normals for CVG show January lows around 23F. A Winton Hills apartment without heat on a night like that is dangerous for babies and older tenants, and for anyone ill, so tenants should report it the same day to CMHA or their landlord. For private owners we repair heat pumps and air handlers, often the same day, weekends included.',
  commonIntro:
    'Private rentals in Winton Hills often run on electric heat. These are the heat pump faults owners call us about most:',
  localFaqs: [
    {
      q: 'I live in Winton Terrace and my heat isn’t working. Can I call you?',
      a: 'No, CMHA handles that. Submit a work order with the housing authority or its property manager and write down the date you reported it. You can check that the thermostat is set to heat and no breaker has tripped, but leave the equipment closed. If the heat stays off, follow up the same day.',
    },
    {
      q: 'What temperature does my private landlord in Winton Hills have to keep?',
      a: 'Inside Cincinnati, if you can’t control your own heat, the rental has to stay at 70F or above once it has been under 60 outside for 24 hours, and the Health Department enforces it. If you do control it, Ohio law still requires working heat. We fix heat pumps, not leases.',
    },
    {
      q: 'I own a two-family in Winton Hills. Can you set up access with my tenants?',
      a: 'Yes. You approve the price, and we arrange the visit time with the tenant, then tell you what we found and what we fixed. When both units have their own heat pump, we test and price each one separately, so you see exactly what each side of the house needs.',
    },
  ],
  overrides: {
    ctaLine: 'Winton Hills heat pump repair for private landlords',
    band1Heading: 'Common Heat Pump Problems in Winton Hills Rentals',
    commonSituations: [
      'A tenant’s heat running only on electric strips because the outdoor unit stopped',
      'Two heat pumps on one two-family house, one iced over and one fine',
      'An air handler breaker that trips whenever the backup heat comes on',
      'An outdoor unit beside a small building that hums but never starts',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Tenants can rule out a few things without opening any equipment: the thermostat should be on heat, and a tripped breaker in a reachable panel is worth resetting once. Owners can also change the filter and clear snow or trash from around the outdoor unit. Light frost and steam with the fan paused is a defrost cycle, not a fault. If heat comes back, nobody needs us. If not, CMHA residents file a work order and private tenants notify the landlord in writing. Owners can send us when the coil stays iced or the aux heat light never goes out. We explain the fault and price it first.',
      },
      {
        title: 'Repair or Replace Your Winton Hills Heat Pump?',
        body: 'For an owner, the heat pump’s own date matters, not the building’s, which here often goes back to the 1940s or 1950s. A sound unit with a bad capacitor, contactor or fan motor is worth repairing. An older unit with a seized compressor or a leak that keeps returning is where we price repair and replacement together, because each breakdown leaves a tenant without heat. Replacement work in the city needs a permit from Cincinnati Buildings & Inspections, and we pull it. A failing heat pump also shows up on the Duke Energy bill, wherever the owner pays for heat.',
      },
    ],
    whyTitle: 'Why Winton Hills Landlords Call Us',
    whyParagraph:
      'Private owners in Winton Hills need a tenant’s heat back fast and a price they can approve by phone. We send licensed technicians who pass background checks and drug tests, and we charge no overtime fees.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost for a Winton Hills rental?',
        a: 'We test first, because a contactor is a far smaller job than a refrigerant leak or a compressor. The owner gets one flat price and approves it before work starts. If you own more than one building in Winton Hills, each address gets its own quote.',
      },
      {
        q: 'Should a Winton Hills landlord repair or replace a failing heat pump?',
        a: 'Repair it when one part failed and the rest tests well. Replace it when an older unit has lost its compressor or breaks down every winter, since each failure means a cold tenant and another call. We put both prices side by side, and financing is available.',
      },
      {
        q: 'Why is the heat pump in my Winton Hills rental blowing cool air?',
        a: 'Heat pump air is warm, not hot, so it can feel cool at the vent while the system works fine. Air that is truly cold, with the outdoor unit frozen or silent, is a fault. In a CMHA unit that means a work order; with a private landlord, report it in writing.',
      },
    ],
  },
};
