import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const dent: LocationServiceCopy = {
  localParagraph:
    'Most Dent homes are recent enough that the wiring is usually sound. Census figures put the median house at 1995, and more than four in ten went up in 2000 or later. People here book us for a reason: selling or buying, finishing a basement, adding an EV charger or hot tub, or swapping an electric furnace for a heat pump, which matters in a place where about four in ten homes heat with electricity. We check the panel has room and write it up, prices included.',
  emergencyParagraph:
    'Newer houses fail too. A receptacle gone tan or warm, a dimmer that hums loudly, a pop and flash at a plug, an acrid smell, or a breaker that won’t survive a reset all need us today. Leave that breaker off. Smoke or flames: out of the house, then 911. Dent usually gets a same-day visit, weekends included.',
  commonIntro:
    'Dent is mostly newer houses, townhomes and condo buildings, so findings lean toward capacity and add-ons. These are common:',
  localFaqs: [
    {
      q: 'Our Dent house is from 2005. Do we need an electrical inspection?',
      a: 'Probably not unless something changed. If the buyer’s home inspector found nothing and you aren’t adding a big load, save your money. Book one before an EV charger, hot tub, basement finish or heat pump, so we can confirm the panel has room for it.',
    },
    {
      q: 'Is your visit the same as the IBI inspection in Dent?',
      a: 'No. Dent has no city government; it sits in Green Township, and permitted electrical jobs there are signed off by Inspection Bureau, Inc. (IBI). Their inspector looks at the one job. We look at the whole house and write it up for you. When our repair needs a permit, we file it and get IBI out.',
    },
    {
      q: 'I rent a condo in Dent. Who arranges an inspection?',
      a: 'The condo’s owner, who rents it to you. Section 5321.04 (A)(4) of the Ohio Revised Code makes that owner answer for the wiring and fixtures that came with the unit. A short email describing the fault, with a date, is enough to start. We inspect wiring, not leases, so your landlord sets up the visit.',
    },
  ],
  overrides: {
    ctaLine: 'Electrical inspections for Dent homes and condos',
    band1Heading: 'Common Electrical Problems We Find in Dent Homes',
    commonSituations: [
      'A 2000s house with no open slots left in the panel for an EV charger circuit',
      'A basement finished by a past owner with outlets and lights all on one circuit',
      'A hot tub on the deck wired without the GFCI protection it needs',
      'A condo owner who wants a written report in hand before listing',
    ],
    proseSections: [
      {
        title: 'Signs You Need an Electrical Inspection, and When You Don’t',
        body: 'Most dead outlets in a house built after 2000 trace back to a GFCI that tripped, and the one with the button may be in the garage while the dark outlet is on the patio. Press every reset you can find. A breaker that dropped once and stayed up afterward is fine, and a lamp plugged into a switched receptacle only needs the wall switch. Book us when breakers trip over and over, flicker shows up in different rooms, an earlier owner did their own wiring, or a large appliance is coming and nobody knows what the panel can spare.',
      },
      {
        title: 'Inspection, Repair or Rewire in Dent?',
        body: 'Rewiring almost never comes up in Dent. Houses from the 1980s on rarely need it, and the inspection usually ends in a short repair list or a clean report. Loose connections, a breaker that won’t hold, or missing GFCI and AFCI protection in a finished basement are repairs. If the panel is full and you want a charger or heat pump, the fix is a larger panel, which IBI inspects when we finish. You keep the report, and any licensed electrician can work from it.',
      },
    ],
    whyTitle: 'Why Dent Homeowners Call Us',
    whyParagraph:
      'Most Dent owners call before a project, not after a problem, and we tell you honestly when a house needs nothing. Our electricians are licensed and insured, background-checked and drug-tested, and the price comes first.',
    sharedFaqs: [
      {
        q: 'How much is an electrical inspection in Dent?',
        a: 'We quote a flat rate first. A condo costs less than a large house with a finished basement, and checking panel capacity for one new appliance is a smaller job than a full report for a sale. Saturday and Sunday visits carry no overtime fee.',
      },
      {
        q: 'What do you check?',
        a: 'In a Dent house we usually spend the most time on capacity: how loaded the panel is and what’s left for a new circuit. We also test breakers, the ground and bonding, receptacle protection, any wiring left exposed, and power to the smoke alarms. A buyer, lender or insurer asking for paperwork gets the written report.',
      },
      {
        q: 'If you find something, must I hire you?',
        a: 'No. The report is yours, and you can get the work quoted anywhere. If you go with us, the price is on the report before we start, financing is available, and we make it right or you don’t pay.',
      },
    ],
  },
};
