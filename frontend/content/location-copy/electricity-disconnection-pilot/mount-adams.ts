import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const mountAdams: LocationServiceCopy = {
  localParagraph:
    'Scorched plastic around the meter is a familiar sight on a cut service in Mount Adams, and the utility keeps it dark until a licensed electrician swaps that socket and an inspector approves it. Half the homes on this hill date from 1939 or before, per Census figures, and two in every three are let to tenants, mostly in doubles and small apartment buildings. Decades of heat cook those sockets, and the grounding beside them seldom meets today’s code. Our written number comes after the fault is traced.',
  emergencyParagraph:
    'A cut service lets the house go cold while the sump pump sits idle, and costs climb daily. Keep everyone clear of a meter box that has peeled off the brick. Where a wire is down, ring 911, then Duke Energy Ohio. An electrician gets to most of these calls the day you phone, Saturdays and Sundays included.',
  commonIntro:
    'On the hill in Mount Adams, where doubles and small apartment buildings outnumber detached houses, these are the faults we find behind a cut service:',
  localFaqs: [
    {
      q: 'As a tenant, how do I get a cut service fixed in Mount Adams?',
      a: 'Write to the landlord, date it, and keep a copy with any notice the utility hung on the door. ORC 5321.04 puts the upkeep of the wiring and service a landlord supplies on the landlord, so arranging the repair falls to them. Our part is getting the lights back on. Disputes over the lease stay between you and the owner.',
    },
    {
      q: 'Why did the inspector flag grounding when only the socket burned on my house in Mount Adams?',
      a: 'An inspector signs off the whole service, so older grounding gets judged alongside the new socket. We correct grounding and bonding while we’re already there. In the city, Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits, and we put that visit on their calendar the day we book your repair.',
    },
  ],
  overrides: {
    ctaLine: 'Cut services restored on the doubles and flats of Mount Adams',
    band1Heading: 'Common Causes of Electricity Disconnection in Mount Adams',
    commonSituations: [
      'A 1930s double whose meter socket shows melted plastic and soot',
      'A tagged panel with bare conductors showing once the cover comes off',
      'Unpermitted rewiring from a flat conversion that no inspector ever saw',
      'A hillside unit dead so long between leases that the utility wants it checked',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Mount Adams',
        body: 'Your house is already dark, so finding out why comes before any part gets ordered. On a hillside double that means climbing to the weatherhead, then the mast and entrance cable, opening the meter base, then the panel and its ground. What we see there decides the repair and the scope of the permit. The failed piece is replaced, and grounding and bonding get corrected to current code, since an inspector won’t pass them otherwise. We request that inspection as soon as the job is on our schedule. After the meter is reset, each circuit comes up separately and any weak spots go in a written note.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Mount Adams',
        body: 'Most owners on the hill are surprised to learn where the utility’s equipment stops. It owns the drop and the meter, and nothing more, so the meter enclosure, the mast, the weatherhead and the panel belong to whoever holds the deed. Inspectors and the utility hang a red tag over a hazard they actually saw, such as cooked socket jaws or live conductors in reach. Only a licensed electrician’s correction and an inspector’s pass take it down, and a quick tidy won’t. Whatever paper they left is useful, since the reason is usually written on it. A locked meter stays locked, because Ohio treats tampering with metering as a crime.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Mount Adams',
        body: 'In 2017 two houses on Baum Street were ordered vacated after a neighbour’s dig brought a wall down, and any home here that sits empty for a long stretch earns a careful look before power returns. A brief inspection may clear it, or the panel may need replacing, and we say which once we’ve seen it. Putting back old gear carries the same labour and paperwork as a modern service sized for the house, so we price both.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in Mount Adams Choose Us for Disconnection Repair',
    whyParagraph:
      'Up here a dead service is treated as an emergency. Our licensed electricians make whichever repair the utility is waiting on, take care of the permit, stay for the inspector and agree a flat price with you before anything starts.',
    sharedFaqs: [
      {
        q: 'How much will it cost to fix a disconnected service in Mount Adams?',
        a: 'What failed sets the figure. A burned socket on a double is a modest job next to a full new service. You approve one flat written number after we diagnose and before any tool comes out, and utility charges are billed by them, never by us. Qualifying homeowners can finance.',
      },
      {
        q: 'How many days will my house in Mount Adams sit without power?',
        a: 'Our part usually wraps up in a single day. What stretches the outage is waiting for the inspector, who works to a calendar we don’t set, so that visit gets requested the moment you book. No other step trims the dark days as much.',
      },
      {
        q: 'Can I cut the lock and restore power myself in Mount Adams?',
        a: 'No, and please leave that lock where it is. It is the utility’s property, and Ohio law makes interfering with a meter a crime. The service was shut down because part of it failed a safety judgement, and forcing it live hands current straight to that fault. Once we have repaired it, the reconnect is arranged with the utility.',
      },
    ],
  },
};
