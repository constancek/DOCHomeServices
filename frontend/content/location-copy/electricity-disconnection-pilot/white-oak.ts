import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const whiteOak: LocationServiceCopy = {
  localParagraph:
    'White Oak is split between Green and Colerain townships, but a cut service works the same on both sides: the meter stays out until a licensed electrician has made the owner’s equipment safe and, usually, an inspector has passed it. Census figures give a median build year of 1968 for houses here, with roughly two in three dating from 1940 through 1979. Houses that age often keep their first panel and ground rod. You approve a written figure once we find the fault.',
  emergencyParagraph:
    'In White Oak, no service means a cold or hot house and a sump pump that sits still during the next rain, so delay costs money. Treat a meter box hanging from its last screws as off limits. Anyone who sees a line down rings 911 and the utility. We reach most calls that same day, weekends included.',
  commonIntro:
    'In the mid-century houses and apartment buildings of White Oak, a cut service usually goes back to one of these:',
  localFaqs: [
    {
      q: 'Who owns the meter box on a house in White Oak?',
      a: 'You do, though few owners expect it. Duke Energy Ohio owns only its line and the meter. The box around the meter belongs to the house, with the mast, weatherhead, brackets and panel. So the bill for repairs there comes to the owner, and storm damage to those parts is an insurance matter, not Duke’s.',
    },
    {
      q: 'What should a renter in White Oak do when the power is cut?',
      a: 'Send your landlord a dated letter or message about the cut and hold on to a copy. Ohio’s landlord law, ORC 5321.04, requires owners to maintain the electrical systems they supply in safe working condition, which makes the repair theirs to book. We restore service, not leases, and give the owner our price before any work.',
    },
  ],
  overrides: {
    ctaLine: 'Cut services repaired for mid-century houses in White Oak',
    band1Heading: 'Common Causes of Electricity Disconnection in White Oak',
    commonSituations: [
      'A late-1960s panel tagged when the utility crew found the grounding missing',
      'A meter socket on a 1950s house, scorched after running hot for years',
      'Lights out in half the rooms after one leg of the service failed inside the panel',
      'A rental house left empty between tenants long enough to need its service rechecked',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in White Oak',
        body: 'Sitting without power, a house in White Oak needs one thorough visit rather than guesswork. Starting at the roof, our electrician works through the drop connection, mast and entrance cable to the meter base, then opens the panel and traces every ground and bond. Houses built in the 1950s and 1960s here often come up short on grounding, so we correct it with the repair even when nobody asked. Inspection Bureau, Inc. (IBI) handles electrical permits here, and the inspection request goes in once you accept the price. When the meter is back, circuits are brought up singly, the panel is labelled and anything worth watching goes on paper.',
      },
      {
        title: 'Red Tags and Utility Disconnects in White Oak',
        body: 'Crews working the mid-century streets of White Oak usually tag a service for a tired original panel, grounding lost to corrosion, bare conductors or a socket melted by heat. Take the tag literally. Making the damage look tidy changes nothing, and the tag only comes down after the underlying fault is corrected by a licensed electrician and the repair passes inspection. Notes or hangers left on the door or meter help us, because the reason is usually written on them. Nobody but the utility should touch a locked or empty meter socket. Ohio law makes meter tampering a crime, and it would feed current into a service already judged unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in White Oak',
        body: 'Between leases, or while a family house waits to sell, a home in White Oak can go without power long enough to need extra care before the meter returns. A 1960s panel may sit well behind current code, so the visit might end at a short inspection or turn into a new panel. Rebuilding the old setup or fitting a modern, correctly sized service costs about the same in labour and permits, so both prices go on paper.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in White Oak Choose Us for Disconnection Repair',
    whyParagraph:
      'Heat and the sump pump both die with the service in White Oak, so these calls jump the queue. Licensed electricians do the repair the utility requires, handle the permit and inspector, and quote you before starting.',
    sharedFaqs: [
      {
        q: 'What will disconnection repair cost in White Oak?',
        a: 'Which part failed decides it; a scorched socket on a 1960s house is a lighter day than a new service and panel. After diagnosis you get one flat price on paper to approve before anything begins. The utility’s own charges, if it has any, never mix with ours. Qualifying homeowners can apply for financing.',
      },
      {
        q: 'How many days will a house in White Oak be without power?',
        a: 'Repairs here often fit in a single day. After that, the pace is set by the inspection office’s calendar, which we don’t control. Putting the inspection on the books the day you say yes shortens the wait more than any other step, and then we schedule the reconnect with the utility.',
      },
      {
        q: 'Could I cut the meter lock and turn the power on?',
        a: 'No. That lock and the meter behind it belong to the utility, and breaking into either is a crime under Ohio law. The fault that led to the disconnection hasn’t gone anywhere either, so live power would go straight back to it. The licensed repair and a passed inspection come first.',
      },
    ],
  },
};
