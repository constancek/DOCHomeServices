import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evendale: LocationServiceCopy = {
  localParagraph:
    'Nearly every Evendale furnace we see is a gas unit in a detached, owner-occupied house. Census figures put 84.5% of homes on gas heat, and most houses went up between 1980 and 1999, so the furnace in the basement could be the original or a newer replacement. The parts differ a lot between the two. Newer high-efficiency models add a condensate drain, plastic vent pipes and an inducer fan that many older ones lack. We check which you have, find the fault and price the repair first.',
  emergencyParagraph:
    'NOAA records at CVG show about 100 nights a year at or below freezing around Evendale. Losing heat on one of those nights is hardest on babies, older parents and anyone unwell, and a long outage can threaten the plumbing. We repair gas and electric furnaces, getting to most calls the same day, weekends included.',
  commonIntro:
    'Evendale is almost all single-family homes from the 1960s through the 1990s on gas heat, so these furnace calls lead:',
  localFaqs: [
    {
      q: 'Do I need a permit to replace a furnace in Evendale?',
      a: 'Yes. The Village of Evendale Building Department issues HVAC permits through its mechanical permit application, and a residential HVAC job needs a site plan but no construction drawings. We prepare and file the application as part of the replacement, so you don’t have to visit the Administration Office yourself.',
    },
    {
      q: 'Mill Creek flooded my Evendale basement. Is the furnace safe to run?',
      a: 'Leave it off until a technician checks it. Mill Creek runs through Evendale, and water that reaches a furnace can ruin the gas valve, control board and blower motor, and leave rust where you can’t see it. If you smell gas, leave the house and call the gas company from outside. We test every part before restarting it.',
    },
  ],
  overrides: {
    ctaLine: 'Evendale furnace repair for gas heat in single-family homes',
    band1Heading: 'Common Furnace Problems in Evendale Homes',
    commonSituations: [
      'A high-efficiency furnace that locks out because its condensate drain is clogged',
      'An inducer motor humming or rattling before the burner lights',
      'A 1980s furnace whose igniter cracks on the first cold morning',
      'Upstairs bedrooms in a two-story house running cooler than downstairs',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Run through the basics before calling. Set the thermostat to heat and replace its batteries, check the furnace’s power switch and the breaker, put in a clean filter, and make sure the lower door is pressed firmly into place, because a door switch keeps many furnaces off when it’s loose. Any of those may solve it, and then you don’t need us. If you smell gas, leave without flipping a switch and phone the gas company from outdoors. A carbon monoxide alarm means everyone out right away. Call us for lockout codes, short cycling or no ignition. We inspect, explain and quote a flat price, then confirm steady heat.',
      },
      {
        title: 'Repair or Replace Your Evendale Furnace?',
        body: 'Evendale’s houses are mostly from the 1980s and 1990s, but the furnace is what counts. A well-kept furnace that loses an inducer motor or igniter is usually worth repairing. A cracked heat exchanger is a safety call, not a budget one: it can put carbon monoxide in the air, so we shut the furnace down and price a replacement. The village requires a permit for that, and we file it. Between visits, watch the gas bill against the weather. A sharp rise with no cold snap behind it often means a furnace short cycling or a blower straining against a dirty filter.',
      },
    ],
    whyTitle: 'Why Evendale Homeowners Call Us',
    whyParagraph:
      'Evendale homeowners get a licensed, insured technician who has passed a background check and drug test, a flat price approved before any work, and no overtime charges. Financing is available when a replacement makes more sense than a repair.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Evendale?',
        a: 'It depends on the part, so we diagnose before quoting. Clearing a condensate drain is a short job, and a new control board or gas valve costs more. You approve a flat price before we touch the furnace, and calls on evenings and weekends carry no overtime fee.',
      },
      {
        q: 'Is it worth repairing a 1990s furnace in Evendale?',
        a: 'It can be. If the heat exchanger is intact and one part failed, a repair is usually the better value. If the heat exchanger is cracked, or the furnace needs a second big repair in a short time, replacement makes more sense. We show both prices before you decide.',
      },
      {
        q: 'Why does my Evendale furnace blow cold air?',
        a: 'Make sure the thermostat fan is on auto and the filter is clean. On a high-efficiency furnace, a blocked condensate drain or a frozen vent pipe can stop the burner while the blower keeps going. If that’s not it, the igniter or flame sensor is the next suspect, and that’s a job for us.',
      },
    ],
  },
};
