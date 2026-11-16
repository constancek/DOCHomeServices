import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const independence: LocationServiceCopy = {
  localParagraph:
    'Storm damage to a mast is a likely reason for a cut in Independence, and the utility leaves the meter out until a licensed electrician has rebuilt the homeowner’s equipment and, usually, an inspector has approved the work. Census figures put the median year built at 1999, with about half the homes dating from 2000 on, so worn-out panels matter less here than wind damage or new work that failed inspection. We trace the fault, then hand you a fixed written price.',
  emergencyParagraph:
    'With no service, the heat pump or furnace stops, cooling goes too and the sump pump sits idle. Keep away from any meter box torn loose. Anyone seeing a downed wire phones 911 and the utility (Duke Energy Kentucky or Owen Electric, depending on the street). Most calls in Independence see us that same day, weekends included.',
  commonIntro:
    'Across the subdivisions and the handful of older houses in Independence, these four reasons cover most cut services we repair:',
  localFaqs: [
    {
      q: 'My house in Independence is fairly new, so why was the power cut?',
      a: 'Newer houses still lose service. A storm can rip the mast and weatherhead off the roof, a vehicle can clip the meter box, and work done without a permit, or one that failed inspection, can leave the utility unwilling to reconnect. The fix is a repair to that equipment, then an inspection.',
    },
    {
      q: 'Who files the permit for a disconnection repair in Independence?',
      a: 'Our office does. Any change to the mast, meter socket, entrance conductors or panel gets permitted and inspected, and the utility checks for that approval before restoring power. Filing early is the trick, so the paperwork and inspection request leave our desk the same afternoon you say yes to the quote.',
    },
  ],
  overrides: {
    ctaLine: 'Service repairs and reconnects for houses in Independence',
    band1Heading: 'Common Causes of Electricity Disconnection in Independence',
    commonSituations: [
      'A mast and weatherhead bent back over the roof after a storm',
      'A meter box knocked loose when a car or trailer backed into the side of the house',
      'Wiring added to a newer house without a permit that failed once it was inspected',
      'A newer meter socket that overheated and left scorch marks on the cover',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Independence',
        body: 'Most cut services here have one obvious casualty, a folded mast or a cracked socket, but we still check from the roof down before quoting. The weatherhead, riser, attachment bracket, entrance conductors, socket, breakers and ground rods all get a look, since a storm that bends a mast can also loosen a lug inside. From that we can say which repair you are buying and which permit goes with it. Grounding and bonding are corrected to current code during the job, because inspectors test them. We request the inspection up front. When the meter goes back, breakers come on in sequence, and you get a written note of anything doubtful.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Independence',
        body: 'Crews tag a service whenever something on the owner’s side is beyond what they will energise, such as storm damage to the mast, exposed conductors, absent grounding or a heat-scarred socket. Think of the tag as a firm order. Tidying the obvious damage does not cancel it; a licensed repair of the root problem plus a passed inspection does. Keep the door hanger, since it usually lists the reason. If the meter is gone or wears a lock, leave everything exactly as you found it. In Kentucky, tampering with a utility meter is a criminal offence, and it would also feed current into equipment already flagged as dangerous.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Independence',
        body: 'Houses left empty between owners, and rentals waiting on a tenant, are checked more slowly before they go live, newer or not. One short visit clears plenty of them; others need the panel replaced. Our time and the paperwork come out roughly level whether we rebuild what was there or fit a correctly sized modern service, so you can weigh both quotes against each other.',
      },
    ],
    whyTitle: 'Why Homeowners in Independence Choose Us for Disconnection Repair',
    whyParagraph:
      'Licensed electricians who answer a dead service as an emergency, fix the equipment the utility is waiting on, handle the permit and stand with the inspector. You approve a written price first, and nothing on the service is rushed.',
    sharedFaqs: [
      {
        q: 'What does it cost to get power reconnected in Independence?',
        a: 'Damage drives the number. Straightening a storm-bent mast and putting in a whole new service sit far apart on price. We work out the cause, then write one flat figure for your approval before touching anything. Whatever the utility bills is their charge, not part of ours, and qualifying homeowners may finance.',
      },
      {
        q: 'How many days will my house in Independence be without power?',
        a: 'Often fewer than people fear. The repair is usually a single day, and the real variable is when the inspector can come, which is outside our control. Booking that inspection together with the work is the biggest thing that shortens the wait, so we do it from the start.',
      },
      {
        q: 'Can I put the meter back or reset the service myself?',
        a: 'No. Meters and locks are utility property, and Kentucky law makes tampering with them a criminal matter. The problem that triggered the cut is also still in your equipment, so energising it now hands that hazard straight back. A licensed electrician repairs it, an inspector approves it and then the utility reconnects.',
      },
    ],
  },
};
