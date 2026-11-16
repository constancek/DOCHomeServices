import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const elmwoodPlace: LocationServiceCopy = {
  localParagraph:
    'Elmwood Place is a small, tightly built village, and most electrical inspections here are on houses from before 1940. Census figures put 62.3% of homes at 1939 or earlier, with a median of 1938, so we often open the panel and find cloth-insulated wire, fuses or circuits extended many times over. Most homes are rented, which makes landlords our usual customers. The village has Mill Creek flood elevations on file with FEMA, so low basements are worth a look after high water. We quote first.',
  emergencyParagraph:
    'Elmwood Place calls that skip the calendar: a hot-plastic smell, a cover plate that’s warm, humming or marked, sparking of any sort, and a breaker that drops straight back out. Throw that one off at the panel. With smoke or fire, everybody out and 911 from the sidewalk. A technician reaches most of these the same day, weekends included.',
  commonIntro:
    'Elmwood Place is mostly pre-war houses and small rentals packed close together. What we find most:',
  localFaqs: [
    {
      q: 'I rent in Elmwood Place and the lights flicker when the microwave runs. Who do I call?',
      a: 'Your landlord, with a dated note. Elmwood Place owners fall under ORC 5321.04 (A)(4), Ohio’s rule that electrical fixtures a landlord supplies stay in good and safe working order, and it’s the owner who arranges our visit. We inspect wiring, not leases. Meanwhile, plug the microwave into another circuit if you can.',
    },
    {
      q: 'I’m buying a pre-war house in Elmwood Place. Is an electrical inspection worth it?',
      a: 'Usually, yes. A general home inspector covers roof to foundation in one pass. We spend the whole time on the electrical: inside the panel, at each outlet, along any wiring showing in the basement or attic. A lender, insurer or the seller’s side may ask for paperwork; the written report covers that, and you’ll know repair costs before closing.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Elmwood Place houses and rentals',
    band1Heading: 'Common Electrical Problems We Find in Elmwood Place Homes',
    commonSituations: [
      'Cloth-insulated wiring from the 1920s still feeding bedrooms and the upstairs hall',
      'A fuse box with a newer subpanel bolted on beside it to add circuits',
      'Rentals with extension cords and power strips doing the work of missing outlets',
      'Basement outlets or a panel that took on water when Mill Creek flooded',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Some Elmwood Place outages are a reset away. A dead kitchen, bath or basement outlet may hang off a GFCI that tripped elsewhere in the house, porch included, so press reset on each one you find. A breaker that trips once and stays on after resetting is not a problem, and a lamp outlet run by a wall switch isn’t either. Book an inspection when fuses blow regularly, outlets have two prongs in most rooms, extension cords have become permanent, lights flicker in several rooms, or a pre-war Elmwood Place house is changing hands with no electrical work on record.',
      },
      {
        title: 'Inspection, Repair or Rewire in Elmwood Place?',
        body: 'Most Elmwood Place houses are pre-war, but two of the same age can be very different inside, so the findings choose the fix. A screw terminal backing out, a breaker that no longer trips cleanly, or a bath with no GFCI: those get repaired. A fuse box or tiny panel swamped by modern loads gets replaced. Cloth or knob-and-tube in most rooms is when a rewire gets priced beside piecemeal fixes for you to weigh. Our report is a safety review; if a fix needs a permit, we file it and book the official inspection. Any electrician can do the work.',
      },
    ],
    whyTitle: 'Why Elmwood Place Landlords and Homeowners Call Us',
    whyParagraph:
      'Elmwood Place has fewer than a thousand homes, most of them old and most rented. Each Elmwood Place visit comes from a licensed, insured technician who has passed background and drug screening. We make it right, or you don’t pay.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection cost in Elmwood Place?',
        a: 'You’ll have a flat figure before we begin. The house’s size and the reason behind the visit set it: a small Elmwood Place rental checked between tenants is less work than a full write-up for a sale. Overtime fees don’t exist with us, and financing is offered.',
      },
      {
        q: 'What does an Elmwood Place electrical inspection cover?',
        a: 'We start inside the panel or fuse box: each breaker or fuse, then grounding and bonding. Outlets get tested for polarity and ground, GFCI and AFCI coverage is noted, exposed wiring in the basement and attic is traced, and smoke alarm power is confirmed. Safety items lead the written report.',
      },
      {
        q: 'If you find problems, do I have to hire you?',
        a: 'No. Keep the report and pass it to whichever licensed electrician you like. Should you choose us, every item carries a separate price, and we begin only on what you okay, whether that’s one fix or the whole list.',
      },
    ],
  },
};
