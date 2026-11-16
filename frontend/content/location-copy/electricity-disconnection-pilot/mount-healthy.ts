import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountHealthy: LocationServiceCopy = {
  localParagraph:
    'Mount Healthy is a separate city north of Cincinnati, and a service there that failed inspection, or turns out to have been wired with no permit, stays dark until a licensed electrician corrects it and an inspector signs off. Census figures put the median house at 1956, with about half the homes rented. Panels and grounding from the 1950s often trail present code, so one failed item can turn into several. Our findings and a written price reach you before anything is touched.',
  emergencyParagraph:
    'A disconnected house goes cold or hot within a day, and the basement sump stays off, so the costs pile up. Children and pets belong indoors, nowhere near a meter box that has come away from the wall. Downed wire calls for 911 first, then Duke Energy Ohio. Same-day electricians cover most of these calls, Saturdays and Sundays too.',
  commonIntro:
    'Among the mid-century houses, rentals and mobile homes of Mount Healthy, a cut service most often follows one of these:',
  localFaqs: [
    {
      q: 'The last owner did electrical work without a permit on my house in Mount Healthy. What happens now?',
      a: 'Unpermitted work never had an inspector look at it, so the utility has no approval on file to go by. We open up what was done, correct anything short of code, file the permit and book the inspection. After it passes, the utility gets the paperwork it needs and we schedule the reconnect.',
    },
    {
      q: 'When a rented house loses power in Mount Healthy, who arranges the repair?',
      a: 'Your landlord does. Send them a dated note describing the notice or the dead outlets, and keep your own copy. Ohio’s landlord law, ORC 5321.04, leaves electrical upkeep of what the owner supplied with the owner. Our side is the wiring, and anything about rent or the lease is between the two of you.',
    },
  ],
  overrides: {
    ctaLine: 'Failed inspections and cut services put right for houses in Mount Healthy',
    band1Heading: 'Common Causes of Electricity Disconnection in Mount Healthy',
    commonSituations: [
      'A basement finished years ago with wiring that never saw a permit',
      'A 1950s panel tagged for missing grounding while the house was being sold',
      'A mobile home service knocked crooked when a vehicle clipped it',
      'A rental left dead between tenants long enough to need a full check',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Mount Healthy',
        body: 'Folks who call with the lights out mostly want the sequence, so here it is. We begin by examining every piece of the service, roof bracket and weatherhead, the mast, the cable feeding the meter base, then the panel, ground rod and bonding. What turns up there picks the repair, be it mast, meter base or panel, and the permit follows. Grounding is brought to present code while we’re working, since inspectors examine it on every service job. Permit filing and the inspection request happen the day you book. When the meter returns, breakers come up singly and you receive a short written list of anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Mount Healthy',
        body: 'A failed inspection is a frequent reason for a tag here, alongside unsafe panels, absent grounding and bare conductors. The tag means nobody energises that service, and sweeping up the scorched bits won’t change it. A licensed correction and an inspector’s signature will. The utility’s equipment ends at the drop and the meter, and from the meter enclosure inward everything belongs to the owner, mast and panel included. Show us whatever hanger or note was left, since the reason is usually on it. A locked meter is for the utility to open, and tampering with one is a criminal act in Ohio.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Mount Healthy',
        body: 'Rentals between tenants and houses waiting on a buyer can sit dead a long while, and those get checked with care before power returns, more so where the panel is original. A short inspection settles some. Others need a new panel, and we’ll say so once we’ve looked. Since labour, permitting and inspection cost about the same either way, you see a refit price and a correctly sized new service on the same page.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Mount Healthy Choose Us for Disconnection Repair',
    whyParagraph:
      'Losing power means losing heat, so our licensed electricians come quickly. They correct whatever the utility flagged, take care of the permit and the inspection, and fix one flat price with you before a tool comes out.',
    sharedFaqs: [
      {
        q: 'What does it cost to restore power to a disconnected house in Mount Healthy?',
        a: 'A lot rides on what failed. Correcting a few code items found at inspection is a smaller day than replacing the whole service. Once we’ve diagnosed it, you receive a written flat rate before work begins, and the utility bills its own charges rather than adding them to ours. Qualifying homeowners may finance it.',
      },
      {
        q: 'How long does disconnection repair take in Mount Healthy?',
        a: 'Often our part fits inside one working day. The inspection is the slow step, since it depends on when an inspector is free. Requesting it together with the repair, instead of waiting until we finish, is what shortens the time a family spends without power.',
      },
      {
        q: 'Can I restore the power myself in Mount Healthy?',
        a: 'No. The utility fitted that lock, and removing it yourself breaks Ohio law. On top of that, whatever caused the cut is still sitting in the service, and switching it back on hands current to the fault. We correct it and handle the reconnect paperwork.',
      },
    ],
  },
};
