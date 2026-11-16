import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cherryGrove: LocationServiceCopy = {
  localParagraph:
    'Cherry Grove is almost all houses from the 1960s and 1970s; Census figures put 78.1% of them in those two decades. Panels from that era were sized for a lighter load, and 45.0% of homes here also heat with electricity, which leaves little room for a car charger, a hot tub or an addition. Most inspections here are for one of those plans, or for a sale. We test the whole system, write up the findings and price any repair before we begin.',
  emergencyParagraph:
    'If a Cherry Grove switch plate is hot to the touch, you smell something burning near the panel, or a breaker trips again right after you reset it, don’t wait for an inspection slot. Turn that breaker off. With smoke or fire, get out and dial 911. Most calls get us the same day, weekends included.',
  commonIntro:
    'Cherry Grove’s houses went up within a short window, so they tend to share the same weak spots. What we find most:',
  localFaqs: [
    {
      q: 'Can my Cherry Grove house take an EV charger?',
      a: 'Often, but electric heat changes the math. Many Cherry Grove homes already run an electric furnace or heat pump off a 1970s panel, so we add up the real load first. If there’s room, it’s one new circuit. If not, you see a panel replacement priced before deciding.',
    },
    {
      q: 'Who inspects electrical permits in Cherry Grove?',
      a: 'Cherry Grove belongs to Anderson Township, but permitted electrical work here is inspected by Inspection Bureau, Inc. (IBI). That official inspection signs off a specific job. Ours is a safety check of the whole house with a written report you keep. When a repair needs a permit, we file it.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Cherry Grove homes',
    band1Heading: 'Common Electrical Problems We Find in Cherry Grove Homes',
    commonSituations: [
      'An original 1970s panel feeding an electric furnace, central air and a remodeled kitchen',
      'Bedrooms where one circuit runs every outlet and the ceiling light',
      'Bathroom and garage outlets with no GFCI protection at all',
      'A hot tub a previous owner hooked up with no disconnect within sight',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Cherry Grove problems end without a visit. Outlets in wet areas, the garage and outdoors share GFCI protection, and a single tripped unit can leave several receptacles dark, so test each reset button. When a breaker trips, goes back on and keeps holding, it’s doing exactly what it should. Try a new bulb, and check whether that wall switch only feeds a lamp plug. An inspection makes sense with a fuse box still in service, ungrounded outlets in most rooms, flicker spread across circuits, or a purchase of a 1970s house whose wiring nobody has touched since.',
      },
      {
        title: 'Inspection, Repair or Rewire in Cherry Grove?',
        body: 'Base it on what we find, not on the house dating from 1971. Loose connections, a bad breaker and missing GFCI protection are repairs. A 1970s panel that’s full, worn or too small for electric heat plus central air is a panel replacement, and with so much electric heat on these streets that comes up often. Rewiring is rare in houses this age; we’d price it only if old wiring showed up throughout. You get the report and make the call, and the repairs don’t have to be ours. For any permit, we pull it and arrange the official inspection.',
      },
    ],
    whyTitle: 'Why Cherry Grove Homeowners Call Us',
    whyParagraph:
      'Cherry Grove is 91.4% owner-occupied, so most of our reports go to homeowners planning a project or a sale. Our electricians are licensed and insured, and every one has passed a background check and drug test.',
    sharedFaqs: [
      {
        q: 'What will an electrical inspection cost for my Cherry Grove house?',
        a: 'We quote a flat rate up front. A bigger house takes longer, and an inspection ahead of a charger or addition looks harder at the panel than a general check does, so both shape the price. Any repair is quoted on its own, and waits for your yes.',
      },
      {
        q: 'Which parts of the house does an electrical inspection look at?',
        a: 'The panel and every breaker or fuse in it, the grounding and bonding, outlets and whether they have GFCI and AFCI protection, all the wiring we can reach to see, and how the smoke alarms are powered. Duke Energy owns the meter, so we start at the meter base.',
      },
      {
        q: 'Am I stuck with you for the repairs?',
        a: 'Not at all. The report is yours, and another licensed electrician can use it to quote the work. If you choose us, each repair gets its own flat price, agreed with you before we pick up a tool.',
      },
    ],
  },
};
