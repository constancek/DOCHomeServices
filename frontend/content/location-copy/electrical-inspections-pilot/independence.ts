import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const independence: LocationServiceCopy = {
  localParagraph:
    'Independence is one of the newest cities we serve, and its wiring mostly shows it. Census figures put the median home at 1999, with 49.0% built in 2000 or later. Wiring that young is usually in good shape, so people here book an inspection for a reason: a sale, a purchase, a finished basement, a pool, an EV charger. The older farmhouses near Madison Pike are the exception and get a closer look. We inspect the system, write it up and price any fix up front.',
  emergencyParagraph:
    'Even in a new Independence house, some things can’t wait for an appointment: a burning smell, a hot or melted outlet, a switch that buzzes, sparks, or a breaker that trips right after you reset it. Turn that breaker off. If there is smoke or fire, get everyone out and call 911. Most calls get a same-day visit, weekends included.',
  commonIntro:
    'Most Independence homes are subdivision houses from the last 25 years, with some much older ones on the old roads. Here is what we find most:',
  localFaqs: [
    {
      q: 'Is an electrical inspection worth it on a newer Independence house?',
      a: 'Often not, if the buyer’s home inspector found nothing and you aren’t adding anything big. It makes sense before a finished basement, a hot tub, a pool or an EV charger, or when something a past owner added looks homemade. We will tell you honestly if a visit isn’t needed.',
    },
    {
      q: 'Can my Independence panel handle an EV charger and a hot tub?',
      a: 'Many 2000s houses have the room; some don’t once electric heat and a range are counted. We do a load calculation on your actual panel, then tell you if both fit, if one needs load management, or if the service needs upgrading. You see the price for each option.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Independence houses, new and old',
    band1Heading: 'Common Electrical Problems We Find in Independence Homes',
    commonSituations: [
      'A finished basement wired by a past owner with no permit and no AFCI protection',
      'A 200-amp panel already near its limit before an EV charger is added',
      'Pool or hot tub wiring missing its bonding or GFCI protection',
      'An older farmhouse off Madison Pike with ungrounded outlets and a mix of wiring',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Newer homes have lots of GFCI outlets, and a single trip can shut down the bathroom, garage or patio. Reset them before calling anyone. If a breaker trips once and holds after reset, it was likely an overload. A dead fixture is often just a bulb. You need us when breakers keep tripping, lights flicker on several circuits, an outlet runs warm, a basement or garage was wired by someone unlicensed, or you are adding a charger, pool or hot tub. In older homes off the main pikes, also call if you find two-prong outlets throughout.',
      },
      {
        title: 'Inspection, Repair or Rewire in Independence?',
        body: 'In a house built after 2000, rewiring is almost never on the table. Typical findings are repairs: a loose connection, a breaker that failed, a GFCI that no longer trips, a homemade basement circuit. If a new charger or pool would overload the panel, we price a larger panel or service and any lighter option side by side. The older farmhouses can be a different story, and there we price spot repairs against rewiring. The report belongs to you, and you choose who does the work. If a permit is needed, we pull the permit and arrange the inspection.',
      },
    ],
    whyTitle: 'Why Independence Homeowners Call Us',
    whyParagraph:
      'Independence owners usually call before a project, not after a failure, and want to know exactly what their panel can safely take. Our electricians are licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'How much does an Independence electrical inspection cost?',
        a: 'House size and purpose decide it. Checking capacity for a charger in a newer home is a shorter job than a full pre-purchase look at an old farmhouse. You get a flat-rate price before we start, and we only quote repairs if you ask.',
      },
      {
        q: 'What does the inspection include?',
        a: 'The panel and all breakers, service grounding and bonding, outlets and switches, GFCI and AFCI protection, visible wiring in the basement, garage and attic, and power to the smoke alarms. We also check any pool or hot tub bonding we can reach. It all goes into one written report.',
      },
      {
        q: 'Do I have to let you do the repairs?',
        a: 'No. The written report is yours, and any licensed electrician can use it. If you hire us, each repair has a flat price agreed in advance, there are no overtime fees, and we make it right or you don’t pay.',
      },
    ],
  },
};
