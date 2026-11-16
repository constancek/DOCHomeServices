import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const springdale: LocationServiceCopy = {
  localParagraph:
    'In Springdale, Duke Energy Ohio restores a disconnected service only after the owner’s equipment has been repaired by a licensed electrician and, in most cases, passed by an inspector. Census figures put the median home at 1971, so many panels and meter sockets are originals, and the grounding may lag present code. Another pattern here is a cut that follows a failed inspection, where a basement or addition was wired with no permit. We diagnose first, then you approve a written price.',
  emergencyParagraph:
    'A dead service in Springdale means a cold or hot house and a sump pump that won’t start, and the longer it lasts, the dearer it gets. If the meter box has come off its mounting, keep your distance. Report a downed line to 911 and the utility first. Our electricians reach most of these the same day, weekends too.',
  commonIntro:
    'Springdale has a lot of 1960s and 1970s houses, townhouses and apartments, and these causes show up most:',
  localFaqs: [
    {
      q: 'Who inspects electrical repairs in Springdale?',
      a: 'The city does, through its own Building Department, which takes a single general permit application covering electrical work and inspects electric work itself. We submit that application when you approve the repair and ask for an inspection in the same step, so the wait starts as early as possible.',
    },
    {
      q: 'My rental in Springdale has no power after a utility visit. Who books the repair?',
      a: 'The landlord books it, not the tenant. Write to them about the outage, keep your copy and save whatever the utility hung on the meter. Ohio’s ORC 5321.04 holds a landlord to keeping the wiring and fixtures they provide safe and in working order. Power is our job; the lease is yours and the owner’s.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnecting houses, townhouses and apartments in Springdale',
    band1Heading: 'Common Causes of Electricity Disconnection in Springdale',
    commonSituations: [
      'A basement or addition wired without a permit that failed when an inspector saw it',
      'An original 1970s breaker box flagged because the bonding was never done',
      'A townhouse meter socket with heat damage hidden behind the cover',
      'A car or fallen tree that hit the service on the owner’s side of the meter',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Springdale',
        body: 'Dark houses get a full survey before any parts are ordered. Outside, we look over the service head, riser and entrance cable; inside, the meter socket, breaker box and every ground and bonding connection. That points to riser work, a new socket or a new panel, and tells us which permit the city needs. Alongside the failed part, grounding and bonding are corrected to current code, since the inspector will look at them. The inspection request goes to the city the day you approve the work. With the meter back in, breakers are switched on singly and labelled, and you get a written list of concerns.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Springdale',
        body: 'In this city the tags we see follow a familiar set of faults, such as an unsafe panel, a ground that’s missing, bare conductors, or wiring that flunked inspection or never had a permit. The instruction is not to energise, and tidying the obvious problem changes nothing. The tag comes down when the cause is properly corrected by a licensed electrician and the work is signed by an inspector. Hang on to it, because the fault is usually written there. The meter, pulled or locked, is the utility’s, and Ohio makes tampering with it a crime. On a faulted service it would also put power into equipment already ruled unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Springdale',
        body: 'Townhouses and apartments empty between leases, and houses that lingered on the market, get a slower check before they’re energised. A short inspection is enough for some; others need a new panel, and you’ll hear which once we’ve looked. Rebuilding the original service runs to the same labour, permit and inspection as a properly sized modern one, so both numbers go on the quote for you to pick.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Springdale Choose Us for Disconnection Repair',
    whyParagraph:
      'A dead service in Springdale gets the same urgency from us as a burst pipe. Licensed electricians fix what the utility flagged, file with the city, meet its inspector and agree the price before starting.',
    sharedFaqs: [
      {
        q: 'How much will it cost to fix a disconnected service in Springdale?',
        a: 'The failure decides it. Fitting a new meter socket on a townhouse and replacing a whole service are miles apart, so the number waits for the diagnosis and then arrives as one flat rate on paper. Utility charges stay off it. Qualifying homeowners can finance the work.',
      },
      {
        q: 'How long before the power is restored in Springdale?',
        a: 'A single day often covers our repair. Most of the waiting is the inspection, which follows the city’s timetable, so the request goes in when the job is scheduled, not at the end. Nothing we do saves more waiting than that.',
      },
      {
        q: 'Can I break the meter seal and switch the power back on?',
        a: 'No. The seal and lock are the utility’s, and breaking them is a crime in Ohio. If the cut was for a fault, you’d also put power back into equipment that has already been called unsafe. Leave the reconnect to the utility; it happens after the city’s inspector passes the work.',
      },
    ],
  },
};
