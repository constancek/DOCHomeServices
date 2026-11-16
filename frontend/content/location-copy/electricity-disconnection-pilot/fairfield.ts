import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const fairfield: LocationServiceCopy = {
  localParagraph:
    'In Fairfield, getting a cut service back takes a repair by a licensed electrician to the owner’s side of the meter, plus, on most jobs, an inspector’s pass. The city grew mostly in the 1960s and 1970s, with a 1978 median year built in Census figures, so plenty of sockets and panels here are on their original parts. Roughly a quarter of homes are apartments, where the owner or manager books us. Diagnosis comes first, then a written quote.',
  emergencyParagraph:
    'When the service is cut at a house in Fairfield, the furnace or AC quits and the sump pump goes quiet, which matters on low ground by the Great Miami River and Pleasant Run. Keep clear of a meter box swinging off the wall. A downed wire means 911, then your utility. Most calls get a same-day electrician, weekends too.',
  commonIntro:
    'Across the subdivisions, condos and apartment complexes of Fairfield, services tend to get cut for reasons like these:',
  localFaqs: [
    {
      q: 'Which utility reconnects my power in Fairfield?',
      a: 'That depends on your street, because the city lists two electric providers, Duke Energy Ohio and Butler Rural Electric Cooperative. Whichever serves you pulls the meter and sets it back. The repair, from the meter box and mast up to the weatherhead and in through the cable to the panel, is the owner’s, and we work with either provider.',
    },
    {
      q: 'Who inspects disconnection repairs in Fairfield?',
      a: 'The city has its own Building & Zoning Division, so Butler County isn’t involved. A new or replacement building service needs an electrical permit from the city, pulled by a contractor registered there. We handle that filing and line up the city inspection alongside the repair, which is the approval the utility asks to see.',
    },
    {
      q: 'I rent an apartment in Fairfield and the power was cut. Who fixes it?',
      a: 'The landlord or property manager arranges it. Send them a written report and keep your copy. ORC 5321.04 makes an Ohio owner responsible for keeping the wiring and fixtures they supplied safe and in repair. We restore service, not leases. In a condo, a shared meter bank may also need the association’s approval.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnected power restored for houses and condos in Fairfield',
    band1Heading: 'Common Causes of Electricity Disconnection in Fairfield',
    commonSituations: [
      'A 1970s socket that ran hot until the plastic around the meter melted',
      'A basement panel near Pleasant Run that floodwater reached',
      'Remodel or addition wiring that failed inspection, with the service shut off until it’s fixed',
      'One damaged slot in the shared meter bank of a condo building',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Fairfield',
        body: 'The wait has two parts once the power is off, our repair and the city’s inspection, so we overlap them. First comes a full check of the service, top to bottom, which pins down the repair and the permit type. We replace or fix what failed and update the grounding and bonding to present code, whether or not they caused the trouble, because an inspector won’t pass old grounding. The city inspection is requested with the job. Then the utility gets our paperwork and refits the meter, and we restore power one circuit after another, noting anything you should keep an eye on.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Fairfield',
        body: 'A burned socket, bare conductors or wiring that never had a permit can each get a service tagged when the utility finds them on the owner’s side. Once tagged, it stays off. Clearing away the obvious mess won’t change that, and what does is a licensed electrician fixing the real cause and the inspector approving the fix. Save the door hanger or note, since the reason is usually spelled out on it. Pulled or locked meters stay as they are. Ohio counts tampering with a meter as a crime, and on a faulted service it would push current straight into gear already ruled unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Fairfield',
        body: 'Between leases, apartments in Fairfield can sit empty, and houses do the same after a sale, sometimes long enough that the utility wants the service checked first. It may take a short look or a new panel, and you hear which after we inspect. With original equipment, the quote shows the same parts again beside a correctly sized modern service, as labour, permit and inspection hardly differ.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Fairfield Choose Us for Disconnection Repair',
    whyParagraph:
      'No service means no heat and an idle sump pump, so these jobs jump the line. Licensed electricians fix what the utility is holding out for, pull the city permit, meet the inspector and agree the price before starting.',
    sharedFaqs: [
      {
        q: 'What does it cost to get power reconnected in Fairfield?',
        a: 'The failure sets the price. One meter base is a short day, and a whole new service is a long one, so we diagnose before quoting. You then approve a single flat rate in writing, with any utility charge kept off it. Qualifying homeowners can finance.',
      },
      {
        q: 'How soon can the power come back on in Fairfield?',
        a: 'Our part usually takes one day. The rest depends on when the city inspector can come, so we ask for that visit at booking, not at the end. Requesting it early is the one step that most reliably shortens the time without power.',
      },
      {
        q: 'Is it safe to reconnect the meter myself in Fairfield?',
        a: 'No. Meters belong to the utility, and putting one back yourself counts as tampering under Ohio law. If the cut was for a fault, it would also energise equipment already found unsafe. Leave it for the utility, which reinstalls it once our repair passes inspection.',
      },
    ],
  },
};
