import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const glendale: LocationServiceCopy = {
  localParagraph:
    'More than half of Glendale’s homes were built in 1939 or earlier, Census figures show, and many sit in the historic district laid out in 1851. In houses that old, an electrical inspection can find knob-and-tube or cloth-covered wiring still live behind the plaster, two-prong outlets with no ground, and panels added long after the house was finished. We separate the risky from the merely old and price nothing until you’ve seen the report.',
  emergencyParagraph:
    'In a Glendale house, some signs mean act today: a smell of hot insulation, a warm switch plate, brown scorching around an outlet, sparks, or a breaker that won’t hold after a reset. Shut that breaker off. Smoke or flame means leaving the house and phoning 911. Most Glendale calls are answered with a same-day visit, weekends included.',
  commonIntro:
    'Glendale inspections split between the village’s pre-war houses and its newer streets, but most findings come from the older half. What we see most:',
  localFaqs: [
    {
      q: 'Does electrical work on a historic Glendale house need village approval?',
      a: 'Inside the house, the historic rules don’t usually come into it. The village’s preservation commission reviews exterior changes, so for anything visible outside, like a new meter base or service mast, we check with the village first. We pull the electrical permit and arrange the inspection for the work itself.',
    },
    {
      q: 'Is knob-and-tube wiring in a Glendale house dangerous?',
      a: 'Not automatically. Original knob-and-tube that hasn’t been disturbed can still work, but it has no ground, it wasn’t made to be buried in insulation, and later splices into it are often where the trouble starts. The inspection tells you how much is still live and in what condition.',
    },
    {
      q: 'I rent in Glendale and half my outlets are two-prong. What can I ask for?',
      a: 'Put any problem in writing to your landlord. Ohio law (ORC 5321.04(A)(4)) requires landlords to keep supplied electrical fixtures in good and safe working order. If an outlet sparks, feels hot or won’t hold a plug, say so. The owner books the inspection. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Glendale’s older homes',
    band1Heading: 'Common Electrical Problems We Find in Glendale Homes',
    commonSituations: [
      'Knob-and-tube circuits still feeding upstairs bedrooms in a 19th-century house',
      'Three-prong outlets installed on two-wire circuits with no ground behind them',
      'A fuse box or early breaker panel sharing duty with a newer subpanel',
      'Attic and basement splices made outside any junction box during past renovations',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'A few problems look electrical and aren’t. One GFCI outlet in a bath, the kitchen, the garage or outside can trip and take others with it, so find it and reset it. A breaker that trips once, resets and stays on usually means too much was plugged in. If a newer Glendale house got a clean report from the buyer’s home inspector, you can likely skip us. Book an inspection if the house is pre-war and nobody knows when the wiring was last updated, if the lights flicker on several circuits, or if you’re planning a kitchen, an addition or a heat pump.',
      },
      {
        title: 'Inspection, Repair or Rewire in Glendale?',
        body: 'A 19th-century house doesn’t automatically need a full rewire. The inspection decides. Loose connections, a failing breaker or a kitchen counter without GFCI protection are spot repairs. A panel too small for an electric range, central air or an EV charger means a panel replacement. When knob-and-tube or cloth-covered wiring still runs through most of the house, we price a rewire beside the targeted repairs, and in a plaster-walled Glendale house we plan the route to cut as little as possible. The report is yours either way, and you decide who does the work.',
      },
    ],
    whyTitle: 'Why Glendale Homeowners Call Us',
    whyParagraph:
      'Glendale owners tend to want old houses kept intact and safe at the same time. Our technicians are licensed, insured, background-checked and drug-tested, and they explain each finding before you approve a flat-rate price.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Glendale?',
        a: 'You get a flat rate before we start. It’s based on the size of the house and why you need the inspection; a pre-war house going on the market takes a closer look than a newer one getting a car charger. Repairs are priced on their own and wait for your yes.',
      },
      {
        q: 'What does the inspection actually look at?',
        a: 'Everything from the fuse box or panel outward: each fuse or breaker, the ground and bonding connections, the outlets and switches we can get to, GFCI and AFCI coverage, wiring left in the open in attic and basement, and power to the smoke alarms. We also mark any knob-and-tube still carrying current.',
      },
      {
        q: 'Do I have to hire you to make the repairs?',
        a: 'No. The report is written for you, not for us. You can give it to another licensed electrician, use it in a sale, or keep it on file. If you’d rather we do the work, you get a flat-rate price for each item first.',
      },
    ],
  },
};
