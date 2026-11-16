// DRAFT, not for publishing. Queensgate is a commercial and industrial district: about 24
// housing units (2020 Census blocks east of Mill Creek, an approximate split), and its own
// home types, ages and heating fuel are unverified. The tract figures describe Lower Price
// Hill, so none are used. The commonSituations below are not backed by Queensgate facts;
// an owner should confirm or replace them before this page goes live.
import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const queensgate: LocationServiceCopy = {
  localParagraph:
    'Very few people live in Queensgate. It is mostly warehouses, offices and commercial buildings, and the 2010 Census counted 142 residents. Our residential inspections here are for the small number of homes and apartments in the district, usually when a unit changes hands, a tenant moves in or a large appliance is added. We check the panel and wiring, write up what we find in plain terms, and price any fix before work starts, so you decide what gets done.',
  emergencyParagraph:
    'Some problems can’t wait: a burning smell, an outlet or switch plate that’s hot or scorched, buzzing, sparks, or a breaker that trips again as soon as it’s reset. Turn that breaker off. If there’s smoke or fire, get out and call 911. We reach most calls the same day, weekends included.',
  commonIntro:
    'The few homes in Queensgate vary a lot, so these are general findings rather than a local pattern:',
  localFaqs: [
    {
      q: 'I rent an apartment in Queensgate and the wiring seems unsafe. What should I do?',
      a: 'Tell the landlord or building manager in writing. Ohio’s ORC 5321.04 (A)(4) requires landlords to keep the electrical fixtures they supply in good and safe working order. We inspect wiring, not leases; the owner or manager books the visit.',
    },
    {
      q: 'Do you inspect commercial buildings in Queensgate?',
      a: 'This page covers homes and apartments. For a warehouse, office or other commercial building, call and tell us what the building is and why you need the inspection, and we’ll tell you plainly whether it’s work we take on before anything is booked.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Queensgate homes and apartments',
    band1Heading: 'Common Electrical Problems We Find in Queensgate Homes',
    commonSituations: [
      'A unit panel with no spare room for a new appliance circuit',
      'Missing GFCI protection in a kitchen or bathroom',
      'Extension cords run along walls in place of permanent wiring',
      'Smoke alarms with no power or dead backup batteries',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Try the simple checks first. A dead kitchen or bathroom outlet often means a GFCI tripped somewhere else, so press reset on each one. A breaker that trips once and holds after a reset is fine, and a dead lamp may be a bulb or a switched outlet. If your building is newer and a recent inspection found nothing, you don’t need us. Book us for flicker on several circuits, two-prong outlets throughout, cords used as wiring, or before a sale, a purchase or a large new appliance.',
      },
      {
        title: 'Inspection, Repair or Rewire in Queensgate?',
        body: 'The inspection decides. Loose connections, a failing breaker and missing GFCI protection are repairs. A panel that’s too small or failing is a panel replacement. Widespread old wiring is when we price a rewire beside spot repairs. Our inspection is a safety check of the whole unit with a written report. The official inspection is separate: it happens when work needs a permit, and the permit office’s inspector signs it off. We pull the permit and arrange that visit. You keep the report and choose what to fix.',
      },
    ],
    whyTitle: 'Why Queensgate Residents and Owners Call Us',
    whyParagraph:
      'Queensgate has few homes, and the ones here don’t fit a pattern. We inspect what’s actually there, explain it plainly, and quote a flat price first. Licensed, insured, background-checked technicians.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Queensgate?',
        a: 'We quote one flat price before we start, set by the size of the home and the reason you’re booking. A single apartment checked for a new tenant is a smaller job than a full review before a sale. No overtime fees.',
      },
      {
        q: 'What does the inspection cover?',
        a: 'The panel, breakers or fuses, grounding and bonding, outlets and switches, GFCI and AFCI protection, wiring we can see, and smoke alarm power. Everything goes into a written report you keep.',
      },
      {
        q: 'Do I have to hire you for the repairs?',
        a: 'No. The report is yours to give to any licensed electrician. We list a flat price for each item in case you want us to do the work, and nothing starts until you approve it.',
      },
    ],
  },
};
