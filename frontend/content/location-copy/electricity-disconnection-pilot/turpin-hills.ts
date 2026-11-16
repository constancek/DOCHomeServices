import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const turpinHills: LocationServiceCopy = {
  localParagraph:
    'Once the utility has cut a house in Turpin Hills, it holds off restoring power until we’ve fixed whatever the owner is responsible for, from the roofline down to the breakers, and usually until an electrical inspector has passed it. Census figures put the median build year at 1977, and nearly nine in ten homes are detached, so plenty run on the meter can and breaker box the builder put in. We pin down the failure, then you see a fixed figure on paper before a tool comes out.',
  emergencyParagraph:
    'No electricity means no furnace or AC, and the sump pit fills with nothing to empty it. If the meter can is hanging off the siding, keep everyone clear of it. A wire down in a yard is a call to 911 and to the utility first. We arrive the same day on most calls, Saturdays and Sundays too.',
  commonIntro:
    'Behind most dead services we’re called to in Turpin Hills sits one of these four:',
  localFaqs: [
    {
      q: 'Which office inspects the repair before Turpin Hills gets power back?',
      a: 'This part of Anderson Township is unincorporated, so electrical work is permitted and inspected through Inspection Bureau, Inc. (IBI). We put in the permit the day the job is scheduled and ask IBI for an inspection slot at the same time, so the paperwork is moving while we work.',
    },
    {
      q: 'Why are only some rooms dark in my house in Turpin Hills?',
      a: 'Your service arrives on two hot legs, and losing one at the drop or in the panel kills about half the circuits. Don’t live with it for long. Motors and circuit boards in the furnace, fridge or washer can see strange voltage on a half-fed service, so we treat it as a same-day call.',
    },
  ],
  overrides: {
    ctaLine: 'Power back for 1970s and 1980s houses across Turpin Hills',
    band1Heading: 'Common Causes of Electricity Disconnection in Turpin Hills',
    commonSituations: [
      'A scorched meter can from the 1970s that the utility refuses to energise again',
      'A builder-grade breaker box tagged after a service call turned up live parts left uncovered',
      'A deck, basement or addition wired with no permit and flagged during a home sale',
      'Storm damage that tore the riser and meter can off the siding',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Turpin Hills',
        body: 'Picture the job as following the electricity in from the street. We start at the service head and riser on the outside wall, follow the entrance cable into the meter can, then open the breaker box and trace the ground rods and bonding jumpers. Somewhere along that path is the reason the utility walked away, and finding it tells us the scope and the permit. We fix it and bring the grounding up to today’s code while we’re there, since the inspector checks it anyway. After the meter is reinstalled, breakers go on one by one, every circuit gets a label, and anything suspect goes on a written note.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Turpin Hills',
        body: 'In these 1970s and 1980s houses, a red tag usually traces to a breaker box nobody should trust, a missing ground, live parts left uncovered, or a remodel that skipped the permit. Treat the tag as a hard stop. Tidying up what looks wrong won’t get it removed; only a proper correction followed by an inspector’s approval does. Save it, along with any door hanger, because it tells us where to start. And leave a locked or pulled meter exactly where it is. Ohio prosecutes tampering with utility meters, and forcing one back energises gear already marked dangerous.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Turpin Hills',
        body: 'A house that sat unsold and unpowered for a long while gets a slower, more careful look before anyone energises it. Sometimes that look is all it takes. Other times it uncovers a breaker box ready to retire, and you hear that once we’ve seen it. Labour, permit and inspection cost the same for an identical swap as for a correctly sized new service, so the quote shows both.',
      },
    ],
    whyTitle: 'Why Homeowners in Turpin Hills Choose Us for Disconnection Repair',
    whyParagraph:
      'A house with no power counts as an emergency in our book. Our licensed electricians fix what the utility flagged, pull the permit, stand with the inspector and settle the price with you before starting.',
    sharedFaqs: [
      {
        q: 'What should I budget for a disconnection repair in Turpin Hills?',
        a: 'It swings with the failure. Replacing a scorched meter can is a short job, while a full service rebuild is a long one. You get the flat price in writing after diagnosis and before any work, with anything the utility bills kept off our figure. Financing exists for qualifying homeowners.',
      },
      {
        q: 'How many days might we go without power in Turpin Hills?',
        a: 'Our part is usually a single day of work. The calendar that matters belongs to the inspector, so we request the visit when we schedule the repair, not when we finish. That one habit trims more waiting than anything else we do.',
      },
      {
        q: 'If the utility locked the meter, can I open the lock myself?',
        a: 'No. That lock is utility property, and Ohio treats meter tampering as a crime. Even setting the law aside, a service shut off for a fault would come back live into the very equipment that failed. Once the repair is passed, the utility reconnects.',
      },
    ],
  },
};
