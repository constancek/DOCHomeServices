import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walton: LocationServiceCopy = {
  localParagraph:
    'Most Walton homes heat with electricity, not gas. Census figures show 59.3% electric and 36.8% gas, so a good share of our calls here are electric furnaces and heat pump air handlers rather than burners. The housing comes in two groups: older homes near Main Street, about one in five built before 1960, and the subdivisions that make up over half the city and went up after 2000. A few older houses still burn oil. We find what failed and price it before any work begins.',
  emergencyParagraph:
    'A furnace that fails in Walton is most serious when a baby, an older family member or someone sick is home. NOAA puts the normal January low at CVG near 23F, cold enough to threaten pipes in an unheated house. We repair electric and gas furnaces, and most calls get same-day service, weekends included.',
  commonIntro:
    'Walton furnaces split between electric systems in post-2000 subdivisions and older gas setups in the houses near Main Street. These calls come up most:',
  localFaqs: [
    {
      q: 'Who issues the permit to replace a furnace in Walton?',
      a: 'The state lists the Boone County Building Department as the building and HVAC permit office for Walton, so a furnace replacement goes through Boone County rather than city hall. Repairs to your current furnace need no permit. When we replace one, we pull the permit before the work starts.',
    },
    {
      q: 'Why does my all-electric Walton heating bill jump in January?',
      a: 'Electric heat works hardest in the coldest weeks, so some rise is normal. A big jump in an ordinary month is not. A burned-out element, a stuck relay or backup heat running constantly can all do it. Compare your Owen Electric or Duke Energy Kentucky bill against last winter, depending on which serves your street.',
    },
  ],
  overrides: {
    ctaLine: 'Walton furnace repair for electric, gas and older homes',
    band1Heading: 'Common Furnace Problems in Walton Homes',
    commonSituations: [
      'An electric furnace in a 2000s subdivision house blowing cool air',
      'Backup heat strips that fail on the coldest night of the year',
      'An older gas furnace near Main Street that lights and drops out',
      'A blower that runs constantly while the house stays cold',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Check these before you book a visit. The thermostat should be on heat with batteries that aren’t dead. The switch at the furnace should be on, the breaker should be set, and the filter should be clean. Close the furnace door firmly, because most units stay off while it’s loose. If that restores heat, you don’t need us. Call when the breaker trips again, the air stays cool or the furnace makes a new noise. If you smell gas, leave without touching switches and call the gas company once you’re outside. Our technician tests the system, explains it, gets your price approved and runs a heating cycle after.',
      },
      {
        title: 'Repair or Replace Your Walton Furnace?',
        body: 'Decide by the furnace, not the street. A house near Main Street from the 1920s can have a recent furnace, and a subdivision home from 2005 may still have its original one. A failed element, igniter or blower motor is a repair either way. A cracked heat exchanger in a gas furnace is a carbon monoxide hazard, so we turn it off and recommend replacing it, permit handled. In all-electric homes, ask us to check whether backup heat is running more than it should, because that is the quiet failure that shows up on the bill before the house feels cold.',
      },
    ],
    whyTitle: 'Why Walton Homeowners Call Us for Heating Repair',
    whyParagraph:
      'Walton mixes electric heat in new subdivisions with gas and some oil in the old town, so we come ready for either. Technicians are licensed and background-checked, and you approve the price before work.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Walton?',
        a: 'It depends on the fault, so we test before we price. A failed relay in an electric furnace is a small repair. A cracked heat exchanger or failed control board on an older gas furnace is a larger one. You see one flat price and approve it before work starts, nights and weekends included.',
      },
      {
        q: 'Should I repair or replace the furnace in my Walton house?',
        a: 'Read the date on the furnace label, not the house. If one part failed on a furnace that has otherwise run well, repair it. A cracked heat exchanger means replacement, because carbon monoxide is the risk. We quote both, so you can compare them on the same page.',
      },
      {
        q: 'Why is my Walton furnace blowing cold air?',
        a: 'Check the thermostat is on heat, not fan, and look at the filter. Most Walton homes heat with electricity, and an electric furnace blowing cold usually has a failed element or relay. On a gas furnace, burners that light and quit usually mean a dirty flame sensor.',
      },
    ],
  },
};
