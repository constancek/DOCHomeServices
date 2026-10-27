import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pleasantRun: LocationServiceCopy = {
  localParagraph:
    'Gas and electric heat are nearly tied in Pleasant Run, so one call is a standalone heat pump and the next is a heat pump working with a gas furnace. Census figures put gas at 49.2% of homes and electricity at 47.0%, and the electric side includes baseboard and electric furnaces as well. Since the bulk of the houses date from the 1960s and 1970s, the heat pump in the yard is rarely original; go by its label. We name the fault and its price before starting.',
  emergencyParagraph:
    'NOAA normals count roughly 100 nights a year at 32F or below at the Cincinnati airport. Many Pleasant Run homes heat with electricity, so a heat pump failure overnight hits babies, older relatives and people who are ill hardest. We fix heat pumps and the heat strips behind them, same day on most calls, weekends too.',
  commonIntro:
    'Most of what we see in Pleasant Run is 1960s and 1970s housing, with a newer pocket built after 2000. Four calls stand out:',
  localFaqs: [
    {
      q: 'I live in Pleasant Run. Who issues the permit for a replacement heat pump?',
      a: 'Pleasant Run is in Colerain Township, not Springfield Township like Pleasant Run Farm to the east. Colerain Township handles zoning, and Hamilton County Buildings + Inspections handles building permits for the township. We confirm what your address needs and take care of the permit on a replacement.',
    },
    {
      q: 'Our Pleasant Run house has a heat pump and a gas furnace. Why does the furnace come on so often?',
      a: 'In a dual fuel system the furnace should only take over when it gets cold enough outside, or when the heat pump can’t keep up. If it fires on mild days too, the heat pump may have a fault or the thermostat’s changeover setting may be wrong. We check both and explain which it is.',
    },
    {
      q: 'We rent our Pleasant Run house to a tenant. Can they book the heat pump repair?',
      a: 'If you authorize it, yes. Ohio law, ORC 5321.04, makes the landlord responsible for keeping supplied heating equipment working and providing reasonable heat. Some owners let the tenant call us and then approve the price themselves by phone. We fix heat pumps, not leases, so payment terms stay between you.',
    },
  ],
  overrides: {
    ctaLine: 'Heat pump and dual fuel repair for Pleasant Run homes',
    band1Heading: 'Common Heat Pump Problems in Pleasant Run Homes',
    commonSituations: [
      'A 1970s house where the heat pump’s outdoor fan hums but won’t spin',
      'A dual fuel system that runs the gas furnace even on mild days',
      'An all-electric home with the auxiliary heat light on for days',
      'A newer house whose heat pump keeps tripping its outdoor breaker',
    ],
    proseSections: [
      {
        title: 'Signs Your Heat Pump Needs Repair, and When It Doesn’t',
        body: 'A few things are worth checking yourself. The thermostat should read heat, not cool, off or emergency heat. Change the filter if it’s gray. Your panel has a breaker for the outdoor unit and another for the indoor unit; if one tripped, reset it once and leave it alone if it trips again. Rake leaves and clear snow away from the outdoor unit. Steam, a thin frost and a fan that stops briefly are signs of defrost, not failure. If warm air returns, you don’t need us. We do need to look if ice won’t clear, the auxiliary light stays on, or the system stays stuck on cooling.',
      },
      {
        title: 'Repair or Replace Your Pleasant Run Heat Pump?',
        body: 'Base it on the heat pump, not the year your house went up. Most Pleasant Run homes date from the 1960s and 1970s, but the heat pump outside is often far younger, so read the date on its label. A bad capacitor, contactor or defrost sensor on a healthy unit is worth fixing. A compressor failure or a leak that keeps coming back on an older unit is when we price replacement alongside repair. Duke Energy delivers power here, and a bill that jumps while the weather holds steady usually means the heat strips are working too hard. We handle the replacement permit.',
      },
    ],
    whyTitle: 'Why Pleasant Run Homeowners Call Us',
    whyParagraph:
      'Most Pleasant Run homes are owner-occupied, and owners want a straight answer on repair or replace. Licensed, background-checked technicians, a flat-rate price you approve first, and financing if you decide to replace.',
    sharedFaqs: [
      {
        q: 'What does heat pump repair cost in Pleasant Run?',
        a: 'There’s no single figure, because it depends on the failed part. An outdoor capacitor is quick, a blower motor takes longer, and a refrigerant leak takes finding first. Once we know the fault, you get a flat-rate price to approve before anything is replaced, with no overtime charge on weekends.',
      },
      {
        q: 'Should I repair or replace my Pleasant Run heat pump?',
        a: 'If the compressor and coils are sound and one component failed, repair it. If an older heat pump needs a compressor or loses refrigerant again and again, we price replacement as well so you can compare the two. Financing is available for replacements.',
      },
      {
        q: 'Why is my Pleasant Run heat pump blowing cool air?',
        a: 'Heat pump air runs cooler than a gas furnace’s, so in a dual fuel house it can feel cool once the furnace shuts off. That’s normal. If the air is cold and the outdoor unit is frozen or not running, or the auxiliary heat light is on, the heat pump has a fault.',
      },
    ],
  },
};
