import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const stBernard: LocationServiceCopy = {
  localParagraph:
    'A meter Duke Energy Ohio has pulled or padlocked at a house in St. Bernard stays out until our licensed electricians repair the owner’s equipment and, usually, an inspector signs it off. The median home here dates from 1955 by Census figures, roughly one in three from before 1940, and the village has plenty of doubles. Services of that age often keep their first panel and a ground well short of today’s code. You get a written price for the repair once we’ve found what failed.',
  emergencyParagraph:
    'Pull the meter and the furnace or AC goes quiet, the sump pump with it, and damage builds the longer that lasts. A meter box hanging off the wall should be left well alone. For a wire on the ground, phone 911 and the utility first. Most calls in St. Bernard see our electrician that day, weekends too.',
  commonIntro:
    'Doubles, apartments and older houses make up most of St. Bernard, and their services tend to fail for one of these reasons:',
  localFaqs: [
    {
      q: 'My double in St. Bernard has two meters and only one side was cut. Why?',
      a: 'Each side of a double often has its own meter and service equipment, so the utility can shut off just the side with the fault. We still check both sides, because the real cause can sit in something they share, such as the riser or the ground.',
    },
    {
      q: 'Half the double I rent in St. Bernard has no power. What are my next steps?',
      a: 'Tell the landlord in writing, keep your copy and save any tag on the meter. ORC 5321.04 requires an Ohio landlord to keep the electrical systems they supplied in good and safe working order, so the owner is the one who books us. We restore the service; the lease is for you and the owner to sort out.',
    },
  ],
  overrides: {
    ctaLine: 'Bringing power back to doubles and older houses in St. Bernard',
    band1Heading: 'Common Causes of Electricity Disconnection in St. Bernard',
    commonSituations: [
      'One side of a double shut off for a meter socket scorched by years of heat',
      'A postwar breaker box tagged because its grounding and bonding were never brought to code',
      'A service change in a pre-war house done without a permit or inspection',
      'Half a double that sat empty between tenants until its service needed checking',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in St. Bernard',
        body: 'Because the part that looks burnt isn’t always the part that failed, our electrician checks everything from the riser and service head to the cable, the socket, the panel and the ground connections. That settles whether this is riser, socket or panel work and which permit applies. While the failure is fixed, any grounding or bonding below current code is brought up to it, since the inspector looks regardless. Permit and inspection get booked with the job. With the meter back, breakers are turned on one at a time, the panel directory is filled in, and you get a written note of anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in St. Bernard',
        body: 'Tags here usually hang on a panel nobody should trust, a ground that was never there or conductors left bare, and each is a plain order to keep the service dead. Tidying the obvious hazard won’t shift it. What shifts it is our licensed electrician correcting the cause and an inspector signing the job off. People are tempted by the meter lock, and it has to stay put. Ohio treats tampering with a utility meter as a crime, and after a fault-related cut it would push current into equipment that already failed a safety check. Keep any notice the utility left, too.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in St. Bernard',
        body: 'Half a double empty between tenants, or an older house left dark after a sale, needs extra care before reconnecting. A short inspection clears some. With others the panel is done for, and we say so after looking. Restoring the old service carries the same labour, permit and inspection cost as a modern one sized for today’s loads, so both prices go in front of you.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in St. Bernard Choose Us for Disconnection Repair',
    whyParagraph:
      'When power is cut to a double or a house in St. Bernard, it goes to the front of our list. Licensed electricians correct the fault the utility found, file the permit, meet the inspector and price it in writing.',
    sharedFaqs: [
      {
        q: 'What does it usually cost to get a service reconnected in St. Bernard?',
        a: 'No single figure covers it, because it hinges on the failure. A burned socket on one side of a double is a smaller job than rebuilding a whole service. Once diagnosed, you get a flat rate in writing, apart from utility charges, and qualifying homeowners can finance it.',
      },
      {
        q: 'How long does the whole reconnect process take in St. Bernard?',
        a: 'Our repair often needs only a single day. The rest depends on the inspection and when the building department can send someone. Because we request it when the repair is booked, you wait less than if it were left until we’d finished.',
      },
      {
        q: 'Why can’t I just reinstall the meter after the repair?',
        a: 'Because the meter and its lock belong to the utility, and tampering with them is a crime in Ohio. Until an inspector signs off, the service still counts as unsafe, and energising it would feed the equipment that failed. The utility puts the meter back.',
      },
    ],
  },
};
