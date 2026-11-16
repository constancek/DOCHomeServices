import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const melbourne: LocationServiceCopy = {
  localParagraph:
    'In Melbourne, an electrical inspection can be the first close look a house has had in decades. Census figures show nearly a third of the city’s homes, 30.5%, date from 1939 or before, and the median is 1958. Houses that age may still hide cloth-covered or knob-and-tube cable, run two-prong outlets with no ground, or rely on fuses. We find out what you actually have, put it on paper and quote each fix before we start.',
  emergencyParagraph:
    'Some things in a Melbourne house need us today: a fuse that blows as soon as it’s replaced, a cover plate gone brown or warm, a hot-plastic smell, or sparks. Shut that circuit off. If smoke or flame appears, everyone leaves and someone dials 911. Same-day visits on most of these, weekends too.',
  commonIntro:
    'Melbourne is a small river city of mostly single homes, many of them older than the panels inside them. What we find most often:',
  localFaqs: [
    {
      q: 'Water got into my Melbourne basement. Is my wiring safe?',
      a: 'Don’t turn on anything that sat in water, and don’t reset a breaker in a wet panel. Have the panel, outlets and any equipment that was under water inspected before the power goes back on. Parts that were submerged usually need replacing, not drying out. We tell you which ones in writing.',
    },
    {
      q: 'Does my Melbourne house still need its fuse box replaced?',
      a: 'Not automatically. A fuse box in good shape, with the right size fuses and sound wiring behind it, can keep working. The trouble is usually oversized fuses swapped in to stop blowing, or too few circuits for today’s appliances. The inspection tells you which, and you decide from there.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Melbourne’s older river homes',
    band1Heading: 'Common Electrical Problems We Find in Melbourne Homes',
    commonSituations: [
      'Knob-and-tube runs still live in the attic of a pre-war house, spliced into newer cable',
      'Grounded-looking three-prong outlets fitted to 1950s cable that has no ground wire',
      'A fuse box carrying an electric heating system it was never sized for',
      'Basement wiring and outlets that sit low enough to be at risk if water comes in',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before calling, check the simple things. Melbourne houses with a fuse box can lose a room to one blown fuse; replace it with the same size, never larger, and if it holds, you’re done. In a breaker panel, one trip followed by a clean reset is normal. A GFCI in the bath or garage may be feeding the dead outlet. We should look when fuses keep blowing, ungrounded outlets run through the house, lights flicker in several rooms, or you’re buying a pre-war home here and nobody knows when it was last rewired.',
      },
      {
        title: 'Inspection, Repair or Rewire in Melbourne?',
        body: 'The year a Melbourne house was built won’t settle it; what’s inside the walls will. Some pre-war homes had their cable replaced decades ago, and others still carry the original. Single faults, like a scorched terminal or one bad breaker, get repaired. A fuse box or early panel that can’t keep up with electric heat gets swapped for a new panel. If old cloth or knob-and-tube cable feeds most rooms, you see a rewire price beside the patch-up price and choose. Permitted jobs end with an official inspection, which we arrange after pulling the permit.',
      },
    ],
    whyTitle: 'Why Melbourne Homeowners Call Us',
    whyParagraph:
      'Census figures show 95.1% of Melbourne homes are lived in by their owners. We give a plain written answer, flat-rate prices with no overtime fees, and technicians who are licensed, insured and background-checked.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection for a Melbourne home?',
        a: 'One flat price, agreed before we come. A small 1940s cottage takes less time than a large two-story house, and a buyer’s report differs from a check before swapping a fuse box. Repairs we turn up are quoted one at a time, and you say yes or no to each.',
      },
      {
        q: 'What do you check in an older house?',
        a: 'Fuses or breakers and the box that holds them, how the system is grounded to the water line and ground rod, outlets tested for ground and polarity, GFCI and AFCI protection, cable we can see in the basement and attic, and power to the smoke alarms. Knob-and-tube gets noted wherever it shows.',
      },
      {
        q: 'Am I stuck with you for the repairs?',
        a: 'Not at all. The report is your property, and another licensed electrician can quote from it. Should you pick us, each item gets a fixed flat-rate price before work, a rewire can be financed, and if something isn’t right afterward, we make it right.',
      },
    ],
  },
};
