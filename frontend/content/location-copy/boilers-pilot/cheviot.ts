import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cheviot: LocationServiceCopy = {
  localParagraph:
    'Cheviot’s housing is old enough that radiators are a regular part of our work there. Census figures put 44.9% of homes in the city at 1939 or earlier, and 95.7% before 1980. Most boiler calls come from those early houses and two-families, where we find air-locked radiators, worn pumps, leaking valves and controls patched over the years. We trace the fault, explain what we found, and give you a price before any part is replaced.',
  emergencyParagraph:
    'Freezing nights are routine here: NOAA normals count about 100 a year at the CVG airport. If a Cheviot boiler dies on one, the people who suffer first are infants, grandparents and anyone sick, and water in radiator piping can freeze in a long cold spell. We send someone the same day on most calls, Saturday and Sunday included.',
  commonIntro:
    'Cheviot boiler calls come mostly from pre-1940 houses and two-unit homes, plus some apartment buildings. The ones we see most:',
  localFaqs: [
    {
      q: 'My Cheviot landlord hasn’t fixed the boiler. What does Ohio law say?',
      a: 'Cincinnati’s 70F rule stops at the city line, and Cheviot sits outside it. The state rule covers you instead: under ORC 5321.04 a Cheviot landlord must keep heating they provide in good, safe working order and supply reasonable heat. Send the request by letter or email and keep a copy. We fix boilers, not leases.',
    },
    {
      q: 'Does the boiler in my Cheviot two-family need a state inspection?',
      a: 'Not for a two-family. ORC 4104.04 leaves boilers in private homes, and in buildings with under six units, out of state inspection, as long as a steam boiler runs at 15 psi or below and a hot water boiler at 160 psi or below. The bigger Cheviot apartment blocks are a different matter.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Cheviot homes and two-families',
    band1Heading: 'Common Boiler Problems in Cheviot Homes',
    commonSituations: [
      'A two-family on one boiler where the upstairs unit complains first',
      'An old cast-iron boiler that kettles and knocks as it warms up',
      'Radiators cold at the top in a house built before 1940',
      'A hot water system that keeps losing pressure through a dripping relief valve',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'A few minutes with a radiator key settles a lot of Cheviot calls. Where a radiator’s top section stays cold, open its bleeder until water dribbles out. Then, on a hot water system, refill if the gauge sits under its normal reading. Thermostat set to heat, boiler switch on: if both are right and the rooms warm, you can skip the visit. Get us out for a gauge that keeps falling, a puddle under the boiler, a burner flame gone yellow, or a lockout. Gas smell: out of the house, hands off the switches, then call Duke Energy or 911 from the street.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Cheviot?',
        body: 'Cheviot houses are mostly old; their boilers often aren’t. The install date on the boiler’s data plate is what we go by. On a healthy boiler, a worn circulator, sticking zone valve, weak igniter or waterlogged expansion tank is a parts job. Once the vessel, a section or the heat exchanger starts leaking, or the repair bills arrive every winter, we write a replacement quote and set it beside the repair quote. A 60 to 90 minute tune-up each fall means a pressure and leak check, a look at the expansion tank, flue, burner and safety limits, and bleeding. One visit keeps both floors of a two-family warm.',
      },
    ],
    whyTitle: 'Why Cheviot Homeowners and Landlords Call Us',
    whyParagraph:
      'With 45.8% of Cheviot homes rented, our calls there come from landlords and owners both. Our techs carry licenses and insurance, pass background checks and drug tests, and quote a flat price you sign off on first.',
    sharedFaqs: [
      {
        q: 'What does a boiler repair cost in Cheviot?',
        a: 'It comes down to the part. Air in the radiators or a lockout is quick; a leaking section on an old cast-iron boiler takes real time. We find the fault, give one flat-rate price, and start once you approve. Weekend visits carry no overtime fee.',
      },
      {
        q: 'Should I replace my Cheviot boiler or repair it?',
        a: 'If the boiler holds water and one part has quit, such as a pump, a valve or a control, fixing it makes sense. If the heat exchanger or vessel is leaking, or you’re paying for a repair every winter, look at a new one. You’ll get both prices from us, and we offer financing.',
      },
      {
        q: 'Why is the upstairs cold in my Cheviot two-family?',
        a: 'The upper unit sits farthest from the boiler, so it loses heat first when there’s air in the lines or the pressure drops. Bleed the upstairs radiators and top up the system. If it’s still uneven, the circulator pump or a zone valve is the likely cause.',
      },
    ],
  },
};
