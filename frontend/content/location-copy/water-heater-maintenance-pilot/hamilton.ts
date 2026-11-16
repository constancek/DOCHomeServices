import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'Over half of Hamilton’s housing predates 1960, 57.7% by Census figures, and the median house went up in 1956. In those cellars we find flue pipe sagging toward the chimney, a spigot at the tank’s foot that nobody has opened in decades, and gas piping we’d like eyes on. Tenants occupy 45.7% of homes, plenty of them in doubles and fourplexes where each closet heater perches over a pan and the owner decides. Expect a fixed quote up front, and honesty if your tank doesn’t deserve the visit.',
  emergencyParagraph:
    'Tank puddling: shut the inlet valve over it, then the gas cock or breaker. A whiff of gas: walk out, hands off switches and pilot, phone the gas utility outdoors. Carbon monoxide alarm: everybody outside first. A relief valve that won’t stop spitting, or cold taps, means a repair. Usually we’re there that day, Saturdays and Sundays included.',
  commonIntro:
    'Calls for a yearly visit in Hamilton tend to start with one of these:',
  localFaqs: [
    {
      q: 'I rent half of a double in Hamilton. Who arranges the water heater service?',
      a: 'Your landlord, and put the request in writing so there’s a record. Ohio’s landlord statute, ORC 5321.04, has owners keep the appliances they provide working safely, (A)(4), and supply reasonable hot water, (A)(6). We service water heaters, not leases. Where one big heater feeds the whole building, management makes that call.',
    },
    {
      q: 'Does Duke Energy have anything to do with my water heater in Hamilton?',
      a: 'No. Inside city limits, Hamilton owns and runs the gas and electric systems itself, so a gas supply question goes to the city. The heater is ours to drain, flush and test, gas-fired or electric, and any part it needs gets a price you see first.',
    },
  ],
  overrides: {
    ctaLine: 'Annual tank flushes for older houses and doubles in Hamilton',
    band1Heading: 'Signs a Water Heater in Hamilton Is Due for Maintenance',
    commonSituations: [
      'A cellar heater in a 1950s house whose spigot nobody remembers opening',
      'Two closet tanks in a double, neither with a sticker showing service',
      'Knocking and crackling from a gas unit beside a pre-1940 foundation wall',
      'A purchase near the Great Miami with no clue when the heater was last touched',
    ],
    proseSections: [
      {
        title: 'What Water Heater Maintenance Includes in Hamilton',
        body: 'First the tank is emptied and flushed until clear water runs from the hose. Grit forms because minerals in ordinary tap water fall out as it warms, and once it packs onto the bottom the flame or elements must cook through it, hence the crackle. Next we unscrew the anode rod, sacrificial metal hung inside to rust so the steel shell doesn’t, and price a fresh one if it’s eaten away. The pressure relief valve gets lifted and its drain tube inspected. Shutoff, supply lines, the old cellar spigot and any closet pan all get looked over. Nothing new is fitted until you agree.',
      },
      {
        title: 'When Water Heater Maintenance Is Worth It, and When It Isn’t',
        body: 'Landlords with a string of doubles get the most from it: one round, every tank drained and checked. A homeowner gets value too if the tank still heats but has never been emptied, came with a house you just bought with no paperwork, or just began to crackle. Save your money if the shell itself weeps; that tank is due for replacing and no flush will rescue it. Brown hot water, or a heater plainly on its last legs, gets the same advice: put it toward the new one. Handy owners can bleed off a bucket or two from the spigot between our visits. Annually is what we recommend.',
      },
      {
        title: 'Tank and Tankless Water Heater Maintenance in Hamilton',
        body: 'A storage tank gets the drain-down and the anode inspection. A tankless unit gets descaled: we circulate a cleaning solution through its heat exchanger, then rinse it and clear the screen where cold water enters. Gas service is common in Hamilton, so burners, pilots and flues are routine for us here; electric models get their elements and thermostats metered. Tankless might come up when your tank finally retires, and that’s the end of the pitch.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hamilton Book Water Heater Maintenance With Us',
    whyParagraph:
      'Cellar tanks under 1950s houses and closet units in doubles fill most of our Hamilton schedule. Technicians are licensed, insured, background-checked and drug-tested, no overtime fees apply, and if the job isn’t right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'What does a water heater tune-up cost in Hamilton?',
        a: 'You hear one flat figure before any tools come out. It moves with storage tank or tankless, gas or electric, and how hard the heater is to reach. Hauling equipment down a steep cellar stair in an old house takes longer than walking into a garage. Parts like an anode rod carry their own price.',
      },
      {
        q: 'How often should my water heater be flushed?',
        a: 'Annually suits most households. Don’t sit on it if crackling or rumbling starts mid-year, though; that’s grit gathering on the floor of the tank, and it only thickens. Landlords find one yearly sweep across every unit simplest to keep track of.',
      },
      {
        q: 'Can I drain the water heater on my own?',
        a: 'Bleeding a bucket or two from the spigot now and then is reasonable if you’re handy. Old Hamilton cellars are where it goes wrong: a decades-old spigot can refuse to close again. Leave that, the gas burner and the relief valve test to a technician.',
      },
    ],
  },
};
