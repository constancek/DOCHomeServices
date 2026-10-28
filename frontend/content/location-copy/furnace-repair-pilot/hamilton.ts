import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'Hamilton runs its own gas utility, so if you heat with gas, as Census figures show 61.0% of homes do, the gas company you call is the City of Hamilton, not Duke Energy. Another 35.2% heat with electricity, so electric furnaces are common here too. Most homes predate 1960, and close to half are rented, so in many cases a landlord approves the work. Our technician names the fault and the price, and nothing starts until someone says yes.',
  emergencyParagraph:
    'NOAA normals for CVG, the region’s official weather station, show about 100 nights a year at freezing or colder. A furnace failure then is hardest on a newborn, an elderly parent or a sick family member, and an unheated house can freeze its plumbing. We usually repair Hamilton furnaces, gas or electric, the day you call, weekends too.',
  commonIntro:
    'Hamilton’s housing is mostly pre-1960 single-family homes, with a lot of rentals. The furnace problems we see most:',
  localFaqs: [
    {
      q: 'Who handles furnace replacement permits in Hamilton?',
      a: 'The City of Hamilton. Its building office lists furnace replacements among the jobs that need a permit, and only a contractor registered with the city can pull one. We file it before installation starts. If a repair to your current furnace needs a permit, we tell you before we begin.',
    },
    {
      q: 'My Hamilton home is in German Village. Does that change a furnace job?',
      a: 'In German Village and Hamilton’s other historic areas, exterior work needs a Certificate of Appropriateness from the Architectural Design Review Board, and like-for-like work can get a free administrative one. Swapping a furnace indoors leaves the outside untouched. A new wall vent is a different matter, so we ask the city before cutting one.',
    },
  ],
  overrides: {
    ctaLine: 'Hamilton furnace repair for owners and landlords',
    band1Heading: 'Common Furnace Problems in Hamilton Homes',
    commonSituations: [
      'A gas furnace in a pre-1960 house that lights, then cuts out',
      'A rental furnace with a filter nobody has changed in months',
      'Heating elements burned out in an electric furnace',
      'Second-floor rooms in an older home that never get warm',
    ],
    proseSections: [
      {
        title: 'Signs Your Furnace Needs Repair, and When It Doesn’t',
        body: 'Rule out the simple causes first. The thermostat should be on heat, set above the room, with batteries that still work. Flip the furnace’s power switch back on if someone shut it off, reset a tripped breaker one time, and slide in a fresh filter. Push the blower door until it clicks, because many furnaces won’t fire with it loose. Warm air back means no visit. Tenants should go to the landlord first, since Ohio law (ORC 5321.04) puts heat on them; we fix furnaces, not leases. For a gas smell, leave switches alone, relight nothing, get outside and call the city gas utility.',
      },
      {
        title: 'Repair or Replace Your Hamilton Furnace?',
        body: 'Look at the furnace’s date, not the house’s. Plenty of 1950s Hamilton homes have a furnace only a few winters old, and a bad igniter or draft inducer in that one deserves fixing. A crack in the heat exchanger is a safety problem before it’s a money problem, because carbon monoxide can get through. When a CO alarm sounds, the whole household goes outside, then makes the call. Replacing the furnace takes a permit, which we file. Short of that, hold this winter’s city gas bill against last year’s; a jump during a normal season means the furnace is falling behind.',
      },
    ],
    whyTitle: 'Why Hamilton Homeowners and Landlords Call Us',
    whyParagraph:
      'Hamilton landlords and homeowners get a clear answer on what failed and a flat-rate price to approve first. Every technician is background-checked and drug-tested, and financing is available when a bigger repair or replacement comes up.',
    sharedFaqs: [
      {
        q: 'How much does furnace repair cost in Hamilton?',
        a: 'We price after diagnosis, since the part sets the cost. A flame sensor cleaning is brief, and a new inducer motor or circuit board means more parts and labor. You approve one flat price before anything is done. Evenings and weekends carry no overtime fees.',
      },
      {
        q: 'Should I repair or replace my Hamilton furnace?',
        a: 'Repair when one part has failed and the heat exchanger tests sound. Replace when the heat exchanger has cracked, or when each winter brings another breakdown. For landlords with several units, we price both options on each furnace so the choice is clear and nobody pays for a repair that won’t last.',
      },
      {
        q: 'Why is my Hamilton furnace blowing cold air?',
        a: 'Check that the thermostat isn’t set to fan on, and swap the filter, because a clogged one can overheat the furnace and trip a limit switch that shuts the burners off. Electric furnaces blow cool air when elements or a breaker fail. If the burners won’t light at all, the igniter or flame sensor is the usual suspect.',
      },
    ],
  },
};
