import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const silverton: LocationServiceCopy = {
  localParagraph:
    'In Silverton, an electrical inspection is as likely to cover a fourplex as a house. Census figures show more than half the homes are rented and almost half sit in buildings of three or more units. The median home dates from 1959, an era of small panels and few circuits per room, and those panels now carry window units, space heaters and modern kitchens. We check each unit and the shared service, then give the owner a written report with repairs priced.',
  emergencyParagraph:
    'In an apartment, a scorched receptacle, sparks, a hum from a switch, a burning-plastic smell or a breaker that keeps dropping can’t wait. Tell the landlord and call us. Flip that breaker off if the panel is in your unit. If there is smoke or fire, leave and ring 911. We reach most Silverton calls the same day, weekends too.',
  commonIntro:
    'Silverton work splits between mid-century houses on narrow lots and small apartment buildings. What we find most:',
  localFaqs: [
    {
      q: 'I rent an apartment in Silverton and an outlet sparks. What should I do?',
      a: 'Unplug what’s in it, leave it alone, and cut the breaker if the panel is inside your apartment. Then send the landlord a written note with the date. Under ORC 5321.04 (A)(4), Ohio landlords answer for the safety of the electrical fixtures they provide. We inspect wiring, not leases, and the owner books the visit.',
    },
    {
      q: 'Does a Silverton fourplex need anything different from a house?',
      a: 'More of it. Every unit’s circuits get checked, along with hallway and laundry wiring and the meter bank. Duke Energy owns the meters and the line to the building, so we work from the meter base in. Landlords get one report covering each unit and the common areas.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Silverton houses and rentals',
    band1Heading: 'Common Electrical Problems We Find in Silverton Homes and Apartments',
    commonSituations: [
      'A 1950s fourplex where each unit runs on a small panel never meant for window air units',
      'Two-prong outlets in an older rental with adapters plugged into every one',
      'A shared laundry room circuit that trips when two dryers run',
      'A house on a narrow lot under contract, with the buyer asking for a written electrical report',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Silverton tenants can check two things before calling anyone. First the GFCI outlets, since one that trips in a bathroom or kitchen can darken receptacles elsewhere in the unit; press its reset. Then the breaker, which is fine if it tripped once and held after reset. A dead bulb or a switched outlet explains plenty of dark lamps too. Owners should book us when units still run on two-prong receptacles, power strips feed whole rooms, lights flicker in several rooms at once, or a building is about to change hands.',
      },
      {
        title: 'Inspection, Repair or Rewire in Silverton?',
        body: 'The report decides it. In a 1950s Silverton building the usual findings are loose connections, worn breakers, missing GFCI protection and panels too small for how tenants live now. Most of those are repairs. An overloaded or failing panel gets replaced. Rewiring only comes up if old cloth-covered wiring runs through much of the building, and then we price it beside spot repairs. Permits go through Village Hall, and we pull them and arrange the inspection. You keep the report and choose who does the work.',
      },
    ],
    whyTitle: 'Why Silverton Landlords and Residents Call Us',
    whyParagraph:
      'More Silverton homes are rented than owned, so our reports go unit by unit for the owner to act on. Each electrician holds a license and insurance, has passed background and drug screening, and quotes first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Silverton?',
        a: 'It’s quoted as one flat figure before we begin. A single house costs less than a building with six units and a laundry room, and a pre-sale report takes more time than checking one circuit. Weekend inspections cost the same as weekday ones, with no overtime added.',
      },
      {
        q: 'What’s included in the inspection?',
        a: 'For a building, we open every panel, test breakers, and confirm the service is grounded and bonded. In each unit we check receptacles for ground and for GFCI or AFCI protection, look at the wiring we can reach, and make sure the smoke alarms have power. Hallway and laundry circuits get the same treatment.',
      },
      {
        q: 'Is the repair work tied to the inspection?',
        a: 'No. The report is written so any licensed electrician can price from it. Should you hire us, the figures on it stand, financing is on offer, and we make it right or you don’t pay.',
      },
    ],
  },
};
