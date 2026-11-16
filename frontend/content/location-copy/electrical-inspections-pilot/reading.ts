import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const reading: LocationServiceCopy = {
  localParagraph:
    'Reading’s homes are mostly from the 1940s and 1950s, with a pre-war core. Census figures put the median year built at 1956, and nearly a quarter of homes went up before 1940. Panels from that era were sized for far smaller loads than central air and an EV charger. Homes in the Mill Creek floodplain have one more question: whether basement wiring or the panel ever sat in water. We check it all and give you the findings in writing, with repairs priced.',
  emergencyParagraph:
    'Phone us rather than booking ahead for a melted or hot outlet, sparking, a buzz inside a switch box, a burning smell, a breaker that won’t stay reset, or lights that sink when an appliance starts. Switch that breaker off. If smoke or flames appear, everybody leaves and calls 911. Most Reading calls get a same-day technician, weekends included.',
  commonIntro:
    'Reading inspections are mostly postwar single homes, with pre-war houses and apartment buildings mixed in. What we find most:',
  localFaqs: [
    {
      q: 'My Reading basement flooded from Mill Creek. Should I get the wiring checked?',
      a: 'Yes, before you rely on anything that was under water. The city says Mill Creek flooding has hit Reading since its founding, and many homes sit in the FEMA 100-year floodplain. Breakers, outlets and wiring that got wet can corrode inside. We test them and list what has to be replaced.',
    },
    {
      q: 'Who issues building permits in Reading?',
      a: 'The city contracts with XPEX to run its building department, and the city’s zoning official reviews projects first. For electrical work we pull whatever permit the job needs and arrange the official inspection. Our own inspection is different: a safety check of the whole house, written up for you.',
    },
    {
      q: 'I rent in Reading. Can I get the wiring inspected?',
      a: 'Put the request to your landlord in writing. About four in ten Reading homes are rented, and under ORC 5321.04 (A)(4) the owner is the one responsible for keeping supplied electrical fixtures safe and working. We inspect wiring, not leases, so the owner or the property manager schedules us.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Reading homes and rentals',
    band1Heading: 'Common Electrical Problems We Find in Reading Homes',
    commonSituations: [
      'A pre-war house with a fuse box still feeding the upstairs bedrooms',
      'A 1950s house running central air, an electric dryer and a home office on its original panel',
      'Two-prong outlets in the bedrooms of an older house that otherwise looks updated',
      'A duplex where the second unit’s circuits were added by a past owner without a permit',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Reset first, then decide. One GFCI can guard several outlets, often from a garage or bathroom, and once tripped it leaves them all dead until someone presses its button. A single breaker trip that holds afterward is no cause for worry. Swap the bulb; flip the wall switch. A newer home that cleared the buyer’s inspection rarely needs us. We’re worth booking for a Reading house with fuses, ungrounded outlets throughout, flicker on more than one circuit, or a sale or big appliance on the way after years without electrical work.',
      },
      {
        title: 'Inspection, Repair or Rewire in Reading?',
        body: 'Not the year on the deed but the findings decide. A loose connection, a breaker that won’t hold and missing GFCI protection by a sink are ordinary repairs. When a 1950s Reading panel can’t keep up with what the house now runs, or is failing, we replace it. Pre-war houses still wired with cloth-covered or knob-and-tube runs get a rewire quote next to a spot-repair quote. Any permit, we take care of. The written report is yours, and the work can go to whichever licensed electrician you pick.',
      },
    ],
    whyTitle: 'Why Reading Homeowners and Landlords Call Us',
    whyParagraph:
      'Most Reading homes were built before 1960, and four in ten are rented, so we write reports for owners and landlords alike. Our electricians are licensed and insured, pass background checks and drug tests, and quote first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Reading?',
        a: 'A flat price, told to you before we start. House size matters, and so does why you want it: a full report for a sale covers far more than checking whether the panel can take a heat pump or car charger. There’s no weekend overtime.',
      },
      {
        q: 'What’s covered when you inspect a Reading home?',
        a: 'We go breaker by breaker through the panel and check the grounding and bonding. Outlets get tested for ground and for GFCI or AFCI protection, we follow exposed wiring in the basement, and we confirm the smoke alarms have power. If a buyer, lender or insurer asks for a written report, you’ll have one.',
      },
      {
        q: 'Do I have to use you for any repairs?',
        a: 'Not at all. Any licensed electrician can bid from our report, since it’s yours. Pick us and the listed prices stand, financing is available, and if the job isn’t right we fix it or you don’t pay.',
      },
    ],
  },
};
