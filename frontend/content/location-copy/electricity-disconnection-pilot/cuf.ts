import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const cuf: LocationServiceCopy = {
  localParagraph:
    'Once a rental in CUF has a red tag on it, nobody gets power back until a licensed electrician puts the fault right and an inspector, nearly always, approves the job. By Census figures, roughly four homes in ten here were built in 1939 or earlier and better than eight in ten are rented. Old houses carved into flats tend to hide original panels, meter sockets that have run hot for years and grounding nobody has touched in decades. The owner gets our findings and a written figure first.',
  emergencyParagraph:
    'When the power goes off in a building in CUF, tenants lose heat, cooling and the sump pump all at once, and the bill for damage mounts quickly. Walk well around a meter box pulled off the brick. Downed wires call for 911 first and then Duke Energy Ohio. Our electricians reach most disconnection calls the same day, weekends included.',
  commonIntro:
    'Across the two-families, small apartment buildings and older single houses of CUF, a service usually goes dead or stays dead for one of these reasons:',
  localFaqs: [
    {
      q: 'I rent a flat in CUF and the power was cut by the utility. What should I do?',
      a: 'Write to the landlord, date it, and keep your copy. Under ORC 5321.04, an Ohio owner has to keep the wiring and electrical fixtures they provide safe and in working order. We bring services back; we stay out of lease arguments, so the owner is the one who hires us and signs off on the price.',
    },
    {
      q: 'Who inspects disconnection repairs at addresses in CUF?',
      a: 'Cincinnati city limits take in all of CUF, and inside them Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits. We send the filing the moment the owner says yes and ask for an inspection date in the same request, so the utility isn’t left waiting on paperwork.',
    },
  ],
  overrides: {
    ctaLine: 'Dead services back on for rentals and houses in CUF',
    band1Heading: 'Common Causes of Electricity Disconnection in CUF',
    commonSituations: [
      'A red tag on an old house split into flats, issued for a panel the utility judged unsafe',
      'A meter socket with scorch marks behind a row of meters on a two-family',
      'Half a building dark after one leg of the service dropped at the panel',
      'A flat vacant between leases for so long that the utility wants its service looked at',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in CUF',
        body: 'Landlords in CUF with dark units usually want to know what happens next. First, an electrician tests every piece of the service, from the weatherhead and mast to the entrance cable, meter base, panel and grounding. That points to a socket, a mast or a new panel and fixes which permit we pull. Next comes the repair, with grounding and bonding corrected to today’s code whether or not they caused the cut, since the inspector checks them. The inspection request goes in with the booking. When the meter is reinstalled, units come back one circuit at a time, labelled, with a written note on anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in CUF',
        body: 'In a neighborhood this old, utility crews tag services for bare conductors, absent grounding, worn-out panels and sockets that have been running hot. The tag is a firm no to switching the building back on. Sweeping up burnt bits or screwing a cover back on changes nothing. Only a licensed electrician correcting the cause, followed by a passed inspection, gets it removed. Whatever the crew left on the door, a tag, hanger or note, give it to us, because the reason is normally written right there. Meter locks are off limits. Breaking one is a crime under Ohio law and sends power into a service already judged unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in CUF',
        body: 'A flat or house that stayed empty for a long time between tenants gets extra care, because in housing this old the panel and grounding may be far from current code. Sometimes a brief inspection settles it, and sometimes it turns into a panel replacement. The permit, inspection and labour cost the same either way, so we quote a like-for-like rebuild and a modern service together.',
      },
    ],
    whyTitle: 'Why Landlords and Owners in CUF Choose Us for Disconnection Repair',
    whyParagraph:
      'A dark building leaves tenants cold and basements unpumped, so we answer these first. Our licensed electricians make the repair the utility has asked for, take care of permit and inspector, and quote the owner before touching anything.',
    sharedFaqs: [
      {
        q: 'What does it cost to restore a disconnected service in CUF?',
        a: 'The fault sets the price. A single scorched socket on a two-family is a small bill beside a new service for a whole building. Diagnosis first, then one fixed figure in writing before work, with utility charges left on the utility’s bill. Qualifying homeowners can finance.',
      },
      {
        q: 'How soon can the power come back to a building in CUF?',
        a: 'Our wiring work generally fits in a single day. Then the wait is for the inspector, whose date is set by the building department rather than by us. Asking for that date at booking is what pulls the reconnect closest.',
      },
      {
        q: 'Is it safe to turn the service back on myself in CUF?',
        a: 'No. Until the utility removes it, that lock stays, and Ohio counts breaking it as a criminal offence. The power was cut over equipment someone judged unsafe, so forcing it back on before a repair and inspection puts every tenant in the building at risk of a fire.',
      },
    ],
  },
};
