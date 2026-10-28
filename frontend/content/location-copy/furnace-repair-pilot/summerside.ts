import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const summerside: LocationServiceCopy = {
  localParagraph:
    'Summerside splits between gas and electric heat more than most places we serve. Census figures show about 59% of homes on gas and 38% on electricity, so a call here is as likely to be an electric furnace or heat pump in a condo closet as a gas furnace in a basement. Most homes went up between the 1960s and the 1990s, and many of those furnaces have been swapped at least once. We diagnose the fault and give you the price before any work starts.',
  emergencyParagraph:
    'No heat matters most in a home with a baby, an older relative or someone who is ill. NOAA normals at CVG count about 100 nights a year at or below freezing, and an apartment without heat loses warmth fast after dark. We repair gas and electric furnaces, with most calls handled the same day, weekends too.',
  commonIntro:
    'Summerside heating is a mix of gas furnaces in houses and electric systems in condos and apartments. These come up most:',
  localFaqs: [
    {
      q: 'I rent in Summerside and my heat is out. Can I call you myself?',
      a: 'Report it to your landlord or the property office first. Ohio law, ORC 5321.04, puts the duty to keep supplied heating equipment working, and to provide reasonable heat, on the landlord. In managed complexes the office arranges repairs. We fix furnaces, not leases, and we work for owners and managers here.',
    },
    {
      q: 'My Summerside condo’s electric heat runs but the air feels lukewarm. Is it broken?',
      a: 'Not always. Electric heat, especially a heat pump, delivers air that feels cooler than a gas furnace’s, so lukewarm air on a mild day can be normal. If it runs without stopping on a freezing night and the rooms keep dropping, a heating element or the heat pump itself has likely failed.',
    },
  ],
  overrides: {
    ctaLine: 'Summerside furnace repair for houses, condos and apartments',
    band1Heading: 'Common Furnace Problems in Summerside Homes',
    commonSituations: [
      'An electric furnace in a condo closet blowing barely warm air',
      'A 1970s or 1980s house whose gas furnace won’t light on the first cold night',
      'A tripped heating breaker on an electric air handler',
      'A blower that keeps running and won’t shut off',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Start with the thermostat: it should be on heat, set above room temperature, with batteries that aren’t dead. Then check the furnace switch, which often looks like a light switch nearby, the breaker panel and the filter. In a condo closet electric system, check that breaker twice. Make sure the furnace door is seated. If one of those fixes it, you don’t need us. Should you smell gas, keep your hands off light switches, don’t relight the furnace, and call the gas company after you’re out of the unit. If a carbon monoxide alarm sounds, get everyone outside first. We test, quote the repair, then check the vents.',
      },
      {
        title: 'Repair or Replace Your Summerside Furnace?',
        body: 'Judge the furnace itself. Summerside homes are mostly from the 1960s through the 1990s, so the furnace in yours could be original or a recent swap, and the label inside the door tells you which. A new igniter, flame sensor or blower capacitor on a younger unit is a sensible repair. A gas furnace with a cracked heat exchanger is a carbon monoxide risk, and we won’t recommend patching it. If replacement is the answer, we handle the permit. On electric heat, a Duke Energy Ohio bill that jumps in an ordinary winter month often points to a failed element or a heat pump leaning on backup heat.',
      },
    ],
    whyTitle: 'Why Summerside Homeowners and Landlords Call Us',
    whyParagraph:
      'Summerside has gas furnaces in detached houses and electric systems stacked in condo buildings, and we repair both. Our technicians are background-checked and drug-tested, and if the repair isn’t right, you don’t pay for it.',
    sharedFaqs: [
      {
        q: 'What does furnace repair cost in Summerside?',
        a: 'The honest answer comes after testing. A tripped limit switch or a worn igniter is a small job, and a failed inducer motor is a bigger one. We show you a flat price before touching anything, and coming out in the evening or on a weekend doesn’t raise it.',
      },
      {
        q: 'Is it worth repairing an older Summerside furnace?',
        a: 'Often, yes, if the cabinet, burners and heat exchanger are in good shape and a single part quit. It stops making sense when the heat exchanger is cracked or several major parts are failing at once. We price a repair and a replacement next to each other so the choice is yours.',
      },
      {
        q: 'Why is my Summerside furnace running while the house stays cold?',
        a: 'Look at the filter and the thermostat setting first, and make sure supply vents aren’t closed or blocked by furniture. On a gas furnace, burners that light and then shut off point to a flame sensor or limit switch. On electric heat, one failed element can leave the air only lukewarm.',
      },
    ],
  },
};
