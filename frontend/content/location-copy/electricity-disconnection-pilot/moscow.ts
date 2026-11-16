import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const moscow: LocationServiceCopy = {
  localParagraph:
    'Along Water Street and Wells Street in Moscow, a meter that’s been pulled or sealed means the house stays dark until our licensed electrician has mended the homeowner’s half of the service and an inspector has put a signature on it. Census figures date most of the village’s roughly one hundred homes to before 1940. Wiring that old tends to hide a heat-browned socket, a first-generation panel or ground connections nobody has looked at in generations. You get a fixed figure on paper once we’ve found the fault.',
  emergencyParagraph:
    'Electric heat warms most houses in Moscow, so when the service dies the rooms go cold, the sump pump quits and costs mount. Give a meter box sagging off the siding a wide berth. Treat a fallen wire as live and phone 911, then the utility. Our electricians reach most of these calls that same day, weekends too.',
  commonIntro:
    'From the riverfront to the back lanes of Moscow, a service usually goes dead for one of these reasons:',
  localFaqs: [
    {
      q: 'Will the utility re-energise a panel in Moscow after the Ohio River gets into the basement?',
      a: 'Not as it stands. Floodwater ruins breakers and bus bars even when they dry out looking fine, so a soaked panel or meter base is replaced, not reused. We go through what the river reached, put the replacement cost on paper, then handle the permit and inspection so the meter can go back.',
    },
    {
      q: 'Why is it harder to get a pre-war house reconnected in Moscow?',
      a: 'Anything we open has to leave meeting today’s rules, and a house from before 1940 often has grounding and a panel that never did. Some jobs end at one burned socket. Others become a new service. After the diagnosis you hear which, along with the price of each path.',
    },
  ],
  overrides: {
    ctaLine: 'Bringing the power back to pre-war houses in Moscow',
    band1Heading: 'Common Causes of Electricity Disconnection in Moscow',
    commonSituations: [
      'A socket browned behind the meter from years of feeding electric heat',
      'A pre-war panel flagged because no one ever ran a proper ground',
      'A house closed up for seasons that now needs its service looked at',
      'Breakers and bus bars that sat under Ohio River water',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Moscow',
        body: 'On a pre-war house in Moscow, we start at the weatherhead and work down through the mast, the cable on the wall, the meter base and the panel to the ground rod and bonding. The inspector judges all of it. What turns up decides whether this is a socket job or a new service, and which permit we file. Grounding gets corrected to today’s rules even when it wasn’t the complaint. We ask for the inspection on the day we schedule the repair. When the meter is set again, breakers go back one after another, each is labelled, and you get a page of notes, rewire warnings included.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Moscow',
        body: 'The utility tags old services in Moscow for repeat reasons, mostly a panel it won’t trust, no real ground, or insulation worn off the conductors. That red tag is an order to keep the line cold. Sweeping up the worst-looking part won’t take it off; correcting the cause will, once an inspector has signed the repair. Leave the tag or hanger where we can read it, because it tells us where to begin. The lock or seal on a pulled meter belongs to the utility. Breaking it is a crime in Ohio, and on a faulty service it would send current back into wiring the crew refused.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Moscow',
        body: 'A house in Moscow that sat shut for a long while gets a slower look before power goes back, since wiring that old can be a long way from today’s rules. Sometimes a quick inspection clears it. Sometimes it becomes a new panel, and you hear which once we’ve looked. Putting the same tired equipment back means paying for labour, permit and inspection again, at the same cost as a modern, correctly sized service, so both get priced.',
      },
    ],
    whyTitle: 'Why Homeowners in Moscow Choose Us for Disconnection Repair',
    whyParagraph:
      'Moscow runs mostly on electric heat, so a dead service is a cold house, and we answer it fast. Licensed electricians fix what the utility is holding out for, deal with the permit and inspector, and quote first.',
    sharedFaqs: [
      {
        q: 'How is the price set for reconnecting a house in Moscow?',
        a: 'By what broke. A browned socket is a short job; a full new service for a pre-war house is a long one. Once we’ve traced the fault you get a fixed figure on paper, with anything the utility charges listed apart from ours. Homeowners who qualify can pay through financing.',
      },
      {
        q: 'How many days does a reconnect usually take in Moscow?',
        a: 'The hands-on work commonly fits in one day. The inspection is the slow part, because it sits on the inspector’s calendar, so the request goes in the moment the repair is booked. That single habit takes more days off the outage than anything else we do.',
      },
      {
        q: 'Could I reset the meter myself in Moscow?',
        a: 'No. The meter and its seal are the utility’s, and Ohio law makes interfering with them a crime. The service was cut over a fault as well, so forcing it back would put current through equipment the crew wouldn’t energise. Repair, then inspection, then the utility reconnects.',
      },
    ],
  },
};
