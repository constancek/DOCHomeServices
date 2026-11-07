import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const coldSpring: LocationServiceCopy = {
  localParagraph:
    'Most electrical inspections we do in Cold Spring are for a sale or a big addition, not because something is wrong. Census figures show the median home here was built in 1999, and nearly half since 2000, so the wiring is usually sound and grounded. The questions are about capacity: whether the panel can carry an EV charger, a finished basement or a hot tub. We check it, put it in writing and price anything that needs fixing first.',
  emergencyParagraph:
    'Builder wiring in a Cold Spring subdivision still fails, usually at one connection. Warning signs: a switch plate that’s warm, a scorched outlet, crackling in a box, or a breaker that flips the second you reset it. Leave it off. If you see smoke, get the family out and call 911. Same-day help on most calls, weekends too.',
  commonIntro:
    'Cold Spring calls tend to come from newer single homes and townhouses, and from owners planning to add something big. What we find most:',
  localFaqs: [
    {
      q: 'I’m selling my Cold Spring townhouse. Is an electrical inspection required?',
      a: 'No. Kentucky doesn’t require one to sell a home. Some sellers book one anyway so a buyer’s questions have answers before the offer, and if a buyer, lender or insurer asks for a written report, you’ll have one. For a townhouse we check your unit’s panel and circuits.',
    },
    {
      q: 'Can my Cold Spring panel handle an EV charger?',
      a: 'Often, yes, in a house built after 2000, but it depends on the panel’s size and what is already on it. We add up the load, check for open space, and tell you whether the charger fits as is or needs a panel upgrade. If it needs a permit, we pull it and arrange the inspection.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Cold Spring homes and townhouses',
    band1Heading: 'Common Electrical Problems We Find in Cold Spring Homes',
    commonSituations: [
      'A builder-grade panel with no spare slots for an EV charger or a basement finish',
      'A finished basement wired by a previous owner without a permit',
      'Outdoor and garage outlets missing GFCI protection or weatherproof covers',
      'Hot tub or patio heater circuits run from the wrong size breaker',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Many Cold Spring calls end with a reset button. GFCI outlets in kitchens, baths, garages and on patios protect others down the line, so a dead outlet in one room may come back when you press reset in another. A breaker that tripped during a storm or a heavy load and then held is fine. If your purchase inspection on a 2000s house came back clean, skip ours. We’re worth booking before you finish a basement or add a hot tub, or when the same circuit keeps dropping out. You get the findings written up.',
      },
      {
        title: 'Inspection, Repair or Rewire in Cold Spring?',
        body: 'Almost no Cold Spring house needs rewiring; fewer than one in ten predates 1960. The useful answer is usually repair or panel. A loose neutral, a breaker running hot or a garage circuit with no GFCI gets fixed on its own. When a builder-grade panel is out of space for the load you’re adding, we quote an upgrade. Our inspection gives you a written safety report. The official one only happens on permitted work, and we handle the permit and that visit. Hire us or someone else for the fixes.',
      },
    ],
    whyTitle: 'Why Cold Spring Homeowners Call Us',
    whyParagraph:
      'In Cold Spring, 89.1% of homes are owned by the people living in them, who tend to plan electrical work around a project. Technicians are licensed, insured, background-checked and drug-tested, and the price is fixed first.',
    sharedFaqs: [
      {
        q: 'How is an electrical inspection priced in Cold Spring?',
        a: 'We quote a flat rate before we start, based on the size of the house and the reason for the visit. Before an EV charger we spend extra time on the panel’s capacity; before a sale the report is written for a buyer to read. Any repair waits until you say yes.',
      },
      {
        q: 'What will you look at in my Cold Spring house?',
        a: 'We begin where Duke Energy Kentucky’s meter ends, at the meter base, and work inward: the panel and every breaker, grounding and bonding, outlets and switches room by room, GFCI and AFCI protection, cable visible in the garage, basement and attic, and power to hard-wired smoke alarms.',
      },
      {
        q: 'Will you insist on doing the repairs?',
        a: 'No. Once we hand over the report, you can shop it to any licensed electrician. If you want us, each repair has a flat-rate price you sign off on first. Cold Spring landlords get the same report, and we inspect wiring, not leases.',
      },
    ],
  },
};
