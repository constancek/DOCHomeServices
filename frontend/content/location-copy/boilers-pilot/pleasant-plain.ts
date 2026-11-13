import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pleasantPlain: LocationServiceCopy = {
  localParagraph:
    'Pleasant Plain has some of the oldest houses we work on: Census figures put 76.1% of the village’s homes at 1939 or earlier, and the median house dates to 1938. Houses of that age were often built around radiators, and plenty still heat that way. Piped gas reaches only 3.0% of homes here, so a village boiler is more likely to burn fuel oil, which adds nozzles, oil filters and burner ignition to the usual air and pressure faults. We track down the cause and quote it before touching anything.',
  emergencyParagraph:
    'A boiler that stops in Pleasant Plain on a January night, when lows run around 23F at the National Weather Service’s CVG station, puts babies, older relatives and anyone ill at risk first. A long cold snap can also freeze radiator piping in an unheated room. We reach most no-heat calls the same day, weekends included.',
  commonIntro:
    'Pleasant Plain boiler calls nearly all come from pre-war single homes, many of them heated with oil. What we find most often:',
  localFaqs: [
    {
      q: 'Does my Pleasant Plain boiler need a state inspection?',
      a: 'No. Under ORC 4104.04, Ohio exempts boilers in private homes and in buildings under six units, as long as steam systems run at 15 psi or less and hot water systems at 160 psi or less. Every house in the village falls inside that, so yearly service is your decision, not the state’s.',
    },
    {
      q: 'I rent a house in Pleasant Plain and the boiler is out. What should I do?',
      a: 'Tell your landlord in writing first. Ohio law (ORC 5321.04) requires landlords to keep the heating equipment they supply in good and safe working order, and about a third of homes in the village are rented. We fix boilers, not leases, and bill whoever books the visit.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Pleasant Plain’s pre-war houses',
    band1Heading: 'Common Boiler Problems in Pleasant Plain Homes',
    commonSituations: [
      'An oil-fired boiler that locks out and won’t restart after one press of the burner reset button',
      'Second-floor radiators in an old farmhouse that stay cool while the downstairs rooms are warm',
      'A hot water boiler that loses pressure every few days from a slow drip at a radiator valve',
      'Steam pipes that bang when the boiler fires on the first frosty morning of fall',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'In Pleasant Plain, a few minutes in the basement can settle it. A radiator cool on top but warm below has air inside; a radiator key lets it out. On hot water heat, check the dial after and refill if it dropped. Turn the thermostat to heat, flip the boiler switch on, and on an oil boiler see that the tank isn’t empty. Warm house again means no visit. We’re needed for pressure that won’t stay up, a puddle by the boiler or a valve, banging or kettling, a lockout code, or a zone that never warms. If the carbon monoxide alarm sounds, get everyone outside before calling anyone.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Pleasant Plain?',
        body: 'The install date on the boiler’s plate matters, the farmhouse’s age doesn’t; plenty of old houses out here have a younger boiler. Circulators, zone valves, igniters, expansion tanks and oil burner parts are repairs, nothing more. When a section or the heat exchanger starts leaking, or the boiler wants a part every winter, we write up both prices side by side. The yearly visit runs about 60 to 90 minutes in early fall: pressure, expansion tank, leaks, safety controls, burner and venting, and bleeding the radiators. Oil boilers gain the most from it, since a dirty nozzle only gets worse as winter goes on.',
      },
    ],
    whyTitle: 'Why Pleasant Plain Homeowners Call Us',
    whyParagraph:
      'Most Pleasant Plain homes are owner-occupied, and nearly all of them went up before 1960. Our technicians are licensed, insured, background-checked and drug-tested, and you approve a flat-rate price before any work begins.',
    sharedFaqs: [
      {
        q: 'How much does boiler repair cost in Pleasant Plain?',
        a: 'It depends on what failed. Bleeding trapped air or cleaning an oil burner nozzle is short work; a cracked cast-iron section is a much bigger job. We diagnose first, then give you one flat rate for the repair. Nothing is done until you say yes, and there are no overtime fees.',
      },
      {
        q: 'Should I repair or replace my Pleasant Plain boiler?',
        a: 'Repair it if the vessel is sound. A pump, a valve, an igniter or a burner part is no reason to buy a new boiler. If the vessel or a section leaks, or the boiler needs work every winter, we quote both options side by side, and financing is available.',
      },
      {
        q: 'Why are some radiators cold in my Pleasant Plain house?',
        a: 'Air is the usual cause, and radiators farthest from the boiler lose heat first. Bleed them, check that the pressure is back up, and give it an hour. On steam, a radiator tilted back toward its valve can hold water. If the cold ones stay cold, we look at the valves, the pump or a zone valve.',
      },
    ],
  },
};
