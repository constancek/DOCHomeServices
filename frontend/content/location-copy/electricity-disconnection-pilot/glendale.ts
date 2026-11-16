import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const glendale: LocationServiceCopy = {
  localParagraph:
    'Getting a dead service back on in Glendale means clearing two hurdles, a licensed electrician’s repair to the equipment on the homeowner’s side and, for most jobs, an inspector’s approval of it. The village is old. More than half its homes predate 1940 in Census figures, so a meter socket cooked by decades of use, or grounding nobody has touched since it went in, is a regular find. You get our price on paper after the diagnosis.',
  emergencyParagraph:
    'In Glendale, a house without its service has a cold furnace, a dead air conditioner and a sump pump that won’t start. If a meter box is sagging off the wall, keep away from it. Call 911 about a wire on the ground before you call the utility. Most calls get an electrician that day, weekends too.',
  commonIntro:
    'Glendale is full of Italianate and Second Empire houses alongside later ones, and when their power is cut, it’s usually for one of these:',
  localFaqs: [
    {
      q: 'Does exterior service work need approval in the historic district in Glendale?',
      a: 'Inside the local historic district, the Planning and Historic Preservation Commission wants a certificate of appropriateness for any exterior change, and a replacement mast or meter box sits on the outside wall. We raise it with the village before starting, so the approval runs alongside the permit rather than holding it up.',
    },
    {
      q: 'Can an inherited older house in Glendale be reconnected?',
      a: 'In most cases, after a proper look. When a pre-war house has been without power for a long stretch, we treat the panel and grounding with suspicion, since either may be decades out of date. A short inspection settles some, and others need a new panel. Either way, you hear which and see the price before we begin.',
    },
    {
      q: 'Who arranges the repair if my rental in Glendale has no power?',
      a: 'It falls to the landlord. Tell them in writing and keep a copy for yourself. Under ORC 5321.04, an Ohio landlord has to keep the wiring and electrical fixtures that came with the rental in safe, usable condition. Whatever the lease says is between you and the owner, and our part is getting the service working again.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repairs for older homes in Glendale',
    band1Heading: 'Common Causes of Electricity Disconnection in Glendale',
    commonSituations: [
      'A meter socket on a pre-war house, blackened and cracking from years of heat',
      'Missing grounding on an untouched original service, enough for the utility to refuse power',
      'An estate house left empty so long that the utility asks for an inspection first',
      'Floodwater in a basement that reached the panel',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Glendale',
        body: 'Our first visit to a dark house here follows the power in from the street, starting where the utility’s wire is fastened to the house, through the weatherhead and down the mast, along the service cable, into the meter base and on to the panel. That trace settles the repair and the permit. The fix includes bringing grounding and bonding to present code, since an inspector checks both whatever the fault was. We ask for the inspection as the job is booked. Once the meter goes back, each breaker is turned on in turn, and you get written notes on wiring old enough to need a rewire.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Glendale',
        body: 'Ownership splits at the meter on a house in Glendale. The utility pulls and resets the meter, and everything around it, the socket box, mast, weatherhead, service cable and panel, belongs to the owner. A red tag on that gear means it won’t be energised, and there’s always a reason. Sweeping up the obvious hazard does nothing for the tag, while a licensed electrician’s correction and an inspector’s approval remove it. Keep whatever note was left, because it often names the fault. Pulled or locked meters are off limits, since Ohio treats tampering with them as a crime.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Glendale',
        body: 'A house in Glendale that has stood empty, perhaps waiting on an estate, needs more care before its service goes live, especially with original equipment still in place. We lay out two prices, one for putting back what was there and one for a correctly sized modern service. Labour, permit and inspection come to the same either way, which often makes the upgrade the better spend on an old house.',
      },
    ],
    whyTitle: 'Why Homeowners in Glendale Choose Us for Disconnection Repair',
    whyParagraph:
      'When the power is cut, the heat and sump pump go too, so we move quickly. Licensed electricians repair the service, handle the permit and any village approval, meet the inspector and confirm the price before work.',
    sharedFaqs: [
      {
        q: 'How much is disconnection repair in Glendale?',
        a: 'Whatever failed decides it, and a meter base is a much smaller bill than a whole new service. We find the fault, then put a single flat price in writing for your approval before any work. Utility charges never get folded into ours, and qualifying homeowners can finance.',
      },
      {
        q: 'When will my power be back on in Glendale?',
        a: 'Most of our repairs here are finished in a single day. The inspection timing then rests with the inspector, so we request it on the day you book, and for a house in the historic district we start the village approval in parallel.',
      },
      {
        q: 'Can I restore the power myself in Glendale?',
        a: 'No. Ohio law makes tampering with a utility meter a crime, locked or not, and the meter is the utility’s anyway. Where a fault caused the shutoff, the equipment has been judged unsafe, so it waits for our repair and a passed inspection, and then the utility turns it back on.',
      },
    ],
  },
};
