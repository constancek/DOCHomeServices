import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lakesidePark: LocationServiceCopy = {
  localParagraph:
    'A door hanger left at a house in Lakeside Park, saying power stays off pending repairs, means a licensed electrician has to set right the owner’s equipment and, in most cases, an inspector must approve it before the utility comes back. Census figures put the median house here in 1964, with roughly one in six built before 1940. Those prewar houses are where tired panels and long-overheated sockets turn up most. You get a diagnosis first, then a written price to approve.',
  emergencyParagraph:
    'A house cut off at the meter has no furnace, no air conditioning and no sump pump, and every outage day adds expense. Stay clear of any meter box leaning away from the siding. A fallen wire means calling 911 and Duke Energy Kentucky before anything else. Most homes in Lakeside Park get an electrician the same day, weekends included.',
  commonIntro:
    'Across the postwar streets and the older prewar houses in Lakeside Park, a service gets cut for one of these reasons more than any other:',
  localFaqs: [
    {
      q: 'Should I keep the door hanger the utility left at my house in Lakeside Park?',
      a: 'Yes, hold on to it. A hanger, tag or note usually states why the service was disconnected, whether a burned socket, a damaged mast or a panel judged unsafe, and that cuts our diagnosis time. If nothing was left behind, we start at the service where it enters the house and work inward until we find the cause.',
    },
    {
      q: 'Who owns the meter box on a house in Lakeside Park?',
      a: 'You do, and most people are surprised. The utility’s side ends at the line and the meter. The enclosure the meter plugs into, plus the mast, weatherhead and the whole panel, are the homeowner’s. So the repair falls to you to arrange, and storm damage to those parts is a matter for your insurer.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repairs and reconnects for homes in Lakeside Park',
    band1Heading: 'Common Causes of Electricity Disconnection in Lakeside Park',
    commonSituations: [
      'A door hanger citing a burned meter socket on a 1960s house',
      'An original panel in a prewar house the utility refused to re-energise',
      'A mast pulled loose when a tree limb dropped onto the service drop in a storm',
      'Power lost on half the circuits after one leg of the service failed',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Lakeside Park',
        body: 'With the house dark, a plan beats guesses. Ours runs from the weatherhead and roof bracket, down the riser and service conductors, through the socket and into the panel, finishing at the ground connections. Postwar houses here sometimes hide a second weak spot behind the obvious one,, and we quote it now. The findings decide between a mast, a socket or a panel and set the permit. We correct grounding and bonding to present code as part of the same visit. Paperwork and the inspection request are filed on booking day. After the meter returns, circuits come up in turn, with a written list of concerns.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Lakeside Park',
        body: 'Utility crews tag a service they will not switch on, typically because the panel is unsafe, grounding is absent, conductors are exposed or the socket shows heat damage. Read the tag as an instruction issued for cause. Sweeping away the burnt debris changes nothing. The tag is lifted only once a licensed electrician fixes what caused it and the inspector signs. If your meter is missing or carries a lock, leave both alone. Kentucky makes tampering with a utility meter a criminal offence, and reconnecting a faulted service on your own drives power into equipment that has already failed a safety call.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Lakeside Park',
        body: 'An inherited prewar house, or one that sat empty after a sale, can have a panel and grounding well behind today’s code, so we take more care before energising it. A short inspection settles some cases and a new panel settles others. The labour, permit and inspection run about even for a rebuild or a correctly sized modern service, so both prices go side by side.',
      },
    ],
    whyTitle: 'Why Homeowners in Lakeside Park Choose Us for Disconnection Repair',
    whyParagraph:
      'A dead service costs a house its heat and its sump pump at once, so our licensed electricians treat the call as urgent. They carry out the repair the utility needs, sort the permit and quote up front.',
    sharedFaqs: [
      {
        q: 'How much should I budget for a disconnection repair in Lakeside Park?',
        a: 'Plan around what broke, not the size of the house. Rebuilding one charred socket sits far below replacing a whole service. Once the cause is traced, we write a single flat figure for your signature before starting, and the utility bills its own charges apart from ours. Qualifying homeowners can finance.',
      },
      {
        q: 'How soon will my house in Lakeside Park have power again?',
        a: 'The repair itself is commonly done inside a single day. After that, everything waits on the inspection, and the inspector, not us, sets that date. That is why we ask for the inspection when you book the work, then hand the utility what it needs for the reconnect.',
      },
      {
        q: 'Can I remove the meter lock and switch the power on myself?',
        a: 'Please leave it. Locks and meters are utility property, and Kentucky makes tampering with them a criminal offence. The defect behind the cut also remains, so early power lands right on it. A licensed fix and an approved inspection have to happen before the utility puts the meter back.',
      },
    ],
  },
};
