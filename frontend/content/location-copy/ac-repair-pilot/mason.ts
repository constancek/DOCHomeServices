import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'In Mason we mostly repair the builder’s original equipment. Census figures put roughly half of local homes in the 1990 to 2009 building boom, so those first condensers and air handlers have reached the stage where one part gives out, then another. Over a third of households heat electrically, so the outdoor unit is often a heat pump doing winter duty as well. Townhome air handlers tend to sit in a cramped closet. Our technician pins down the failed part and quotes it before any tools come out.',
  emergencyParagraph:
    'A Mason house without cooling gets risky fastest for grandparents and newborns sleeping upstairs, since second floors trap the heat. NOAA’s CVG station logs about 22 days each summer that reach 90 or above. Our crews fix split systems and heat pumps alike, and on most calls someone is at your door that same day, Saturdays and Sundays too.',
  commonIntro:
    'Most Mason AC calls involve equipment installed when the 1990s and 2000s subdivisions were built. These problems come up most:',
  localFaqs: [
    {
      q: 'Who handles the permit when an AC is replaced in Mason?',
      a: 'The City of Mason Engineering & Building Department covers permits for work inside city limits, and its monthly reports file furnace and AC swaps under residential mechanical. We submit that application ourselves before the new equipment arrives. Fixing the system you already have is a service call, not a replacement.',
    },
    {
      q: 'Is the outdoor unit at my Mason house an AC or a heat pump?',
      a: 'The model label usually says, or ask yourself what heats the house. Over a third of Mason homes heat electrically, and most of those rely on a heat pump. That changes the repair, because the same outdoor box handles January too, so we run it in both modes before leaving.',
    },
  ],
  overrides: {
    ctaLine: 'AC repair for Mason homes and townhomes',
    band1Heading: 'Common AC Problems in Mason Homes',
    commonSituations: [
      'An original 1990s condenser buzzing with its fan stalled',
      'Upstairs bedrooms that stay warm long after downstairs cools',
      'Water pooling under a townhome closet air handler',
      'A heat pump frosted solid on a July afternoon',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Some Mason problems take you a few minutes. Swap a dirty filter and replace weak thermostat batteries. A tripped breaker deserves one reset. If the house starts cooling again and keeps cooling, skip the service call. Phone us when that breaker flips a second time, or the outdoor unit buzzes but its fan won’t spin, often a tired capacitor on original equipment. Frost forming on the larger refrigerant pipe also needs a visit. We look over the condenser and the coil indoors and walk you through the fault. Nothing gets fixed until you sign off on a flat-rate figure, and afterward we read the supply temperature at a register.',
      },
      {
        title: 'Repair or Replace Your Mason AC?',
        body: 'Read the date on the outdoor unit, not the year the house was finished. Lots of 1990s Mason houses are already on their second condenser, and a newer one like that is worth fixing when a capacitor or contactor quits. Original builder equipment with a seized compressor or a coil that leaks is a better candidate for replacement, since more big failures usually come close behind. Mason requires a city permit for the swap, which we take care of. Until then, set this July’s Duke Energy Ohio bill next to last July’s. Equipment short on refrigerant runs longer for the same comfort, and the bill climbs first.',
      },
    ],
    whyTitle: 'Why Mason Homeowners Call Us',
    whyParagraph:
      'Much of Mason still cools with original 1990s and 2000s equipment, and we know its weak spots. Every person we send has passed a background check and drug test, carries a license and insurance, and quotes before starting.',
    sharedFaqs: [
      {
        q: 'How much does AC repair cost in Mason?',
        a: 'Any honest figure waits on the diagnosis. Swapping a contactor in an aging Mason condenser takes little time, while tracking a leak inside a townhome’s closet coil takes much more. Once testing is done, we show you a single flat-rate number for approval. Calling on a Saturday or after dinner doesn’t raise it.',
      },
      {
        q: 'Should I repair or replace my AC in Mason?',
        a: 'A younger system with a single bad part is worth fixing. When the builder’s original 1990s or 2000s unit loses its compressor or coil, replacing usually costs you less over the next few summers than chasing one repair after another. For borderline cases we write up both quotes so you can compare them.',
      },
      {
        q: 'Why is my AC blowing warm air in Mason?',
        a: 'Confirm the thermostat says Cool and the breaker hasn’t tripped, then pull the filter. A still outdoor fan points to a dead capacitor. All-electric Mason homes add another cause: a heat pump whose reversing valve sticks in heat mode. Refrigerant loss gives the same symptom, and only gauges can confirm it.',
      },
    ],
  },
};
