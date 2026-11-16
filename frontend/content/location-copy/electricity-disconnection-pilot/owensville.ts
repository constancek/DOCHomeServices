import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const owensville: LocationServiceCopy = {
  localParagraph:
    'In Owensville, the utility waits until our licensed electrician has fixed the owner’s side and, typically, an inspector has passed it before the meter goes back. Census figures date the median home in this Stonelick Township village to 1974, with half built in the 1960s and 1970s. Century-old panels are rare as a result, and a storm limb, a car into the meter or a failed inspection on recent wiring is the likelier cause. We look before we write down any price.',
  emergencyParagraph:
    'Since electric heat is the norm in Owensville, a dead service usually takes every bit of heat with it, plus the cooling and the sump pump. A meter box dangling from the siding is a hazard, so keep off. For wires on the ground, call 911 first and then your utility. Same-day help is usual here, weekends included.',
  commonIntro:
    'Across the village’s 1960s houses and its small apartment buildings, these are the usual reasons the utility pulls a meter in Owensville:',
  localFaqs: [
    {
      q: 'Who issues the electrical permit for this work in Owensville?',
      a: 'That’s Clermont County Building Inspection, whose permits in the village include electrical work. Our office files with the county, requests the inspection as soon as the repair is on the calendar, and our electrician meets the inspector on site, because the utility won’t reconnect without that approval. Emergency repairs can start before the filing, but it still gets filed.',
    },
    {
      q: 'What should renters in Owensville do when the power is cut?',
      a: 'Put the problem to your landlord on paper, keep a duplicate and snap the tag. Under ORC 5321.04, an Ohio landlord answers for the wiring and electrical fixtures they supplied staying safe and usable. The owner schedules and approves our repair; rent and lease issues sit outside our work.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repairs for village houses and apartments in Owensville',
    band1Heading: 'Common Causes of Electricity Disconnection in Owensville',
    commonSituations: [
      'A storm-felled limb that bent the mast and pried the meter box loose',
      'New wiring in a 1970s house that didn’t pass its electrical inspection',
      'Power in the kitchen but not the bedrooms after one service leg failed',
      'Melted plastic around one socket on a small apartment building’s meter bank',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Owensville',
        body: 'Your house is off already, so the first visit traces the service from the top down. We look at the weatherhead and mast, pull the meter base cover, open the panel and test the ground rod and bonding, and from that we can say whether the mast, the meter base or the panel is the repair. Any weak grounding is squared away to the current rules while we work, as the county inspector looks at it anyway. Our office asks for that inspection the day you approve. When the utility reinstalls the meter, breakers are switched back individually, and anything that needs a second look lands in a written report.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Owensville',
        body: 'In Owensville, storm damage, a failed inspection or wiring done without a permit are behind most tags we’re shown, though an unsafe panel or a missing ground still turns up. Either way the tag is a stop sign from the utility, and it doesn’t fall away once the obvious mess is cleared. Our licensed electrician corrects the cause, an inspector approves it, and only then does it lift. Whatever was hung on your door usually states the reason, so keep it handy. Pulled or locked meters stay as they are; tampering with one is a criminal offence in Ohio and would energise a faulted service.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Owensville',
        body: 'Most homes in Owensville are rented, so a unit that sat dark between tenants gets a careful check before we energise it, since its panel or grounding may trail current code. Sometimes that’s a quick inspection, sometimes a new panel, and you’ll know which once we’ve seen it. A refit of the old service and a properly sized new one carry the same labour, permit and inspection, so we price the two together.',
      },
    ],
    whyTitle: 'Why Homeowners and Landlords in Owensville Choose Us for Disconnection Repair',
    whyParagraph:
      'Most homes here run on electric heat, so a cut service soon means a cold house, and we respond fast. Licensed electricians clear the fault the utility named, handle the county permit and inspector, and agree the price before starting.',
    sharedFaqs: [
      {
        q: 'What does it cost to get power reconnected in Owensville?',
        a: 'The price follows the failure. Straightening a bent meter base and putting in a whole new service are far apart, so we diagnose, then hand over one flat figure in writing to approve before work. The utility’s charges stay off our invoice, and qualifying homeowners can use financing.',
      },
      {
        q: 'How long will my house in Owensville be without power?',
        a: 'Our side often wraps up in a single day. The county inspector’s calendar is the slow part, and we can’t move it, so we ask for the inspection when you approve the job rather than at the end. Nothing else we do brings your power back sooner.',
      },
      {
        q: 'Can I reconnect the power myself in Owensville?',
        a: 'No. You own the meter box, mast, weatherhead, entrance cable and panel, but disconnecting and reconnecting is the utility’s job alone, and so is removing a lock. Ohio treats meddling with a pulled or locked meter as a criminal offence, and the fault that caused the cut would still be in the house.',
      },
    ],
  },
};
