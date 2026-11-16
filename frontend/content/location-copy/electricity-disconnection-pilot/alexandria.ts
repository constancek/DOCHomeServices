import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const alexandria: LocationServiceCopy = {
  localParagraph:
    'In Alexandria, getting a disconnected house live again takes a licensed repair to the equipment on the homeowner’s side, and usually an inspector’s sign-off, before the utility will act. Census figures put the median home in the city at 1994, with more than a third built after 2000. That shifts what we find toward storm-bent masts, meter boxes pried loose and recent work that didn’t pass, rather than worn-out panels. The diagnosis comes first, and the written price follows before a single wire is touched.',
  emergencyParagraph:
    'Out on the hills of Alexandria, losing the service means the heat pump or furnace quits, the air conditioner quits and the basement pump quits with them. A meter box hanging loose from the wall deserves a wide berth. Phone 911 about any fallen line, then your utility. An electrician reaches most calls that same day, weekends as well.',
  commonIntro:
    'Since most houses in Alexandria are young and owner-occupied, a cut usually comes from one of these rather than from old age.',
  localFaqs: [
    {
      q: 'Does it matter which utility serves my street in Alexandria?',
      a: 'It decides who we deal with for the reconnect. Some addresses in Alexandria are served by Duke Energy Kentucky and others by Owen Electric Cooperative, and a bill or door hanger shows which. The repair and the paperwork are the same either way; only the call to restore power changes.',
    },
    {
      q: 'Where does the electrical permit come from for a repair in Alexandria?',
      a: 'In Alexandria, the city handles electrical permit applications, and Campbell County deals with zoning and site plans. Our office submits the electrical application for the repair and asks for the inspection in the same breath, because the utility won’t reconnect until that sign-off comes through.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair and reconnects for houses in Alexandria',
    band1Heading: 'Common Causes of Electricity Disconnection in Alexandria',
    commonSituations: [
      'A storm-snapped branch that folded the mast over and tore the meter box off the siding',
      'Finished-basement or addition wiring that failed inspection, leaving the reconnect on hold',
      'Melted plastic behind the meter on a 1990s house where the socket overheated',
      'One leg of the service gone, so half the rooms are dead and the rest still run',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Alexandria',
        body: 'When a house goes dark, the first visit walks the service from the roof bracket to the ground rod, taking in the weatherhead and riser, the cable down the wall, the meter enclosure, the panel and the bonding. Newer houses in Alexandria tend to have a single obvious failure, and spotting it tells us what we’re replacing and what to permit. Grounding and bonding get corrected to today’s code as part of the work, complaint or not. The inspector is booked alongside the repair. Once the meter is reinstalled, power returns one circuit after another, and you keep a written note of anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Alexandria',
        body: 'When an inspector or the utility red-tags a service in Alexandria, they have found a reason it must stay dead, maybe a dangerous panel, no grounding, live conductors in reach, or unpermitted or rejected wiring. Making the worst of it look better changes nothing. Removal follows a licensed electrician fixing the underlying cause and an inspector approving the repair. Save the tag, note or door hanger, since the stated reason saves diagnosis time. Never touch a meter the utility has pulled or locked. Kentucky makes tampering with utility metering a criminal offence, and it would feed power into a service already ruled unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Alexandria',
        body: 'Old houses are scarce in Alexandria, but one left vacant by an estate or a sale that dragged gets gone over carefully before power is requested. Usually a brief inspection clears it, though now and then the panel is past keeping, and you hear that from us after we’ve looked. Putting the old equipment back means the same labour, permit and inspection as a correctly sized modern service, so the quote shows both.',
      },
    ],
    whyTitle: 'Why Homeowners in Alexandria Choose Us for Disconnection Repair',
    whyParagraph:
      'In Alexandria, a cut service stops the heat and leaves the basement unguarded, so we treat it as an emergency. Licensed electricians complete the repair the utility requires, file the permit, meet the inspector and fix the price first.',
    sharedFaqs: [
      {
        q: 'How much should I expect to pay to get power back in Alexandria?',
        a: 'It turns on what broke. A repaired meter base and a full replacement service are not the same job or the same bill. Once we’ve diagnosed it, a flat rate goes to you in writing ahead of the work, and any utility charge is theirs, listed apart from ours. Financing is open to qualifying homeowners.',
      },
      {
        q: 'How long until the lights come back on in Alexandria?',
        a: 'On our side, a single day covers most repairs. The rest of the wait belongs to the inspection, which follows the inspector’s calendar. We ask for it the moment the job is set rather than at the finish, and that is what cuts the time without power most.',
      },
      {
        q: 'Is it all right to reinstall a pulled meter on my own in Alexandria?',
        a: 'No. Both the meter and its lock are utility property, and under Kentucky law interfering with metering equipment is a criminal offence. The cut also happened because of a fault, so restoring power ahead of the repair and inspection energises the very thing that was unsafe.',
      },
    ],
  },
};
