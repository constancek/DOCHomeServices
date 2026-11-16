import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const daytonKy: LocationServiceCopy = {
  localParagraph:
    'In Dayton, a cut service or a dead half of the house stays that way until a licensed electrician puts right the owner’s equipment, with an inspector’s approval in most cases before the utility returns. Census figures date nearly half of the homes to 1939 or earlier, and those tend to carry old panels and grounding below today’s code. Houses built after 2000 lose power more from limbs and wind than from age. You hear what failed, then see a written price, before work starts.',
  emergencyParagraph:
    'A house with its meter pulled sits without furnace, AC or sump pump, and those costs pile up by the day. Treat a meter box peeling away from the brick as dangerous and stay back. Downed wires get a 911 call first, the utility second. Most of these jobs get an electrician the same day, weekends included.',
  commonIntro:
    'In the pre-war houses near Sixth Avenue, the apartment buildings and the newer homes of Dayton, the service is usually off for one of these reasons:',
  localFaqs: [
    {
      q: 'Why does only half my house in Dayton have power?',
      a: 'Nearly always one of the two hot legs has failed, on the drop outside or at a lug in the panel. Have it traced soon. Motors and control boards don’t like running on a half supply, and the voltages it creates can damage a furnace, a fridge or a washer. We find the failed side and quote before fixing it.',
    },
    {
      q: 'Does work on the meter or mast need approval on Sixth Avenue in Dayton?',
      a: 'Possibly. Along Sixth Avenue the city has a local historic district, and its Board of Architectural Review issues a Certificate of Appropriateness for exterior changes, while inside work is exempt. When a repair alters what the street sees, such as a relocated meter box, we check with the city first.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnected services repaired for older and newer homes in Dayton',
    band1Heading: 'Common Causes of Electricity Disconnection in Dayton',
    commonSituations: [
      'One leg of the service lost in an old panel, leaving lights on one side of the house dead',
      'A pre-war house tagged by the utility over a panel or missing ground',
      'A limb across the drop that pulled the meter box from a newer house',
      'A flat left vacant between tenants until the utility wanted the service looked at',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Dayton',
        body: 'With the lights already off, a first visit in Dayton means testing every link of the service rather than only the one that looks scorched. Our electrician starts at the weatherhead, follows the mast and cable down to the meter base, opens the panel and checks the ground. From that we know if this is a socket, a mast or a panel, and which permit to file, which we do together with the inspection request. Grounding and bonding are corrected to present code during the repair. When the meter is back, the house comes up one circuit at a time, and anything doubtful goes in our written notes.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Dayton',
        body: 'Pre-war wiring is behind many tags in this city, from tired panels and bare conductors to grounding that never existed and sockets that have overheated. A red tag tells the utility to leave the service off for a stated reason. Covering scorch marks won’t move it. It is removed after a licensed electrician corrects what caused it and the inspector signs off. Hand us any tag, hanger or note that was left, since the reason on it shortens our search. Don’t break or remove a meter lock. Kentucky law makes tampering with utility meters a criminal offence, and it powers equipment already judged unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Dayton',
        body: 'Older houses and rentals in Dayton that stood empty for a long while get a slower check before power returns, because the panel and ground may lag far behind today’s code. A short inspection clears some; others need a panel. The permit, inspection and labour come to the same whether we rebuild the old setup or fit a modern, properly sized one, so we price the two together.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Dayton Choose Us for Disconnection Repair',
    whyParagraph:
      'No power in Dayton means no heat and a dead sump pump, so these calls jump the line. A licensed electrician does what the utility asked for, takes care of permit and inspector, and names the price before starting.',
    sharedFaqs: [
      {
        q: 'How much will it cost to get the power back on in Dayton?',
        a: 'The failed part sets the cost. One new meter base is a short day, while a complete replacement service is a long one. After diagnosing, we put one fixed figure in writing before any work, separate from whatever the utility bills. Qualifying homeowners can finance it.',
      },
      {
        q: 'How long does disconnection repair take in Dayton?',
        a: 'Expect our side to take a single day in most cases. The inspection happens when the building department can fit it in, and that usually sets the length of the outage. We ask for it the day you book, which takes the most time off.',
      },
      {
        q: 'Am I allowed to put the meter back or reset the power myself in Dayton?',
        a: 'No. The meter and lock are the utility’s property, and Kentucky treats tampering as a criminal offence. The service was shut off because something was unsafe, and restoring it before the repair passes inspection could start a fire. Renters should take it to the landlord.',
      },
    ],
  },
};
