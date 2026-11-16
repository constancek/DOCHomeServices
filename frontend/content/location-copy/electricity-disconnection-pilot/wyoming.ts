import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wyoming: LocationServiceCopy = {
  localParagraph:
    'Decades of heat at a meter socket is one way service gets cut in Wyoming, and Duke Energy Ohio then keeps the meter out until our licensed electrician has repaired the owner’s side and, most of the time, an inspector has passed it. By Census figures, the median home here went up in 1954, and more than nine in ten predate 1980. Expect the inspector to study original panels and grounding closely in houses like these. You get a written price after we diagnose, before any work.',
  emergencyParagraph:
    'Inside a house in Wyoming with the meter pulled, the furnace or AC sits idle and the sump pump can’t run, which gets costlier by the day. A meter box sagging off brick or siding is one to walk around, not up to. Call 911 and the utility about a fallen line first. Most get a same-day visit, weekends included.',
  commonIntro:
    'Whether the house is Victorian, in the Village Historic District, or postwar, up in the hills of Wyoming, a cut service usually starts with one of these:',
  localFaqs: [
    {
      q: 'Does the city review meter or mast work on a historic house in Wyoming?',
      a: 'It may be. Wyoming’s permit page notes additional requirements for property in the Village Historic District, and a replacement mast, weatherhead or meter box changes the outside of the house. We ask the city before starting, then file the electrical permit with Inspection Bureau, Inc. (IBI), the inspector the city lists for electrical work.',
    },
    {
      q: 'Who owns the meter box on an older house in Wyoming?',
      a: 'You do, which surprises nearly everyone. The utility’s ownership stops at the line and the meter itself. The socket box that holds the meter belongs to the house, as do the mast, weatherhead, the wall brackets and the panel. So repairs there are the owner’s, and storm damage to them is between you and your insurer.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored for older homes in Wyoming after a disconnection',
    band1Heading: 'Common Causes of Electricity Disconnection in Wyoming',
    commonSituations: [
      'A meter socket on a 1950s house with melted plastic from decades of heat',
      'A pre-war house whose first panel was tagged because no ground could be found',
      'An inherited house that sat empty through a sale and needs its service checked',
      'A mast pulled from the roofline when a mature tree came down in a storm',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Wyoming',
        body: 'We read the whole service before quoting, because in a house from the 1950s a burned socket often has company. The electrician starts where the conductors enter at the roofline and follows them down to the ground rod, checking the meter base and panel. That walk shows whether you are paying for a mast, a socket or a panel, and which permit we pull. Grounding and bonding come up to current code during the repair, since the inspector tests them. The inspection request goes in the day you sign, and after the meter is reset, circuits return one by one, with a written note of anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Wyoming',
        body: 'Original panels, a ground wire that has rusted through and sockets cooked by years of current are the usual reasons a crew tags an older house in Wyoming, with exposed conductors after a storm close behind. Treat the tag as a standing order. Painting over or patching the visible damage leaves it in place, and only a licensed electrician’s correction plus an inspector’s pass removes it. Hang on to whatever the crew left, since it often spells out the fault. A meter that is locked or missing stays that way; under Ohio law tampering is a crime, and power on a faulted service just returns the hazard.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Wyoming',
        body: 'When a house in Wyoming has stood dead for a long stretch, perhaps through an estate or a slow sale, we go over it more carefully before the meter returns, since 1950s and older equipment can trail current code by a wide margin. Some need only a brief inspection and others a new panel. Our labour and the permit cost roughly the same either way, so you see one price to refit and one for a modern, right-sized service.',
      },
    ],
    whyTitle: 'Why Homeowners in Wyoming Choose Us for Disconnection Repair',
    whyParagraph:
      'A house without its service loses heat and the sump pump with it, and we respond that way. Our licensed electricians make the fix the utility is holding the meter for, handle permit and inspector, and quote in writing first.',
    sharedFaqs: [
      {
        q: 'How should I budget for disconnection repair in Wyoming?',
        a: 'A replaced socket and a complete new service are far apart in price, so the answer waits on the diagnosis. Once we know, you get a flat figure on paper and decide; no work begins before that. Any charge from the utility is the utility’s own and never lands on our invoice. Qualifying homeowners may finance.',
      },
      {
        q: 'How long does it take to get power back in Wyoming?',
        a: 'A single day usually covers our side of the work. The inspector’s calendar governs the rest. Getting that visit requested on the day you approve, rather than after we pack up, is the one move that really shortens the outage, and the reconnect gets scheduled behind it.',
      },
      {
        q: 'Am I able to refit the pulled meter on my own?',
        a: 'No. Refitting a pulled meter or breaking the utility’s lock is a criminal offence under Ohio law. Beyond that, whatever got the service disconnected is still in the house, so early power simply finds the same fault. The licensed repair and a passed inspection have to happen first.',
      },
    ],
  },
};
