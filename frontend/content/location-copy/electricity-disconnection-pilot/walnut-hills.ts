import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walnutHills: LocationServiceCopy = {
  localParagraph:
    'Once a red tag goes on a service in Walnut Hills, the power stays off until a licensed electrician removes the hazard and an inspector approves, and only then does the utility reconnect. Census figures date nearly half the homes here to 1939 or earlier and show almost four in five rented, from Gilbert Avenue rowhouses to large apartment blocks by Peebles’ Corner. Services of that age carry original panels, heat-worn sockets and grounding far below present code, so diagnosis comes before a written price.',
  emergencyParagraph:
    'Cut off from its service, a building in Walnut Hills has no heat or sump pump, and with electricity heating most homes here, rooms chill fast. Keep clear of a torn-away meter box. If a wire comes down, phone 911 and Duke Energy Ohio before anyone else. Our electricians reach most such calls the same day, weekend days included.',
  commonIntro:
    'In the rowhouses, two-families and apartment buildings of Walnut Hills, a dead service usually starts with one of these:',
  localFaqs: [
    {
      q: 'What should a tenant in Walnut Hills do after a disconnection?',
      a: 'Tell the landlord in a dated letter or email, save a copy and describe any tag or notice taped to the door. ORC 5321.04 makes Ohio landlords responsible for keeping the wiring they provide safe and in working order. Since we fix wiring, not tenancies, the owner or management books the visit.',
    },
    {
      q: 'Who signs off repairs on pre-war buildings in Walnut Hills?',
      a: 'For Walnut Hills, as for the rest of Cincinnati, Inspection Bureau, Inc. (IBI) handles electrical permit review and the inspection. With pre-1940 buildings, their inspector looks at grounding and bonding along with the failed part, so we fix both in one go and ask for the inspection the day we schedule the repair.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnecting rowhouses and apartment buildings in Walnut Hills',
    band1Heading: 'Common Causes of Electricity Disconnection in Walnut Hills',
    commonSituations: [
      'A red tag on a rowhouse panel along Gilbert Avenue with conductors showing',
      'One scorched socket on the meter bank of an older apartment block near McMillan Street',
      'A flat where half the outlets died after a leg failed in the panel',
      'Rehab wiring in a two-family that nobody ever permitted or inspected',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Walnut Hills',
        body: 'Already without power, you need every fault found in one pass. We begin where the overhead wire lands on the brick, check the weatherhead and riser or mast, follow the cable to the meter can, then open the panel and test ground and bonding jumpers. That tells us whether we’re replacing a socket, a mast or a panel, and which permit applies. Older buildings draw close attention from the inspector, so grounding and bonding go to present code as part of the fix. We ask for the inspection when you book. Afterwards breakers return singly, the directory is written and you get notes, including wiring overdue for a rewire.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Walnut Hills',
        body: 'The utility’s equipment stops at the meter. Surprisingly for most people, the box holding it is the building owner’s, and so is everything upstream of it to the weatherhead, plus the panel inside. In Walnut Hills a red tag usually follows a dangerous panel, a missing ground or bare conductors, and it forbids anyone to energise. Covering the damage won’t shift it. What shifts it is a licensed electrician curing the cause and an inspector passing that work. Keep the tag or hanger, because it gives the reason. A locked or pulled meter stays alone, since tampering with one is a criminal offence in Ohio.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Walnut Hills',
        body: 'Between tenants, a rental in Walnut Hills can sit dead long enough that we test it before switching anything on, because a 1930s service may be well off current code. Sometimes a quick inspection is the whole job. Other times the panel has to go, and the owner hears that once we’ve looked. Whether we refit the old service or fit a correctly sized new one, the labour, permit and inspection bills match, so both prices reach the owner together.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Walnut Hills Choose Us for Disconnection Repair',
    whyParagraph:
      'Our licensed electricians see a dead service as urgent, carry out the repair the utility needs to see, file the permit and meet the inspector, with the price set in writing before any work.',
    sharedFaqs: [
      {
        q: 'How do you price disconnection repair in Walnut Hills?',
        a: 'We price by the fault. One socket on a meter bank and an entire building’s new service are nowhere near the same job, so diagnosis comes first. Then a flat rate goes in writing before work starts, our charges kept apart from the utility’s. Qualifying homeowners can finance.',
      },
      {
        q: 'When will my building in Walnut Hills have power again?',
        a: 'The repair itself often fits in a single day. The length of the outage usually depends on the inspection, which follows the inspector’s schedule. We ask for that visit while booking the repair, and nothing shortens the wait more than that.',
      },
      {
        q: 'Can I remove the meter lock myself in Walnut Hills?',
        a: 'No. The lock and meter are utility property, and under Ohio law tampering with either is a crime. Power was stopped because something on the service was found dangerous, so restoring it unrepaired puts current straight back into that hazard. We correct it, then arrange reconnection with the utility.',
      },
    ],
  },
};
