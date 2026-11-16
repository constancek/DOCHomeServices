import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const golfManor: LocationServiceCopy = {
  localParagraph:
    'Whatever cut the power in Golf Manor, Duke Energy Ohio waits on two things before it reconnects, a repair to the equipment you own and, most of the time, an inspector’s approval. The village filled in after the war, the median home here went up in 1954 by Census figures, and roughly half its homes are rentals, a lot of them in two-family and fourplex buildings. Expect old panels, dated grounding and a row of meters on one wall. Our written figure comes once we’ve found the fault.',
  emergencyParagraph:
    'Once the service dies in Golf Manor, a house loses its furnace or cooling and its sump pump in one go. Treat a meter box sagging off the siding as off limits. Ring 911 for a fallen wire, and the utility right after. We reach most of these calls the day you phone, weekends too.',
  commonIntro:
    'From two-family buildings to the single houses beside them, these are the reasons that come up behind a cut service in Golf Manor:',
  localFaqs: [
    {
      q: 'Why do only some rooms have power in my duplex in Golf Manor?',
      a: 'Most likely the service has lost one of its two legs, up at the overhead connection or down inside the panel. Lights on that side die, and anything with a motor or circuit board starts seeing strange voltage. Unplug those, then get us out to find which side quit. The fix gets priced on paper first.',
    },
    {
      q: 'Who owns the meter box on a house in Golf Manor?',
      a: 'It’s yours, which catches nearly everybody off guard. The power company owns the wires up to the house and the meter itself. The box that meter plugs into belongs to the owner, as do the mast, weatherhead, entrance cable and panel, so storm damage to any of them goes to your insurer.',
    },
    {
      q: 'The power is off at the flat I rent in Golf Manor. Who books the electrician?',
      a: 'Your landlord, after you’ve sent a dated note about the outage and held on to a copy. Ohio landlords answer for the electrical systems they provide under ORC 5321.04, which requires them to stay in good, safe repair. We restore power, not leases, so the owner rings us and okays the written price.',
    },
  ],
  overrides: {
    ctaLine: 'Getting the meter back in for duplexes and houses in Golf Manor',
    band1Heading: 'Common Causes of Electricity Disconnection in Golf Manor',
    commonSituations: [
      'An upstairs flat gone dark while the downstairs still has lights, after one leg of the service dropped',
      'A scorched socket in a row of meters on the side of a fourplex',
      'A 1950s panel red-tagged once someone noticed it had no real ground',
      'A flat that sat empty after a tenant moved out, now needing its service looked over first',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Golf Manor',
        body: 'Sitting in a dark house, you mostly want to know what happens next. First we look over everything from the roofline down, mast and weatherhead, the cable into the meter, the socket, the panel and its ground, since that sorts out whether this is a mast job, a socket swap or a new panel. Electrical permits for the village go through Hamilton County, and the inspection goes on the calendar when we set your repair date. Grounding gets brought to today’s code while we’re in there. When the meter is back, we wake the house up circuit by circuit and leave a note on anything to keep an eye on.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Golf Manor',
        body: 'Nobody hangs a red tag for fun. Around Golf Manor, one usually marks a panel that isn’t safe, a ground that was never there or wiring left bare, and it tells the utility to keep the power off. Sweeping up the visible mess won’t change that. The tag comes down once the cause is properly fixed by a licensed electrician and the inspector has passed it. Hold on to that tag, or the hanger left on your door, because the reason printed there saves diagnosis time. A pulled or locked meter stays untouched, since meddling with one is a crime in Ohio and it feeds power into gear already condemned.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Golf Manor',
        body: 'Between tenants, one side of a two-family can stay dark for a good while. When it does, we check it more slowly before asking for the meter, especially behind a panel from the 1950s. Some get by on a brief inspection and some need a panel, and we say which once we’ve looked. Putting back the old gear costs nearly what a right-sized new service does in labour, permit and inspection, so both quotes land on your table.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Golf Manor Choose Us for Disconnection Repair',
    whyParagraph:
      'Heat and sump pump both quit when the meter comes out, so we come running. Our licensed electricians make the repair the utility wants to see, pull the permit, greet the inspector and set the price beforehand.',
    sharedFaqs: [
      {
        q: 'What will getting the power back cost me in Golf Manor?',
        a: 'That rides on what broke. A burnt meter socket is a short job next to a full new service, so nobody can quote blind. Once we’ve diagnosed it, a flat figure goes on paper for your yes before work starts, and anything the utility charges stays on its own bill. Qualifying homeowners can finance it.',
      },
      {
        q: 'How many days will I be without power in Golf Manor?',
        a: 'Our side usually wraps up within one working day. What stretches things is the inspection, which runs on the county’s calendar and not ours. So we request the inspector the moment the repair is booked, and that one step trims the outage more than anything else.',
      },
      {
        q: 'If the meter was pulled in Golf Manor, can I reinstall it?',
        a: 'Please don’t. Ohio law makes it a criminal offence to tamper with utility metering, and the lock and meter belong to the utility. The cut happened because of a fault besides, so forcing power back before we repair it and an inspector passes it lights up equipment somebody already decided wasn’t safe.',
      },
    ],
  },
};
