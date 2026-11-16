import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const florence: LocationServiceCopy = {
  localParagraph:
    'In Florence, a tag or door hanger from the utility usually means power stays off until a licensed electrician repairs the owner’s equipment, often with an inspector’s approval as well. The typical home here dates from about 1972, per Census figures, and roughly half of households rent, a lot of them in apartment and condo buildings. Sockets and panels from that era have done long service. We diagnose before anything else, and you see the price in writing first.',
  emergencyParagraph:
    'Inside a disconnected house in Florence, nothing that heats, cools or pumps water is running, and damage builds. A meter box that has peeled away from the wall is dangerous to stand near. For a downed wire, phone 911 first, then Duke Energy Kentucky or Owen Electric, depending on the street. Expect someone that day on most calls, weekends included.',
  commonIntro:
    'Across older subdivisions and the many apartment and condo buildings in Florence, a cut service usually traces to one of these:',
  localFaqs: [
    {
      q: 'What does the door hanger from the utility mean in Florence?',
      a: 'It normally states why the power was cut, so pass it to us and the diagnosis gets quicker. If there wasn’t one, we start at the service and work in. Either way, the socket box, mast, weatherhead, service cable and panel are the owner’s, and the utility switches power back on once they’re fixed.',
    },
    {
      q: 'I rent a condo in Florence and the power is off. Who arranges the repair?',
      a: 'Tell the landlord, and put it in writing. The owner books the work, and if the building has a shared meter bank or the damage is on the exterior, the condo association may need to approve it first. We work with owners, managers and associations to get the service reconnected.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored for houses, condos and apartments in Florence',
    band1Heading: 'Common Causes of Electricity Disconnection in Florence',
    commonSituations: [
      'A meter socket on a 1970s house with heat damage that can’t go back into service',
      'A condo meter bank with one burned position, leaving a single unit dark',
      'A red tag for exposed conductors at an older meter box or outdoor panel',
      'Storm damage on the owner’s side, such as a limb through the service drop',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Florence',
        body: 'Everybody who calls wants to know when. The honest answer comes after one look at the full service, weatherhead and mast on the outside wall, the cable that drops to the meter base, then the panel and its grounding. That look decides which part needs the work and what permit covers it. We do the repair, update grounding and bonding to today’s code, file for the permit and ask the inspector for a date on the same call. Once the utility’s crew refits the meter, we wake the house up breaker by breaker, mark each circuit and hand over notes on anything we’d keep an eye on.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Florence',
        body: 'Utilities tag a service for things like a dangerous panel, grounding that isn’t there, bare conductors or work done without a permit. The tag is an order and stays in force. Tidying up around the problem won’t shift it, since only a proper fix by a licensed electrician and an inspector’s approval do. If the meter has been pulled or locked, don’t touch it. Kentucky law makes tampering with utility meters a criminal offence, and on a service cut for a fault, it would feed current back into equipment condemned for good reason.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Florence',
        body: 'Lots of rentals sit empty between tenants in Florence, and some houses go dark for a while after a sale. A service left off that long gets slower, more careful treatment before we energise it. A brief inspection settles some. For others it’s a new panel, which you hear about once we’ve looked. The quote sets a straight refit beside a modern, correctly sized service, because labour and inspection stay the same.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Florence Choose Us for Disconnection Repair',
    whyParagraph:
      'A disconnection kills the heat and the sump pump in one go, so it gets emergency priority here. Licensed electricians carry out the repair, take the permit and inspection off your hands, and agree the price before starting.',
    sharedFaqs: [
      {
        q: 'How much will it cost to fix a disconnected service in Florence?',
        a: 'What broke decides the price. A meter base rebuild costs far less than an entire new service, so the diagnosis comes first. Then you get one flat figure in writing to approve, with nothing from the utility folded in. Qualifying homeowners can finance.',
      },
      {
        q: 'How long does reconnection take in Florence?',
        a: 'Our part is frequently wrapped up within a single day. The inspector’s availability governs the rest, so we put in for the inspection the moment you book us. Nothing else we do takes more days off the time a house sits dark.',
      },
      {
        q: 'Am I allowed to turn the power back on myself in Florence?',
        a: 'No. A locked or pulled meter stays put until the utility deals with it, because breaking into it would be tampering, a crime under Kentucky law. If a fault caused the disconnection, the equipment has also been judged unsafe. Once the repair passes inspection, the utility reconnects.',
      },
    ],
  },
};
