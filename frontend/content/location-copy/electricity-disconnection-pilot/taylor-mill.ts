import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const taylorMill: LocationServiceCopy = {
  localParagraph:
    'Duke Energy Kentucky or Owen Electric, depending on the street, will leave a disconnected house in Taylor Mill without power until our licensed electricians have repaired the owner’s part of the service and, nearly always, an inspector has approved it. Four in five homes here are detached, per Census figures, and most went up in the 1940s and 1950s or in the 1980s and 1990s. The first group often keeps its original panel; the second gets cut more often after storm damage. Diagnosis comes before a written price.',
  emergencyParagraph:
    'When the service is cut, the furnace or air conditioner goes off, the sump pump can’t run, and the cost of waiting climbs. Stay well clear of a meter box sagging from the siding. A line down means ringing 911 and the utility first. We get to most calls in Taylor Mill on the day, weekends too.',
  commonIntro:
    'Across the old and new detached houses of Taylor Mill, the cause is usually one of these:',
  localFaqs: [
    {
      q: 'A storm damaged the service on my house in Taylor Mill. Is that the utility’s job?',
      a: 'Not usually. From the meter box up through the riser and service head, and in through the entrance cable to the panel, it all belongs to the homeowner, so storm damage there is the owner’s repair and often goes to insurance. The utility only disconnects and reconnects. We repair it, handle permit and inspection, and arrange the reconnect.',
    },
    {
      q: 'Why does half my house in Taylor Mill have no power?',
      a: 'Because a house is fed on two legs, and losing one, out at the drop or inside the panel, takes roughly half the circuits with it. Don’t put off the call. The furnace, fridge and anything else with a motor or control board can be damaged by running on half a service.',
    },
  ],
  overrides: {
    ctaLine: 'Power back on for older and newer houses in Taylor Mill',
    band1Heading: 'Common Causes of Electricity Disconnection in Taylor Mill',
    commonSituations: [
      'A limb through the overhead drop that bent the riser and pulled the meter box loose',
      'A 1950s house with its first panel, tagged for missing grounding',
      'Melted plastic around the meter jaws on a house built in the 1980s or 1990s',
      'An inherited house left unpowered so long that its service has to be checked',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Taylor Mill',
        body: 'With the power gone, we walk the service from the roof edge to the basement. Up top that’s the riser, service head and entrance cable; lower down it’s the meter socket, then the panel, ground rods and bonding. The fault we find decides between riser work, a new socket or a panel, and the permit follows from that. Grounding or bonding below current code gets corrected while the failure is being fixed, since an inspector will check. Permit and inspection are lined up with the repair. Once the meter is back, circuits are powered one by one, the panel is labelled, and you get anything worth watching in writing.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Taylor Mill',
        body: 'A utility crew tags a service when it finds a panel past trusting, a ground that was never made or conductors in the open. The tag is an order to keep it off, not a waiting period, and patching what you can see won’t remove it. It comes down once our licensed electrician corrects the fault and an inspector signs. Keep the tag and any door hanger for us. The meter box, riser and panel are the owner’s, but a pulled or locked meter is not to be touched. Kentucky law makes that a criminal offence, and on a faulted service it would send power into gear already found unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Taylor Mill',
        body: 'Inherited 1950s houses that sat unpowered a long time need more caution than a home lived in last month, because the panel and ground may be decades behind current code. One quick inspection is enough for some. Others turn into a panel replacement, and we’ll tell you which after looking. A straight refit costs the same labour, permit and inspection as a correctly sized modern service, so the quote carries both.',
      },
    ],
    whyTitle: 'Why Homeowners in Taylor Mill Choose Us for Disconnection Repair',
    whyParagraph:
      'A house in Taylor Mill with the power cut is an emergency job for us. Our licensed electricians repair what the utility objected to, handle the permit, stand with the inspector and agree the cost before they start.',
    sharedFaqs: [
      {
        q: 'What will disconnection repair cost at my house in Taylor Mill?',
        a: 'It turns on what broke. Straightening a storm-bent riser and fitting a new meter box is a shorter day than replacing the whole service. We diagnose first, then write down one flat rate, and anything the utility charges is billed by them, not folded into ours. Qualifying homeowners can finance it.',
      },
      {
        q: 'How soon can my power be back on in Taylor Mill?',
        a: 'On our end, a single day often covers it. The slower step is the inspection, which keeps the inspector’s calendar, so we book it alongside the repair. Doing that up front shortens your time in the dark more than anything we can do.',
      },
      {
        q: 'Can I cut the meter lock and reconnect the power myself?',
        a: 'No. The lock and meter are the utility’s, and in Kentucky tampering with them is a criminal offence. If a fault caused the cut, you’d also be feeding power into the equipment that failed. Reconnection follows the inspection.',
      },
    ],
  },
};
