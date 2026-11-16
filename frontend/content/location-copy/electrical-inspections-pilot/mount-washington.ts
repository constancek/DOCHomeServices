import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountWashington: LocationServiceCopy = {
  localParagraph:
    'Mount Washington is mostly post-war housing, and that shapes what an electrical inspection here finds. Census figures show 30.7% of homes went up between 1940 and 1959 and another 29.0% in the 1960s and 1970s. Wiring from those years is usually grounded and sound, but panels were sized for far less than a modern kitchen, a heat pump or an EV charger, and bedrooms often share one circuit. We check the whole system, tell you what it can carry, and price changes before any work.',
  emergencyParagraph:
    'If the lights dim hard every time something kicks on, an outlet cover is scorched or hot, or a breaker won’t stay on for even a minute after reset, shut that breaker off and call us. A burning smell counts too. With smoke or flames, leave the house and dial 911. Most calls get same-day help, weekends included.',
  commonIntro:
    'Between the post-war houses and the apartment buildings, Mount Washington gives us a fairly steady list:',
  localFaqs: [
    {
      q: 'Can my Mount Washington house handle an EV charger or a heat pump?',
      a: 'Often, but check first. A 1950s or 1960s panel may have no spare space, or not enough capacity once the range, dryer and air conditioning are counted. We do a load check during the inspection and tell you whether you need a new circuit, a bigger panel or neither.',
    },
    {
      q: 'I rent in Mount Washington and an outlet sparks. Who handles it?',
      a: 'It falls to the property owner. Section 5321.04 (A)(4) of the Ohio Revised Code puts landlords on the hook for electrical fixtures that came with the unit. Stop using that outlet, kill its breaker and send the owner a dated note. Our job is the wiring, not the lease; whoever owns the building schedules us.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Mount Washington homes and rentals',
    band1Heading: 'Common Electrical Problems We Find in Mount Washington Homes',
    commonSituations: [
      'A 60-amp or 100-amp panel in a 1950s house with no room for a car charger',
      'Three bedrooms and a hallway all on one 15-amp circuit',
      'Open splices with no junction box in the attic over a later addition',
      'An apartment building where tenants run space heaters off power strips',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before you book, try the easy things. Push the reset button on any GFCI outlet in the bathroom, kitchen, garage or outside, since one of them can kill power to outlets in other rooms. If a breaker tripped once and holds after you flip it back, leave it. Check the bulb, and the wall switch, before blaming a fixture. You do want an inspection when there is no record of electrical work since the house was built, when lights flicker across several rooms, or when cords have become the wiring. Planning a heat pump, an addition or a charger in Mount Washington is a good reason too.',
      },
      {
        title: 'Inspection, Repair or Rewire in Mount Washington?',
        body: 'Most Mount Washington reports end in repairs, not a rewire. A loose connection, a breaker that has worn out or missing GFCI protection by a sink gets fixed on its own. A panel too small for what you’re adding, or one that runs hot, gets replaced. Rewiring is rare in houses this age and only comes up if the inspection finds the original wiring damaged across the house. The written report is yours, and you can hire anyone for the work. Permit work gets an official sign-off on top of our check; we pull the permit and arrange that inspection.',
      },
    ],
    whyTitle: 'Why Mount Washington Homeowners and Landlords Call Us',
    whyParagraph:
      '40.6% of Mount Washington homes are rented, so we work for owners and landlords alike. Every one of our technicians is licensed, insured, background-checked and drug-tested, and nothing starts without your approval.',
    sharedFaqs: [
      {
        q: 'How is an electrical inspection priced in Mount Washington?',
        a: 'By the job, as one flat rate we give you up front. A small ranch checked before a sale costs less than a large house where you also want a load calculation for new equipment. If repairs come out of it, those are quoted separately and wait on your yes.',
      },
      {
        q: 'What will you look at?',
        a: 'Your panel first: breakers, labeling, how full it is and how the service is grounded and bonded. Then outlets around the house with GFCI and AFCI protection tested, visible wiring in the basement, garage and attic, and the power feeding your smoke alarms. You get all of it in writing.',
      },
      {
        q: 'Am I stuck hiring you for the fixes?',
        a: 'Not at all. The paperwork is yours from the moment we leave, and a Mount Washington owner can pass it to whatever licensed contractor they trust. Prefer us? Every line item is priced flat in advance, you tick the ones to do, and panel jobs can be financed.',
      },
    ],
  },
};
