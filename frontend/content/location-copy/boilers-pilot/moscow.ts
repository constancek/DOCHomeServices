import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const moscow: LocationServiceCopy = {
  localParagraph:
    'In Moscow, a boiler is often the original heat. Census figures show most homes in the village predate 1940, and plenty still warm their rooms through cast-iron radiators. They also show 14.5% of homes heating with fuel oil, so oil burners, nozzles and filters are part of the work here, along with air in the lines and tired circulator pumps. After high water on the Ohio, a boiler in a low basement needs checking before it runs. We find the cause and agree the price with you first.',
  emergencyParagraph:
    'Around Moscow, about 100 nights a year drop to freezing or below (NOAA normals, CVG station), and an old house without heat loses it quickly. Infants, elderly family and anyone sick feel it first, and a long cold spell can put radiator pipes at risk. We get to most no-heat calls the same day, Saturdays and Sundays too.',
  commonIntro:
    'Moscow is a small village of older single homes, many on oil or electric heat. The boiler problems we see most:',
  localFaqs: [
    {
      q: 'The Ohio River flooded my Moscow basement. Can I run the boiler?',
      a: 'No. Leave it off until it has been checked. Water that reaches the burner, controls or wiring can damage safety parts you can’t see, and a boiler with failed safety controls is a carbon monoxide or fire risk. We inspect it, replace what got wet and tell you plainly if the boiler is worth saving.',
    },
    {
      q: 'Does my Moscow home boiler need a state inspection?',
      a: 'No. Under ORC 4104.04, Ohio skips state inspection for a boiler in a private house or a building of fewer than six units, as long as a steam boiler runs at 15 psi or under and a hot water boiler at 160 psi or under. Nearly every Moscow house fits, so yearly service is up to you.',
    },
    {
      q: 'I rent a house in Moscow. Who pays for the boiler repair?',
      a: 'Usually the owner. Ohio law (ORC 5321.04) requires landlords to keep the heating they provide in good, safe working order and supply reasonable heat. Let your landlord know in writing so there’s a record. We fix boilers, not leases, and we bill whoever schedules the work.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Moscow’s older river village homes',
    band1Heading: 'Common Boiler Problems in Moscow Homes',
    commonSituations: [
      'An oil-fired boiler that won’t light after sitting through the summer',
      'Cast-iron radiators in a pre-1940 house that stay cool along the top',
      'A boiler in a low basement that needs checking after the river comes up',
      'Pipes that bang when the heat first comes on in the morning',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Try three things first. A radiator cold along its top edge has trapped air, so bleed it. On a hot water boiler, read the gauge once you have bled and top the system up if the needle sits low. Then confirm the thermostat is on heat and the switch by the boiler is on. If the heat comes back, you’re set without us. Call us when the gauge keeps falling, water shows at the boiler or a radiator valve, the pipes kettle or bang, it locks out on an error code, or the flame burns yellow. A carbon monoxide alarm means everybody out of the house before you phone 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Moscow?',
        body: 'Old houses in Moscow often have a much younger boiler, so check the label on the boiler itself for its install date. On an oil boiler the burner nozzle, filter and fuel pump are routine repairs, and so are circulators and expansion tanks on any hot water system. When a section cracks or the heat exchanger leaks, or the repairs come back every heating season, we lay out replacement next to the repair. A yearly service before the first frost, about 60 to 90 minutes, covers pressure, leaks, safety controls, the burner, the flue and venting, and bleeding every radiator.',
      },
    ],
    whyTitle: 'Why Moscow Homeowners Call Us',
    whyParagraph:
      'Moscow is a small river village where most people own old houses. We send a licensed, insured, drug-tested technician, quote a flat rate up front and stand behind it: we make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How is boiler repair priced in Moscow?',
        a: 'What broke decides it, not the clock. A dirty oil burner nozzle is a small fix; a cast-iron section that leaks is a big one. We find the fault, quote one flat rate, and wait for your go-ahead before any work. Nights and weekends cost no extra in overtime.',
      },
      {
        q: 'Is my old Moscow boiler worth repairing?',
        a: 'Often, yes. A boiler with a sound vessel and one failed part, such as a pump, valve or burner component, is a repair job. When the vessel itself leaks, or the fixes have become a yearly habit, we put a replacement price beside the repair price, and financing is an option.',
      },
      {
        q: 'Why are the radiators upstairs in my Moscow house cold?',
        a: 'Water and heat reach the far radiators last, so they show problems first. Air at the top of the radiator is the usual reason; bleed it. On a hot water system, also check the pressure after bleeding. Still cold after that, and it is likely a stuck radiator valve or a circulator that has weakened.',
      },
    ],
  },
};
