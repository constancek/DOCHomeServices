import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const dryRun: LocationServiceCopy = {
  localParagraph:
    'Furnace repair in Dry Run nearly always means a gas furnace in a detached house the owner lives in. Census figures show 74.7% of homes on gas and 96.1% owner-occupied, so the call and the decision rest with you. Most houses here date from the 1970s to the 2000s, and a late-1980s house may still run its first furnace, which shifts what’s worth fixing. Electric heat covers most of the rest. You’ll hear what broke, and the price, before we replace anything.',
  emergencyParagraph:
    'Without heat, the ones at risk are babies, grandparents and anyone sick. NOAA normals count roughly 100 nights a year at CVG that drop to 32F or lower, and a cold house can end up with burst pipes. In Dry Run we reach most furnace and heat pump calls the same day, Saturdays and Sundays included.',
  commonIntro:
    'Dry Run is almost all owner-occupied single-family houses on gas heat, built from the 1970s onward. These are the furnace calls we get most:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a furnace in Dry Run?',
      a: 'A new furnace generally needs one; a repair doesn’t. Dry Run sits in unincorporated Anderson Township rather than inside a city, so there’s no city building office involved. We sort out the permit for a replacement before installation, and you don’t have to track down which office covers your street.',
    },
    {
      q: 'My Dry Run furnace vents through white plastic pipes. Does that change anything?',
      a: 'It does. Those pipes mark a high-efficiency furnace, and the ends outside the house bring in air and carry out exhaust. Snow, leaves or a wasp nest blocking them will shut the furnace down. Clear the openings and reset the thermostat. If it still stops, we test the pressure switch and inducer motor.',
    },
  ],
  overrides: {
    ctaLine: 'Dry Run furnace repair for Anderson Township homeowners',
    band1Heading: 'Common Furnace Problems in Dry Run Homes',
    commonSituations: [
      'A 1980s builder furnace whose inducer motor whines before it gives out',
      'A high-efficiency furnace that shuts down after snow drifts over its vent pipes',
      'Upstairs bedrooms in a two-story colonial staying several degrees colder',
      'A furnace that runs fine but sends water across the basement floor',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Plenty of Dry Run no-heat calls end with the homeowner fixing it. Check the thermostat mode and batteries, the light-style service switch near the furnace and the panel breaker. Swap a gray, matted filter. The lower door on many furnaces presses a safety switch, so a door left ajar keeps the burner off. Still cold? Then it’s our turn, especially with short-cycling, dripping water or a burner that won’t catch. If you smell gas, get everyone out, leave every switch as it is, and phone the gas company from a neighbor’s driveway. When the carbon monoxide detector sounds, head outside before doing anything else.',
      },
      {
        title: 'Repair or Replace Your Dry Run Furnace?',
        body: 'Go by the date on the furnace’s data plate. Lots of 1990s Dry Run houses are already on their second furnace, and a newer one with a dead igniter, inducer motor or circuit board is an easy repair to justify. If the builder’s original furnace needs a major part, you get the repair quote and a replacement quote on one sheet. Any split in the heat exchanger changes the conversation, because combustion gases, carbon monoxide among them, can reach the living space; that furnace gets switched off and stays off. We take care of the permit for a new one.',
      },
    ],
    whyTitle: 'Why Dry Run Homeowners Call Us for Heating',
    whyParagraph:
      'You see a flat price and say yes before work begins, and a night or weekend visit costs the same as a weekday. Ours is a family business dating to 1993, and every technician is licensed, insured, background-screened and drug-tested.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Dry Run?',
        a: 'The diagnosis sets the price. Cleaning a flame sensor or replacing a cracked condensate hose is quick, and an inducer or blower motor takes more. You approve one flat-rate figure first. For the few Dry Run rentals, Ohio’s ORC 5321.04 makes heating repairs the landlord’s job; we fix furnaces, not leases.',
      },
      {
        q: 'Should I repair or replace my Dry Run furnace?',
        a: 'If one part has failed and the heat exchanger is sound, repair usually wins. If the furnace has needed a string of big repairs, or the heat exchanger is cracked, replacement makes more sense. Because nearly every Dry Run home is owner-occupied, we walk you through both prices directly.',
      },
      {
        q: 'Why is my Dry Run furnace blowing cold air?',
        a: 'Switch the thermostat fan from on to auto, then look at the filter. A furnace that overheats shuts the flame down while the blower carries on. High-efficiency models also trip a safety switch when a vent pipe is blocked or the condensate drain backs up. Past that, suspect the igniter or flame sensor.',
      },
    ],
  },
};
