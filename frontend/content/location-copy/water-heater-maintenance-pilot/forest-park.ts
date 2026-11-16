import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestPark: LocationServiceCopy = {
  localParagraph:
    'The first homes in Forest Park opened in 1956, and the building kept going: Census figures date 58.5% of houses to 1960 through 1979. Their heaters mostly stand downstairs or in a utility room with space for our hose, so the visit is drain, anode, valve and either venting or wiring. Renters are 45.2% of households, many in apartment buildings with a closet tank on a pan for each unit, booked by the landlord. You get the price before work, and a straight no if a tank isn’t worth it.',
  emergencyParagraph:
    'A puddle at the base of the heater means repair: close the cold inlet valve on top, then the gas or breaker. Smell gas: go outside, switches and pilot untouched, ring the gas company. Carbon monoxide alarm: house empties first. A relief valve that won’t quit, or no hot water: repair. Same day on most calls, weekends included.',
  commonIntro:
    'In the houses and apartment buildings of Forest Park, a tank usually shows one of these first:',
  localFaqs: [
    {
      q: 'I rent out a house in Forest Park. Do I need to service the water heater?',
      a: 'It’s on you. ORC 5321.04, Ohio’s list of landlord duties, puts appliances you supply in good and safe working order at (A)(4), and reasonable hot water at (A)(6). The city also runs a rental registration program, so check its rules with the city. Our job is the heater; the lease is yours.',
    },
    {
      q: 'Our house in Forest Park was built in the 1960s. Is the original tank still in there?',
      a: 'Probably not, though it’s worth checking. The label on the tank shows its date, and we read it during the visit. That date, along with what comes out in the flush and how the anode looks, tells you whether to keep servicing the heater or start planning for a new one.',
    },
  ],
  overrides: {
    ctaLine: 'Annual tank service for houses and rentals in Forest Park',
    band1Heading: 'Signs a Water Heater in Forest Park Is Due for Maintenance',
    commonSituations: [
      'A heater left by a past owner in a 1960s basement, drain valve never turned',
      'Rumbling from a gas heater each time it starts to heat',
      'A closet tank in an apartment with mineral crust on the pan',
      'Bathwater cooling off before the tub is full',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Forest Park',
        body: 'The drain valve gets a hose, the tank gets emptied, and out comes the gritty sludge: minerals from the water that settle on the bottom of every tank and make the burner or elements heat through them. Our technician unthreads the anode, a sacrificial rod that wastes away so the shell doesn’t, and quotes a new one if it’s down to a stub. A quick lift on the relief valve proves it opens, and its discharge pipe should run down toward the floor. Gas: burner, pilot, flue, fitting. Electric: elements, thermostats. In an apartment closet in Forest Park we also check the pan and supply lines. Prices come before repairs.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Book it if the tank works but nobody has ever drained it, if you moved in without paperwork on the heater, if popping or rumbling has just shown up, or if you own heaters in several units. Don’t book it for a tank wet from its own shell; that heater is finished, and flushing won’t dry it. Rust in the hot water, or a tank that’s about worn out, gets the same verdict: put the visit money toward its replacement. Handy owners in Forest Park can open the valve and run off some water between yearly visits.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Forest Park',
        body: 'Tanks: drained of sediment, anode inspected. Tankless: descaled by circulating a cleaning solution through the heat exchanger, with the inlet filter screen cleaned. Gas and electric heat split close to evenly in Forest Park, so either kind of tank can be waiting in the basement, and each gets its own set of tests. If a tank is near replacement, tankless is worth a question; the choice stays yours.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Forest Park Book Water Heater Maintenance With Us',
    whyParagraph:
      'Forest Park is mostly 1960s houses and apartment closets, and we know both. Technicians are licensed, insured, background-checked and drug-tested, and a flat price is approved before anything is opened.',
    sharedFaqs: [
      {
        q: 'What does a water heater service cost in Forest Park?',
        a: 'A flat number, named before work. Heater type, fuel and reach decide it. A tank standing free in a basement is quicker than a closet heater behind a door that barely clears it. Landlords hear a price per unit up front, and any repair is quoted on its own.',
      },
      {
        q: 'How often does a tank in Forest Park need a flush?',
        a: 'Yearly, for most houses and rentals here. If the tank starts popping or rumbling in between, have it checked; that’s sediment piled on the bottom, and the burner or elements are fighting through it to heat your water.',
      },
      {
        q: 'Can I flush it myself?',
        a: 'Owners who are comfortable with small jobs can open the drain valve into a pail now and then; cut the power first on an electric tank. Tenants should tell the landlord instead. The aged valve that might not shut, the gas burner and the relief valve test are for us.',
      },
    ],
  },
};
