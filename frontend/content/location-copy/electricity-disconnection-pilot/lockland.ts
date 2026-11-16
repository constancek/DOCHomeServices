import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lockland: LocationServiceCopy = {
  localParagraph:
    'Pulled meters in Lockland usually trace to equipment older than anyone living there, and nothing comes back on until our licensed electrician has mended the owner’s half of the service, with an inspector usually approving that mend too. Census figures show half the homes in the village were built by 1944. Sockets cooked behind the meter for decades, grounding nobody updated and panels from another era all lengthen the inspector’s list. You get our diagnosis and a figure on paper before a single tool comes out.',
  emergencyParagraph:
    'A disconnected house goes without furnace or air conditioner, and the sump pump sits dead in its pit. Never reach for a meter box swinging loose on its wall. Any wire down in Lockland means 911 first, then the utility, with kids and pets kept in. Most calls see an electrician arrive that day, Saturdays and Sundays too.',
  commonIntro:
    'Behind most of the dead services we restore in the older houses and apartment blocks of Lockland sits one of these:',
  localFaqs: [
    {
      q: 'Who files the permit for a service repair in Lockland?',
      a: 'We file it ourselves and request the inspection when the repair goes on the schedule. Socket, mast and panel work all need a permit, and the utility checks for a passed inspection before resetting the meter, so getting the paperwork moving early keeps the outage short.',
    },
    {
      q: 'What can a renter in Lockland do about a building with no power?',
      a: 'Raise it with your landlord by dated letter or email, snap the tag, and keep that record. Ohio’s ORC 5321.04 obliges owners to keep supplied wiring and electrical fixtures safe and in good repair. Your landlord books the electrician; we fix services, not rental agreements.',
    },
  ],
  overrides: {
    ctaLine: 'Help getting the lights back on at houses and apartments in Lockland',
    band1Heading: 'Common Causes of Electricity Disconnection in Lockland',
    commonSituations: [
      'Heat damage and melted plastic in the socket behind the meter',
      'A red tag hung for bare conductors in a cellar panel',
      'Wiring added years back with no permit, so no inspection ever happened',
      'Lights out in half the rooms after the service lost one leg',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Lockland',
        body: 'With your lights out, our electrician starts on the roofline and works down, riser pipe and weatherhead first, then the cable feeding your socket, then breakers, ground rods and bonding jumpers. That survey shows which part failed, socket, riser or panel, and the permit follows from it. Grounding is brought to today’s code during the repair, since inspectors look there first. Your inspection request goes in as soon as the repair date is set. After the utility refits the meter, breakers wake one by one and a short written note covers anything needing attention later.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Lockland',
        body: 'Most tags we see in Lockland were hung over a panel in poor shape, grounding that was never installed, or live conductors within reach. Treat that tag as the utility’s ruling that this service stays dead. Sweeping up visible damage changes nothing; the tag comes down only after our licensed electrician has cured the real fault and an inspector has passed the cure. Save the door hanger or slip the crew left, because it normally says why they cut you off. A locked or removed meter must stay that way. Ohio makes meter tampering a crime, and it would also re-energise wiring the utility already condemned.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Lockland',
        body: 'Houses in Lockland that stood empty for a long spell get extra caution before we bring them back. Their panels and grounding may lag well behind code, so a quick inspection might settle it or a new panel might be needed, and you hear which after we look. Refitting old gear or installing a new service sized for today costs roughly alike in labour, permit and inspection, so you see both quotes.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Lockland Choose Us for Disconnection Repair',
    whyParagraph:
      'Our electricians know the pre-war panels and apartment buildings in Lockland, and they treat a house without heat or a sump pump as urgent. They correct what the utility flagged, take the permit through, and the price comes first.',
    sharedFaqs: [
      {
        q: 'What does it cost to fix a dead service in Lockland?',
        a: 'Your bill follows the failure. A fresh meter socket makes a much smaller day than rebuilding everything from riser to panel. Once we know the cause, you approve one fixed figure before we start, with no utility fees folded into it. Qualifying homeowners can finance the work.',
      },
      {
        q: 'When will the lights come back on in Lockland?',
        a: 'Our part often finishes within a single day. The inspector’s calendar usually sets whatever remains, and that schedule isn’t ours. Requesting your inspection the day the repair is booked trims the outage most, so that’s simply how every booking works here.',
      },
      {
        q: 'Is it legal to reset the meter myself in Lockland?',
        a: 'No. Only the utility may refit a meter it pulled or locked, and Ohio treats meddling with one as a criminal offence. The cut was made because of a fault as well, so forcing power back on would push it straight into equipment somebody already found dangerous.',
      },
    ],
  },
};
