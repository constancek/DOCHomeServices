import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const greendale: LocationServiceCopy = {
  localParagraph:
    'The City of Greendale Electric Department won’t set a meter back into a socket that has cooked, scorched or melted, and that is one of the commonest reasons power stays off in Greendale. The cure is a licensed electrician’s repair, then usually an inspection. By Census figures, half the houses in town were standing by 1958, and nearly nine in ten are lived in by their owners, so original sockets, panels and grounding hang on for decades. We pin down the cause, then write up the price.',
  emergencyParagraph:
    'Without electricity in Greendale, heat, cooling and the sump pump all stop together, and the bill for that keeps climbing. Stay a good distance from any meter box that has peeled away from the house. When a line is down, phone 911 and then the utility. We usually have an electrician out the same day for these, weekends too.',
  commonIntro:
    'Among the older houses and mid-century streets of Greendale, a service usually ends up cut for reasons like these:',
  localFaqs: [
    {
      q: 'In Greendale, does the meter box belong to the homeowner or the city?',
      a: 'The homeowner. Your side covers the box, the mast, the weatherhead, the cable into the meter and the panel, while the city utility handles the disconnect and reconnect. We repair your part, see to the permit and inspection, then work with the utility to get the meter back in.',
    },
    {
      q: 'Can a flooded panel in Greendale be switched back on once it dries?',
      a: 'Not as it stands, however dry it looks. Some parcels in town sit inside the mapped floodplain, and a panel that sat in water can’t safely be re-energised. We swap out everything the water touched, file the permit, get the inspection booked and arrange the reconnect.',
    },
  ],
  overrides: {
    ctaLine: 'Getting power back to older houses in Greendale after a disconnection',
    band1Heading: 'Common Causes of Electricity Disconnection in Greendale',
    commonSituations: [
      'A blackened socket the city utility refuses to put a meter back into',
      'A basement panel soaked during a flood',
      'A mast tugged off the siding when a branch came down across the drop',
      'An original panel with no real ground, flagged when the house changed owners',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Greendale',
        body: 'Your utility is holding the meter until the repair is done, so we start by diagnosing the service from the roof edge down to the ground rod. That settles whether the trouble sits in the mast, the socket or the panel, and which permit the work falls under. Old grounding and bonding get redone to today’s code on the same visit, since an inspector looks at them no matter what caused the cut. Permit filing and the inspection request happen the day we schedule you. With the meter reset, we bring the house back a circuit at a time, mark up the panel and write down anything that wants watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Greendale',
        body: 'In Greendale, a tag usually goes on over an unsafe panel, absent grounding or conductors left in the open. Read it as a standing do-not-energise order. Fixing the worst-looking corner won’t clear it, and it holds until the cause is corrected by a licensed electrician and the work passes inspection. Whatever note the utility hung on the door, keep it, because the reason tends to be written right there. Hands off a pulled or locked meter. Indiana leaves that lock with the utility, and the utility is the one that removes it.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Greendale',
        body: 'Houses that sat empty through an estate or a long sale are treated carefully before the meter comes back, particularly with original equipment inside. A brief inspection sometimes settles it, other times the house needs a new panel, and you hear which after we’ve looked. Since rebuilding the old arrangement takes nearly the same labour, permit and inspection as a correctly sized modern service, we quote both.',
      },
    ],
    whyTitle: 'Why Homeowners in Greendale Choose Us for Disconnection Repair',
    whyParagraph:
      'Until the service is fixed the house has no heat or sump pump, so we treat it as an emergency. Licensed electricians make the repair, file the permit, walk the inspector through it and agree the price first.',
    sharedFaqs: [
      {
        q: 'What goes into the price of disconnection repair in Greendale?',
        a: 'Mostly the failure itself. A burned meter base and a whole rebuilt service are nowhere near the same job. After the diagnosis we put a flat rate in writing for your approval, separate from any utility charge, and financing is open to qualifying homeowners.',
      },
      {
        q: 'When will the lights come back on in Greendale?',
        a: 'Often our repair takes a single day. The inspection is what fixes the date, and the building inspector keeps that diary. We put the request in as soon as you book, and nothing else trims an outage as much.',
      },
      {
        q: 'Is it okay to reinstall the meter on my own in Greendale?',
        a: 'No. Meter and lock are the utility’s, and only it removes them. Something failed badly enough for the power to be cut, so bringing it back before the repair and inspection runs current into equipment that was found unsafe.',
      },
    ],
  },
};
