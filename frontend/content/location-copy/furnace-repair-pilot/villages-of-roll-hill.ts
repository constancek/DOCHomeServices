import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const villagesOfRollHill: LocationServiceCopy = {
  localParagraph:
    'At the Villages of Roll Hill, a broken furnace goes to the leasing office before it comes to us. The neighborhood is essentially one apartment complex of townhouse rows and garden apartments, and Census figures show 86.4% of homes in the area are rented. Gas heats about half of them and electricity most of the rest, so we work on gas and electric furnaces here. When management sends us, we find what failed and price it before any work starts.',
  emergencyParagraph:
    'About two in three residents here are under 18, so a furnace that quits in winter usually leaves children in a cold apartment. The normal January low at CVG is about 23F, per NOAA. Tell the leasing office at once if a baby or someone ill lives there. Once we’re sent, most repairs happen the same day, weekends included.',
  commonIntro:
    'Homes here are 1960s townhouse rows and garden apartments, renovated from 2010 to 2012. These are the heating faults we expect in buildings like these:',
  localFaqs: [
    {
      q: 'My furnace stopped at the Villages of Roll Hill. Can I call you directly?',
      a: 'Report it to the leasing office first, in writing, and keep a copy. Management owns the furnace and picks who repairs it. In the City of Cincinnati, rentals where tenants don’t control their own heat must stay at 70F or more once it’s below 60F outside for 24 hours. We fix furnaces, not leases.',
    },
    {
      q: 'Did the 2010 to 2012 renovation put in new furnaces?',
      a: 'Public records we found don’t say which heating equipment the rebuild replaced. Open the furnace door, or ask maintenance to, and read the date on the label inside. If the furnace came in with the renovation, it has now run through more than a dozen winters, and repairs get more frequent from here.',
    },
  ],
  overrides: {
    ctaLine: 'Villages of Roll Hill furnace repair for managers and tenants',
    band1Heading: 'Common Furnace Problems in Villages of Roll Hill Apartments',
    commonSituations: [
      'One townhouse in a row stuck cold while the units beside it heat',
      'A gas furnace that lights, runs a few minutes and shuts off',
      'An electric furnace blowing lukewarm air in a garden apartment',
      'A thermostat calling for heat with nothing happening at the furnace',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Tenants can rule out the simple causes first. Set the thermostat to heat and above room temperature, replace its batteries, check your breaker and make sure the furnace door is closed tight, since a loose one keeps many furnaces off. Change the filter if your lease allows it. Warm air back means nothing needs fixing. If not, report it to the leasing office instead of hiring anyone. If you smell gas, don’t touch switches; leave and call the gas company from outside, then management. If a carbon monoxide alarm sounds, get everyone out first. When we’re sent, we test the furnace and explain the fault to you and the manager.',
      },
      {
        title: 'Repair or Replace a Villages of Roll Hill Furnace?',
        body: 'The owner decides, and the right answer depends on the furnace, not the building. Read the date on its label. A furnace from the renovation with a failed igniter, flame sensor or blower motor is normally a repair. A cracked heat exchanger can leak carbon monoxide into the apartment, so we shut that furnace off and tell management it needs replacing. A replacement goes through the City of Cincinnati Department of Buildings & Inspections for a mechanical permit. Rows built to one design wear out together, so after one failure it pays to check the matching units nearby before the next cold snap.',
      },
    ],
    whyTitle: 'How We Handle Furnace Repair for Villages of Roll Hill Managers',
    whyParagraph:
      'Management approves the repair and the tenant lives with it, so we explain the fault to both. Technicians are licensed, insured and background-checked, and each apartment gets its own flat price before work begins.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost at the Villages of Roll Hill?',
        a: 'Tenants normally don’t pay; Ohio law puts upkeep of a supplied furnace on the landlord. For managers, a dirty flame sensor is a quick fix and a failed control board or inducer motor is a larger one, so we test before quoting. Each unit gets a flat price to approve, with no overtime charges.',
      },
      {
        q: 'Should a Villages of Roll Hill furnace be repaired or replaced?',
        a: 'That is the owner’s decision. Repair a furnace that is reasonably young and lost one part. Replace one with a cracked heat exchanger, because that is a carbon monoxide risk, not just an expense. We give managers both prices on the same visit so they can plan across the rows.',
      },
      {
        q: 'Why is my Villages of Roll Hill furnace blowing cold air?',
        a: 'Check that the thermostat is on heat and not fan only, and that your breaker is on. On a gas furnace, the burners may light and drop out because of a dirty flame sensor. An electric furnace may have a failed heating element. Keep the panels on and report it to management.',
      },
    ],
  },
};
