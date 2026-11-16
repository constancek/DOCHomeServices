import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastWestwood: LocationServiceCopy = {
  localParagraph:
    'When only some rooms go dark in East Westwood, the house has usually lost one incoming leg, at the drop or in the panel. If the utility has disconnected the service, it won’t return until a licensed electrician puts the faulty equipment right and, nearly always, an inspector signs. By Census figures, the typical home dates from 1958 and roughly three of every four are rented, so the bill tends to land on a landlord. We pin down the fault and price it in writing first.',
  emergencyParagraph:
    'Six in ten homes in East Westwood heat with electricity, so when the service goes, the heat and the sump pump go too. Don’t go near a meter box torn away from its wall. If you spot a wire down, ring 911 and Duke Energy Ohio first. An electrician reaches most calls the same day, weekends included.',
  commonIntro:
    'In the rentals, apartment buildings and 1950s houses of East Westwood, a cut or refused service nearly always comes down to one of these:',
  localFaqs: [
    {
      q: 'Who signs off electrical repairs in East Westwood?',
      a: 'Because the neighborhood is part of the city, Cincinnati’s contractor for electrical permits, Inspection Bureau, Inc. (IBI), does the review and the inspection. Our permit goes in together with the inspection request, as the utility needs that approval recorded before a meter can return to its socket.',
    },
    {
      q: 'What can a tenant do when the landlord hasn’t acted on a dead service?',
      a: 'Text or email the landlord, describe what went dead and attach a photo of any notice, then keep that record. Ohio’s ORC 5321.04 requires owners to keep the wiring and fixtures they provided safe and working, which makes the repair the owner’s call. We restore power, not leases. Complexes with an office handle it through management.',
    },
  ],
  overrides: {
    ctaLine: 'Power back on for rentals and family homes in East Westwood',
    band1Heading: 'Common Causes of Electricity Disconnection in East Westwood',
    commonSituations: [
      'Half the rooms without power after one leg of the service went out',
      'A rental where wiring added without a permit failed inspection',
      'An apartment building panel red-tagged for missing grounding',
      'A flat that sat vacant between leases until the utility asked for its service to be looked at',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in East Westwood',
        body: 'One dead leg sends strange voltages through anything with a motor or a circuit board, so a half-lit house here gets moved up our list. We test the drop, the mast, the socket, the panel and the ground connection in turn, which shows whether you’re facing mast work, a meter base swap or a new panel. Whatever the cause, grounding and bonding leave meeting present code, since the inspector checks them. After the utility restores service, breakers go back on individually, the panel gets labelled and you receive a written rundown of concerns.',
      },
      {
        title: 'Red Tags and Utility Disconnects in East Westwood',
        body: 'In East Westwood, most tags we see trace to a tired panel, grounding nobody ever installed, uncovered live wiring or an inspection the work didn’t pass. To the utility, the tag reads as stop. Clearing up the visible damage won’t change its mind. A licensed electrician correcting the underlying fault, followed by the inspector’s approval, will. Pass us any notice or door hanger, which often states the reason, and if there isn’t one we start at the service entrance. Never touch a pulled or locked meter. Ohio law counts that as meter tampering, a criminal offence, and it would also re-energise a known fault.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in East Westwood',
        body: 'Turnover in the rentals here leaves flats vacant, and when one has been dark for ages, we bring it back slowly. Panels and grounding in those units can lag years behind the rules. Sometimes a short look settles it and sometimes the building needs a new panel, which we tell the owner once we’ve checked. Rebuilding the old setup and installing a modern, correctly sized service share the same labour, permit and inspection, so owners get two quotes.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in East Westwood Choose Us for Disconnection Repair',
    whyParagraph:
      'In an electrically heated rental, no power means no heat, and we respond accordingly. Our licensed electricians carry out the repair the utility is demanding, handle the permit and inspector, and agree the price first.',
    sharedFaqs: [
      {
        q: 'What does a disconnection repair cost in East Westwood?',
        a: 'That comes down to the part that failed. Replacing a socket costs much less than replacing the full service, and the diagnosis settles which applies. The flat rate is written out before we lift a tool, and any utility charges stay off our bill. Qualifying homeowners can use financing.',
      },
      {
        q: 'How long before the power is back in East Westwood?',
        a: 'Our work normally takes a single day. Most of the delay belongs to the inspection, which is scheduled by the inspector, not by us. Getting it requested as soon as the job is booked is the one move that reliably shortens the time without power.',
      },
      {
        q: 'Can a landlord or tenant reconnect the meter themselves?',
        a: 'Neither should. Whoever breaks the seal or the lock is tampering with utility property, which is a criminal offence in Ohio, and the fault behind the shutoff is still there. Plugging the meter back in only re-energises it. We fix the cause and get the utility to reconnect.',
      },
    ],
  },
};
