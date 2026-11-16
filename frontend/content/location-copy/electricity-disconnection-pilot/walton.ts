import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const walton: LocationServiceCopy = {
  localParagraph:
    'When a house in Walton has its service cut, read the door hanger, because it usually gives the reason. The power stays off until a licensed electrician fixes that cause and, in most cases, an inspector passes the work. Census figures split housing here into two groups, with about one home in five from before 1960 and over half built since 2000. Older houses lean toward original panels and thin grounding, and the newer ones more often go dark from storm damage. Our price is written before work.',
  emergencyParagraph:
    'No service at a house in Walton means no heat, no cooling and no sump pump, and the damage grows. Keep away from a meter box peeling off the wall. If a line is down, call 911, then Owen Electric or Duke Energy Kentucky, whichever serves your street. Most such calls see an electrician the same day, weekends included.',
  commonIntro:
    'From the older blocks to the subdivisions built since 2000, a house in Walton usually loses its service for one of these reasons:',
  localFaqs: [
    {
      q: 'What does the notice left at my house in Walton mean?',
      a: 'Normally it names why the service was cut, perhaps a damaged meter base, a red-tagged panel or a failed inspection. Hold on to it and show us, since it shortens the hunt. If nothing was left, our electrician begins at the service entrance and works inward until the cause shows itself.',
    },
    {
      q: 'Does a pre-1960 house in Walton need extra work before reconnection?',
      a: 'It often does. Houses that old may keep an original panel, grounding short of current code or a socket that has run hot for decades. The inspector reviews all of it, so we correct those items during the repair and quote them up front.',
    },
  ],
  overrides: {
    ctaLine: 'Getting the service back on at older and newer houses in Walton',
    band1Heading: 'Common Causes of Electricity Disconnection in Walton',
    commonSituations: [
      'A burned socket on an older house near South Main Street that can’t go back in service',
      'A limb through the drop on a house built since 2000 after a storm',
      'An original panel red-tagged because it was never grounded properly',
      'A two-family in the old town with one half dark after a leg gave out',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Walton',
        body: 'Since the lights are already out, our electrician looks over the entire service before picking up a tool. That means the weatherhead and mast outside, the cable down into the meter base, and inside, the panel along with its ground and bonding. The findings decide between mast work, a meter base or a panel, and the permit follows from that. Old town or subdivision, the inspector reviews grounding, so we bring it to present code during the repair. We file and ask for the inspection when you book. Once the utility reconnects, circuits return singly, labels go on and a written list covers anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Walton',
        body: 'In Walton, the homeowner owns the meter box and everything behind it, from the mast and weatherhead to the cable and panel, while the utility’s role is disconnecting and reconnecting. A red tag hung on that equipment says it must not be energised, and it was put there over a real fault, perhaps an unsafe panel, no grounding or bare conductors. Tidying up won’t cancel it. Cancelling it takes a licensed electrician’s repair and an inspector’s sign-off. Save the tag or hanger for us. Leave a pulled or locked meter where it is, because breaking a utility lock is a criminal offence in Kentucky.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Walton',
        body: 'An older house in Walton that sat empty after a sale gets tested slowly before it is energised, since its panel or grounding may be a long way from code. Some need only a brief inspection, and some need a panel replacement, which you learn after we look. Refitting what’s there and upgrading to a properly sized service cost the same in labour, permit and inspection, so we lay both prices side by side.',
      },
    ],
    whyTitle: 'Why Homeowners in Walton Choose Us for Disconnection Repair',
    whyParagraph:
      'When the power is cut in Walton, our licensed electricians respond as for an emergency, carry out the repair the utility requires, file the permit and meet the inspector, and you approve a written price first.',
    sharedFaqs: [
      {
        q: 'What will getting my service back cost in Walton?',
        a: 'That depends on what failed, and fixing a meter base is a much shorter day than replacing the service. After diagnosis you receive a flat rate in writing before any work, separate from whatever the utility bills. Financing is available to qualifying homeowners.',
      },
      {
        q: 'How long is a house in Walton usually without power?',
        a: 'Our repair normally fits inside a single day. It’s the inspection that stretches an outage, because it moves on the building department’s timetable. Requesting the inspector at the moment the repair is booked cuts the wait more than anything else, so that happens on our first visit.',
      },
      {
        q: 'Can I legally reconnect my own power in Walton?',
        a: 'No. Kentucky law makes it a crime to tamper with a utility meter or lock. There’s also the fault itself, since the service was cut over something unsafe, and power forced back flows straight into it. We repair the cause, then arrange the reconnect with your utility.',
      },
    ],
  },
};
