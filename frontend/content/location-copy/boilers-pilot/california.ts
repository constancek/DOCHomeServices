import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const california: LocationServiceCopy = {
  localParagraph:
    'Boilers are the exception in California, not the rule. Census figures put the median home here at 1968 and only 12.2% at 1939 or earlier, so most houses heat with a gas furnace and ducts. The boilers we do see are mostly in the older houses. If you have radiators or baseboard heat, we find the fault and quote it before work starts. Homes with floor or wall vents fed by ducts belong on our furnace repair page instead.',
  emergencyParagraph:
    'NOAA normals put about 100 nights a year at or below 32F around Cincinnati. When a boiler gives out on one of those nights, a baby, an elderly parent or a sick family member feels it first, and radiator lines can be at risk if the cold lasts. Most California calls are seen the same day, weekends too.',
  commonIntro:
    'California is almost all owner-occupied single houses, so a boiler call here is about one house and one boiler. The usual problems:',
  localFaqs: [
    {
      q: 'River water got into my California basement. Can I run the boiler?',
      a: 'No. The National Weather Service notes basement flooding in California when the Ohio River reaches about 56.5 feet. Any boiler, burner or control that sat in floodwater should stay off until a technician has checked it. Call us once the water is out and the power is safe.',
    },
    {
      q: 'Is my California boiler subject to state inspection?',
      a: 'No. Ohio’s ORC 4104.04 keeps single homes and buildings with fewer than six units out of state boiler inspection, as long as steam pressure is 15 psi or under and hot water 160 psi or under. California is a neighborhood of single houses, so annual service is your choice, not a legal duty.',
    },
    {
      q: 'I rent a house in California and the heat is out. What does the landlord owe?',
      a: 'As a city neighborhood, California falls under Cincinnati’s rental heat rule: when the landlord controls heat, indoor temperature has to be 70F or higher once it has been under 60F outside for 24 hours. Write to the landlord, who arranges the repair. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for California homes',
    band1Heading: 'Common Boiler Problems in California Homes',
    commonSituations: [
      'A boiler that sat in basement floodwater after a high Ohio River and now won’t light',
      'An older house where the radiators farthest from the boiler barely warm up',
      'A boiler that locks out on an ignition fault the first cold night of fall',
      'Hot water baseboard that ticks and gurgles when the heat comes on',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Start with two checks. First, bleed: with a radiator key, open the small valve at the top corner of a radiator that is cool up high, and shut it once water dribbles out. Second, on a hot water boiler, see whether the gauge dropped after bleeding and refill to the normal mark. Make sure the thermostat wants heat and the boiler isn’t switched off. Warm again means you don’t need us. We do need to see a boiler that loses pressure over and over, leaks, bangs, burns a yellow flame or flashes an error. Gas odor means leave and call the gas company from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in California?',
        body: 'Read the boiler’s nameplate for the year it was installed before weighing repair against replacement. Worn circulators, sticking zone valves, failed igniters and tired expansion tanks are ordinary repairs. Flooding changes things: a boiler that stood in river water may need new controls and a new burner even if its vessel survived. We put a replacement quote beside the repair when the vessel or heat exchanger leaks, or when it fails every winter. Book an annual service before the cold arrives; in 60 to 90 minutes we test safety controls, pressure and the expansion tank, inspect the burner and flue, hunt for leaks and bleed the system.',
      },
    ],
    whyTitle: 'Why California Homeowners Call Us',
    whyParagraph:
      'Nearly nine in ten California homes are lived in by their owners, near a river that sometimes reaches the basement. Our technicians are licensed, insured, background-checked and drug-tested, and you approve the price first.',
    sharedFaqs: [
      {
        q: 'How much does boiler repair cost in California?',
        a: 'We price by the problem. A stuck zone valve or air in the lines is a modest repair; flood-damaged controls or a leaking boiler body cost more. You get a flat-rate quote after diagnosis, approve it, and then we start. No overtime fees apply on evenings or weekends.',
      },
      {
        q: 'Should I repair or replace my California boiler?',
        a: 'Repair, as long as the boiler body holds water and only one part has quit. When the heat exchanger leaks, breakdowns come every winter, or a flood ruined the controls and burner together, we quote a new boiler next to the fix so you can weigh them. Financing is available.',
      },
      {
        q: 'Why are some radiators cold in my California house?',
        a: 'Most often it is air, which collects at the top of the radiator; bleeding fixes it. If several are cool, low pressure is likely, so top up a hot water system. A radiator still cold after that has a stuck valve or a weak circulator pump.',
      },
    ],
  },
};
