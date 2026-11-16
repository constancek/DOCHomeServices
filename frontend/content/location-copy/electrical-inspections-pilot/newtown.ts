import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newtown: LocationServiceCopy = {
  localParagraph:
    'Newtown’s housing runs in two very different directions. Census figures put the median home at 1989, so a lot of houses here have grounded circuits and a panel with room to spare, and owners mostly call us ahead of a sale or an EV charger. Roughly one home in five predates 1940, and in those the old village wiring may never have been fully replaced. The visit ends with a written list of what we found and what each fix would cost.',
  emergencyParagraph:
    'Smoke curling from a receptacle, a light switch too warm to keep your hand on, a crackle inside the wall, or a breaker that snaps off again within seconds of resetting: kill that circuit at the panel and phone us. Fire or smoke means leave and ring 911 from outside. Newtown gets same-day help on most calls, weekends too.',
  commonIntro:
    'Our Newtown visits land in either a pre-war village house or a home built after 1980. The usual finds:',
  localFaqs: [
    {
      q: 'Water in my Newtown basement in 2018 reached the outlets. Is the wiring safe now?',
      a: 'Not necessarily. In that flood the river reached about 80 homes, most of them on the north side of Crull Street plus a few on Turpin Lane, and backed-up drains soaked basements near Main Street. Breakers and receptacles that were submerged can rust inside and fail later. We open them up and tell you which to swap.',
    },
    {
      q: 'Can a Newtown tenant order an electrical inspection?',
      a: 'You can ask, but the property owner is the one who books it. Ohio’s landlord statute, ORC 5321.04 (A)(4), puts upkeep of the electrical fixtures a landlord provides on the landlord. Send a dated note describing the problem. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Newtown homes, old and new',
    band1Heading: 'Common Electrical Problems We Find in Newtown Homes',
    commonSituations: [
      'Ungrounded receptacles in nearly every room of a 1930s village house',
      'A panel that stood in 2018 flood water and has not been opened since',
      'A 1990s garage that needs a dedicated 240-volt line for a car charger',
      'Lamp cords stapled along trim to reach a room that never got enough outlets',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'If half the bathroom went dark, look for the little test-and-reset outlet first. Builders often chained the garage, porch and bath receptacles behind a single GFCI, and pushing its button brings them all back. A breaker that flipped once and holds after you reset it has done its job. Burnt-out bulbs and switch-controlled outlets fool plenty of people too. What’s worth our time: several circuits flickering together, a fuse box, a house full of two-prong receptacles, or a sale or big appliance ahead in an older house no electrician has touched for years.',
      },
      {
        title: 'Inspection, Repair or Rewire in Newtown?',
        body: 'A 1930s address doesn’t mean a rewire, and a 1990s one doesn’t mean a clean bill. We judge by what turns up. Tightening a loose neutral, swapping a breaker that won’t trip, adding GFCI protection near water: small repairs. When the panel is undersized or corroding, it gets replaced. When old cloth-insulated or knob-and-tube runs still feed much of the house, you’ll see a rewire price beside a patch-as-needed price. Anything permitted, we file and get signed off. Hire us or anyone else; the report is yours either way.',
      },
    ],
    whyTitle: 'Why Newtown Homeowners Call Us',
    whyParagraph:
      'Newtown fits pre-war village homes and newer subdivisions into about two square miles, so no two of our visits look alike. Licensed, insured electricians who pass background checks and drug tests, and a family business since 1993.',
    sharedFaqs: [
      {
        q: 'How is a Newtown electrical inspection priced?',
        a: 'Flat, and you hear the number before we unpack a tool. Square footage and purpose drive it. Confirming one panel can feed a charger is a short visit; a full buyer’s report on a 1930s village home is a long one. Saturday and Sunday cost the same as Tuesday.',
      },
      {
        q: 'What will you actually look at?',
        a: 'We start at the panel with each breaker or fuse, the ground and the bonding. Then we test receptacles room by room for grounding and GFCI or AFCI protection, follow exposed wiring in the basement or attic, and confirm the smoke alarms have power. If a buyer, lender or insurer asks for a written report, you’ll have one.',
      },
      {
        q: 'Will I be pushed to hire you for the fixes?',
        a: 'No. You keep the report and can shop it to any licensed electrician, or use it to bargain on a purchase. If we do the work, the prices you saw are the prices you pay, financing is an option, and if something isn’t right we come back until it is or you owe nothing.',
      },
    ],
  },
};
