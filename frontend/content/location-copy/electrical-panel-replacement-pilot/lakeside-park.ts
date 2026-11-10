import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lakesidePark: LocationServiceCopy = {
  localParagraph:
    'Lakeside Park is mostly midcentury, but about one home in six dates from 1939 or earlier, Census figures show. Those older houses, including the big post-World War I ones on Dixie Highway, may still have a fuse box or a small original panel. The 1950s and 1960s houses usually have breakers but too few slots for central air and a newer kitchen. We test the breakers and inspect the feeder and meter base before quoting. A single bad breaker gets fixed alone, at a price set beforehand.',
  emergencyParagraph:
    'Get same-day help when the panel gives off a burning odor, runs hot, buzzes, looks scorched or sparks, or when a breaker won’t stay on after a reset. Leave alone any panel that took on water. If that breaker can be shut off without touching anything wet or warm, shut it off. Smoke or flame means leave and call 911.',
  commonIntro:
    'Most of what we find here falls into a few patterns, mainly these:',
  localFaqs: [
    {
      q: 'Do the historic houses on Dixie Highway in Lakeside Park need special approval for a new panel?',
      a: 'The Dixie Highway Historic District is on the National Register, and that listing alone doesn’t restrict work on a private house. A panel swap happens indoors anyway. We still pull the usual electrical permit and arrange its inspection, the same as for any house in town.',
    },
    {
      q: 'Can my panel handle a new heat pump in Lakeside Park?',
      a: 'It depends on what the panel already carries and how many spaces are open. A heat pump with backup heat is a heavy load, so we add up the current draw of the house during the check and tell you plainly whether it fits or needs more capacity.',
    },
  ],
  overrides: {
    ctaLine: 'New electrical panels for midcentury and older houses in Lakeside Park',
    band1Heading: 'Signs a Home in Lakeside Park Needs a New Electrical Panel',
    commonSituations: [
      'A fuse box in the basement of one of the older houses near Dixie Highway',
      'A 1960s panel with no slots left for a new heat pump',
      'Breakers that trip after window units are swapped for central air',
      'A buzzing panel with brown marks around one breaker',
    ],
    proseSections: [
      {
        title: 'Benefits of a New Electrical Panel for Homes in Lakeside Park',
        body: 'For a midcentury house, a new panel mostly buys room to grow. Cooling, an electric range, a heat pump, a hot tub or a charger can each sit on its own breaker without knocking out the rest. Older houses near Dixie Highway finally retire their fuses. The new door lists every circuit, so the next trip takes seconds to trace. Buyers here, and the inspectors they bring, check the panel early, and a current one with a clear directory gives them one less thing to bargain over. Fewer repair calls tend to follow.',
      },
      {
        title: 'Electrical Panel Repair or Replacement in Lakeside Park',
        body: 'We don’t replace a panel because a house is old. We replace it because of what testing shows. A breaker that has died, a terminal that worked loose and overheated, or one circuit with a fault can be repaired without touching the rest. Fuse boxes, full panels with circuits still to add, burned or heat-marked panels, and models without available parts are replacements. You see both prices and choose. Start with the easy checks. If a breaker tripped, reset it and watch whether it stays on. If outlets in a bath, the kitchen, the garage or outside went dead, press the reset on their GFCI, since one can control several.',
      },
      {
        title: 'Sizing and Permits for a New Electrical Panel in Lakeside Park',
        body: 'We size the new panel to the real load in the house and what’s coming, like a heat pump or a charger in the garage, instead of copying the old one. If the meter base or service line needs work to carry more, the job grows, and you hear why before pricing. Duke Energy Kentucky disconnects and reconnects power, and the paperwork and inspection are on us.',
      },
    ],
    whyTitle: 'Why Homeowners in Lakeside Park Choose Us for Electrical Panel Replacement',
    whyParagraph:
      'We work on everything from fuse boxes in prewar basements to full panels in midcentury ranches across Kenton County. Our licensed, insured, background-checked electricians quote a flat price before any work begins.',
    sharedFaqs: [
      {
        q: 'How much is a new electrical panel in Lakeside Park?',
        a: 'It’s a flat rate, given after the check and approved before work. The panel, the amount of service the house needs, a possible new meter base and the permit all shape it. A swap in a 1960s ranch and a fuse box in an older house aren’t priced the same.',
      },
      {
        q: 'What signs say my panel in Lakeside Park is failing?',
        a: 'Breakers that trip again and again, lights that dim when the air or range starts, a scorched smell, brown or black marks, a hum from the panel and a door that feels warm. A fuse box, or a panel with no room for a new heat pump or charger, also means it’s time to have it checked.',
      },
      {
        q: 'Why not replace the panel myself to save money?',
        a: 'The wires from the meter can’t be shut off from inside the house, so the utility has to disconnect them first. It’s high-voltage work with a permit and inspection attached. A licensed electrician should do it, and the money saved isn’t worth the risk.',
      },
    ],
  },
};
