import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mason: LocationServiceCopy = {
  localParagraph:
    'Mason wiring is mostly young, and people here tend to book us ahead of something: listing the house, closing on one, finishing a basement or mounting an EV charger in the garage. Census figures show half the city’s homes went up in 1996 or later, with just 232 from 1939 or earlier. Over a third heat with electricity, which can leave a 1990s panel nearly full before the new load arrives. We go through the whole system, put it in writing, and quote any fix up front.',
  emergencyParagraph:
    'These can’t wait for a visit next week: a smell like hot plastic near an outlet, a cover plate that’s warm or brown, a switch that spits sparks, a breaker that won’t hold, or lights that sag when the heat pump kicks on. Cut that circuit at the panel. Smoke or flame: out, then 911. Usually same day, weekends too.',
  commonIntro:
    'Mason’s houses are mostly from the 1990s and 2000s, so what we find tends to come from added loads and later work, not old wiring:',
  localFaqs: [
    {
      q: 'I’m selling my Mason house. Do I need an electrical inspection?',
      a: 'No state law makes a Mason seller get one. Some book it before listing so the buyer’s home inspector doesn’t surprise them with a list, and if a buyer, lender or insurer asks for a written report, you’ll have one. Homes built here in the 1990s and 2000s often come back with a short list.',
    },
    {
      q: 'We’re adding a hot tub to our Mason home. Will the panel cope?',
      a: 'Check before you order it. A hot tub needs its own circuit with GFCI protection, and a house that heats with electricity may have little spare room in the panel. We run a load calculation, tell you whether the panel can take it, and pull the permit and arrange the inspection if work is needed.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Mason sellers, buyers and remodelers',
    band1Heading: 'Common Electrical Problems We Find in Mason Homes',
    commonSituations: [
      'A 1990s panel with no open slots left after a basement was finished',
      'An EV charger or hot tub circuit added by a previous owner and never checked',
      'Garage and deck GFCI outlets worn out to the point they no longer trip when tested',
      'A townhome panel in a closet where storage blocks the clearance it needs',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Mason calls end with no electrician needed. A dead outlet by the sink, in the garage or on the deck usually means a GFCI has tripped, maybe one two rooms away, and its reset button brings the rest back. A breaker that flips once and then holds is doing its job. Bedroom outlets in 1990s builds were often wired to a wall switch, so try the switch. If you bought a newer house and your home inspector flagged nothing, skip us. Book when lights flicker across more than one room, cords have turned into permanent wiring, or a big new load is coming.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mason?',
        body: 'Go by what we find. Rewiring is rare in Mason, because most of the cable here went in after 1990. A loose lug, a breaker running hot or a missing GFCI gets fixed on its own. When a 1990s panel has to feed an EV charger, a hot tub and electric heat together, we price a bigger panel. There are two kinds of inspection: ours, a whole-house safety check with a written report, and the official one, which comes with a permit and is signed off by the permit office’s inspector. We file for that permit and set up the visit. The report is yours to act on.',
      },
    ],
    whyTitle: 'Why Mason Homeowners Call Us',
    whyParagraph:
      'Most Mason owners call before a project or a sale, not after a failure. We give a straight report on a newer house, including when it needs nothing, and our licensed, insured techs quote a flat price first.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Mason?',
        a: 'Mason inspections are a flat rate, and you hear the figure before we start. Two things move it: square footage, and the job you need done. Looking over a townhome before it goes on the market takes less than a full load review on a four-bedroom adding a charger and hot tub. No overtime fees.',
      },
      {
        q: 'What does a Mason electrical inspection cover?',
        a: 'Everything from the main panel outward. We look for loose or overheated breakers, confirm the house is grounded and bonded, plug-test outlets in each room, and trip every GFCI and AFCI to see they work. In Mason that includes the garage, the deck and the unfinished side of the basement. Smoke alarms get checked for hard-wired power.',
      },
      {
        q: 'If you find problems, do I have to use you to fix them?',
        a: 'No. Any licensed electrician can work from our report, and it’s yours to keep. Each line carries our own price, which gives you something to compare against. If you’re selling, you might handle the safety items before listing and leave the rest for the buyer to weigh.',
      },
    ],
  },
};
