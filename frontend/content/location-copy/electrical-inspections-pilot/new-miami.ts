import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newMiami: LocationServiceCopy = {
  localParagraph:
    'New Miami started as a coke-oven village beside the ARMCO mill, and its houses show it. The typical home here dates to 1960, Census figures show, and roughly two thirds went up from 1940 through 1979. Builders then gave each room a couple of circuits and fed the house from a small panel. Today those same circuits run window air, microwaves and space heaters. We trace each one, note what we find, and quote any fix before you commit.',
  emergencyParagraph:
    'Some New Miami problems can’t be booked for later. Smell something hot or burning, feel heat from a switch cover, hear an outlet buzz, see a spark, or watch a breaker snap off again after a reset: kill that breaker. Smoke or flames mean everybody outside and 911. Most calls get a same-day visit, including Saturdays and Sundays.',
  commonIntro:
    'Our New Miami write-ups mostly involve 1940s to 1970s houses that owners have added onto bit by bit. The usual list:',
  localFaqs: [
    {
      q: 'I rent in New Miami and an outlet sparks. What is my landlord required to do?',
      a: 'Ohio’s landlord statute, ORC 5321.04 (A)(4), makes the owner responsible for keeping supplied electrical fixtures in good and safe working order. Write to them describing the sparking outlet, and leave that breaker off until it’s fixed. The owner schedules the inspection or repair; we inspect wiring, not leases.',
    },
    {
      q: 'Who handles the power line to my New Miami house?',
      a: 'Duke Energy Ohio. The overhead drop and the meter are Duke’s; everything from the meter socket inward, panel and branch circuits included, is what we inspect. If we spot trouble on Duke’s side, like a drop sagging toward the roof or a damaged meter, we point it out and you report it to them.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for New Miami houses, owners and landlords',
    band1Heading: 'Common Electrical Problems We Find in New Miami Homes',
    commonSituations: [
      'A 1950s panel packed so full that half-size breakers were jammed in to get more circuits',
      'Bedroom outlets with no ground, each one wearing a cheater plug',
      'A window air conditioner fed by a cord tacked along the baseboard',
      'Basement laundry and garage outlets that were never given GFCI protection',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before booking, rule out the easy stuff. When a bathroom or kitchen outlet goes dark, the culprit is usually a GFCI upstream, maybe in the garage or on the back porch; push its reset button. A breaker that kicks off once and then stays on usually means too much was running. You don’t need us for that. You do need an inspection if the house still has ungrounded outlets in most rooms, a fuse panel, cords acting as permanent wiring, or flicker on more than one circuit, and especially before buying or selling a mid-century New Miami house nobody has rewired.',
      },
      {
        title: 'Inspection, Repair or Rewire in New Miami?',
        body: 'The report, not the build date, tells you which way to go. Most findings in New Miami houses are ordinary repairs: a neutral that’s worked loose, a breaker past its prime, a laundry outlet missing GFCI protection. When the panel itself is undersized, scorched or out of room, replacing it is the fix. Cloth-sheathed wiring in most rooms is when a rewire quote sits next to the repair quote. You own the report and can hand the work to any electrician. Permitted work gets its own sign-off from the official inspector; we file for it.',
      },
    ],
    whyTitle: 'Why New Miami Homeowners and Landlords Call Us',
    whyParagraph:
      'Better than one in three New Miami homes is a rental, so owners and landlords both call. Your inspector is a licensed, insured electrician, and everyone on our payroll has cleared a background check and a drug screen.',
    sharedFaqs: [
      {
        q: 'What will an electrical inspection in New Miami cost me?',
        a: 'You hear one flat figure before we open the panel. Square footage and your reason for the inspection decide it; a pre-sale check and a look before adding an air conditioner circuit aren’t priced alike. Repairs we turn up get separate quotes, each needing your okay.',
      },
      {
        q: 'What’s on the checklist for a New Miami house?',
        a: 'Panel and overcurrent devices, whether breakers or fuses; grounding and bonding; outlets, with GFCI and AFCI protection tested; exposed wiring in the basement, garage and attic; and power to every smoke alarm. Findings are written up in order, worst problems first.',
      },
      {
        q: 'Am I stuck with you for whatever the report finds?',
        a: 'Not at all. The report is paid for and yours. Get competing bids from other licensed electricians, use it to settle a price with a buyer, or ask us to quote it. If a buyer, lender or insurer asks for a written report, you’ll have one.',
      },
    ],
  },
};
