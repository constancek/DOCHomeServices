import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hartwell: LocationServiceCopy = {
  localParagraph:
    'Hartwell inspections split two ways: older houses where we check how much original wiring survives, and apartment buildings where owners want each unit checked. The median home here was built in 1949, and Census figures put a third of them at 1939 or earlier, so ungrounded outlets and early panels are common. Close to two-thirds of homes are rented, many in large complexes. We go through the panel, the circuits and every room, then quote the visit before starting.',
  emergencyParagraph:
    'Hartwell problems that can’t sit until an inspection slot: an outlet or switch cover too hot to touch, a crackle or hum, sparks, a burning odor, or a breaker tripping again the instant it’s reset. Leave it off. With smoke or flame, get out first and dial 911 second. Most get a same-day visit, weekends included.',
  commonIntro:
    'Hartwell mixes pre-war and 1940s houses with large apartment complexes. Here’s what we find most:',
  localFaqs: [
    {
      q: 'Is my house in Hartwell or Wyoming for permits?',
      a: 'Check the ZIP and the city. Hartwell addresses are 45216 and inside Cincinnati, so permitted electrical work is inspected by the city’s Department of Buildings & Inspections. Wyoming, next door, is 45215 and a separate city. Whichever it is, we pull the permit and arrange the inspection for work that needs one.',
    },
    {
      q: 'I rent in Hartwell and half my outlets have only two prongs. Can I make the landlord fix that?',
      a: 'Two-prong outlets aren’t a fault by themselves if they work safely. Ones that spark, feel warm or stop working are. Put those in a dated letter to the owner. Hartwell rentals fall under ORC 5321.04 (A)(4): supplied electrical fixtures kept in good and safe working order. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Hartwell houses and apartment complexes',
    band1Heading: 'Common Electrical Problems We Find in Hartwell Homes and Apartments',
    commonSituations: [
      'A late-1940s house with its original small service and a fuse box in the basement',
      'Grounded-looking three-prong outlets on old two-wire circuits with no ground',
      'Apartment units with one circuit serving the kitchen and the living room together',
      'A buyer’s home inspector flagging double-tapped breakers in an older panel',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Start with the easy checks in a Hartwell house. Kitchen, bath, garage and porch outlets usually sit behind a GFCI, and the one with the reset button may be two rooms away from the dead outlet. One breaker that trips and stays on after resetting is fine. On a newer Hartwell unit where the buyer’s inspector found nothing, you don’t need us. Book us for two-slot outlets in room after room, an old fuse box, cords pressed into service as wiring, flicker spread over several circuits, or a 1940s house going on the market with no electrical work on record.',
      },
      {
        title: 'Inspection, Repair or Rewire in Hartwell?',
        body: 'Decide from the findings, since two 1949 houses on the same Hartwell street can be wired very differently. Loose terminations, a tired breaker and kitchens or baths lacking GFCI are all repair work. A fuse box or small panel that can’t keep pace gets replaced with a larger panel. Where cloth-insulated or knob-and-tube wiring still runs most rooms, a rewire quote sits beside the smaller fixes so you can weigh them. Our written report is the safety check; any permit inspection is the city’s step, and we arrange it. Any licensed electrician can do the repairs.',
      },
    ],
    whyTitle: 'Why Hartwell Homeowners and Landlords Call Us',
    whyParagraph:
      'Hartwell has more renters than owners, and we work for both single-house owners and apartment managers. Every technician is licensed, insured, background-checked and drug-tested. We’ve been family owned since 1993.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Hartwell?',
        a: 'The price is a flat rate, quoted before we start, and it depends on the size of the place and the reason. A small house checked before adding a dryer circuit costs less than a full report on a building with several panels. There are no overtime fees.',
      },
      {
        q: 'What does an electrical inspection in Hartwell look at?',
        a: 'Every Hartwell inspection opens the panel or fuse box first, checking each breaker or fuse plus grounding and bonding. From there we test outlets room by room for ground and polarity, mark missing GFCI or AFCI protection, follow exposed wiring in the basement and attic, and confirm smoke alarms have power.',
      },
      {
        q: 'Do I have to hire you to do the repairs?',
        a: 'No. Use the report with any licensed electrician, or hand it to a buyer. If we do the Hartwell repairs, each line item gets its own price, and nothing is touched until you approve that item.',
      },
    ],
  },
};
