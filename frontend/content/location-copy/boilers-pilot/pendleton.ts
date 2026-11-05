import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pendleton: LocationServiceCopy = {
  localParagraph:
    'Pendleton is small and very old: Census figures show 80.4% of its homes were built in 1939 or earlier, and most sit in rowhouses, two-families or apartment buildings rather than detached houses. In buildings like that, one boiler often heats several units, so a cold apartment upstairs can trace back to the basement. Electric heat is also common here, so check what you have. When it is a boiler, we track the fault to its source and price it before any work.',
  emergencyParagraph:
    'On a January night near 23F (NOAA normals for the CVG station), a stopped boiler in a Pendleton building can leave several households cold at once. Babies, older neighbors and anyone who is ill are most at risk, and radiator lines in an unheated building can freeze. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Pendleton boiler work is mostly multi-unit: tenement-era buildings, rowhouses and two-families on one heating system. The common calls:',
  localFaqs: [
    {
      q: 'My Pendleton apartment has no heat. What is the landlord’s duty?',
      a: 'Pendleton is in the City of Cincinnati. Where the landlord controls the heat, the apartment must reach at least 70F once it has stayed below 60F outside for 24 hours. Report it to the landlord in writing. We fix boilers, not leases, and the building owner books us.',
    },
    {
      q: 'Do Pendleton apartment boilers need a state inspection?',
      a: 'Size decides it. Under ORC 4104.04, Ohio skips state inspection for boilers in private homes and in buildings under six units, provided steam runs no higher than 15 psi and hot water no higher than 160 psi. Bigger Pendleton apartment buildings fall outside that exemption.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Pendleton rowhouses and apartment buildings',
    band1Heading: 'Common Boiler Problems in Pendleton Homes and Apartments',
    commonSituations: [
      'A rowhouse boiler that has to be refilled every few days',
      'Third-floor apartments that stay cold because air collects at the top of the system',
      'A steam boiler in a tenement-era building that bangs as the pipes fill',
      'A building boiler that locks out and leaves every unit without heat until it is reset',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Tenants and owners can rule out the simple causes first. A radiator cold along its top usually has air in it; open the bleed screw until water appears. On a hot water boiler, check that the gauge has not dropped after bleeding, and refill if it has. The thermostat must be calling for heat and the boiler switch must be on. If the building is covered by another company’s service contract, ring them first. We come out for pressure that won’t hold, leaks at a valve, a yellow flame or a code that keeps returning. With a carbon monoxide alarm, get everyone outside before calling 911.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Pendleton?',
        body: 'In Pendleton the building will almost always be old, so the boiler is what we assess. Its label shows the install year. A failed circulator, zone valve, igniter or expansion tank is a part swap. Leaks from the boiler’s sections or vessel, or a run of repairs every heating season, are when we quote a new boiler next to the fix. For owners of multi-unit buildings, an annual 60 to 90 minute service before the cold arrives checks pressure, tank, safety controls, burner and flue, and bleeds the radiators, which makes a January breakdown less likely.',
      },
    ],
    whyTitle: 'Why Pendleton Landlords and Tenants Call Us',
    whyParagraph:
      'In Pendleton 61.1% of homes are rented, and many share a boiler. Tenants learn what to check and report; owners get a licensed, insured, background-checked technician and a flat price approved before work.',
    sharedFaqs: [
      {
        q: 'What does a Pendleton boiler repair cost?',
        a: 'The fault decides. Clearing air from a top-floor radiator is quick, while rebuilding controls on an older building boiler takes longer. We diagnose first, quote a flat rate, and work only once the owner approves. No overtime fees apply at night or on weekends.',
      },
      {
        q: 'Should a Pendleton building owner repair or replace an old boiler?',
        a: 'Repair when the vessel is sound and one part has failed, such as a pump or valve. Replace when the vessel or heat exchanger leaks, or the boiler needs a repair every winter. We give both prices together, and financing is available for the larger job.',
      },
      {
        q: 'Why are the radiators cold in some Pendleton apartments but not others?',
        a: 'Air collects at the high points, so top-floor units go cold first. Bleeding helps, but if whole apartments stay cold the system may be low on pressure, out of balance or have a zone valve stuck shut. That needs a technician in the boiler room.',
      },
    ],
  },
};
