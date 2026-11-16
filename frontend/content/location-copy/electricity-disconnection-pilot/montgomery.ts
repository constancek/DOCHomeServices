import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const montgomery: LocationServiceCopy = {
  localParagraph:
    'When a house in Montgomery has sat empty for a long stretch, the utility may want the service checked before setting the meter, and nothing comes back on until the owner’s equipment is put right by one of our licensed electricians and signed off by the inspector. Census figures put the median home at 1976, and the 1970s were the busiest building decade here, so plenty of houses off Montgomery Road still have their first panel and grounding. You get a written price after we look.',
  emergencyParagraph:
    'Once the service is off, a house in Montgomery has no furnace or air conditioner and its sump pump sits idle, so each day costs more. Don’t stand close to a meter box that has sagged off the house. For a wire down, call 911 and Duke Energy first. Most calls get an electrician that day, including weekends.',
  commonIntro:
    'Along Montgomery Road and the 1970s streets around it, a disconnection usually comes from one of these:',
  localFaqs: [
    {
      q: 'Who issues the electrical permit for reconnection work in Montgomery?',
      a: 'In Montgomery, building permits come from the city’s Community Development Department, which contracts electrical plan review and inspections out to another agency. Cincinnati’s offices play no part, since Montgomery is its own city. We put the application together, file it and are there when the inspector arrives.',
    },
    {
      q: 'Does the utility or the homeowner own the meter box in Montgomery?',
      a: 'The meter is where ownership changes hands. The utility owns the incoming line and the meter itself; the box it plugs into is yours, which surprises nearly everyone, and so are the mast, weatherhead, riser, attachment hardware and panel. That puts the repair on you and storm damage to that equipment with your insurer.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for 1970s and older houses in Montgomery',
    band1Heading: 'Common Causes of Electricity Disconnection in Montgomery',
    commonSituations: [
      'A house left empty after an estate that now needs its service checked',
      'A 1970s meter socket that has run hot and scorched',
      'Original grounding that failed an inspection during a remodel',
      'A storm limb that pulled the drop away from the mast',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Montgomery',
        body: 'Once the utility has the meter, our electrician reads every piece of the service on a house in Montgomery, from the weatherhead and mast through the cable and meter base to the panel, ground and bond. That reading tells us if it’s a socket, a mast or a panel job, which in turn sets the permit. We correct the fault, bring the grounding up to what the inspector will check, and get the inspection booked along with the repair. When power comes back, it comes back breaker by breaker, the panel gets fresh labels and you get our notes on paper.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Montgomery',
        body: 'Tags on 1970s services in Montgomery usually come from an unsafe panel or missing grounding, sometimes from conductors a remodel left open. The tag means power stays off, full stop. Sweeping away what looks dangerous doesn’t remove it; fixing the actual cause does, once our licensed electrician has done the work and the inspector has signed. Keep the tag or hanger handy, as it normally spells out the reason. Whatever seal the utility put on the meter stays put. Interfering with metering equipment is a criminal offence in Ohio, and it would push current into a service already ruled unsafe.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Montgomery',
        body: 'Many houses in Montgomery still run on the service they got in the 1970s, and rebuilding that same setup means buying the labour and sign-off a second time before long. The bill for refitting old and installing a modern service matched to the house is close to identical, so we quote them together. An empty house gets inspected with care first, and it either passes as it is or needs a fresh panel, which you hear before we start.',
      },
    ],
    whyTitle: 'Why Homeowners in Montgomery Choose Us for Disconnection Repair',
    whyParagraph:
      'In Montgomery, losing the service stops the furnace and the sump pump, so we answer it as an emergency. Our licensed electricians do the repair the utility is waiting on, see the permit and inspector through, and quote before starting.',
    sharedFaqs: [
      {
        q: 'What does it cost to fix a disconnected service in Montgomery?',
        a: 'A burned socket on a 1970s house and a full replacement of the original service are very different days, so the failure sets the price. After we diagnose it you get a fixed figure in writing before work, with the utility’s charges kept off our invoice. Qualifying homeowners can finance.',
      },
      {
        q: 'How long does reconnecting a house take in Montgomery?',
        a: 'Our part is typically a single day. The inspection decides how long you wait, because the inspector’s diary isn’t ours, so we book that visit at the same time as the work. No other step takes as much time off the outage.',
      },
      {
        q: 'Can I put the meter back in myself in Montgomery?',
        a: 'No. The meter, plus any lock or seal, is the utility’s, and Ohio treats tampering with it as a criminal act. The service was cut because something was faulty, so forcing power back would energise equipment already ruled unsafe. The repair and inspection have to come before any reconnect.',
      },
    ],
  },
};
