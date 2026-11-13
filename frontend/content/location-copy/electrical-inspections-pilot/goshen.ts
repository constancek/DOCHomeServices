import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const goshen: LocationServiceCopy = {
  localParagraph:
    'Goshen has two kinds of housing, and the inspection depends on which one you own. In the old center around State Route 28, Census figures show 35.1% of homes built before 1940, where cloth-covered wiring, two-prong outlets and old fuse boxes can still turn up. Across the wider township the median home is from 1983, so the wiring is usually sound and people book for a sale or a new appliance. We check the whole system and price any work before starting.',
  emergencyParagraph:
    'If you smell burning, find an outlet or switch running hot or scorched, hear buzzing, or watch a breaker drop the moment you push it back, cut that circuit at the panel and get us out today. Smoke or flame means everyone leaves before anyone dials 911. We reach most of these the same day, weekends too.',
  commonIntro:
    'Goshen calls range from prewar houses in the center to newer homes and manufactured homes across the township. What we find most:',
  localFaqs: [
    {
      q: 'Who issues electrical permits in Goshen?',
      a: 'Clermont County Building Inspection, for all of Goshen Township. Our visit is a private safety review, written up for you. If a fix needs a permit, we apply, and a county inspector approves the work once it’s done. Township zoning sits in a separate office, which we contact when a job calls for it.',
    },
    {
      q: 'Do you inspect manufactured homes in Goshen Township?',
      a: 'Yes. By the same Census figures, 1,016 of the township’s 6,686 homes are manufactured homes. We check the service and the feed into the home, the panel, grounding, outlets and GFCI protection, the same way we would in a site-built house.',
    },
    {
      q: 'I rent a house in Goshen. Who books an inspection?',
      a: 'Your landlord. Put the problem in writing, and switch off any breaker feeding something hot or buzzing. Under Ohio Revised Code 5321.04 (A)(4), landlords must keep the electrical fixtures they provide safe and working, so they arrange our visit. We look after wiring; the lease is theirs to sort out.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Goshen homes, old and new',
    band1Heading: 'Common Electrical Problems We Find in Goshen Homes',
    commonSituations: [
      'A prewar house in the center still running on a fuse box',
      'Cloth-covered wiring spliced into newer circuits during a remodel',
      'A manufactured home with a loose or corroded feeder connection',
      'A township house from the 2000s where a buyer wants a written report',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Rule out the small stuff first. Outlets in a kitchen, bath, garage or porch often hang off one GFCI, so press reset on each until power comes back. One breaker that tripped and has stayed on since isn’t a problem, and a newer township house the buyer’s inspector passed rarely needs us. Call for an inspection when a prewar house near the Route 28 crossroads is changing hands with no recent electrical work, two-prong outlets fill the rooms, cords stand in for wiring, flicker spreads across circuits, or a heat pump is on the way.',
      },
      {
        title: 'Inspection, Repair or Rewire in Goshen?',
        body: 'What turns up during the visit decides it, not the year the house went up. Tight terminals, a dead breaker or a missing GFCI are fixes. Fuse boxes, and panels too small or heat-damaged, get a replacement price. When cloth-covered or knob-and-tube runs reach most rooms of an older Goshen house, rewiring gets quoted beside the patch-by-patch cost. Township homes from the 1980s on seldom go beyond small fixes. Who does the work is your call, with the report in hand. We arrange permits when they apply.',
      },
    ],
    whyTitle: 'Why Goshen Homeowners Call Us',
    whyParagraph:
      'Goshen runs from prewar houses to manufactured homes, and we inspect both with the same care. Our electricians are licensed, insured, background-checked and drug-tested, and the flat price is yours to approve first.',
    sharedFaqs: [
      {
        q: 'How is a Goshen electrical inspection priced?',
        a: 'Flat, and named before we begin. House size and what the report is for set the figure, so a manufactured home checked for a sale costs less than a big house with two additions. Anything we find carries its own quote, and none of it starts until you approve.',
      },
      {
        q: 'What does a Goshen inspection cover?',
        a: 'Breakers or fuses in the panel, the ground and bond connections, outlets along with their shock and arc-fault protection, exposed wiring in a basement, crawlspace or attic, and power to hard-wired smoke detectors. Each finding is written down next to what we’d suggest doing about it.',
      },
      {
        q: 'Do I have to hire you for the repairs?',
        a: 'No. Any licensed electrician can work from your report, and you’re free to collect several quotes. We’ll price the fixes too if you want, with financing available for the bigger ones. The inspection fee never depends on who does the work.',
      },
    ],
  },
};
