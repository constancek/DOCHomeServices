import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bondHill: LocationServiceCopy = {
  localParagraph:
    'Bond Hill’s housing is mostly prewar and wartime, and a good share of it is doubles and small apartment buildings. Census figures date 44.5% of homes to 1939 or earlier, and gas heats 70.7%, so the usual setup is a basement furnace with a cooling coil on top, with ducts that were laid out for the furnace. On Bella Vista Street, a local historic district, exterior changes may need city review, so we check first. Every repair is priced before it starts.',
  emergencyParagraph:
    'Top-floor rooms in Bond Hill doubles and small apartment buildings turn stuffy once the cooling stops. The National Weather Service logs roughly 21 days a year at 90 degrees, and older residents living alone feel it soonest. We fix gas-furnace coil setups, heat pumps and electric air handlers, getting to most emergencies on the day of the call, weekends too.',
  commonIntro:
    'Bond Hill mixes prewar single-family houses with doubles, small apartment buildings and a band of homes built since 2000. These cooling faults turn up most:',
  localFaqs: [
    {
      q: 'Does a Bella Vista Street home need approval for AC work?',
      a: 'Not usually for a repair, since fixing the unit you have changes nothing outside. Bella Vista Street became a local historic district in 2019, and exterior changes there may need city review. Which outdoor work the city looks at isn’t spelled out, so before new equipment goes in or a condenser moves, we ask the city first.',
    },
    {
      q: 'I rent in Bond Hill. Who arranges the cooling repair?',
      a: 'Normally the owner, since the equipment belongs to them. Report the fault to your landlord in writing and keep a copy. In a double, check that the thermostat on your wall controls your side before you report it. Once the owner books us, you hear what broke and they approve the price.',
    },
  ],
  overrides: {
    ctaLine: 'Bond Hill AC repair along Reading Road and beyond',
    band1Heading: 'Common AC Problems in Bond Hill Homes',
    commonSituations: [
      'A 1940s duct system starving the second floor of a two-family house',
      'A basement coil above a gas furnace freezing after weeks behind a dirty filter',
      'An electric air handler in a small apartment building leaking through the ceiling',
      'A heat pump in a post-2000 Bond Hill home short-cycling on mild days',
    ],
    proseSections: [
      {
        title: 'Signs Your AC Needs Repair, and When It Doesn’t',
        body: 'Two minutes of checking may spare a visit. Put the thermostat on cool, below the current room reading, and slide a fresh filter into the return grille. A tripped breaker gets one reset. If chilled air follows, you have your answer and no need of us. In a Bond Hill double, confirm that thermostat controls your side. Bring in a technician if a puddle forms beside the furnace or the condenser drones while its fan stays put. A breaker that keeps tripping says the same. We trace the cause, show you the worn part and agree a flat price, then read the supply temperature at a register.',
      },
      {
        title: 'Repair or Replace Your Bond Hill AC?',
        body: 'Age settles most of it. Equipment under roughly a dozen years old that lost one part, say a contactor, earns the repair. A seized compressor in an older condenser rarely does, nor does an R-22 system, since the EPA says no new R-22 has been produced or imported nationally since 2020. In a 1940s house the duct sizes matter as much as the equipment, so we measure airflow before suggesting a size. We also confirm which permits a replacement needs at your address. Until then, grime on the outdoor fins lengthens every run, and the Duke Energy Ohio meter keeps counting.',
      },
    ],
    whyTitle: 'Why Bond Hill Homeowners Call Us',
    whyParagraph:
      'Bond Hill calls come from owners of prewar houses and from tenants in doubles or four-unit buildings. Our licensed technicians pass background checks, explain the problem to whoever answers the door and set one flat price before any work.',
    sharedFaqs: [
      {
        q: 'How much does a Bond Hill AC repair run?',
        a: 'We diagnose before we name a figure. A tripped float switch on a closet air handler and a leaking coil in a 1940s house sit at opposite ends of the scale. The technician shows you what failed, quotes one flat rate and waits for your yes. Weekend visits cost no extra.',
      },
      {
        q: 'Is my older Bond Hill AC worth fixing?',
        a: 'Usually, if it’s younger than about 12 years and only one part has gone. Past that age, a dead compressor or a leaking coil favors new equipment. In most Bond Hill houses a new condenser and coil can work with the existing gas furnace, which we look over on the same visit.',
      },
      {
        q: 'Why is my Bond Hill AC blowing warm air?',
        a: 'Reset the breaker once and change the filter first. A silent outdoor unit usually points to a dead capacitor or a burned contactor, while one that runs with warm vents suggests low refrigerant. In the homes here with electric heat, a heat pump can get stuck delivering heat in July, which we test for.',
      },
    ],
  },
};
