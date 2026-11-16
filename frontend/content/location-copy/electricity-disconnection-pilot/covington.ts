import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const covington: LocationServiceCopy = {
  localParagraph:
    'Old housing is the story at the meter in Covington, where 9,268 of 21,048 homes date to 1939 or earlier by Census figures. We open original panels, find grounding gone thin and pull sockets browned by decades of load. Once Duke Energy Kentucky has pulled or locked a meter, leave it, because it stays that way until a licensed electrician makes the repair and, usually, an inspector approves it. That repair is our work, priced in writing after the diagnosis.',
  emergencyParagraph:
    'Lose the service near the Ohio and Licking and you lose the furnace, the air conditioning and the sump pump, which in Covington can turn a wet week into a flooded basement. Give a meter box torn from the wall room. A wire down means 911 first, the utility next. Same-day visits cover most of these calls, weekends included.',
  commonIntro:
    'These causes account for most of the dead services we see in Covington, in older houses and converted flats alike.',
  localFaqs: [
    {
      q: 'Does a meter or mast repair need historic review in Covington?',
      a: 'It can. Covington has Historic Preservation Overlay zones, and any exterior alteration inside one needs a Certificate of Appropriateness from the city’s Historic Preservation Office first. If a meter or mast has to move, that changes the outside of the house, so we check with that office before the work.',
    },
    {
      q: 'I rent in Covington and the power was cut. Who handles it?',
      a: 'Tell the landlord, ideally in a letter or email you keep a copy of. The service gear, from the meter box inward, belongs to whoever owns the property, so they book the repair and we deal with them. Where a management company runs the building, report it there, and they can bring us in directly.',
    },
    {
      q: 'Why do only some rooms have power in my house in Covington?',
      a: 'Most likely one leg of the service is gone, at the point where the drop meets the house or somewhere in the panel. Don’t wait on it, because a house running on one leg sends odd voltages through the motors and control boards in the furnace, fridge and washer. We find the dead side and fix it.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored for older homes and flats in Covington after a disconnection',
    band1Heading: 'Common Causes of Electricity Disconnection in Covington',
    commonSituations: [
      'A meter locked by the utility after a scorched socket turned up on an older house',
      'An original panel in a converted house tagged for missing grounding',
      'A mast pulled loose when a limb came down on the service drop',
      'Renovation wiring done without a permit and flagged at sale',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Covington',
        body: 'Getting power back to a house in Covington is about order. The electrician begins at the mast head and works down, entrance cable, meter base, panel, ground, and that survey settles the size of the job and which permit we need. Older houses in the city usually need grounding and bonding brought to current code, so that goes into the repair before any inspector arrives. Permit and inspection are lodged the day you book. When the meter is back, circuits are switched on separately, the panel is labelled and you keep written notes on anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Covington',
        body: 'Where a red tag hangs in Covington, the utility has decided the service can’t be powered safely, perhaps over a worn panel, absent grounding, conductors left exposed or a socket cooked by heat. It is an instruction to be obeyed. Cleaning up the visible mess won’t shift it, but a licensed electrician correcting the cause, with an inspector signing off, will. Save the tag or hanger, as the reason on it speeds the diagnosis. The utility’s property ends at the line and the meter, and the box, mast and panel are yours. A pulled or locked meter stays as found, because Kentucky makes tampering a criminal offence.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Covington',
        body: 'Some older houses stand empty in Covington for a stretch, between tenants or mid-renovation, and a service that has been dead that long is energised slowly and carefully. One may need only a short inspection; another turns into a panel replacement, a call we make after looking. Because a rebuild of the original and a properly sized new service cost similar labour and permits, we write up both.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Covington Choose Us for Disconnection Repair',
    whyParagraph:
      'A house by the rivers needs its sump pump and its heat, so we don’t sit on a dead service. Licensed electricians carry out the repair the utility wants, file the permit, meet the inspector and give the price first.',
    sharedFaqs: [
      {
        q: 'How much will it cost to get the power back in Covington?',
        a: 'Price follows the failure. Replacing one scorched socket and rebuilding the whole service on an older house are separate jobs entirely. We diagnose, write down one flat figure for you to approve before work, and keep it apart from whatever the utility bills. Homeowners who qualify can finance it.',
      },
      {
        q: 'How many days will my house in Covington be without power?',
        a: 'Expect the repair to fit in a single day. What varies is the inspector’s calendar. We put in the permit and the inspection request at booking, and for a house inside a historic overlay we raise any outside change early so it doesn’t stall the job.',
      },
      {
        q: 'Can I cut the meter lock and restore power myself in Covington?',
        a: 'No. In Kentucky, breaking into utility metering is a criminal offence, and the cut was made because the service isn’t safe. Pushing power back without the repair sends it into that same fault. After our work passes inspection, the utility handles reconnection.',
      },
    ],
  },
};
