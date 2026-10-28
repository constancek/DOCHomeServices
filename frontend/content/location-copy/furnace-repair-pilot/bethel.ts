import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const bethel: LocationServiceCopy = {
  localParagraph:
    'Gas or electric is the first thing we ask on a Bethel no-heat call, because the village is split nearly in half. Census figures show 47.5% of homes on gas and 48.9% on electric heat, so gas furnaces, electric furnaces and heat pumps all fill our Bethel schedule. A little over half the homes are rented, many in small apartment buildings, and the owner generally approves the work. Our technician finds the failed part and gives you the cost before a single screw comes out.',
  emergencyParagraph:
    'Overnight furnace failures hit hardest in a Bethel house with an infant or an older relative at home. NOAA normals for CVG show about 100 nights a year at or below freezing, and a home left without heat can end up with frozen pipes. Gas or electric, Bethel repairs usually happen the day you call, weekends included.',
  commonIntro:
    'Bethel heats with gas and electricity in close to equal shares, and many homes are rentals in small buildings. These furnace problems come up most:',
  localFaqs: [
    {
      q: 'I rent in Bethel and the heat is out. Who do I call?',
      a: 'Your landlord or manager comes first, ideally by text or email so there’s a record. ORC 5321.04 requires Ohio landlords to keep heating equipment they supply safe and in working order and to provide reasonable heat. Bethel owners and managers can book us directly for the repair. We fix furnaces, not leases.',
    },
    {
      q: 'Do I need a permit to replace a furnace in Bethel?',
      a: 'For a replacement, yes. Clermont County Building Inspection handles permits inside the village, and its 2025 report shows HVAC replacement permits issued in Bethel Village. Swapping a part on your existing furnace counts as a repair and needs none. When you’re getting a new furnace, we file the permit ahead of installation day.',
    },
  ],
  overrides: {
    ctaLine: 'Bethel furnace repair for gas and electric heat',
    band1Heading: 'Common Furnace Problems in Bethel Homes',
    commonSituations: [
      'Bethel electric furnaces pushing lukewarm air through a burned element',
      'Gas burners that catch, run for a minute, and go out again',
      'A single unit in a small Bethel apartment building left cold while its neighbors stay warm',
      'A blower motor humming without the wheel ever spinning up',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Thermostat first: heat mode, new batteries. Then the furnace’s power switch, on the cabinet or the wall beside it in most Bethel homes, and the breaker. A choked filter can trip a furnace off, so replace it, and push the blower door until it clicks into place, because a loose door keeps most units idle. Warm air back means skip the visit. Ring us when electric heat stays lukewarm or gas burners keep lighting and dying. A gas smell means hands off every switch, out of the house, and a call to the gas company from the yard. We diagnose, explain, quote for your sign-off and test it after.',
      },
      {
        title: 'Repair or Replace Your Bethel Furnace?',
        body: 'The furnace’s own condition decides it. Bethel has village houses from before 1940 and subdivisions from the 1990s, and either kind can hold a young furnace or a tired one. A bad igniter, flame sensor or heating element is usually a worthwhile repair. A cracked heat exchanger is a safety issue before it’s a money issue, because carbon monoxide can get through, and we’ll tell you straight if we find one. Should the carbon monoxide alarm sound, clear the house first and call after. A new furnace needs a county permit, which we pull. A heating bill rising through steady weather often signals a system that’s struggling.',
      },
    ],
    whyTitle: 'Why Bethel Homeowners and Landlords Call Us',
    whyParagraph:
      'Homeowners and landlords in Bethel get a licensed, background-checked technician, a straight explanation of what failed and a flat-rate price to approve before work. Overtime fees don’t exist here, and if the repair isn’t right, you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Bethel?',
        a: 'A fair price comes after we know what broke. A flame sensor cleaning on a Bethel gas furnace is a short visit, while a new blower motor or heating element means parts and more labor. You approve a single flat-rate figure before anything starts, and evening or weekend calls are priced like weekdays.',
      },
      {
        q: 'Should I repair or replace my Bethel furnace?',
        a: 'Look at the furnace, not the age of the house it sits in. A sound Bethel furnace with one bad part is usually worth repairing. A cracked heat exchanger, or expensive parts failing every winter, points toward replacing it. We put both costs in writing so you can compare them at your own pace.',
      },
      {
        q: 'Why is my Bethel furnace blowing cold air?',
        a: 'First confirm the thermostat says heat, not fan, and pull the filter to see whether it’s matted. On Bethel gas furnaces, cool air usually means burners shutting off early over a coated flame sensor or a high-limit trip. On electric heat, a dead element is the common cause. We test before quoting.',
      },
    ],
  },
};
