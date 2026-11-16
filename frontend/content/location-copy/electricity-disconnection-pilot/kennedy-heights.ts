import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const kennedyHeights: LocationServiceCopy = {
  localParagraph:
    'In Kennedy Heights, a tagged or meterless house waits in the dark until a licensed electrician has corrected whatever the crew flagged and, nearly always, an inspector has approved the fix. Census figures put close to half the homes here before 1940, and almost a quarter in two-family or small apartment buildings. Houses of that age often still carry their first panel and a ground connection that has corroded thin, so inspectors dig deeper. Our electrician explains the findings and writes a price before lifting a tool.',
  emergencyParagraph:
    'Losing the service shuts down the furnace or air conditioner, stops the sump pump and runs up costs with each dark day. Children and pets stay back from a meter box sagging off its wall. Anyone who sees a line down calls 911, then Duke Energy Ohio. Most homes in Kennedy Heights see us the same day, weekends included.',
  commonIntro:
    'Among the prewar houses, two-families and small apartment buildings of Kennedy Heights, the cut usually traces to one of these:',
  localFaqs: [
    {
      q: 'I own a two-family in Kennedy Heights and the utility cut both units. What now?',
      a: 'Book the diagnosis, then tell both households in writing what comes next. As the owner, you carry the duty under ORC 5321.04 for the wiring and fixtures you provide, which Ohio says must stay in good and safe working order. Tenants report; owners book. We put the lights back on and leave lease questions to you.',
    },
    {
      q: 'Who inspects the work before the power goes back on in Kennedy Heights?',
      a: 'For houses inside Cincinnati, which covers Kennedy Heights, Inspection Bureau, Inc. (IBI) handles electrical permit review and inspection for the city. A few streets near Woodford Road fall in Silverton instead, so we confirm the address first. Our office files that paperwork and requests the inspector on the same day we schedule your repair.',
    },
  ],
  overrides: {
    ctaLine: 'Red tags cleared and power restored for homes in Kennedy Heights',
    band1Heading: 'Common Causes of Electricity Disconnection in Kennedy Heights',
    commonSituations: [
      'A red tag on a prewar house where the utility found no working ground',
      'A two-family whose shared meter base burned through at one socket',
      'A rental left between tenants until the service needed checking again',
      'A fuse panel or early breaker panel the utility would not re-energise',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Kennedy Heights',
        body: 'Order matters once you have lost power. Our electrician follows the service from roof to basement, weatherhead and riser, the conductors feeding the socket, then the panel and its ground, since a scorched socket on a prewar house rarely fails alone. Out of that comes a clear answer about which part gets replaced and the permit attached to it. During the repair we also make grounding and bonding meet present code, which any inspector will test. The inspector gets asked to visit when you book. With the meter reset, breakers close in sequence and you get a short written list of weak spots.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Kennedy Heights',
        body: 'Prewar houses tend to draw tags over a panel past repair, a ground that has rusted away, live parts left bare or a socket blackened by heat. That tag is an order to keep the service dead, and it carries weight. Taping over a bare wire or tidying the panel won’t lift it; fixing the cause and passing inspection will. Save whatever paper the crew hung on your door, since it usually gives the reason. A locked or missing meter stays exactly as the crew left it. Ohio treats meddling with a utility’s meter as a crime, and doing it would feed current into wiring someone has already called dangerous.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Kennedy Heights',
        body: 'Prewar houses left empty, and flats sitting between leases, get a slower check before power goes back, because old panels and grounding often trail modern code badly. A short visit settles some; others end in a new panel. Rebuilding the old setup or fitting a correctly sized new service costs us much the same time and paperwork, so owners compare two quotes.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Kennedy Heights Choose Us for Disconnection Repair',
    whyParagraph:
      'We answer a dark house as an emergency, since it has lost heat and the sump pump. Licensed electricians fix whatever the utility flagged, take care of permits, stand with the inspector and settle a written price before starting.',
    sharedFaqs: [
      {
        q: 'What will it cost to have the power reconnected in Kennedy Heights?',
        a: 'The answer depends on what failed. Fixing one burned socket and replacing a prewar service are different jobs. Once we have diagnosed it, you get a flat rate in writing before work begins, and our price is kept apart from any charge the utility makes. Financing is available for qualifying homeowners.',
      },
      {
        q: 'How long does a disconnection repair take in Kennedy Heights?',
        a: 'Hands-on repair generally fits in a single day. After that the calendar belongs to the inspector rather than to us, which is why the request leaves our office on booking day. Approval goes straight to the utility with our paperwork, and the meter comes back once they schedule it.',
      },
      {
        q: 'Can I take the lock off the meter and restore power myself?',
        a: 'No. The lock and the meter are the utility’s, and tampering with metering equipment is a criminal offence in Ohio. The cut also happened for a reason, so energising the service before the fault is repaired puts power straight back into it. That repair has to come first.',
      },
    ],
  },
};
