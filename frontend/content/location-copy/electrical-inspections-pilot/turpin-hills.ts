import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const turpinHills: LocationServiceCopy = {
  localParagraph:
    'Turpin Hills houses mostly date from the 1960s and 1970s, and that era shapes what we find. Census figures put the median home at 1977, with almost half built between 1960 and 1979. Panels from those years were sized before central air, a second refrigerator and a car charger were normal, and kitchens often got just a couple of counter circuits. The 1980s and 1990s homes usually pass with little to fix. You leave with a written report and a price for each item.',
  emergencyParagraph:
    'Book an inspection for slow problems, but phone us for heat or a burning odor at an outlet, a buzzing switch, sparks, a breaker that won’t hold, or lights that sink each time the air conditioner starts. Shut that breaker. Smoke or flame: everyone out, then 911. Most Turpin Hills calls see a technician that day, weekends too.',
  commonIntro:
    'Nearly every Turpin Hills call is a single-family house, and the findings follow the decade it was built. These come up most:',
  localFaqs: [
    {
      q: 'Who signs off permitted electrical work in Turpin Hills?',
      a: 'Because Turpin Hills sits in unincorporated Anderson Township, Inspection Bureau, Inc. (IBI) inspects electrical work done under permit. Their visit approves one job. Ours is broader, a look at the whole house for your benefit. If a fix needs a permit, we apply for it and line up the IBI visit.',
    },
    {
      q: 'We’re adding an EV charger to our Turpin Hills house. Do we need an inspection first?',
      a: 'It’s worth one if the house is from the 1960s or 1970s. A charger is a large load that runs for hours, and older panels here often have little room left once central air and an electric dryer are counted. We check capacity first and tell you plainly whether the panel can take it.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Turpin Hills houses',
    band1Heading: 'Common Electrical Problems We Find in Turpin Hills Homes',
    commonSituations: [
      'A full 1970s panel where someone doubled up breakers to squeeze in a new circuit',
      'Kitchen counters on one shared circuit that trips when the toaster and microwave run together',
      'Basement outlets and lights a past owner added without a permit',
      'No GFCI protection at the bathroom, garage or outdoor outlets in a house that has never been updated',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Before you book, push the reset button on every GFCI you can find, in the garage, the bathrooms, by the kitchen sink and outside; one trip can black out outlets in other rooms. A breaker that flipped once and stayed on afterwards is fine. A buyer’s home inspector who passed a 1990s Turpin Hills house was probably right. We’re worth calling when several rooms flicker at once, extension cords have quietly become permanent, or a 1970s house with untouched wiring is about to be sold or handed a big new load.',
      },
      {
        title: 'Inspection, Repair or Rewire in Turpin Hills?',
        body: 'Rewiring rarely comes up in Turpin Hills, because houses from the 1960s on generally have grounded circuits. What does come up: terminals that have worked loose, breakers past their best, no GFCI protection near water, and panels with nowhere to add a circuit. The first three get fixed. An overfull or failing panel gets replaced, and IBI checks our work afterwards. Once that’s done, the house usually has room for whatever you planned. Our recommendation follows the findings, not the build year. The report is yours, and nobody says you must hire us.',
      },
    ],
    whyTitle: 'Why Turpin Hills Homeowners Call Us',
    whyParagraph:
      'Almost every Turpin Hills home is owner-occupied, so our report goes to the person who lives with the wiring. You get a licensed, insured electrician who has passed background checks and drug tests, and a price before work.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Turpin Hills?',
        a: 'You get a single flat figure before we begin. A four-bedroom house with a finished lower level takes longer than a small ranch, and a full pre-sale report goes deeper than confirming capacity for a charger. Weekends carry no overtime charge.',
      },
      {
        q: 'What do you look at during the inspection?',
        a: 'Inside the panel, each breaker and the grounding and bonding. Out in the house, we test receptacles for ground and for GFCI or AFCI protection where it belongs, trace the wiring that’s visible in the garage, attic and basement, and check that the smoke alarms have power.',
      },
      {
        q: 'Must we use you for the repairs you find?',
        a: 'You’re free to take the report to any licensed electrician. If you choose us, the repair prices on it hold, and we stand behind the job: we make it right, or you don’t pay. A new panel can be financed.',
      },
    ],
  },
};
