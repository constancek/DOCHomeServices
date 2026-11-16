import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const maineville: LocationServiceCopy = {
  localParagraph:
    'Most Maineville houses are recent. Census figures put the median year built at 2004, with 54.5% built since 2000, so the wiring is usually up to a recent code. Inspections here are about plans: a sale, a purchase, a finished basement, a generator or an EV charger. Over half the homes heat with electricity, so the panel is often busier than owners expect. We test the system, hand you a written report, and price any fix before work starts.',
  emergencyParagraph:
    'Planned visits are the norm in Maineville, with exceptions. A burnt smell, sparks from a receptacle, a switch cover that’s hot or blackened, crackling inside a wall box, or a breaker that trips off after a reset all need attention now. Turn that breaker off. Smoke or fire: get outside, call 911. We’re usually there same day, weekends included.',
  commonIntro:
    'Maineville inspections are mostly on 1990s and 2000s houses, plus a handful of older homes in the village. What turns up:',
  localFaqs: [
    {
      q: 'Who do I talk to about permits for electrical work in Maineville?',
      a: 'Maineville’s own zoning office comes first for construction and remodeling, and the village points residents to the Warren County Building Department for building work. If repairs from our report need a permit, we handle the paperwork and arrange the inspection.',
    },
    {
      q: 'Is my Maineville panel big enough for an EV charger?',
      a: 'Often, but not always. In a home with electric heat, a heat pump or electric furnace may already use much of the panel. We add up the existing load, check open breaker spaces and tell you whether the charger fits, needs a smaller circuit, or needs a panel upgrade.',
    },
    {
      q: 'I rent an apartment in Maineville. Can I book an inspection?',
      a: 'Not directly; go through whoever manages the building. Write to your landlord or manager describing the problem. Under ORC 5321.04 (A)(4), Ohio landlords must maintain the electrical fixtures they provide in good and safe working order, and they’re the ones who book us. We inspect wiring, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Maineville homes and rentals',
    band1Heading: 'Common Electrical Problems We Find in Maineville Homes',
    commonSituations: [
      'A 2000s panel with spare spaces gone after a finished basement and a generator inlet',
      'A portable generator plugged into the house with no transfer switch or interlock',
      'Exterior and garage outlets missing weatherproof covers or GFCI protection',
      'One of the village’s older homes still on its original panel and ungrounded outlets',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'In a newer Maineville house, most electrical worries end at the GFCI. A dead outlet in the garage, bath or yard often traces back to one tripped GFCI that protects several outlets downstream; press its reset button. A breaker that trips once and stays on after a reset is fine. Book us if breakers trip repeatedly, lights flicker across more than one circuit, outlets feel warm, or a sale, purchase or big appliance is coming. When a buyer’s home inspector found nothing on a recent house, you probably don’t need us.',
      },
      {
        title: 'Inspection, Repair or Rewire in Maineville?',
        body: 'The inspection results settle it. In Maineville’s 1990s and 2000s homes we mostly write up repairs: a loose connection, a breaker that’s worn, a missing GFCI, a generator hooked up without a transfer switch. Panel upgrades come up when electric heat and new loads crowd the box. Rewiring is a question only for the village’s few prewar houses, and then we quote it beside spot repairs. Keep the report and hire whoever you like. If a permit is needed, we pull it and set up the official inspection.',
      },
    ],
    whyTitle: 'Why Maineville Homeowners and Landlords Call Us',
    whyParagraph:
      'Maineville mixes owner-occupied subdivisions with apartment buildings, and about one home in four is rented. We send licensed, insured electricians who have passed background checks and drug tests, and quote a flat rate first.',
    sharedFaqs: [
      {
        q: 'What does an electrical inspection cost in Maineville?',
        a: 'A flat rate, given to you up front. It reflects the square footage and the purpose, since a pre-sale report and a check before adding a generator aren’t the same job. If we find repairs, they’re quoted on their own and nothing starts without your go-ahead.',
      },
      {
        q: 'What’s included in a Maineville electrical inspection?',
        a: 'We go through the panel, breakers or fuses, grounding and bonding, outlets, GFCI and AFCI protection, all the wiring that’s visible, and power to the smoke alarms. Generator hookups and any circuits added after the house was built get a close look too.',
      },
      {
        q: 'After the inspection, do the repairs have to be done by you?',
        a: 'They don’t. The report is yours, and any licensed electrician can work from it. Some Maineville owners have us do the fixes, others shop it around. If a buyer, lender or insurer asks for a written report, you’ll have one on file.',
      },
    ],
  },
};
