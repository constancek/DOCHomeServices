// DRAFT, not for publishing as is. English Woods has no privately owned homes:
// its housing is two CMHA properties (Marquette Manor, a 15-story tower under a
// gut renovation that started in January 2025, and Sutter View townhomes), every
// occupied unit is rented, and whether residents may hire outside contractors is
// unverified. The one-format page (booking form, cost and "do I have to use you"
// FAQs) is built for people who book and pay for their own inspection, and the
// only party who can book one here is the housing authority. Kept as a draft so
// the owner can decide whether to publish a tenant-only version or skip the town.
import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const englishWoods: LocationServiceCopy = {
  localParagraph:
    'Electrical inspections in English Woods are a matter for the Cincinnati Metropolitan Housing Authority, which owns the housing that remains. That is Marquette Manor, a 15-story tower being renovated unit by unit since January 2025, and the Sutter View townhomes and apartments. Census figures show every occupied home in the area is rented. Residents report electrical problems to CMHA management in writing; if the housing authority brings us in, we inspect and price repairs for them before any work.',
  emergencyParagraph:
    'A burning smell, a hot or scorched outlet, sparks, or a breaker that trips again as soon as it is reset should go to CMHA maintenance at once. Switch that breaker off if you can reach it. If there is smoke or fire, get everyone out and call 911. When management sends us, most calls are seen the same day, weekends included.',
  commonIntro:
    'In older public housing, these are the problems residents most often notice first:',
  localFaqs: [
    {
      q: 'I live at Marquette Manor or Sutter View. Can I book an electrical inspection?',
      a: 'No. CMHA owns the buildings and chooses who works on them. Report the problem to management in writing and keep a copy, and say clearly if an outlet is hot or sparking. Ohio’s ORC 5321.04 (A)(4) requires landlords to keep supplied electrical fixtures in good and safe working order. We inspect wiring, not leases.',
    },
    {
      q: 'What can I safely check myself before reporting a dead outlet?',
      a: 'Look for a tripped GFCI outlet in the kitchen or bathroom and press its reset button, since one GFCI can cut power to others. If a breaker in your unit has tripped once, reset it. If it trips again right away, leave it off and report it.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections in English Woods, booked through CMHA',
    band1Heading: 'Common Electrical Problems We Find in English Woods Apartments',
    commonSituations: [
      'Kitchen or bath outlets with no working GFCI protection',
      'Space heaters overloading a bedroom circuit',
      'Smoke alarms without power',
      'Outlets loosened or cracked by years of use',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Residents don’t need us for a tripped GFCI or a single breaker that resets and holds. Flicker on several circuits, warm outlets or a breaker that keeps tripping should go to management in writing. CMHA decides when a building needs an inspection.',
      },
      {
        title: 'Inspection, Repair or Rewire in English Woods?',
        body: 'That decision belongs to the housing authority, based on what an inspection finds. Marquette Manor is already part way through a full renovation.',
      },
    ],
    whyTitle: 'Why English Woods Residents Should Call Management First',
    whyParagraph:
      'Every home in English Woods is CMHA housing, so the housing authority books and pays for electrical work. Our licensed, insured electricians work for the owner when called.',
    sharedFaqs: [],
  },
};
