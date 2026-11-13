import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const stBernard: LocationServiceCopy = {
  localParagraph:
    'Gas heats about seven in ten St. Bernard homes, so most heat pumps here work alongside a gas furnace. Census figures show 24.5% use electricity, a share that includes electric furnaces and baseboard, not only heat pumps. Housing runs from pre-1940 houses to 1950s and 1960s homes, and nearly one in five units is in a two-family building, where each unit may have its own system. We find the problem and price it before starting.',
  emergencyParagraph:
    'St. Bernard’s January lows sit near 23F, according to NOAA normals taken at the Cincinnati airport. A heat pump quitting on that kind of night cools the house fast, and babies, older relatives and anyone ill suffer first. We fix heat pumps along with the gas furnaces that back them up, most often the same day, Saturdays and Sundays included.',
  commonIntro:
    'St. Bernard calls come from single houses and from two-family buildings. These four are the ones we see most:',
  localFaqs: [
    {
      q: 'Who issues heat pump permits in St. Bernard now?',
      a: 'Since January 1, 2026, building permits and inspections for the Village of St. Bernard come from the Hamilton County Building Department, not the village. If your heat pump needs replacing, we apply through the county and handle the inspection, so you don’t need to track the change yourself.',
    },
    {
      q: 'I own a double in St. Bernard. Does Ohio law make me responsible for my tenant’s heat?',
      a: 'Yes. Ohio law (ORC 5321.04) requires landlords to keep heating equipment they supply in good and safe working order, and that covers a heat pump serving the rental side of a double. If the tenant reports no heat, we can usually come the same day. We fix heat pumps, not leases.',
    },
    {
      q: 'Our St. Bernard basement took on water from Mill Creek. Is the heat pump safe to run?',
      a: 'Not until it’s checked. St. Bernard grew up on low ground beside Mill Creek, and FEMA lists it among the county’s Mill Creek flood communities. If water reached the air handler or the outdoor unit, switch off both breakers and leave them off. We test the controls and motors and replace what the water ruined.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump repair for St. Bernard houses and doubles',
    band1Heading: 'Common Heat Pump Problems in St. Bernard Homes',
    commonSituations: [
      'A double with two heat pumps, one working and one stuck on emergency heat',
      'A dual fuel system where the gas furnace does all the work and the heat pump never starts',
      'A basement air handler that has had water in it',
      'A 1950s house with a heat pump added on and ductwork that can’t carry enough air',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'Some St. Bernard no-heat calls end before we arrive. Make sure the thermostat reads heat, not cool or off. Hold the filter up to a light; if you can’t see through it, replace it. Owners of a double should open the panel for their own side, find the outside unit’s breaker and the air handler’s breaker, and switch back any that tripped. Leaves or snow packed around the outside unit should come away. Defrost looks odd but is fine: steam, a light frosting, the fan resting briefly. Warm air again means no visit needed. Ice on the coil all day, or grinding, means call us, and the price comes first.',
      },
      {
        title: 'Repair or Replace Your Heat Pump in St. Bernard?',
        body: 'Let the heat pump decide, not the house. A St. Bernard house from 1955 may have a heat pump fitted only a few years ago, and a bad contactor or a worn outdoor fan motor on that is a repair. When the compressor fails or refrigerant keeps leaking from an older unit, we quote a replacement next to the repair and handle the county permit. Old ducts sized for a gas furnace can starve a heat pump of air, so we measure before blaming the unit. A Duke Energy bill that jumps without a cold snap usually means backup heat is carrying the house.',
      },
    ],
    whyTitle: 'Why St. Bernard Homeowners and Landlords Call Us',
    whyParagraph:
      'St. Bernard is a village of older houses and doubles, most heated by gas, with heat pumps often added alongside. We repair those systems, quote a flat price before starting, and we’ve been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much does heat pump repair cost in St. Bernard?',
        a: 'It depends on the fault. A failed capacitor is a short visit; a refrigerant leak inside an old basement or behind a finished wall takes longer to trace. We diagnose, then give you a flat-rate price to approve before any work. Weekend calls have no overtime fees.',
      },
      {
        q: 'Is it worth repairing an older heat pump in St. Bernard?',
        a: 'Usually, if one part failed and the compressor still works. When the compressor is gone or refrigerant leaks keep coming back on an older unit, a replacement is worth pricing. The age of the house tells you little; look at the age of the heat pump. We quote both.',
      },
      {
        q: 'Why is my St. Bernard heat pump blowing cool air?',
        a: 'Heat pump air comes out warm, not hot like a gas furnace, so it can feel cool on your hand. That is normal, and your furnace should take over when it gets very cold. If the outdoor unit is iced over or not running and the air is cold, that is a fault.',
      },
    ],
  },
};
