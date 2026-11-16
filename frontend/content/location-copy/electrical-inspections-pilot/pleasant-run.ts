import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const pleasantRun: LocationServiceCopy = {
  localParagraph:
    'No home in Pleasant Run predates 1940, Census figures show, and most went up in the 1960s and 1970s, with a newer group built since 2000. That makes knob-and-tube unlikely, and inspections focus on capacity. Nearly half the homes heat with electricity, so an older panel may already be close to full before an EV charger or addition goes in. In newer houses the wiring is usually sound and people book before a sale. You get written findings and a price before any work.',
  emergencyParagraph:
    'Skip the booked inspection and get us out sooner when a receptacle or switch runs hot, hums or turns brown, you notice a burning odor, something sparks, or a breaker drops again the second it’s reset. Leave that breaker off. Flames or smoke: out of the house, then 911. Pleasant Run calls usually get a same-day visit, weekends too.',
  commonIntro:
    'Pleasant Run inspections are mostly about what a 1970s panel can still take on. What we tend to find:',
  localFaqs: [
    {
      q: 'Who handles electrical permits in Pleasant Run?',
      a: 'Pleasant Run sits in unincorporated Colerain Township, so the Inspection Bureau, Inc. (IBI) issues electrical permits and inspects the finished work. That official inspection covers one permitted job. Ours is a safety check of the whole house, with a written report, and we pull the permit when a repair needs one.',
    },
    {
      q: 'We’re adding a heat pump to our Pleasant Run house. Should we get an inspection first?',
      a: 'It’s worth it if the house is from the 1960s or 1970s or already has electric heat. We check whether the panel has room and capacity for the new circuit, and whether the existing wiring is in shape to carry more. Newer houses usually just need a quick load check.',
    },
    {
      q: 'I rent out a house in Pleasant Run. What are my electrical duties?',
      a: 'Under ORC 5321.04(A)(4), an Ohio landlord keeps the electrical fixtures that come with the house in good and safe working order. Ask tenants to put problems in writing so there’s a record, then book the inspection or repair yourself. We inspect wiring, not leases; lease disputes are for your attorney.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Pleasant Run homes',
    band1Heading: 'Common Electrical Problems We Find in Pleasant Run Homes',
    commonSituations: [
      'A 1970s panel already carrying electric heat, with no spaces for a car charger',
      'Outdoor outlets and garage circuits that predate GFCI requirements',
      'Old heating circuits left live and unlabeled after a system was replaced',
      'A 2000s-built home being sold, with the buyer asking for an electrical report',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Plenty of power problems in Pleasant Run end without us. If outlets in a bathroom, the kitchen or the garage go dead, find the tripped GFCI, which may be in another room, and reset it. One breaker that trips, then holds once reset, was probably overloaded. A newer home that passed the buyer’s inspection without electrical notes rarely needs us. Book one when several circuits flicker, a breaker trips whenever the electric heat comes on, extension cords have become permanent, or you’re adding a heat pump, hot tub or EV charger to a 1970s panel.',
      },
      {
        title: 'Inspection, Repair or Rewire in Pleasant Run?',
        body: 'With no pre-war housing, full rewiring is rare in Pleasant Run, and the inspection decides the rest. Common repairs include a loose connection at a receptacle, a breaker that no longer trips properly, or a bathroom with no GFCI protection. The panel is the bigger call. If electric heat and newer appliances have filled it, or it shows rust or heat damage, we price a replacement. Should we find older wiring spread through a house, rewiring gets priced next to the repairs. The report is yours, and the choice of electrician is too.',
      },
    ],
    whyTitle: 'Why Pleasant Run Homeowners Call Us',
    whyParagraph:
      'Most Pleasant Run homes are owner-occupied houses where the electrical question is capacity, not age. Our technicians are licensed, insured, background-checked and drug-tested, and no repair starts until you agree to the flat-rate price.',
    sharedFaqs: [
      {
        q: 'What should I expect to pay for an electrical inspection in Pleasant Run?',
        a: 'A flat rate, which we give you before starting. House size and the purpose of the inspection drive it: a pre-purchase look at everything costs more than confirming one panel can take a new heat pump. Repair prices come separately, and you approve them first.',
      },
      {
        q: 'Which parts of the house does an inspection cover?',
        a: 'We open the service panel and go breaker by breaker, test the grounding, check bonding on gas and water lines, then work through receptacles and switches room by room. GFCI and AFCI protection, exposed wiring in the garage, basement and attic, and smoke alarm power all get noted in a ranked written report.',
      },
      {
        q: 'Is the repair work tied to the inspection?',
        a: 'No, the two are separate. You can take our report to another licensed electrician, use it in a sale, or simply keep it. If we do the repairs, each one is quoted at a flat rate and you choose which go ahead.',
      },
    ],
  },
};
