import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const springdale: LocationServiceCopy = {
  localParagraph:
    'Springdale is split between 1960s and 1970s houses and large apartment complexes, with about four in ten households renting, Census figures show. Many of those units and houses rely on electric heat, so panels from that era are often near their limit. Owners book inspections before a sale or a heat pump; landlords book them between tenants or after a complaint. Our inspection ends in a written report with every repair priced before you decide.',
  emergencyParagraph:
    'Call right away for a burning odor, an outlet or switch that buzzes, feels hot or shows scorch marks, sparks, or a breaker that won’t stay reset. Turn that breaker off and keep it off. Smoke or fire means everyone out and a call to 911. We get to most Springdale calls the same day, Saturdays and Sundays as well.',
  commonIntro:
    'Springdale findings depend on whether we’re in a single house or an apartment unit, but the same few problems turn up in both:',
  localFaqs: [
    {
      q: 'Who inspects permitted electrical work in Springdale?',
      a: 'Springdale’s own Building Department. The city takes one general permit application for building, mechanical and electrical work, and its inspectors check the result. That’s different from our inspection, which looks over the whole house and gives you a written report. When a repair needs a permit, we apply for it.',
    },
    {
      q: 'I manage apartments in Springdale. Can you inspect several units at once?',
      a: 'Yes. We can work through units on one visit and give you a report for each, which helps when tenants change over. Ohio law (ORC 5321.04(A)(4)) requires landlords to keep supplied electrical fixtures in good and safe working order. We inspect wiring, not leases.',
    },
    {
      q: 'I rent in Springdale. Can I hire you to inspect my unit?',
      a: 'Report the problem to your landlord or management in writing; they arrange inspections and repairs for the building. If an outlet is hot, buzzing or sparking, switch off its breaker and tell them straight away. Owners and managers book with us directly.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Springdale homes and apartments',
    band1Heading: 'Common Electrical Problems We Find in Springdale Homes and Apartments',
    commonSituations: [
      'Apartment kitchens with one or two circuits feeding every countertop appliance',
      'Electric heat circuits on breakers that run warm to the touch',
      'Townhouse panels with missing knockout covers and unlabeled breakers',
      'Houses where the original two-prong outlets were swapped for three-prong ones with no ground',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Check three things before booking: every GFCI outlet, the breaker panel, and the bulb. One tripped GFCI in a kitchen, bath, garage or outdoor spot can kill several outlets, and a breaker that resets and stays on was likely just overloaded. A light on a wall switch might be wired to a lamp outlet. Bring us in when several circuits flicker, outlets are two-prong throughout, extension cords serve as permanent wiring, or you’re selling or buying a Springdale house that hasn’t had electrical work in years. Landlords often book between tenants.',
      },
      {
        title: 'Inspection, Repair or Rewire in Springdale?',
        body: 'Go by the report, not the build date. In Springdale’s 1960s and 1970s houses and apartments, most findings are repairable: a burned receptacle, loose lugs in the panel, a breaker past its life, outlets near water with no GFCI. A panel that can’t carry electric heat and a modern kitchen together becomes a panel replacement. Rewiring only gets quoted when older wiring runs through most of a building, and we show it beside the spot repairs. For a landlord with several units, the report shows which ones need attention first.',
      },
    ],
    whyTitle: 'Why Springdale Homeowners and Landlords Call Us',
    whyParagraph:
      'Springdale has a large share of renters, and landlords and owners alike need straight answers about older panels. Our technicians are licensed, insured, background-checked and drug-tested, and you approve the flat-rate price before work begins.',
    sharedFaqs: [
      {
        q: 'What does a Springdale electrical inspection cost?',
        a: 'You get a flat rate before we begin. It’s set by the size of the home or unit and the reason you’re booking, since a whole-house check for a sale takes more than a panel check for a new heat pump. Repairs come with separate prices for you to approve.',
      },
      {
        q: 'What do you look at during an inspection?',
        a: 'Panel, breakers or fuses, grounding and bonding come first. Then we test outlets and switches, confirm GFCI and AFCI protection, look at any wiring in the open, and check that the smoke alarms have proper power. The written report lists what’s fine, what needs fixing, and what’s urgent.',
      },
      {
        q: 'Do I need to hire you for the fixes?',
        a: 'No. The report is yours and works with any licensed electrician. Landlords sometimes hand it to their usual contractor; owners selling a house may give it to the buyer. If you want us, every repair comes with a flat-rate price and you choose which to do.',
      },
    ],
  },
};
