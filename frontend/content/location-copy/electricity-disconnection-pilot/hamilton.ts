import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hamilton: LocationServiceCopy = {
  localParagraph:
    'Hamilton’s electric utility is owned by the city, and its crews won’t set a meter back until a licensed electrician has repaired the owner’s equipment and, most times, a city inspector has passed it. The inspection usually sets the length of the wait. Census figures date over a quarter of homes to before 1940 and the median to 1956, and nearly half are rented. In German Village and along Dayton Lane, decades-old panels and thin grounding come with the territory. You see a written price once we’ve found the fault.',
  emergencyParagraph:
    'Losing the service shuts down the furnace or air conditioner and leaves the sump pump useless, and the losses mount. Give a meter box ripped from the brick a wide berth. A downed line is a 911 call first and the utility second. Our electricians usually reach these calls the same day, weekends too.',
  commonIntro:
    'From the old streets along the Great Miami to the postwar neighborhoods, these are the reasons a service in Hamilton usually gets cut:',
  localFaqs: [
    {
      q: 'Who handles electrical permits for disconnection work in Hamilton?',
      a: 'Permits come from the City of Hamilton, not Hamilton County, and a registered contractor has to pull the electric permit before work starts. We do that, book the city’s inspection along with the repair and coordinate the reconnect, so the paperwork moves while the work does.',
    },
    {
      q: 'Does meter work on an older house in Hamilton need design review?',
      a: 'If the house sits in German Village, Dayton Lane, Rossville or another city historic area, exterior changes need a Certificate of Appropriateness from the Architectural Design Review Board. Like-for-like work can get a free administrative one. We find out from the city whether your meter or mast job counts before anything goes up on the wall.',
    },
    {
      q: 'I rent in Hamilton and the service was cut. Who gets it fixed?',
      a: 'Whoever owns the place. Tell your landlord about the cut service in a dated letter or email, and photograph any tag. Under ORC 5321.04, Ohio owners must keep the wiring and fixtures they hand over safe and in decent order. We restore power, not leases, so the owner hires us and approves the figure.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repairs and reconnects for older houses and rentals in Hamilton',
    band1Heading: 'Common Causes of Electricity Disconnection in Hamilton',
    commonSituations: [
      'Panel work done without a permit in an older house, caught at a city inspection',
      'A socket browned by years of heat on a house in German Village or Dayton Lane',
      'A basement panel near the river that took on water',
      'A two-family where one flat sat vacant so long the city wants the service looked at',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Hamilton',
        body: 'In Hamilton, a dead service comes back only after every piece of it has been read. The owner answers for the meter box, mast, weatherhead, entrance cable and panel, while city crews pull and reset the meter. Once we’ve pinned the fault to the mast, the base or the panel, we pull the permit and tie the inspection to the repair date, since that visit governs your wait. Bonding and grounding get corrected to current code along the way. With the meter back in, the house wakes up circuit by circuit and you get notes on anything suspect.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Hamilton',
        body: 'Around Hamilton, inspectors and city crews tag a service over an unsafe panel, a ground that was never run or live conductors left open. While it’s on, the power stays off, and covering up the obvious hazard won’t talk anyone round. The tag lifts after a licensed electrician puts the cause right and a city inspector approves it. Whatever tag or hanger was left tells us where to look first, so save it. If the meter is out or locked, stay away. Ohio makes tampering with metering a crime, and it would push current into equipment someone has flagged as dangerous.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Hamilton',
        body: 'Older houses that sat empty through an estate, or a two-family waiting on a buyer, get slower checking before the meter goes back, since their panels or grounding can trail code a long way. A quick look clears some, others end with a replacement panel, and we tell you which once we’ve seen it. Rebuilding the 1950s setup costs close to a right-sized modern service in labour, permit and inspection, so both prices go on paper.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hamilton Choose Us for Disconnection Repair',
    whyParagraph:
      'With the meter pulled, the furnace and sump pump are dead, so we answer fast. Licensed electricians make the repair the city utility wants, pull the permit, meet the inspector and agree the price first.',
    sharedFaqs: [
      {
        q: 'How do you price disconnection repair in Hamilton?',
        a: 'By what actually broke. Rebuilding a meter base is a modest job beside replacing a whole service, so the diagnosis comes before any number. Then a flat figure goes on paper, and whatever the city bills you stays off our invoice. Qualifying homeowners can finance it.',
      },
      {
        q: 'How fast can you get the power back in Hamilton?',
        a: 'Our part generally fits inside a working day. The city’s inspection calendar sets what follows, so the inspector gets requested the moment you book us, not once we’re done. Nothing else we do takes as many days off an outage.',
      },
      {
        q: 'Am I able to remove the meter lock myself in Hamilton?',
        a: 'No. Ohio law treats meddling with the utility’s lock or meter as a criminal offence. The power was also cut for a reason, and getting around that before the fault is fixed and inspected energises equipment somebody already ruled out.',
      },
    ],
  },
};
