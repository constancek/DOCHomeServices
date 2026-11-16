import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const indianHill: LocationServiceCopy = {
  localParagraph:
    'In Indian Hill, wiring age changes sharply from one driveway to the next. Census figures show about one home in nine built before 1940 and more than one in five built since 2000, nearly all of them single houses on large lots. The older ones can still hide cloth-covered wiring behind later additions; the newer ones are usually sound and get inspected before a sale or a big new load. Either way, we test the whole system and put the findings in writing before quoting any repair.',
  emergencyParagraph:
    'Some signs can’t wait for a scheduled visit: a burning or hot-plastic smell, a buzzing or scorched outlet, sparks, or a breaker that won’t stay on after a reset. Cut that breaker and leave it. Smoke or fire means getting out and calling 911. Indian Hill calls usually get a technician the same day, Saturdays and Sundays too.',
  commonIntro:
    'Indian Hill inspections mostly turn up problems in places people rarely look: old circuits that were extended rather than replaced, and panels that were never resized. The usual findings:',
  localFaqs: [
    {
      q: 'Who inspects permitted electrical work at an Indian Hill address?',
      a: 'We pull the permit and arrange the inspection, so you don’t have to chase it. That official sign-off covers the specific job. Our inspection is different: a safety check of the whole house with a written report, useful before you sell or add on.',
    },
    {
      q: 'Our Indian Hill house has additions from different decades. Does that matter?',
      a: 'It often does. Each addition may have been wired to the code of its day and tied into whatever circuit was handy. We trace where the old and new wiring meet, check that the panel can carry the combined load, and note any splices left without a junction box.',
    },
    {
      q: 'I rent out an Indian Hill house. What do I owe the tenant on the electrical side?',
      a: 'Ohio law (ORC 5321.04(A)(4)) says landlords must keep the electrical fixtures they supply in good and safe working order. An inspection between tenants gives you a written record of the condition. We inspect wiring, not leases, so questions about the lease itself go to your attorney.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Indian Hill houses, old and new',
    band1Heading: 'Common Electrical Problems We Find in Indian Hill Homes',
    commonSituations: [
      'Cloth-covered wiring left in the original part of a pre-war house after the additions were rewired',
      'A main panel plus several subpanels added over the years, some with no clear labels',
      'Outdoor lighting and landscape circuits without GFCI protection',
      'A newer house where the buyer wants a written electrical report before closing',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'A dead outlet in a bathroom or garage is usually a GFCI that tripped somewhere else on the circuit; find it and press reset before calling anyone. A breaker that trips once and holds is normally an overload, and a single flickering lamp is usually the bulb or the lamp switch. If the buyer’s home inspector found nothing in a house built since 2000, you may not need us at all. Book an inspection for a pre-1960 Indian Hill house with no recent electrical work, flickering across several rooms, an old fuse box, or plans for an EV charger or hot tub.',
      },
      {
        title: 'Inspection, Repair or Rewire in Indian Hill?',
        body: 'Big houses don’t automatically need big electrical work. What the inspection finds sets the answer. Loose terminations, a worn breaker and a bathroom without GFCI protection are ordinary repairs. A panel that is undersized for the house as it stands today, or showing heat damage, gets priced as a panel replacement. Where cloth or knob-and-tube wiring still runs through the original rooms, we price rewiring those rooms next to spot repairs so you can compare. You keep the report and decide, and nobody is obliged to hire us.',
      },
    ],
    whyTitle: 'Why Indian Hill Homeowners Call Us',
    whyParagraph:
      'Almost every Indian Hill home is a single house its owner lives in, and the houses range from pre-war to brand new. Licensed, insured technicians who pass background checks and drug tests do the work, at prices you approve first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost for an Indian Hill house?',
        a: 'The price is a flat rate, quoted before we start. A large house with subpanels takes more checking than a small one, and a pre-purchase inspection covers more ground than a check for one new appliance. Repairs are quoted separately and wait for your approval.',
      },
      {
        q: 'What do you check during the inspection?',
        a: 'We open the panel and look at each breaker or fuse, then test grounding and bonding. We check outlets and switches room by room, confirm GFCI and AFCI protection where the code calls for it, look over exposed wiring, and see how the smoke alarms are powered.',
      },
      {
        q: 'If you find problems, do I have to use you to fix them?',
        a: 'No, the report is yours to keep and use. Some owners give it to their own electrician; buyers often take it to the seller. If you’d like us to handle the repairs, each one gets a flat-rate price and you choose what goes ahead.',
      },
    ],
  },
};
