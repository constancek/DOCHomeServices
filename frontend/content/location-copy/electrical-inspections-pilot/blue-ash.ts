import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const blueAsh: LocationServiceCopy = {
  localParagraph:
    'Blue Ash wiring is usually in decent shape. Census figures put the city’s median build year at 1981, with the 1980s its busiest building decade, so we rarely see fuse boxes or ungrounded outlets here. People book us for a reason: a sale or purchase, a finished basement, an addition, or a car charger or heat pump that a 1970s or 1980s panel may not have room for. We check the whole system, tell you what it can take, and price anything it needs before we start.',
  emergencyParagraph:
    'Newer wiring still fails. If an outlet or switch feels hot, buzzes or shows scorch marks, if you smell burning, or if a breaker trips again the second you reset it, turn that breaker off and call. Any smoke or fire: get out and phone 911. We get to most calls in Blue Ash the same day, weekends included.',
  commonIntro:
    'Most Blue Ash homes are from the 1970s and 1980s, and their findings are more about capacity than age:',
  localFaqs: [
    {
      q: 'Who issues electrical permits in Blue Ash?',
      a: 'The City of Blue Ash Community Development department issues building and electrical permits on one combined application. Our inspection is a safety check of your system with a written report; the city’s inspection happens when permitted work is finished. If our findings lead to permit work, we handle the application.',
    },
    {
      q: 'My Blue Ash basement took on water. Do I need the wiring checked?',
      a: 'If water reached outlets, a panel or a furnace circuit, yes, before that circuit goes back on. The city has special flood hazard areas, and FEMA’s flood map shows whether your address is in one. Leave anything that got wet switched off. We test it and tell you what can stay and what has to be replaced.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Blue Ash homes, additions and new equipment',
    band1Heading: 'Common Electrical Problems We Find in Blue Ash Homes',
    commonSituations: [
      'A 1980s panel with every slot full and an EV charger on the way',
      'Basement circuits added by a past owner without a permit or GFCI protection',
      'Electric heat and central air together pushing an original service near its limit',
      'Builder-grade outlets worn loose after 40 years, so plugs fall out',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of Blue Ash homes don’t need us. If a buyer’s home inspector went through a newer house and found nothing, you can skip it. A dead outlet in a bathroom, kitchen or garage is often a GFCI that tripped elsewhere; press its reset. One breaker that trips and then holds is normal, and a dark fixture may just need a bulb. Book an inspection before adding something big, like an EV charger, hot tub, heat pump or addition. Flickering on several circuits, warm cover plates, or extension cords used as wiring in a finished basement are reasons too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Blue Ash?',
        body: 'For homes this age, rewiring almost never comes up. What we find tends to be repairs: a loose connection, a breaker that no longer trips the way it should, an outlet near water without GFCI protection, or basement work done without a permit. The bigger question is the panel. If it is full or too small for what you want to add, we price a panel or service upgrade and the City of Blue Ash permit that goes with it. The report is yours to act on with any licensed electrician.',
      },
    ],
    whyTitle: 'Why Blue Ash Homeowners Call Us',
    whyParagraph:
      'In Blue Ash the question is usually capacity, so we give a straight answer on whether your panel can take more. Every electrician is licensed, insured, background-checked and drug-tested, and the price is approved first.',
    sharedFaqs: [
      {
        q: 'How much does an electrical inspection in Blue Ash cost?',
        a: 'It’s a flat rate given before we start. House size and the purpose decide it; a pre-sale check of a large two-story is more work than confirming a panel can take one new circuit. If you want repairs, they’re quoted separately.',
      },
      {
        q: 'What will the inspection cover?',
        a: 'The panel and main breaker, each branch breaker, grounding and bonding, outlets tested for faults and for GFCI and AFCI protection, the visible wiring in the basement, garage and attic, and smoke alarm power. For a planned charger or heat pump, we add a load calculation.',
      },
      {
        q: 'Do I need to hire you for any repairs?',
        a: 'No. You keep the written report and can hire any licensed electrician from it. When you want us to do the work, each item gets a flat-rate price up front and you approve only what you want. Financing is available for a panel or service upgrade.',
      },
    ],
  },
};
