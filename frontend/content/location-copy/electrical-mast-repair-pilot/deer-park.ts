import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const deerPark: LocationServiceCopy = {
  localParagraph:
    'Census figures put the median house in Deer Park at 1947, with most built in the 1940s and 1950s and a fair share before that. Many have a mast poking up through the roof, and the conductors inside it are often original and turning brittle. About a quarter of households rent, which puts some of these calls on a landlord’s phone. We follow the service entrance from weatherhead to panel and quote you a flat price before any work.',
  emergencyParagraph:
    'In Deer Park, get us out right away when a branch knocks the mast crooked, sparks jump from the weatherhead, or half your outlets stop working. A fallen line should be left alone and reported to Duke Energy Ohio, since it can stay live. House-side damage is same day on most calls, weekends included.',
  commonIntro:
    'Owners of the older houses in Deer Park tend to spot these first:',
  localFaqs: [
    {
      q: 'What should a landlord in Deer Park do about a tenant’s flickering lights?',
      a: 'Get the service entrance checked soon, because flicker tied to the connection usually points to a loose or corroded part at the mast. Under ORC 5321.04, Ohio landlords must keep supplied electrical systems in good and safe working order. We fix masts, not leases, and you get our price before work starts.',
    },
    {
      q: 'Why is there water around the meter on my house in Deer Park?',
      a: 'Most often the seal at the weatherhead has failed. Rain then runs inside the cable jacket down to the meter base and toward your panel, corroding connections you can’t see from the yard. We track down where it gets in, replace the wet cable and reflash the roof penetration on the same visit.',
    },
  ],
  overrides: {
    ctaLine: 'Service mast repair for older houses in Deer Park',
    band1Heading: 'Signs You Need Service Mast Repair in Deer Park',
    commonSituations: [
      'Cable below the cap so dry its jacket crumbles when touched',
      'A 1940s roof mast leaning back after a limb caught the wires',
      'Rust bleeding down the siding from the riser straps',
      'Every light in the house dipping when the wind picks up',
    ],
    proseSections: [
      {
        title: 'Repair or Replace Your Service Mast in Deer Park',
        body: 'On a 1940s or 1950s house in Deer Park, the pipe itself is often still sound while everything bolted to it has aged. With the pipe standing true, we can swap a strap, reseal the weatherhead or redo the flashing as one small job. A pipe that’s bowed, rusted through or wrecked by a storm gets replaced. Brittle original conductors with cracked or chalky jackets get replaced too, which on houses this old is common. Planning a new mast starts with your panel and meter socket, and if the house wiring past them is worn, rewiring goes on the table.',
      },
      {
        title: 'Storm Damage to Service Masts in Deer Park',
        body: 'Deer Park has plenty of older roof masts, and a storm finds the weak ones. A limb resting on the wires puts its pull on that pipe, since the pole is planted for it. Gusts work at the same fittings slowly. What decides whether it becomes a repair is the roof seal and the wire hook. If either shifts, water reaches the meter, and the utility keeps the power off until it’s corrected. House-side storm damage is something your homeowner’s policy handles, not the utility. Afterward, look up from the front walk. A plumb pipe, a weatherhead flush to the siding and a level meter are what you’re after.',
      },
      {
        title: 'The Utility’s Side and Yours in Deer Park',
        body: 'The utility’s ownership covers the wire strung from the pole and the meter itself, nothing more. In Deer Park, the homeowner owns the rest of the service entrance, from the weatherhead and riser through the conductors and meter base. Work follows a set order. The utility drops the service, our electricians spend a single day on it, Inspection Bureau, Inc. (IBI) inspects for the city, and the utility brings power back. The permit gets filed the day you book.',
      },
    ],
    whyTitle: 'Why Homeowners in Deer Park Choose Us for Mast Repair',
    whyParagraph:
      'Nobody touches your mast until a licensed electrician has looked over the service entrance. After that we repair or replace it to code, reseal it at the shingles and file your permit at booking, at a price you approved.',
    sharedFaqs: [
      {
        q: 'How do you price mast repair for a house in Deer Park?',
        a: 'We inspect the service entrance, then hand you one flat figure. The big swing is repair versus replacement, and the amount of cable and flashing to renew, plus the permit, covers the rest. Qualifying homeowners can finance the work, and nothing begins until you approve.',
      },
      {
        q: 'How long will mast work leave my house without power?',
        a: 'Our part normally takes a single day. Power comes back when the utility reconnects, and that only happens after the inspector passes the job, so the utility’s visits and the inspection set the real timeline. Booking the inspection with the work saves the most time.',
      },
      {
        q: 'Can wind loosen a mast without a branch hitting it?',
        a: 'Yes. Wind works a mast loose slowly, while a falling limb on the wires yanks it in one go. In both cases the risk is a loosened roof seal or wire bracket, which lets rain in and stops the reconnect. Storms are behind most of the mast calls we get.',
      },
    ],
  },
};
