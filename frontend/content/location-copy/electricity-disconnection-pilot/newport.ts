import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const newport: LocationServiceCopy = {
  localParagraph:
    'When Duke Energy Kentucky leaves a hanger on your door in Newport, the lights stay out until an electrician with a license corrects what the owner is answerable for and, most times, an inspector approves it. By Census count nearly half the housing here went up in 1939 or before, much of it brick holding two to four flats apiece, so we keep meeting tired original panels, skimpy grounding and meter sockets browned by generations of load. A diagnosis and a written number come before anything else.',
  emergencyParagraph:
    'One dead service in a divided brick house can leave several households without furnace, air conditioning or sump pump at once. Don’t walk under a meter box peeling away from the masonry. A wire down across a sidewalk in Newport means 911, then the utility. We usually get someone over the river that same day, Saturdays and Sundays as well.',
  commonIntro:
    'Behind most dead services in the rowhouses, flats and Victorian blocks of Newport, we find one of these:',
  localFaqs: [
    {
      q: 'Will moving a meter base in Newport need historic approval?',
      a: 'Possibly. East Row, Buena Vista and York Street are local historic districts, and plenty of outside alterations there need a Certificate of Appropriateness from the city’s Historic Preservation office first. Since a meter base or mast hangs on the facade, we ask the city before relocating either one.',
    },
    {
      q: 'Who acts when my apartment loses power with a utility notice in Newport?',
      a: 'Your landlord. Send them a written message about the notice, snap a photo of the tag and keep both. Kentucky has no landlord statute we’d quote on this, so the building owner chooses who repairs it. Where flats share one meter bank, every unit hangs on that single fix.',
    },
  ],
  overrides: {
    ctaLine: 'Bringing power back to rowhouses and divided flats in Newport',
    band1Heading: 'Common Causes of Electricity Disconnection in Newport',
    commonSituations: [
      'One scorched position in a meter bank feeding the flats of a split Victorian',
      'An East Row house red-tagged because its original panel has no proper ground',
      'Upstairs rooms dark after one leg gave out inside a century-old panel',
      'A rehab whose new circuits skipped the permit and so never saw an inspector',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Newport',
        body: 'The lights are out, so we begin at the roofline where the drop ties in and follow the service through mast, entrance conductors, meter base and panel, right down to the bonding and ground. Those findings fix the scope and the permit, which the City of Newport Building Department issues. We put the inspection request in when you sign, not when the last wire is landed, because that wait is usually the longest stretch of the outage. Grounding gets brought to present code. Once the meter returns, each breaker goes on in turn, the directory is relabelled and we leave notes about anything this old building deserves watching for.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Newport',
        body: 'Here the utility’s property ends at the meter glass. The socket enclosure around it is yours, a detail that startles almost every landlord we talk to, and so are the mast, weatherhead, conductors and panel. Tags on these old buildings mostly cite a dangerous panel, a missing ground or live parts within reach, and each one is an order to keep the service dead. Tidying the obvious mess won’t release it; a licensed correction plus an inspector’s signature will. Hang on to whatever was left on the door. A pulled or locked meter stays put, since tampering with metering equipment is a criminal offence in Kentucky.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Newport',
        body: 'A flat between leases, or an inherited rowhouse shut up for a while, gets extra scrutiny before energising, because a panel in a building this old can trail code by generations. Sometimes a quick look clears it and sometimes the panel has to go; you’ll know which before work starts. Labour, permit and inspection hardly differ between rebuilding the old setup and fitting a properly sized new one, so both get quoted.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Newport Choose Us for Disconnection Repair',
    whyParagraph:
      'A single failed service in a divided house leaves several families cold, so we move quickly. Licensed electricians correct the defect the utility named, pull the city permit, meet the inspector and settle the price up front.',
    sharedFaqs: [
      {
        q: 'What should I budget to get a service reconnected in Newport?',
        a: 'That rides on what broke. A burned socket is a modest job beside replacing everything from weatherhead to panel on an old rowhouse. After diagnosing, we give one flat written figure, and anything the utility charges stays off our invoice. Qualifying homeowners can pay through financing.',
      },
      {
        q: 'How long do people in Newport usually wait for power?',
        a: 'Our part is often one working day. The city inspection calendar decides most of what’s left, and nobody on our crew controls it. Asking for the inspector on the same day you approve the repair takes more time off the outage than any other step.',
      },
      {
        q: 'Could I plug the meter back in myself in Newport?',
        a: 'No. Both the meter and its lock are utility property, and only the utility removes that lock and reconnects. The cut also followed a fault, so pushing current back before a repair would energise wiring that was already ruled unsafe.',
      },
    ],
  },
};
