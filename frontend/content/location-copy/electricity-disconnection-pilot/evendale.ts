import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const evendale: LocationServiceCopy = {
  localParagraph:
    'A red tag hung at the meter in Evendale is the utility saying it won’t energise that house yet. The tag stays until a licensed electrician sorts out the reason for it and, in nearly all cases, an inspector signs. Census figures show a median build year of 1982 and nothing but detached single-family houses in the village, so we see tags after storms, a car striking the service or a recent addition that failed inspection more than worn-out originals. Diagnosis comes before a written price.',
  emergencyParagraph:
    'In Evendale, a dead service shuts down heating, cooling and the sump pump at once. Treat a meter box hanging off the siding as off limits. For a wire on the lawn, phone 911 and Duke Energy Ohio first and leave the branch on it alone. Most calls get an electrician that day, weekends too.',
  commonIntro:
    'In the single-family houses of Evendale, most of them built between the 1960s and the 1990s, a service is usually cut for one of these:',
  localFaqs: [
    {
      q: 'Who owns the equipment that failed at my house in Evendale?',
      a: 'You own more of it than you’d guess. The utility’s share is the wire coming in and the meter. The socket box holding that meter, the mast, the roof cap, the cable down the wall and the panel are the homeowner’s, so their repair is too. Damage from a storm on your side goes through your insurer.',
    },
    {
      q: 'Who issues the electrical permit for a repair in Evendale?',
      a: 'The village sends electrical permits to The Inspection Bureau, Inc., and its own Building Department deals with building permits. An emergency repair can usually begin before the filing, but the filing and the inspection still have to happen, as the utility looks for that approval first. Our office files it and books the inspection alongside the job.',
    },
  ],
  overrides: {
    ctaLine: 'Red tags cleared and power reconnected for houses in Evendale',
    band1Heading: 'Common Causes of Electricity Disconnection in Evendale',
    commonSituations: [
      'A tag after an addition or basement finish failed its electrical inspection',
      'A falling limb that took the drop down and kinked the mast',
      'A panel soaked in a flood that must be replaced before power returns',
      'An overheated meter socket behind the siding of a 1980s house',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Evendale',
        body: 'Before picking a fix, we trace the service from the top. Roof cap, mast and cable come first, then the meter socket, the breaker panel and the ground rod, because storm and impact damage can travel further than it looks. The results point to mast work, a fresh socket or a new panel, and set the permit. Our request for the inspector goes in when you book, since that visit sets the pace. Grounding and bonding are corrected to current code while we’re there. Once the meter is reset, breakers are restored one at a time, each is labelled and a written note covers anything to revisit.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Evendale',
        body: 'Utilities tag a service when something gives them reason to distrust it, like a panel past its best, no ground, conductors left in the open or work done without the permit. The tag means the power stays off, and a quick cleanup of what’s visible doesn’t change that. A licensed correction of the real cause, followed by the inspector’s approval, does. Keep the tag or hanger for us, since the reason tends to be printed on it. If the meter has been locked or taken out, it’s the utility’s to restore. Ohio treats tampering with it as a crime, and it would put current into equipment already condemned.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Evendale',
        body: 'Newer houses can sit unused, through an estate or a slow sale. After a long dark spell we look closer, because grounding done in the 1970s or 1980s may not satisfy today’s code. A short inspection can be enough, or it may take a new panel, and we explain which once we’ve opened things up. Rebuilding like for like costs the same labour, permit and inspection as a modern service matched to the house, so we quote both.',
      },
    ],
    whyTitle: 'Why Homeowners in Evendale Choose Us for Disconnection Repair',
    whyParagraph:
      'For us, a house in the village with no power is an emergency. Our licensed electricians take on the repair the utility asked for, deal with the permit and the inspector, and agree the price with you up front.',
    sharedFaqs: [
      {
        q: 'How much does a disconnection repair cost in Evendale?',
        a: 'It depends on the damage. Re-hanging a storm-bent mast is a smaller job than replacing the whole service, and only the diagnosis shows which you need. You see a flat figure in writing before work, and anything the utility charges comes from them, not us. Financing is available for qualifying homeowners.',
      },
      {
        q: 'When will my power be back on in Evendale?',
        a: 'For most jobs, our work fits inside a single day. The rest of the wait is the inspector’s, whose calendar we don’t set. We ask for that inspection on the day you book, and that alone is usually what keeps a disconnection from running on.',
      },
      {
        q: 'Can I reconnect the meter myself after a storm?',
        a: 'Leave it to the utility. Meters and their locks are utility property, and Ohio counts tampering with them as a criminal offence. Your service was cut because of a fault on the house side, too, and pushing the meter back in would feed straight into it. We fix the fault and line up the reconnect.',
      },
    ],
  },
};
