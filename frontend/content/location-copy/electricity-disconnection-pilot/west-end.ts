import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const westEnd: LocationServiceCopy = {
  localParagraph:
    'If the utility has locked or pulled the meter on a building in the West End, leave the lock alone. Power comes back once our licensed electrician has repaired the owner’s side and an inspector, in most cases, has signed it. Census figures put roughly two homes in five here at 1939 or before and count nearly nine in ten as rented, many in Italianate rowhouses in Betts-Longworth or flats near TQL Stadium. Sockets and grounding that old often fall well behind code. You get our written price after diagnosis.',
  emergencyParagraph:
    'In the West End, a building with its service cut sits without heat, air conditioning or a running sump pump, while the damage mounts daily. Don’t go near a meter box tearing off the brick. When a wire is down, the first calls belong to 911 and Duke Energy Ohio. Same-day visits cover most of these jobs, weekends included.',
  commonIntro:
    'Rowhouses with original services, two-families and apartment blocks lose power in the West End for these reasons more than any others:',
  localFaqs: [
    {
      q: 'Who books the repair when a rental in the West End has no power?',
      a: 'The owner does the booking. Your part is a written note to the landlord about the dead service or the notice, with a copy kept. ORC 5321.04 holds Ohio landlords responsible for keeping the wiring they provide safe and working. We mend services, not leases, so the landlord rings us.',
    },
    {
      q: 'Can you replace a meter box on a rowhouse in Betts-Longworth?',
      a: 'Yes. Betts-Longworth is one of the city’s local historic districts, and exterior work there needs a Certificate of Appropriateness, so the city hears from us before anything on a facade moves. Inspection Bureau, Inc. (IBI) handles the electrical permit review and inspection, which we line up together with the repair.',
    },
  ],
  overrides: {
    ctaLine: 'Restoring power to rowhouses and apartment buildings in the West End',
    band1Heading: 'Common Causes of Electricity Disconnection in the West End',
    commonSituations: [
      'A meter locked on an Italianate rowhouse once a burned socket turned up',
      'A basement panel red-tagged for conductors left exposed',
      'Half an apartment without lights after one leg went inside the panel',
      'Rehab wiring in a two-family near Linn Street that skipped the permit and inspection',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in the West End',
        body: 'Owners and tenants sitting in a dark building want the steps in order. We start with a check of the whole service, from the weatherhead and riser on the brick, along the entrance conductors to the meter can and into the panel, testing grounding and bonding on the way. That settles socket, mast or panel, and the permit with it. The repair itself brings grounding and bonding to present code, because buildings this old get a hard look. The inspection is requested when you book. Last, the meter returns, each breaker is closed in turn, the circuits get labelled and the owner is handed notes on anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in the West End',
        body: 'In the West End, the utility owns its overhead wire and the meter, and nothing beyond. The can holding the meter is the building owner’s, a fact that surprises most people, together with the mast, weatherhead, cable and panel. A red tag there tends to follow a panel judged unsafe, an absent ground or exposed conductors, and while it hangs nobody may energise the service. Tidying won’t remove it. Down it comes once a licensed electrician has cured the cause and an inspector has passed the job. Save the tag or hanger. Ohio criminal law forbids meddling with a pulled or locked meter, so the lock stays.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in the West End',
        body: 'Any flat or rowhouse left vacant in the West End across a tenancy change or a long rehab is tested before power returns, since a pre-war panel or its ground may be nowhere near code. One short inspection settles some, others need a new panel, and the owner hears which once we’ve looked. Refitting and installing a properly sized new service involve identical labour, permit and inspection, so both figures go to the owner.',
      },
    ],
    whyTitle: 'Why Landlords and Residents in the West End Choose Us for Disconnection Repair',
    whyParagraph:
      'To our licensed electricians a building without power is an emergency, so they complete the work the utility asked for, file the permit, meet the inspector and settle the price with the owner first.',
    sharedFaqs: [
      {
        q: 'What will a disconnection repair cost in the West End?',
        a: 'It depends on what broke. A burned socket on a single rowhouse and a new service for a whole apartment building are far apart in effort. Diagnosis produces a flat rate on paper before anything starts, and whatever the utility charges is billed separately. Financing exists for qualifying homeowners.',
      },
      {
        q: 'How long does reconnection take in the West End?',
        a: 'We often finish the repair within a single day. From then on, the inspector’s diary decides how long the building waits, which is why the inspection request goes in at booking. Nothing else takes as many days off an outage.',
      },
      {
        q: 'Can a tenant or owner break the meter lock in the West End?',
        a: 'No. Lock and meter are both utility hardware, and Ohio treats interfering with either as a criminal offence. Power was cut because of a fault, so forcing it back pushes current into equipment already judged unsafe. We fix the fault, then arrange the reconnect.',
      },
    ],
  },
};
