import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evendale: LocationServiceCopy = {
  localParagraph:
    'Most Evendale houses went up in the 1980s and 1990s, so an electrical inspection here rarely uncovers antique wiring. Census figures put the village’s median home at 1982, and every home counted was a single-family house. Owners usually book us before selling, before adding a hot tub or EV charger to a panel sized in the 1980s, or after Mill Creek water reaches a basement. We go through the system, write up what we find and price nothing until you’ve read it.',
  emergencyParagraph:
    'Don’t wait for a booked inspection if you smell burning near an outlet or the panel, see sparks, or a switch plate is warm or buzzing. Switch off a breaker that trips again right after a reset and leave it off. Smoke or fire: get out, then call 911. Most Evendale calls are seen the same day, weekends included.',
  commonIntro:
    'Evendale’s wiring is mostly sound for its age; the problems we write up come from what owners have added since. The ones we see most:',
  localFaqs: [
    {
      q: 'Our Evendale basement took on water. Should the electrical be inspected?',
      a: 'Yes, if water reached outlets, the panel or any wiring. Keep that power off and don’t switch it back on to test it. Parts that were under water usually need replacing, and we check what’s left before the circuits are used again. Mill Creek’s floodplain runs through the village, so this does come up.',
    },
    {
      q: 'Who signs off electrical work in Evendale?',
      a: 'Electrical permits in Evendale go through The Inspection Bureau, Inc., and its inspector passes the finished job. The village’s own Building Department handles building and HVAC permits. Our inspection is separate: a check of the whole house with a written report. When a repair needs a permit, we pull it.',
    },
    {
      q: 'We rent out a house in Evendale. Does Ohio law cover the wiring?',
      a: 'It does. ORC 5321.04(A)(4) requires an Ohio landlord to keep supplied electrical fixtures in good and safe working order. A written inspection between tenants shows where things stood. We inspect wiring, not leases; tenants should report problems to you in writing.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Evendale homes',
    band1Heading: 'Common Electrical Problems We Find in Evendale Homes',
    commonSituations: [
      'A 1980s panel with no spare spaces left for an EV charger or hot tub circuit',
      'Basement outlets and wiring that sat in floodwater and were switched back on',
      'Garage and exterior outlets from the original build with no GFCI protection',
      'A basement finished years ago, wired off an existing circuit without a permit',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'In a house built around 1982, plenty of power problems never reach us. A GFCI in the kitchen, a bathroom, the garage or outside can trip and cut every outlet downstream, so check them all and reset. One breaker that trips, resets and holds was likely overloaded for a moment. A dead light is often just the bulb, or the wall switch feeds a lamp outlet. Call for an inspection when lights flicker on more than one circuit, the panel feels warm, or you’re adding a large load like an EV charger. A sale coming up is a good reason too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Evendale?',
        body: 'Rewiring is rarely on the table in Evendale; the houses are too young for cloth-covered wiring to be common. What the inspection usually turns up is repair work, such as a loose connection at a receptacle, a breaker that runs hot, or outlets missing GFCI protection. The bigger question is the panel. If it can’t take the load you’re planning, or it shows wear, we price a replacement, and the permit inspector checks it once it’s in. Read the report, then decide; you’re free to have any licensed electrician do the repairs.',
      },
    ],
    whyTitle: 'Why Evendale Homeowners Call Us',
    whyParagraph:
      'Nearly every Evendale household owns its home, and most of those homes are from the 1980s and 1990s. Our technicians are licensed and insured, background-checked and drug-tested, and the price is set before any work begins.',
    sharedFaqs: [
      {
        q: 'How is an electrical inspection priced in Evendale?',
        a: 'As a flat rate you hear before we begin. The size of the house and your reason for booking set it, because a pre-sale check differs from one focused on a new EV charger or hot tub. If we find repairs, those come as separate flat-rate prices for you to approve.',
      },
      {
        q: 'What’s included in an electrical inspection?',
        a: 'Your main panel and its breakers, the grounding and bonding, a check of outlets and switches, GFCI and AFCI protection, any wiring visible in the basement, garage or attic, and how your smoke alarms get their power. Everything goes into a written report with notes on what matters most.',
      },
      {
        q: 'Am I tied to you for the repairs?',
        a: 'Not at all. Once you have the report, it’s yours, and any licensed electrician can work from it. Plenty of sellers use it to get repairs done before listing. If you choose us, every item is priced up front and you can approve some and skip others.',
      },
    ],
  },
};
