import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'Northside boiler work is mostly in owner-occupied houses from before the Second World War. Census figures put 57.3% of homes here at 1939 or earlier, and gas heats about 69% of them, so a gas-fired boiler feeding radiators is common on the older streets off Hamilton Avenue. Upper Hamilton is newer and runs more forced air. What we fix most is lost pressure, air-bound radiators and worn pumps. Every job starts with a diagnosis and a quoted price you approve.',
  emergencyParagraph:
    'A Northside house without heat on a 23F January night (NOAA normal low, CVG) is risky for a baby, an elderly parent or someone recovering from illness. Pipes running to radiators on outside walls can freeze if the outage lasts. Most of these calls get a same-day visit, Saturday and Sunday included.',
  commonIntro:
    'Northside boiler calls mostly come from single houses and two-families built before 1940. What we see:',
  localFaqs: [
    {
      q: 'My Northside basement flooded. Can I turn the boiler back on?',
      a: 'Not if water reached the burner, controls or wiring. Leave it off and have it checked before firing it again; flooded gas controls are a fire and carbon monoxide risk. Homes around Kirby and Virginia Avenues took water in June 2019, so this does come up here.',
    },
    {
      q: 'Does my Northside boiler need a state inspection?',
      a: 'Not in a private home or a building under six units. Under ORC 4104.04, Ohio exempts those boilers from state inspection as long as steam runs at 15 psi or less and hot water at 160 psi or less. Yearly service is still worth booking yourself.',
    },
    {
      q: 'I rent a Northside two-family and the heat is out. What is the rule?',
      a: 'Northside is inside Cincinnati. If the landlord runs the heat, the city requires 70F indoors after the outside air has stayed under 60F for 24 hours. Tell the landlord in writing and let them book the repair. We fix boilers, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Northside houses',
    band1Heading: 'Common Boiler Problems in Northside Homes',
    commonSituations: [
      'A 1920s gas boiler that runs but leaves the upstairs bedrooms cold',
      'A boiler that sat in basement floodwater and now will not light',
      'A zone valve stuck shut so the second floor of a two-family gets no heat',
      'Banging pipes when an old steam system starts up on a cold morning',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'A radiator key settles many Northside calls. Let the air out of any radiator whose upper edge stays cool. Look at the thermostat to see it’s asking for heat, and check the boiler’s power switch. On hot water heat, read the gauge after bleeding and add water if the needle sits low. If rooms warm up, skip the call. Have us out if the gauge falls a second time, a valve or the boiler drips, an error code shuts it down, or one zone never warms. If you smell gas, get out first, leave switches and pilots alone, and call Duke Energy or 911 from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Northside?',
        body: 'The boiler’s own label gives its install year, and that counts for more than a 1910 date on the deed. When a pump, igniter or expansion tank fails on a newer boiler in an old Northside house, we fix it. We quote a replacement as well when a section or the heat exchanger leaks, flood water got into it, or it needs a repair every winter. Before October, a yearly service of about 60 to 90 minutes checks the pressure and expansion tank, tests safety controls, goes over the burner and venting, and bleeds each radiator.',
      },
    ],
    whyTitle: 'Why Northside Homeowners Call Us',
    whyParagraph:
      'Most Northside houses are owner-occupied and older than their boilers. Each visit is a licensed, insured technician who has passed a background check and drug test, and nothing is done until you approve the flat price.',
    sharedFaqs: [
      {
        q: 'What will a Northside boiler repair cost?',
        a: 'That depends on what failed. Topping up pressure or replacing a thermocouple is quick; a leaking cast-iron section is heavy work. We find the cause, quote one flat price and start only once you approve it, with no overtime fees on weekends.',
      },
      {
        q: 'Should I fix or replace my Northside boiler?',
        a: 'Fix it when a single part has worn out and the vessel is dry. Pumps, valves and igniters are parts. A leaking heat exchanger, flood damage to the controls, or repairs every heating season are the cases where we price a new boiler next to the fix.',
      },
      {
        q: 'Why are my upstairs radiators cold in Northside?',
        a: 'Air collects at the high points of the system, so top-floor radiators go cold first. Bleed them and check the pressure on a hot water boiler. If they stay cold after that, the problem is likely a stuck valve, a zone valve or a weak circulator.',
      },
    ],
  },
};
