import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const forestville: LocationServiceCopy = {
  localParagraph:
    'When a service in Forestville is cut for a fault, power returns after a licensed electrician puts the owner’s equipment right and, on most jobs, an inspector approves it. Housing here is fairly recent, with a median build year of 1981 in Census figures, so worn-out original panels are less of a story than storm or impact damage and inspections failed on recent work. Large apartment complexes and townhouse rows add shared meter banks to the mix. You see a written price before we start.',
  emergencyParagraph:
    'No service in Forestville means the furnace, the air conditioner and the sump pump are all down, and the cost keeps rising. Steer clear of a meter box torn loose by wind or a falling limb. For a line on the ground, call 911, then the utility. Most calls see an electrician that day, Saturday and Sunday included.',
  commonIntro:
    'Townhouse rows, apartment complexes and 1980s and 1990s houses make up much of Forestville, and their services usually get cut for one of these:',
  localFaqs: [
    {
      q: 'Who handles the electrical permit for a reconnect in Forestville?',
      a: 'As part of unincorporated Anderson Township, Forestville has its electrical permits reviewed and inspected by Inspection Bureau, Inc. (IBI). We submit ours and ask IBI for a date in the same breath as scheduling the repair, because the meter isn’t going back without their approval.',
    },
    {
      q: 'Does a townhouse in Forestville need association approval for this work?',
      a: 'It might. If the repair reaches a shared meter bank or the outside of the building, the association often has to approve it before we start. Renters should report the problem to the landlord in writing, since ORC 5321.04 requires Ohio landlords to keep the electrical systems they supplied in safe working order. We fix services, not leases.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repairs for houses and townhouses in Forestville',
    band1Heading: 'Common Causes of Electricity Disconnection in Forestville',
    commonSituations: [
      'Wind or a falling limb that bent the mast and pulled the drop away',
      'A recent remodel that failed inspection, leaving the service off until it’s corrected',
      'One burned position on the shared meter bank of a townhouse row',
      'A car that clipped the meter box at the corner of a garage',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Forestville',
        body: 'You’re in a dark house, so the order matters more than the theory. We look at the entire service before touching anything, from the weatherhead and mast at the top to the meter base, the panel and the grounding at the bottom, and the result tells us the repair and the permit. Next comes the work, with grounding and bonding updated even if they weren’t the reason for the cut, since nobody passes an inspection on outdated bonding. The inspection date is requested on day one. When Duke Energy sets the meter again, we turn the house on one circuit at a time and write up anything worth watching.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Forestville',
        body: 'Ownership is split at the meter. The utility has the line and the meter, while the box, mast, weatherhead, entrance cable and panel are the owner’s, which is why wind damage on that side becomes an insurance question instead of a utility repair. A red tag on that equipment is a ban on energising it. Taping over a broken piece won’t lift it, but proper correction by a licensed electrician and an inspector’s approval will. Hold on to the door hanger, which often lists the reason. And leave a locked meter alone, because Ohio treats tampering with metering equipment as a criminal act.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Forestville',
        body: 'An apartment between leases, or a house that stood empty during a sale, may need its service looked at before the utility restores it. On newer equipment that’s usually brief, while an older panel can turn into a replacement, and you hear which after we inspect. Where the gear is original, we quote the same equipment again and a correctly sized modern service, as labour, permit and inspection are no different.',
      },
    ],
    whyTitle: 'Why Residents in Forestville Choose Us for Disconnection Repair',
    whyParagraph:
      'A house without a service has no heat and no working sump pump, so disconnections get priority. Licensed electricians repair what the utility is waiting on, see the permit through, meet the inspector and fix the price in advance.',
    sharedFaqs: [
      {
        q: 'What will I pay to get reconnected in Forestville?',
        a: 'It depends on the damage. A cracked meter base costs a fraction of a brand-new service, so we find the fault first. Then you approve a single flat price in writing before we begin, and anything the utility bills is separate. Qualifying homeowners may finance.',
      },
      {
        q: 'How quickly can power be restored in Forestville?',
        a: 'Plan on a single day for most repairs. The inspection is what makes the total longer or shorter, and it follows the inspector’s own calendar. Because we file for it when you book rather than once we’ve finished, you usually lose far less time waiting.',
      },
      {
        q: 'Could I reconnect the service myself in Forestville?',
        a: 'No. The meter lock is the utility’s, and Ohio law treats breaking or bypassing it as tampering. When a fault caused the shutoff, reconnecting would also energise equipment that’s already been condemned. Once the repair is inspected and passed, the utility switches you back on.',
      },
    ],
  },
};
