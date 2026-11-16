import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const wintonHills: LocationServiceCopy = {
  localParagraph:
    'Before the utility will reconnect a house in Winton Hills, a licensed electrician has to repair what the owner owns and, nearly always, an inspector has to pass it. Almost every household here rents, and most homes sit in the housing authority’s Winton Terrace and Findlater Gardens, where repairs run through management work orders. Census figures put the median build year at 1955, so the privately owned houses and two-families tend to keep older panels and grounding; their landlords call us. We diagnose, then quote the owner in writing.',
  emergencyParagraph:
    'A rented house in Winton Hills with its meter out loses heat or cooling and the sump pump, and that harm compounds by the day. Keep children well back from a meter box dangling off the wall. Anyone who spots a downed line phones 911 and Duke Energy Ohio first. An electrician usually reaches owners the same day, weekends included.',
  commonIntro:
    'In the houses and two-families of Winton Hills that private landlords own, these four reasons account for most cut services:',
  localFaqs: [
    {
      q: 'I live in Winton Terrace or Findlater Gardens and the power is off. Who do I call?',
      a: 'Report it to the housing authority or your property manager through a work order, and note when you did. Repairs in those buildings are arranged by management, so the work order is how it gets fixed. If a line is down outside, call 911 and the utility first and keep everyone back.',
    },
    {
      q: 'Who pays to fix a rented house in Winton Hills after a disconnection?',
      a: 'The owner. ORC 5321.04 requires an Ohio landlord to keep the electrical equipment that came with the rental safe and working. Tenants should describe the outage to the landlord on paper, date it and hold on to a copy. We restore power, not leases, and the owner signs off on our price.',
    },
    {
      q: 'Which parts of the electric service belong to a property owner in Winton Hills?',
      a: 'More of it than most owners expect. The utility’s side ends at its line and the meter; the socket enclosure, the riser and service head, the brackets fixing them to the wall and the whole panel are the property’s. That makes repairs there the owner’s cost, and storm damage to them a question for insurance rather than the utility.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repairs for owners and landlords in Winton Hills',
    band1Heading: 'Common Causes of Electricity Disconnection in Winton Hills',
    commonSituations: [
      'A 1950s panel in a rented house tagged for missing grounding',
      'One side of a two-family left dark after a leg of the service dropped',
      'A rental between tenants that stood dead long enough to need its service rechecked',
      'A meter socket on an older house scorched by years of running hot',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Winton Hills',
        body: 'Landlords with a tenant in a dark rental in Winton Hills need the repair and the sign-off to happen together. Our electrician starts at the service head and riser, follows the entrance conductors to the meter socket, opens the panel and checks every ground clamp and bonding jumper, and from that you know which repair and which permit apply. Weak grounding gets corrected in the same visit, because the inspector tests it. In Cincinnati, Inspection Bureau, Inc. (IBI) handles electrical permits, and we request its inspection once you approve the price. When the meter is reset, circuits come up one by one and anything worth watching goes in writing.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Winton Hills',
        body: 'The crew red-tags a service in Winton Hills when it finds a hazard it won’t put current through, a panel judged unsafe, grounding gone missing, bare conductors or a socket blackened by heat. That tag is an order, and dressing up the damage doesn’t cancel it. Only a licensed electrician’s correction of the cause, approved by an inspector, takes it off. Owners should hold on to whatever the crew left, since the reason is often written on it. A pulled or locked meter stays as the crew left it. Tampering is a crime under Ohio law, and energising a faulted service hands the danger back to the tenants.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Winton Hills',
        body: 'A rented house in Winton Hills that stays empty between tenants for long enough gets a slower check before power returns, since older panels and grounding often lag current code. Some clear after a short inspection; others need a new panel. Rebuilding the old setup costs nearly the same labour and permit as a modern, correctly sized service, so owners get both prices side by side.',
      },
    ],
    whyTitle: 'Why Owners and Landlords in Winton Hills Choose Us for Disconnection Repair',
    whyParagraph:
      'For an owner, a dark rental means a tenant without heat or a sump pump, and we respond accordingly. Licensed electricians make the repair the utility demands, take the permit and inspector off your plate, and price it first.',
    sharedFaqs: [
      {
        q: 'How much does a landlord pay for disconnection repair in Winton Hills?',
        a: 'What failed sets the cost. A single burned socket is far less work than rebuilding the service on a two-family. Once we have diagnosed it, the owner gets a flat price in writing and approves it before work begins. Utility charges, if any, are billed separately by the utility. Financing is available to qualifying owners.',
      },
      {
        q: 'How long will a rental in Winton Hills stay without power?',
        a: 'Most repairs are finished inside one day. The remaining time depends on the inspector’s calendar, which we don’t control, so we ask for the inspection the day the owner approves the job. Nothing shortens a tenant’s outage more, and the reconnect follows once the inspection passes.',
      },
      {
        q: 'Can a tenant or owner switch the power back on without the utility?',
        a: 'No. Only the utility removes its lock or resets its meter, and Ohio treats tampering with either as a crime. The fault behind the disconnection is still sitting there as well, so early power only feeds it. The main stays off until the repair is finished and the inspector has passed it.',
      },
    ],
  },
};
