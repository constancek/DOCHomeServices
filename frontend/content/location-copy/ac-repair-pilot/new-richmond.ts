import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newRichmond: LocationServiceCopy = {
  localParagraph:
    'New Richmond is newer than its riverfront suggests, and that changes what we find behind the house. Census figures show 33.2% of the village’s homes went up in 2000 or later, and electricity heats 56.5%, so on a newer street the likeliest system is a heat pump. Gas-heated houses usually pair an outdoor condenser with a coil on the furnace. Most residents own their homes and make the repair call themselves. We diagnose the problem and quote it before starting anything.',
  emergencyParagraph:
    'Infants and older residents in New Richmond suffer first when a house loses cooling, more so on a sealed-up upper floor. National Weather Service data gives Cincinnati roughly 21 days per year that reach 90 degrees. We service village heat pumps and central air, and most get fixed the day you call, Saturday and Sunday included.',
  commonIntro:
    'New Richmond homes run from a few prewar houses near the river to plenty of post-2000 builds, most of them electrically heated. The calls we answer most:',
  localFaqs: [
    {
      q: 'My New Richmond AC sat in floodwater. Can I turn it on?',
      a: 'No. Keep the breaker off until a technician has looked. When the Ohio reaches 58 feet on the Cincinnati gauge, homes from Market Street to the river take water. A condenser that sat in it can have wet wiring, and running it wet risks a short. We test it first, and sometimes replacing it is the honest answer.',
    },
    {
      q: 'How do I tell if my New Richmond home has a heat pump or a regular AC?',
      a: 'Look at the furnace and the thermostat. A gas furnace with a coil on top means the outdoor unit is a straight air conditioner. No furnace, or a thermostat with an emergency heat setting, usually means a heat pump, which is common in the village’s newer all-electric houses. We repair both and tell you which you have.',
    },
  ],
  overrides: {
    ctaLine: 'AC repair for New Richmond’s village homes, old and new',
    band1Heading: 'Common AC Problems in New Richmond Homes',
    commonSituations: [
      'A heat pump on a post-2000 house sending warm air once its reversing valve sticks',
      'A condenser that sat in river water and now trips its breaker at every start',
      'An older village house whose furnace coil freezes solid on a humid afternoon',
      'A worn blower motor in a New Richmond mobile home',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'The filter comes first, because a clogged one is behind many New Richmond calls. Then set the thermostat to cool, two or three degrees under what the room reads. If the breaker tripped, one reset is fair. Should the house start cooling, cancel the appointment and keep your money. Ring us if that breaker drops again or the outdoor unit buzzes while its fan stays still. Our technician tests the equipment, tells you plainly what broke and quotes a fixed price that you approve. When the work is finished, a thermometer in a supply vent shows you the change.',
      },
      {
        title: 'Repair or Replace Your New Richmond AC?',
        body: 'Plenty of New Richmond houses from the 1980s have been through two air conditioners, so the label on the unit matters more than the deed. One worn part on a system with service left, a blower motor for example, gets fixed. A tired compressor, or a coil that leaks for the second summer, points to replacement. Clermont County Building Inspection permits those replacements in the village, and filing that permit is part of our job. Your Duke Energy Ohio statement is often the early warning, because a heat pump short on refrigerant has to run longer to keep up.',
      },
    ],
    whyTitle: 'Why New Richmond Homeowners Call Us',
    whyParagraph:
      'New Richmond homeowners ask whether a repair makes sense on a newer heat pump or an older condenser. Licensed, insured technicians answer plainly, and if the fix doesn’t hold, we make it right or you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does AC repair cost in New Richmond?',
        a: 'Diagnosis decides it. A contactor swap on a young heat pump is a modest bill, while a compressor for an old condenser runs much higher. We explain the fault, put one flat number in front of you and wait for your go-ahead. A Saturday or Sunday visit costs no more than a Tuesday, with no overtime fee.',
      },
      {
        q: 'Is my older New Richmond AC worth repairing?',
        a: 'If it has useful life left and one part broke, yes. When the compressor has died or refrigerant leaks out every year, spend the money on new equipment instead. With so many village homes built since 2000, plenty of systems here are younger than people expect and still worth fixing. We show you the label date and both prices.',
      },
      {
        q: 'Why is my New Richmond AC blowing warm air?',
        a: 'Start inside the house: thermostat set to cool, filter clean, breaker on. In the village’s all-electric houses, we often find a heat pump whose reversing valve is stuck on the heating side. If the outdoor fan is silent, suspect an electrical part. We take readings and walk you through them before any quote.',
      },
    ],
  },
};
