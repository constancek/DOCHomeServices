import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const burlington: LocationServiceCopy = {
  localParagraph:
    'Burlington is the Boone County seat, and its housing is recent, with half the homes built after 1998 by Census figures. A dead service here tends to follow a storm, a car meeting the meter box, or fresh wiring that didn’t pass inspection. Your utility, Duke Energy Kentucky or Owen Electric depending on the street, holds the reconnect until a licensed electrician repairs what you own and, in most cases, an inspector signs off. The cause gets found and priced in writing before work.',
  emergencyParagraph:
    'Many homes here heat with electricity, so a cut service means no heat pump, no air conditioning and no sump pump at once. Stay clear of a meter box hanging off the siding. A line on the ground means calling 911 and your utility first. We get to most calls in Burlington on the same day, Saturdays and Sundays too.',
  commonIntro:
    'Across the newer subdivisions, townhouse rows and apartment buildings of Burlington, cut services usually trace to one of these:',
  localFaqs: [
    {
      q: 'When townhouses share a meter bank in Burlington, who arranges the repair?',
      a: 'Start with the association, because work on a shared meter bank or the building’s outside wall may need its approval. Each owner’s panel stays their own. We diagnose the bank, write up the price and coordinate with the association so one inspection and one reconnect cover every unit on it.',
    },
    {
      q: 'What should a renter in Burlington do about a dead service?',
      a: 'Tell the landlord or complex management in writing and keep a copy, along with a photo of any notice the utility left. The owner arranges the repair. When they call us, we diagnose the service and send them a written price before anything starts, and the reconnect follows the inspection.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for houses, townhouses and condos in Burlington',
    band1Heading: 'Common Causes of Electricity Disconnection in Burlington',
    commonSituations: [
      'A townhouse row on one meter bank, tagged after damage to the outside wall',
      'A meter box knocked sideways by a car backing out of the garage',
      'A basement finish or addition that didn’t pass its electrical inspection',
      'Half the house out after a storm broke one leg at the drop',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Burlington',
        body: 'Young wiring doesn’t mean a short look. When a car clips the meter box or a storm yanks the drop, the strain can travel well past the dent you can see, so we check everything from the weatherhead and mast to the ground rod, including the entrance cable, meter base and panel. What we find decides between a mast, meter base or panel repair, and which permit we file. The inspector will check grounding and bonding, so those are brought to current code. We file the permit and book the inspection when the work is scheduled. After the reconnect, circuits return one at a time, with written notes.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Burlington',
        body: 'Boone County subdivisions this young rarely get tagged for worn-out gear. More often the tag traces to a failed inspection on a finished basement or addition, or to wiring done without a permit that no inspector ever saw. Either way, no power flows until a licensed electrician corrects it and an inspector passes the correction, and a quick patch won’t sway that. Hang on to the tag or hanger, which usually states the reason. Here the homeowner owns the meter box, mast, weatherhead, entrance cable and panel, while the utility simply cuts and restores service. A locked meter stays locked; Kentucky makes tampering with one a criminal offence.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Burlington',
        body: 'Subdivision rentals turn over, and houses sit empty after a sale, so a dead service gets checked before it is energised even when the wiring is young. A short inspection often settles it. If the service must be replaced anyway, the labour, permit and inspection cost the same whether we rebuild it or size it for an addition or new load, so both get priced.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Burlington Choose Us for Disconnection Repair',
    whyParagraph:
      'In Burlington, a dead service shuts off the heat and the sump pump, so we schedule it like an emergency. Licensed electricians do the repair your utility asked for, file the permit, meet the inspector and quote up front.',
    sharedFaqs: [
      {
        q: 'How much should I expect to pay for disconnection repair in Burlington?',
        a: 'The fault decides it. Straightening a knocked meter box and replacing a whole service are far apart, so we quote only after diagnosing. The quote is a written flat rate you sign off before work, and anything the utility charges comes on its own bill. Financing is offered to qualifying homeowners.',
      },
      {
        q: 'How soon can my power be reconnected in Burlington?',
        a: 'Our repair often takes a single day. The inspection is the slower piece, because it follows the building department’s calendar. Asking for it when you first book us, instead of once we’re done, takes more time off the wait than anything else we can do.',
      },
      {
        q: 'Can I reconnect the power myself in Burlington?',
        a: 'No. Tampering with a utility meter or its lock is a criminal offence in Kentucky, and the service was cut because something in it was unsafe. If you need a portable generator meanwhile, keep it outside and never connect it to the panel without a transfer switch, since that sends power back up the line.',
      },
    ],
  },
};
