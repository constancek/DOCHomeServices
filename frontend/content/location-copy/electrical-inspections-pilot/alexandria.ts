import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const alexandria: LocationServiceCopy = {
  localParagraph:
    'Most Alexandria homes are fairly young. Census figures put the median at 1994, and only about one in nine predates 1960, so original wiring is rarely the worry. People book us before listing a house, after buying one, or when they want a generator hookup, a pool or a shop in the garage. In houses this age, the panel’s size is usually the limit, not the wiring. We inspect, write it up and quote any fix before work begins.',
  emergencyParagraph:
    'Call us now if an Alexandria breaker trips again right after you reset it, an outlet or switch feels hot or looks scorched, a wall box buzzes, or lights dim hard when the air conditioner starts. Flip that breaker off. With smoke or flame, get out and call 911. Most urgent calls are seen the same day, weekends included.',
  commonIntro:
    'Nearly every Alexandria call is a detached house on its own lot, most built since the 1980s. These are the findings that come up most:',
  localFaqs: [
    {
      q: 'Who issues electrical permits in Alexandria?',
      a: 'The City of Alexandria takes electrical permit applications, and site plans and grading go to Campbell County Planning & Zoning. You don’t need to sort that out yourself. If your inspection leads to work that needs a permit, we pull it and arrange the official inspection that signs the job off.',
    },
    {
      q: 'Who owns the meter on my Alexandria house?',
      a: 'The utility does, along with the line running to the house. In Alexandria that can be Duke Energy Kentucky or Owen Electric, depending on the street. Everything from the meter base inward is yours, and that is the part we inspect and repair. Problems on the utility side go to them.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Alexandria houses, before you buy, sell or add on',
    band1Heading: 'Common Electrical Problems We Find in Alexandria Homes',
    commonSituations: [
      'A 1990s panel already full before anyone asks for an EV charger',
      'Garage and basement outlets added later with no GFCI protection',
      'A portable generator plugged in through a dryer outlet instead of a proper transfer switch',
      'Deck, pool or shed circuits buried too shallow or fed from an indoor outlet',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Start with what you can check. A dead outlet in the bathroom or garage often comes back when you press reset on a GFCI, which may sit in another room. A breaker that trips once and then holds is usually a one-off overload. A bulb or a switched lamp outlet explains many dark rooms. Call us when the same breaker won’t hold, several circuits flicker together, or cords have been stapled along baseboards as permanent wiring. Before a generator hookup or an addition, an inspection tells you what the panel can take. We explain each finding on site.',
      },
      {
        title: 'Inspection, Repair or Rewire in Alexandria?',
        body: 'The report decides this, and in Alexandria it rarely says rewire. Most findings are fixes: a loose lug in the panel, a breaker that no longer trips cleanly, outdoor outlets without GFCI protection. A panel with no capacity left for what you’re adding is a panel replacement, which needs a permit and an official inspection; we pull the permit and set that up. Ours is the safety check before any of that, written down so you can compare quotes. You’re free to hire anyone for the work.',
      },
    ],
    whyTitle: 'Why Alexandria Homeowners Call Us',
    whyParagraph:
      'More than nine in ten Alexandria homes are owner-occupied, and owners want a straight answer before they spend money. We’re family owned since 1993, licensed and insured, and every price is agreed before work starts.',
    sharedFaqs: [
      {
        q: 'What does an Alexandria electrical inspection cost?',
        a: 'You get a flat rate up front, set by the size of the house and what the report is for, such as a purchase or a planned pool. There are no overtime fees. If we find repairs, each gets its own price, and none happens until you approve it.',
      },
      {
        q: 'What’s included in the inspection?',
        a: 'We open the panel and check each breaker, the main, and the grounding and bonding. We test outlets for polarity and ground, confirm GFCI and AFCI protection where code calls for it, trace visible wiring in the basement, attic and garage, and confirm the smoke alarms have power.',
      },
      {
        q: 'Can I take your report to another electrician?',
        a: 'Yes. You paid for it, so it’s yours. Some Alexandria owners use it to get a second quote, and that’s fine with us. If we do the repairs, the price is fixed before we start and backed by our guarantee: we make it right, or you don’t pay.',
      },
    ],
  },
};
