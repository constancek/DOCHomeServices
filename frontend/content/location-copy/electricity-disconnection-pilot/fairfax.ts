import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfax: LocationServiceCopy = {
  localParagraph:
    'In Fairfax, a cut service stays dead until a licensed electrician corrects what the utility objected to on the owner’s side of the meter, and most jobs also need an inspector’s approval. Nearly half the houses in the village predate 1940, with a median year of 1942 in Census figures, so early panels and thin grounding turn up often and give the inspector plenty to review. Low streets also flood in Lower Fairfax. Our written quote comes after we’ve looked, never before.',
  emergencyParagraph:
    'In Fairfax, a house with its service cut has no furnace, no air conditioning and, worst in a basement with a flooding history, no sump pump. Steer well clear of a meter box dangling from the siding. Ring 911 about a downed wire, then the utility. Same-day visits cover most calls, weekends too.',
  commonIntro:
    'Disconnections in the older houses of Fairfax, and on its flood-prone low streets, usually come down to one of these:',
  localFaqs: [
    {
      q: 'Can a panel that flooded in Fairfax be switched back on?',
      a: 'No. A panel that sat under floodwater can’t be energised again as it is, and the July flash flood put water in several basements in Lower Fairfax. We test what got wet, including the sump pump circuit, and give you a written price for the new panel before work.',
    },
    {
      q: 'What permits does disconnection repair need in Fairfax?',
      a: 'Before any project, village rules call for a Zoning Certificate, which we request on your behalf. The electrical permit and inspection go in at the same moment as the job, because the utility won’t restore service without that approval, and the inspector’s calendar is the slow part.',
    },
    {
      q: 'My rental in Fairfax has a disconnection notice. What should I do?',
      a: 'Send your landlord a dated note about it and keep your own copy. Under ORC 5321.04, an Ohio landlord is responsible for keeping supplied wiring and electrical fixtures safe to use. Leases aren’t our department. The owner arranges the repair with us, and we book a time that suits them.',
    },
  ],
  overrides: {
    ctaLine: 'Power back on for older houses in Fairfax after a disconnection',
    band1Heading: 'Common Causes of Electricity Disconnection in Fairfax',
    commonSituations: [
      'A basement panel in Lower Fairfax that floodwater reached, now unsafe to switch on',
      'An old meter socket on a 1940s house, browned and brittle from years of heat',
      'Grounding from another era, flagged while the inspector was checking unrelated work',
      'A branch that came down across the drop and folded the mast',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Fairfax',
        body: 'Sitting in the dark, you want a plan. Step one is a check of everything from the weatherhead on the roofline to the panel in the basement, including the mast, the service entrance cable, the meter base and the ground connections. What we find there settles the kind of repair and the permit. Step two is the fix, and grounding and bonding get brought to today’s code while we’re at it, since the inspector looks at both. The inspection request goes in on day one. When the meter is reinstalled, circuits go live individually, and you get a labelled panel and notes on anything that needs watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Fairfax',
        body: 'In Fairfax, Duke Energy Ohio owns two things, the overhead line and the meter itself. Everything else at the service, from the socket box to the mast, weatherhead, wall cable and panel, belongs to the homeowner, and few people expect that. Spot danger there, say bare conductors or no grounding, and the utility red-tags it and refuses to energise. Only a real correction and an inspector’s approval get that tag removed. Keep the notice from your door, because it usually spells out the fault. Never cut or remove a meter lock, since Ohio counts tampering with metering as a crime.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Fairfax',
        body: 'An empty house in Fairfax, perhaps an estate waiting to sell or a rental between tenants, gets more scrutiny before the service is brought back. Pre-war panels and grounding can be well out of date. A quick look clears some houses, others need a whole new panel, and we say so after inspecting. The written quote lists both a refit of the existing gear and a correctly sized modern service, since the labour and permit barely differ.',
      },
    ],
    whyTitle: 'Why Homeowners in Fairfax Choose Us for Disconnection Repair',
    whyParagraph:
      'A cut service shuts off the heat and stops the sump pump in basements that flood, so we move these calls up. Licensed electricians make the repair, look after the permit, meet the inspector and settle the price first.',
    sharedFaqs: [
      {
        q: 'How much does disconnection repair cost in Fairfax?',
        a: 'The fault decides it. Replacing one meter base takes a fraction of the time a rebuilt service does, and costs a fraction as much. Once we know the cause, you approve one flat price on paper before work, and any utility charges are shown separately. Qualifying homeowners can apply for financing.',
      },
      {
        q: 'How long until my power is back on in Fairfax?',
        a: 'We can usually finish the repair inside a single day. After that you’re waiting on the inspector, whose schedule we don’t control, which is why we request the visit when the job is booked. That habit cuts more off the outage than anything else in the process.',
      },
      {
        q: 'Can I turn the power back on myself in Fairfax?',
        a: 'No. Meters, pulled or locked, belong to the utility, and putting power back past them is the utility’s job alone. If the shutoff was for a fault, forcing it would also feed equipment already judged dangerous. After our repair passes inspection, the utility handles the reconnect.',
      },
    ],
  },
};
