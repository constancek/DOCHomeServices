import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const monroe: LocationServiceCopy = {
  localParagraph:
    'In Monroe, a house built since 2000 usually loses its service to something outside, a limb through the drop, a car or trailer backed into the meter box, or to recent work that failed inspection. The utility won’t set the meter until our electrician has made the homeowner’s side right and the inspection is passed. Census figures put the median home here at 2001, more than half built since 2000, so an old panel is seldom the cause. You get a written price first.',
  emergencyParagraph:
    'When the service is cut in Monroe, the house loses heating or cooling and its sump pump in the same instant, and the damage builds daily. After a storm, give a meter box dangling from the siding a wide margin. A downed line means 911 first, then the utility. Same-day service covers most calls, weekends included.',
  commonIntro:
    'From the newer subdivisions off I-75 to the older core of Monroe, the power usually gets cut for one of these:',
  localFaqs: [
    {
      q: 'Who pays when a storm damages the service on a house in Monroe?',
      a: 'Everything from the weatherhead down through the mast, entrance cable and meter box into the panel is the homeowner’s, so storm damage there is an insurance question, not the utility’s. We can’t promise what a policy pays, but we photograph the damage, write up the repair price and take care of the permit and inspection.',
    },
    {
      q: 'Can recent work that failed inspection cut the power to a house in Monroe?',
      a: 'It can. If a basement finish or a new hot tub circuit went in without a permit, or failed inspection badly enough that the service was tagged, the meter stays out. We correct the work and the grounding with it, file the permit and line up the inspection alongside the repair, then the utility reconnects.',
    },
  ],
  overrides: {
    ctaLine: 'Reconnection repairs for newer and older houses in Monroe',
    band1Heading: 'Common Causes of Electricity Disconnection in Monroe',
    commonSituations: [
      'A mast bent back by a limb during a summer storm',
      'A vehicle backed into the meter box beside the garage',
      'A basement finish wired without a permit, caught at inspection',
      'A scorched meter socket on a 1970s house in the older part of town',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Monroe',
        body: 'A bent pipe or a crushed meter box is the visible part of a storm or car hit in Monroe; the rest can hide inside. Our electrician follows the service top to bottom, weatherhead to panel, and checks the ground and bond, since a hard knock shakes connections loose out of sight. The damaged parts are replaced, grounding is brought to what the inspector will ask for, and the permit and inspection are booked with the repair. Once the meter is set, power returns circuit by circuit, the panel is relabelled and you get our notes in writing.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Monroe',
        body: 'In Monroe, red tags mostly land on recent work that skipped the permit, a failed inspection or conductors torn open by storm damage. Whatever the reason, the tag forbids energising, and patching over the obvious problem won’t cancel it. A licensed electrician has to correct the cause, and the inspector has to pass it, before it comes off. Keep any tag or hanger, since it usually says why the meter was pulled. If there is a seal or lock on the meter, leave it there. Meter tampering is a criminal offence in Ohio, and on a faulted service it would energise gear the crew turned down.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Monroe',
        body: 'A house in Monroe that stood without power through a slow sale or a move still gets a once-over before the utility returns, and homes in the older core of town get a harder look at panel and ground. Many clear easily. Where gear must be replaced, a like-for-like refit and an upgrade matched to the house cost close to the same in trade time and paperwork, so we price both and you pick.',
      },
    ],
    whyTitle: 'Why Homeowners in Monroe Choose Us for Disconnection Repair',
    whyParagraph:
      'After a storm in Monroe, a house without service has no sump pump and no heating or cooling, so we treat it as urgent. Licensed electricians make the repair, handle the permit and inspector, and price it up front.',
    sharedFaqs: [
      {
        q: 'How much is disconnection repair in Monroe?',
        a: 'Straightening a storm-bent mast is a much smaller job than replacing a full service and panel, so what failed sets the price. We diagnose it, then give you one fixed figure on paper before work starts, and nothing the utility charges gets folded into ours. Qualifying homeowners can use financing.',
      },
      {
        q: 'How quickly can the power come back in Monroe?',
        a: 'Our work is usually finished inside a day. After that the inspector’s calendar decides things, so the inspection request goes in at the same moment the repair is booked. Doing it in that order is the most effective way anyone has to make the wait shorter.',
      },
      {
        q: 'Can I reconnect my own meter in Monroe?',
        a: 'No. Whatever lock sits on the meter is the utility’s, and Ohio law forbids tampering with it. The fault that triggered the disconnection is still in place as well, so early power would run through equipment already turned down. The repair and inspection come first, the reconnect after.',
      },
    ],
  },
};
