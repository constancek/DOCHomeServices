import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const northside: LocationServiceCopy = {
  localParagraph:
    'In Northside, power comes back in a fixed order. Our licensed electricians repair the part of the service that belongs to the owner, an inspector normally signs the job, and the utility puts the meter back. Census figures date more than half the homes here to 1939 or earlier, and plenty may still run on the meter socket and panel they were wired with. Decades of heat brown a socket until it fails, and an inspector who sees that checks the grounding. You see a written price before we start.',
  emergencyParagraph:
    'With the meter out, there’s no furnace or air conditioner and the basement sump sits silent, so the losses mount. Don’t stand under or beside a meter box hanging off the siding. Any wire on the ground means 911, then Duke Energy Ohio. An electrician is usually at the door the same day, weekends included.',
  commonIntro:
    'From the old frame houses off Hamilton Avenue to the newer blocks further up, the services we restore in Northside were cut for one of these reasons:',
  localFaqs: [
    {
      q: 'Can a panel be dried and reused after a flooded basement in Northside?',
      a: 'Once a panel has been under water, it can’t go back into service, however clean it looks after drying. Runoff from the 2019 sewer project flooded homes around Kirby and Virginia Avenues, and a soaking like that is exactly what retires a panel. We fit a replacement, get it inspected and set up the reconnect.',
    },
    {
      q: 'My landlord’s house in Northside has a utility tag on it. What do I do?',
      a: 'Write to the landlord, attach a photo of the tag, and file a copy for yourself. ORC 5321.04 says an Ohio landlord must keep the electrical fixtures and systems they provided safe and in proper repair, so booking us falls to the owner. Restoring power is our trade; lease questions are yours and theirs.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for frame houses and two-families in Northside',
    band1Heading: 'Common Causes of Electricity Disconnection in Northside',
    commonSituations: [
      'A brown, heat-cracked meter socket on a house wired before 1940',
      'A basement panel retired after floodwater got into it',
      'Grounding nobody can locate on a two-family, and a red tag for it',
      'Unpermitted wiring that surfaced, uninspected, when a house was sold',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Northside',
        body: 'The house is dark already, so we go straight at the cause. Our electrician starts where the drop meets the roofline and works down past the mast and entrance cable, through the meter base and panel, to the ground rod and bonding. Between them, those findings name the repair and its permit. Cincinnati hands electrical permits to Inspection Bureau, Inc. (IBI), and our inspection request rides along with the work order. Any grounding or bonding below today’s code gets corrected during the job. After the reconnect, we wake the house one circuit after another, mark up the panel directory and jot down anything that bears watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Northside',
        body: 'Three things earn most of the tags we see in Northside, a meter socket scorched brown, a panel judged unsafe and grounding that isn’t there. The utility issues that tag deliberately, and a quick tidy of whatever looks burnt won’t persuade it otherwise. It comes off after we correct the root problem and the inspector accepts our correction. A hanger or note on the door usually says why the power went, so pass it to us. Leave a locked or pulled meter exactly as found; Ohio counts interfering with one as criminal tampering, and it would feed a service the utility has already turned down.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Northside',
        body: 'A house in Northside that sat without power between tenants gets a slower restart, because a pre-war panel or ground can be well adrift of today’s code. A short look settles whether a quick inspection will do or the panel has to come out, and you hear the answer before we start. The labour, permit and inspection hardly change between refitting the old gear and a right-sized new service, so both land on the quote.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Northside Choose Us for Disconnection Repair',
    whyParagraph:
      'A dead service here shuts down heat and the sump pump at once, so we treat disconnection calls in Northside as urgent. Licensed electricians fix what the utility flagged, file the permit, meet the inspector and price it first.',
    sharedFaqs: [
      {
        q: 'What does it cost to get power back to a disconnected house in Northside?',
        a: 'The failure decides it. Swapping one browned socket can be a short visit; rebuilding the whole service on a pre-war frame house takes far longer. After the diagnosis you approve one flat figure in writing, and whatever the utility bills you stays off our invoice. Qualifying homeowners can finance it.',
      },
      {
        q: 'How long does reconnection usually take in Northside?',
        a: 'On our end, the repair is usually done within a single day. The inspector’s calendar is what drags things out, and we don’t control it, so the request is lodged at booking, not at the end. Nothing else we can do shortens the dark stretch as much.',
      },
      {
        q: 'Is it all right to reseat the meter myself in Northside?',
        a: 'No. The meter, and the lock on it, are the utility’s property even though the box around them is yours, and Ohio law treats meddling with them as criminal tampering. The fault behind the cut also hasn’t gone anywhere, so plugging the meter back in would light up equipment already judged unsafe.',
      },
    ],
  },
};
