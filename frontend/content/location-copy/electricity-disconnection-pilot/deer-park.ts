import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const deerPark: LocationServiceCopy = {
  localParagraph:
    'Burned or melted meter sockets are a common reason a house in Deer Park stays dark, because the utility won’t put a meter back into one. A licensed electrician has to replace it, and an inspector usually has to approve the work. Census figures date the median house here to 1947, with most built before 1960, so we often open a socket that has run warm for decades. Original panels and skimpy grounding turn up too. We diagnose first, and the written price comes before any wire is touched.',
  emergencyParagraph:
    'Without the meter, the furnace or AC stops and so does the sump pump, and an older basement in Deer Park can flood fast. Keep away from a meter box sagging off the house. If a line has come down, phone 911 and then Duke Energy Ohio. Most of these calls get an electrician the same day, weekends included.',
  commonIntro:
    'Across the 1940s and 1950s houses and older bungalows of Deer Park, these are the faults that most often keep a service switched off:',
  localFaqs: [
    {
      q: 'Who signs off a meter base or panel repair in Deer Park?',
      a: 'For houses in Deer Park, electrical permits and inspections go to Inspection Bureau, Inc. (IBI). The moment you say yes to the repair, our office files with IBI and requests an inspection date, since the utility won’t put the meter back until that approval is on record.',
    },
    {
      q: 'If the meter box burns on my house in Deer Park, who pays to fix it?',
      a: 'The homeowner is. The utility’s equipment ends at the meter and its wires, while the metal enclosure holding the meter is yours, and so is everything from the roof down to the breakers. People rarely expect that. It explains why a storm-damaged socket goes to your own insurer, not the utility.',
    },
  ],
  overrides: {
    ctaLine: 'Burned sockets and dead services repaired for houses in Deer Park',
    band1Heading: 'Common Causes of Electricity Disconnection in Deer Park',
    commonSituations: [
      'A socket on a 1940s house blackened and heat-damaged behind the meter',
      'An original panel tagged unsafe after the utility found exposed conductors',
      'A basement panel that flooded and now can’t be energised as it stands',
      'A bungalow empty since an estate sale, waiting on a service check before the utility will energise it',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Deer Park',
        body: 'In a dark house in Deer Park, nothing gets fixed until we know why the utility pulled the plug. An electrician traces the whole service, starting at the weatherhead on the roof line and ending at the ground rod, with the meter base and panel looked at in between. From that we know if it’s a new socket, a mast or a full panel, and the permit follows. Grounding and bonding get corrected to today’s code during the repair, since the inspector checks them regardless. That inspection is requested on day one. Once the meter is reinstalled, circuits come on singly, and anything doubtful goes in a written note.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Deer Park',
        body: 'Old sockets that ran hot, panels past their best, bare conductors and grounding that was never there are what usually earn a red tag on houses this age. Think of the tag as the utility’s written refusal to switch you back on. Tidying the damage won’t change its mind, and neither will phoning again. A licensed electrician must correct the cause and the inspection must pass before it comes off. Save any tag or hanger, since the reason on it cuts our diagnosis short. Leave a pulled or locked meter exactly where it is. Ohio makes that tampering a criminal offence, and it energises equipment someone has already called unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Deer Park',
        body: 'An inherited bungalow in Deer Park, or any house left unpowered for a long spell, gets slower treatment, because the panel and grounding may be the ones it was built with. A quick inspection sometimes does it. Other times the panel has to be replaced, and we tell you after seeing it. Refitting old equipment costs the same labour, permit and inspection as a modern service, so both get quoted.',
      },
    ],
    whyTitle: 'Why Homeowners in Deer Park Choose Us for Disconnection Repair',
    whyParagraph:
      'A cut service leaves a family cold and the basement unpumped, so we move quickly. Our licensed electricians fix whatever the utility flagged, take care of permit and inspector, and give you a number before starting.',
    sharedFaqs: [
      {
        q: 'What will disconnection repair cost on a house in Deer Park?',
        a: 'The bill follows the fault. Putting in one new socket where the old one burned is far less work than a whole new service and panel. You get our diagnosis, then a single fixed written price before we start, and any utility fee stays on its own bill. Qualifying homeowners can finance.',
      },
      {
        q: 'How many days will a house in Deer Park be without power?',
        a: 'Our side of it usually wraps up in a single day. After that the inspector’s availability decides when the meter returns, which we can’t control. We send the inspection request on the day you say yes, which keeps the dark stretch as short as possible.',
      },
      {
        q: 'Why can’t I just put the meter back in myself in Deer Park?',
        a: 'Two reasons. The utility owns that meter and lock, and Ohio law counts tampering with them as a criminal offence. Beyond that, the house was shut off for a fault, and putting the meter back yourself feeds power into the very part that failed.',
      },
    ],
  },
};
