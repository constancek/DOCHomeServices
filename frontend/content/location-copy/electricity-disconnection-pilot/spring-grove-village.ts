import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const springGroveVillage: LocationServiceCopy = {
  localParagraph:
    'Once Duke Energy Ohio has red tagged a service in Spring Grove Village, the lights stay off until a licensed electrician corrects the cause and, usually, an inspector signs the work. What surprises most owners is that the utility owns the line and the meter, yet the box the meter plugs into is theirs, as are the mast and the panel. The typical house here was built in 1938, by Census figures, so first-generation panels and poor grounding are common. We write the price down before work.',
  emergencyParagraph:
    'With the electricity off, the furnace or air conditioning stops and the sump pump sits idle, so a long outage turns expensive. Keep clear of a meter box tearing off the siding. A wire down is a matter for 911 and the utility first. Most calls in Spring Grove Village get an electrician that day, weekends too.',
  commonIntro:
    'Among the pre-war houses and doubles of Spring Grove Village, most dead services trace back to one of these:',
  localFaqs: [
    {
      q: 'Why did my house in Spring Grove Village get a red tag?',
      a: 'Read the tag before anything else, since the reason is usually written on it. The common ones are a panel judged unsafe, grounding that was never installed and bare conductors. On houses built before the war, it can also be an old service change done without a permit. Have the tag ready when we arrive and we’ll start from it.',
    },
    {
      q: 'I rent in Spring Grove Village and the utility cut the power. What happens now?',
      a: 'Put the outage to the landlord in writing and hold on to a copy. Ohio’s ORC 5321.04 requires owners to keep the electrical fixtures they furnish safe and in good repair, so arranging the repair is theirs. We handle the electrical side and stay out of the lease.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored for pre-war houses and two-families in Spring Grove Village',
    band1Heading: 'Common Causes of Electricity Disconnection in Spring Grove Village',
    commonSituations: [
      'A 1930s panel tagged by the utility because nothing in it is properly grounded',
      'A meter socket blackened and melted by decades of running hot',
      'The second unit of a two-family left empty until its service needed a fresh look',
      'A riser bent off the wall when a falling limb caught the overhead drop',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Spring Grove Village',
        body: 'Our electrician walks the service the way the power travels, from the drop, riser and service head through the entrance cable and meter socket to the panel and the ground. The break in that path says if this is riser work, a socket swap or a panel replacement, and which permit applies. The job includes bonding and grounding brought to today’s code, because the inspector looks at both whatever the tag said. Electrical inspections for Cincinnati neighborhoods go through Inspection Bureau, Inc. (IBI), and we book theirs alongside the work. When the meter is refitted, breakers come on one by one and are labelled, and anything worrying goes on paper.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Spring Grove Village',
        body: 'A red tag carries a single instruction, that the service must not be energised. It goes up for a reason, typically a panel judged dangerous, a ground nobody installed or bare conductors, and waiting won’t make it go away. Dressing up the surface won’t either. The fault must be fixed by our licensed electrician and the fix approved by an inspector. Keep the tag for us. Leave a locked or removed meter just as you found it, since Ohio counts any tampering with utility meters as a crime, and on a service cut for a fault it would feed power into equipment already condemned.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Spring Grove Village',
        body: 'Houses here that have sat without power for a good while, whether inherited or between tenants, get more care before they’re switched on. One brief inspection might clear the service, or the visit might end with a new panel, and you hear which after we’ve looked. Refitting the original gear runs up the same labour, permit and inspection bill as a correctly sized modern service, so both quotes are on the table.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Spring Grove Village Choose Us for Disconnection Repair',
    whyParagraph:
      'In Spring Grove Village, a house without power is urgent to us. Our licensed electricians fix the fault the tag names, see to the permit, attend the inspection and price it in writing first.',
    sharedFaqs: [
      {
        q: 'What should I expect to pay to restore power in Spring Grove Village?',
        a: 'It follows what failed. A blackened socket on a 1930s house is a far lighter job than a whole new service, so no number comes until we’ve diagnosed it. You then approve a flat rate on paper, with any utility charges shown separately. Qualifying homeowners can finance.',
      },
      {
        q: 'How many days will I be without power in Spring Grove Village?',
        a: 'Our repair usually fits inside a single day. The inspector’s visit is what we can’t control, so the request is lodged the day you approve the job, and that brings the lights back sooner than anything else.',
      },
      {
        q: 'Is it legal to remove the meter lock myself?',
        a: 'No. That lock is the utility’s, and Ohio counts tampering with meters as a criminal act. If the service was cut for a fault, breaking it would also put current into equipment that failed. The utility refits the meter once the repair is inspected.',
      },
    ],
  },
};
