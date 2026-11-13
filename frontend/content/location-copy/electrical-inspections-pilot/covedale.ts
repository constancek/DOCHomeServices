import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const covedale: LocationServiceCopy = {
  localParagraph:
    'Covedale is really two places when it comes to wiring. Census figures put the median home on the Cincinnati side at 1938, with most houses there built before 1940, so ungrounded outlets and old fuse panels are common finds. The Green Township side came later: its median home dates to 1959, and a third went up in the 1950s, when panels were sized for far smaller loads than a house carries now. Either way, we test the system, write it up and quote any repair before work begins.',
  emergencyParagraph:
    'Don’t wait on a scheduled inspection if you notice a burning odor, a scorched or buzzing outlet, sparks at a switch, or a breaker that trips the instant you flip it back. Turn it off and keep it off. Smoke or fire: everyone outside, then 911. In Covedale, most urgent calls are answered the same day, weekends too.',
  commonIntro:
    'What we find in Covedale depends on which side of the city line the house is on. The most common:',
  localFaqs: [
    {
      q: 'Which office handles electrical permits in Covedale?',
      a: 'It depends on your address. Inside Cincinnati, the Department of Buildings & Inspections issues the permit and sends its inspector. On the Green Township side, electrical permits and inspections go through Inspection Bureau, Inc. We find out which one applies, pull the permit and arrange the sign-off.',
    },
    {
      q: 'Is a 1950s house in Covedale worth inspecting before I buy?',
      a: 'Usually, yes, if nobody has touched the electrical in decades. Those panels were sized for a different kind of house, and a buyer adding central air, a heat pump or an EV charger often runs out of room. A report before you close shows what to expect. Ohio doesn’t require one to sell.',
    },
    {
      q: 'I rent out a house on the city side of Covedale. What must I keep up?',
      a: 'Ohio puts it on you: ORC 5321.04 (A)(4) covers the electrical fixtures a landlord supplies, which must stay in good and safe working order. Get tenant complaints in writing, then schedule the visit yourself. We inspect wiring, not leases, and hand you a report to act on.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections on both sides of Covedale',
    band1Heading: 'Common Electrical Problems We Find in Covedale Homes',
    commonSituations: [
      'A 1950s ranch with a panel that can’t fit circuits for a new kitchen',
      'Ungrounded outlets in a 1930s house on the city side near Glenway Avenue',
      'A basement or garage with no GFCI protection anywhere',
      'A buyer’s home inspector flagging an old fuse box a week before closing',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some calls end before they start. Find the GFCI outlets in the bath, kitchen, garage and outside, and press reset; one tripped GFCI can shut off others. If a single breaker tripped and now holds, that was probably a one-off. Swap a dead bulb before blaming the wiring. And if you bought a newer house and the home inspector found nothing, you likely don’t need us. Do book if you have fuses, two-prong outlets throughout, flicker across several circuits, or a big appliance coming to an older house. We check, explain, and leave a written report.',
      },
      {
        title: 'Inspection, Repair or Rewire in Covedale?',
        body: 'The findings decide. Loose terminations, a worn-out breaker and a bathroom without GFCI protection are repairs. A 1950s panel without space or capacity for a heat pump or car charger is a panel replacement. In the older houses on the city side, if cloth or knob-and-tube wiring still runs most rooms, we price a rewire beside spot repairs and you weigh them. The permit goes to Cincinnati’s Department of Buildings & Inspections or to IBI, depending on the address. You don’t have to hire us for any of it.',
      },
    ],
    whyTitle: 'Why Covedale Homeowners Call Us',
    whyParagraph:
      'Nine in ten homes on the Green Township side are owner-occupied, and many owners are getting ready to sell, buy or add on. Our electricians are licensed, insured, background-checked and drug-tested.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Covedale?',
        a: 'You’ll know the number before we lift a cover plate. A ranch on the township side checked ahead of a hot tub prices differently from a two-family near Glenway being sold. Overtime fees don’t exist with us, and any repair afterward gets its own flat figure the same way.',
      },
      {
        q: 'What does the inspection include?',
        a: 'A look inside the panel at the breakers or fuses, a check of grounding and bonding, testing of outlets for ground and for GFCI and AFCI protection, a look at any exposed wiring in the basement, garage or attic, and confirming the smoke alarms are getting power. All of it goes into your written report.',
      },
      {
        q: 'Do I need to use you for the repairs afterward?',
        a: 'You don’t. The pages are yours to carry to another electrician or across the table when a sale is being negotiated. If you’d rather we handle it, every line item is priced flat before a tool comes out, and if something isn’t right afterward, we fix it at no charge.',
      },
    ],
  },
};
