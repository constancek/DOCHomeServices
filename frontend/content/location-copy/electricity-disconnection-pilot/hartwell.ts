import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const hartwell: LocationServiceCopy = {
  localParagraph:
    'When the utility pulls or locks a meter in Hartwell, Duke Energy Ohio keeps it out until a licensed electrician has repaired your side and, most times, an inspector has approved the work, so leave that lock alone. By Census figures, half the homes were standing by 1949, a third before 1940, and nearly two in three are rented. Plenty of older houses and small apartment buildings still run their first panel or a meter socket that has been cooking for years. A written price follows the diagnosis.',
  emergencyParagraph:
    'In Hartwell, a pulled meter means the furnace or air conditioner quits and the sump pump stops with it. Stay back from any meter box that has come away from the brick. If a wire drops, ring 911 and then the utility. Most of these calls get one of our electricians the same day, weekends included.',
  commonIntro:
    'In the older two-families, houses and small apartment blocks of Hartwell, a meter tends to come out for reasons like these:',
  localFaqs: [
    {
      q: 'The utility locked my meter in Hartwell. Can I take the lock off?',
      a: 'No. The lock is the utility’s, and Ohio treats meddling with metering equipment as a criminal offence. The meter came out over a fault, so dodging the lock pushes current into gear that already failed a safety call. Once we’ve repaired the cause and it has passed inspection, the utility takes the lock off itself.',
    },
    {
      q: 'I rent in Hartwell and our power was disconnected. Who fixes it?',
      a: 'Your landlord. Write to the owner or manager about it and keep anything the utility left. ORC 5321.04, Ohio’s landlord statute, obliges owners to keep the wiring they supply safe. We restore power, not leases, so the owner rings us.',
    },
  ],
  overrides: {
    ctaLine: 'Power restored for older houses and rentals in Hartwell',
    band1Heading: 'Common Causes of Electricity Disconnection in Hartwell',
    commonSituations: [
      'A meter pulled over a cooked socket on a 1940s house',
      'A red tag on an original panel with no proper ground',
      'A rental flat that stood empty so long the service needs a look before reconnecting',
      'One scorched position among the meters on an apartment building',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Hartwell',
        body: 'With your meter already out, nothing gets swapped until the whole run has been read, top connection to bottom ground. That shows which piece is the real culprit, whether up the mast, at the socket or in the panel. Inside Cincinnati, Inspection Bureau, Inc. (IBI) reviews and inspects electrical permits for the city, and our request for that inspection goes in on the day you book. The meter is the utility’s, and the box under it belongs to you. When it goes back, power returns a circuit at a time, and we leave notes about anything suspect in the older wiring.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Hartwell',
        body: 'Around Hartwell, older services get tagged over unsafe panels, absent grounding or bare conductors, and newer work for flunking inspection. A red tag carries a reason, and it means do not energise until a licensed electrician has corrected that reason and an inspector has passed the fix. Patching whatever looks worst does nothing to it. The tag, hanger or note usually names the reason, so keep it handy. If nothing was left, we start where the service enters the building and work in until the fault shows up.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Hartwell',
        body: 'Flats here can sit empty between leases, and an inherited house can stay dark longer still. A service idle that long gets slower checking before reconnection, because a 1940s panel or ground may lag far behind code. Some clear a quick inspection and others need a replacement panel, and we say which after looking. Rebuilding old gear costs about what a correctly sized modern service does once labour, permit and inspection are counted, so you see both.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Hartwell Choose Us for Disconnection Repair',
    whyParagraph:
      'With its meter pulled, a house here has no furnace and no sump pump, so we come quickly. Licensed electricians handle the repair the utility is holding out for, file the permit, meet the inspector and set the price first.',
    sharedFaqs: [
      {
        q: 'What does disconnection repair cost in Hartwell?',
        a: 'The failure sets it. A cooked meter base costs a fraction of a whole new service, so we look before quoting and write a flat price for your approval ahead of any work. Whatever the utility charges is billed by them, not us. Qualifying homeowners can finance.',
      },
      {
        q: 'How long until the power comes back in Hartwell?',
        a: 'Often the repair itself fits in one working day. Then the wait is the inspectors’, since they set the date. Asking for it when the repair is booked, rather than once we finish, cuts more days off an outage than anything else.',
      },
      {
        q: 'Is it safe to keep resetting the main breaker in Hartwell?',
        a: 'No. If the main trips again as soon as you reset it, stop and leave it off. And if the utility has pulled or locked the meter, nothing inside the house will bring power back. The fault has to be repaired and inspected before the utility reconnects.',
      },
    ],
  },
};
