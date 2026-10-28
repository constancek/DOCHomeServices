import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountWashington: LocationServiceCopy = {
  localParagraph:
    'Mount Washington is mostly post-war housing, and furnace repair here follows that. Census figures show 60.8% of homes on gas and 35.8% on electric heat, and 40.6% of households rent, many in apartment buildings. So we work for homeowners with gas furnaces in 1950s basements and for landlords with electric furnaces in apartment units. Duke Energy Ohio supplies both the gas and the power. We work out what’s wrong and give a firm price before work starts.',
  emergencyParagraph:
    'When the heat goes out, check first on babies, older neighbors and anyone ill. NOAA normals put Cincinnati-area January lows around 23 degrees, cold enough to put pipes at risk in an empty, unheated unit. We repair furnaces across Mount Washington the same day on most calls, weekends included.',
  commonIntro:
    'Mount Washington mixes 1940s and 1950s houses with apartment buildings, so furnace calls vary. These come up most:',
  localFaqs: [
    {
      q: 'I rent in Mount Washington and my heat is out. Can you come?',
      a: 'Tell your landlord or property manager first, because the furnace is theirs and so is the repair decision. Mount Washington is in Cincinnati, where landlords who control the heat must keep units at 70 degrees once it stays under 60 outside for a day. Landlords can book us directly.',
    },
    {
      q: 'Who handles the permit for a new furnace in Mount Washington?',
      a: 'The City of Cincinnati Department of Buildings & Inspections covers Mount Washington, which has been part of the city since 1911. We apply for the permit as part of any furnace replacement, so you aren’t dealing with the city yourself, and we have it in hand before installation day.',
    },
  ],
  overrides: {
    ctaLine: 'Furnace repair for Mount Washington homes and apartments',
    band1Heading: 'Common Furnace Problems in Mount Washington Homes',
    commonSituations: [
      'A post-war gas furnace whose inducer motor hums but won’t start',
      'An apartment electric furnace that keeps tripping its breaker',
      'A rented unit with no heat and a landlord facing the city’s 70-degree rule',
      'A thermostat calling for heat while the furnace stays silent',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Start with the thermostat: heat mode, working batteries. Then the furnace switch, which looks like a light switch on or near the unit, and the breaker. Swap a dirty filter and press the access door closed until it latches, because many furnaces won’t fire with it ajar. If that fixes it, you’re done. If it doesn’t, or the furnace keeps restarting, call us. If you smell gas, leave the switches alone, don’t relight anything, and call the gas company once you’re outside. A carbon monoxide alarm means everyone out, then call. The technician finds the cause, prices it for your approval and checks the heat before leaving.',
      },
      {
        title: 'Repair or Replace Your Mount Washington Furnace?',
        body: 'The furnace decides this, not the year the building went up. A 1953 house or a 1970s apartment can have a recent furnace that deserves a repair when its igniter, pressure switch or blower capacitor goes. A cracked heat exchanger is a carbon monoxide hazard, so we won’t restart that furnace, and replacement is the answer. Landlords replacing several units get a price for each one, and we file the permits with Buildings & Inspections. A failing furnace usually shows up first on the utility bill, as longer run times in weather that hasn’t changed.',
      },
    ],
    whyTitle: 'Why Mount Washington Homeowners and Landlords Call Us',
    whyParagraph:
      'Mount Washington calls come from owners in older houses and landlords with apartments to keep warm. Both get a licensed, drug-tested technician, a clear explanation and a flat price approved before work starts.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Mount Washington?',
        a: 'We price it after diagnosis, not over the phone. A bad pressure switch on a gas furnace is a smaller job than a failed blower motor, and an electric furnace has its own parts. You approve one flat price before work begins, with no extra charge for evenings or weekends.',
      },
      {
        q: 'Should a Mount Washington landlord repair or replace an old furnace?',
        a: 'Repair when one part has failed on a furnace that’s otherwise sound. Replace when the heat exchanger is cracked or the furnace keeps failing every winter, because a tenant without heat is both a safety issue and a legal one in Cincinnati. We quote both options together.',
      },
      {
        q: 'Why is my Mount Washington furnace running but blowing cold air?',
        a: 'Check that the thermostat is on heat and the filter isn’t clogged. An overheated gas furnace shuts its burners off and keeps the fan going, which feels like cold air. A flame sensor coated in grime does the same. If a new filter doesn’t fix it, we’ll find the cause.',
      },
    ],
  },
};
