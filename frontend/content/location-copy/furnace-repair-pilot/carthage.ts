import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const carthage: LocationServiceCopy = {
  localParagraph:
    'Carthage heating is mostly gas. Census figures put utility gas at 81.0% of homes, so the typical call is a gas furnace in a basement. With 68.5% of houses built in 1939 or earlier, that furnace came long after the house did, feeding ducts that were added later, and the rooms farthest from the basement are the first to go cold. Electric heat turns up mainly in apartments. We test the system, tell you what failed and price it before any work starts.',
  emergencyParagraph:
    'NOAA normals for CVG put Carthage’s January lows near 23F. Lose the furnace in that cold and the first people to worry about are infants, older family and anyone sick; left long enough, the pipes can freeze. Gas or electric, we fix most Carthage furnaces the day you call, Saturdays and Sundays included.',
  commonIntro:
    'Carthage heating calls are mostly gas furnaces in older houses, plus rentals in two-families and apartment buildings. These come up most:',
  localFaqs: [
    {
      q: 'Who issues the permit to replace a furnace in Carthage?',
      a: 'The City of Cincinnati. Carthage is a city neighborhood, not a separate village, so mechanical permits and inspections run through the Department of Buildings & Inspections. When we replace a furnace, the permit is part of our job; you won’t deal with the city, and an inspector signs off on the finished work.',
    },
    {
      q: 'My Carthage rental has no heat. What does the landlord have to do?',
      a: 'Report it to your landlord first. Under Cincinnati’s health code, if you can’t control your own heat, the landlord has to hold the unit at 70F or above after a full day below 60F outside. State law separately says heating the landlord supplies must stay in good and safe working order. We fix furnaces, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Carthage gas furnace repair, same day on most calls',
    band1Heading: 'Common Furnace Problems in Carthage Homes',
    commonSituations: [
      'A basement gas furnace clicking away without ever catching',
      'Upstairs bedrooms in a 1920s Carthage house that stay chilly',
      'An inducer motor rattling every time the heat starts',
      'A burned-out heating element in an apartment’s electric furnace',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Run a few no-cost checks first. Set the thermostat to heat and give it new batteries. Find the furnace’s power switch, on the wall nearby or on the cabinet itself; it gets bumped off more than people expect. Check the breaker. A choked filter or a door left loose will also keep many furnaces from running. If sorting those out restores heat, there’s no need for us. Call when it clicks and won’t light, lights and quits, or blows air that stays cool. Gas smell: leave, skip the switches, phone Duke Energy from outside. CO alarm: everybody out. We diagnose, then you approve a price.',
      },
      {
        title: 'Repair or Replace Your Carthage Furnace?',
        body: 'The furnace decides it, not the house. Carthage houses are mostly older than 1940, and the basement furnace may be the second or third one, so the house’s age tells us almost nothing. An igniter or pressure switch failure is a normal repair. A cracked heat exchanger isn’t, because carbon monoxide can leak through it; we turn that furnace off and quote a replacement. We handle any replacement permit. Short of a breakdown, watch for a furnace running longer and longer to warm the back rooms. That shows on the gas bill first, and it’s a good moment for a look.',
      },
    ],
    whyTitle: 'Why Carthage Homeowners and Landlords Call Us for Furnace Repair',
    whyParagraph:
      'Carthage is part owner-occupied houses, part rentals, and we take calls from both. Every technician is licensed, insured, background-checked and drug-tested, and nothing gets done until you sign off on the flat price.',
    sharedFaqs: [
      {
        q: 'What does it cost to repair a furnace in Carthage?',
        a: 'We test before we name a price. Cleaning a flame sensor or putting in a new igniter is a small job, and a failed inducer motor or control board is a larger one. You see a single flat figure and decide, and night or weekend calls carry no overtime.',
      },
      {
        q: 'Is my old Carthage furnace worth repairing?',
        a: 'Usually, if one component failed and the heat exchanger is intact. Not if the exchanger is cracked, since that can fill the house with carbon monoxide. And when the same furnace needed fixing last winter and the winter before, we’ll show you a replacement price alongside the repair.',
      },
      {
        q: 'Why is my Carthage furnace blowing cold air?',
        a: 'Check the thermostat is set to heat with the fan on auto. Then slide the filter out; a clogged one overheats the furnace, the burners shut off, and the blower keeps pushing air. In older Carthage houses, cool air only in the back rooms often means a duct issue, not a furnace fault.',
      },
    ],
  },
};
