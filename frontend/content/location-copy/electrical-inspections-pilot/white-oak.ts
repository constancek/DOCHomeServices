import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const whiteOak: LocationServiceCopy = {
  localParagraph:
    'Most White Oak inspections are in homes from the 1950s to the 1970s; Census figures put the median at 1968. Those houses were wired for a lighter load, so we often find a panel stretched with added circuits and bedrooms sharing a single circuit. It makes no difference whether your street is on the Green or Colerain Township side; the check is the same. We test the system, write it up, and give you a price on any fix before work starts.',
  emergencyParagraph:
    'Don’t hold out for a scheduled inspection if a White Oak outlet feels warm, a switch buzzes or has scorch marks, or the lights dim hard every time the furnace starts. Flip that circuit’s breaker off. Smoke or flames mean everyone leaves the house and someone calls 911. We reach most of these calls the same day, weekends included.',
  commonIntro:
    'White Oak’s 1950s ranches and 1960s split-levels tend to turn up the same findings:',
  localFaqs: [
    {
      q: 'I rent an apartment in White Oak and some outlets keep losing power. Who fixes that?',
      a: 'Your landlord. ORC 5321.04 puts an Ohio landlord on the hook for the outlets and fixtures in your apartment staying in good and safe working order. Write down which outlets cut out and when, and send that to them. We inspect wiring, not leases; the owner or manager schedules us and receives our report.',
    },
    {
      q: 'Who inspects permitted electrical work in White Oak?',
      a: 'Inspection Bureau, Inc. (IBI) handles electrical permits in this part of Hamilton County, on both the Green and Colerain sides. Our inspection is a separate safety check that ends in a report. When a repair needs a permit, we pull it and book the inspector.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for White Oak houses and rentals',
    band1Heading: 'Common Electrical Problems We Find in White Oak Homes',
    commonSituations: [
      'A 1960s panel with tandem breakers squeezed in to make room for new circuits',
      'Two-prong outlets in the bedrooms of a 1950s ranch, some swapped for three-prong with no ground behind them',
      'Kitchen counters on one circuit that trips when the microwave and toaster run together',
      'A garage subpanel a past owner added with no permit on record',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Begin with what you can do yourself. In a White Oak house a dead patio, garage, bath or kitchen receptacle usually means some GFCI tripped, sometimes one on another wall feeding it, so press every reset you can find. A breaker that dropped, went back on and stays on isn’t a problem. Nor is a fixture that just needs a fresh bulb. Get an inspection when two-slot ungrounded outlets fill most rooms, power strips and cords have replaced proper outlets, or lights waver on more than one circuit. Buying a 1960s ranch with no record of electrical updates is another good reason.',
      },
      {
        title: 'Inspection, Repair or Rewire in White Oak?',
        body: 'What we find decides it, not the 1968 median. Loose connections, a worn breaker, a sink with no GFCI protection: those are repairs, usually done in one visit. A small original panel now feeding central air, a dryer and a home office can be undersized, and then a panel replacement is the honest answer. Rewiring the whole house rarely comes up here; we price it only if old wiring turns up throughout, and we show it beside the spot repairs. You get the report and choose, and nobody has to hire us for the repairs.',
      },
    ],
    whyTitle: 'Why White Oak Homeowners and Landlords Call Us',
    whyParagraph:
      'In White Oak, 70.9% of homes are owner-occupied and the rest are rentals, in houses and apartment buildings. Whoever books gets a licensed, insured electrician who has passed a background check and a drug test.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in White Oak?',
        a: 'You get a flat rate before we begin. It’s set by how big the house is and why you want the inspection, for instance a purchase or a new appliance. If the report lists repairs, each one gets its own price, and you approve it first.',
      },
      {
        q: 'What do you check during an electrical inspection?',
        a: 'Everything from the meter base inward. The meter itself belongs to Duke Energy. We look at the panel and its breakers, grounding and bonding, outlets with GFCI and AFCI protection, any wiring in view, and how the smoke alarms get their power, then write it all up.',
      },
      {
        q: 'If you find problems, do I have to use you to fix them?',
        a: 'You don’t. The written report belongs to you, and any licensed electrician can work from it. If you’d like us to handle the repairs, every item gets a flat-rate price that you agree to before we open the panel.',
      },
    ],
  },
};
