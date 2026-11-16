import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountHealthy: LocationServiceCopy = {
  localParagraph:
    'Half of Mount Healthy’s homes are rented, so landlords book many of our inspections, usually between tenants or ahead of a sale. Census figures put the median home at 1956, and close to three in ten predate 1940. In those pre-war houses we often meet ungrounded receptacles and circuits added one at a time over decades. The 1950s homes more often have small panels straining under central air and modern kitchens. Every finding goes on a written report with its own price.',
  emergencyParagraph:
    'Some calls shouldn’t be scheduled for next week: blackened or warm cover plates, crackling in a wall, a flash at the plug, a breaker that drops again right after reset, or lights that sag when the fridge starts. Kill that circuit. With smoke or fire, get out and ring 911. Most Mount Healthy calls get same-day help, weekends included.',
  commonIntro:
    'Mount Healthy calls come from pre-war houses, 1950s homes and apartment buildings. What we find most:',
  localFaqs: [
    {
      q: 'I’m a Mount Healthy landlord. When should I book an inspection?',
      a: 'The empty week between tenants is easiest, along with buying or selling a rental. ORC 5321.04 (A)(4) makes Ohio landlords responsible for keeping the electrical fixtures they supply safe and working, and a dated report shows what you’ve checked. We inspect wiring, not leases.',
    },
    {
      q: 'Does Mount Healthy have its own building department?',
      a: 'It does. The city’s Building & Zoning Department enforces the codes Mount Healthy has adopted. That department’s sign-off is not the same thing as our inspection, which looks over the whole property for you. When a repair calls for a permit, we take care of it and set up the official inspection.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Mount Healthy homes and rentals',
    band1Heading: 'Common Electrical Problems We Find in Mount Healthy Homes and Apartments',
    commonSituations: [
      'A pre-1940 house with two-prong outlets upstairs and a newer panel in the basement',
      'A 1950s home where the panel has no room for the circuit a heat pump needs',
      'An apartment with a space heater and a microwave sharing one overloaded circuit',
      'A rental where a past tenant ran extension cords through doorways as permanent wiring',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before calling, tenants and owners can rule out the easy causes. One tripped GFCI near a sink or in the basement can knock out outlets on the other side of the house; its reset button brings them back. A breaker that trips a single time and then holds is normal. Change the bulb, try the wall switch. Tenants report anything more to the landlord in writing. Owners should book us for houses with two-prong outlets in most rooms, a fuse panel, cords standing in for wiring, flickering in several rooms, or a sale coming.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mount Healthy?',
        body: 'The build date doesn’t settle it. Some Mount Healthy houses from the 1920s were rewired long ago, and some from the 1950s still have every original circuit. Loose terminals, a bad breaker and outlets with no GFCI near water get repaired. A panel that’s undersized or worn out gets swapped. If old cloth-insulated or knob-and-tube wiring still feeds much of the house, we quote a rewire against targeted repairs. In multi-unit buildings, the report is split by unit so owners can plan the work a unit at a time.',
      },
    ],
    whyTitle: 'Why Mount Healthy Landlords and Homeowners Call Us',
    whyParagraph:
      'With half the city renting, we’re used to arranging keys, tenant notice and building managers in Mount Healthy. Your electrician is licensed, insured, background-checked and drug-tested, and the price is agreed before work.',
    sharedFaqs: [
      {
        q: 'What will an electrical inspection in Mount Healthy cost me?',
        a: 'One flat price, given up front. The property’s size and the report’s purpose move it: one apartment checked before a new tenant is a smaller job than a whole building being sold. Saturday and Sunday visits cost what weekdays do.',
      },
      {
        q: 'What does your inspection include?',
        a: 'Panels, breakers or fuses, and the service grounding first. Then receptacles, tested for ground and for GFCI or AFCI protection, any wiring we can see, and power to every smoke alarm. In apartment buildings, the common hallways and laundry too. If a buyer, lender or insurer asks for a written report, you’ll have one.',
      },
      {
        q: 'Once you have the report, are you locked in?',
        a: 'No. The report is yours, including to hand to an electrician you already use. If you want us for the work, each repair is already priced, financing is available, and we make it right or you don’t pay.',
      },
    ],
  },
};
