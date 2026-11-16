import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const lawrenceburg: LocationServiceCopy = {
  localParagraph:
    'Lawrenceburg Municipal Utilities, not Duke, runs the power here, and it reconnects a cut service only after a licensed electrician repairs the owner’s equipment and, typically, an inspector approves the job. Census figures show a mixed town, with about one in six homes built before 1940, roughly a third since 2000 and over a third of units in buildings of five or more. Older houses tend to have tired panels and thin grounding; newer ones get cut after storm damage or water. A diagnosis and written price come first.',
  emergencyParagraph:
    'Without a live service, a home loses its heating, its cooling and the sump pump that keeps a basement dry. Keep away from a meter box hanging off its wall. Report a downed line to 911 and the city utility straight away. Most calls in Lawrenceburg get an electrician the same day, weekends included.',
  commonIntro:
    'From prewar houses to newer apartments and townhomes in Lawrenceburg, a disconnected service usually traces to one of these:',
  localFaqs: [
    {
      q: 'Can a panel that was under floodwater in Lawrenceburg be turned back on?',
      a: 'No. A panel that has sat in water can’t safely be re-energised, even after it dries and looks clean, because the breakers and bus inside are compromised. The utility will expect it replaced and inspected first. We replace the panel and any damaged service parts, then help arrange the reconnect.',
    },
    {
      q: 'Who do renters in Lawrenceburg call after the power is cut for a fault?',
      a: 'The landlord or the property manager, in writing, with a copy kept. The service belongs to the building’s owner, so the owner is the one who books the repair and pays for it. In apartment complexes, residents go through management, and we work with them on the reconnect.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repairs and reconnects for homes in Lawrenceburg',
    band1Heading: 'Common Causes of Electricity Disconnection in Lawrenceburg',
    commonSituations: [
      'A basement panel that was under water and cannot go back into service',
      'A prewar house with a meter socket scorched from years of heat',
      'A mast and weatherhead knocked down by a falling limb in a storm',
      'Half the circuits dead in a townhome after one leg failed in the panel',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Lawrenceburg',
        body: 'Your lights are off and the utility is waiting on a repair, so we begin by surveying everything on the owner’s side, from the weatherhead and riser down through the meter enclosure, cable and panel to the grounding electrode. The survey tells us what kind of job this is, a mast, a meter base or a panel, and what permit it calls for. We fix the failure and bring bonding and grounding up to current code during the same visit. We file the permit and book the inspection as soon as you hire us, since that sign-off is what the utility looks for. Power then returns branch by branch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Lawrenceburg',
        body: 'The meter enclosure, mast, weatherhead, entrance cable and panel are the owner’s, and the utility disconnects and reconnects them. When the crew finds something it won’t energise, such as flood damage, a heat-damaged socket, missing grounding or a dangerous panel, it tags the service. That tag reflects a decision made for a reason. It comes down after a licensed electrician corrects the cause and an inspector agrees. Save any hanger or note the crew left; it usually names the trouble. A locked or removed meter belongs to the utility, and only the utility takes that lock off.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Lawrenceburg',
        body: 'Apartments between tenants and houses left empty after a sale both get a more careful look before power goes back, particularly older ones with the first panel still in use. A short inspection is sometimes enough; sometimes the panel needs replacing. Our labour and the permit work cost about the same for a straight rebuild or a modern, correctly sized service, so you get both numbers.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Lawrenceburg Choose Us for Disconnection Repair',
    whyParagraph:
      'With no power there is no heat and no sump pump, so we handle a dead service as urgent work. Our licensed electricians make the repair the utility requires, handle the permit, meet the inspector and price it before starting.',
    sharedFaqs: [
      {
        q: 'How much will it cost to have my power restored in Lawrenceburg?',
        a: 'That depends on the failure. A single scorched socket is a small job next to a flood-damaged panel or a complete new service. We diagnose, then give one flat rate in writing that you approve before work. Whatever the utility charges is billed by them, separately. Financing is offered to qualifying homeowners.',
      },
      {
        q: 'How long is a house in Lawrenceburg without power after a disconnection?',
        a: 'The hands-on repair is usually a single day. The inspection is the variable, and the inspector’s schedule sets it rather than ours. Putting in the request at the same time as the repair is the best way to shorten the gap, and then we coordinate the reconnect with the utility.',
      },
      {
        q: 'Can I take the lock off and reconnect the meter myself?',
        a: 'No. The meter and its lock are the utility’s, and only the utility should remove them. The service was also disconnected because something in it was unsafe, so restoring power before the repair runs current into that same problem. A licensed electrician makes the fix, then the utility reconnects.',
      },
    ],
  },
};
