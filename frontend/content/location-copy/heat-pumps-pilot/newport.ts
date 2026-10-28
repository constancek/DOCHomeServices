import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newport: LocationServiceCopy = {
  localParagraph:
    'Newport has two heat pump jobs, and they behave differently when something breaks. In apartments, an electric air handler is often the only heat, and Census figures show 40.7% of the city’s homes heat with electricity. In older houses, nearly half built in 1939 or before, a heat pump usually sits beside a gas furnace that keeps running when the heat pump stops. We diagnose on the first visit and quote before any repair.',
  emergencyParagraph:
    'NOAA lists a normal January low near 23F for CVG. Losing heat on that kind of night in a Newport house or flat matters most for infants, older family members and anyone sick. Our technicians reach most calls the same day, Saturday and Sunday included, and fix both the outdoor unit and the electric air handler.',
  commonIntro:
    'Newport heat pump calls split between rented apartments heated by electricity and older houses running dual fuel. Four problems come up most:',
  localFaqs: [
    {
      q: 'I rent in Newport and the heat pump stopped. What should I do?',
      a: 'Contact your landlord or property manager straight away, by text or email so there’s a record. Your lease says who is responsible for repairs. While you wait, confirm the thermostat is set to heat and look for a tripped breaker. We repair heat pumps; the lease terms are between you and the owner, and we can schedule through them.',
    },
    {
      q: 'I live in Newport’s East Row. Can a new outdoor unit go anywhere I like?',
      a: 'Not without checking. East Row is one of Newport’s local historic districts, and the city’s Historic Preservation office must sign off on exterior alterations with a Certificate of Appropriateness before work begins. Its rules don’t say whether outdoor equipment counts, so we ask the city before a move and keep a replacement where the old unit sat.',
    },
    {
      q: 'Do I need a permit to replace a heat pump in Newport?',
      a: 'Yes. Kentucky law calls for one on heat pump replacements, and in Newport the City of Newport Building Department issues HVAC permits itself instead of Campbell County. We take care of that paperwork for you. Repairs are quoted at the visit, and nothing happens until you agree.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump repair for Newport apartments and older houses',
    band1Heading: 'Common Heat Pump Problems in Newport Homes and Apartments',
    commonSituations: [
      'Emergency heat running for days in an apartment, with the electric bill to match',
      'An older house where the heat pump came later and the top floor stays cold',
      'An outdoor unit iced over that never clears after defrost',
      'Cooling mode stuck on after a power outage reset the system',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'In a Newport apartment, a cold room is sometimes a thermostat left on cool or off; set it to heat. Change a filter that looks clogged. Heat pumps have two breakers, one for the outdoor unit and one for the indoor air handler, and a tripped one can be reset once. Clear snow or leaves off the outdoor unit. A unit in defrost steams, frosts lightly and pauses its fan for a few minutes, and none of that is a fault. If warm air follows, you’re done. Ice that won’t melt or an aux heat light that never goes out needs us. We explain the fault and the price first.',
      },
      {
        title: 'Repair or Replace Your Newport Heat Pump?',
        body: 'Look at the heat pump, not the age of the building. Plenty of Newport houses predate 1940, and the outdoor unit on one may be only a few years old; its label tells you. A bad contactor or defrost sensor on a younger unit is a repair. A failed compressor or a recurring refrigerant leak is where we price replacement next to the fix so you can compare. Duke Energy Kentucky supplies the power, and a heat pump leaning on its backup strips shows up there as a higher winter bill.',
      },
    ],
    whyTitle: 'Why Newport Residents and Landlords Call Us',
    whyParagraph:
      'Newport has more renters than owners, and we work for both: tenants get a clear answer, owners get one upfront price. Technicians are licensed, insured, background-checked and drug-tested, and we make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in Newport?',
        a: 'Price depends on the fault. A contactor or sensor is a quick fix, while chasing a refrigerant leak in an older building takes longer. After we diagnose, you get one flat-rate price to approve, and there’s no overtime charge for weekend visits. For landlords, we can send the quote straight to you.',
      },
      {
        q: 'Should I repair or replace a heat pump in Newport?',
        a: 'Repair it if the unit is reasonably young and one part broke. If the compressor has failed or the refrigerant keeps leaking, compare both prices before deciding. For rental owners with several units, we can tell you which ones are worth fixing and which are near the end. Financing is available.',
      },
      {
        q: 'Why is my Newport heat pump blowing cool air?',
        a: 'Heat pump air comes out warm but not hot, so in a drafty older home it can feel cool. That is normal. If the air is cold and the outdoor unit is frozen or not running, the heat pump has stopped heating, and the backup strips may be all that’s left.',
      },
    ],
  },
};
