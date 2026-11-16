import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const ludlow: LocationServiceCopy = {
  localParagraph:
    'Floodwater, a scorched socket or a tag for missing grounding can each leave a house in Ludlow without power, and the utility keeps it that way until our licensed electrician has mended the owner’s equipment and an inspector, nearly always, has passed the mend. Census figures put the median home here at 1938, mostly older detached and attached houses along the river. Original panels, thin grounding and heat-worn sockets turn up often at that age. Diagnosis comes first, then a price on paper.',
  emergencyParagraph:
    'Without its service a house goes cold or hot, and the sump pump quits, which hurts most on the low north end. A meter box dangling off the wall is not one to approach. Should a line come down in Ludlow, phone 911 and Duke Energy Kentucky first. We reach most callers that same day, Saturday or Sunday included.',
  commonIntro:
    'From the low north end up to the older blocks around Elm Street, these are the usual reasons for a dead service in Ludlow:',
  localFaqs: [
    {
      q: 'In Ludlow, is the meter box mine or the utility’s?',
      a: 'The box is yours, though the meter in it is the utility’s, and that surprises most people. The meter is the boundary. The mast, weatherhead, entrance cable and panel belong to the homeowner too. That’s why the repair falls to you, and why storm or flood damage there is an insurance matter.',
    },
    {
      q: 'Can a tenant get the power reconnected in Ludlow?',
      a: 'Not directly, because the service is the owner’s. Write to the landlord about the disconnection notice or the dead service, include any tag the utility left, and keep a copy. The owner books the repair, and we work it out with them.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for older houses in Ludlow and the north end',
    band1Heading: 'Common Causes of Electricity Disconnection in Ludlow',
    commonSituations: [
      'A meter base or panel on the north end that sat in floodwater',
      'Scorch marks and heat damage around the socket on a pre-war house',
      'Only some rooms lit after a leg of the service let go at the drop',
      'A tag for missing grounding on a service nobody has updated',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Ludlow',
        body: 'With the house already dark, our electrician climbs to the weatherhead first, then traces the riser, the cable down the wall, the socket and every breaker, testing ground rods and bonding jumpers as the last step. Those findings tell us if this means a new riser, a socket or a panel, plus the permit to match. Filing and the inspection request leave our office together, because waiting on the inspector usually takes longest. Grounding is corrected to current code even when nobody complained about it. Once it passes, the utility receives its paperwork, breakers wake singly, and you keep a written list of anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Ludlow',
        body: 'Crews hang tags in Ludlow for a dangerous panel, no grounding or bare conductors, and after high water for anything the river reached. That tag forbids energising. Shovelling out mud won’t lift it; it lifts once our licensed electrician has cured the fault and an inspector has approved the cure. Save the tag or hanger, because its wording usually explains the shutoff. Leave a pulled or locked meter strictly alone. Kentucky treats meddling with utility metering as a criminal offence, and on a faulted service it would drive current back into gear the crew already condemned.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Ludlow',
        body: 'A river-town house closed up for a long spell gets a careful once-over first, since its panel or grounding may trail decades behind code. Exterior alterations inside the Ludlow Historic District need a Certificate of Appropriateness, so we check before touching a mast or meter box. Labour, permit and inspection barely change between a refit and a new service sized for today, so both prices arrive with our view.',
      },
    ],
    whyTitle: 'Why Homeowners in Ludlow Choose Us for Disconnection Repair',
    whyParagraph:
      'River-town houses this old deserve care, and a cold house with a silent sump pump deserves speed. Our licensed electricians repair whatever the utility flagged, sort out the permit, walk the inspector through it and quote you before starting.',
    sharedFaqs: [
      {
        q: 'What might reconnecting a house cost in Ludlow?',
        a: 'Every failure prices differently. Swapping a flood-soaked meter base is modest next to installing a whole new service. Once diagnosed, you approve one fixed figure on paper before work, and anything the utility bills stays its own charge. Qualifying homeowners may use financing.',
      },
      {
        q: 'How quickly can power come back in Ludlow?',
        a: 'Our repair commonly fits within a single day. The inspector’s diary then governs the rest, and we can’t rewrite it. Asking for that visit when the job is booked, rather than once we finish, trims the outage most, so it happens on every job we take in Ludlow.',
      },
      {
        q: 'Could I reconnect the power on my own in Ludlow?',
        a: 'No. Only the utility’s crew reinstalls a meter they pulled or locked, and Kentucky law makes tampering with one a criminal offence. Your service was also shut down over a real fault, so a homemade reconnect would run current straight back into the very equipment that caused it.',
      },
    ],
  },
};
