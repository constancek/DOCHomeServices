import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const collegeHill: LocationServiceCopy = {
  localParagraph:
    'College Hill has more mid-century houses than most of the city’s older neighborhoods, and that shapes what an inspection finds. By Census figures, 36.4% of homes here date from 1940 to 1969 and another 35.4% from 1939 or earlier. The mid-century houses usually have grounded wiring but a panel and circuit count that never kept up with modern kitchens and window units. The older ones may still hide cloth-covered wire. We inspect the whole system, give you a written report and price repairs before anything is touched.',
  emergencyParagraph:
    'Some College Hill problems need us today, not next week: a burning smell you can’t place, a receptacle that’s warm or blackened, buzzing from a switch, sparks, or a breaker that pops again as soon as it’s pushed back. Kill that breaker. If smoke or flame shows up, get outside and call 911. Most calls get same-day service, weekends included.',
  commonIntro:
    'Along Hamilton Avenue and the side streets, roughly half the homes are single houses. The problems we see most:',
  localFaqs: [
    {
      q: 'Who issues electrical permits for a College Hill address?',
      a: 'The City of Cincinnati Department of Buildings & Inspections, since College Hill is inside city limits. That’s the official inspection, done when work needs a permit. Ours is different: a safety check of the whole house with a report. If our findings lead to permitted work, we pull the permit and set up the city’s inspection.',
    },
    {
      q: 'My College Hill landlord won’t fix a dead circuit. Can I hire you?',
      a: 'Not directly; the owner arranges it. Put the problem in a dated letter or email to the landlord and hold onto a copy. Ohio landlords answer to ORC 5321.04 (A)(4), which says supplied electrical fixtures stay in good and safe working order. We inspect wiring, not leases, and take the booking from the owner or manager.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for College Hill homes',
    band1Heading: 'Common Electrical Problems We Find in College Hill Homes',
    commonSituations: [
      'A 1950s or 1960s panel with every slot filled and double-tapped breakers to squeeze in more',
      'Bedrooms and living rooms sharing one circuit, so a space heater trips the lights',
      'A pre-1940 house with cloth-covered wire left in the upstairs walls after a partial update',
      'An owner adding a hot tub or EV charger who wants to know if the panel can carry it',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Spend five minutes before you spend money. Outlets in the bathroom, kitchen, garage or yard often share one GFCI, and if it trips they all go quiet; hunt it down and push reset. A breaker that snapped off once when the window unit kicked on, and stayed on after, needs nothing from us. Neither does a College Hill house built recently that the buyer’s home inspector passed. We’re worth a visit when the whole house has ungrounded outlets, a fuse panel is still in charge, power strips feed power strips, or lights waver across several circuits. An older house with a sale or a hot tub coming qualifies.',
      },
      {
        title: 'Inspection, Repair or Rewire in College Hill?',
        body: 'The inspection sets the answer. In a College Hill house from 1961, the usual fixes are repairs: double taps separated, a breaker replaced, GFCI protection added where it’s missing. When the panel is full or worn out, or can’t take a new load, a panel replacement is the right call, and the city inspects it. A full rewire only comes up when cloth or knob-and-tube wire still serves most rooms, and then we price it beside spot repairs. You get the report either way and choose who does the work.',
      },
    ],
    whyTitle: 'Why College Hill Homeowners Call Us',
    whyParagraph:
      'Many College Hill houses have had decades of add-ons, and we sort out which ones matter. Our electricians are licensed, insured, background-checked and drug-tested, and you approve the flat-rate price first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in College Hill?',
        a: 'A flat rate, which you hear before we begin. A two-story pre-war house takes more time than a ranch, and a full check for a purchase is bigger than one panel review before a new appliance. Tell us the size and the reason when you call.',
      },
      {
        q: 'What do you look at during the inspection?',
        a: 'We take the cover off the panel and test every breaker or fuse, then check grounding and bonding, each outlet’s GFCI and AFCI protection, and power to the smoke alarms. Mid-century College Hill houses get a close count of how many rooms and appliances hang off each circuit, plus whatever wiring shows in the basement or attic.',
      },
      {
        q: 'If you find problems, do I need to use you to fix them?',
        a: 'No obligation. The report goes home with you, and any licensed electrician can quote off it. If we do the repairs, you’ll see a price for each one and can start with the safety items.',
      },
    ],
  },
};
