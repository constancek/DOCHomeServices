import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const california: LocationServiceCopy = {
  localParagraph:
    'High water on the Ohio is what the National Weather Service warns about for California, with basements flooding at the bigger crests, and a panel that sat in floodwater stays out of service until it is dealt with. Duke Energy Ohio keeps the meter off the wall until a licensed electrician fixes the homeowner’s side and, usually, an inspector signs it. Census figures date the typical house to the late 1960s, almost all of them single homes, many on their first panel. We diagnose it, then price it on paper.',
  emergencyParagraph:
    'When the service is cut in California, the furnace or air conditioner and the sump pump stop at once. Give a meter box swinging loose a wide berth. If a wire is down, keep children and pets in and ring 911 and the utility first. On most calls, an electrician reaches you the same day, weekend or not.',
  commonIntro:
    'Along Kellogg Avenue and the side streets toward the river in California, services usually get cut for these reasons:',
  localFaqs: [
    {
      q: 'Can my panel be saved after the basement flooded in California?',
      a: 'Not as it stands. Anything that sat under the floodwater has to be checked before it carries power again, and a submerged panel is normally replaced. After the basement is pumped dry, we go through every wet component, swap out the ones we can’t trust and get the inspection lined up so the reconnect isn’t held up.',
    },
    {
      q: 'Who inspects the repair before reconnection in California?',
      a: 'California sits inside the City of Cincinnati, so electrical permits are reviewed and inspected by Inspection Bureau, Inc. (IBI). We file for the meter base, mast or panel work and set up the IBI visit when the repair is scheduled, because their approval is the piece the utility is waiting to see.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair and reconnects for houses near the river in California',
    band1Heading: 'Common Causes of Electricity Disconnection in California',
    commonSituations: [
      'A basement panel that was tagged and can’t be energised again as it stands',
      'A 1960s meter socket with the plastic melted around the jaws',
      'Grounding found well short of code once the old panel was opened',
      'Only half the house working after one leg failed at the drop',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in California',
        body: 'Our first visit to a dark house in California is spent testing, not replacing. We start at the weatherhead, check the mast and the cable to the meter base, then open the panel and measure every ground and bond, which tells us whether you need a mast repair, a fresh meter base or a new panel, and which permit to file. The fix includes grounding and bonding brought to current code, since that is on the inspector’s list. The inspection date is set the same day as the work date. Once the meter returns, we power up one circuit after another and hand you notes on anything to watch.',
      },
      {
        title: 'Red Tags and Utility Disconnects in California',
        body: 'People on this stretch of the river are often surprised to learn the meter box is theirs. The utility owns its wires and the meter, while the box, mast, weatherhead, riser and panel belong to the house, so the repair and any claim to your insurer are yours to start. When the utility hangs a red tag, nobody energises that service, and tidying the visible damage changes nothing. A licensed electrician has to correct the cause and an inspector has to approve it. Save the tag or hanger, which lists the reason. If the meter is locked or gone, leave it, as Ohio treats tampering with one as a crime.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in California',
        body: 'Between owners, or while an estate is settled, a house in California can go unlived-in for a long while, and we restart a long-dead service with care. A short inspection might be enough; a panel replacement is the other outcome, and we name it after looking. The original equipment and a correctly sized modern service cost the same labour, permit and inspection to install, so you get two prices side by side.',
      },
    ],
    whyTitle: 'Why Homeowners in California Choose Us for Disconnection Repair',
    whyParagraph:
      'Near the river, a house without its sump pump or heat can’t wait long, so a dead service gets emergency handling from us. Our licensed electricians fix the fault, pull the permit, walk the inspector through it and quote first.',
    sharedFaqs: [
      {
        q: 'How is a disconnection repair priced in California?',
        a: 'The failure sets it. Swapping a meter base alone is a far lighter day than rebuilding the service, so pricing follows the diagnosis. You then approve one written flat rate before work starts, and the utility’s charges never appear on our bill. Qualifying homeowners can use financing.',
      },
      {
        q: 'How long does a reconnect take in California?',
        a: 'Most of our repairs here take a single day. The dark stretch after that belongs to the inspector, and we don’t control that calendar. Requesting the inspection when you first call, rather than once we finish, keeps the wait as short as it can be.',
      },
      {
        q: 'Can I switch the power back on myself in California?',
        a: 'No. Meters and locks belong to the utility, and in Ohio interfering with them is a crime. Whatever caused the cut is also still in the panel or socket, so early power runs straight into it. The reconnect happens once the repair passes inspection, and not a moment before.',
      },
    ],
  },
};
