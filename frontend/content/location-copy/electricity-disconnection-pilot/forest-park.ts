import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestPark: LocationServiceCopy = {
  localParagraph:
    'Close to half the homes in Forest Park are rented, Census figures show, and most went up during the 1960s and 1970s, so a lot of our disconnection calls come from landlords with a unit sitting dark between tenants. The rule is the same for everyone. The utility won’t put power back until a licensed electrician has repaired the owner’s equipment and, on most jobs, an inspector has approved that work. We look the service over first, then give the owner a written price.',
  emergencyParagraph:
    'With no service, a house in Forest Park has no furnace, no air conditioner and no sump pump, and costs grow. A meter box hanging off its wall is one to walk away from. Downed lines get a 911 call, then a call to Duke Energy Ohio. On most calls, an electrician shows up that day, weekends too.',
  commonIntro:
    'Forest Park was laid out as a planned town, and across its houses and apartment complexes, services usually get cut for one of these:',
  localFaqs: [
    {
      q: 'Who inspects disconnection repairs in Forest Park?',
      a: 'The city building department deals with building permits, but Inspection Bureau, Inc. (IBI) inspects the electrical side. We file for the electrical permit and set the IBI visit at the time we set the repair, because the utility looks for that approval before the meter returns.',
    },
    {
      q: 'Who books the repair if my rental in Forest Park is disconnected?',
      a: 'The owner does. Put the problem in a letter or email to the landlord or complex office and keep a copy. Ohio’s ORC 5321.04 makes an owner keep the wiring and electrical fixtures they provided safe and usable. We handle the service, not the lease, and we set the work up with the owner or the manager.',
    },
  ],
  overrides: {
    ctaLine: 'Power back on for houses and rentals in Forest Park',
    band1Heading: 'Common Causes of Electricity Disconnection in Forest Park',
    commonSituations: [
      'A rental between tenants that the utility won’t reconnect until the service is checked',
      'A burned meter socket on an original 1960s service, with melted plastic at the meter',
      'Half the house dark because one leg of the service was lost at the panel',
      'A failed inspection on panel work that was never permitted',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Forest Park',
        body: 'Two clocks start when your service is cut, the repair and the inspection, and we run them together. The first visit takes in the full service, roof bracket to ground rod, so the weatherhead, mast, service cable, meter base and panel all get looked at, and from that we know the repair and the permit. Grounding and bonding are brought up to the code in force today while we work, as the inspector checks them regardless. We put the inspection request in that same day. When the utility reinstalls the meter, the house comes back one breaker at a time, and the owner gets our notes in writing.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Forest Park',
        body: 'Ask most landlords who owns the meter box and they’ll say the utility. In fact the utility owns just the line in and the meter. The socket box, the mast, the weatherhead, the service cable and the panel are the property owner’s, and so is the repair bill. When the utility hangs a red tag, it’s refusing to energise that equipment until the danger is gone. Real correction by a licensed electrician plus an inspector’s pass gets it removed, and a quick tidy does not. Keep whatever was left on the door. Never break a meter lock, since Ohio law calls that tampering, a crime.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Forest Park',
        body: 'Units in Forest Park often sit vacant between leases, and a house can go dark for weeks during a sale. Either one may need the service checked before the utility restores it. Sometimes that’s a short look, and sometimes the panel or grounding is so dated that it becomes a replacement, which we only confirm after inspecting. The owner gets two written prices, an old-for-old refit and a correctly sized modern service, since labour and permit match.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Forest Park Choose Us for Disconnection Repair',
    whyParagraph:
      'No service means no heat and no sump pump, so we don’t leave owners waiting. Licensed electricians fix the fault, file the permit, show the inspector the work and settle the price before starting.',
    sharedFaqs: [
      {
        q: 'What does disconnection repair cost in Forest Park?',
        a: 'The failed part sets the price, and a single meter base costs a fraction of a whole new service. After the diagnosis, the owner gets one flat figure in writing and approves it before work. The utility bills its own charges, and qualifying homeowners can finance ours.',
      },
      {
        q: 'How long will a rental in Forest Park be without power?',
        a: 'Most repairs fit in one day. The rest hangs on when the inspector can come, so the request goes in with the booking. For a landlord whose tenant is waiting on power, asking early saves more days than anything else.',
      },
      {
        q: 'Can a tenant or owner reconnect the meter in Forest Park?',
        a: 'Neither one should touch it. The meter and any lock on it are the utility’s to deal with, tenant or owner. With a service cut for a fault, putting the meter back would also energise equipment already called unsafe. Once our repair is inspected, the utility does the reconnect.',
      },
    ],
  },
};
