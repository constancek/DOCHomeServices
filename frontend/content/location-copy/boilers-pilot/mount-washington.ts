import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountWashington: LocationServiceCopy = {
  localParagraph:
    'Mount Washington is mostly post-war housing, so a boiler here is the exception. Census figures put just 11.4% of homes on the hill at 1939 or earlier, and most of the houses that followed went up with ductwork. Radiators show up in that older slice and in some apartment buildings. A home with floor or wall registers belongs on our furnace repair page. A home on radiators gets a technician who traces the failure and quotes it before picking up a tool.',
  emergencyParagraph:
    'NOAA normals for CVG count roughly 100 nights a year at 32F or below. Lose the boiler on one in Mount Washington and the people who suffer first are infants, elderly parents and anyone already sick. A long cold snap can also freeze the water sitting in radiator piping. Most no-heat calls get a same-day visit, Saturdays and Sundays too.',
  commonIntro:
    'In Mount Washington, boiler work is mostly in the pre-war houses and older apartment buildings. These are the calls we get:',
  localFaqs: [
    {
      q: 'How do I know if my Mount Washington home has a boiler or a furnace?',
      a: 'Check what sits in the rooms. Cast-iron radiators, or baseboard fed by hot water piping, point to a boiler. Registers in the floor or wall that push out warm air point to a furnace or heat pump, the setup in most Mount Washington houses. Mention which one when booking so the right technician shows up.',
    },
    {
      q: 'My Mount Washington apartment building has one boiler and my unit is cold. Who fixes it?',
      a: 'The building owner or manager, so report it to them in writing. Mount Washington is inside Cincinnati, where a landlord who controls the heat must keep units at 70F or above after 24 hours under 60F outside. We fix boilers, not leases, and work for whoever books us.',
    },
  ],
  overrides: {
    ctaLine: 'Boiler repair for Mount Washington radiator homes',
    band1Heading: 'Common Boiler Problems in Mount Washington Homes and Apartments',
    commonSituations: [
      'A pre-war house on radiators where the second floor never quite warms up',
      'An apartment building boiler that leaves the top units colder than the rest',
      'A hot water boiler that needs topping up every week',
      'A boiler that fires, runs a minute and shuts down on an error code',
    ],
    proseSections: [
      {
        title: 'Signs Your Boiler Needs Repair, and When It Doesn’t',
        body: 'Many cold-radiator calls here need no technician. Open the bleeder on any radiator whose upper half stays cool and let it hiss until it spits water. On a hot water system, refill if the gauge reads under normal after that. Set the thermostat to heat and confirm the boiler switch is on. Renters: if the building’s boiler has a service contract with another firm, that firm comes first. Warm again means no visit. Call us for pressure that won’t hold, drips at a valve, a yellow flame or a floor that stays cold. Gas smell or a carbon monoxide alarm: everyone out, then call from outside.',
      },
      {
        title: 'Boiler Maintenance or Replacement in Mount Washington?',
        body: 'On a Mount Washington boiler, the nameplate’s install year tells you more than the deed does. When a circulator, zone valve, igniter or expansion tank gives out on an otherwise healthy boiler, we fix that part. Leaks from the vessel or heat exchanger, or a no-heat call every January, are when you also get a replacement figure to compare. Plan the annual tune-up for early fall; it takes 60 to 90 minutes and covers pressure, leaks, the expansion tank, safety limits, burner and flue, plus bleeding every radiator. If your home has ducts and a furnace instead, as most here do, book furnace maintenance.',
      },
    ],
    whyTitle: 'Why Mount Washington Residents Call Us',
    whyParagraph:
      'Most Mount Washington homes heat with ducts, and if your call is really a furnace job we say so on the phone. Our technicians are licensed, insured, background-checked and drug-tested, and nothing starts until you approve the flat rate.',
    sharedFaqs: [
      {
        q: 'How is boiler repair priced in Mount Washington?',
        a: 'By the job, not the hour. Once the technician knows the cause, you get one flat-rate figure for that repair, with no overtime fee on a weekend call. Air in the system is cheap to clear; a failed heat exchanger is not. You approve before work starts.',
      },
      {
        q: 'When should a Mount Washington boiler be replaced instead of fixed?',
        a: 'When the part that failed is the boiler itself. A cracked section or leaking vessel can’t be patched for long, and a boiler that needs work each winter adds up. Pumps, valves and controls are swaps. We’ll show both prices, and financing can spread the cost.',
      },
      {
        q: 'Why do some radiators stay cold in my Mount Washington home?',
        a: 'Air rises to the top of a radiator and blocks hot water from filling it, so bleeding is the first step. Low boiler pressure starves the farthest radiators next. If both check out, the problem is usually a closed radiator valve, a failed zone valve or a weak pump.',
      },
    ],
  },
};
