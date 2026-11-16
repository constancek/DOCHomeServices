import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const southgate: LocationServiceCopy = {
  localParagraph:
    'A disconnection notice on a door in Southgate means the power is staying off until a licensed electrician fixes whatever the owner is responsible for and, most often, an inspector passes it. Housing in the city is a real mix. By Census figures, close to three in ten homes predate 1940, where you find old panels and thin grounding, while roughly four in ten units sit in bigger buildings fed through one bank of meters. We find the fault and write the price down before touching anything.',
  emergencyParagraph:
    'Once the meter’s pulled, the furnace or AC and the sump all stop, so the outage gets dearer as it drags on. Treat a meter box torn from the wall as off limits. Anyone who spots a wire down should phone 911 and the utility first. Most calls in Southgate get our electrician that day, weekends too.',
  commonIntro:
    'In Southgate, pre-war houses and apartment blocks lose their service for a handful of reasons, and these four lead:',
  localFaqs: [
    {
      q: 'The utility left a door hanger at my house in Southgate. What should I do with it?',
      a: 'Hold on to it and hand it to our electrician. Hangers and tags usually say why the service was cut, which shortens the search. If nothing was left behind, we begin where the wires reach the house and keep working inward until we find what the utility objected to.',
    },
    {
      q: 'I rent an apartment in Southgate and the power was cut. Who arranges the repair?',
      a: 'Send the landlord or building manager a written note and keep a copy, because booking electrical work falls to the owner. Where the building is a condo or apartment block, work on the meters everyone shares or on the outside walls may first need the association’s approval.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection repairs for houses and apartment buildings in Southgate',
    band1Heading: 'Common Causes of Electricity Disconnection in Southgate',
    commonSituations: [
      'An old fuse-era panel in a pre-war house, tagged because nothing ties it to a ground',
      'A meter bank on an apartment building where one socket overheated and melted',
      'A 1980s or 1990s house whose unpermitted addition came up in a pre-sale inspection',
      'A rental unit that sat unoccupied long enough for the service to need a fresh check',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Southgate',
        body: 'Guessing wastes time you don’t have. We go over each piece in turn, from the service head and riser to the entrance cable, the meter enclosure, the breaker box, and the ground and bonding. Those findings decide whether you need a riser, a meter socket or a new panel, and which permit to pull. The failure gets fixed, and any weak grounding is brought to current code, because no inspector will pass it. For houses in Southgate, our office books the inspector when it files the permit. After the utility resets the meter, circuits return singly, the panel is relabelled, and anything worth watching goes in writing.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Southgate',
        body: 'Utility crews leave a tag when something is plainly wrong, whether a panel nobody should rely on, a ground never run or wiring left bare, and as long as it hangs there the service stays off. Sweeping away the scary-looking part won’t get it removed. Our licensed electrician has to correct the cause, then an inspector has to approve the work. The box, riser, entrance cable and panel are the owner’s to repair. The meter, pulled or locked, isn’t, so don’t touch it. Kentucky counts meddling with utility metering as a criminal offence, and on a faulted service it would push current into condemned equipment.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Southgate',
        body: 'Rentals between tenants and pre-war houses left shut up for a long time get a slower look before the power is restored. For some, that look is the whole job; for others the panel is beyond saving, and you’ll know which as soon as we have looked. A straight refit costs about the same labour, permit and inspection as a properly sized modern service, so both prices sit side by side on the quote.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Southgate Choose Us for Disconnection Repair',
    whyParagraph:
      'In Southgate, a house with no power goes ahead of routine jobs. Our licensed electricians put right what the utility objected to, pull the permit, walk the inspector through it and fix the price with you first.',
    sharedFaqs: [
      {
        q: 'How is the price worked out for disconnection repair in Southgate?',
        a: 'From the diagnosis. One overheated socket on a meter bank is far less work than replacing a house’s whole service, so we look first and then write down a flat price. Whatever the utility charges stays off our bill. Qualifying homeowners can finance the work.',
      },
      {
        q: 'How long does a reconnect take in Southgate?',
        a: 'Work on our side often fits in a single day. Inspection timing is the real variable, because it follows the inspector’s calendar, not ours. We request a slot when the job is booked, which does more to shorten the outage than any other step.',
      },
      {
        q: 'Could I just put the meter back in myself?',
        a: 'No. The meter and its lock are utility property, and Kentucky makes tampering with either a criminal offence. After a fault-related cut, you’d also be sending power back into the failed equipment. The utility puts the meter back once the repair passes inspection.',
      },
    ],
  },
};
