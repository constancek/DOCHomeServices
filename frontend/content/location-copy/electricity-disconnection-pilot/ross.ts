import type { LocationServiceCopy } from '@/components/LocationServicePage';

export const ross: LocationServiceCopy = {
  localParagraph:
    'A house in Ross with its meter pulled or locked will stay that way until our licensed electrician repairs the equipment you own and, nearly always, an inspector approves it, and only then does the utility put power back. Census figures show Ross is mostly detached houses, with a median build year of 1972. Fewer of them still run their first service, so storms, flash flooding and failed inspections on newer work bring most of our calls here. We diagnose first and quote in writing.',
  emergencyParagraph:
    'Without power, a house in Ross has no heat or cooling, and its sump pump sits dead, which gets more expensive by the day. Keep children and pets back from a meter box that has worked loose. For a downed line, ring 911 and then whichever utility serves you. Most of our calls get an electrician that day, weekends counted.',
  commonIntro:
    'Storms, floodwater and age each play a part in the disconnections we see around Ross:',
  localFaqs: [
    {
      q: 'Which utility reconnects a house in Ross?',
      a: 'It depends on the street. Butler Rural Electric Cooperative serves members in Ross Township, and Duke Energy Ohio serves parts of the area too. Either way, the meter box, mast, weatherhead, entrance cable and panel are yours, and the utility only disconnects and reconnects. We work with whichever one serves the address.',
    },
    {
      q: 'Can a panel be powered up after flooding in Ross?',
      a: 'Not until it has been checked. Flash flooding hit Ross Township in early March 2026, and a panel or meter base that was under water can’t be re-energized as it is. We find what the water reached and replace it, and the inspector signs off before the utility reconnects.',
    },
    {
      q: 'I rent a house in Ross and the power has been cut. What should I do?',
      a: 'Let the landlord know in writing and keep a dated copy and a photo of whatever notice was left. ORC 5321.04 puts the upkeep of the electrical systems a landlord supplied on the landlord in Ohio, so the owner arranges the work with us. Anything about the lease itself is between you and them.',
    },
  ],
  overrides: {
    ctaLine: 'Disconnection repair for houses in Ross and the surrounding township',
    band1Heading: 'Common Causes of Electricity Disconnection in Ross',
    commonSituations: [
      'A mast bent and a drop torn down when a tree came over in a storm',
      'A basement panel that took water in a flash flood and can’t be re-energized',
      'A garage or addition wired without a permit and caught at inspection',
      'Melted plastic around the meter socket on a house from the early 1970s',
    ],
    proseSections: [
      {
        title: 'Getting Your Power Reconnected in Ross',
        body: 'Most of the wait after a disconnection in Ross is the inspection, so we ask for it on the day you approve the job, then do the rest in this order. The whole service gets checked, weatherhead first and grounding last, which tells us if it’s a socket, a mast or a panel and which permit fits. Whatever failed is replaced, and the bonding is brought up to the code in force today. When the meter goes back, circuits return one by one rather than all at once, and you get written notes, for example on wiring old enough to plan a rewire.',
      },
      {
        title: 'Red Tags and Utility Disconnects in Ross',
        body: 'Around Ross, red tags tend to land after storm damage on the owner’s side, an unsafe panel, missing grounding or a job wired without a permit. The utility hangs one to forbid energizing, always with a reason. Tidying what you can see won’t lift it. A licensed electrician correcting the cause, followed by an inspector’s approval, does. Save the tag or hanger for us, as the reason is usually written there. A pulled or locked meter stays as found; in Ohio, breaking a meter lock or meddling with the meter is a crime, and doing it would energize a service already refused.',
      },
      {
        title: 'Vacant Homes and Service Upgrades in Ross',
        body: 'A house in Ross that stood empty for a long time, perhaps through a slow estate or a sale, gets a careful look before power goes back, as a long-dead service can hide trouble in the panel or grounding. A quick inspection may do, or a panel replacement may be needed, and we say which after we look. The labor, permit and inspection are much the same for refitting or upgrading, so you see both prices.',
      },
    ],
    whyTitle: 'Why Homeowners in Ross Choose Us for Disconnection Repair',
    whyParagraph:
      'Butler County winters make a dead service in Ross an emergency, because the furnace and the sump pump both stop. Licensed electricians do the repair your utility wants, take care of the permit and inspector, and set the price first.',
    sharedFaqs: [
      {
        q: 'What will a disconnection repair cost in Ross?',
        a: 'Mostly on what failed. A single meter socket is a modest bill; a whole service rebuilt after storm or flood damage is much larger. After we diagnose it, you approve one flat written figure before we begin, and the utility charges whatever it charges separately. Homeowners who qualify can finance.',
      },
      {
        q: 'How long will a house in Ross be without power?',
        a: 'In Ross, our part is commonly finished in one working day. The inspection is the slower piece, since the inspecting office sets its own timetable. Requesting it when you approve the work, not after, is the best lever we have on the length of an outage.',
      },
      {
        q: 'Can I switch the power back on myself in Ross?',
        a: 'No. If the meter was pulled or locked, only the utility puts it back, and tampering with it is a criminal offense in Ohio. The cut also followed a fault, so restoring power without the repair would send current through equipment still judged unsafe.',
      },
    ],
  },
};
