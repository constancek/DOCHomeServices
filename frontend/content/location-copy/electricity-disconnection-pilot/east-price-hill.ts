import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const eastPriceHill: LocationServiceCopy = {
  localParagraph:
    'If Duke Energy Ohio hung a notice on your door in East Price Hill, read it first, because it normally says why they cut you off. They reconnect after a licensed electrician repairs the equipment on your side and, usually, a city-contracted inspector passes it. Census figures put two in five homes before 1940, with a lot of two-families and apartment buildings among the rest, which means older services and a longer inspection. We diagnose first and write the price down.',
  emergencyParagraph:
    'A cut service leaves the furnace dead and the sump pump silent, and a chilly, damp basement suffers. Stay off the porch if the meter box is dangling. If a wire has fallen, assume current is on it and ring 911 and the utility before anyone. Our electricians usually reach you the day you call, weekends included.',
  commonIntro:
    'Across the two-families, apartment buildings and pre-war houses of East Price Hill, the utility usually cuts or refuses service for one of these reasons:',
  localFaqs: [
    {
      q: 'Who inspects a disconnection repair in East Price Hill?',
      a: 'Inside the city, a firm named Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits on Cincinnati’s behalf. We get our filing in on the day you book and ask for an inspector at once, so the approval the utility insists on isn’t trailing days behind the finished repair.',
    },
    {
      q: 'Who arranges the repair if I rent and the power is cut?',
      a: 'The owner does. Text or email your landlord a dated account of the notice or the outage, photograph any tag, and keep the thread. ORC 5321.04 makes Ohio landlords keep the electrical systems they furnished safe and in working order. We restore power, not leases. Managed buildings handle it through the office.',
    },
  ],
  overrides: {
    ctaLine: 'Service reconnected for rentals and older houses in East Price Hill',
    band1Heading: 'Common Causes of Electricity Disconnection in East Price Hill',
    commonSituations: [
      'A rental where the inspector turned up wiring that never had a permit',
      'An old basement panel red-tagged because live parts were left bare',
      'Half a two-family gone dark when one leg of the incoming service failed',
      'A meter socket on a hillside house that ran hot until its plastic melted',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in East Price Hill',
        body: 'Picture the service as a chain running from the cap on your roof to the rod in the ground, with the mast, the cable, the socket and the breaker panel as links between. We test each link. The weak one names the job, mast, socket or panel, and the permit. After repairing it, we also bring the bonding and ground wiring up to what present code asks, because the inspector will open the panel either way. The inspection request rides along with the booking. When the meter goes back, breakers come on singly and you get notes on shaky spots like aluminium branch circuits.',
      },
      {
        title: 'Red Tags and Utility Disconnects in East Price Hill',
        body: 'Here, tags follow worn panels, missing grounds, bare live wiring and inspections that failed or never happened. Read one as a stop sign for the utility. Sweeping up what you can see won’t remove it, though a licensed correction and then an inspector’s approval will. Whatever got stuck in your door frame, keep it, as the reason written there cuts our search short. With no notice, we begin at the service entrance and move inward. A pulled or locked meter stays put. Ohio counts tampering with a meter as a crime, and here it would put power straight onto a fault.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in East Price Hill',
        body: 'Two-families here go quiet between tenants, sometimes for a good while, and that calls for care before switching back on, because older panels and grounds can be decades behind current rules. A brief inspection may do it. The job may also grow into a new panel, which you learn once we’ve looked inside. An old-style rebuild and a modern service sized to the house cost the same in labour, permit and inspection, so we quote both.',
      },
    ],
    whyTitle: 'Why Landlords and Homeowners in East Price Hill Choose Us for Disconnection Repair',
    whyParagraph:
      'A rental or a family home with no lights and no heat is an emergency call for us. Licensed electricians take on the repair the utility asked for, the permit and the inspector visit, at a price you approve first.',
    sharedFaqs: [
      {
        q: 'What will the repair cost in East Price Hill?',
        a: 'You pay for what actually broke. Fixing a meter base costs a fraction of building a whole new service, and only the diagnosis shows which one is in front of us. The flat figure comes on paper before we start, and the utility invoices its own charges, if any. Qualifying homeowners can finance it.',
      },
      {
        q: 'How soon can the power come back in East Price Hill?',
        a: 'The work itself rarely runs past a single day. Then the inspector decides, on a calendar we don’t keep, so our request goes in on the day you book rather than once we pack up. Of everything we do, that trims the most time off an outage.',
      },
      {
        q: 'Is it legal to switch the meter back on myself?',
        a: 'No. Breaking a utility lock or reseating a pulled meter counts as tampering, which Ohio treats as a crime. It would also run power back through whatever fault got the service cut. Leave the meter alone, and we’ll repair the cause and arrange the reconnect.',
      },
    ],
  },
};
